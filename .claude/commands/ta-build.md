# Smart Build for @ta/ Libraries

You are performing a dependency-aware build of @ta/ libraries.

## Input: $ARGUMENTS

Parse arguments:
- **Library name(s)**: one or more @ta/ libraries to build (e.g., `ui`, `core`, `all`)
- If empty or `all`: build everything in dependency order

## Dependency Graph (bottom-up build order)

```
Layer 0 (no deps):     @ta/styles, @ta/eslint-config, @ta/prettier-config
Layer 1:               @ta/icons (depends: styles)
                       @ta/utils (depends: icons)
Layer 2:               @ta/notification (depends: utils)
                       @ta/translation (depends: utils)
                       @ta/form-model (depends: utils, notification)
                       @ta/server (depends: utils)
Layer 3:               @ta/ui (depends: icons, styles, utils)
                       @ta/services (depends: server, utils)
                       @ta/menu (depends: ui, icons, utils, translation)
Layer 4:               @ta/form-input (depends: form-model, ui, icons, utils, translation)
                       @ta/form-basic (depends: form-input, form-model, ui, utils)
Layer 5:               @ta/core (depends: form-basic, form-model, form-input, ui, icons, server, translation, utils)
                       @ta/user (depends: ui, server, utils, notification)
                       @ta/calendar (depends: ui, utils)
                       @ta/charts (depends: ui, utils)
                       @ta/files-basic (depends: ui, utils, server)
Layer 6:               @ta/cms (depends: core, ui, server, utils)
                       @ta/files-extended (depends: files-basic, ui, utils)
                       @ta/features (depends: core, ui, utils)
                       @ta/capacitor (depends: utils)
                       @ta/wysiswyg (depends: utils)
```

## Steps

### If building a specific library:

1. Identify all dependencies of the requested library from the graph above
2. Determine which deps need rebuilding (check if dist/ exists and is recent)
3. Build in bottom-up order

Execute the build commands:
```bash
# Build a specific library:
ng build @ta/<lib-name>

# Or build all with dependencies via Lerna:
lerna run build --scope=@ta/<lib-name> --include-dependencies
```

### If building all:

Use the Lerna command which handles dependency ordering:
```bash
lerna run build --include-dependencies
```

### If a build fails:

1. Read the error output carefully
2. Common issues:
   - **Missing dependency**: a dependent library wasn't built first → build it
   - **Type error**: check for API changes in upstream library
   - **SCSS error**: check `@use` paths and that @ta/styles is built
   - **Circular dependency**: check import paths for circular references
3. Fix the issue and retry from the failing library

### Quick rebuild (single library, no deps):

If you're sure dependencies are up-to-date:
```bash
ng build @ta/<lib-name>
```

## Post-build verification

After building, verify:
1. `projects/<lib>/dist/` directory exists and has fresh files
2. `fesm2022/` bundle was generated
3. `package.json` in dist has correct name and version
