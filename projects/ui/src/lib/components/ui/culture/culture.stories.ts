import { Meta, StoryObj } from '@storybook/angular';
import { Culture } from '@ta/utils';

import { CultureComponent } from './culture.component';

export type StoryType = CultureComponent;

export default {
  title: 'UI/Culture',
  component: CultureComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    cultures: {
      control: 'object',
    },
  },
  args: {
    cultures: [Culture.FR_FR, Culture.EN_EN, Culture.ES_ES],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const SingleCulture: StoryObj<StoryType> = {
  args: {
    cultures: [Culture.FR_FR],
  },
};

export const ManyCultures: StoryObj<StoryType> = {
  args: {
    cultures: [
      Culture.FR_FR,
      Culture.FR_BE,
      Culture.NL_NL,
      Culture.EN_EN,
      Culture.ES_ES,
    ],
  },
};