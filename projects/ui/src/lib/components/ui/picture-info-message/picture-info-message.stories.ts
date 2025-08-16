import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconType, LocalIconComponent, MaterialIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TypedMessageComponent } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { PictureInfoMessageComponent } from './picture-info-message.component';

type StoryType = PictureInfoMessageComponent;

export default {
  title: 'UI/Picture info message',
  component: PictureInfoMessageComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [LocalIconComponent, TypedMessageComponent, MaterialIconComponent],
      imports: [TranslatePipe, CamDirectivePipeModule],
    }),
  ],
  render: args => ({ props: args }),
  args: {
    text: "It's meee, Marioooo",
    icon: CamIconType.Checked,
    iconSize: 'md',
    type: 'warning',
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
