# @ta/prettier-config

Shared Prettier configuration for Techatome projects with automatic import sorting and JSON formatting.

## Introduction

`@ta/prettier-config` provides a comprehensive Prettier configuration optimized for Angular and TypeScript projects. It includes:

- **Automatic import sorting** with `@trivago/prettier-plugin-sort-imports`
- **JSON key sorting** with `prettier-plugin-sort-json`
- **TypeScript support** with decorator handling
- **Consistent code formatting** across the entire monorepo
- **Custom import order** prioritizing Angular, RxJS, and Techatome packages

This configuration ensures consistent code style across all Techatome monorepo libraries and applications.

## Installation

### Within the Techatome Monorepo

If you're working within the Techatome monorepo, this package is already available as a workspace dependency:

```bash
yarn install
```

### In External Projects

To use this configuration in your own projects:

```bash
npm install --save-dev @ta/prettier-config
```

or

```bash
yarn add --dev @ta/prettier-config
```

This will automatically install all required dependencies:
- `prettier` - Core formatting engine
- `@trivago/prettier-plugin-sort-imports` - Import sorting
- `prettier-plugin-sort-json` - JSON formatting
- `prettier-eslint` - ESLint integration

## Configuration and Usage

### Basic Configuration

Create a `prettier.config.mjs` file in your project root:

```javascript
import taPrettierConfig from '@ta/prettier-config';

export default taPrettierConfig;
```

### With Custom Overrides

You can extend or override specific options:

```javascript
import taPrettierConfig from '@ta/prettier-config';

export default {
  ...taPrettierConfig,
  printWidth: 100, // Override default 120
  singleQuote: false, // Use double quotes instead
};
```

### Running Prettier

Add scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Then run:

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

## Configuration Details

### Code Style Settings

```javascript
{
  tabWidth: 2,              // 2 spaces per indentation level
  useTabs: false,           // Use spaces instead of tabs
  singleQuote: true,        // Use single quotes
  semi: true,               // Add semicolons
  bracketSpacing: true,     // Spaces in object literals
  arrowParens: "avoid",     // Omit parens when possible
  trailingComma: "es5",     // Trailing commas where valid in ES5
  bracketSameLine: false,   // Put > on new line
  printWidth: 120,          // Line width limit
  endOfLine: "auto",        // Auto-detect line endings
}
```

**Examples:**

```typescript
// ✅ Formatted code
const user = { name: 'John', age: 30 };
const greet = name => console.log(`Hello, ${name}`);

// ❌ Before formatting
const user = {name:"John",age:30}
const greet = (name) => console.log("Hello, " + name)
```

### Import Sorting

Imports are automatically organized in the following order:

1. **Angular imports** (`@angular/*`)
2. **RxJS imports** (`rxjs/*`)
3. **Third-party modules**
4. **Techatome packages** (`@ta/*`)
5. **Source imports** (`src/*`)
6. **Parent imports** (`../`)
7. **Sibling imports** (`./`)

**Example:**

```typescript
// ✅ After formatting
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import { ServerService } from '@ta/server';
import { UtilsService } from '@ta/utils';

import { environment } from 'src/environments/environment';

import { ParentComponent } from '../parent/parent.component';

import { UserModel } from './user.model';
```

### Import Sorting Configuration

```javascript
{
  importOrder: [
    '^@angular/(.*)$',        // Angular packages first
    '^rxjs/(.*)$',            // RxJS second
    '<THIRD_PARTY_MODULES>',  // External dependencies
    '^@ta/(.*)$',             // Techatome packages
    '^src/(.*)$',             // Project source files
    '^[../]',                 // Parent directory imports
    '^[./]',                  // Current directory imports
  ],
  importOrderSeparation: true,         // Add blank lines between groups
  importOrderSortSpecifiers: true,     // Sort named imports alphabetically
  importOrderParserPlugins: [
    'typescript',
    'decorators-legacy',               // Support Angular decorators
  ],
}
```

### File-Specific Overrides

#### TypeScript Declaration Files (.d.ts)

```javascript
{
  files: ['*.d.ts'],
  options: { requirePragma: true }, // Only format with @format comment
}
```

#### package.json

```javascript
{
  files: ['package.json'],
  options: { tabWidth: 2 }, // Ensure 2-space indentation
}
```

### TypeScript Preservation

```javascript
{
  proseWrap: 'preserve',      // Preserve prose wrapping
  quoteProps: 'consistent',   // Consistent quote style for object properties
  typescript: true,           // Enable TypeScript support
}
```

This prevents Prettier from removing explicit generic types:

```typescript
// ✅ Type preserved
const value = new Observable<string>();

// ❌ Won't be simplified to
const value = new Observable();
```

## Examples

### Full Project Configuration

**prettier.config.mjs**

```javascript
import taPrettierConfig from '@ta/prettier-config';

export default {
  ...taPrettierConfig,
  // Project-specific overrides
  printWidth: 100,
  importOrder: [
    ...taPrettierConfig.importOrder.slice(0, 3),
    '^@myapp/(.*)$', // Add custom package before @ta
    ...taPrettierConfig.importOrder.slice(3),
  ],
};
```

### Integration with VS Code

Create or update `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### NPM Scripts

**package.json**

```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "format:ts": "prettier --write '**/*.ts'",
    "format:html": "prettier --write '**/*.html'",
    "format:scss": "prettier --write '**/*.scss'"
  }
}
```

### Pre-commit Hook

Using Husky and lint-staged:

**package.json**

```json
{
  "lint-staged": {
    "*.{ts,js,html,scss,json}": ["prettier --write"]
  }
}
```

**.husky/pre-commit**

```bash
#!/bin/sh
npx lint-staged
```

### GitHub Actions

**.github/workflows/format-check.yml**

```yaml
name: Format Check

on: [push, pull_request]

jobs:
  format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run format:check
```

## Troubleshooting

### Import Sorting Not Working

Make sure the plugins are properly loaded. If using a CommonJS config, use:

```javascript
// prettier.config.cjs
module.exports = require('@ta/prettier-config');
```

### Conflicts with ESLint

Use `prettier-eslint` or ensure your ESLint config extends `eslint-config-prettier`:

```javascript
// eslint.config.mjs
import prettier from 'eslint-config-prettier';

export default [
  // ... other configs
  prettier, // Must be last to override other rules
];
```

### JSON Files Not Sorting

Ensure `prettier-plugin-sort-json` is installed and the plugin is properly configured:

```bash
npm install --save-dev prettier-plugin-sort-json
```

## Integration with Other Tools

### With ESLint

This configuration works seamlessly with `@ta/eslint-config`:

```javascript
// eslint.config.mjs
import taEslintConfig from '@ta/eslint-config';

export default [...taEslintConfig];
```

The ESLint config already includes Prettier integration via `eslint-plugin-prettier`.

### With Angular CLI

Prettier automatically formats Angular files:
- TypeScript components (`.ts`)
- HTML templates (`.html`)
- SCSS styles (`.scss`)

## Contributing

This configuration is maintained as part of the Techatome Molecules monorepo. To suggest changes:

1. Update `projects/config/prettier-config/index.mjs`
2. Test changes across the monorepo with `yarn prettier`
3. Submit a pull request with your changes

## License

ISC

## Author

Geoffrey L <g.lambert@g-lambert.be>
