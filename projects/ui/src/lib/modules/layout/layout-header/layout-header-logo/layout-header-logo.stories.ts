import { Meta, StoryObj } from '@storybook/angular';
import { LayoutHeaderLogoComponent } from './layout-header-logo.component';

type StoryType = LayoutHeaderLogoComponent;

export default {
  title: 'LAYOUT/header/login',
  component: LayoutHeaderLogoComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <ta-layout-header-logo [profile]="{ template: template, pic: 'https://placehold.co/600x400'}" [notificationTemplate]="template"></ta-layout-header-logo>

      <ng-template #template>
        <button>
          <span>Redial</span>
        </button>
        <button disabled>
          <span>Check voice mail</span>
        </button>
        <button>
          <span>Disable alerts</span>
        </button>
      </ng-template>
      `,
    };
  },
  args: {
    showBack: true,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
