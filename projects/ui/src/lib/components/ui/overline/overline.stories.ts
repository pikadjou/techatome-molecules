import { Meta, StoryObj } from '@storybook/angular';

import { OverlineComponent, OverlineTone } from './overline.component';

type StoryType = OverlineComponent & { text?: string };

export default {
  title: 'UI/Overline',
  component: OverlineComponent,
  tags: ['autodocs'],
  render: args => {
    const { text, ...props } = args;
    return {
      props,
      template: `<ta-overline [tone]="tone" [size]="size">${text}</ta-overline>`,
    };
  },
  argTypes: {
    tone: {
      options: ['muted', 'accent', 'brand', 'invert', 'highlight'] as OverlineTone[],
      control: 'select',
    },
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    text: { control: 'text' },
  },
  args: {
    tone: 'muted',
    size: 'md',
    text: 'Score de confiance',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Accent: StoryObj<StoryType> = { args: { tone: 'accent', text: 'Par où commencer' } };

export const OnDarkSurface: StoryObj<StoryType> = {
  args: { tone: 'highlight', text: 'Score de confiance' },
  parameters: { backgrounds: { default: 'dark' } },
};
