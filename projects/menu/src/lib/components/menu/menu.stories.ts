import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { MenuComponent, MenuItemComponent } from '../public-api';
import { __classicMenu, __fontIconMenu, __smallMenu } from './__mock__/menu';

type StoryType = MenuComponent;

export default {
  title: 'MENU/Menu',
  component: MenuComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MenuItemComponent],
      imports: [CommonModule, CamUiModule, TranslatePipe, CamIconsModule, RouterTestingModule, CamDirectivePipeModule],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="230">
        <ta-menu [menu]="menu" [container]="'main'"></ta-menu>
      </div>
      `,
    };
  },
  args: {
    menu: __classicMenu,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const SmallMenu: StoryObj<StoryType> = {
  args: {
    menu: __smallMenu,
  },
};

export const FontMenu: StoryObj<StoryType> = {
  args: {
    menu: __fontIconMenu,
  },
};
