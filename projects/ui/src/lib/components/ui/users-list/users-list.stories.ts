import { Meta, StoryObj } from "@storybook/angular";
import { of } from "rxjs";

import { UserLogoData } from "../user-logo/user-logo.component";
import { UsersListComponent } from "./users-list.component";

export type StoryType = UsersListComponent;

const mockUsers: UserLogoData[] = [
  {
    firstname: "John",
    lastname: "Doe",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
  },
  {
    firstname: "Bob",
    lastname: "Johnson",
  },
];

export default {
  title: "UI/Users List",
  component: UsersListComponent,
  tags: ["autodocs"],
  render: (args) => ({ props: args }),
  argTypes: {},
  args: {
    users: of(mockUsers),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const SingleUser: StoryObj<StoryType> = {
  args: {
    users: of([mockUsers[0]]),
  },
};

export const ManyUsers: StoryObj<StoryType> = {
  args: {
    users: of([
      ...mockUsers,
      {
        firstname: "Alice",
        lastname: "Wilson",
      },
      {
        firstname: "Charlie",
        lastname: "Brown",
      },
      {
        firstname: "Diana",
        lastname: "Davis",
      },
    ]),
  },
};

export const EmptyList: StoryObj<StoryType> = {
  args: {
    users: of([]),
  },
};
