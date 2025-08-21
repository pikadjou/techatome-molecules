import fs from 'fs';
import path from 'path';

// Comprehensive list of ALL components to audit
const allComponents = [
  // Main pages
  'c:/Techatome/techatome-molecules/src/app/app',
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/ui-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/layout-showcase/layout-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase',
  'c:/Techatome/techatome-molecules/src/app/pages/dashboard/dashboard',
  
  // UI Showcase components
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/components/buttons-demo/buttons-demo',
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/components/badges-demo/badges-demo',
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/components/banners-demo/banners-demo',
  'c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/components/cards-demo/cards-demo',
  
  // Categories feature
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/category-list/category-list',
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/document-list/document-list',
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/form/form',
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/list/list',
  'c:/Techatome/techatome-molecules/src/app/features/categories/components/sub/sub',
  'c:/Techatome/techatome-molecules/src/app/features/categories/pages/form/form',
  'c:/Techatome/techatome-molecules/src/app/features/categories/pages/list/list',
  
  // Charts feature
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/bar-chart/bar-chart',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/doughnut-chart/doughnut-chart',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/line-chart/line-chart',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/pie-chart/pie-chart',
  'c:/Techatome/techatome-molecules/src/app/features/charts/pages/showcase/showcase',
  
  // Core layout
  'c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-content/layout-content',
  'c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-first-level/layout-first-level',
  'c:/Techatome/techatome-molecules/src/app/features/core/layout/layout-title/layout-title',
  
  // Dashboard feature
  'c:/Techatome/techatome-molecules/src/app/features/dashboard/pages/overview/overview',
  
  // UI Components feature
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/badges/badges',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/banners/banners',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/buttons/buttons',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/cards/cards',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/pages/showcase/showcase',
  'c:/Techatome/techatome-molecules/src/app/features/ui-components/components/buttons-demo/buttons-demo'
];

function auditComponent(basePath) {
  const tsFile = `${basePath}.component.ts`;
  const htmlFile = `${basePath}.component.html`;
  const scssFile = `${basePath}.component.scss`;
  
  const componentName = path.basename(basePath);
  
  const report = {
    component: componentName,
    filesExist: {
      ts: fs.existsSync(tsFile),
      html: fs.existsSync(htmlFile),
      scss: fs.existsSync(scssFile)
    },
    standards: {
      separateFiles: true,
      htmlTaComponents: true,
      scssGetVar: true,
      tsImports: true
    },
    issues: []
  };
  
  if (!report.filesExist.ts || !report.filesExist.html || !report.filesExist.scss) {
    report.standards.separateFiles = false;
    report.issues.push('Missing files');
    return report;
  }

  // Check HTML for non-ta elements
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');
  if (htmlContent.includes('<h1>') || htmlContent.includes('<h2>') || htmlContent.includes('<h3>') || htmlContent.includes('<p>') || htmlContent.includes('<button>')) {
    report.standards.htmlTaComponents = false;
    report.issues.push('Uses native HTML elements instead of ta-* components');
  }

  // Check SCSS for hardcoded values and missing @use
  const scssContent = fs.readFileSync(scssFile, 'utf8');
  if (!scssContent.includes("@use 'ta/utils/mixins/common';") || 
      (scssContent.includes('#') && scssContent.match(/#[0-9a-fA-F]{3,6}/)) ||
      (scssContent.includes('px') && !scssContent.includes('common.get-var'))) {
    report.standards.scssGetVar = false;
    report.issues.push('SCSS issues: missing @use or hardcoded values');
  }

  // Check TypeScript for missing imports
  const tsContent = fs.readFileSync(tsFile, 'utf8');
  const needsTitleComponent = htmlContent.includes('<ta-title') || htmlContent.includes('</ta-title>');
  const needsTextComponent = htmlContent.includes('<ta-text') || htmlContent.includes('</ta-text>');
  const needsButtonComponent = htmlContent.includes('<ta-button') || htmlContent.includes('</ta-button>');
  
  if ((needsTitleComponent && !tsContent.includes('TitleComponent')) ||
      (needsTextComponent && !tsContent.includes('TextComponent')) ||
      (needsButtonComponent && !tsContent.includes('ButtonComponent'))) {
    report.standards.tsImports = false;
    report.issues.push('Missing TypeScript imports for ta-* components');
  }
  
  return report;
}

// Generate comprehensive report
console.log('🔍 COMPREHENSIVE COMPONENT AUDIT REPORT');
console.log('=====================================\n');

const results = {
  total: allComponents.length,
  compliant: 0,
  nonCompliant: 0,
  byStandard: {
    separateFiles: 0,
    htmlTaComponents: 0,
    scssGetVar: 0,
    tsImports: 0
  }
};

const nonCompliantComponents = [];

for (const component of allComponents) {
  const report = auditComponent(component);
  
  const isCompliant = report.standards.separateFiles && 
                     report.standards.htmlTaComponents && 
                     report.standards.scssGetVar && 
                     report.standards.tsImports;
  
  if (isCompliant) {
    results.compliant++;
  } else {
    results.nonCompliant++;
    nonCompliantComponents.push(report);
  }
  
  // Count by standard
  if (report.standards.separateFiles) results.byStandard.separateFiles++;
  if (report.standards.htmlTaComponents) results.byStandard.htmlTaComponents++;
  if (report.standards.scssGetVar) results.byStandard.scssGetVar++;
  if (report.standards.tsImports) results.byStandard.tsImports++;
  
  // Print component status
  const statusIcon = isCompliant ? '✅' : '❌';
  console.log(`${statusIcon} **${report.component}.component**`);
  console.log(`   - Fichiers séparés: ${report.standards.separateFiles ? '✅' : '❌'}`);
  console.log(`   - HTML avec ta-*: ${report.standards.htmlTaComponents ? '✅' : '❌'}`);
  console.log(`   - SCSS avec get-var: ${report.standards.scssGetVar ? '✅' : '❌'}`);
  console.log(`   - Imports ta-*: ${report.standards.tsImports ? '✅' : '❌'}`);
  if (report.issues.length > 0) {
    console.log(`   - Issues: ${report.issues.join(', ')}`);
  }
  console.log('');
}

console.log('📊 SUMMARY STATISTICS');
console.log('==================');
console.log(`Total Components: ${results.total}`);
console.log(`✅ Compliant: ${results.compliant} (${Math.round(results.compliant/results.total*100)}%)`);
console.log(`❌ Non-Compliant: ${results.nonCompliant} (${Math.round(results.nonCompliant/results.total*100)}%)`);
console.log('');
console.log('📋 STANDARDS COMPLIANCE:');
console.log(`- Separate Files: ${results.byStandard.separateFiles}/${results.total} (${Math.round(results.byStandard.separateFiles/results.total*100)}%)`);
console.log(`- HTML ta-* Components: ${results.byStandard.htmlTaComponents}/${results.total} (${Math.round(results.byStandard.htmlTaComponents/results.total*100)}%)`);
console.log(`- SCSS get-var: ${results.byStandard.scssGetVar}/${results.total} (${Math.round(results.byStandard.scssGetVar/results.total*100)}%)`);
console.log(`- TypeScript Imports: ${results.byStandard.tsImports}/${results.total} (${Math.round(results.byStandard.tsImports/results.total*100)}%)`);

if (nonCompliantComponents.length > 0) {
  console.log('\n🚨 NON-COMPLIANT COMPONENTS:');
  console.log('===========================');
  nonCompliantComponents.forEach(component => {
    console.log(`- ${component.component}: ${component.issues.join(', ')}`);
  });
}

console.log('\n🎯 AUDIT COMPLETE!');