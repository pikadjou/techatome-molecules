/**
 * Reconstruit les libs affectées par les fichiers vus par `nx watch` (script `watch:lib`).
 * `--initial` construit d'abord toutes les libs, pour ne pas compiler l'application contre un dist périmé.
 *
 * Deux raisons d'exister :
 * 1. sous cmd.exe, `$NX_FILE_CHANGES` n'est pas substitué et NX reconstruit 0 projet ; on lit `process.env` ;
 * 2. un verrou sérialise les builds, sinon plusieurs ng-packagr écrivent les mêmes dist et le dev-server lit des fichiers tronqués.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOCK = join(ROOT, 'node_modules', '.cache', 'ta-build.lock');

/** Un verrou dont le processus propriétaire est mort ne doit pas bloquer. */
const holderIsAlive = () => {
  try {
    const { pid } = JSON.parse(readFileSync(LOCK, 'utf8'));
    process.kill(pid, 0); // ne tue rien : teste seulement l'existence
    return pid;
  } catch {
    return null;
  }
};

const acquire = async () => {
  mkdirSync(dirname(LOCK), { recursive: true });

  // Attendre plutôt qu'abandonner : le changement déclencheur serait perdu.
  for (let waited = 0; existsSync(LOCK) && waited < 600; waited++) {
    const holder = holderIsAlive();
    if (!holder) {
      console.log('[watch:lib] verrou orphelin (processus mort) — reprise');
      rmSync(LOCK, { force: true });
      break;
    }
    if (waited === 0) {
      console.log(`[watch:lib] un build tourne déjà (PID ${holder}) — en attente...`);
    }
    await new Promise(done => setTimeout(done, 1000));
  }

  writeFileSync(LOCK, JSON.stringify({ pid: process.pid, since: new Date().toISOString() }));
};

const release = () => rmSync(LOCK, { force: true });

const isInitial = process.argv.includes('--initial');
const files = process.env.NX_FILE_CHANGES;

if (!isInitial && !files) {
  process.exit(0);
}

await acquire();

// Le verrou doit tomber quoi qu'il arrive.
process.on('exit', release);
process.on('SIGINT', () => process.exit(130));
process.on('SIGTERM', () => process.exit(143));

const stamp = () => new Date().toTimeString().slice(0, 8);
const short = name => name.replace('@ta/', '');

// Annonce le lot avant de construire ; `--output-style=static` remplace le TUI de NX, figé sous `nx watch`.
if (isInitial) {
  console.log(`\n[${stamp()}] build initial de toutes les libs avant le watch...`);
} else {
  const affected = spawnSync('npx', ['nx', 'show', 'projects', '--affected', `--files=${files}`, '--json'], {
    encoding: 'utf8',
    shell: true,
  });

  let projects = [];
  try {
    projects = JSON.parse(affected.stdout.trim().split('\n').pop());
  } catch {}

  const changed = files.split(',').map(f => f.replace(/\\/g, '/').replace('projects/', ''));
  console.log(`\n[${stamp()}] ${changed.join(', ')}`);
  if (projects.length) {
    console.log(`[${stamp()}] ${projects.length} lib(s) à reconstruire : ${projects.map(short).sort().join(', ')}`);
  }
}

const args = isInitial
  ? ['nx', 'run-many', '--target=build', '--all', '--output-style=static']
  : ['nx', 'affected', '--target=build', `--files=${files}`, '--output-style=static'];

const started = Date.now();
const { status } = spawnSync('npx', args, { shell: true, stdio: 'inherit' });

const seconds = ((Date.now() - started) / 1000).toFixed(1);
console.log(`[${stamp()}] ${status === 0 ? 'OK' : 'ÉCHEC'} en ${seconds}s\n`);

process.exit(status ?? 0);
