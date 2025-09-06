import { Meta, StoryObj } from '@storybook/angular';

import { TaIconType } from '@ta/icons';

import { EmptyComponent } from './empty.component';

type StoryType = EmptyComponent;

export default {
  title: 'Container/Empty',
  component: EmptyComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="350">
        <ta-empty
         [isEmpty]="isEmpty" [isLight]="isLight"
         [text]="text" [type]="type"
         [icon]="icon" [iconSize]="iconSize"
        >
            Je ne suis pas vide !!!
        </ta-empty>
        </div>
      `,
    };
  },
  args: {
    icon: TaIconType.Edit,
    iconSize: 'sm',
    text: 'Je suis tout vide :(',
    type: 'info',
    isEmpty: true,
    isLight: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Light: StoryObj<StoryType> = {
  args: {
    icon: TaIconType.Edit,
    iconSize: 'sm',
    text: 'Je suis tout vide :(',
    type: 'info',
    isEmpty: true,
    isLight: true,
  },
};
