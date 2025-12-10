import { Meta, StoryObj } from "@storybook/angular";
import { __classicMenu } from "projects/menu/src/lib/components/menu/__mock__/menu";

import { Menu } from "@ta/menu";

import { LayoutWithBottomNavComponent } from "./layout-with-bottom-nav.component";

type StoryType = LayoutWithBottomNavComponent & {
  menu: Menu;
  withMenu: boolean;
};

export default {
  title: "LAYOUT/Page with bottom nav",
  component: LayoutWithBottomNavComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-layout-with-bottom-nav>
          Dynamic content
          <ta-layout-nav>
              <ta-menu *ngIf="withMenu" [menu]="menu" [container]="'main'"></ta-menu>
          </ta-layout-nav>
        </ta-layout-with-bottom-nav>
      `,
    };
  },
  args: {
    menu: __classicMenu,
    withMenu: true,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithoutMenu: StoryObj<StoryType> = {
  args: {
    withMenu: false,
  },
};
