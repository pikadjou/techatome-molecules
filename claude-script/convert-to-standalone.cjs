const fs = require("fs");
const path = require("path");

// Fonction pour convertir un composant en standalone
function convertComponentToStandalone(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");

    // Vérifier si le composant est déjà standalone
    if (content.includes("standalone: true")) {
      console.log(`✓ ${filePath} is already standalone`);
      return;
    }

    // Vérifier si c'est un composant abstrait
    if (content.includes("@Component({ template: '' })")) {
      console.log(`⚠ ${filePath} is abstract component, skipping`);
      return;
    }

    // Analyser les imports nécessaires basés sur le template
    const templatePath = filePath.replace(".ts", ".html");
    let templateContent = "";
    if (fs.existsSync(templatePath)) {
      templateContent = fs.readFileSync(templatePath, "utf8");
    }

    // Détecter les imports nécessaires
    const imports = [];

    // Directives Angular communes
    if (templateContent.includes("*ngIf") || templateContent.includes("@if")) {
      imports.push("NgIf");
    }
    if (
      templateContent.includes("*ngFor") ||
      templateContent.includes("@for")
    ) {
      imports.push("NgFor");
    }
    if (
      templateContent.includes("[ngClass]") ||
      templateContent.includes("ngClass")
    ) {
      imports.push("NgClass");
    }
    if (
      templateContent.includes("[ngStyle]") ||
      templateContent.includes("ngStyle")
    ) {
      imports.push("NgStyle");
    }
    if (templateContent.includes("| async")) {
      imports.push("AsyncPipe");
    }

    // Composants d'icônes
    if (templateContent.includes("ta-font-icon")) {
      imports.push("FontIconComponent");
    }
    if (templateContent.includes("ta-material-icon")) {
      imports.push("MaterialIconComponent");
    }
    if (templateContent.includes("ta-local-icon")) {
      imports.push("LocalIconComponent");
    }

    // Directives personnalisées
    if (templateContent.includes("appStopPropagation")) {
      imports.push("TaStopPropagationDirective");
    }

    // Construire les imports
    let newImports = [];

    // Angular Common imports
    const commonImports = imports.filter((imp) =>
      ["NgIf", "NgFor", "NgClass", "NgStyle", "AsyncPipe"].includes(imp)
    );
    if (commonImports.length > 0) {
      newImports.push(
        `import { ${commonImports.join(", ")} } from '@angular/common';`
      );
    }

    // Icon components
    const iconImports = imports.filter((imp) =>
      [
        "FontIconComponent",
        "MaterialIconComponent",
        "LocalIconComponent",
      ].includes(imp)
    );
    if (iconImports.length > 0) {
      newImports.push(`import { ${iconImports.join(", ")} } from '@ta/icons';`);
    }

    // Directives utils
    const utilsImports = imports.filter((imp) =>
      ["TaStopPropagationDirective"].includes(imp)
    );
    if (utilsImports.length > 0) {
      newImports.push(
        `import { ${utilsImports.join(", ")} } from '@ta/utils';`
      );
    }

    // Ajouter les nouveaux imports
    const firstImportMatch = content.match(/^import.*from.*;$/m);
    if (firstImportMatch && newImports.length > 0) {
      const insertPos = content.indexOf(firstImportMatch[0]);
      content =
        content.slice(0, insertPos) +
        newImports.join("\n") +
        "\n" +
        content.slice(insertPos);
    }

    // Modifier le décorateur @Component
    const componentMatch = content.match(/@Component\s*\(\s*\{([^}]+)\}\s*\)/s);
    if (componentMatch) {
      const componentConfig = componentMatch[1];

      // Ajouter standalone: true et imports
      let newConfig = componentConfig;

      // Ajouter standalone: true
      newConfig = newConfig.trim() + ",\n  standalone: true,";

      // Ajouter imports si nécessaire
      if (imports.length > 0) {
        newConfig += `\n  imports: [${imports.join(", ")}],`;
      }

      const newComponent = `@Component({\n${newConfig}\n})`;
      content = content.replace(componentMatch[0], newComponent);
    }

    // Écrire le fichier modifié
    fs.writeFileSync(filePath, content);
    console.log(`✓ Converted ${filePath} to standalone`);
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error.message);
  }
}

// Fonction pour trouver tous les fichiers de composants
function findComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findComponentFiles(fullPath));
    } else if (item.endsWith(".component.ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Point d'entrée principal
function main() {
  const projectsDir = path.join(__dirname, "projects");

  // Librairies à traiter dans l'ordre de dépendances
  const libraries = [
    "icons",
    "styles",
    "ui",
    "notification",
    "form/form-basic",
    "form/form-input",
    "calendar",
    "charts",
    "menu",
    "files/files-basic",
    "files/files-extended",
    "core",
    "cms",
    "user",
    "wysiswyg",
  ];

  for (const lib of libraries) {
    const libPath = path.join(projectsDir, lib);
    if (!fs.existsSync(libPath)) {
      console.log(`⚠ Library ${lib} not found, skipping`);
      continue;
    }

    console.log(`\n🔄 Processing library: ${lib}`);
    const componentFiles = findComponentFiles(libPath);

    for (const file of componentFiles) {
      convertComponentToStandalone(file);
    }
  }

  console.log("\n✅ Conversion completed!");
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { convertComponentToStandalone, findComponentFiles };
