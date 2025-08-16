import { Meta, moduleMetadata } from '@storybook/angular';

import { CamIconsModule } from '@camelot/icons';

import { TextToClipboardComponent } from './text-to-clipboard.component';

type StoryType = TextToClipboardComponent;

export default {
  title: 'CORE/TextToClipboard',
  component: TextToClipboardComponent,
  decorators: [
    moduleMetadata({
      imports: [CamIconsModule],
    }),
  ],
  tags: ['autodocs'],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-text-to-clipboard [value]="value"></cam-text-to-clipboard>
      `,
    };
  },
  args: {
    value: 'ClipBoard value',
  },
} as Meta<StoryType>;
