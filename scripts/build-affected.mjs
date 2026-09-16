/**
 * Reconstruit les libs affectées par les fichiers que `nx watch` vient de voir
 * changer. Invoqué par le script `watch:lib`.
 *
 * Avec `--initial`, construit toutes les libs une fois avant que le watch ne
 * démarre : sans ça, un `watch:lib` lancé sur un dist vide ou périmé n'attend
 * que le prochain changement, et l'application compile contre du vieux code.
 * Le cache NX rend ce build quasi instantané quand rien n'a bougé.
 *
 * Ce wrapper existe pour deux raisons.
 *
 * 1. Expansion de variables. `nx watch -- nx affected --files=$NX_FILE_CHANGES`
 *    fonctionne sous sh mais pas sous cmd.exe, où la variable n'est pas
 *    substituée : NX reconstruit alors 0 projet, silencieusement. On lit donc
 *    `process.env` directement.
 *
 * 2. Verrou. Plusieurs `watch:lib` lancés en parallèle — ou plusieurs rafales de
 *    changements sur un même watch — font écrire plusieurs ng-packagr dans les
 *    mêmes dist en même temps. Les dist se corrompent, et le dev-server tombe
 *    sur des fichiers tronqués, puis émet des TS2307 qu'il ne réessaie jamais.
 *    On sérialise donc les builds entre processus.
 *
 * Tout le reste — graphe, projets affectés, ordre, parallélisation, cache — est
 * fait par NX.
 */
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LOCK = join(ROOT, "node_modules", ".cache", "ta-build.lock");

/** Un verrou dont le processus propriétaire est mort ne doit pas bloquer. */
const holderIsAlive = () => {
  try {
    const { pid } = JSON.parse(readFileSync(LOCK, "utf8"));
    process.kill(pid, 0); // ne tue rien : teste seulement l'existence
    return pid;
  } catch {
    return null;
  }
};

const acquire = async () => {
  mkdirSync(dirname(LOCK), { recursive: true });

  // On attend le build en cours plutôt que d'abandonner : abandonner perdrait
  // silencieusement le changement qui vient de déclencher ce processus.
  for (let waited = 0; existsSync(LOCK) && waited < 600; waited++) {
    const holder = holderIsAlive();
    if (!holder) {
      console.log("[watch:lib] verrou orphelin (processus mort) — reprise");
      rmSync(LOCK, { force: true });
      break;
    }
    if (waited === 0) {
      console.log(
        `[watch:lib] un build tourne déjà (PID ${holder}) — en attente...`
      );
    }
    await new Promise((done) => setTimeout(done, 1000));
  }

  writeFileSync(
    LOCK,
    JSON.stringify({ pid: process.pid, since: new Date().toISOString() })
  );
};

const release = () => rmSync(LOCK, { force: true });

const isInitial = process.argv.includes("--initial");
const files = process.env.NX_FILE_CHANGES;

if (!isInitial && !files) {
  process.exit(0);
}

await acquire();

// Le verrou doit tomber quoi qu'il arrive, sinon le prochain build attend 10 min.
process.on("exit", release);
process.on("SIGINT", () => process.exit(130));
process.on("SIGTERM", () => process.exit(143));

const stamp = () => new Date().toTimeString().slice(0, 8);
const short = (name) => name.replace("@ta/", "");

// On annonce le lot AVANT de construire. Le TUI de NX, imbriqué dans `nx watch`,
// ne se rafraîchit pas : sans cette ligne l'écran paraît figé pendant plusieurs
// minutes. `--output-style=static` désactive ce TUI au profit d'un flux ligne à
// ligne, lisible et défilant.
if (isInitial) {
  console.log(
    `\n[${stamp()}] build initial de toutes les libs avant le watch...`
  );
} else {
  const affected = spawnSync(
    "npx",
    ["nx", "show", "projects", "--affected", `--files=${files}`, "--json"],
    { encoding: "utf8", shell: true }
  );

  let projects = [];
  try {
    projects = JSON.parse(affected.stdout.trim().split("\n").pop());
  } catch {
    // Tant pis pour l'affichage détaillé : on construit quand même.
  }

  const changed = files
    .split(",")
    .map((f) => f.replace(/\\/g, "/").replace("projects/", ""));
  console.log(`\n[${stamp()}] ${changed.join(", ")}`);
  if (projects.length) {
    console.log(
      `[${stamp()}] ${projects.length} lib(s) à reconstruire : ${projects
        .map(short)
        .sort()
        .join(", ")}`
    );
  }
}

const args = isInitial
  ? ["nx", "run-many", "--target=build", "--all", "--output-style=static"]
  : [
      "nx",
      "affected",
      "--target=build",
      `--files=${files}`,
      "--output-style=static",
    ];

const started = Date.now();
const { status } = spawnSync("npx", args, { shell: true, stdio: "inherit" });

const seconds = ((Date.now() - started) / 1000).toFixed(1);
console.log(`[${stamp()}] ${status === 0 ? "OK" : "ÉCHEC"} en ${seconds}s\n`);

process.exit(status ?? 0);
