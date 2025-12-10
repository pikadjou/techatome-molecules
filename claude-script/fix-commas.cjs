const fs = require("fs");
const path = require("path");

function fixCommasInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    // Fix double commas in styleUrls
    content = content.replace(/styleUrls:\s*\[(.*?)\],,/g, "styleUrls: [$1],");

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${filePath}`);
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
    } else if (file.endsWith(".ts")) {
      if (fixCommasInFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const uiLibPath = path.join(__dirname, "projects", "ui", "src", "lib");
console.log(`Starting comma fix in: ${uiLibPath}`);

const fixedFiles = walkDirectory(uiLibPath);
console.log(`Fixed ${fixedFiles} files`);
