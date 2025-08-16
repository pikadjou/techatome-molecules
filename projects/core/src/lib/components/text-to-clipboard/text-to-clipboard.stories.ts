import { Meta, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';

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
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-text-to-clipboard [value]="value"></ta-text-to-clipboard>
      `,
    };
  },
  args: {
    value: 'ClipBoard value',
  },
} as Meta<StoryType>;
