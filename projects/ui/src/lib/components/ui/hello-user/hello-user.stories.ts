import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TranslatePipe } from '@ta/translation';
import { UserLogoComponent } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { __userInfo } from '../../../__mocks__/userInfo';
import { HelloUserComponent } from './hello-user.component';

export default {
  title: 'UI/Hello User',
  component: HelloUserComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [UserLogoComponent],
      imports: [TranslatePipe, CamDirectivePipeModule],
    }),
  ],
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
