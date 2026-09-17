#!/usr/bin/env node

/**
 * Bascule de compte dans le navigateur.
 *
 *   node scripts/switch-account.js            liste les comptes disponibles
 *   node scripts/switch-account.js owner      déconnecte puis reconnecte sur « owner »
 *
 * Les identifiants vivent dans `scripts/accounts.json`, à copier depuis
 * `scripts/accounts.example.json`. Ce fichier et le profil navigateur sont ignorés par git :
 * rien ne part sur le serveur.
 *
 * Pilote Brave par le DevTools Protocol, sans aucune dépendance : Node 22 fournit `WebSocket`.
 * Brave, parce que c'est lui qui porte l'extension Claude in Chrome : installez-la une fois
 * dans le profil dédié `scripts/.browser-profile` et Claude travaillera dans l'onglet même que
 * ce script vient de connecter.
 *
 * Tests : `node --test scripts/switch-account.test.js`
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CONFIG_PATH = path.join(__dirname, 'accounts.json');
/**
 * Un profil dédié n'est pas un choix : depuis Chromium 136, Brave ignore `--remote-debugging-port`
 * sur le profil par défaut. Le Brave quotidien reste donc hors d'atteinte.
 */
const PROFILE_DIR = path.join(__dirname, '.browser-profile');
const DEBUG_PORT = 9222;

/** Brave doit rendre la main avant qu'on lui parle ; au-delà, c'est qu'il ne démarrera pas. */
const BROWSER_BOOT_TIMEOUT = 20000;
/** Auth0 puis l'app : deux redirections réseau, on laisse le temps au plus lent des deux. */
const NAVIGATION_TIMEOUT = 30000;

/* ------------------------------------------------------------------ configuration */

function readConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    fail(
      `Aucun fichier d'identifiants.\n` +
        `  Copiez scripts/accounts.example.json vers scripts/accounts.json et renseignez-le.`,
    );
  }

  let config;
  try {
    config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  } catch (error) {
    fail(`scripts/accounts.json est illisible : ${error.message}`);
  }

  const missing = ['appUrl', 'auth0Domain', 'auth0ClientId', 'accounts'].filter(
    (key) => !config[key],
  );
  if (missing.length > 0) {
    fail(`scripts/accounts.json : clés manquantes -> ${missing.join(', ')}`);
  }

  return config;
}

function resolveAccount(config, alias) {
  const aliases = Object.keys(config.accounts);

  if (!alias) {
    console.log('Comptes disponibles :');
    aliases.forEach((name) => console.log(`  ${name}  (${config.accounts[name].email})`));
    console.log('\nUsage : node scripts/switch-account.js <alias>');
    process.exit(0);
  }

  const account = config.accounts[alias];
  if (!account) {
    fail(`Compte « ${alias} » inconnu. Disponibles : ${aliases.join(', ')}`);
  }
  if (!account.email || !account.password) {
    fail(`Le compte « ${alias} » doit porter un « email » et un « password ».`);
  }

  return account;
}

/* ------------------------------------------------------------------------- Brave */

const BROWSER_CANDIDATES = [
  'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  'C:\\Program Files (x86)\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
  path.join(process.env.LOCALAPPDATA ?? '', 'BraveSoftware\\Brave-Browser\\Application\\brave.exe'),
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/usr/bin/brave-browser',
  '/usr/bin/brave',
];

export function findBrowser(configured, exists = fs.existsSync) {
  const candidates = configured ? [configured, ...BROWSER_CANDIDATES] : BROWSER_CANDIDATES;
  const found = candidates.find((candidate) => candidate && exists(candidate));

  if (!found) {
    throw new Error(
      `Brave introuvable.\n` +
        `  Renseignez « browserPath » dans scripts/accounts.json avec le chemin de l'exécutable.`,
    );
  }

  return found;
}

async function debuggerEndpoint() {
  try {
    const response = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
    return (await response.json()).webSocketDebuggerUrl;
  } catch {
    return null;
  }
}

/** Réutilise une instance déjà ouverte en mode debug, sinon en démarre une. */
async function startBrowser(config) {
  const running = await debuggerEndpoint();
  if (running) {
    console.log('→ Brave déjà ouvert en mode debug, on s\'y raccroche.');
    return running;
  }

  const browser = findBrowser(config.browserPath);
  console.log(`→ Démarrage de Brave (${path.basename(browser)})`);

  if (!fs.existsSync(PROFILE_DIR)) {
    console.log(
      '   Profil neuf : installez-y l\'extension Claude in Chrome (une seule fois)\n' +
        '   pour que Claude pilote le même onglet que ce script.',
    );
  }

  spawn(
    browser,
    [
      `--remote-debugging-port=${DEBUG_PORT}`,
      `--user-data-dir=${PROFILE_DIR}`,
      '--no-first-run',
      '--no-default-browser-check',
      'about:blank',
    ],
    { detached: true, stdio: 'ignore' },
  ).unref();

  const deadline = Date.now() + BROWSER_BOOT_TIMEOUT;
  while (Date.now() < deadline) {
    const endpoint = await debuggerEndpoint();
    if (endpoint) return endpoint;
    await delay(200);
  }

  fail(`Brave n'a pas ouvert son port de debug (${DEBUG_PORT}) dans les temps.`);
}

/* --------------------------------------------------------- DevTools Protocol */

/** Une connexion CDP : un seul socket, les sessions d'onglet distinguées par `sessionId`. */
class Cdp {
  #socket;
  #nextId = 1;
  #pending = new Map();
  #waiters = [];

  static connect(url) {
    return new Promise((resolve, reject) => {
      const socket = new WebSocket(url);
      const cdp = new Cdp(socket);
      socket.addEventListener('open', () => resolve(cdp));
      socket.addEventListener('error', () => reject(new Error('Connexion CDP impossible.')));
    });
  }

  constructor(socket) {
    this.#socket = socket;
    socket.addEventListener('message', (event) => this.#dispatch(JSON.parse(event.data)));
  }

  #dispatch(message) {
    if (message.id !== undefined) {
      const pending = this.#pending.get(message.id);
      if (!pending) return;
      this.#pending.delete(message.id);
      message.error ? pending.reject(new Error(message.error.message)) : pending.resolve(message.result);
      return;
    }

    this.#waiters = this.#waiters.filter((waiter) => {
      if (waiter.method !== message.method) return true;
      waiter.resolve(message.params);
      return false;
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.#nextId++;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { reject, resolve });
      this.#socket.send(JSON.stringify(sessionId ? { id, method, params, sessionId } : { id, method, params }));
    });
  }

  /** À appeler *avant* l'action qui déclenche l'événement, sinon la course est perdue. */
  once(method) {
    return new Promise((resolve) => this.#waiters.push({ method, resolve }));
  }

  close() {
    this.#socket.close();
  }
}

/* ------------------------------------------------------------------ pilotage page */

/**
 * L'onglet déjà sur l'app est celui que Claude in Chrome a ouvert : on le pilote plutôt que
 * d'en empiler un nouveau. À défaut, n'importe quel onglet du profil fait l'affaire, la session
 * étant commune à tous. `null` s'il n'y a aucun onglet.
 */
export function pickTarget(targets, appUrl) {
  const origin = new URL(appUrl).origin;
  const sameOrigin = (url) => {
    try {
      return new URL(url).origin === origin;
    } catch {
      return false;
    }
  };

  const pages = targets.filter((target) => target.type === 'page');
  return pages.find((page) => sameOrigin(page.url)) ?? pages[0] ?? null;
}

class Page {
  constructor(cdp, sessionId) {
    this.cdp = cdp;
    this.sessionId = sessionId;
  }

  /** Reprend l'onglet de l'app s'il existe, sinon en ouvre un. */
  static async reuseOrOpen(cdp, appUrl) {
    const { targetInfos } = await cdp.send('Target.getTargets');
    const existing = pickTarget(targetInfos, appUrl);
    if (existing) return Page.attach(cdp, existing.targetId);

    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    return Page.attach(cdp, targetId);
  }

  static async attach(cdp, targetId) {
    const { sessionId } = await cdp.send('Target.attachToTarget', { flatten: true, targetId });
    const page = new Page(cdp, sessionId);
    await page.cdp.send('Page.enable', {}, sessionId);
    await page.cdp.send('Runtime.enable', {}, sessionId);
    await page.cdp.send('Page.bringToFront', {}, sessionId);
    return page;
  }

  /**
   * On attend le DOM, pas l'événement `load` : les scripts tiers (consentement, tag manager)
   * le retardent sans fin alors que l'application est déjà utilisable.
   */
  async goto(url) {
    const { errorText } = await this.cdp.send('Page.navigate', { url }, this.sessionId);
    if (errorText) fail(`Navigation vers ${url} refusée : ${errorText}`);

    const deadline = Date.now() + NAVIGATION_TIMEOUT;
    while (Date.now() < deadline) {
      // Pendant la bascule de document, l'évaluation échoue : c'est attendu, on repasse.
      const state = await this.evaluate('document.readyState').catch(() => null);
      if (state === 'interactive' || state === 'complete') return;
      await delay(150);
    }

    fail(`Chargement de ${url} trop long.`);
  }

  async evaluate(expression) {
    const result = await this.cdp.send(
      'Runtime.evaluate',
      { awaitPromise: true, expression, returnByValue: true },
      this.sessionId,
    );
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.exception?.description ?? 'Évaluation en échec.');
    }
    return result.result.value;
  }

  url() {
    return this.evaluate('location.href');
  }

  /** Rend le premier sélecteur présent à l'écran, ou `null` si aucun n'apparaît à temps. */
  async waitForAny(selectors, timeout = NAVIGATION_TIMEOUT) {
    const deadline = Date.now() + timeout;
    const list = JSON.stringify(selectors);

    while (Date.now() < deadline) {
      const found = await this.evaluate(`(() => {
        const visible = el => el && el.offsetParent !== null && !el.disabled;
        return ${list}.find(sel => visible(document.querySelector(sel))) ?? null;
      })()`);
      if (found) return found;
      await delay(150);
    }

    return null;
  }

  /** Saisit comme un humain : le focus puis de vrais événements clavier, qu'Auth0 valide. */
  async fill(selector, text) {
    await this.evaluate(`(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      el.focus();
      el.value = '';
    })()`);
    await this.cdp.send('Input.insertText', { text }, this.sessionId);
    await this.evaluate(`(() => {
      const el = document.querySelector(${JSON.stringify(selector)});
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    })()`);
  }

  async click(selector) {
    await this.evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
  }
}

/* --------------------------------------------------------------------- scénario */

const EMAIL_SELECTORS = [
  'input#username',
  'input[name="username"]',
  'input[name="email"]',
  'input[type="email"]',
];
const PASSWORD_SELECTORS = ['input#password', 'input[name="password"]', 'input[type="password"]'];
const SUBMIT_SELECTORS = [
  'button[type="submit"][name="action"]',
  'button[data-action-button-primary="true"]',
  'button[type="submit"]',
  'input[type="submit"]',
];

/** Vide le cache Auth0, qui vit dans le localStorage de l'app (`cacheLocation: 'localstorage'`). */
async function clearAppSession(page, appUrl) {
  console.log('→ Purge de la session locale');
  await page.goto(appUrl);
  await page.evaluate('localStorage.clear(); sessionStorage.clear(); true');
}

/** Coupe la session SSO côté Auth0 : sans ça, la reconnexion repasserait en silence sur le même compte. */
async function clearAuth0Session(page, config) {
  console.log('→ Déconnexion Auth0');
  const logoutUrl = new URL(`https://${config.auth0Domain}/v2/logout`);
  logoutUrl.searchParams.set('client_id', config.auth0ClientId);
  logoutUrl.searchParams.set('returnTo', config.logoutReturnTo ?? config.appUrl);

  await page.goto(logoutUrl.toString());
}

async function login(page, config, account) {
  console.log(`→ Connexion de ${account.email}`);
  await page.goto(`${config.appUrl.replace(/\/$/, '')}/login`);

  const emailField = await page.waitForAny(EMAIL_SELECTORS);
  if (!emailField) {
    fail(
      `Le formulaire Auth0 ne s'est pas affiché (page : ${await page.url()}).\n` +
        `  Vérifiez que « appUrl » pointe sur une app qui tourne.`,
    );
  }
  await page.fill(emailField, account.email);

  // Auth0 sert deux gabarits : identifiant et mot de passe ensemble, ou en deux écrans.
  let passwordField = await page.waitForAny(PASSWORD_SELECTORS, 1000);
  if (!passwordField) {
    await page.click(await page.waitForAny(SUBMIT_SELECTORS));
    passwordField = await page.waitForAny(PASSWORD_SELECTORS);
    if (!passwordField) fail("L'écran de mot de passe n'est jamais apparu.");
  }
  await page.fill(passwordField, account.password);

  const submit = await page.waitForAny(SUBMIT_SELECTORS);
  if (!submit) fail('Bouton de validation introuvable sur le formulaire Auth0.');

  const before = await page.url();
  await page.click(submit);

  // Auth0 ne « rend la main » que par un changement d'URL : ni load ni readyState ne suffisent.
  const deadline = Date.now() + NAVIGATION_TIMEOUT;
  while (Date.now() < deadline) {
    const current = await page.url().catch(() => before);
    if (current !== before) return;
    await delay(200);
  }

  fail('Auth0 ne rend pas la main après validation.');
}

/** Le jeton Auth0 en localStorage est la seule preuve que la session est réellement ouverte. */
async function confirmLogin(page, config) {
  const deadline = Date.now() + NAVIGATION_TIMEOUT;
  const origin = new URL(config.appUrl).origin;

  while (Date.now() < deadline) {
    const current = await page.url();
    if (current.startsWith(origin)) {
      const authenticated = await page.evaluate(
        `Object.keys(localStorage).some(k => k.includes('auth0'))`,
      );
      if (authenticated) return true;
    }
    await delay(300);
  }

  return false;
}

/* ------------------------------------------------------------------------ outils */

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    delay(ms).then(() => {
      throw new Error(message);
    }),
  ]);
}

function fail(message) {
  console.error(`\n❌ ${message}\n`);
  process.exit(1);
}

/* -------------------------------------------------------------------------- main */

async function main() {
  const config = readConfig();
  const alias = process.argv[2];
  const account = resolveAccount(config, alias);

  const endpoint = await startBrowser(config);
  const cdp = await Cdp.connect(endpoint);
  const page = await Page.reuseOrOpen(cdp, config.appUrl);

  try {
    await clearAppSession(page, config.appUrl);
    await clearAuth0Session(page, config);
    await login(page, config, account);

    if (await confirmLogin(page, config)) {
      console.log(`\n✅ Connecté en tant que ${account.email} (${alias}).`);
      console.log('   L\'onglet reste ouvert, le profil est conservé pour la prochaine fois.');
    } else {
      fail(
        `La connexion n'a pas abouti (page : ${await page.url()}).\n` +
          `  Identifiants erronés, ou MFA à valider à la main dans la fenêtre ouverte.`,
      );
    }
  } finally {
    cdp.close();
  }
}

/**
 * Lancé en ligne de commande seulement : importé par les tests, le module reste inerte.
 * `scripts/` étant un lien symbolique, Node a déjà résolu `import.meta.url` vers le chemin réel.
 */
const isEntryPoint =
  process.argv[1] && pathToFileURL(fs.realpathSync(process.argv[1])).href === import.meta.url;

if (isEntryPoint) {
  main().catch((error) => fail(error.message));
}
