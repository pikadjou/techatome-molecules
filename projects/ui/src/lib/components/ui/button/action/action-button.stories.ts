import { Meta, StoryObj, componentWrapperDecorator } from '@storybook/angular';
import { CamIconType } from '@ta/icons';

import { ActionButtonComponent } from './action-button.component';

export default {
  title: 'UI/Button/Action',
  component: ActionButtonComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(story => `<div style="height: 50px; padding-top: 50px">${story}</div>`),
  ],

  render: args => ({ props: args }),
  args: {
    actions: [
      {
        callback: _ => console.log('test'),
        icon: CamIconType.Play,
      },
      {
        callback: _ => console.log('test'),
        icon: CamIconType.Stop,
      },
    ],
  },
} as Meta<ActionButtonComponent>;

export const Basic: StoryObj<ActionButtonComponent> = {};

export const MaterialIcons: StoryObj<ActionButtonComponent> = {
  args: {
    actions: [
      {
        callback: _ => console.log('test'),
        icon: 'play_circle_filled',
      },
      {
        callback: _ => console.log('test'),
        icon: 'pause_circle_filled',
      },
    ],
  },
};
