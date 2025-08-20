import { Meta, StoryObj } from '@storybook/angular';

import { FileImageComponent } from './file-image.component';

export type StoryType = FileImageComponent;

export default {
  title: 'UI/File Image',
  component: FileImageComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    fileName: {
      control: 'text',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    fileName: 'document.pdf',
    size: 'sm',
  },
} as Meta<StoryType>;

export const PdfFile: StoryObj<StoryType> = {};

export const DocxFile: StoryObj<StoryType> = {
  args: {
    fileName: 'document.docx',
  },
};

export const XlsxFile: StoryObj<StoryType> = {
  args: {
    fileName: 'spreadsheet.xlsx',
  },
};

export const GenericFile: StoryObj<StoryType> = {
  args: {
    fileName: 'file.txt',
  },
};

export const LargeSize: StoryObj<StoryType> = {
  args: {
    size: 'lg',
  },
};

export const ExtraLargeSize: StoryObj<StoryType> = {
  args: {
    size: 'xl',
  },
};