import fs from 'fs';
import path from 'path';

// List of all components that need fixing
const components = [
  'c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/dashboard/dashboard',
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/category-list/category-list',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/showcase/showcase',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo',
  'c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview'
];

function fixTypeScriptImports(basePath) {
  const tsFile = `${basePath}.component.ts`;
  const htmlFile = `${basePath}.component.html`;
  
  if (!fs.existsSync(tsFile) || !fs.existsSync(htmlFile)) {
    return false;
  }
  
  const componentName = path.basename(basePath);
  console.log(`Checking ${componentName}...`);
  
  let tsContent = fs.readFileSync(tsFile, 'utf8');
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');
  
  const needsTitleComponent = htmlContent.includes('<ta-title') || htmlContent.includes('</ta-title>');
  const needsTextComponent = htmlContent.includes('<ta-text') || htmlContent.includes('</ta-text>');
  const needsButtonComponent = htmlContent.includes('<ta-button') || htmlContent.includes('</ta-button>');
  
  let modified = false;
  
  // Check if we need to add imports
  const needsImports = [];
  
  if (needsTitleComponent && !tsContent.includes('TitleComponent')) {
    needsImports.push('TitleComponent');
  }
  if (needsTextComponent && !tsContent.includes('TextComponent')) {
    needsImports.push('TextComponent');
  }
  if (needsButtonComponent && !tsContent.includes('ButtonComponent')) {
    needsImports.push('ButtonComponent');
  }
  
  if (needsImports.length > 0) {
    console.log(`  Need to add: ${needsImports.join(', ')}`);
    
    // Check if there's already a @ta/ui import
    const taUiImportMatch = tsContent.match(/import\s*{\s*([^}]+)\s*}\s*from\s*'@ta\/ui';/);
    
    if (taUiImportMatch) {
      // Add to existing import
      const existingImports = taUiImportMatch[1].split(',').map(s => s.trim()).filter(s => s);
      const allImports = [...new Set([...existingImports, ...needsImports])].sort();
      
      tsContent = tsContent.replace(
        /import\s*{\s*([^}]+)\s*}\s*from\s*'@ta\/ui';/,
        `import { ${allImports.join(', ')} } from '@ta/ui';`
      );
      modified = true;
    } else {
      // Add new import after other imports
      const lastImportMatch = tsContent.match(/^import.*$/gm);
      if (lastImportMatch) {
        const lastImport = lastImportMatch[lastImportMatch.length - 1];
        const insertPoint = tsContent.indexOf(lastImport) + lastImport.length;
        const newImport = `\nimport { ${needsImports.join(', ')} } from '@ta/ui';`;
        
        tsContent = tsContent.slice(0, insertPoint) + newImport + tsContent.slice(insertPoint);
        modified = true;
      }
    }
    
    // Add to component imports array
    const componentImportsMatch = tsContent.match(/imports:\s*\[([^\]]+)\]/);
    if (componentImportsMatch && modified) {
      const currentImports = componentImportsMatch[1]
        .split(',')
        .map(s => s.trim())
        .filter(s => s);
      
      const allComponentImports = [...new Set([...currentImports, ...needsImports])].sort();
      
      tsContent = tsContent.replace(
        /imports:\s*\[([^\]]+)\]/,
        `imports: [${allComponentImports.join(', ')}]`
      );
    }
  }
  
  if (modified) {
    fs.writeFileSync(tsFile, tsContent, 'utf8');
    console.log(`  ✅ Fixed imports for ${componentName}`);
    return true;
  } else {
    console.log(`  ℹ️  No import changes needed for ${componentName}`);
    return false;
  }
}

// Run the fixes
console.log('🔧 Starting TypeScript import fixes...\n');

let totalFixed = 0;
for (const component of components) {
  if (fixTypeScriptImports(component)) {
    totalFixed++;
  }
}

console.log(`\n✅ Fixed imports for ${totalFixed} components`);
console.log('🎉 TypeScript import fixes complete!');