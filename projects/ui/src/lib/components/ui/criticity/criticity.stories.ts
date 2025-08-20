import { Meta, StoryObj } from '@storybook/angular';

import { CriticityComponent, CriticityStatus } from './criticity.component';

export type StoryType = CriticityComponent;

export default {
  title: 'UI/Criticity',
  component: CriticityComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    criticity: {
      control: { type: 'select' },
      options: [CriticityStatus.Unknown, CriticityStatus.P1, CriticityStatus.P2, CriticityStatus.P3],
    },
  },
  args: {
    criticity: CriticityStatus.P2,
  },
} as Meta<StoryType>;

export const Unknown: StoryObj<StoryType> = {
  args: {
    criticity: CriticityStatus.Unknown,
  },
};

export const P1: StoryObj<StoryType> = {
  args: {
    criticity: CriticityStatus.P1,
  },
};

export const P2: StoryObj<StoryType> = {
  args: {
    criticity: CriticityStatus.P2,
  },
};

export const P3: StoryObj<StoryType> = {
  args: {
    criticity: CriticityStatus.P3,
  },
};