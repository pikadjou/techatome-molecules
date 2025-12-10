import { Meta, StoryObj } from "@storybook/angular";

import { MegaoctetComponent } from "./megaoctet.component";

export type StoryType = MegaoctetComponent;

export default {
  title: "UI/Megaoctet",
  component: MegaoctetComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    octet: {
      control: "number",
    },
    icon: {
      control: "boolean",
    },
  },
  args: {
    octet: 1048576, // 1 MB in bytes
    icon: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithIcon: StoryObj<StoryType> = {
  args: {
    icon: true,
  },
};

export const SmallFile: StoryObj<StoryType> = {
  args: {
    octet: 1024, // 1 KB
  },
};

export const LargeFile: StoryObj<StoryType> = {
  args: {
    octet: 104857600, // 100 MB
  },
};

export const VeryLargeFile: StoryObj<StoryType> = {
  args: {
    octet: 1073741824, // 1 GB
    icon: true,
  },
};
