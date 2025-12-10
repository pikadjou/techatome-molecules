import { Meta, StoryObj } from "@storybook/angular";

import { ToastComponent } from "./toast.component";
import { ENotificationCode } from "../../../enum";

export type StoryType = ToastComponent;

export default {
  title: "UI/Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {
    code: {
      control: { type: "select" },
      options: [
        ENotificationCode.none,
        ENotificationCode.error,
        ENotificationCode.warning,
        ENotificationCode.information,
        ENotificationCode.success,
      ],
    },
  },
  args: {
    code: ENotificationCode.information,
  },
} as Meta<StoryType>;

export const Information: StoryObj<StoryType> = {};

export const Success: StoryObj<StoryType> = {
  args: {
    code: ENotificationCode.success,
  },
};

export const Warning: StoryObj<StoryType> = {
  args: {
    code: ENotificationCode.warning,
  },
};

export const Error: StoryObj<StoryType> = {
  args: {
    code: ENotificationCode.error,
  },
};

export const None: StoryObj<StoryType> = {
  args: {
    code: ENotificationCode.none,
  },
};
