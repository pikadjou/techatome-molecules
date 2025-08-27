import fs from 'fs';

// Components that still have SCSS issues
const componentsToFix = [
  'c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase.component.scss',
  'c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase.component.scss',
  'c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase.component.scss',
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/components/buttons-demo/buttons-demo.component.scss',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase.component.scss',
  'c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview.component.scss',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons.component.scss',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo.component.scss'
];

function fixScssFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  console.log(`Fixing ${filePath.split('/').pop()}...`);

  // Add @use if not present
  if (!content.includes("@use 'ta/utils/mixins/common';")) {
    content = "@use 'ta/utils/mixins/common';\n\n" + content;
    modified = true;
    console.log('  ✓ Added @use statement');
  }

  // Fix remaining hardcoded values more aggressively
  const colorReplacements = [
    // Background colors
    { from: /background:\s*white/g, to: "background: common.get-var('color-background-primary')" },
    { from: /background-color:\s*white/g, to: "background-color: common.get-var('color-background-primary')" },
    { from: /background:\s*#f8f9fa/g, to: "background: common.get-var('color-neutral-100')" },
    { from: /background:\s*#f5f5f5/g, to: "background: common.get-var('color-neutral-100')" },
    { from: /background:\s*#e9ecef/g, to: "background: common.get-var('color-neutral-200')" },
    { from: /background:\s*#e0e0e0/g, to: "background: common.get-var('color-neutral-300')" },
    
    // Text colors  
    { from: /color:\s*#333/g, to: "color: common.get-var('color-text-primary')" },
    { from: /color:\s*#666/g, to: "color: common.get-var('color-text-secondary')" },
    { from: /color:\s*#999/g, to: "color: common.get-var('color-text-tertiary')" },
    { from: /color:\s*#2196F3/g, to: "color: common.get-var('color-primary')" },
    
    // Border colors
    { from: /border:\s*1px\s+solid\s+#e0e0e0/g, to: "border: common.get-var('border-width') solid common.get-var('color-neutral-300')" },
    { from: /border:\s*1px\s+solid\s+#e9ecef/g, to: "border: common.get-var('border-width') solid common.get-var('color-neutral-300')" },
    { from: /border:\s*2px\s+solid\s+#f0f0f0/g, to: "border: common.get-var('border-width-thick') solid common.get-var('color-neutral-200')" },
    { from: /border-bottom:\s*1px\s+solid\s+#e0e0e0/g, to: "border-bottom: common.get-var('border-width') solid common.get-var('color-neutral-300')" },
    { from: /border-bottom:\s*2px\s+solid\s+#f0f0f0/g, to: "border-bottom: common.get-var('border-width-thick') solid common.get-var('color-neutral-200')" },
    { from: /border-right:\s*1px\s+solid\s+#e0e0e0/g, to: "border-right: common.get-var('border-width') solid common.get-var('color-neutral-300')" },
    
    // Box shadows
    { from: /box-shadow:\s*0\s+6px\s+20px\s+rgba\(0,\s*0,\s*0,\s*0\.1\)/g, to: "box-shadow: common.get-var('shadow-hover')" },
    { from: /box-shadow:\s*0\s+4px\s+6px\s+rgba\(0,\s*0,\s*0,\s*0\.1\)/g, to: "box-shadow: common.get-var('shadow-md')" },
    { from: /box-shadow:\s*0\s+2px\s+4px\s+rgba\(0,\s*0,\s*0,\s*0\.1\)/g, to: "box-shadow: common.get-var('shadow-sm')" },
    
    // Transitions
    { from: /transition:\s*all\s+0\.3s\s+ease/g, to: "transition: all common.get-var('transition-duration') ease" },
    { from: /transition:\s*transform\s+0\.3s\s+ease/g, to: "transition: transform common.get-var('transition-duration') ease" },
  ];

  const spacingReplacements = [
    // Common spacing values
    { from: /padding:\s*2rem/g, to: "padding: common.get-var('spacing-xl')" },
    { from: /padding:\s*1\.5rem/g, to: "padding: common.get-var('spacing-lg')" },
    { from: /padding:\s*1rem/g, to: "padding: common.get-var('spacing-md')" },
    { from: /padding:\s*0\.75rem/g, to: "padding: common.get-var('spacing-sm')" },
    { from: /padding:\s*0\.5rem/g, to: "padding: common.get-var('spacing-xs')" },
    
    { from: /margin:\s*3rem/g, to: "margin: common.get-var('spacing-3xl')" },
    { from: /margin:\s*2rem/g, to: "margin: common.get-var('spacing-xl')" },
    { from: /margin:\s*1\.5rem/g, to: "margin: common.get-var('spacing-lg')" },
    { from: /margin:\s*1rem/g, to: "margin: common.get-var('spacing-md')" },
    { from: /margin:\s*0\.5rem/g, to: "margin: common.get-var('spacing-xs')" },
    
    { from: /margin-bottom:\s*3rem/g, to: "margin-bottom: common.get-var('spacing-3xl')" },
    { from: /margin-bottom:\s*2rem/g, to: "margin-bottom: common.get-var('spacing-xl')" },
    { from: /margin-bottom:\s*1\.5rem/g, to: "margin-bottom: common.get-var('spacing-lg')" },
    { from: /margin-bottom:\s*1rem/g, to: "margin-bottom: common.get-var('spacing-md')" },
    { from: /margin-bottom:\s*0\.5rem/g, to: "margin-bottom: common.get-var('spacing-xs')" },
    
    { from: /gap:\s*1\.5rem/g, to: "gap: common.get-var('spacing-lg')" },
    { from: /gap:\s*1rem/g, to: "gap: common.get-var('spacing-md')" },
    { from: /gap:\s*0\.75rem/g, to: "gap: common.get-var('spacing-sm')" },
    
    // Border radius
    { from: /border-radius:\s*8px/g, to: "border-radius: common.get-var('border-radius-md')" },
    { from: /border-radius:\s*6px/g, to: "border-radius: common.get-var('border-radius-sm')" },
    
    // Font sizes
    { from: /font-size:\s*2\.5rem/g, to: "font-size: common.get-var('font-size-h1')" },
    { from: /font-size:\s*2rem/g, to: "font-size: common.get-var('font-size-h1')" },
    { from: /font-size:\s*1\.3rem/g, to: "font-size: common.get-var('font-size-h2')" },
    { from: /font-size:\s*1\.2rem/g, to: "font-size: common.get-var('font-size-h3')" },
    { from: /font-size:\s*1\.1rem/g, to: "font-size: common.get-var('font-size-lg')" },
    { from: /font-size:\s*0\.9rem/g, to: "font-size: common.get-var('font-size-sm')" },
    
    // Line heights
    { from: /line-height:\s*1\.6/g, to: "line-height: common.get-var('line-height-normal')" },
    { from: /line-height:\s*1\.4/g, to: "line-height: common.get-var('line-height-tight')" },
    
    // Font weights
    { from: /font-weight:\s*600/g, to: "font-weight: common.get-var('font-weight-semibold')" },
    { from: /font-weight:\s*300/g, to: "font-weight: common.get-var('font-weight-light')" },
    
    // Widths
    { from: /max-width:\s*1000px/g, to: "max-width: common.get-var('container-max-width', 1000px)" },
    { from: /width:\s*280px/g, to: "width: common.get-var('sidebar-width', 280px)" },
    { from: /height:\s*200px/g, to: "height: common.get-var('demo-layout-height', 200px)" }
  ];

  // Apply all replacements
  const allReplacements = [...colorReplacements, ...spacingReplacements];
  
  for (const replacement of allReplacements) {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  }

  // Fix selectors for ta-* components
  const selectorReplacements = [
    { from: /\bh1\s*\{/g, to: 'ta-title {' },
    { from: /\bh2\s*\{/g, to: 'ta-title {' },
    { from: /\bh3\s*\{/g, to: 'ta-title {' },
    { from: /\bp\s*\{/g, to: 'ta-text {' }
  ];

  for (const replacement of selectorReplacements) {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
      console.log('  ✓ Updated selectors for ta-* components');
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('  ✅ SCSS file fixed');
    return true;
  } else {
    console.log('  ℹ️  No changes needed');
    return false;
  }
}

// Fix all remaining SCSS files
console.log('🔧 Fixing remaining SCSS files...\n');

let fixedCount = 0;
for (const filePath of componentsToFix) {
  if (fixScssFile(filePath)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} SCSS files`);
console.log('🎉 SCSS fixes complete!');