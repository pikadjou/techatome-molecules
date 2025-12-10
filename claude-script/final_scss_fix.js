import fs from "fs";

const filesToFix = [
  "c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase.component.scss",
  "c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase.component.scss",
  "c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase.component.scss",
  "c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase.component.scss",
  "c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview.component.scss",
  "c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons.component.scss",
  "c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo.component.scss",
];

function finalScssCleanup(filePath) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  console.log(`Fixing ${filePath.split("/").pop()}...`);

  // Comprehensive color replacements
  const colorFixes = [
    // Brand/UI colors
    { from: /#f0f0f0/g, to: "common.get-var('color-neutral-200')" },
    { from: /#6c757d/g, to: "common.get-var('color-text-tertiary')" },
    { from: /#e3f2fd/g, to: "common.get-var('color-primary-light')" },
    { from: /#1565c0/g, to: "common.get-var('color-primary-dark')" },
    { from: /#21CBF3/g, to: "common.get-var('color-info')" },
    { from: /#4CAF50/g, to: "common.get-var('color-success')" },
    { from: /#45a049/g, to: "common.get-var('color-success-dark')" },
    { from: /#FF9800/g, to: "common.get-var('color-warning')" },
    { from: /#F57C00/g, to: "common.get-var('color-warning-dark')" },
    { from: /#F44336/g, to: "common.get-var('color-danger')" },
    { from: /#D32F2F/g, to: "common.get-var('color-danger-dark')" },
    { from: /#1976D2/g, to: "common.get-var('color-primary')" },
    { from: /#d0d0d0/g, to: "common.get-var('color-neutral-400')" },
    { from: /#555/g, to: "common.get-var('color-text-secondary')" },
    { from: /#5a6268/g, to: "common.get-var('color-text-tertiary')" },
  ];

  // Size/spacing replacements
  const sizeFixes = [
    // Common spacing values
    { from: /\b4rem\b/g, to: "common.get-var('spacing-4xl')" },
    { from: /\b1\.8rem\b/g, to: "common.get-var('spacing-lg')" },
    { from: /\b1\.6rem\b/g, to: "common.get-var('spacing-lg')" },
    { from: /\b1\.4rem\b/g, to: "common.get-var('spacing-lg')" },
    { from: /\b0\.95rem\b/g, to: "common.get-var('spacing-md')" },
    { from: /\b0\.875rem\b/g, to: "common.get-var('spacing-sm')" },
    { from: /\b0\.8rem\b/g, to: "common.get-var('spacing-sm')" },
    { from: /\b0\.7rem\b/g, to: "common.get-var('spacing-sm')" },
    { from: /\b0\.25rem\b/g, to: "common.get-var('spacing-xs')" },

    // Common pixel values
    { from: /\b800px\b/g, to: "common.get-var('container-lg', 800px)" },
    { from: /\b300px\b/g, to: "common.get-var('card-width', 300px)" },
    { from: /\b250px\b/g, to: "common.get-var('card-width-sm', 250px)" },
    { from: /\b200px\b/g, to: "common.get-var('widget-height', 200px)" },
    { from: /\b120px\b/g, to: "common.get-var('icon-size-2xl', 120px)" },
    { from: /\b60px\b/g, to: "common.get-var('icon-size-xl', 60px)" },
    { from: /\b50px\b/g, to: "common.get-var('icon-size-lg', 50px)" },
    { from: /\b30px\b/g, to: "common.get-var('icon-size-md', 30px)" },
    { from: /\b20px\b/g, to: "common.get-var('spacing-md')" },
    { from: /\b12px\b/g, to: "common.get-var('spacing-sm')" },
    { from: /\b10px\b/g, to: "common.get-var('spacing-xs')" },
    { from: /\b4px\b/g, to: "common.get-var('border-radius-xs')" },
    { from: /\b2px\b/g, to: "common.get-var('border-width-thick')" },
    { from: /\b1px\b/g, to: "common.get-var('border-width')" },
  ];

  // Apply all fixes
  const allFixes = [...colorFixes, ...sizeFixes];

  for (const fix of allFixes) {
    if (fix.from.test(content)) {
      content = content.replace(fix.from, fix.to);
      modified = true;
      console.log(`  ✓ Fixed: ${fix.from.source}`);
    }
  }

  // Special case for width/max-width containers that weren't caught
  if (
    content.includes("max-width: 1000px") &&
    !content.includes("common.get-var")
  ) {
    content = content.replace(
      /max-width:\s*1000px/g,
      "max-width: common.get-var('container-max-width', 1000px)"
    );
    modified = true;
    console.log("  ✓ Fixed container max-width");
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("  ✅ File successfully updated");
    return true;
  } else {
    console.log("  ℹ️  No changes needed");
    return false;
  }
}

// Process all files
console.log("🔧 FINAL SCSS CLEANUP");
console.log("====================\n");

let totalFixed = 0;
for (const filePath of filesToFix) {
  if (finalScssCleanup(filePath)) {
    totalFixed++;
  }
}

console.log(`\n✅ Successfully processed ${totalFixed} files`);
console.log("🎉 Final SCSS cleanup complete!");
