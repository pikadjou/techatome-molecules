# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Techatome Molecules** (internally called "Taelot"), an Angular monorepo that follows a micro-library architecture pattern. The project is managed using Lerna and Angular CLI, containing 20+ specialized Angular libraries that can be used independently or together to build applications.

The repository uses the `@ta/` namespace for all published packages and follows a structured approach to component library development with Storybook for documentation and testing.

## Common Development Commands

### Dependencies & Setup

```bash
yarn install                    # Install all dependencies
yarn checkfiles                 # Verify installed dependencies
```

### Development & Building

```bash
yarn start                      # Start main application dev server
yarn start-local                # Start with local environment config
yarn build                     # Build all libraries with dependencies using Lerna
yarn watch                     # Watch for changes and rebuild + start dev server
```

### Library Development

```bash
lerna run build --include-dependencies    # Build all libraries with their dependencies
ng build @ta/[LibName]                    # Build specific library
```

### Quality Assurance

```bash
yarn lint                       # Run ESLint with auto-fix
yarn prettier                   # Format all files with Prettier
ng test                        # Run Karma tests for main app
ng test @ta/[LibName]          # Run tests for specific library
```

### Documentation & Stories

```bash
yarn storybook                  # Start Storybook dev server on port 6006
yarn build-storybook           # Build Storybook for production
```

### Publishing (Lerna-managed)

```bash
yarn version                    # Bump versions for all packages
yarn publish                    # Publish packages to npm registry
```

### Cleanup

```bash
yarn clean                      # Remove all dist folders, node_modules, and lock files
```

## Architecture Overview

### Multi-Library Structure

The project is organized into specialized libraries under the `projects/` directory:

- **Core Libraries**: `@ta/core`, `@ta/server`, `@ta/services`, `@ta/utils`
- **UI Components**: `@ta/ui`, `@ta/icons`, `@ta/styles`, `@ta/menu`, `@ta/notification`
- **Form System**: `@ta/form-basic`, `@ta/form-input`, `@ta/form-model` (specialized form handling)
- **Feature Libraries**: `@ta/calendar`, `@ta/charts`, `@ta/wysiswyg`, `@ta/translation`
- **File Management**: `@ta/files-basic`, `@ta/files-extended`
- **Configuration**: `@ta/eslint-config`, `@ta/prettier-config`
- **Integration**: `@ta/capacitor`, `@ta/cms`, `@ta/user`

### Package Management

- Uses **Lerna** for monorepo management with Yarn workspaces
- All packages follow the `@ta/` namespace convention
- Each library has its own `package.json`, `ng-package.json`, and TypeScript configurations
- Dependencies are managed at both root and individual library levels

### Angular Configuration

- **Main Application**: "Taelot" - serves as the demo/development application
- **Library Prefix**: All components use `ta-` prefix
- **Build System**: Angular CLI with ng-packagr for library building
- **Testing**: Karma + Jasmine for unit tests
- **Linting**: ESLint with Angular-specific rules

### Key Patterns

1. **Dependency Graph**: Libraries have clear dependency relationships managed by Lerna
2. **Modular Design**: Each library focuses on a specific domain (forms, icons, charts, etc.)
3. **Shared Utilities**: Common functionality is centralized in `@ta/utils` and `@ta/core`
4. **Translation Support**: Built-in i18n support across components
5. **Storybook Integration**: Component documentation and testing via Storybook

## Development Workflow

### Creating New Libraries

Follow the documented process in README.md:

1. Generate library: `ng g lib [LibName]`
2. Update `ng-package.json` dest to `'dist'`
3. Update `package.json` name to `'@ta/[LibName]'`
4. Add build scripts to package.json
5. Update angular.json project references
6. Update tsconfig path mappings

### Building and Testing

- Always build with dependencies: `lerna run build --include-dependencies`
- Test individual libraries: `ng test @ta/[LibName]`
- Use Storybook for component development and documentation

### Code Organization

- Each library follows Angular library structure with `src/lib/` containing main code
- Public APIs are defined in `public-api.ts` files
- Components, services, and models are organized in dedicated folders
- Translation files and type definitions are co-located with their features

## Environment & Configuration

### Build Configurations

- **Production**: Optimized builds with budgets (500kb warning, 1mb error)
- **Development**: Unoptimized with source maps
- **Local**: Development mode with environment file replacement

### Style System

- SCSS-based styling with shared style library (`@ta/styles`)
- Angular Material integration
- Custom component styling following BEM-like conventions
- Style preprocessing with include paths for shared styles

## Testing Notes

- Karma + Jasmine for unit testing
- Storybook for component documentation and manual testing
- ESLint + Prettier for code quality
- Individual library testing is supported
- Tests are located alongside source files in each library
