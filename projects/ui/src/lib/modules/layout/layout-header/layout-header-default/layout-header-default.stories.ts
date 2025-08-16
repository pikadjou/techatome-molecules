import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { LayoutHeaderDefaultComponent } from './layout-header-default.component';

type StoryType = LayoutHeaderDefaultComponent;

export default {
  title: 'LAYOUT/header/default',
  component: LayoutHeaderDefaultComponent,
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
        <cam-layout-header-default [showBack]="showBack" [title]="title" (backEvent)="backEvent()" [menuTemplate]="menuTemplate"></cam-layout-header-default>

        <ng-template #menuTemplate>
          <button mat-menu-item>
            <cam-material-icon>dialpad</cam-material-icon>
            <span>Redial</span>
          </button>
          <button mat-menu-item disabled>
            <cam-material-icon>voicemail</cam-material-icon>
            <span>Check voice mail</span>
          </button>
          <button mat-menu-item>
            <cam-material-icon>notifications_off</cam-material-icon>
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
export const Title: StoryObj<StoryType> = {
  args: {
    title: 'Checklists',
  },
};
export const OnlyOption: StoryObj<StoryType> = {
  args: {
    showBack: false,
  },
};
