import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { __contextMenu } from '../menu/__mock__/menu';
import { ContextMenuComponent } from '../public-api';

type StoryType = ContextMenuComponent;

export default {
  title: 'MENU/Context menu',
  component: ContextMenuComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CamUiModule, TranslatePipe, CamIconsModule, RouterTestingModule, CamDirectivePipeModule],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-context-menu [menu]="menu"></ta-context-menu>
      `,
    };
  },
  args: {
    menu: __contextMenu,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
