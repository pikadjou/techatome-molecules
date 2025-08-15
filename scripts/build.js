const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Fonction pour exécuter des commandes shell
function runCommand(command) {
  console.log(`Exécution : ${command}`);
  execSync(command, { stdio: 'inherit' });
}

// Fonction pour récupérer toutes les librairies en parcourant récursivement les sous-dossiers
function getAllLibraries(dir) {
  let libraries = [];

  // Lire les fichiers et dossiers dans le répertoire
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    // Si c'est un dossier, vérifier s'il contient un package.json
    if (stat.isDirectory()) {
      const packageJsonPath = path.join(fullPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        // Si package.json existe, c'est une librairie
        libraries.push({ name: `@ta/${item}`, path: fullPath });
      } else {
        // Si ce n'est pas une librairie, vérifier récursivement dans les sous-dossiers
        libraries = libraries.concat(getAllLibraries(fullPath));
      }
    }
  });

  return libraries;
}

// Fonction pour analyser les dépendances d'une librairie
function getDependenciesForLib(libPath) {
  const packageJsonPath = path.join(libPath, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    return Object.keys(packageJson.dependencies || {}).filter(dep => dep.startsWith('@ta/'));
  }
  return [];
}

// Fonction de tri topologique pour garantir que les librairies sont construites dans le bon ordre
function topologicalSort(graph) {
  const sorted = [];
  const visited = new Set();
  const tempMark = new Set(); // Utilisé pour détecter les cycles

  function visit(node) {
    if (tempMark.has(node)) {
      throw new Error('Dépendance circulaire détectée!');
    }
    if (!visited.has(node)) {
      tempMark.add(node);
      if (graph[node]) {
        graph[node].forEach(visit);
      }
      tempMark.delete(node);
      visited.add(node);
      sorted.push(node);
    }
  }

  Object.keys(graph).forEach(visit);
  return sorted;
}

// Construire un graphique des dépendances entre librairies locales
function buildDependencyGraph(libraries) {
  const graph = {};

  libraries.forEach(lib => {
    graph[lib.name] = [];

    // Récupérer les dépendances de la librairie
    const deps = getDependenciesForLib(lib.path);

    // Pour chaque dépendance locale, ajouter au graphique
    deps.forEach(dep => {
      graph[lib.name].push(dep);
    });
  });

  return graph;
}

// Récupérer toutes les librairies locales (y compris celles dans les sous-dossiers)
const libsFolder = path.join(__dirname, '../projects'); // Ou ton répertoire de librairies
const libraries = getAllLibraries(libsFolder);
const dependencyGraph = buildDependencyGraph(libraries);

// Trier les librairies dans l'ordre de construction
const buildOrder = topologicalSort(dependencyGraph);

// Log de l'ordre de construction des librairies
console.log('Ordre de construction des librairies : ', buildOrder);

// Construire les librairies dans l'ordre correct
buildOrder.forEach(lib => {
  console.log(`Construction de la librairie : ${lib}`);
  runCommand(`yarn build ${lib}`);
});

console.log('Construction terminée.');
