import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { SwiperComponent } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

type StoryType = SwiperComponent;

export default {
  title: 'SWIPER/base',
  component: SwiperComponent,
  decorators: [
    moduleMetadata({
      imports: [CamIconsModule, CamDirectivePipeModule],
    }),
  ],
  tags: ['autodocs'],
  render: args => {
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
