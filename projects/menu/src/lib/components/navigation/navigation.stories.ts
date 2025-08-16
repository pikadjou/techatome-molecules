import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamUiModule } from '@camelot/ui';
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
import { NavigationComponent } from './navigation.component';

type StoryType = NavigationComponent & { menu?: Menu };

export default {
  title: 'MENU/Navigation',
  component: NavigationComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-menu-navigation [menu]="menu" [container]="container">
        </cam-menu-navigation>
      `,
    };
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RouterTestingModule, TranslatePipe, CamDirectivePipeModule, CamUiModule, CamIconsModule],
    }),
  ],
  args: {
    menu: __classicMenu,
    container: 'tags',
  },
} as Meta<StoryType>;

export const WithLabels: StoryObj<NavigationComponent> = {
  args: { menu: __labelMenu },
};

export const WithFontIcons: StoryObj<NavigationComponent> = {
  args: { menu: __fontIconMenu },
};

export const WithClassicIcons: StoryObj<NavigationComponent> = {
  args: { menu: __classicIconMenu },
};

export const OnClickHandle: StoryObj<NavigationComponent> = {
  args: { menu: __onClickMenu },
};

export const TextTooLong: StoryObj<NavigationComponent> = {
  args: { menu: __textTooLongMenu },
};
