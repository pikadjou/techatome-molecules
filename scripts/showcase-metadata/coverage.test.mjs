import assert from "node:assert/strict";
import { test } from "node:test";

import { buildApi, buildDemos } from "./build.mjs";

// Le troisième test que prévoyait le brief original de cette tâche — « chaque
// démo écrite est enregistrée dans le registre » — n'a plus d'objet : depuis
// la refonte qui a fait de `registry.ts` un fichier généré, `buildDemos()`
// construit `registryRows` en énumérant lui-même les fichiers `*.demo.ts` sur
// le disque, une ligne par fichier. Une démo « écrite mais non enregistrée »
// ne peut plus exister. Ce que `buildRegistry` peut encore refuser — un
// identifiant sans composant public, un `group` absent ou hors vocabulaire —
// est déjà couvert par build.test.mjs (voir son commentaire à ce sujet).

test("chaque composant public a une démo", () => {
  const { entries } = buildApi();
  const { index } = buildDemos();

  const missing = entries
    .filter((entry) => entry.kind === "component" && !index[entry.id])
    .map((entry) => entry.id);

  assert.deepEqual(missing, []);
});

test("chaque démo enregistrée correspond à un composant existant", () => {
  const { entries } = buildApi();
  const { index } = buildDemos();

  const known = new Set(entries.map((entry) => entry.id));
  const orphans = Object.keys(index).filter((id) => !known.has(id));

  assert.deepEqual(orphans, []);
});
