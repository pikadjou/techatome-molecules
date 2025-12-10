import { Meta, StoryObj } from "@storybook/angular";

import { TimeAgoComponent } from "./time-ago.component";

export type StoryType = TimeAgoComponent;

export default {
  title: "UI/Time Ago",
  component: TimeAgoComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    date: {
      control: "text",
    },
    withHours: {
      control: "boolean",
    },
  },
  args: {
    date: new Date().toISOString(),
    withHours: false,
  },
} as Meta<StoryType>;

export const Today: StoryObj<StoryType> = {};

export const Yesterday: StoryObj<StoryType> = {
  args: {
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
};

export const Tomorrow: StoryObj<StoryType> = {
  args: {
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  },
};

export const FewDaysAgo: StoryObj<StoryType> = {
  args: {
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
};

export const WithHours: StoryObj<StoryType> = {
  args: {
    withHours: true,
  },
};
