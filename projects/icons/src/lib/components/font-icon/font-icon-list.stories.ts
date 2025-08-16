import { Meta, StoryObj } from '@storybook/angular';

import { FontIconComponent } from './font-icon.component';

type StoryType = FontIconComponent;

export default {
  title: 'ICONS/font icon list',
  component: FontIconComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <iframe src='./../../styles/demo.html'></iframe>
      `,
    };
  },
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
