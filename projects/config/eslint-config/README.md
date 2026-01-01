# @ta/eslint-config

Shared ESLint configuration for Techatome projects with Angular, TypeScript, and Prettier integration.

## Introduction

`@ta/eslint-config` provides a comprehensive ESLint configuration optimized for Angular applications and libraries. It includes:

- **Angular-specific rules** using `@angular-eslint`
- **TypeScript support** with `@typescript-eslint`
- **Prettier integration** for consistent code formatting
- **Unused imports detection** to keep your code clean
- **Custom rules** tailored for the Techatome ecosystem

This configuration enforces code quality standards across all Techatome monorepo libraries and applications.

## Installation

### Within the Techatome Monorepo

If you're working within the Techatome monorepo, this package is already available as a workspace dependency:

```bash
yarn install
```

### In External Projects

To use this configuration in your own Angular projects:

```bash
npm install --save-dev @ta/eslint-config
```

or

```bash
yarn add --dev @ta/eslint-config
```

This will automatically install all required peer dependencies:
- `@angular-eslint/*` packages
- `@typescript-eslint/*` packages
- `eslint` and related plugins
- `eslint-config-prettier` and `eslint-plugin-prettier`
- `eslint-plugin-unused-imports`

## Configuration and Usage

### ESLint Flat Config (Recommended)

Create an `eslint.config.mjs` file in your project root:

```javascript
import taEslintConfig from '@ta/eslint-config';

export default [
  ...taEslintConfig,
  // Add your custom rules or overrides here
  {
    rules: {
      // Custom project-specific rules
    },
  },
];
```

### With Custom Overrides

You can extend or override specific rules:

```javascript
import taEslintConfig from '@ta/eslint-config';

export default [
  ...taEslintConfig,
  {
    rules: {
      // Override the component prefix
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'my-app', style: 'kebab-case' },
      ],
      // Allow any types in development
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```

### Running ESLint

Add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

Then run:

```bash
# Check for linting errors
npm run lint

# Automatically fix fixable errors
npm run lint:fix
```

## Configuration Details

### Key Rules

#### Angular Rules

- **Component Class Suffix**: Components must end with `Page`, `Component`, or `Modal`
- **Component Selector**: Elements must use `app` prefix and kebab-case style
- **Directive Selector**: Attributes must use `app` prefix and camelCase style

```typescript
// ✅ Valid
@Component({
  selector: 'app-user-profile',
})
export class UserProfileComponent {}

// ❌ Invalid
@Component({
  selector: 'userProfile',
})
export class UserProfile {}
```

#### TypeScript Rules

- **Unused Imports**: Automatically detected and flagged
- **Unused Variables**: Variables starting with `_` are ignored
- **No Explicit Any**: Warned but not blocked
- **Member Ordering**: Disabled for flexibility

```typescript
// ✅ Valid - unused variable with underscore prefix
const _helper = () => console.log('helper');

// ❌ Invalid - unused import
import { Component, OnInit } from '@angular/core'; // OnInit not used
```

#### Code Style Rules

- **Prettier Integration**: Prettier rules are enforced via ESLint
- **Sort Keys**: Object keys must be sorted alphabetically (case-insensitive, natural order)

```typescript
// ✅ Valid
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  version: '1.0.0',
};

// ❌ Invalid - keys not sorted
const config = {
  version: '1.0.0',
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};
```

### Template Rules

HTML templates have specific rules enforced:

- **No Negated Async**: Prevents `!async` usage which can cause issues

```html
<!-- ✅ Valid -->
<div *ngIf="user$ | async as user">{{ user.name }}</div>

<!-- ❌ Invalid -->
<div *ngIf="!(user$ | async)">No user</div>
```

### Ignored Paths

The following directories are automatically ignored:
- `**/dist/**/*` - Build output
- `**/node_modules/**/*` - Dependencies

## Examples

### Full Project Configuration

**eslint.config.mjs**

```javascript
import taEslintConfig from '@ta/eslint-config';

export default [
  ...taEslintConfig,
  {
    // Project-specific overrides
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'myapp', style: 'kebab-case' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'myapp', style: 'camelCase' },
      ],
    },
  },
  {
    // Test file specific rules
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```

### Integration with VS Code

Create or update `.vscode/settings.json`:

```json
{
  "eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "typescript",
    "html"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.experimental.useFlatConfig": true
}
```

### NPM Scripts

**package.json**

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:check": "eslint . --max-warnings 0"
  }
}
```

## Troubleshooting

### TypeScript Project Configuration

Ensure your `tsconfig.json` is properly configured for the ESLint parser:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Peer Dependency Warnings

If you encounter peer dependency warnings, ensure all Angular and TypeScript versions match:

```bash
npm install --save-dev @angular/core@^18.0.0 typescript@5.4.5
```

## Contributing

This configuration is maintained as part of the Techatome Molecules monorepo. To suggest changes:

1. Update `projects/config/eslint-config/index.mjs`
2. Test changes across the monorepo with `yarn lint`
3. Submit a pull request with your changes

## License

ISC

## Author

Geoffrey L <g.lambert@g-lambert.be>
