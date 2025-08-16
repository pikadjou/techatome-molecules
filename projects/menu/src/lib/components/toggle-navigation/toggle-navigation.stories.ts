import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { Menu } from '../../models/menu/menu';
import {
  __classicIconMenu,
  __classicMenu,
  __fontIconMenu,
  __labelMenu,
  __onClickMenu,
  __textTooLongMenu,
} from '../menu/__mock__/menu';
import { ToggleNavigationComponent } from './toggle-navigation.component';

type StoryType = ToggleNavigationComponent & { menu?: Menu };

export default {
  title: 'MENU/Toggle navigation',
  component: ToggleNavigationComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-toggle-navigation [menu]="menu" [container]="container">
        </ta-toggle-navigation>
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
    container: 'switch',
  },
} as Meta<StoryType>;

export const Switch: StoryObj<ToggleNavigationComponent> = {};

export const Tab: StoryObj<ToggleNavigationComponent> = {
  args: { container: 'tab' },
};

export const WithLabels: StoryObj<ToggleNavigationComponent> = {
  args: { menu: __labelMenu },
};

export const WithFontIcons: StoryObj<ToggleNavigationComponent> = {
  args: { menu: __fontIconMenu },
};

export const WithClassicIcons: StoryObj<ToggleNavigationComponent> = {
  args: { menu: __classicIconMenu },
};

export const OnClickHandle: StoryObj<ToggleNavigationComponent> = {
  args: { menu: __onClickMenu },
};

export const TextTooLong: StoryObj<ToggleNavigationComponent> = {
  args: { menu: __textTooLongMenu },
};
