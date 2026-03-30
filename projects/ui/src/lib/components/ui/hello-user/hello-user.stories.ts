import { Meta, StoryObj } from "@storybook/angular";
import { __userInfo } from "../../../__mocks__/userInfo";
import { HelloUserComponent } from "./hello-user.component";

export default {
  title: "UI/Hello User",
  component: HelloUserComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  args: {
    title: "Hello",
    userInfo: {
      profilePictureUrl: __userInfo.picture,
      naming: {
        firstName: __userInfo.firstname,
        name: __userInfo.lastname,
      },
    },
  },
} as Meta<HelloUserComponent>;

export const Basic: StoryObj<HelloUserComponent> = {};

export const Fotter: StoryObj<HelloUserComponent> = {
  args: {
    userInfo: {
      profilePictureUrl: __userInfo.picture,
      naming: {
        firstName: __userInfo.firstname,
        name: __userInfo.lastname,
      },
    },
    footer: "this is a footer",
  },
};
