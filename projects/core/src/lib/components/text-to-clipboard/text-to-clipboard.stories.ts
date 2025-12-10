import { Meta } from "@storybook/angular";
import { TextToClipboardComponent } from "./text-to-clipboard.component";

type StoryType = TextToClipboardComponent;

export default {
  title: "CORE/TextToClipboard",
  component: TextToClipboardComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-text-to-clipboard [value]="value"></ta-text-to-clipboard>
      `,
    };
  },
  args: {
    value: "ClipBoard value",
  },
} as Meta<StoryType>;
