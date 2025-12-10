const fs = require("fs");
const path = require("path");

function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith(".component.ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

function fixComponentDecorator(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let isModified = false;

  // Find malformed imports array that's outside the @Component decorator
  if (content.includes("  ],\n})\nexport class")) {
    // Extract the imports array items that are outside the decorator
    const match = content.match(
      /\n([\s]*[A-Z][a-zA-Z]*Component[,\s]*\n)*[\s]*[A-Z][a-zA-Z]*[,\s]*\n[\s]*\],\n\}\)\nexport class/
    );
    if (match) {
      // Find the @Component decorator
      const componentMatch = content.match(
        /@Component\s*\(\s*\{([^}]*)\}\s*\)/s
      );
      if (componentMatch) {
        const decoratorContent = componentMatch[1];

        // Extract the stray imports
        const strayImportsMatch = content.match(
          /\n([\s\S]*?)\],\n\}\)\nexport class/
        );
        if (strayImportsMatch) {
          const strayText = strayImportsMatch[1];
          const imports = strayText
            .split("\n")
            .map((line) => line.trim())
            .filter(
              (line) =>
                line && !line.startsWith("//") && line !== "}" && line !== "){"
            )
            .map((line) => line.replace(/,$/, ""))
            .filter((line) => line);

          // Add imports to the decorator if it doesn't have an imports array
          if (!decoratorContent.includes("imports:")) {
            const newDecoratorContent =
              decoratorContent.trim() +
              ",\n  imports: [" +
              imports.join(", ") +
              "]";
            const newDecorator = `@Component({\n${newDecoratorContent}\n})`;
            content = content.replace(
              /@Component\s*\(\s*\{[^}]*\}\s*\)/s,
              newDecorator
            );
            // Remove the stray imports
            content = content.replace(
              /\n[\s\S]*?\],\n\}\)\n(export class)/,
              "\n})\n$1"
            );
            isModified = true;
          }
        }
      }
    }
  }

  // Fix missing @Component decorators completely
  if (
    !content.includes("@Component") &&
    content.includes("export class") &&
    content.includes("Component")
  ) {
    const lines = content.split("\n");
    let exportsIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("export class") && lines[i].includes("Component")) {
        exportsIndex = i;
        break;
      }
    }

    if (exportsIndex > 0) {
      const className = lines[exportsIndex].match(/export class (\w+)/)[1];
      const selector =
        "ta-" +
        className
          .replace(/Component$/, "")
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase()
          .replace(/^-/, "");
      const filename = path.basename(filePath, ".component.ts");

      const decorator = `@Component({
  selector: '${selector}',
  templateUrl: './${filename}.component.html',
  styleUrls: ['./${filename}.component.scss'],
  standalone: true,
  imports: [],
})`;

      lines.splice(exportsIndex, 0, decorator);
      content = lines.join("\n");
      isModified = true;
    }
  }

  if (isModified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
}

function main() {
  const notificationDir = "./projects/notification/src/lib/components";

  if (!fs.existsSync(notificationDir)) {
    console.error("Notification directory not found");
    return;
  }

  const tsFiles = findTsFiles(notificationDir);

  tsFiles.forEach((tsFile) => {
    try {
      fixComponentDecorator(tsFile);
    } catch (error) {
      console.error(`Error fixing ${tsFile}:`, error.message);
    }
  });

  console.log("Component decorator fixing completed!");
}

main();
