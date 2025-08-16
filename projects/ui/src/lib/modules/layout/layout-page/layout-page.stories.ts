import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { __classicMenu } from 'projects/menu/src/lib/components/menu/__mock__/menu';

import { CamIconsModule } from '@camelot/icons';
import { CamMenuModule, Menu } from '@camelot/menu';
import { TranslatePipe } from '@camelot/translation';
import { CamCardModule, CamUiModule } from '@camelot/ui';

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
        <cam-layout-page>
            <cam-layout-header *ngIf="withHeader">
                <cam-layout-header-default></cam-layout-header-default>
            </cam-layout-header>
            <cam-layout-title>
              <cam-profile-data [profile]="profile"></cam-profile-data>
            </cam-layout-title>
            <cam-card class='ta-c'>
              <cam-card-content>Dynamic content</cam-card-content>
            </cam-card>
            <cam-layout-nav>
                <cam-menu [menu]="menu" [container]="'main'"></cam-menu>
            </cam-layout-nav>
        </cam-layout-page>
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
