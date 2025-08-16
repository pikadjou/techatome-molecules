import { Meta, StoryObj } from '@storybook/angular';

import { CamIconType } from '../../services/icons.service';
import { LocalIconComponent } from './local-icon.component';

export default {
  title: 'ICONS/Local Icon',
  component: LocalIconComponent,
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  argTypes: {
    type: {
      options: Object.values(CamIconType).filter((x) => typeof x === 'string'),
      mapping: CamIconType,
      control: { type: 'select' },
    },
  },
  args: {
    type: CamIconType.Comment,
    size: 'md',
  },
} as Meta<LocalIconComponent>;

export const Basic: StoryObj<LocalIconComponent> = {};

export const Small: StoryObj<LocalIconComponent> = {
  args: {
    size: 'xs',
  },
};

export const Rotation: StoryObj<LocalIconComponent> = {
  args: {
    type: CamIconType.Loader,
    rotation: true,
  },
};
