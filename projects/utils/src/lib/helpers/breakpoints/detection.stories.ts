import { Meta, StoryObj } from "@storybook/angular";

import { BreakpointDetection } from "./detection";

type StoryType = {
  breakpointDetection: BreakpointDetection;
};

export default {
  title: "UTILS/Breakpoints",
  tags: ["autodocs"],
  render: (args) => {
    const { breakpointDetection, ...props } = args;
    return {
      props,
      template: `
        <div>
          isLessThanSmall: {{breakpointDetection.isLessThanSm$ | async }}
        </div>
      `,
    };
  },
  args: {
    breakpointDetection: new BreakpointDetection(),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
