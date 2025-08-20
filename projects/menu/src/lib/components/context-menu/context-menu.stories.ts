import { Meta, StoryObj } from '@storybook/angular';
import { __contextMenu } from '../menu/__mock__/menu';
import { ContextMenuComponent } from '../public-api';

type StoryType = ContextMenuComponent;

export default {
  title: 'MENU/Context menu',
  component: ContextMenuComponent,
  tags: ['autodocs'],
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
