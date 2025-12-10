import { Meta, StoryObj } from "@storybook/angular";

import { HourDateLineComponent } from "./hour-date-line.component";

export default {
  title: "UI/HourDateLine",
  component: HourDateLineComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    startDate: {
      control: "date",
    },
    endDate: {
      control: "date",
    },
  },
  args: {
    startDate: new Date(),
    endDate: new Date(),
  },
} as Meta<HourDateLineComponent>;

export const Basic: StoryObj<HourDateLineComponent> = {};
export const OnlyStart: StoryObj<HourDateLineComponent> = {
  args: {
    startDate: new Date(),
    endDate: null,
  },
};
export const OnlyEnd: StoryObj<HourDateLineComponent> = {
  args: {
    startDate: null,
    endDate: new Date(),
  },
};
