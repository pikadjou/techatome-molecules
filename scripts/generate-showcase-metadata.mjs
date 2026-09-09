#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

import { buildApi, buildDemos, buildRegistry } from "./showcase-metadata/build.mjs";
import {
  renderApiMetadata,
  renderCoverage,
  renderDemoIndex,
  renderDemoSources,
  renderRegistry,
  renderSearchIndex,
} from "./showcase-metadata/emit.mjs";
import { REPO_ROOT } from "./showcase-metadata/packages.mjs";

const OUT_DIR = path.join(REPO_ROOT, "src", "app", "showcase", "generated");

function main() {
  const check = process.argv.includes("--check");

  const { entries, unresolvedMembers } = buildApi();
  const { sources, index, registryRows } = buildDemos();
  const registry = buildRegistry(entries, registryRows);

  const documented = Object.keys(index).sort();
  const missing = entries
    .filter((e) => e.kind === "component" && !index[e.id])
    .map((e) => e.id)
    .sort();

  // Nom de classe et résumé, pour les seuls identifiants ayant une démo. C'est
  // tout ce dont la barre de recherche a besoin : lui donner `TA_API` ou
  // `DEMO_SOURCES` grossirait le chargement initial pour rien.
  const apiById = Object.fromEntries(entries.map((e) => [e.id, e]));
  const searchIndex = {};
  for (const id of documented) {
    const api = apiById[id];
    if (api) {
      searchIndex[id] = { className: api.className, summary: index[id].summary };
    }
  }

  const files = {
    "api-metadata.ts": renderApiMetadata(entries),
    "demo-index.ts": renderDemoIndex(index),
    "demo-sources.ts": renderDemoSources(sources),
    "search-index.ts": renderSearchIndex(searchIndex),
    "coverage.ts": renderCoverage({ documented, missing, unresolvedMembers }),
    "registry.ts": renderRegistry(registry),
  };

  if (check) {
    const stale = Object.entries(files).filter(([name, content]) => {
      const target = path.join(OUT_DIR, name);
      return !fs.existsSync(target) || fs.readFileSync(target, "utf8") !== content;
    });

    if (stale.length > 0) {
      console.error(`Fichiers générés périmés : ${stale.map(([n]) => n).join(", ")}`);
      console.error("Lancer `yarn showcase:metadata` puis committer le résultat.");
      process.exit(1);
    }
    console.log("Métadonnées de la vitrine à jour.");
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(OUT_DIR, name), content, "utf8");
  }

  console.log(
    `Vitrine : ${entries.length} entrées d'API, ${documented.length} démos, ${missing.length} composants sans démo.`
  );
  if (unresolvedMembers.length > 0) {
    console.warn(`Membres non reconnus (${unresolvedMembers.length}) : ${unresolvedMembers.join(", ")}`);
  }
}

main();
