import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Racine du dépôt, déduite de l'emplacement de ce fichier. */
export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

/** Paquets déclarés mais hors périmètre de la vitrine. */
const EXCLUDED = new Set([
  "@ta/eslint-config",
  "@ta/prettier-config",
  "@ta/styles",
  "@ta/testing",
]);

/** Lit tsconfig.json en tolérant les commentaires que JSON.parse refuse. */
export function readTsconfigPaths(repoRoot = REPO_ROOT) {
  const raw = fs.readFileSync(path.join(repoRoot, "tsconfig.json"), "utf8");
  const stripped = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
  return JSON.parse(stripped).compilerOptions?.paths ?? {};
}

/**
 * Paquets @ta/* documentables : présents sur le disque, avec un public-api.
 * Un paquet déclaré dans tsconfig mais absent (cas de @ta/calendar) est ignoré
 * silencieusement — c'est la tâche 12 qui nettoie la déclaration morte.
 */
export function listPackages(repoRoot = REPO_ROOT) {
  const packages = [];
  for (const [name, targets] of Object.entries(readTsconfigPaths(repoRoot))) {
    if (!name.startsWith("@ta/")) continue;
    if (name.split("/").length !== 2) continue; // écarte "@ta/testing/e2e"
    if (EXCLUDED.has(name)) continue;

    const dir = path.resolve(repoRoot, targets[0]);
    const publicApi = path.join(dir, "src", "public-api.ts");
    if (!fs.existsSync(publicApi)) continue;

    packages.push({ name, short: name.slice("@ta/".length), dir, publicApi });
  }
  return packages.sort((a, b) => a.name.localeCompare(b.name));
}

const RE_EXPORT = /export\s+(?:\*|\{[^}]*\})\s+from\s+["'](\.[^"']+)["']/g;

/** Suit récursivement les re-exports relatifs depuis un fichier baril. */
export function collectPublicFiles(entryFile) {
  const seen = new Set();
  const stack = [path.resolve(entryFile)];

  while (stack.length > 0) {
    const file = stack.pop();
    if (seen.has(file) || !fs.existsSync(file)) continue;
    seen.add(file);

    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(RE_EXPORT)) {
      const base = path.resolve(path.dirname(file), match[1]);
      const candidates = [`${base}.ts`, path.join(base, "public-api.ts"), path.join(base, "index.ts")];
      const resolved = candidates.find((c) => fs.existsSync(c));
      if (resolved) stack.push(resolved);
    }
  }
  return [...seen].sort();
}

const SKIP_DIRS = new Set(["node_modules", "dist", "__mock__", "__mocks__", ".angular"]);

/**
 * Tous les .ts d'un paquet. Sert à indexer les classes de base — `TaBaseComponent`
 * ou `TaAbstractInputComponent` ne sont pas forcément atteignables depuis un
 * public-api, alors que leurs membres doivent apparaître comme hérités.
 */
export function collectAllSources(dir) {
  const files = [];
  const stack = [path.join(dir, "src")];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) stack.push(full);
        continue;
      }
      if (!entry.name.endsWith(".ts")) continue;
      if (/\.(spec|stories)\.ts$/.test(entry.name)) continue;
      files.push(full);
    }
  }
  return files.sort();
}
