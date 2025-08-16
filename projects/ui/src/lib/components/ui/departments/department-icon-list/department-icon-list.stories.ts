import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamDirectivePipeModule } from '@ta/utils';

import { DepartmentIconListComponent } from './department-icon-list.component';

export default {
  title: 'UI/Department/icons',
  component: DepartmentIconListComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamDirectivePipeModule],
    }),
  ],
  render: args => ({ props: args }),
  args: {
    departments: [
      {
        id: 0,
        name: 'BUREAU',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Renoenergy_icones_bic.png',
      },
      {
        id: 0,
        name: 'HVAC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Chauffage%20et%20cliu%CC%80.png',
      },
      {
        id: 0,
        name: 'PVELEC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/PVO.png',
      },
    ],
  },
} as Meta<DepartmentIconListComponent>;

export const Basic: StoryObj<DepartmentIconListComponent> = {};
export const WithName: StoryObj<DepartmentIconListComponent> = {
  args: {
    departments: [
      {
        id: 0,
        name: 'BUREAU',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Renoenergy_icones_bic.png',
      },
      {
        id: 0,
        name: 'HVAC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Chauffage%20et%20cliu%CC%80.png',
      },
      {
        id: 0,
        name: 'PVELEC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/PVO.png',
      },
      {
        id: 0,
        name: 'BUREAU',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Renoenergy_icones_bic.png',
      },
      {
        id: 0,
        name: 'HVAC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Chauffage%20et%20cliu%CC%80.png',
      },
      {
        id: 0,
        name: 'PVELEC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/PVO.png',
      },
      {
        id: 0,
        name: 'BUREAU',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Renoenergy_icones_bic.png',
      },
      {
        id: 0,
        name: 'HVAC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/Chauffage%20et%20cliu%CC%80.png',
      },
      {
        id: 0,
        name: 'PVELEC',
        iconPath: 'https://rgroupstorage.blob.core.windows.net/prod/PVO.png',
      },
    ],
    withName: true,
  },
};
