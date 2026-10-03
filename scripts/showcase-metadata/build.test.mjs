import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";

import { buildApi, buildDemos, buildRegistry, relative } from "./build.mjs";
import { listPackages, REPO_ROOT } from "./packages.mjs";

test("chaque entrée porte le paquet de son propre fichier", () => {
  const prefixes = new Map(listPackages().map((p) => [p.name, `${relative(p.dir)}/`]));
  const { entries } = buildApi();

  const mismatches = entries.filter((e) => !e.file.startsWith(prefixes.get(e.pkg) ?? "\0"));

  assert.deepEqual(
    mismatches.map((e) => `${e.id}: ${e.pkg} au lieu de ${e.file}`),
    []
  );
});

test("aucun identifiant n'est attribué deux fois", () => {
  const { entries } = buildApi();
  const ids = entries.map((e) => e.id);

  assert.equal(new Set(ids).size, ids.length);
});

// `buildRegistry` remplace la vérification qu'assurait `readRegistryIds()` :
// registry.ts n'étant plus écrit à la main, une démo écrite mais « non
// enregistrée » ne peut plus exister — le registre est justement construit à
// partir des démos trouvées sur le disque. Ce qui peut encore casser, une
// fois `pkg` déduit de `TA_API` plutôt que du répertoire : un identifiant de
// démo sans composant public correspondant, ou un chemin de chargement mal
// reconstruit. Les tests suivants couvrent ces deux risques.

test("chaque entrée du registre généré pointe vers un fichier de démo qui existe", () => {
  const { entries } = buildApi();
  const { registryRows } = buildDemos();
  const registry = buildRegistry(entries, registryRows);

  const missingFiles = registry
    .map((entry) => path.join(REPO_ROOT, "src", "app", "showcase", "demos", entry.short, `${entry.id}.demo.ts`))
    .filter((file) => !fs.existsSync(file));

  assert.deepEqual(missingFiles, []);
});

test("chaque entrée du registre généré porte le pkg de TA_API, pas une supposition sur le répertoire", () => {
  const { entries } = buildApi();
  const { registryRows } = buildDemos();
  const registry = buildRegistry(entries, registryRows);

  const apiById = new Map(entries.map((e) => [e.id, e]));
  const mismatches = registry.filter((entry) => entry.pkg !== apiById.get(entry.id)?.pkg);

  assert.deepEqual(mismatches, []);
});

test("le registre généré reste trié par paquet puis par identifiant", () => {
  const { entries } = buildApi();
  const { registryRows } = buildDemos();
  const registry = buildRegistry(entries, registryRows);

  const sorted = [...registry].sort((a, b) => a.pkg.localeCompare(b.pkg) || a.id.localeCompare(b.id));

  assert.deepEqual(
    registry.map((e) => `${e.pkg}::${e.id}`),
    sorted.map((e) => `${e.pkg}::${e.id}`)
  );
});

test("buildRegistry refuse une démo dont l'identifiant est absent de l'API publique", () => {
  const apiEntries = [{ id: "ta-existe", pkg: "@ta/ui", className: "X" }];
  const registryRows = [{ id: "ta-fantome", short: "ui", group: "Bases", file: "fantome.demo.ts" }];

  assert.throws(() => buildRegistry(apiEntries, registryRows), /ta-fantome.*introuvable.*API publique/s);
});

test("buildRegistry refuse une démo sans group", () => {
  const apiEntries = [{ id: "ta-x", pkg: "@ta/ui", className: "X" }];
  const registryRows = [{ id: "ta-x", short: "ui", group: undefined, file: "x.demo.ts" }];

  assert.throws(() => buildRegistry(apiEntries, registryRows), /group est obligatoire/);
});

test("buildRegistry refuse un group hors du vocabulaire autorisé pour le paquet", () => {
  const apiEntries = [{ id: "ta-x", pkg: "@ta/ui", className: "X" }];
  const registryRows = [{ id: "ta-x", short: "ui", group: "Boutonss", file: "x.demo.ts" }];

  assert.throws(() => buildRegistry(apiEntries, registryRows), /vocabulaire autorisé pour @ta\/ui/);
});

test("buildRegistry refuse un paquet sans groupes autorisés déclarés", () => {
  const apiEntries = [{ id: "ta-x", pkg: "@ta/inconnu", className: "X" }];
  const registryRows = [{ id: "ta-x", short: "inconnu", group: "Quelconque", file: "x.demo.ts" }];

  assert.throws(() => buildRegistry(apiEntries, registryRows), /ALLOWED_GROUPS/);
});
