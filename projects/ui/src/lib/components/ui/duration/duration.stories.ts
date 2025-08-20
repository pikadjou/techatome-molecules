import { Meta, StoryObj } from '@storybook/angular';

import { DurationComponent } from './duration.component';

export type StoryType = DurationComponent;

export default {
  title: 'UI/Duration',
  component: DurationComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    startDate: {
      control: 'text',
    },
    endDate: {
      control: 'text',
    },
  },
  args: {
    startDate: new Date(2024, 0, 1).getTime(),
    endDate: new Date(2024, 0, 2, 5, 30).getTime(),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const HoursDuration: StoryObj<StoryType> = {
  args: {
    startDate: new Date(2024, 0, 1, 10, 0).getTime(),
    endDate: new Date(2024, 0, 1, 15, 30).getTime(),
  },
};

export const MinutesDuration: StoryObj<StoryType> = {
  args: {
    startDate: new Date(2024, 0, 1, 10, 0).getTime(),
    endDate: new Date(2024, 0, 1, 10, 45).getTime(),
  },
};

export const WeeksDuration: StoryObj<StoryType> = {
  args: {
    startDate: new Date(2024, 0, 1).getTime(),
    endDate: new Date(2024, 0, 15).getTime(),
  },
};