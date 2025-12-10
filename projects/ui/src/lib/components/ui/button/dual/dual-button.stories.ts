import { Meta, StoryObj } from "@storybook/angular";
import { DualButtonComponent } from "./dual-button.component";

type StoryType = DualButtonComponent;

export default {
  title: "UI/Button/Dual",
  component: DualButtonComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-dual-button [first]="first" [second]="second" [isFull]="isFull"></ta-dual-button>
      `,
    };
  },
  args: {
    first: {
      icon: "home",
      label: "Home",
      callback: () => {
        alert("first");
      },
    },
    second: {
      icon: "home",
      label: "is Done",
      callback: () => {
        alert("second");
      },
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const isFull: StoryObj<StoryType> = {
  args: {
    isFull: true,
  },
};
