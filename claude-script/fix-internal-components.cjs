const fs = require('fs');
const path = require('path');

// Component mapping for ta- components
const componentMap = {
  'ta-picture-info-message': {
    component: 'PictureInfoMessageComponent',
    path: '../../picture-info-message/picture-info-message.component'
  },
  'ta-hello-user': {
    component: 'HelloUserComponent', 
    path: '../../hello-user/hello-user.component'
  },
  'ta-file-image': {
    component: 'FileImageComponent',
    path: '../../file-image/file-image.component'
  },
  'ta-user-logo': {
    component: 'UserLogoComponent',
    path: '../../user-logo/user-logo.component'
  },
  'ta-link': {
    component: 'LinkComponent',
    path: '../../link/link.component'
  },
  'ta-text': {
    component: 'TextComponent',
    path: '../../text/text.component'
  },
  'ta-trigram': {
    component: 'TrigramComponent',
    path: '../../trigram/trigram.component'
  },
  'ta-label': {
    component: 'LabelComponent',
    path: '../../label/label.component'
  },
  'ta-title': {
    component: 'TitleComponent',
    path: '../../title/title.component'
  },
  'ta-time-ago': {
    component: 'TimeAgoComponent',
    path: '../../time-ago/time-ago.component'
  },
  'ta-expandable-text': {
    component: 'ExpandableTextComponent',
    path: '../../expandable-text/expandable-text.component'
  },
  'ta-button': {
    component: 'ButtonComponent',
    path: '../../button/button.component'
  },
  'ta-bullet': {
    component: 'BulletComponent',
    path: '../../bullet/bullet.component'
  },
  'ta-megaoctet': {
    component: 'MegaoctetComponent',
    path: '../../megaoctet/megaoctet.component'
  },
  'ta-new': {
    component: 'NewComponent',
    path: '../../new/new.component'
  },
  'ta-typed-message': {
    component: 'TypedMessageComponent',
    path: '../../typed-message/typed-message.component'
  },
  'ta-progress-bar': {
    component: 'ProgressBarComponent',
    path: '../../progress-bar/progress-bar.component'
  },
  'ta-logo': {
    component: 'LogoComponent',
    path: '../../logo/logo.component'
  },
  'ta-profil-data': {
    component: 'ProfileDataComponent',
    path: '../../profil-data/profile-data.component'
  },
  'ta-inline-profil-data': {
    component: 'InlineProfileDataComponent',
    path: '../../profil-data/inline-profile-data/inline-profile-data.component'
  },
  'ta-users-list': {
    component: 'UsersListComponent',
    path: '../../users-list/users-list.component'
  },
  'ta-notification-badge': {
    component: 'NotificationBadgeComponent',
    path: '../../notification-badge/notification-badge/notification-badge.component'
  },
  'ta-civility': {
    component: 'CivilityComponent',
    path: '../../civility/civility.component'
  },
  'ta-contact-information': {
    component: 'ContactInformationComponent',
    path: '../../contact-information/contact-information.component'
  }
};

function fixComponentImports(filePath) {
  try {
    const htmlPath = filePath.replace('.ts', '.html');
    
    if (!fs.existsSync(htmlPath)) {
      return false;
    }
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    let tsContent = fs.readFileSync(filePath, 'utf8');
    const originalContent = tsContent;
    
    let hasChanges = false;
    const neededImports = [];
    const neededComponents = [];
    
    // Find which ta- components are used in the HTML
    for (const [selector, info] of Object.entries(componentMap)) {
      if (htmlContent.includes(`<${selector}`) && !tsContent.includes(info.component)) {
        neededImports.push(`import { ${info.component} } from '${info.path}';`);
        neededComponents.push(info.component);
        hasChanges = true;
      }
    }
    
    if (!hasChanges) {
      return false;
    }
    
    // Add imports after the last import
    const lastImportIndex = tsContent.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const nextLineIndex = tsContent.indexOf('\n', lastImportIndex);
      if (nextLineIndex !== -1) {
        tsContent = tsContent.slice(0, nextLineIndex + 1) + 
                   neededImports.join('\n') + '\n' +
                   tsContent.slice(nextLineIndex + 1);
      }
    }
    
    // Add components to imports array
    tsContent = tsContent.replace(
      /(imports:\s*\[([^\]]*)\],)/,
      (match, fullMatch, importsContent) => {
        const existingImports = importsContent.trim();
        if (existingImports === '') {
          return `imports: [${neededComponents.join(', ')}],`;
        } else {
          return `imports: [${existingImports}, ${neededComponents.join(', ')}],`;
        }
      }
    );
    
    if (tsContent !== originalContent) {
      fs.writeFileSync(filePath, tsContent, 'utf8');
      console.log(`Fixed internal components in: ${filePath}`);
      console.log(`  Added: ${neededComponents.join(', ')}`);
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
      if (fixComponentImports(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const uiLibPath = path.join(__dirname, 'projects', 'ui', 'src', 'lib');
console.log(`Starting internal components fix in: ${uiLibPath}`);

const fixedFiles = walkDirectory(uiLibPath);
console.log(`Fixed internal components in ${fixedFiles} files`);