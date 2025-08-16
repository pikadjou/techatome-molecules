import { Meta, StoryObj } from '@storybook/angular';

import { MaterialIconComponent } from './material-icon.component';

type StoryType = MaterialIconComponent & { icon?: string };

export default {
  title: 'ICONS/Material Icon',
  component: MaterialIconComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { icon, ...props } = args;
    return {
      props,
      template: `
        <cam-material-icon>
          ${icon}
        </cam-material-icon>
      `,
    };
  },
  args: {
    icon: 'play_circle_filled',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<MaterialIconComponent> = {};

export const Outline: StoryObj<MaterialIconComponent> = {
  args: {
    outline: true,
  },
};

export const Sharp: StoryObj<MaterialIconComponent> = {
  args: {
    sharp: true,
  },
};

export const Rounded: StoryObj<MaterialIconComponent> = {
  args: {
    round: true,
  },
};

export const DualTone: StoryObj<MaterialIconComponent> = {
  args: {
    dualTone: true,
  },
};

export const Small: StoryObj<MaterialIconComponent> = {
  args: {
    type: 'xs',
  },
};
