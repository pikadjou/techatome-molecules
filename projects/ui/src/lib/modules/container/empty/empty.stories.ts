import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconType, CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { EmptyComponent } from './empty.component';

type StoryType = EmptyComponent;

export default {
  title: 'Container/Empty',
  component: EmptyComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        CamUiModule,
        CamIconsModule,
        MatIconTestingModule,
        MatIconModule,
        CamDirectivePipeModule,
        TranslatePipe,
      ],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="350">
        <ta-empty
         [isEmpty]="isEmpty" [isLight]="isLight"
         [text]="text" [type]="type"
         [icon]="icon" [iconSize]="iconSize"
        >
            Je ne suis pas vide !!!
        </ta-empty>
        </div>
      `,
    };
  },
  args: {
    icon: CamIconType.Edit,
    iconSize: 'sm',
    text: 'Je suis tout vide :(',
    type: 'info',
    isEmpty: true,
    isLight: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const Light: StoryObj<StoryType> = {
  args: {
    icon: CamIconType.Edit,
    iconSize: 'sm',
    text: 'Je suis tout vide :(',
    type: 'info',
    isEmpty: true,
    isLight: true,
  },
};
