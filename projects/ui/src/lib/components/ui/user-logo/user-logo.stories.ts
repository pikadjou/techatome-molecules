import { Meta, StoryObj } from "@storybook/angular";
import { __userInfo } from "../../../__mocks__/userInfo";
import { UserLogoComponent } from "./user-logo.component";

export default {
  title: "UI/User Logo",
  component: UserLogoComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  args: {
    userInfo: __userInfo,
    size: "lg",
  },
} as Meta<UserLogoComponent>;

export const Basic: StoryObj<UserLogoComponent> = {};

export const Large: StoryObj<UserLogoComponent> = {
  args: {
    size: "xl",
  },
};

export const TrigramFromNaming: StoryObj<UserLogoComponent> = {
  args: {
    userInfo: {
      naming: {
        name: "",
        firstName: null,
        trigram: "DVD",
      },
    },
  },
};

export const TrigramGenerated: StoryObj<UserLogoComponent> = {
  args: {
    userInfo: {
      naming: {
        name: "Dark",
        firstName: "Vadehors",
        trigram: "",
      },
    },
  },
};
