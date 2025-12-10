import { Meta, StoryObj } from "@storybook/angular";

import { TaTreeContainerComponent } from "./tree-container/tree-container.component";

export type StoryType = TaTreeContainerComponent;

export default {
  title: "UI/Tree",
  component: TaTreeContainerComponent,
  tags: ["autodocs"],
  render: (args) => ({
    props: args,
    template: `
      <ta-tree-container>
        <ta-tree-item>Root Item 1</ta-tree-item>
        <ta-tree-item>Root Item 2</ta-tree-item>
        <ta-tree-item>Root Item 3</ta-tree-item>
      </ta-tree-container>
    `,
  }),
  argTypes: {},
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const SingleItem: StoryObj<StoryType> = {
  render: (args) => ({
    props: args,
    template: `
      <ta-tree-container>
        <ta-tree-item>Single Root Item</ta-tree-item>
      </ta-tree-container>
    `,
  }),
};

export const ManyItems: StoryObj<StoryType> = {
  render: (args) => ({
    props: args,
    template: `
      <ta-tree-container>
        <ta-tree-item>Documents</ta-tree-item>
        <ta-tree-item>Images</ta-tree-item>
        <ta-tree-item>Videos</ta-tree-item>
        <ta-tree-item>Music</ta-tree-item>
        <ta-tree-item>Downloads</ta-tree-item>
        <ta-tree-item>Projects</ta-tree-item>
      </ta-tree-container>
    `,
  }),
};
