import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { TranslatePipe } from '@camelot/translation';
import { ButtonComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { NotificationBadgeContainerComponent } from './notification-badge-container.component';
import { NotificationBadgeComponent } from './notification-badge/notification-badge.component';

type StoryType = NotificationBadgeContainerComponent;

export default {
  title: 'UI/Notification badge',
  component: NotificationBadgeContainerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [NotificationBadgeComponent, ButtonComponent],
      imports: [CamDirectivePipeModule, TranslatePipe],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-notification-badge-container>
            <cam-button>Test du badge de notification</cam-button>
            <cam-notification-badge [number]="number" [fontSize]="fontSize" [style]="style"></cam-notification-badge>
        </cam-notification-badge-container>
      `,
    };
  },
  argTypes: {
    style: {
      options: ['primary', 'secondary', 'info', 'danger'],
      control: { type: 'select' },
    },
  },
  args: {
    number: 4551,
    fontSize: 'xs',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
