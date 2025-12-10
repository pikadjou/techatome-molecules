import type { Meta, StoryObj } from "@storybook/angular";
import { BenefitItemComponent } from "./benefit-item.component";

const meta: Meta<BenefitItemComponent> = {
  title: "UI/Benefit Item",
  component: BenefitItemComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "warning", "error"],
    },
    text: {
      control: { type: "text" },
    },
  },
};

export default meta;
export type StoryType = BenefitItemComponent;

export const Success: StoryObj<BenefitItemComponent> = {
  args: {
    type: "success",
    text: "Accès complet aux fonctionnalités",
  },
};

export const Warning: StoryObj<BenefitItemComponent> = {
  args: {
    type: "warning",
    text: "Certaines fonctionnalités sont limitées",
  },
};

export const Error: StoryObj<BenefitItemComponent> = {
  args: {
    type: "error",
    text: "Accès restreint aux données sensibles",
  },
};

export const AllTypes: StoryObj<BenefitItemComponent> = {
  render: () => ({
    template: `
      <div style="width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <ta-benefit-item type="success" text="Accès complet aux fonctionnalités"></ta-benefit-item>
        <ta-benefit-item type="warning" text="Certaines fonctionnalités sont limitées"></ta-benefit-item>
        <ta-benefit-item type="error" text="Accès restreint aux données sensibles"></ta-benefit-item>
      </div>
    `,
  }),
};
