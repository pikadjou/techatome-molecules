import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { PwaComponent } from './pwa.component';

export type StoryType = PwaComponent;

export default {
  title: 'UI/PWA',
  component: PwaComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [
        // Mock PWA service for Storybook
        {
          provide: 'TaPwaService',
          useValue: {
            isPWaCapability$: { subscribe: () => {} },
            launchInstall: () => {},
          },
        },
      ],
    }),
  ],
  render: args => ({ props: args }),
  argTypes: {},
  args: {},
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Shown: StoryObj<StoryType> = {
  render: args => ({
    props: {
      ...args,
      isShowed: true,
    },
  }),
};

export const Desktop: StoryObj<StoryType> = {
  render: args => ({
    props: {
      ...args,
      isShowed: true,
      pictureWidth: 18,
    },
  }),
};
