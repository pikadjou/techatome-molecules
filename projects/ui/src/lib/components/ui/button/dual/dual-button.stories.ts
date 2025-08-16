import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { DualButtonComponent } from './dual-button.component';

type StoryType = DualButtonComponent;

export default {
  title: 'UI/Button/Dual',
  component: DualButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamIconsModule, TranslatePipe, CamDirectivePipeModule],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-dual-button [first]="first" [second]="second" [isFull]="isFull"></cam-dual-button>
      `,
    };
  },
  args: {
    first: {
      icon: 'home',
      label: 'Home',
      callback: () => {
        alert('first');
      },
    },
    second: {
      icon: 'home',
      label: 'is Done',
      callback: () => {
        alert('second');
      },
    },
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const isFull: StoryObj<StoryType> = {
  args: {
    isFull: true,
  },
};
