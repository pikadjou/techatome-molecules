import { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

type StoryType = ButtonComponent & { label?: string };

export default {
  title: 'UI/Button/Basic',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: args => {
    const { label, ...props } = args;
    return {
      props,
      template: `
        <ta-button [state]="state" [style]="style" [size]="size" [options]="options" (action)="action()">
          ${label}
        </ta-button>
      `,
    };
  },
  argTypes: {
    label: {
      control: 'text',
    },
    state: {
      options: ['classic', 'disabled', 'inactive'],
      control: { type: 'select' },
    },
    style: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Button',
    style: 'primary',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Disabled: StoryObj<StoryType> = {
  args: {
    state: 'disabled',
  },
};

export const Style: StoryObj<StoryType> = {
  args: {
    type: 'secondary',
  },
};

export const CircularWithIcon: StoryObj<StoryType> = {
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-button [state]="state" [style]="style" [size]='size" [options]="options" (action)="action()">
          <ta-font-icon [name]="'calendar'"></ta-font-icon>
        </ta-button>
      `,
    };
  },
  args: {
    options: {
      circular: true,
    },
  },
};
export const Circular: StoryObj<StoryType> = {
  args: {
    options: {
      circular: true,
    },
  },
};
export const CircularSmall: StoryObj<StoryType> = {
  args: {
    options: {
      circular: 'small',
    },
  },
};
export const CircularBig: StoryObj<StoryType> = {
  args: {
    options: {
      circular: 'big',
    },
  },
};

export const WithLabel: StoryObj<StoryType> = {
  args: {
    label: 'I have read the terms and conditions.',
  },
};
