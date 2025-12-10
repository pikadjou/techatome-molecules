import { Meta, StoryObj } from "@storybook/angular";
import { NewComponent } from "./new.component";

export type StoryType = NewComponent;

export default {
  title: "UI/New",
  component: NewComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    visible: {
      control: "boolean",
    },
    isRelative: {
      control: "boolean",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  args: {
    visible: true,
    isRelative: false,
    size: "md",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Hidden: StoryObj<StoryType> = {
  args: {
    visible: false,
  },
};

export const Relative: StoryObj<StoryType> = {
  args: {
    isRelative: true,
  },
};

export const SmallSize: StoryObj<StoryType> = {
  args: {
    size: "sm",
  },
};

export const LargeSize: StoryObj<StoryType> = {
  args: {
    size: "lg",
  },
};
