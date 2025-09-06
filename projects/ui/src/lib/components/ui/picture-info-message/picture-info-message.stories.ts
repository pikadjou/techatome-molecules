import { Meta, StoryObj } from '@storybook/angular';

import { TaIconType } from '@ta/icons';

import { PictureInfoMessageComponent } from './picture-info-message.component';

type StoryType = PictureInfoMessageComponent;

export default {
  title: 'UI/Picture info message',
  component: PictureInfoMessageComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  args: {
    text: "It's meee, Marioooo",
    icon: TaIconType.Checked,
    iconSize: 'md',
    type: 'warning',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
