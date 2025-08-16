import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { LayoutHeaderLogoComponent } from './layout-header-logo.component';

type StoryType = LayoutHeaderLogoComponent;

export default {
  title: 'LAYOUT/header/login',
  component: LayoutHeaderLogoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CamIconsModule,
        MatMenuModule,
        TranslatePipe,
        CamDirectivePipeModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <cam-layout-header-logo [profile]="{ template: template, pic: 'https://placehold.co/600x400'}" [notificationTemplate]="template"></cam-layout-header-logo>

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
