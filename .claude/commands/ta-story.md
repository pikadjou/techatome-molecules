# Create a Storybook Story for a @ta/ Component

You are creating a Storybook story for an existing component in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Component path or name**: e.g., `projects/ui/src/lib/components/ui/button/button.component.ts` or just `button` in `ui`

If unclear, ask the user which component they want to create a story for.

## Steps

### 1. Find and read the component

Locate the component's TypeScript file. Read it to understand:
- All `input()` signals and their types/defaults
- All `@Output()` events
- The component selector
- Any imported dependencies

### 2. Determine the story category

Based on the library:
- `@ta/ui` components → `UI/<ComponentName>`
- `@ta/core` components → `Core/<ComponentName>`
- `@ta/form-input` components → `Forms/<ComponentName>`
- `@ta/icons` components → `Icons/<ComponentName>`
- `@ta/menu` components → `Menu/<ComponentName>`
- Other → `<LibraryName>/<ComponentName>`

### 3. Create the story file

Place it next to the component: `<component-name>.stories.ts`

```typescript
import { Meta, StoryObj } from '@storybook/angular';

import { <ComponentName>Component } from './<component-name>.component';

// Import dependencies needed for the story
// import { <Dep>Component } from '@ta/...';

export type StoryType = <ComponentName>Component;

export default {
  title: '<Category>/<ComponentName>',
  component: <ComponentName>Component,
  tags: ['autodocs'],
  render: (args) => ({
    props: args,
    // Only add template if content projection is needed:
    // template: `<ta-<name>>Content here</ta-<name>>`,
  }),
  argTypes: {
    // Map each input() signal to a control
    // For string inputs:
    // myInput: { control: 'text' },
    // For select inputs:
    // type: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    // For boolean inputs:
    // disabled: { control: 'boolean' },
    // For number inputs:
    // size: { control: { type: 'number', min: 1, max: 100 } },
    // For object inputs:
    // options: { control: 'object' },
  },
  args: {
    // Default values matching the component's input defaults
  },
} as Meta<StoryType>;

// Basic story with defaults
export const Basic: StoryObj<StoryType> = {};

// Create variant stories for different states/configurations
// export const Variant: StoryObj<StoryType> = {
//   args: {
//     type: 'secondary',
//   },
// };
```

### 4. Story variant patterns

Create stories for each meaningful variant:

**For UI components with type/state:**
```typescript
export const Primary: StoryObj<StoryType> = { args: { type: 'primary' } };
export const Secondary: StoryObj<StoryType> = { args: { type: 'secondary' } };
export const Danger: StoryObj<StoryType> = { args: { type: 'danger' } };
```

**For components with loading states:**
```typescript
export const Loading: StoryObj<StoryType> = { args: { state: 'loading' } };
export const Error: StoryObj<StoryType> = { args: { state: 'error' } };
export const Empty: StoryObj<StoryType> = { args: { state: 'empty' } };
```

**For components with content projection:**
```typescript
export const WithContent: StoryObj<StoryType> = {
  render: (args) => ({
    props: args,
    template: `<ta-<name>>Custom content</ta-<name>>`,
  }),
};
```

**For components needing module imports:**
```typescript
export default {
  // ...
  decorators: [
    moduleMetadata({
      imports: [SomeDependency],
    }),
  ],
} as Meta<StoryType>;
```

### 5. Conventions

- ALWAYS use `StoryObj<StoryType>` for type safety
- ALWAYS include `tags: ['autodocs']` for auto-generated docs
- Story names should be PascalCase descriptive names
- Use `argTypes` controls matching the input types
- Default `args` should show the most common usage
- Create 3-6 meaningful variants, not exhaustive combinations
