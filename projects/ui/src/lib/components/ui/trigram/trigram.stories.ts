import { Meta, StoryObj } from '@storybook/angular';

import { TrigramComponent } from './trigram.component';

export default {
  title: 'UI/Trigram',
  component: TrigramComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  args: {
    value: 'TRI',
    size: 150,
  },
} as Meta<TrigramComponent>;

export const Basic: StoryObj<TrigramComponent> = {};

export const Small: StoryObj<TrigramComponent> = {
  args: {
    size: 50,
  },
};
