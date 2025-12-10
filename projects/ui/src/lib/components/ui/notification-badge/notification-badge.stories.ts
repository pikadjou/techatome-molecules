import { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@ta/ui";
import { NotificationBadgeContainerComponent } from "./notification-badge-container.component";
import { NotificationBadgeComponent } from "./notification-badge/notification-badge.component";

type StoryType = NotificationBadgeContainerComponent;

export default {
  title: "UI/Notification badge",
  component: NotificationBadgeContainerComponent,
  tags: ["autodocs"],
  moduleMetadata: {
    declarations: [ButtonComponent, NotificationBadgeComponent],
  },
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-notification-badge-container>
            <ta-button>Test du badge de notification</ta-button>
            <ta-notification-badge [number]="number" [fontSize]="fontSize" [style]="style"></ta-notification-badge>
        </ta-notification-badge-container>
      `,
    };
  },
  argTypes: {
    style: {
      options: ["primary", "secondary", "info", "danger"],
      control: { type: "select" },
    },
  },
  args: {
    number: 4551,
    fontSize: "xs",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
