import { Meta, StoryObj } from '@storybook/angular';

import { TabBarComponent, TabBarVariant } from './tab-bar.component';

export default {
  title: 'UI/Tab bar',
  component: TabBarComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['underline', 'pill'] as TabBarVariant[],
      control: 'inline-radio',
    },
  },
  args: {
    variant: 'underline',
    active: 'informations',
    items: [
      { key: 'informations', label: 'Informations' },
      { key: 'lease', label: 'Bail' },
      { key: 'inventory', label: 'État des lieux' },
      { key: 'documents', label: 'Documents' },
    ],
  },
} as Meta<TabBarComponent>;

export const Underline: StoryObj<TabBarComponent> = {};

export const WithCounts: StoryObj<TabBarComponent> = {
  args: {
    active: 'received',
    items: [
      { key: 'received', label: 'Reçues', count: 7 },
      { key: 'given', label: 'Données', count: 5 },
      { key: 'estate', label: 'Sur mes biens', count: 6 },
    ],
  },
};

export const Pill: StoryObj<TabBarComponent> = {
  args: {
    variant: 'pill',
    active: 'all',
    items: [
      { key: 'all', label: 'Toutes' },
      { key: 'active', label: 'En cours' },
      { key: 'pending', label: 'En attente' },
      { key: 'closed', label: 'Terminées' },
    ],
  },
};
