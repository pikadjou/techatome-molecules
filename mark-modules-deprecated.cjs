const fs = require('fs');
const path = require('path');

// Fonction pour marquer un NgModule comme deprecated
function markModuleAsDeprecated(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si le module est déjà marqué comme deprecated
    if (content.includes('@deprecated')) {
      console.log(`✓ ${filePath} is already marked as deprecated`);
      return;
    }
    
    // Identifier le nom du module pour des messages d'exemple appropriés
    const moduleNameMatch = content.match(/export class (\w+Module)/);
    const moduleName = moduleNameMatch ? moduleNameMatch[1] : 'Module';
    
    // Extraire les composants exportés pour les exemples
    const exportsMatch = content.match(/exports:\s*\[([\s\S]*?)\]/);
    let componentExamples = '';
    
    if (exportsMatch) {
      const exports = exportsMatch[1]
        .split(',')
        .map(exp => exp.trim())
        .filter(exp => exp && !exp.includes('//'))
        .slice(0, 3); // Prendre les 3 premiers pour l'exemple
      
      if (exports.length > 0) {
        componentExamples = `
 * 
 * @example
 * // Instead of importing the module:
 * // import { ${moduleName} } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { ${exports.join(', ')} } from '@ta/library-name';`;
      }
    }
    
    // Créer le commentaire de deprecation
    const deprecationComment = `/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.${componentExamples}
 */
`;
    
    // Trouver le décorateur @NgModule et ajouter le commentaire avant
    const ngModuleMatch = content.match(/(@NgModule\s*\(\s*\{[\s\S]*?\}\s*\))/);
    if (ngModuleMatch) {
      const ngModuleDecorator = ngModuleMatch[1];
      const newContent = content.replace(
        ngModuleDecorator,
        deprecationComment + ngModuleDecorator
      );
      
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Marked ${filePath} as deprecated`);
    } else {
      console.log(`⚠ No @NgModule found in ${filePath}`);
    }
    
  } catch (error) {
    console.error(`✗ Error marking ${filePath} as deprecated:`, error.message);
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
    } else if (item.endsWith('.module.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Point d'entrée principal
function main() {
  const projectsDir = path.join(__dirname, 'projects');
  
  console.log('🔄 Marking all NgModules as deprecated...\n');
  
  const moduleFiles = findModuleFiles(projectsDir);
  
  for (const file of moduleFiles) {
    markModuleAsDeprecated(file);
  }
  
  console.log('\n✅ All modules marked as deprecated!');
}

// Exécuter le script
if (require.main === module) {
  main();
}

module.exports = { markModuleAsDeprecated, findModuleFiles };