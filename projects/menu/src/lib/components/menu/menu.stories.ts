import { Meta, StoryObj } from "@storybook/angular";
import { MenuComponent } from "../public-api";
import { __classicMenu, __fontIconMenu, __smallMenu } from "./__mock__/menu";

type StoryType = MenuComponent;

export default {
  title: "MENU/Menu",
  component: MenuComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="230">
        <ta-menu [menu]="menu" [container]="'main'"></ta-menu>
      </div>
      `,
    };
  },
  args: {
    menu: __classicMenu,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const SmallMenu: StoryObj<StoryType> = {
  args: {
    menu: __smallMenu,
  },
};

export const FontMenu: StoryObj<StoryType> = {
  args: {
    menu: __fontIconMenu,
  },
};
