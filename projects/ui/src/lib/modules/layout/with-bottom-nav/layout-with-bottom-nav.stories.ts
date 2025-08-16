import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule, Menu } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { __classicMenu } from 'projects/menu/src/lib/components/menu/__mock__/menu';

import {
  LayoutHeaderComponent,
  LayoutHeaderDefaultComponent,
  LayoutNavComponent,
  LayoutTitleComponent,
} from '../public-api';
import { LayoutWithBottomNavComponent } from './layout-with-bottom-nav.component';

type StoryType = LayoutWithBottomNavComponent & {
  menu: Menu;
  withMenu: boolean;
};

export default {
  title: 'LAYOUT/Page with bottom nav',
  component: LayoutWithBottomNavComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [LayoutHeaderComponent, LayoutHeaderDefaultComponent, LayoutTitleComponent, LayoutNavComponent],
      imports: [
        CommonModule,
        CamUiModule,
        TranslatePipe,
        CamIconsModule,
        CamMenuModule,
        RouterTestingModule,
        MatMenuModule,
        MatBottomSheetModule,
      ],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-layout-with-bottom-nav>
          Dynamic content
          <ta-layout-nav>
              <ta-menu *ngIf="withMenu" [menu]="menu" [container]="'main'"></ta-menu>
          </ta-layout-nav>
        </ta-layout-with-bottom-nav>
      `,
    };
  },
  args: {
    menu: __classicMenu,
    withMenu: true,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithoutMenu: StoryObj<StoryType> = {
  args: {
    withMenu: false,
  },
};
