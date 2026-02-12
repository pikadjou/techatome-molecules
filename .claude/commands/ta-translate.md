# Manage i18n Translations for @ta/ Libraries

You are adding or managing translations in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine the action:
- **add `<library>` `<key>` `<en>` `<fr>`**: Add a translation key
- **sync `<library>`**: Find missing translations between en.json and fr.json
- **find `<key-pattern>`**: Search for translation keys across all libraries
- **list `<library>`**: List all translation keys for a library

Example: `add ui button.save Save Sauvegarder`
Example: `sync core`
Example: `find button`

## Translation File Locations

Each library has its own i18n folder:
- `projects/<lib>/src/i18n/en.json`
- `projects/<lib>/src/i18n/fr.json`

Some libraries have nested i18n:
- `projects/ui/src/modules/container/i18n/en.json`
- `projects/ui/src/modules/layout/i18n/en.json`
- `projects/core/src/modules/maps/i18n/en.json`

For nested libraries:
- `projects/form/form-input/src/i18n/en.json`
- `projects/form/form-model/src/i18n/en.json`

## Key Naming Convention

Translation keys follow a hierarchical dot notation:
```
<library>.<feature>.<element>.<action>
```

Examples:
- `core.filter.clear` → "Clear"
- `core.filter.validate` → "Validate"
- `form.input.choices.nullable.label` → "Nullable"
- `ui.container.error.title` → "Error"
- `ui.layout.side.cta.cancel` → "Cancel"

## Steps

### For "add" action:

1. Read the target library's `en.json` and `fr.json`
2. Parse the existing JSON structure
3. Add the new key following the hierarchical dot notation
4. Write back both files, maintaining alphabetical ordering of keys

Example: Adding `core.table.export` with EN="Export" FR="Exporter"

In `projects/core/src/i18n/en.json`:
```json
{
  "core": {
    "table": {
      "export": "Export"
    }
  }
}
```

In `projects/core/src/i18n/fr.json`:
```json
{
  "core": {
    "table": {
      "export": "Exporter"
    }
  }
}
```

### For "sync" action:

1. Read both `en.json` and `fr.json` for the library
2. Flatten both to dot-notation keys
3. Find keys present in EN but missing in FR (and vice versa)
4. Report the missing keys
5. For each missing key, ask the user for the translation or suggest one
6. Update the files

### For "find" action:

1. Search all `i18n/**/*.json` files for the pattern
2. Report matches with: library, key, EN value, FR value
3. Use Grep to search: `pattern` across `projects/*/src/i18n/*.json` and `projects/*/*/src/i18n/*.json`

### For "list" action:

1. Read the library's `en.json`
2. Flatten to dot-notation
3. Display as a formatted list with values

## Using translations in components

Translations are used via `@ngx-translate/core` or `@ta/translation`:

```html
<!-- In templates with pipe -->
{{ 'core.filter.clear' | translate }}

<!-- With parameters -->
{{ 'core.message.count' | translate:{ count: total } }}
```

```typescript
// In TypeScript with TranslateService
import { TranslateService } from '@ngx-translate/core';

this.translateService.instant('core.filter.clear');
this.translateService.get('core.filter.clear').subscribe(text => { ... });
```

## Conventions

- ALWAYS update both EN and FR files together
- Keys should be lowercase with dots as separators
- Keep JSON alphabetically sorted by key
- Never leave a key in one language file without the other
- Use nested JSON objects, not flat dot-notation keys in the file
