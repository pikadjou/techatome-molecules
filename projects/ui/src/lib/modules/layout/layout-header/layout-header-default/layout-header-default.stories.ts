import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';

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
        <ta-layout-header-default [showBack]="showBack" [title]="title" (backEvent)="backEvent()" [menuTemplate]="menuTemplate"></ta-layout-header-default>

        <ng-template #menuTemplate>
          <button mat-menu-item>
            <ta-material-icon>dialpad</ta-material-icon>
            <span>Redial</span>
          </button>
          <button mat-menu-item disabled>
            <ta-material-icon>voicemail</ta-material-icon>
            <span>Check voice mail</span>
          </button>
          <button mat-menu-item>
            <ta-material-icon>notifications_off</ta-material-icon>
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
