import fs from "fs";
import path from "path";

// List of all components to fix
const components = [
  "c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/dashboard/dashboard",
  // Features components
  "c:/Techatome/techatome-molecules/src/app/features/categories/components/category-list/category-list",
  "c:/Techatome/techatome-molecules/src/app/features/categories/components/document-list/document-list",
  "c:/Techatome/techatome-molecules/src/app/features/categories/components/form/form",
  "c:/Techatome/techatome-molecules/src/app/features/categories/components/list/list",
  "c:/Techatome/techatome-molecules/src/app/features/categories/components/sub/sub",
  "c:/Techatome/techatome-molecules/src/app/features/categories/pages/form/form",
  "c:/Techatome/techatome-molecules/src/app/features/categories/pages/list/list",
  "c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase",
  "c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-content/layout-content",
  "c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-first-level/layout-first-level",
  "c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-title/layout-title",
  "c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons",
  "c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/showcase/showcase",
  "c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo",
  "c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview",
];

function fixTypeScriptFile(filePath) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  let needsTitleComponent = false;
  let needsTextComponent = false;
  let needsButtonComponent = false;
  let modified = false;

  // Check if HTML file exists and contains problematic elements
  const htmlPath = filePath.replace(".component.ts", ".component.html");
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, "utf8");
    needsTitleComponent =
      htmlContent.includes("<h1>") ||
      htmlContent.includes("<h2>") ||
      htmlContent.includes("<h3>");
    needsTextComponent = htmlContent.includes("<p>");
    needsButtonComponent = htmlContent.includes("<button>");
  }

  // Add imports if needed
  if (
    (needsTitleComponent || needsTextComponent || needsButtonComponent) &&
    !content.includes("TitleComponent")
  ) {
    const importRegex = /import\s*{([^}]+)}\s*from\s*'@ta\/ui';/;
    const match = content.match(importRegex);

    if (match) {
      const currentImports = match[1]
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s);
      const newImports = [...currentImports];

      if (needsTitleComponent && !currentImports.includes("TitleComponent")) {
        newImports.push("TitleComponent");
      }
      if (needsTextComponent && !currentImports.includes("TextComponent")) {
        newImports.push("TextComponent");
      }
      if (needsButtonComponent && !currentImports.includes("ButtonComponent")) {
        newImports.push("ButtonComponent");
      }

      if (newImports.length > currentImports.length) {
        content = content.replace(
          importRegex,
          `import { ${newImports.join(", ")} } from '@ta/ui';`
        );
        modified = true;

        // Also add to imports array in @Component
        const importsRegex = /imports:\s*\[([^\]]+)\]/;
        const importsMatch = content.match(importsRegex);
        if (importsMatch) {
          const currentComponentImports = importsMatch[1]
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s);
          const newComponentImports = [...currentComponentImports];

          if (
            needsTitleComponent &&
            !currentComponentImports.includes("TitleComponent")
          ) {
            newComponentImports.push("TitleComponent");
          }
          if (
            needsTextComponent &&
            !currentComponentImports.includes("TextComponent")
          ) {
            newComponentImports.push("TextComponent");
          }
          if (
            needsButtonComponent &&
            !currentComponentImports.includes("ButtonComponent")
          ) {
            newComponentImports.push("ButtonComponent");
          }

          content = content.replace(
            importsRegex,
            `imports: [${newComponentImports.join(", ")}]`
          );
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

function fixHtmlFile(filePath) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Replace HTML elements with ta-* components
  const replacements = [
    { from: /<h1([^>]*)>/g, to: '<ta-title level="h1"$1>' },
    { from: /<\/h1>/g, to: "</ta-title>" },
    { from: /<h2([^>]*)>/g, to: '<ta-title level="h2"$1>' },
    { from: /<\/h2>/g, to: "</ta-title>" },
    { from: /<h3([^>]*)>/g, to: '<ta-title level="h3"$1>' },
    { from: /<\/h3>/g, to: "</ta-title>" },
    { from: /<p([^>]*)>/g, to: "<ta-text$1>" },
    { from: /<\/p>/g, to: "</ta-text>" },
  ];

  for (const replacement of replacements) {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

function fixScssFile(filePath) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Add @use if not present
  if (!content.includes("@use 'ta/utils/mixins/common';")) {
    content = "@use 'ta/utils/mixins/common';\n\n" + content;
    modified = true;
  }

  // Replace hardcoded values with common.get-var() calls
  const replacements = [
    // Colors
    { from: /#333/g, to: "common.get-var('color-text-primary')" },
    { from: /#666/g, to: "common.get-var('color-text-secondary')" },
    { from: /#999/g, to: "common.get-var('color-text-tertiary')" },
    { from: /#f5f5f5/g, to: "common.get-var('color-neutral-100')" },
    { from: /#f8f9fa/g, to: "common.get-var('color-neutral-100')" },
    { from: /#e0e0e0/g, to: "common.get-var('color-neutral-300')" },
    { from: /#e9ecef/g, to: "common.get-var('color-neutral-300')" },
    { from: /#ced4da/g, to: "common.get-var('color-neutral-400')" },
    { from: /#2196F3/g, to: "common.get-var('color-primary')" },
    { from: /white/g, to: "common.get-var('color-background-primary')" },

    // Spacing
    { from: /1rem/g, to: "common.get-var('spacing-md')" },
    { from: /1\.5rem/g, to: "common.get-var('spacing-lg')" },
    { from: /2rem/g, to: "common.get-var('spacing-xl')" },
    { from: /3rem/g, to: "common.get-var('spacing-3xl')" },
    { from: /0\.5rem/g, to: "common.get-var('spacing-xs')" },
    { from: /0\.75rem/g, to: "common.get-var('spacing-sm')" },

    // Font sizes
    { from: /2\.5rem/g, to: "common.get-var('font-size-h1')" },
    { from: /2rem/g, to: "common.get-var('font-size-h1')" },
    { from: /1\.3rem/g, to: "common.get-var('font-size-h2')" },
    { from: /1\.2rem/g, to: "common.get-var('font-size-h3')" },
    { from: /1\.1rem/g, to: "common.get-var('font-size-lg')" },

    // Border radius
    { from: /8px/g, to: "common.get-var('border-radius-md')" },
    { from: /6px/g, to: "common.get-var('border-radius-sm')" },

    // Borders
    { from: /1px solid/g, to: "common.get-var('border-width') solid" },
    { from: /2px solid/g, to: "common.get-var('border-width-thick') solid" },

    // Update selectors for ta-* components
    { from: /h1\s*{/g, to: "ta-title {" },
    { from: /h2\s*{/g, to: "ta-title {" },
    { from: /h3\s*{/g, to: "ta-title {" },
    { from: /p\s*{/g, to: "ta-text {" },
  ];

  for (const replacement of replacements) {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

function fixComponent(basePath) {
  const tsFile = `${basePath}.component.ts`;
  const htmlFile = `${basePath}.component.html`;
  const scssFile = `${basePath}.component.scss`;

  const componentName = path.basename(basePath);

  console.log(`Fixing ${componentName}...`);

  const tsFixed = fixTypeScriptFile(tsFile);
  const htmlFixed = fixHtmlFile(htmlFile);
  const scssFixed = fixScssFile(scssFile);

  if (tsFixed || htmlFixed || scssFixed) {
    console.log(
      `  ✅ Fixed ${componentName} (TS: ${tsFixed ? "✅" : "-"}, HTML: ${
        htmlFixed ? "✅" : "-"
      }, SCSS: ${scssFixed ? "✅" : "-"})`
    );
  } else {
    console.log(`  ℹ️  No changes needed for ${componentName}`);
  }

  return { tsFixed, htmlFixed, scssFixed };
}

// Run the fixes
console.log("🔧 Starting automatic component fixes...\n");

let totalFixed = 0;
for (const component of components) {
  const result = fixComponent(component);
  if (result.tsFixed || result.htmlFixed || result.scssFixed) {
    totalFixed++;
  }
}

console.log(`\n✅ Fixed ${totalFixed} components out of ${components.length}`);
console.log("🎉 Automatic component fixes complete!");
