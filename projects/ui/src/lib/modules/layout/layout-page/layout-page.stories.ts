import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule, Menu } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamUiModule } from '@ta/ui';
import { __classicMenu } from 'projects/menu/src/lib/components/menu/__mock__/menu';

import {
  LayoutHeaderComponent,
  LayoutHeaderDefaultComponent,
  LayoutNavComponent,
  LayoutTitleComponent,
  LayoutWithBottomNavComponent,
} from '../public-api';
import { LayoutPageComponent } from './layout-page.component';

type StoryType = LayoutPageComponent & { menu: Menu; withHeader: boolean };

export default {
  title: 'LAYOUT/Page',
  component: LayoutPageComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [
        LayoutHeaderComponent,
        LayoutHeaderDefaultComponent,
        LayoutTitleComponent,
        LayoutNavComponent,
        LayoutWithBottomNavComponent,
      ],
      imports: [
        CommonModule,
        CamUiModule,
        TranslatePipe,
        CamIconsModule,
        CamMenuModule,
        CamCardModule,
        RouterTestingModule,
        MatMenuModule,
      ],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-layout-page>
            <ta-layout-header *ngIf="withHeader">
                <ta-layout-header-default></ta-layout-header-default>
            </ta-layout-header>
            <ta-layout-title>
              <ta-profile-data [profile]="profile"></ta-profile-data>
            </ta-layout-title>
            <ta-card class='ta-c'>
              <ta-card-content>Dynamic content</ta-card-content>
            </ta-card>
            <ta-layout-nav>
                <ta-menu [menu]="menu" [container]="'main'"></ta-menu>
            </ta-layout-nav>
        </ta-layout-page>
      `,
    };
  },
  args: {
    menu: __classicMenu,
    profile: {
      title: {
        main: 'VANDERHEYDEN',
        seconde: 'Jean-François',
        sub: 'client',
      },
      email: 'redpanda@gmail.com',
      phoneNumber: '+472695609',
    },
    withHeader: true,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const WithoutHeader: StoryObj<StoryType> = {
  args: {
    withHeader: false,
  },
};
