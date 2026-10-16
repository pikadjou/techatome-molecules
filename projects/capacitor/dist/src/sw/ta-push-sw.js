/*
 * Service worker Web Push partagé (@ta/capacitor).
 *
 * À importer depuis le service worker de l'application, après `ngsw-worker.js` et après avoir
 * posé la configuration sur `self.taPush` :
 *
 *   importScripts('./ngsw-worker.js');
 *   self.taPush = {
 *     appName: 'Bailo',                                   // titre de repli
 *     icon: '/icons/icon-192x192.png',
 *     defaultLanguage: 'fr',
 *     i18nUrl: lang => `/assets/i18n/app/${lang}.json`,  // JSON plat { "clé": "texte {{param}}" }
 *     titleKey: key => `app.notifications.card.title.${key}`,
 *     bodyKey: key => `app.notifications.card.description.${key}`,
 *     fallbackBodyKey: 'app.push.fallback.body',          // facultatif
 *     clickUrl: id => `/notifications/list?fromNotification=${id}`,
 *   };
 *   importScripts('./ta-sw/ta-push-sw.js');
 *
 * Le serveur n'envoie que `{ notificationId, key, metadata, createdAt }` : le texte est rendu ici
 * avec les traductions de l'application. Une notification est affichée à chaque push, sans
 * exception (iOS révoque l'abonnement sinon), avec un texte de repli quand tout manque.
 * La langue est lue dans IndexedDB (`ta-web-push` / `settings` / `lang`), écrite par la page.
 */
(function () {
  'use strict';

  var DB_NAME = 'ta-web-push';
  var STORE_NAME = 'settings';
  var LANGUAGE_KEY = 'lang';
  var MESSAGE_RECEIVED = 'ta-push:received';
  var MESSAGE_NAVIGATE = 'ta-push:navigate';
  var FALLBACK_BODY = {
    de: 'Sie haben eine neue Benachrichtigung',
    en: 'You have a new notification',
    fr: 'Vous avez une nouvelle notification',
    nl: 'U heeft een nieuwe melding',
  };

  var config = self.taPush || {};
  var appName = config.appName || 'Application';
  var defaultLanguage = config.defaultLanguage || 'fr';

  function readLanguage() {
    return new Promise(function (resolve) {
      var fallback = function () {
        var browser = (self.navigator && self.navigator.language ? self.navigator.language : '').split('-')[0];
        resolve(browser || defaultLanguage);
      };
      if (typeof indexedDB === 'undefined') {
        fallback();
        return;
      }
      try {
        var request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = function () {
          if (!request.result.objectStoreNames.contains(STORE_NAME)) {
            request.result.createObjectStore(STORE_NAME);
          }
        };
        request.onerror = fallback;
        request.onblocked = fallback;
        request.onsuccess = function () {
          try {
            var db = request.result;
            var get = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(LANGUAGE_KEY);
            get.onsuccess = function () {
              db.close();
              if (typeof get.result === 'string' && get.result) {
                resolve(get.result);
              } else {
                fallback();
              }
            };
            get.onerror = function () {
              db.close();
              fallback();
            };
          } catch (e) {
            fallback();
          }
        };
      } catch (e) {
        fallback();
      }
    });
  }

  function loadI18n(lang) {
    if (typeof config.i18nUrl !== 'function') {
      return Promise.resolve({});
    }
    var url = config.i18nUrl(lang);
    var fromNetwork = function () {
      return fetch(url).then(function (response) {
        return response.ok ? response.json() : {};
      });
    };
    var fromCache = typeof caches === 'undefined' ? Promise.resolve(null) : caches.match(url);
    return fromCache
      .then(function (cached) {
        return cached ? cached.json() : fromNetwork();
      })
      .catch(fromNetwork)
      .catch(function () {
        return {};
      });
  }

  function camelCase(name) {
    return name ? name.charAt(0).toLowerCase() + name.slice(1) : name;
  }

  function formatDate(value, lang) {
    var time = Date.parse(value);
    if (isNaN(time)) {
      return value;
    }
    try {
      return new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeStyle: 'short' }).format(new Date(time));
    } catch (e) {
      return new Date(time).toLocaleString();
    }
  }

  function formatAmount(value, lang) {
    var amount = Number(value);
    if (isNaN(amount)) {
      return value;
    }
    try {
      return new Intl.NumberFormat(lang, { currency: 'EUR', style: 'currency', maximumFractionDigits: 0 }).format(
        amount
      );
    } catch (e) {
      return amount + ' €';
    }
  }

  /** Les métadonnées du serveur (PascalCase, chaînes) → paramètres d'interpolation (camelCase, formatés). */
  function toParams(metadata, lang) {
    var params = {};
    if (!metadata || typeof metadata !== 'object') {
      return params;
    }
    // Le push livre un objet { Clé: valeur } ; la liste in-app [{ key, value }] est acceptée aussi.
    var entries = {};
    if (Array.isArray(metadata)) {
      metadata.forEach(function (item) {
        if (item && typeof item.key === 'string') {
          entries[item.key] = item.value;
        }
      });
    } else {
      entries = metadata;
    }
    Object.keys(entries).forEach(function (name) {
      var raw = entries[name];
      var value = raw == null ? '' : String(raw);
      if (/At$/.test(name)) {
        value = formatDate(value, lang);
      } else if (/MonthlyCost$/.test(name)) {
        value = formatAmount(value, lang);
      }
      params[camelCase(name)] = value;
      params[name] = value;
    });
    return params;
  }

  function interpolate(text, params) {
    return String(text).replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (match, name) {
      return Object.prototype.hasOwnProperty.call(params, name) ? params[name] : '';
    });
  }

  function fallbackBody(i18n, lang) {
    var key = config.fallbackBodyKey;
    if (key && i18n && typeof i18n[key] === 'string') {
      return i18n[key];
    }
    return FALLBACK_BODY[lang] || FALLBACK_BODY[defaultLanguage] || FALLBACK_BODY.fr;
  }

  /** Ne lève jamais : clé inconnue, traduction manquante ou variable absente → texte de repli. */
  function renderText(payload, i18n, lang) {
    var title = appName;
    var body = fallbackBody(i18n, lang);
    try {
      var key = payload && typeof payload.key === 'string' ? payload.key : null;
      if (key && i18n) {
        var params = toParams(payload.metadata, lang);
        var titleText = typeof config.titleKey === 'function' ? i18n[config.titleKey(key)] : null;
        var bodyText = typeof config.bodyKey === 'function' ? i18n[config.bodyKey(key)] : null;
        if (typeof titleText === 'string' && titleText) {
          title = interpolate(titleText, params).trim() || appName;
        }
        if (typeof bodyText === 'string' && bodyText) {
          body = interpolate(bodyText, params).trim() || body;
        }
      }
    } catch (e) {
      title = appName;
      body = fallbackBody(i18n, lang);
    }
    return { title: title, body: body };
  }

  function parsePayload(event) {
    try {
      return event.data ? event.data.json() : null;
    } catch (e) {
      return null;
    }
  }

  function broadcast(message) {
    return self.clients
      .matchAll({ includeUncontrolled: true, type: 'window' })
      .then(function (windows) {
        windows.forEach(function (client) {
          client.postMessage(message);
        });
      })
      .catch(function () {});
  }

  function showNotification(event) {
    var payload = parsePayload(event);
    var notificationId = payload && payload.notificationId ? String(payload.notificationId) : null;
    return readLanguage()
      .then(function (lang) {
        return loadI18n(lang).then(function (i18n) {
          return renderText(payload, i18n, lang);
        });
      })
      .catch(function () {
        return { title: appName, body: FALLBACK_BODY[defaultLanguage] || FALLBACK_BODY.fr };
      })
      .then(function (text) {
        var options = {
          body: text.body,
          data: payload,
          icon: config.icon,
          tag: notificationId || undefined,
        };
        if (config.badge) {
          options.badge = config.badge;
        }
        var created = payload && payload.createdAt ? Date.parse(payload.createdAt) : NaN;
        if (!isNaN(created)) {
          options.timestamp = created;
        }
        return self.registration.showNotification(text.title, options);
      })
      .then(function () {
        return broadcast({ notificationId: notificationId, type: MESSAGE_RECEIVED });
      });
  }

  function focusOrOpen(url) {
    return self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(function (windows) {
      var existing = null;
      for (var i = 0; i < windows.length; i++) {
        try {
          if (new URL(windows[i].url).origin === self.location.origin) {
            existing = windows[i];
            break;
          }
        } catch (e) {
          /* URL opaque : on passe */
        }
      }
      if (!existing) {
        return self.clients.openWindow ? self.clients.openWindow(url) : null;
      }
      return Promise.resolve(existing.focus ? existing.focus() : existing).then(function () {
        existing.postMessage({ type: MESSAGE_NAVIGATE, url: url });
      });
    });
  }

  self.addEventListener('push', function (event) {
    event.waitUntil(showNotification(event));
  });

  self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var payload = event.notification.data || {};
    var id = payload.notificationId ? String(payload.notificationId) : null;
    var path = typeof config.clickUrl === 'function' ? config.clickUrl(id) : '/';
    var url = new URL(path || '/', self.location.origin).href;
    event.waitUntil(focusOrOpen(url));
  });

  // Exposé pour les tests et le débogage (`self.taPushInternals.renderText(...)` dans la console du worker).
  self.taPushInternals = { interpolate: interpolate, renderText: renderText, toParams: toParams };
})();
