import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamCalendarModule } from '../../calendar.module';
import { ByDayComponent } from './calendar-by-day.component';

export default {
  title: 'Calendar/Calendar by day',
  component: ByDayComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamCalendarModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-calendar-by-day [eventTemplate]="step1Template" [viewDate]="viewDate" [events]="events"></cam-calendar-by-day>

        <ng-template #step1Template let-weekEvent="weekEvent">
          <div>{{ weekEvent.event.title }}</div>
        </ng-template>
      `,
    };
  },
  args: {
    viewDate: new Date(),
    events: [
      {
        id: 0,
        start: new Date(),
        title: 'Event 1',
      },
    ],
  },
} as Meta<ByDayComponent>;

export const Basic: StoryObj<ByDayComponent> = {};

export const MultipleEvents: StoryObj<ByDayComponent> = {
  args: {
    viewDate: new Date(),
    events: [
      {
        id: 0,
        start: new Date(),
        title: 'Event 1',
      },
      {
        id: 1,
        start: new Date(),
        title: 'Event 2',
      },
      {
        id: 2,
        start: new Date(),
        title: 'Event 3',
      },
    ],
  },
};
