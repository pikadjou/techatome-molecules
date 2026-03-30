import fs from "fs";

const skin = process.argv[2];

if (!skin) {
  console.log("no skin specified, ensuring default partner theme exists");
  const destDir = "sass/partners";
  const destFile = `${destDir}/_theme.scss`;
  if (!fs.existsSync(destFile)) {
    fs.mkdirSync(destDir, { recursive: true });
    fs.writeFileSync(
      destFile,
      "// Default partner theme - no overrides.\n"
    );
    console.log("created default partner theme");
  }
  process.exit(0);
}

/**
 * Sass
 */
const srcSass = `./partners/${skin}/sass`;
const destSass = "sass/partners";

fs.cp(srcSass, destSass, { recursive: true, override: true }, (err) => {
  if (!err) {
    console.log("copy sass skin");
    return;
  }
  console.error("error in copy sass skin", err);
});

/**
 * Assets
 */
const srcAssets = `./partners/${skin}/assets`;
const destAsset = "src/assets/partners";

fs.cp(srcAssets, destAsset, { recursive: true, override: true }, (err) => {
  if (!err) {
    console.log("copy assets skin");
    return;
  }
  console.error("error in copy assets skin", err);
});
