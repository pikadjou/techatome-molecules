import { Meta, StoryObj } from "@storybook/angular";
import { InputTimePicker } from "@ta/form-model";

import { TimePickerComponent } from "./time-picker.component";

type StoryType = TimePickerComponent;

export default {
  title: "FORM/TimePicker",
  component: TimePickerComponent,
  tags: ["autodocs"],
  render: (args) => {
    const props = args;

    return {
      props,
      template: `
        <ta-input-time-picker [input]="input"></ta-input-time-picker>
      `,
    };
  },
  args: {
    input: new InputTimePicker({
      key: "key",
      label: "label",
    }),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
