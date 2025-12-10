const fs = require("fs");
const path = require("path");

const pathFixes = [
  {
    file: "projects/ui/src/lib/components/ui/progress/progress-bar-data/progress-bar-data.component.ts",
    replacements: [
      {
        from: "import { TitleComponent } from '../title/title.component';",
        to: "import { TitleComponent } from '../../title/title.component';",
      },
      {
        from: "import { ProgressBarComponent } from '../progress-bar/progress-bar.component';",
        to: "import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';",
      },
    ],
  },
  {
    file: "projects/ui/src/lib/modules/layout/layout-flex/layout-flex.component.ts",
    replacements: [
      {
        from: "import { ButtonComponent } from '../button/button.component';",
        to: "import { ButtonComponent } from '../../components/ui/button/button.component';",
      },
    ],
  },
  {
    file: "projects/ui/src/lib/components/ui/title/title.component.ts",
    replacements: [
      {
        from: "imports: [NgIf],",
        to: "imports: [NgIf, NgSwitch, NgSwitchCase],",
      },
    ],
  },
  {
    file: "projects/ui/src/lib/components/ui/new/new.component.html",
    replacements: [
      {
        from: 'type="new"',
        to: 'type="primary"',
      },
    ],
  },
];

function applyPathFixes() {
  let fixedCount = 0;

  for (const fix of pathFixes) {
    const filePath = path.join(__dirname, fix.file);

    try {
      if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
      }

      let content = fs.readFileSync(filePath, "utf8");
      const originalContent = content;

      for (const replacement of fix.replacements) {
        content = content.replace(replacement.from, replacement.to);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`Fixed paths in: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  return fixedCount;
}

// Also need to add NgSwitch imports
function addNgSwitchImports() {
  const titleComponentPath = path.join(
    __dirname,
    "projects/ui/src/lib/components/ui/title/title.component.ts"
  );

  try {
    let content = fs.readFileSync(titleComponentPath, "utf8");

    if (content.includes("NgSwitch")) {
      return false; // Already fixed
    }

    content = content.replace(
      "import { NgIf } from '@angular/common';",
      "import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';"
    );

    fs.writeFileSync(titleComponentPath, content, "utf8");
    console.log(`Added NgSwitch imports to title component`);
    return true;
  } catch (error) {
    console.error(`Error adding NgSwitch imports:`, error.message);
    return false;
  }
}

console.log("Starting final path fixes...");
const fixedFiles = applyPathFixes();
const ngSwitchFixed = addNgSwitchImports();

console.log(`Fixed paths in ${fixedFiles} files`);
if (ngSwitchFixed) {
  console.log("Added NgSwitch imports");
}
