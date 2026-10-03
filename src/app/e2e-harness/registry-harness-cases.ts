import { HarnessCase } from "@ta/testing";

import { DEMO_INDEX } from "../showcase/generated/demo-index";
import { REGISTRY } from "../showcase/registry";

/**
 * Dérive un cas harness par exemple de la vitrine. Les titres proviennent de
 * l'index généré, si bien qu'aucune démo n'est importée tant qu'un test ne
 * demande pas sa route.
 */
export function harnessCasesFromRegistry(): HarnessCase[] {
  const cases: HarnessCase[] = [];

  for (const entry of REGISTRY) {
    const index = DEMO_INDEX[entry.id];
    if (!index) {
      continue;
    }

    for (const example of index.examples) {
      if (example.skipHarness) {
        continue;
      }

      cases.push({
        id: `${entry.id}--${example.slug}`,
        label: `${entry.id} — ${example.title}`,
        load: () =>
          entry.load().then((module) => {
            const found = module.DEMO.examples.find((candidate) => candidate.title === example.title);
            if (!found) {
              throw new Error(`Exemple "${example.title}" introuvable dans la démo ${entry.id}`);
            }
            return found.component;
          }),
      });
    }
  }

  return cases;
}
