# Create a new @ta/ Library

You are scaffolding a new Angular library in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Library name**: in kebab-case (e.g., `analytics`, `payment`)
- **Category** (optional): `form`, `files`, or root level (default: root)

Example: `analytics` or `form form-validation`

## Steps

### 1. Generate the library with Angular CLI

```bash
ng generate library <lib-name>
```

This creates the base structure under `projects/<lib-name>/`.

### 2. Update ng-package.json

Edit `projects/<lib-name>/ng-package.json`:

```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "dist",
  "lib": {
    "entryFile": "src/public-api.ts",
    "styleIncludePaths": ["../styles/src/style"]
  },
  "allowedNonPeerDependencies": [
    "@ta",
    "@angular"
  ],
  "assets": [
    {
      "glob": "**/*.json",
      "input": "src/i18n",
      "output": "i18n"
    }
  ]
}
```

**Note:** For libraries nested under `form/` or `files/`, adjust the relative paths:
- `$schema`: `../../../node_modules/ng-packagr/ng-package.schema.json`
- `styleIncludePaths`: `["../../styles/src/style"]`

### 3. Update package.json

Edit `projects/<lib-name>/package.json`:

```json
{
  "name": "@ta/<lib-name>",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^18.0.0",
    "@angular/core": "^18.0.0"
  },
  "scripts": {
    "build": "ng build @ta/<lib-name>"
  }
}
```

### 4. Update angular.json

Find the newly generated project entry in `angular.json` and verify:
- `root`: `projects/<lib-name>`
- `sourceRoot`: `projects/<lib-name>/src`
- `prefix`: `ta`
- `projectType`: `library`

### 5. Add tsconfig path mapping

Edit root `tsconfig.json`, add to `compilerOptions.paths`:

```json
"@ta/<lib-name>": ["projects/<lib-name>"]
```

For nested libraries (e.g., `form/form-validation`):
```json
"@ta/form-validation": ["projects/form/form-validation"]
```

### 6. Set up the directory structure

Create the standard directory structure:

```
projects/<lib-name>/
  src/
    lib/
      components/       # Angular components
      services/          # Injectable services
      models/            # Interfaces and classes
    i18n/
      en.json            # English translations: {}
      fr.json            # French translations: {}
    public-api.ts        # Library public API
  ng-package.json
  package.json
  tsconfig.lib.json
  tsconfig.lib.prod.json
```

### 7. Initialize public-api.ts

```typescript
/*
 * Public API Surface of <lib-name>
 */

// Export components, services, models as they are created
```

### 8. Initialize i18n files

Create `src/i18n/en.json` and `src/i18n/fr.json` with empty objects:
```json
{}
```

### 9. Add to Lerna configuration

Verify the library appears in `lerna.json` packages pattern. The standard pattern `"projects/*"` should pick it up, but for nested libraries under `form/` or `files/`, ensure the pattern includes `"projects/**/*"` or add it explicitly.

### 10. Update root tsconfig for build

Verify `tsconfig.json` paths are correct by attempting:
```bash
ng build @ta/<lib-name>
```

### 11. Add to README (optional)

Add the new library to the list in README.md if it exists.

## Post-creation checklist

- [ ] `ng-package.json` has `dest: "dist"` and correct styleIncludePaths
- [ ] `package.json` has `name: "@ta/<lib-name>"`
- [ ] `tsconfig.json` has the path mapping
- [ ] `angular.json` has `prefix: "ta"`
- [ ] i18n files exist (even if empty)
- [ ] Library builds successfully: `ng build @ta/<lib-name>`
