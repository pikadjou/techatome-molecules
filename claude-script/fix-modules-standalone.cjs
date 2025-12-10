const fs = require("fs");
const path = require("path");

// Fonction pour corriger un NgModule avec des composants standalone
function fixModuleWithStandaloneComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Chercher le décorateur @NgModule
    const ngModuleMatch = content.match(/@NgModule\s*\(\s*\{([\s\S]*?)\}\s*\)/);
    if (!ngModuleMatch) {
      console.log(`⚠ No @NgModule found in ${filePath}`);
      return;
    }

    const moduleConfig = ngModuleMatch[1];

    // Extraire les imports de composants au début du fichier
    const importMatches = content.matchAll(
      /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]\.[^'"]*component['"]/g
    );
    const componentImports = [];

    for (const match of importMatches) {
      const components = match[1].split(",").map((c) => c.trim());
      componentImports.push(...components);
    }

    // Extraire les déclarations actuelles
    const declarationsMatch = moduleConfig.match(
      /declarations:\s*\[([\s\S]*?)\]/
    );
    if (!declarationsMatch) {
      console.log(`✓ ${filePath} - no declarations found`);
      return;
    }

    const declarations = declarationsMatch[1]
      .split(",")
      .map((d) => d.trim())
      .filter((d) => d && !d.includes("//") && !d.includes("/*"));

    // Vérifier si ce sont des composants standalone
    let hasStandaloneComponents = false;
    for (const comp of declarations) {
      const compFile =
        filePath.replace(/[^/\\]*\.ts$/, "") +
        "**/" +
        comp.toLowerCase() +
        ".component.ts";
      // Pour simplifier, on assume que si c'est dans les imports de composants, c'est standalone
      if (componentImports.includes(comp)) {
        hasStandaloneComponents = true;
        break;
      }
    }

    if (!hasStandaloneComponents) {
      console.log(`✓ ${filePath} - no standalone components detected`);
      return;
    }

    // Extraire les imports actuels
    const importsMatch = moduleConfig.match(/imports:\s*\[([\s\S]*?)\]/);
    let currentImports = [];
    if (importsMatch) {
      currentImports = importsMatch[1]
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i && !i.includes("//") && !i.includes("/*"));
    }

    // Combiner les imports existants avec les composants des déclarations
    const newImports = [...currentImports, ...declarations].filter(
      (v, i, a) => a.indexOf(v) === i
    );

    // Créer la nouvelle configuration
    let newModuleConfig = moduleConfig;

    // Remplacer les déclarations par un tableau vide
    newModuleConfig = newModuleConfig.replace(
      /declarations:\s*\[[\s\S]*?\]/,
      "declarations: []"
    );

    // Remplacer ou ajouter les imports
    if (importsMatch) {
      newModuleConfig = newModuleConfig.replace(
        /imports:\s*\[[\s\S]*?\]/,
        `imports: [${newImports.join(", ")}]`
      );
    } else {
      // Ajouter les imports après les déclarations
      newModuleConfig = newModuleConfig.replace(
        "declarations: [],",
        `declarations: [],\n  imports: [${newImports.join(", ")}],`
      );
    }

    // Remplacer le module dans le contenu
    const newNgModule = `@NgModule({\n${newModuleConfig}\n})`;
    const newContent = content.replace(ngModuleMatch[0], newNgModule);

    fs.writeFileSync(filePath, newContent);
    console.log(
      `✓ Fixed ${filePath} - moved ${declarations.length} components from declarations to imports`
    );
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
  }
}

// Fonction pour trouver tous les fichiers de modules
function findModuleFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findModuleFiles(fullPath));
    } else if (item.endsWith(".module.ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Point d'entrée principal
function main() {
  const projectsDir = path.join(__dirname, "projects");

  console.log("🔄 Fixing NgModules to work with standalone components...\n");

  const moduleFiles = findModuleFiles(projectsDir);

  for (const file of moduleFiles) {
    fixModuleWithStandaloneComponents(file);
  }

  console.log("\n✅ All modules fixed!");
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { fixModuleWithStandaloneComponents, findModuleFiles };
