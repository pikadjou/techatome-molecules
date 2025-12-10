import { Meta, StoryObj } from "@storybook/angular";

import { ProgressBarDataComponent } from "./progress-bar-data.component";

export default {
  title: "UI/Progress Bar Data",
  component: ProgressBarDataComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  args: {
    title: "Visites",
    titleIcon: "warning_amber",
    rightText: {
      text: "Du jour",
    },
    current: 3,
    max: 8,
  },
} as Meta<ProgressBarDataComponent>;

export const Basic: StoryObj<ProgressBarDataComponent> = {};
export const WithColor: StoryObj<ProgressBarDataComponent> = {
  args: {
    rightText: {
      text: "Du jour",
      colorClass: "color-primary-600",
    },
  },
};
