# @ta/config

**Purpose:** Shared configuration packages for ESLint and Prettier

## Packages

### @ta/eslint-config

**Purpose:** Shared ESLint configuration for Angular projects

#### Exports
| Type | Purpose |
|------|---------|
| ESLint Config | Angular-specific ESLint rules and best practices |

#### Usage Example
```json
// .eslintrc.json
{
  "extends": "@ta/eslint-config"
}
```

#### Features
- Angular-specific ESLint rules
- TypeScript support
- Consistent code style enforcement
- Best practices for Angular applications

### @ta/prettier-config

**Purpose:** Shared Prettier configuration

#### Exports
| Type | Purpose |
|------|---------|
| Prettier Config | Code formatting rules |

#### Usage Example
```json
// package.json
{
  "prettier": "@ta/prettier-config"
}
```

```javascript
// prettier.config.js
module.exports = require('@ta/prettier-config');
```

#### Features
- Consistent code formatting
- Integration with ESLint
- Standard formatting rules across projects

## Dependencies
- eslint
- prettier
- @angular-eslint/*
- @typescript-eslint/*
