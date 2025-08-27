const fs = require('fs');
const path = require('path');

function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith('.component.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixComponentFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let isModified = false;
  
  // Fix broken @Component decorators
  if (content.includes('  ],\n})') && !content.includes('@Component({')) {
    // Missing @Component decorator, need to add it back
    const importsEnd = content.lastIndexOf('import');
    const afterImports = content.indexOf('\n', importsEnd) + 1;
    
    // Extract filename to get selector
    const filename = path.basename(filePath, '.component.ts');
    const selector = `ta-${filename.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`;
    
    const templateName = filename + '.component.html';
    const styleName = filename + '.component.scss';
    
    const componentPart = content.substring(afterImports);
    const exportIndex = componentPart.indexOf('export class');
    
    if (exportIndex > 0) {
      const beforeExport = componentPart.substring(0, exportIndex);
      const afterExport = componentPart.substring(exportIndex);
      
      // Extract imports array from the broken syntax
      const importsMatch = beforeExport.match(/imports:\s*\[([\s\S]*?)\]/);
      let importsArray = [];
      if (importsMatch) {
        importsArray = importsMatch[1]
          .split(',')
          .map(s => s.trim())
          .filter(s => s && s !== ']')
          .map(s => s.replace(/[,\]]/g, '').trim());
      }
      
      const newComponent = `@Component({
  selector: '${selector}',
  templateUrl: './${templateName}',
  styleUrls: ['./${styleName}'],
  standalone: true,
  imports: [${importsArray.join(', ')}],
})
${afterExport}`;
      
      content = content.substring(0, afterImports) + '\n' + newComponent;
      isModified = true;
    }
  }
  
  // Fix styleUrl -> styleUrls
  if (content.includes('styleUrl:')) {
    content = content.replace(/styleUrl:/g, 'styleUrls:');
    content = content.replace(/styleUrls:\s*'([^']+)'/g, "styleUrls: ['$1']");
    isModified = true;
  }
  
  // Fix broken imports array syntax
  const componentMatch = content.match(/@Component\s*\(\s*\{([\s\S]*?)\}\s*\)/);
  if (componentMatch) {
    const componentContent = componentMatch[1];
    
    // Fix broken imports array
    if (componentContent.includes('imports:') && componentContent.includes('  ],')) {
      const importsMatch = componentContent.match(/imports:\s*\[([\s\S]*?)\]/);
      if (importsMatch) {
        const importsContent = importsMatch[1];
        const imports = importsContent
          .split('\n')
          .map(line => line.trim())
          .filter(line => line && line !== ',' && line !== ']' && line !== '[')
          .map(line => line.replace(/,$/, '').trim())
          .filter(line => line);
        
        if (imports.length > 0) {
          const newImportsArray = `imports: [${imports.join(', ')}]`;
          content = content.replace(/imports:\s*\[[^\]]*\]/s, newImportsArray);
          isModified = true;
        }
      }
    }
  }
  
  // Remove duplicate imports
  const lines = content.split('\n');
  const importLines = [];
  const nonImportLines = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      if (!seenImports.has(line.trim())) {
        seenImports.add(line.trim());
        importLines.push(line);
      }
    } else {
      nonImportLines.push(line);
    }
  }
  
  if (importLines.length > 0 && nonImportLines.length > 0) {
    const newContent = importLines.join('\n') + '\n\n' + nonImportLines.join('\n');
    if (newContent !== content) {
      content = newContent;
      isModified = true;
    }
  }
  
  if (isModified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
}

function main() {
  const notificationDir = './projects/notification/src/lib/components';
  
  if (!fs.existsSync(notificationDir)) {
    console.error('Notification directory not found');
    return;
  }
  
  const tsFiles = findTsFiles(notificationDir);
  
  tsFiles.forEach(tsFile => {
    try {
      fixComponentFile(tsFile);
    } catch (error) {
      console.error(`Error fixing ${tsFile}:`, error.message);
    }
  });
  
  console.log('Syntax fixing completed!');
}

main();