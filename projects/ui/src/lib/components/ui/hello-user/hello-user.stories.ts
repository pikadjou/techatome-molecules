import { Meta, StoryObj } from '@storybook/angular';
import { __userInfo } from '../../../__mocks__/userInfo';
import { HelloUserComponent } from './hello-user.component';

export default {
  title: 'UI/Hello User',
  component: HelloUserComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  args: {
    title: 'Hello',
    userInfo: __userInfo,
  },
} as Meta<HelloUserComponent>;

export const Basic: StoryObj<HelloUserComponent> = {};

export const Fotter: StoryObj<HelloUserComponent> = {
  args: {
    userInfo: __userInfo,
    footer: 'this is a footer',
  },
};
