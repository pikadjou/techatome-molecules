import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { __classicMenu } from 'projects/menu/src/lib/components/menu/__mock__/menu';

import { CamIconsModule } from '@camelot/icons';
import { CamMenuModule, Menu } from '@camelot/menu';
import { TranslatePipe } from '@camelot/translation';
import { CamUiModule } from '@camelot/ui';

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
        <cam-layout-with-bottom-nav>
          Dynamic content
          <cam-layout-nav>
              <cam-menu *ngIf="withMenu" [menu]="menu" [container]="'main'"></cam-menu>
          </cam-layout-nav>
        </cam-layout-with-bottom-nav>
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
