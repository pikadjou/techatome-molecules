import { Meta, StoryObj } from "@storybook/angular";
import { ContainerValidationComponent } from "./container-validation.component";

type StoryType = ContainerValidationComponent;

export default {
  title: "CONTAINER/validaiton",
  component: ContainerValidationComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <ta-container-validation (validated)="validated()">
        Validation modal
      </ta-container-validation>
      `,
    };
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
