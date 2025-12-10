import { Meta, StoryObj } from "@storybook/angular";
import { SwiperComponent } from "@ta/ui";
type StoryType = SwiperComponent;

export default {
  title: "SWIPER/base",
  component: SwiperComponent,
  tags: ["autodocs"],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-swiper></ta-swiper>
      `,
    };
  },
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
