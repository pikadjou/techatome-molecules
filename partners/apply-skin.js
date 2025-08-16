const fs = require("fs");

const skin = process.argv[2];

if (!skin) {
  console.log("no skin");
  return;
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
