import assert from "node:assert/strict";
import { test } from "node:test";

import {
  renderApiMetadata,
  renderCoverage,
  renderDemoIndex,
  renderDemoSources,
  renderRegistry,
  renderSearchIndex,
} from "./emit.mjs";

test("le rendu porte un avertissement de fichier généré", () => {
  const out = renderApiMetadata([]);

  assert.match(out, /NE PAS ÉDITER/);
  assert.match(out, /yarn showcase:metadata/);
});

test("les clés sont triées pour produire des diffs stables", () => {
  const entries = [
    { id: "ta-zeta", pkg: "@ta/ui", className: "Z", kind: "component", file: "z.ts", members: [] },
    { id: "ta-alpha", pkg: "@ta/ui", className: "A", kind: "component", file: "a.ts", members: [] },
  ];

  const out = renderApiMetadata(entries);

  assert.ok(out.indexOf('"ta-alpha"') < out.indexOf('"ta-zeta"'), "ta-alpha doit précéder ta-zeta");
});

test("le rendu est idempotent", () => {
  const entries = [{ id: "ta-a", pkg: "@ta/ui", className: "A", kind: "component", file: "a.ts", members: [] }];

  assert.equal(renderApiMetadata(entries), renderApiMetadata(entries));
});

test("les sources de démo échappent les accents graves et les interpolations, dans le template comme dans le corps", () => {
  const out = renderDemoSources({
    Ex: { template: "<p>a ` b ${c}</p>", members: "value = `x${1}`;" },
  });

  assert.match(out, /\\`/);
  assert.match(out, /\\\$\{/);
});

test("l'index de démo expose titres et résumés sans le texte des templates", () => {
  const out = renderDemoIndex({ "ta-a": { summary: "r", notRenderable: false, examples: [] } });

  assert.match(out, /DEMO_INDEX/);
  assert.match(out, /"ta-a"/);
});

test("l'index de recherche expose nom de classe et résumé", () => {
  const out = renderSearchIndex({ "ta-a": { className: "AComponent", summary: "r" } });

  assert.match(out, /SEARCH_INDEX/);
  assert.match(out, /AComponent/);
});

test("le registre expose id, pkg, short, group et un chargement relatif à generated/", () => {
  const out = renderRegistry([{ id: "ta-badge", pkg: "@ta/ui", short: "ui", group: "Bases" }]);

  assert.match(out, /RegistryEntry/);
  assert.match(out, /"ta-badge"/);
  assert.match(out, /"@ta\/ui"/);
  assert.match(out, /"Bases"/);
  assert.match(out, /import\("\.\.\/demos\/ui\/ta-badge\.demo"\)/);
});

test("la couverture expose les trois listes", () => {
  const out = renderCoverage({ documented: ["ta-a"], missing: ["ta-b"], unresolvedMembers: ["X.y"] });

  assert.match(out, /documented/);
  assert.match(out, /missing/);
  assert.match(out, /unresolvedMembers/);
});
