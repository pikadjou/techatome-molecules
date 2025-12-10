import { Meta, StoryObj } from "@storybook/angular";
import { Menu } from "../../models/menu/menu";
import {
  __classicIconMenu,
  __classicMenu,
  __fontIconMenu,
  __labelMenu,
  __onClickMenu,
  __textTooLongMenu,
} from "../menu/__mock__/menu";
import { QuickActionsComponent } from "./quick-actions.component";

type StoryType = QuickActionsComponent & { menu?: Menu };

export default {
  title: "MENU/Quick action",
  component: QuickActionsComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-quick-actions [menu]="menu" [tabSelection]="tabSelection">
        </ta-quick-actions>
      `,
    };
  },
  args: {
    menu: __labelMenu,
    tabSelection: "home",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
