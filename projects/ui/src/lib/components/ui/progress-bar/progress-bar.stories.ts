import { Meta, StoryObj } from "@storybook/angular";

import { ProgressBarComponent } from "./progress-bar.component";

export default {
  title: "UI/Progress bar",
  component: ProgressBarComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  args: {
    current: 3,
    max: 8,
  },
} as Meta<ProgressBarComponent>;

export const Basic: StoryObj<ProgressBarComponent> = {};
