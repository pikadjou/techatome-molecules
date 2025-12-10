import { Meta, StoryObj } from "@storybook/angular";
import { __classicMenu } from "projects/menu/src/lib/components/menu/__mock__/menu";

import { Menu } from "@ta/menu";

import { LayoutPageComponent } from "./layout-page.component";

type StoryType = LayoutPageComponent & { menu: Menu; withHeader: boolean };

export default {
  title: "LAYOUT/Page",
  component: LayoutPageComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-layout-page>
            <ta-layout-header *ngIf="withHeader">
                <ta-layout-header-default></ta-layout-header-default>
            </ta-layout-header>
            <ta-layout-title>
              <ta-profile-data [profile]="profile"></ta-profile-data>
            </ta-layout-title>
            <ta-card class='ta-c'>
              <ta-card-content>Dynamic content</ta-card-content>
            </ta-card>
            <ta-layout-nav>
                <ta-menu [menu]="menu" [container]="'main'"></ta-menu>
            </ta-layout-nav>
        </ta-layout-page>
      `,
    };
  },
  args: {
    menu: __classicMenu,
    profile: {
      title: {
        main: "VANDERHEYDEN",
        seconde: "Jean-François",
        sub: "client",
      },
      email: "redpanda@gmail.com",
      phoneNumber: "+472695609",
    },
    withHeader: true,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithoutHeader: StoryObj<StoryType> = {
  args: {
    withHeader: false,
  },
};
