import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

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
        <cam-context-menu [menu]="menu"></cam-context-menu>
      `,
    };
  },
  args: {
    menu: __contextMenu,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
