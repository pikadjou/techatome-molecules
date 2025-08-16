import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MaterialIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamDirectivePipeModule } from '@ta/utils';

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
