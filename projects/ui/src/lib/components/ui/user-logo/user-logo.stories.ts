import { Meta, StoryObj } from "@storybook/angular";
import { __userInfo } from "../../../__mocks__/userInfo";
import { UserLogoComponent } from "./user-logo.component";

export default {
  title: "UI/User Logo",
  component: UserLogoComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  args: {
    user: __userInfo,
    size: "lg",
  },
} as Meta<UserLogoComponent>;

export const Basic: StoryObj<UserLogoComponent> = {};

export const Large: StoryObj<UserLogoComponent> = {
  args: {
    size: "xl",
  },
};

export const TrigramGenerated: StoryObj<UserLogoComponent> = {
  args: {
    user: {
      firstname: "Vadehors",
      lastname: "Dark",
    },
    defaultType: "trigram",
  },
};
