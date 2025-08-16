import { Meta, StoryObj } from '@storybook/angular';

import { LinkComponent } from './link.component';

type StoryType = LinkComponent & { text?: string; underline?: boolean };

export default {
  title: 'UI/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  render: (args) => {
    const { text, ...props } = args;
    return {
      props,
      template: `
        <cam-link (action)="action()">
          ${text}
        </cam-link>
      `,
    };
  },
  args: {
    underline: true,
    text: 'Link',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<LinkComponent> = {};
