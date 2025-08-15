# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 19 monorepo with multiple library packages organized under the `@ta/` namespace. The project combines a main Angular application (DocBuilderFront) with reusable component libraries, following a modular architecture pattern.

### Core Architecture

- **Main Application**: `DocBuilderFront` - A document builder frontend using Angular Material, Editor.js, and Apollo GraphQL
- **Library Projects**: Multiple shared libraries under `projects/` directory:
  - `@ta/ui` - UI components (buttons, cards, layouts)
  - `@ta/form-*` - Form handling components and models
  - `@ta/server` - GraphQL and API service utilities
  - `@ta/utils` - Common utilities, pipes, and directives
  - `@ta/styles` - SCSS styling system
  - `@ta/icons` - Icon components
  - `@ta/menu` - Navigation models
  - `@ta/notification` - Notification components
  - `@ta/wysiswyg` - WYSIWYG editor components

### Key Technologies

- Angular 19 with standalone components
- Angular Material for UI components
- Editor.js for rich text editing
- Apollo Client for GraphQL
- Bootstrap 5 for styling
- Storybook for component documentation
- Karma/Jasmine for testing

## Common Commands

### Development

```bash
# Start development server
yarn start
# or
ng serve

# Build the application
yarn build
# or
ng build

# Run tests
yarn test
# or
ng test

# Run linting
yarn lint

# Format code with Prettier
yarn prettier

# Check dependencies
yarn checkfiles
```

### Storybook

```bash
# Start Storybook development server
yarn storybook

# Build Storybook for production
yarn build-storybook
```

### Library Development

```bash
# Build all libraries
ng build @ta/ui
ng build @ta/server
ng build @ta/utils
# ... etc for other libraries

# Test specific library
ng test @ta/ui --watch
```

## Project Structure

### Main Application Structure

- `src/app/features/` - Feature modules (categories, documents, core layout)
- `src/app/services/` - Business logic services (documents, categories, agreements)
- `src/environments/` - Environment configurations

### Library Structure Pattern

Each library in `projects/` follows this structure:

- `src/lib/` - Library source code
- `src/public-api.ts` - Public API exports
- `ng-package.json` - Angular library configuration
- Individual `tsconfig.lib.json` files

## Code Conventions

### Component Naming

- Main app components use `app` prefix
- Library components use `ta` prefix
- Follow kebab-case for component selectors

### Styling

- SCSS is the preferred style language
- Global styles in `@ta/styles` library
- Component-specific styles co-located with components
- Angular Material theme: azure-blue

### Code Quality

- ESLint configuration includes Angular-specific rules
- Prettier configuration: single quotes, trailing commas, 120 character line width
- All libraries have individual build and test configurations

## GraphQL Integration

The project uses Apollo Client for GraphQL operations:

- Services in `src/app/services/` handle GraphQL queries and mutations
- Server utilities in `@ta/server` library provide common GraphQL functionality
- Authentication handled via bearer token interceptor

## Form Architecture

Complex form handling split across multiple libraries:

- `@ta/form-model` - Form data models and validation
- `@ta/form-input` - Input components (text, dropdown, checkbox, etc.)
- `@ta/form-basic` - Basic form layout and structure components

## Testing Strategy

- Unit tests use Karma/Jasmine
- Each library has independent test configuration
- Tests run with `ng test` for main app or `ng test <library-name>` for specific libraries
