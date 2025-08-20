import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LayoutContentComponent, LayoutPanelComponent, LayoutWithPanelComponent } from '../public-api';

type StoryType = LayoutWithPanelComponent & { isOpen: boolean };

export default {
  title: 'LAYOUT/Page with panel',
  component: LayoutWithPanelComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [LayoutContentComponent, LayoutPanelComponent],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <ta-layout-with-panel [open]="isOpen">
        <ta-layout-panel>
          ta-layout-panel content
        </ta-layout-panel>
        <ta-layout-content>
          general content
        </ta-layout-content>
      </ta-layout-with-panel>
        
      `,
    };
  },
  args: {
    isOpen: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
