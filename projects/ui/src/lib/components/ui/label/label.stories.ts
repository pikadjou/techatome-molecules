import { Meta, StoryObj } from '@storybook/angular';

import { LabelComponent } from './label.component';

export type StoryType = LabelComponent;

export default {
  title: 'UI/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-label [type]="type">
          Je suis un badge
        </ta-label>
      `,
    };
  },
  args: {
    type: 'default',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Small: StoryObj<StoryType> = {
  args: {
    size: 'sm',
  },
};

export const Secondary: StoryObj<StoryType> = {
  args: {
    type: 'secondary',
  },
};

export const Success: StoryObj<StoryType> = {
  args: {
    type: 'success',
  },
};

export const Warning: StoryObj<StoryType> = {
  args: {
    type: 'warning',
  },
};

export const Danger: StoryObj<StoryType> = {
  args: {
    type: 'alert',
  },
};

export const Purple: StoryObj<StoryType> = {
  args: {
    type: 'purple',
  },
};
