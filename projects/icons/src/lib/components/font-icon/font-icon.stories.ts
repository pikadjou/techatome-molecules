import { Meta, StoryObj } from '@storybook/angular';

import { FontIconComponent } from './font-icon.component';

type StoryType = FontIconComponent;

export default {
  title: 'ICONS/font icon',
  component: FontIconComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-font-icon [name]="name" [type]="type"></cam-font-icon>
      `,
    };
  },
  argTypes: {},
  args: {
    name: 'phone',
    type: 'md',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const small: StoryObj<StoryType> = {
  args: {
    type: 'xs',
  },
};
export const Big: StoryObj<StoryType> = {
  args: {
    type: 'md',
  },
};
