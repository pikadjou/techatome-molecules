import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamSwiperModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { Menu } from '../../models/menu/menu';
import {
  __classicIconMenu,
  __classicMenu,
  __fontIconMenu,
  __labelMenu,
  __onClickMenu,
  __textTooLongMenu,
} from '../menu/__mock__/menu';
import { QuickActionsComponent } from './quick-actions.component';

type StoryType = QuickActionsComponent & { menu?: Menu };

export default {
  title: 'MENU/Quick action',
  component: QuickActionsComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-quick-actions [menu]="menu" [tabSelection]="tabSelection">
        </cam-quick-actions>
      `,
    };
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RouterTestingModule,
        TranslatePipe,
        CamDirectivePipeModule,
        CamUiModule,
        CamIconsModule,
        CamSwiperModule,
      ],
    }),
  ],
  args: {
    menu: __labelMenu,
    tabSelection: 'home',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
