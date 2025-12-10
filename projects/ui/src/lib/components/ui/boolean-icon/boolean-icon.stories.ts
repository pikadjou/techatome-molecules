import type { Meta, StoryObj } from "@storybook/angular";

import { TaSizes } from "@ta/styles";

import { BooleanIconComponent } from "./boolean-icon.component";

type StoryType = BooleanIconComponent & {
  // Add any additional story-specific properties if needed
};

export default {
  title: "UI/BooleanIcon",
  component: BooleanIconComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    value: {
      control: { type: "radio" },
      options: [true, false, null, undefined],
      description:
        "Boolean value to display (true shows ✓ green, false shows ✗ red, null/undefined shows text)",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "xxl", "big"] as TaSizes[],
      description: "Size of the icon",
    },
    nullText: {
      control: "text",
      description: "Text to display for null/undefined values",
    },
  },
  args: {
    value: true,
    size: "sm",
    nullText: "ui.boolean-icon.not-communicated",
  },
} as Meta<StoryType>;

export const Success: StoryObj<StoryType> = {
  args: {
    value: true,
  },
};

export const Error: StoryObj<StoryType> = {
  args: {
    value: false,
  },
};

export const Small: StoryObj<StoryType> = {
  args: {
    value: true,
    size: "xs",
  },
};

export const Large: StoryObj<StoryType> = {
  args: {
    value: true,
    size: "lg",
  },
};

export const NullValue: StoryObj<StoryType> = {
  args: {
    value: null,
  },
};

export const UndefinedValue: StoryObj<StoryType> = {
  args: {
    value: undefined,
  },
};

export const CustomNullText: StoryObj<StoryType> = {
  args: {
    value: null,
    nullText: "Non communiqué",
  },
};

export const Showcase: StoryObj<StoryType> = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <h4>Success States</h4>
          <ta-boolean-icon [value]="true" size="xs"></ta-boolean-icon>
          <ta-boolean-icon [value]="true" size="sm"></ta-boolean-icon>
          <ta-boolean-icon [value]="true" size="md"></ta-boolean-icon>
          <ta-boolean-icon [value]="true" size="lg"></ta-boolean-icon>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <h4>Error States</h4>
          <ta-boolean-icon [value]="false" size="xs"></ta-boolean-icon>
          <ta-boolean-icon [value]="false" size="sm"></ta-boolean-icon>
          <ta-boolean-icon [value]="false" size="md"></ta-boolean-icon>
          <ta-boolean-icon [value]="false" size="lg"></ta-boolean-icon>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <h4>Null/Unknown States</h4>
          <ta-boolean-icon [value]="null"></ta-boolean-icon>
          <ta-boolean-icon [value]="null" nullText="Non communiqué"></ta-boolean-icon>
          <ta-boolean-icon [value]="undefined" nullText="Inconnu"></ta-boolean-icon>
          <ta-boolean-icon [value]="null" nullText="Données manquantes" size="lg"></ta-boolean-icon>
        </div>
      </div>
    `,
    props: {},
  }),
};
