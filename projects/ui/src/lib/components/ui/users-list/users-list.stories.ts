import { Meta, StoryObj } from "@storybook/angular";
import { of } from "rxjs";

import { UserLogoData } from "../user-logo/user-logo.component";
import { UsersListComponent } from "./users-list.component";

export type StoryType = UsersListComponent;

const mockUsers: UserLogoData[] = [
  {
    firstName: "John",
    lastName: "Doe",
    trigram: "JDO",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    trigram: "JSM",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    trigram: "BJO",
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
        firstName: "Alice",
        lastName: "Wilson",
        trigram: "AWI",
      },
      {
        firstName: "Charlie",
        lastName: "Brown",
        trigram: "CBR",
      },
      {
        firstName: "Diana",
        lastName: "Davis",
        trigram: "DDA",
      },
    ]),
  },
};

export const EmptyList: StoryObj<StoryType> = {
  args: {
    users: of([]),
  },
};
