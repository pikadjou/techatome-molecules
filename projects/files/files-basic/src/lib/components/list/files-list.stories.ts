import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamIconsModule } from '@ta/icons';
import { CamCardModule, CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { __file } from '../../../../../__mock__/files';
import { FileCardComponent } from './card/file/file-card.component';
import { FileListComponent } from './files-list.component';

type StoryType = FileListComponent;

export default {
  title: 'LIST/File list',
  component: FileListComponent,
  decorators: [
    moduleMetadata({
      declarations: [FileCardComponent],
      imports: [
        CommonModule,
        RouterTestingModule,
        CamDirectivePipeModule,
        CamContainerModule,
        CamIconsModule,
        CamCardModule,
        CamUiModule,
      ],
    }),
  ],
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-files-list [files]="files">
        </ta-files-list>
      `,
    };
  },
  args: {
    files: [__file, __file, __file],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
