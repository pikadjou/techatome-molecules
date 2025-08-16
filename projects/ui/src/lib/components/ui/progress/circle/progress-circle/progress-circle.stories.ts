import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamDirectivePipeModule } from '@camelot/utils';

import { ProgressCircleComponent } from './progress-circle.component';

export default {
  title: 'UI/Progress circle',
  component: ProgressCircleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamDirectivePipeModule],
    }),
  ],
  render: (args) => ({ props: args }),
  args: {
    progress: 50,
    upTitle: 'Up title',
    downTitle: 'Down title',
  },
} as Meta<ProgressCircleComponent>;

export const Basic: StoryObj<ProgressCircleComponent> = {};

export const Full: StoryObj<ProgressCircleComponent> = {
  args: {
    progress: 100,
  },
};

export const Empty: StoryObj<ProgressCircleComponent> = {
  args: {
    progress: 0,
  },
};
