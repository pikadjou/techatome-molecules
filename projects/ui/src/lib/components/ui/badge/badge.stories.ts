import { Meta, StoryObj } from '@storybook/angular';

import { BadgeComponent } from './badge.component';

export type StoryType = BadgeComponent;

export default {
  title: 'UI/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    value: {
      control: 'text',
    },
    type: {
      control: { type: 'select' },
    },
  },
  args: {
    value: 'Badge',
    type: 'primary',
    showClickOption: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Danger: StoryObj<StoryType> = {
  args: {
    type: 'danger',
  },
};

export const Success: StoryObj<StoryType> = {
  args: {
    type: 'success',
  },
};

export const Info: StoryObj<StoryType> = {
  args: {
    type: 'info',
  },
};

export const Clickable: StoryObj<StoryType> = {
  args: {
    showClickOption: true,
  },
};

export const WithIcon: StoryObj<StoryType> = {
  args: {
    icon: 'copy',
  },
};
