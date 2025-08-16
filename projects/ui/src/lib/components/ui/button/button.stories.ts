import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ButtonComponent } from './button.component';

type StoryType = ButtonComponent & { label?: string };

export default {
  title: 'UI/Button/Basic',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [CamIconsModule, CamDirectivePipeModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args) => {
    const { label, ...props } = args;
    return {
      props,
      template: `
        <cam-button [state]="state" [style]="style" [size]="size" [options]="options" (action)="action()">
          ${label}
        </cam-button>
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
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-button [state]="state" [style]="style" [size]='size" [options]="options" (action)="action()">
          <cam-font-icon [name]="'calendar'"></cam-font-icon>
        </cam-button>
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
