import { Meta, StoryObj } from "@storybook/angular";

import { TaIconType } from "@ta/icons";

import { ContactInformationComponent } from "./contact-information.component";

type StoryType = ContactInformationComponent;

export default {
  title: "UI/Contact Information",
  component: ContactInformationComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-contact-information [value]="value" [icon]="icon">
          My content
        </ta-contact-information>
      `,
    };
  },
  argTypes: {
    value: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    localIcon: {
      options: Object.values(TaIconType).filter((x) => typeof x === "string"),
      mapping: TaIconType,
      control: { type: "select" },
    },
  },
  args: {
    icon: "mail",
    value: "Contact information",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
