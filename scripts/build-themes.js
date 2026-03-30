import { compile } from 'sass';
import { writeFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve, basename } from 'path';

const themesDir = resolve('src/themes');
const outDir = resolve('src/assets/themes');

mkdirSync(outDir, { recursive: true });

const files = readdirSync(themesDir).filter((f) => f.endsWith('.scss'));

for (const file of files) {
  const input = resolve(themesDir, file);
  const name = basename(file, '.scss');
  const output = resolve(outDir, `${name}.css`);

  const result = compile(input, {
    loadPaths: ['src', 'sass', 'projects/styles/src/style', '.'],
  });

  writeFileSync(output, result.css);
  console.log(`compiled ${name}.css`);
}
