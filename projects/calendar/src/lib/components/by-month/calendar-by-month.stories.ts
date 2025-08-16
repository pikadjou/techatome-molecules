import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { User } from '@camelot/services';

import { CamCalendarModule } from '../../calendar.module';
import { ByMonthComponent } from './calendar-by-month.component';

export default {
  title: 'Calendar/Calendar by month',
  component: ByMonthComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamCalendarModule],
    }),
  ],
  render: (args) => ({ props: args }),
  args: {
    viewDate: new Date(),
    events: [
      {
        id: 0,
        title: 'Event 1',
        start: new Date(),
        meta: {
          id: 0,
          startDate: new Date().toLocaleDateString(),
          endDate: new Date().toLocaleDateString(),
          advisor: {} as User,
        },
      },
    ],
  },
} as Meta<ByMonthComponent>;

export const Basic: StoryObj<ByMonthComponent> = {};
