import { Meta, StoryObj } from '@storybook/angular';
import { ExpandableTextComponent } from './expandable-text.component';

type StoryType = ExpandableTextComponent & { text: string };

export default {
  title: 'UI/Expandable text',
  component: ExpandableTextComponent,
  tags: ['autodocs'],
  render: args => {
    const { text, ...props } = args;
    return {
      props,
      template: `
        <ta-expandable-text>
         {{ text}}
        </ta-expandable-text>
      `,
    };
  },
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ullamcorper nibh, at tristique lacus semper vitae. Maecenas lectus orci, rhoncus eget consectetur at, dictum et arcu. Nam sit amet sollicitudin nisi. Integer vitae hendrerit nisi. Quisque lobortis bibendum odio ac rhoncus. Nulla id nunc sit amet urna rutrum auctor sed et mauris. Vivamus mollis luctus libero, id ornare elit ornare ac. Morbi ut ultrices arcu. Sed rhoncus risus vitae risus aliquam, a iaculis lectus imperdiet. Cras blandit fringilla fringilla. Donec tortor enim, facilisis sed pulvinar sed, ultricies viverra nisi. Duis ultricies non turpis at dapibus. Fusce id rutrum quam. Quisque venenatis ultrices lectus, ac suscipit lacus egestas eget. Sed vel consequat eros, eu placerat ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ullamcorper nibh, at tristique lacus semper vitae. Maecenas lectus orci, rhoncus eget consectetur at, dictum et arcu. Nam sit amet sollicitudin nisi. Integer vitae hendrerit nisi. Quisque lobortis bibendum odio ac rhoncus. Nulla id nunc sit amet urna rutrum auctor sed et mauris. Vivamus mollis luctus libero, id ornare elit ornare ac. Morbi ut ultrices arcu. Sed rhoncus risus vitae risus aliquam, a iaculis lectus imperdiet. Cras blandit fringilla fringilla. Donec tortor enim, facilisis sed pulvinar sed, ultricies viverra nisi. Duis ultricies non turpis at dapibus. Fusce id rutrum quam. Quisque venenatis ultrices lectus, ac suscipit lacus egestas eget. Sed vel consequat eros, eu placerat ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie ullamcorper nibh, at tristique lacus semper vitae. Maecenas lectus orci, rhoncus eget consectetur at, dictum et arcu. Nam sit amet sollicitudin nisi. Integer vitae hendrerit nisi. Quisque lobortis bibendum odio ac rhoncus. Nulla id nunc sit amet urna rutrum auctor sed et mauris. Vivamus mollis luctus libero, id ornare elit ornare ac. Morbi ut ultrices arcu. Sed rhoncus risus vitae risus aliquam, a iaculis lectus imperdiet. Cras blandit fringilla fringilla. Donec tortor enim, facilisis sed pulvinar sed, ultricies viverra nisi. Duis ultricies non turpis at dapibus. Fusce id rutrum quam. Quisque venenatis ultrices lectus, ac suscipit lacus egestas eget. Sed vel consequat eros, eu placerat ligula.',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
export const SmallText: StoryObj<StoryType> = {
  args: {
    text: 'Quisque venenatis ultrices lectus, ac suscipit lacus egestas eget. Sed vel consequat eros, eu placerat ligula.',
  },
};
