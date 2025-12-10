import { Meta, StoryObj } from "@storybook/angular";
import { FiltersComponent } from "./filters.component";

type StoryType = FiltersComponent;

export default {
  title: "UI/Filters",
  component: FiltersComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-filters>
          Mon contenu
        </ta-filters>
      `,
    };
  },
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
