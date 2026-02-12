# Generate Documentation for a @ta/ Component or Library

You are generating documentation for a component or library in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Target**: a component name, library name, or file path
- **Scope**: `component` (single component), `library` (full library), `api` (public API only)

Example: `component ui/button`, `library core`, `api form-input`

## Steps

### For a single component:

1. **Read all component files** (TS, HTML, SCSS)
2. **Extract**:
   - Component selector (`ta-*`)
   - All `input()` signals with types and defaults
   - All `@Output()` events with payload types
   - Template content projection slots (`<ng-content>`)
   - CSS classes and customization options
   - Dependencies (imported components/services)
3. **Generate documentation** in this format:

```markdown
## `<ta-selector>`

**Import**: `import { <Component> } from '@ta/<library>';`

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `string` | `''` | Description |

### Outputs

| Output | Payload | Description |
|--------|---------|-------------|
| `action` | `void` | Emitted when... |

### Content Projection

- Default slot: Description of what goes inside

### Usage Example

```html
<ta-selector [input1]="value" (output1)="handler($event)">
  Content
</ta-selector>
```

### Dependencies

Requires: `@ta/icons`, `@ta/utils`
```

### For a full library:

1. **Read the library's `public-api.ts`** to list all exports
2. **Categorize exports**: Components, Services, Models/Interfaces, Directives, Pipes
3. **For each component**: generate the single-component doc above
4. **For each service**: list public methods with signatures
5. **For each model**: list properties and types
6. **Output**: A structured markdown document covering the entire library API

### For API-only:

1. **Read `public-api.ts`** and all re-exported files
2. **List all exported symbols** with their types
3. **Generate** a concise API reference table

## Output Format

Output the documentation as formatted markdown directly in the conversation. Do NOT create files unless the user explicitly asks to save it.

## Conventions

- Use the actual component selector in examples
- Show real import paths from @ta/
- Include the most common usage pattern first
- Note any required peer dependencies or setup
- Mention if the component extends TaBaseComponent or TaAbstractInputComponent
