import { RegistryEntry } from "./demo.types";
import { REGISTRY } from "./generated/registry";

// `REGISTRY` est généré (scripts/generate-showcase-metadata.mjs) à partir des
// fichiers src/app/showcase/demos/**/*.demo.ts : plus aucune main humaine ne
// le tient à jour. Ce fichier reste écrit à la main pour offrir un point
// d'import stable — `RegistryEntry`, `findEntry`, `entriesOfPackage` — que
// les appelants n'ont pas à faire pointer vers generated/.
export { REGISTRY };
export type { RegistryEntry };

export function findEntry(short: string, id: string): RegistryEntry | undefined {
  return REGISTRY.find((entry) => entry.short === short && entry.id === id);
}

export function entriesOfPackage(short: string): RegistryEntry[] {
  return REGISTRY.filter((entry) => entry.short === short);
}
