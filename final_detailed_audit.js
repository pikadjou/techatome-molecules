import fs from 'fs';
import path from 'path';

// List of remaining potentially problematic components
const componentsToCheck = [
  'c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase',
  'c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo'
];

function detailedScssAudit(basePath) {
  const scssFile = `${basePath}.component.scss`;
  const componentName = path.basename(basePath);
  
  if (!fs.existsSync(scssFile)) {
    return { component: componentName, issues: ['SCSS file not found'] };
  }
  
  const content = fs.readFileSync(scssFile, 'utf8');
  const issues = [];
  
  // Check for @use statement
  if (!content.includes("@use 'ta/utils/mixins/common';")) {
    issues.push('Missing @use statement');
  }
  
  // Check for hardcoded hex colors (but not in comments)
  const hexColorRegex = /#[0-9a-fA-F]{3,6}/g;
  const hexMatches = content.match(hexColorRegex) || [];
  const realHexColors = hexMatches.filter(hex => {
    // Find the line containing this hex value
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes(hex) && !line.trim().startsWith('//') && !line.includes('/*')) {
        return true;
      }
    }
    return false;
  });
  
  if (realHexColors.length > 0) {
    issues.push(`Hardcoded hex colors: ${realHexColors.join(', ')}`);
  }
  
  // Check for hardcoded px values (excluding border-radius and some specific cases)
  const pxRegex = /(\d+(?:\.\d+)?)px/g;
  const pxMatches = content.match(pxRegex) || [];
  const problematicPx = pxMatches.filter(px => {
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes(px)) {
        // Skip if it's in a comment or if it's using common.get-var
        if (line.trim().startsWith('//') || line.includes('/*') || line.includes('common.get-var')) {
          return false;
        }
        // Skip 1px borders as they're standard
        if (line.includes('1px solid') || line.includes('2px solid')) {
          return false;
        }
        return true;
      }
    }
    return false;
  });
  
  if (problematicPx.length > 0) {
    issues.push(`Hardcoded px values: ${[...new Set(problematicPx)].join(', ')}`);
  }
  
  // Check for hardcoded rem values (excluding those using common.get-var)
  const remRegex = /(\d+(?:\.\d+)?)rem/g;
  const remMatches = content.match(remRegex) || [];
  const problematicRem = remMatches.filter(rem => {
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.includes(rem)) {
        if (line.trim().startsWith('//') || line.includes('/*') || line.includes('common.get-var')) {
          return false;
        }
        return true;
      }
    }
    return false;
  });
  
  if (problematicRem.length > 0) {
    issues.push(`Hardcoded rem values: ${[...new Set(problematicRem)].join(', ')}`);
  }
  
  return { component: componentName, issues };
}

// Run detailed audit
console.log('🔍 DETAILED SCSS AUDIT');
console.log('=====================\n');

for (const component of componentsToCheck) {
  const result = detailedScssAudit(component);
  
  if (result.issues.length === 0) {
    console.log(`✅ **${result.component}.component** - All SCSS standards met`);
  } else {
    console.log(`❌ **${result.component}.component** - Issues found:`);
    result.issues.forEach(issue => {
      console.log(`   - ${issue}`);
    });
  }
  console.log('');
}

console.log('🎯 Detailed SCSS audit complete!');