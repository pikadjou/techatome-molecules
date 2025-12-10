import { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "../button/button.component";
import { TitleComponent } from "./title.component";

type StoryType = ButtonComponent & { titleText?: string };

export default {
  title: "UI/Title",
  component: TitleComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { titleText, ...props } = args;
    return {
      props,
      template: `
        <ta-title [level]="level" [isTheme]="isTheme">
          ${titleText}
        </ta-title>
      `,
    };
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4],
      control: "number",
    },
    isTheme: {
      control: "boolean",
    },
    titleText: {
      control: "text",
    },
  },
  args: {
    level: 1,
    titleText: "Title",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<TitleComponent> = {};

export const H1: StoryObj<TitleComponent> = {
  args: {
    level: 1,
  },
};

export const H2: StoryObj<TitleComponent> = {
  args: {
    level: 2,
  },
};

export const H3: StoryObj<TitleComponent> = {
  args: {
    level: 3,
  },
};

export const H4: StoryObj<TitleComponent> = {
  args: {
    level: 4,
  },
};

export const Themed: StoryObj<TitleComponent> = {
  args: {
    isTheme: true,
  },
};
