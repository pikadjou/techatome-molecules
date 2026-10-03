const HEADER = `/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------
`;

/** JSON déterministe : clés d'objet triées à tous les niveaux. */
function stableJson(value, indent = 2) {
  return JSON.stringify(value, (_key, val) => {
    // Uniquement les objets simples : un Set ou une instance de classe n'a pas
    // de clés énumérables propres et serait silencieusement rendu `{}`, ce qui
    // contredirait le type déclaré juste au-dessus dans le fichier généré.
    const isPlainObject =
      val !== null && typeof val === "object" && Object.getPrototypeOf(val) === Object.prototype;
    if (isPlainObject) {
      return Object.fromEntries(Object.keys(val).sort().map((k) => [k, val[k]]));
    }
    return val;
  }, indent);
}

export function renderApiMetadata(entries) {
  const byId = {};
  for (const entry of [...entries].sort((a, b) => a.id.localeCompare(b.id))) {
    byId[entry.id] = entry;
  }

  return `${HEADER}
export interface TaApiMember {
  name: string;
  propertyName: string;
  kind: "input" | "output" | "method" | "property";
  type: string;
  default?: string;
  required: boolean;
  doc?: string;
  inheritedFrom?: string;
}

export interface TaApiEntry {
  id: string;
  pkg: string;
  className: string;
  kind: "component" | "directive" | "pipe" | "service" | "model";
  file: string;
  doc?: string;
  members: TaApiMember[];
}

export const TA_API: Record<string, TaApiEntry> = ${stableJson(byId)};
`;
}

/** Un template va dans un littéral gabarit : neutraliser ` et \${. */
function escapeTemplate(text) {
  return text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

export function renderDemoSources(sources) {
  const entries = Object.keys(sources)
    .sort()
    .map(
      (key) =>
        `  ${JSON.stringify(key)}: { template: \`${escapeTemplate(sources[key].template)}\`, ` +
        `members: \`${escapeTemplate(sources[key].members)}\` },`
    )
    .join("\n");

  return `${HEADER}
export interface DemoSource {
  /** Template exact du composant d'exemple. */
  template: string;
  /** Corps de sa classe : modèle, données, gestionnaires. Vide s'il n'en a pas. */
  members: string;
}

/** Code source de chaque classe d'exemple, indexé par nom de classe. */
export const DEMO_SOURCES: Record<string, DemoSource> = {
${entries}
};
`;
}

export function renderDemoIndex(index) {
  return `${HEADER}
export interface DemoIndexExample {
  title: string;
  slug: string;
  className: string;
  skipHarness: boolean;
}

export interface DemoIndexEntry {
  summary: string;
  notRenderable: boolean;
  examples: DemoIndexExample[];
}

/** Résumés et titres lisibles sans importer les démos, pour le harness et l'index de paquet. */
export const DEMO_INDEX: Record<string, DemoIndexEntry> = ${stableJson(index)};
`;
}

export function renderSearchIndex(searchIndex) {
  return `${HEADER}
export interface SearchIndexEntry {
  className: string;
  summary: string;
}

/**
 * Nom de classe et résumé de chaque composant documenté, seul de quoi la barre de
 * recherche a besoin. \`app.component.ts\` est chargé au démarrage : lui donner
 * \`TA_API\` (338 Ko) ou \`DEMO_SOURCES\` (le texte de tous les templates) grossirait
 * le chargement initial pour un filtre qui ne lit qu'un nom de classe et un résumé.
 */
export const SEARCH_INDEX: Record<string, SearchIndexEntry> = ${stableJson(searchIndex)};
`;
}

export function renderRegistry(registry) {
  const rows = registry
    .map((entry) => {
      const load = `../demos/${entry.short}/${entry.id}.demo`;
      return (
        `  {\n` +
        `    id: ${JSON.stringify(entry.id)},\n` +
        `    pkg: ${JSON.stringify(entry.pkg)},\n` +
        `    short: ${JSON.stringify(entry.short)},\n` +
        `    group: ${JSON.stringify(entry.group)},\n` +
        `    load: () => import(${JSON.stringify(load)}),\n` +
        `  },`
      );
    })
    .join("\n");

  return `${HEADER}
// Importé depuis demo.types.ts, jamais depuis registry.ts : registry.ts
// importe cette valeur \`REGISTRY\`, et un import réciproque créerait un cycle
// que Webpack résout mal (l'export de \`REGISTRY\` par registry.ts cesse
// d'être vu par ses appelants).
import type { RegistryEntry } from "../demo.types";

/**
 * Catalogue des démos, dérivé des fichiers \`*.demo.ts\` sous
 * \`src/app/showcase/demos/\` et de \`TA_API\`. Chaque entrée est chargée à la
 * demande : la page d'un composant n'importe que la sienne.
 */
export const REGISTRY: RegistryEntry[] = [
${rows}
];
`;
}

export function renderCoverage(coverage) {
  return `${HEADER}
export interface ShowcaseCoverage {
  /** Composants publics dotés d'une démo enregistrée. */
  documented: string[];
  /** Composants publics sans démo : la vitrine est incomplète tant que non vide. */
  missing: string[];
  /** Propriétés dont la forme d'écriture n'a pas été reconnue par le générateur. */
  unresolvedMembers: string[];
}

export const COVERAGE: ShowcaseCoverage = ${stableJson(coverage)};
`;
}
