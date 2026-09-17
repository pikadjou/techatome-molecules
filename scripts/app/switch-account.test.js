import assert from 'node:assert/strict';
import { test } from 'node:test';

import { findBrowser, pickTarget } from './switch-account.js';

const APP_URL = 'http://localhost:4200';

const page = (url, targetId = url) => ({ targetId, type: 'page', url });

test('pickTarget pilote l\'onglet déjà ouvert sur l\'app plutôt que le premier venu', () => {
  const targets = [page('about:blank', 'blank'), page('http://localhost:4200/estates', 'app')];

  assert.equal(pickTarget(targets, APP_URL).targetId, 'app');
});

test('pickTarget distingue les origines : localhost:42000 n\'est pas localhost:4200', () => {
  const targets = [page('about:blank', 'blank'), page('http://localhost:42000/', 'other')];

  assert.equal(pickTarget(targets, APP_URL).targetId, 'blank');
});

test('pickTarget ignore les cibles qui ne sont pas des onglets (extensions, workers)', () => {
  const targets = [
    { targetId: 'sw', type: 'service_worker', url: 'chrome-extension://abc/background.js' },
    page('about:blank', 'blank'),
  ];

  assert.equal(pickTarget(targets, APP_URL).targetId, 'blank');
});

test('pickTarget rend null quand aucun onglet n\'existe', () => {
  assert.equal(pickTarget([], APP_URL), null);
});

test('findBrowser résout Brave, jamais Chrome', () => {
  const exists = (candidate) => /brave|chrome/i.test(candidate);

  assert.match(findBrowser(undefined, exists), /brave/i);
});

test('findBrowser préfère le chemin configuré dans accounts.json', () => {
  const configured = 'D:\\Portable\\brave.exe';

  assert.equal(findBrowser(configured, (candidate) => candidate === configured), configured);
});

test('findBrowser explique comment configurer « browserPath » quand Brave est introuvable', () => {
  assert.throws(() => findBrowser(undefined, () => false), /browserPath/);
});
