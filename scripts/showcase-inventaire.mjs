// Construit l'inventaire des composants restant à documenter, avec pour chacun
// la matière déjà écrite ailleurs dans le dépôt : story Storybook, cas E2E,
// page showcase héritée. C'est la liste de travail des phases 1 à 6.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

function readGenerated(file) {
  const text = fs.readFileSync(path.join(ROOT, "src/app/showcase/generated", file), "utf8");
  return JSON.parse(text.slice(text.indexOf("= {") + 2, text.lastIndexOf(";")));
}

const api = readGenerated("api-metadata.ts");
const coverage = readGenerated("coverage.ts");
const missing = new Set(coverage.missing);

/** Tous les fichiers d'un répertoire, récursivement. */
function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!/node_modules|dist|\.angular/.test(entry.name)) walk(full, acc);
    } else acc.push(full);
  }
  return acc;
}

const stories = walk(path.join(ROOT, "projects")).filter((f) => f.endsWith(".stories.ts"));
const harness = walk(path.join(ROOT, "src/app/e2e-harness"));
const legacy = walk(path.join(ROOT, "src/app/showcase")).filter(
  (f) => f.endsWith(".html") && !f.includes("component-page") && !f.includes("package-index")
);

const contents = new Map();
const read = (f) => {
  if (!contents.has(f)) contents.set(f, fs.readFileSync(f, "utf8"));
  return contents.get(f);
};

const rel = (f) => path.relative(ROOT, f).split(path.sep).join("/");

/** Où ce sélecteur apparaît-il déjà dans le dépôt ? */
function material(selector) {
  const found = { story: [], harness: [], legacy: [] };
  const needle = `<${selector}`;
  for (const f of stories) if (read(f).includes(needle)) found.story.push(rel(f));
  for (const f of harness) if (read(f).includes(needle)) found.harness.push(rel(f));
  for (const f of legacy) if (read(f).includes(needle)) found.legacy.push(rel(f));
  return found;
}

const byPkg = new Map();
for (const id of [...missing].sort()) {
  const entry = api[id];
  if (!entry) continue;
  const list = byPkg.get(entry.pkg) ?? [];
  list.push({ ...entry, material: material(id) });
  byPkg.set(entry.pkg, list);
}

const lines = [
  "# Inventaire des composants à documenter",
  "",
  "Fichier **généré** — reflet de `COVERAGE.missing` au moment de sa production.",
  "Régénérer après chaque paquet livré pour voir la liste fondre.",
  "",
  "Pour chaque composant : son sélecteur, sa classe, son fichier source, le nombre",
  "d'inputs / outputs / propriétés / méthodes que le tableau d'API affichera, et la",
  "matière déjà écrite ailleurs dans le dépôt dont la démo peut s'inspirer.",
  "",
];

let total = 0;
for (const [pkg, list] of [...byPkg.entries()].sort((a, b) => b[1].length - a[1].length)) {
  total += list.length;
  lines.push(`## ${pkg} — ${list.length} composants`, "");
  for (const c of list) {
    const counts = { input: 0, output: 0, property: 0, method: 0 };
    for (const m of c.members) if (!m.inheritedFrom) counts[m.kind] = (counts[m.kind] ?? 0) + 1;
    const api = `${counts.input}i/${counts.output}o/${counts.property}p/${counts.method}m`;
    const mat = [];
    if (c.material.story.length) mat.push(`story: ${c.material.story.join(", ")}`);
    if (c.material.harness.length) mat.push(`harness: ${c.material.harness.join(", ")}`);
    if (c.material.legacy.length) mat.push(`page: ${c.material.legacy.join(", ")}`);
    lines.push(
      `- **${c.id}** — \`${c.className}\` · ${api} · \`${c.file}\`` +
        (mat.length ? `\n  - matière existante — ${mat.join(" · ")}` : "\n  - _aucune matière existante_")
    );
  }
  lines.push("");
}

lines.splice(4, 0, `**${total} composants à documenter**, répartis sur ${byPkg.size} paquets.`, "");

const out = path.join(ROOT, "docs/superpowers/plans/showcase-inventaire.md");
fs.writeFileSync(out, lines.join("\n"), "utf8");
console.log(`${total} composants, ${byPkg.size} paquets -> ${rel(out)}`);

const withMaterial = [...byPkg.values()].flat().filter(
  (c) => c.material.story.length || c.material.harness.length || c.material.legacy.length
).length;
console.log(`dont ${withMaterial} ont déjà de la matière ailleurs dans le dépôt`);
