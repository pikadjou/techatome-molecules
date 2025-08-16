import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { MaterialIconComponent } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { TypedMessageComponent } from './typed-message.component';

type StoryType = TypedMessageComponent;

export default {
  title: 'UI/Typed message',
  component: TypedMessageComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [MaterialIconComponent],
      imports: [TranslatePipe, CamDirectivePipeModule],
    }),
  ],
  render: args => ({ props: args }),
  args: {
    text: 'Ceci est une alerte rouge',
    type: 'danger',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
