import { Meta, StoryObj } from '@storybook/angular';

import { StatTileComponent, StatTileLayout, StatTileTone } from './stat-tile.component';

export default {
  title: 'UI/Stat tile',
  component: StatTileComponent,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      options: ['brand', 'accent', 'success', 'warning', 'alert', 'neutral'] as StatTileTone[],
      control: 'select',
    },
    layout: {
      options: ['value-first', 'label-first'] as StatTileLayout[],
      control: 'inline-radio',
    },
  },
  args: {
    icon: 'business',
    value: '6',
    label: 'Total des biens',
    tone: 'brand',
    layout: 'value-first',
  },
} as Meta<StatTileComponent>;

export const Basic: StoryObj<StatTileComponent> = {};

export const Success: StoryObj<StatTileComponent> = {
  args: { icon: 'check_circle', value: '3', label: 'Biens loués', tone: 'success' },
};

export const LabelFirst: StoryObj<StatTileComponent> = {
  args: {
    icon: 'calendar_today',
    label: 'Période',
    value: '01/10/2024 – 30/09/2027',
    layout: 'label-first',
    tone: 'accent',
  },
};
