import { Meta, StoryObj } from "@storybook/angular";

import { BannerComponent } from "./banner.component";

export type StoryType = BannerComponent;

export default {
  title: "UI/Banner",
  component: BannerComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    message: {
      control: "text",
    },
  },
  args: {
    message: "This is a banner message",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const LongMessage: StoryObj<StoryType> = {
  args: {
    message:
      "This is a very long banner message that should demonstrate how the banner component handles longer text content and whether it wraps properly or truncates.",
  },
};
