const fs = require('fs');
const path = require('path');

function fixTranslateInFile(filePath) {
  try {
    const htmlPath = filePath.replace('.ts', '.html');
    
    // Check if HTML file exists and contains translate pipe
    if (!fs.existsSync(htmlPath)) {
      return false;
    }
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    if (!htmlContent.includes('| translate')) {
      return false;
    }
    
    let tsContent = fs.readFileSync(filePath, 'utf8');
    const originalContent = tsContent;
    
    // Check if TranslateModule is already imported
    if (tsContent.includes('TranslateModule')) {
      return false;
    }
    
    // Add TranslateModule import
    if (tsContent.includes("import { Component")) {
      tsContent = tsContent.replace(
        /(import.*@angular\/core.*;\n)/,
        '$1import { TranslateModule } from \'@ngx-translate/core\';\n'
      );
    }
    
    // Add TranslateModule to imports array
    tsContent = tsContent.replace(
      /(imports:\s*\[([^\]]*)\],)/,
      (match, fullMatch, importsContent) => {
        if (importsContent.trim() === '') {
          return `imports: [TranslateModule],`;
        } else {
          return `imports: [${importsContent.trim()}, TranslateModule],`;
        }
      }
    );
    
    if (tsContent !== originalContent) {
      fs.writeFileSync(filePath, tsContent, 'utf8');
      console.log(`Added TranslateModule to: ${filePath}`);
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
    } else if (file.endsWith('.component.ts')) {
      if (fixTranslateInFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const uiLibPath = path.join(__dirname, 'projects', 'ui', 'src', 'lib');
console.log(`Starting TranslateModule fix in: ${uiLibPath}`);

const fixedFiles = walkDirectory(uiLibPath);
console.log(`Added TranslateModule to ${fixedFiles} files`);