import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { MaterialIconComponent } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { TitleComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ProgressBarComponent } from '../../progress-bar/progress-bar.component';
import { ProgressBarDataComponent } from './progress-bar-data.component';

export default {
  title: 'UI/Progress Bar Data',
  component: ProgressBarDataComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ProgressBarComponent, TitleComponent, MaterialIconComponent],
      imports: [TranslatePipe, CamDirectivePipeModule],
    }),
  ],
  render: args => ({ props: args }),
  args: {
    title: 'Visites',
    titleIcon: 'warning_amber',
    rightText: {
      text: 'Du jour',
    },
    current: 3,
    max: 8,
  },
} as Meta<ProgressBarDataComponent>;

export const Basic: StoryObj<ProgressBarDataComponent> = {};
export const WithColor: StoryObj<ProgressBarDataComponent> = {
  args: {
    rightText: {
      text: 'Du jour',
      colorClass: 'color-primary-600',
    },
  },
};
