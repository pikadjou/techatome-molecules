import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CamIconType, LocalIconComponent, MaterialIconComponent } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { TypedMessageComponent } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

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
