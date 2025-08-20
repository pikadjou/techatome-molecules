import { Meta, StoryObj } from '@storybook/angular';
import { __file } from '../../../../../__mock__/files';
import { FileListComponent } from './files-list.component';

type StoryType = FileListComponent;

export default {
  title: 'LIST/File list',
  component: FileListComponent,
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
