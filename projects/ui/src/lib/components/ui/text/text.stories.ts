import { Meta, StoryObj } from "@storybook/angular";

import { TextComponent } from "./text.component";

type StoryType = TextComponent & { text?: string };

export default {
  title: "UI/Text",
  component: TextComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { text, ...props } = args;
    return {
      props,
      template: `
        <ta-text [size]="size" [isBold]="isBold">
          ${text}
        </ta-text>
      `,
    };
  },
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Small: StoryObj<StoryType> = {
  args: {
    size: "sm",
  },
};

export const Bold: StoryObj<StoryType> = {
  args: {
    isBold: true,
  },
};
