import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Subject } from 'rxjs';

import { CamIconsModule } from '@camelot/icons';
import { CamContainerModule } from '@camelot/ui';

import { FileEditComponent } from './files-edit.component';

type StoryType = FileEditComponent;

export default {
  title: 'FILES/Editor',
  component: FileEditComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamIconsModule, RouterTestingModule, CamContainerModule],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
      <div [style.width.px]="500" [style.height.px]="500">
        <cam-files-edit [imagePath]="imagePath"></cam-files-edit>
      </div>
      `,
    };
  },
  args: {
    imagePath: 'https://placehold.co/400x600',
    saveImage$: new Subject(),
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};

export const BigImage: StoryObj<StoryType> = {
  args: {
    imagePath: 'https://placehold.co/3000x4000',
  },
};

export const Horizontal: StoryObj<StoryType> = {
  args: {
    imagePath: 'https://placehold.co/2000x500',
  },
};
