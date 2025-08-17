const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace @ta/styles imports with local types
    content = content.replace(/import\s*\{\s*([^}]*)\s*\}\s*from\s*['"]@ta\/styles['"];?/g, (match, imports) => {
      // Calculate relative path to types/sizes.ts
      const dir = path.dirname(filePath);
      const libDir = path.join(__dirname, 'projects', 'ui', 'src', 'lib');
      const relativeToLib = path.relative(libDir, dir);
      const depthLevel = relativeToLib.split(path.sep).length;
      const relativePath = '../'.repeat(depthLevel) + 'types/sizes';
      
      // Map old imports to new names
      const importMappings = {
        'CamSizes': 'TaSizes',
        'CamState': 'TaState',
        'ColorType': 'ColorType'
      };
      
      const mappedImports = imports.split(',').map(imp => {
        const trimmed = imp.trim();
        return importMappings[trimmed] || trimmed;
      }).join(', ');
      
      return `import { ${mappedImports} } from '${relativePath}';`;
    });

    // Replace @ta/utils CamStopPropagationDirective with StopPropagationDirective
    content = content.replace(/CamStopPropagationDirective/g, 'StopPropagationDirective');
    
    // Replace type usage
    content = content.replace(/CamSizes/g, 'TaSizes');
    content = content.replace(/CamState/g, 'TaState');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixedCount += walkDirectory(fullPath);
    } else if (file.endsWith('.ts')) {
      if (fixImportsInFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const uiLibPath = path.join(__dirname, 'projects', 'ui', 'src', 'lib');
console.log(`Starting import fix in: ${uiLibPath}`);

const fixedFiles = walkDirectory(uiLibPath);
console.log(`Fixed imports in ${fixedFiles} files`);