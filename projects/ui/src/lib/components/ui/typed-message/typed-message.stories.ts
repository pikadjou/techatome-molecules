import { Meta, StoryObj } from '@storybook/angular';
import { TypedMessageComponent } from './typed-message.component';

type StoryType = TypedMessageComponent;

export default {
  title: 'UI/Typed message',
  component: TypedMessageComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  args: {
    text: 'Ceci est une alerte rouge',
    type: 'danger',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
