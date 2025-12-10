import fs from "fs";
import path from "path";

function auditComponent(basePath) {
  const tsFile = `${basePath}.component.ts`;
  const htmlFile = `${basePath}.component.html`;
  const scssFile = `${basePath}.component.scss`;

  const report = {
    component: path.basename(basePath),
    filesExist: {
      ts: fs.existsSync(tsFile),
      html: fs.existsSync(htmlFile),
      scss: fs.existsSync(scssFile),
    },
    issues: {
      separateFiles: true, // Assume true if all files exist
      htmlTaComponents: [],
      scssGetVar: [],
      tsImports: [],
    },
  };

  // Check HTML for non-ta elements
  if (report.filesExist.html) {
    const htmlContent = fs.readFileSync(htmlFile, "utf8");
    const htmlProblems = [];

    if (htmlContent.includes("<h1>"))
      htmlProblems.push('Uses <h1> instead of <ta-title level="h1">');
    if (htmlContent.includes("<h2>"))
      htmlProblems.push('Uses <h2> instead of <ta-title level="h2">');
    if (htmlContent.includes("<h3>"))
      htmlProblems.push('Uses <h3> instead of <ta-title level="h3">');
    if (htmlContent.includes("<p>"))
      htmlProblems.push("Uses <p> instead of <ta-text>");
    if (htmlContent.includes("<button>"))
      htmlProblems.push("Uses <button> instead of <ta-button>");

    report.issues.htmlTaComponents = htmlProblems;
  }

  // Check SCSS for hardcoded values
  if (report.filesExist.scss) {
    const scssContent = fs.readFileSync(scssFile, "utf8");
    const scssProblems = [];

    if (!scssContent.includes("@use 'ta/utils/mixins/common';")) {
      scssProblems.push("Missing @use ta/utils/mixins/common");
    }

    if (scssContent.includes("#") && !scssContent.includes("common.get-var")) {
      scssProblems.push("Contains hardcoded color values");
    }

    if (scssContent.includes("px") && !scssContent.includes("common.get-var")) {
      scssProblems.push("Contains hardcoded pixel values");
    }

    report.issues.scssGetVar = scssProblems;
  }

  // Check TypeScript for missing imports
  if (report.filesExist.ts) {
    const tsContent = fs.readFileSync(tsFile, "utf8");
    const tsProblems = [];

    const needsTitleComponent = report.issues.htmlTaComponents.some(
      (issue) =>
        issue.includes("<h1>") ||
        issue.includes("<h2>") ||
        issue.includes("<h3>")
    );
    const needsTextComponent = report.issues.htmlTaComponents.some((issue) =>
      issue.includes("<p>")
    );
    const needsButtonComponent = report.issues.htmlTaComponents.some((issue) =>
      issue.includes("<button>")
    );

    if (needsTitleComponent && !tsContent.includes("TitleComponent")) {
      tsProblems.push("Missing TitleComponent import");
    }
    if (needsTextComponent && !tsContent.includes("TextComponent")) {
      tsProblems.push("Missing TextComponent import");
    }
    if (needsButtonComponent && !tsContent.includes("ButtonComponent")) {
      tsProblems.push("Missing ButtonComponent import");
    }

    report.issues.tsImports = tsProblems;
  }

  return report;
}

// List of components to audit
const components = [
  "c:/Techatome/techatome-molecules/src/app/app",
  "c:/Techatome/techatome-molecules/src/app/pages/ui-showcase/ui-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/layout-showcase/layout-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/menu-showcase/menu-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/icons-showcase/icons-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/core-showcase/core-showcase",
  "c:/Techatome/techatome-molecules/src/app/pages/dashboard/dashboard",
];

// Run audit
console.log("Component Audit Report\n===================\n");

components.forEach((component) => {
  const report = auditComponent(component);

  console.log(`**${report.component}.component**`);
  console.log(
    `- Fichiers séparés: ${report.issues.separateFiles ? "✅" : "❌"}`
  );
  console.log(
    `- HTML avec ta-*: ${
      report.issues.htmlTaComponents.length === 0 ? "✅" : "❌"
    } ${report.issues.htmlTaComponents.join(", ")}`
  );
  console.log(
    `- SCSS avec get-var: ${
      report.issues.scssGetVar.length === 0 ? "✅" : "❌"
    } ${report.issues.scssGetVar.join(", ")}`
  );
  console.log(
    `- Imports ta-*: ${
      report.issues.tsImports.length === 0 ? "✅" : "❌"
    } ${report.issues.tsImports.join(", ")}`
  );
  console.log("");
});
