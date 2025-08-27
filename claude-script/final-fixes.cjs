const fs = require('fs');
const path = require('path');

const fixes = [
  // Fix import paths
  {
    pattern: /import\s*\{\s*(\w+)\s*\}\s*from\s*'\.\.\/\.\.\/([^']+)'/g,
    replacement: (match, componentName, wrongPath) => {
      // Map common paths
      if (wrongPath.includes('user-logo/user-logo.component')) {
        return `import { ${componentName} } from '../user-logo/user-logo.component'`;
      }
      if (wrongPath.includes('button/button.component')) {
        return `import { ${componentName} } from '../button/button.component'`;
      }
      if (wrongPath.includes('bullet/bullet.component')) {
        return `import { ${componentName} } from '../bullet/bullet.component'`;
      }
      if (wrongPath.includes('typed-message/typed-message.component')) {
        return `import { ${componentName} } from '../typed-message/typed-message.component'`;
      }
      if (wrongPath.includes('title/title.component')) {
        return `import { ${componentName} } from '../title/title.component'`;
      }
      if (wrongPath.includes('progress-bar/progress-bar.component')) {
        return `import { ${componentName} } from '../progress-bar/progress-bar.component'`;
      }
      if (wrongPath.includes('logo/logo.component')) {
        return `import { ${componentName} } from '../logo/logo.component'`;
      }
      if (wrongPath.includes('link/link.component')) {
        return `import { ${componentName} } from '../link/link.component'`;
      }
      if (wrongPath.includes('text/text.component')) {
        return `import { ${componentName} } from '../text/text.component'`;
      }
      if (wrongPath.includes('picture-info-message/picture-info-message.component')) {
        return `import { ${componentName} } from '../../components/ui/picture-info-message/picture-info-message.component'`;
      }
      
      return match;
    }
  },
  // Fix type assignments
  {
    pattern: /type:\s*ColorType\s*=\s*'default'/g,
    replacement: "type: ColorType = 'primary'"
  },
  {
    pattern: /state:\s*TaState\s*=\s*'classic'/g,
    replacement: "state: TaState = 'completed'"
  },
  {
    pattern: /this\.state\s*===\s*'classic'/g,
    replacement: "this.state === 'completed'"
  }
];

function applyFixes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Applied fixes to: ${filePath}`);
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
      if (applyFixes(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const uiLibPath = path.join(__dirname, 'projects', 'ui', 'src', 'lib');
console.log(`Starting final fixes in: ${uiLibPath}`);

const fixedFiles = walkDirectory(uiLibPath);
console.log(`Applied fixes to ${fixedFiles} files`);