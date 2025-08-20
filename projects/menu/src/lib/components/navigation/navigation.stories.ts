import { Meta, StoryObj } from '@storybook/angular';
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
        <ta-menu-navigation [menu]="menu" [container]="container">
        </ta-menu-navigation>
      `,
    };
  },
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
