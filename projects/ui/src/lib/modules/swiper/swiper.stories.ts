import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { SwiperComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

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
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-swiper></cam-swiper>
      `,
    };
  },
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
