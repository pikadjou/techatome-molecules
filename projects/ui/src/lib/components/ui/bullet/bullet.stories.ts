import { Meta, StoryObj } from "@storybook/angular";

import { BulletComponent } from "./bullet.component";

export type StoryType = BulletComponent;

export default {
  title: "UI/Bullet",
  component: BulletComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-bullet [type]="type"></ta-bullet>
      `,
    };
  },
  args: {
    type: "default",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Notification: StoryObj<StoryType> = {
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-bullet [type]="type">12</ta-bullet>
      `,
    };
  },
  args: {
    type: "notif",
  },
};

export const Small: StoryObj<StoryType> = {
  args: {
    size: "sm",
  },
};

export const Secondary: StoryObj<StoryType> = {
  args: {
    type: "secondary",
  },
};

export const Success: StoryObj<StoryType> = {
  args: {
    type: "success",
  },
};

export const Warning: StoryObj<StoryType> = {
  args: {
    type: "warning",
  },
};

export const Danger: StoryObj<StoryType> = {
  args: {
    type: "alert",
  },
};

export const Purple: StoryObj<StoryType> = {
  args: {
    type: "purple",
  },
};

export const New: StoryObj<StoryType> = {
  args: {
    type: "new",
  },
};
