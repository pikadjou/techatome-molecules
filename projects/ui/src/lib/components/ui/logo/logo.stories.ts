import { Meta, StoryObj } from '@storybook/angular';

import { LogoComponent } from './logo.component';

export default {
  title: 'UI/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  args: {
    color: 'black',
    widthPercentage: 80,
  },
} as Meta<LogoComponent>;

export const Basic: StoryObj<LogoComponent> = {};

export const Small: StoryObj<LogoComponent> = {
  args: {
    widthPercentage: 40,
  },
};

export const White: StoryObj<LogoComponent> = {
  args: {
    color: 'white',
  },
};

export const OneLine: StoryObj<LogoComponent> = {
  args: {
    type: 'oneline',
  },
};
