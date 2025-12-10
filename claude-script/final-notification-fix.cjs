const fs = require("fs");
const path = require("path");

// File patterns to fix
const filesToFix = [
  "projects/notification/src/lib/components/bullet/bullet.component.ts",
  "projects/notification/src/lib/components/container/container.component.ts",
  "projects/notification/src/lib/components/error-box/error-box.component.ts",
  "projects/notification/src/lib/components/items/item/icon/icon.component.ts",
  "projects/notification/src/lib/components/items/item/info/info.component.ts",
  "projects/notification/src/lib/components/items/item/item.component.ts",
  "projects/notification/src/lib/components/items/item/title/title.component.ts",
  "projects/notification/src/lib/components/items/item/template/invoice-payment-status-changed/invoice-payment-status-changed.component.ts",
  "projects/notification/src/lib/components/items/item/template/new-invoice/new-invoice.component.ts",
  "projects/notification/src/lib/components/items/item/template/new-quotation-version/new-quotation-version.component.ts",
  "projects/notification/src/lib/components/items/item/template/project-status-changed/project-status-changed.component.ts",
  "projects/notification/src/lib/components/items/item/template/task-assigned/task-assigned.component.ts",
  "projects/notification/src/lib/components/items/item/template/task-due-today/task-due-today.component.ts",
  "projects/notification/src/lib/components/items/item/template/task-new-activity/task-new-activity.component.ts",
  "projects/notification/src/lib/components/items/item/template/to-do-assigned/to-do-assigned.component.ts",
  "projects/notification/src/lib/components/items/item/template/to-do-due-today/to-do-due-today.component.ts",
  "projects/notification/src/lib/components/items/item/template/user-tagged-in-conversation/user-tagged-in-conversation.component.ts",
];

function reconstructComponent(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");
  const filename = path.basename(filePath, ".component.ts");
  const relativePath = path.relative(
    "./projects/notification/src/lib/components",
    path.dirname(filePath)
  );

  // Extract the class name and selector
  const classMatch = content.match(/export class (\w+)/);
  if (!classMatch) return;

  const className = classMatch[1];
  const selector =
    "ta-" +
    className
      .replace(/Component$/, "")
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace(/^-/, "");

  // Extract all imports
  const importLines = content
    .split("\n")
    .filter((line) => line.trim().startsWith("import "));

  // Extract the class content
  const classStart = content.indexOf("export class");
  const classContent = content.substring(classStart);

  // Create the new file structure
  const newContent = `${importLines.join("\n")}

@Component({
  selector: '${selector}',
  templateUrl: './${filename}.component.html',
  styleUrls: ['./${filename}.component.scss'],
  standalone: true,
  imports: [],
})
${classContent}`;

  fs.writeFileSync(filePath, newContent);
  console.log(`Reconstructed ${filePath}`);
}

function main() {
  // First pass: reconstruct all broken files
  filesToFix.forEach((filePath) => {
    try {
      reconstructComponent(filePath);
    } catch (error) {
      console.error(`Error reconstructing ${filePath}:`, error.message);
    }
  });

  console.log("Component reconstruction completed!");
}

main();
