const fs = require("fs");
const path = require("path");

// Configuration for components mapping
const externalComponents = {
  "ta-loader": { import: "LoaderComponent", from: "@ta/ui" },
  "ta-error": { import: "ErrorComponent", from: "@ta/ui" },
  "ta-empty": { import: "EmptyComponent", from: "@ta/ui" },
  "ta-toast": { import: "ToastComponent", from: "@ta/ui" },
  "ta-link": { import: "LinkComponent", from: "@ta/ui" },
  "ta-font-icon": { import: "FontIconComponent", from: "@ta/icons" },
  "ta-bullet": { import: "BulletComponent", from: "@ta/ui" },
  "ta-layout-modal": { import: "LayoutModalComponent", from: "@ta/ui" },
  "ta-title": { import: "TitleComponent", from: "@ta/ui" },
  "ta-text": { import: "TextComponent", from: "@ta/ui" },
  "ta-expandable-text": { import: "ExpandableTextComponent", from: "@ta/ui" },
  "ta-button": { import: "ButtonComponent", from: "@ta/ui" },
  "ta-time-ago": { import: "TimeAgoComponent", from: "@ta/ui" },
};

const internalComponents = {
  "ta-notification-item": {
    import: "ItemComponent",
    from: "../item/item.component",
  },
  "ta-notification-item-title": {
    import: "TitleComponent",
    from: "../title/title.component",
  },
  "ta-notification-item-icon": {
    import: "IconComponent",
    from: "../icon/icon.component",
  },
  "ta-notification-item-info": {
    import: "InfoComponent",
    from: "../info/info.component",
  },
  "ta-notification-inline": {
    import: "NotificationInlineComponent",
    from: "../inline/notification-inline.component",
  },
};

const templateComponents = {
  "ta-notification-project-status-changed": {
    import: "ProjectStatusChangedComponent",
    from: "../items/item/template/project-status-changed/project-status-changed.component",
  },
  "ta-new-quotation-version": {
    import: "NewQuotationVersionComponent",
    from: "../items/item/template/new-quotation-version/new-quotation-version.component",
  },
  "ta-new-invoice": {
    import: "NewInvoiceComponent",
    from: "../items/item/template/new-invoice/new-invoice.component",
  },
  "ta-invoice-payment-status-changed": {
    import: "InvoicePaymentStatusChangedComponent",
    from: "../items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component",
  },
  "ta-task-assigned": {
    import: "TaskAssignedComponent",
    from: "../items/item/template/task-assigned/task-assigned.component",
  },
  "ta-to-do-assigned": {
    import: "ToDoAssignedComponent",
    from: "../items/item/template/to-do-assigned/to-do-assigned.component",
  },
  "ta-task-due-today": {
    import: "TaskDueTodayComponent",
    from: "../items/item/template/task-due-today/task-due-today.component",
  },
  "ta-to-do-due-today": {
    import: "ToDoDueTodayComponent",
    from: "../items/item/template/to-do-due-today/to-do-due-today.component",
  },
  "ta-task-new-activity": {
    import: "TaskNewActivityComponent",
    from: "../items/item/template/task-new-activity/task-new-activity.component",
  },
  "ta-user-tagged-in-conversation": {
    import: "UserTaggedInConversationComponent",
    from: "../items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component",
  },
};

const commonDirectives = {
  "*ngLet": { import: "NgLetDirective", from: "@ta/utils" },
  "*ngFor": { import: "NgFor", from: "@angular/common" },
  "*ngIf": { import: "NgIf", from: "@angular/common" },
  "*ngSwitch": { import: "NgSwitch", from: "@angular/common" },
  "*ngSwitchCase": { import: "NgSwitchCase", from: "@angular/common" },
  "| translate": { import: "TranslateModule", from: "@ngx-translate/core" },
  "| async": { import: "AsyncPipe", from: "@angular/common" },
};

function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith(".component.html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function analyzeTemplate(templatePath) {
  const content = fs.readFileSync(templatePath, "utf8");
  const used = new Set();

  // Find all component tags
  const componentRegex = /<(ta-[^>\s]+)/g;
  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    used.add(match[1]);
  }

  // Find directives
  if (content.includes("*ngLet")) used.add("*ngLet");
  if (content.includes("*ngFor")) used.add("*ngFor");
  if (content.includes("*ngIf")) used.add("*ngIf");
  if (content.includes("*ngSwitch")) used.add("*ngSwitch");
  if (content.includes("*ngSwitchCase")) used.add("*ngSwitchCase");
  if (content.includes("| translate")) used.add("| translate");
  if (content.includes("| async")) used.add("| async");

  return Array.from(used);
}

function updateComponentFile(tsPath, requiredImports) {
  let content = fs.readFileSync(tsPath, "utf8");

  // Extract existing imports and imports array
  const imports = new Set();
  const moduleImports = {};

  // Parse existing imports
  const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importNames = match[1].split(",").map((name) => name.trim());
    const moduleName = match[2];
    if (!moduleImports[moduleName]) {
      moduleImports[moduleName] = new Set();
    }
    importNames.forEach((name) => moduleImports[moduleName].add(name));
  }

  // Add required imports
  requiredImports.forEach((item) => {
    const config =
      externalComponents[item] ||
      internalComponents[item] ||
      templateComponents[item] ||
      commonDirectives[item];
    if (config) {
      if (!moduleImports[config.from]) {
        moduleImports[config.from] = new Set();
      }
      moduleImports[config.from].add(config.import);
      imports.add(config.import);
    }
  });

  // Rebuild import statements
  let newImports = "";
  const sortedModules = Object.keys(moduleImports).sort();

  sortedModules.forEach((moduleName) => {
    const importNames = Array.from(moduleImports[moduleName]).sort();
    newImports += `import { ${importNames.join(
      ", "
    )} } from '${moduleName}';\n`;
  });

  // Find the @Component decorator and update imports array
  const componentMatch = content.match(
    /@Component\s*\([\s\S]*?\{([\s\S]*?)\}\s*\)/
  );
  if (componentMatch) {
    const componentContent = componentMatch[1];
    const importsMatch = componentContent.match(/imports:\s*\[([\s\S]*?)\]/);

    if (importsMatch) {
      // Update existing imports array
      const allImports = Array.from(imports).sort();
      const newImportsArray = `imports: [\n    ${allImports.join(
        ",\n    "
      )}\n  ]`;
      content = content.replace(/imports:\s*\[[^\]]*\]/, newImportsArray);
    }
  }

  // Replace the imports section
  const firstImportIndex = content.indexOf("import");
  const lastImportIndex = content.lastIndexOf("import");
  const afterLastImport = content.indexOf("\n", lastImportIndex) + 1;

  const beforeImports = content.substring(0, firstImportIndex);
  const afterImports = content.substring(afterLastImport);

  const newContent = beforeImports + newImports + "\n" + afterImports;

  fs.writeFileSync(tsPath, newContent);
  console.log(`Updated ${tsPath}`);
}

function main() {
  const notificationDir = "./projects/notification/src/lib/components";

  if (!fs.existsSync(notificationDir)) {
    console.error("Notification directory not found");
    return;
  }

  const htmlFiles = findHtmlFiles(notificationDir);

  htmlFiles.forEach((htmlFile) => {
    const tsFile = htmlFile.replace(".html", ".ts");
    if (fs.existsSync(tsFile)) {
      const requiredImports = analyzeTemplate(htmlFile);
      if (requiredImports.length > 0) {
        console.log(
          `Processing ${tsFile}, required: ${requiredImports.join(", ")}`
        );
        updateComponentFile(tsFile, requiredImports);
      }
    }
  });

  console.log("Import fixing completed!");
}

main();
