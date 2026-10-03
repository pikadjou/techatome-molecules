import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

import { collectAllSources, collectPublicFiles, listPackages, REPO_ROOT } from "./packages.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

test("listPackages ne retient que les paquets @ta/* présents sur le disque", () => {
  const names = listPackages().map((p) => p.name);

  assert.ok(names.includes("@ta/ui"), "@ta/ui doit être listé");
  assert.ok(names.includes("@ta/form-input"), "@ta/form-input doit être listé");
  // Déclaré dans tsconfig.json mais absent du disque et de git.
  assert.ok(!names.includes("@ta/calendar"), "@ta/calendar ne doit pas être listé");
  // Entrée de sous-chemin, pas un paquet.
  assert.ok(!names.includes("@ta/testing/e2e"), "les sous-chemins sont écartés");
  // Outillage sans runtime documentable.
  assert.ok(!names.includes("@ta/eslint-config"), "l'outillage est écarté");
});

test("listPackages expose un nom court utilisable en segment de route", () => {
  const ui = listPackages().find((p) => p.name === "@ta/ui");

  assert.equal(ui.short, "ui");
  assert.equal(ui.publicApi, path.join(REPO_ROOT, "projects", "ui", "src", "public-api.ts"));
});

test("collectAllSources écarte mocks, specs et stories", () => {
  const ui = listPackages().find((p) => p.name === "@ta/ui");

  const files = collectAllSources(ui.dir);

  assert.ok(files.length > 0, "des sources doivent être trouvées");
  // Le dépôt écrit `__mock__` au singulier dans trois paquets et `__mocks__` au
  // pluriel dans @ta/ui : les deux graphies doivent être écartées.
  assert.equal(
    files.filter((f) => f.includes("__mocks__") || f.includes("__mock__")).length,
    0,
    "aucun fichier de mock ne doit être indexé"
  );
  assert.equal(
    files.filter((f) => /\.(spec|stories)\.ts$/.test(f)).length,
    0,
    "ni fichier de test ni story"
  );
});

test("collectPublicFiles suit `export *` et `export { }`", () => {
  const entry = path.join(HERE, "__fixtures__", "barrel", "public-api.ts");

  const files = collectPublicFiles(entry).map((f) => path.relative(path.dirname(entry), f));

  assert.deepEqual(files.sort(), [
    "alpha.ts",
    "public-api.ts",
    path.join("sub", "beta.ts"),
    path.join("sub", "public-api.ts"),
  ].sort());
});
