import { Meta, StoryObj } from '@storybook/angular';
import { DepartmentsComponent } from './departments.component';

export default {
  title: 'UI/Department/basic',
  component: DepartmentsComponent,
  tags: ['autodocs'],
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
    professions: ['Eleveur de moules', 'Conducteur de pouce-pouce'],
  },
} as Meta<DepartmentsComponent>;

export const Basic: StoryObj<DepartmentsComponent> = {};

export const Professions: StoryObj<DepartmentsComponent> = {
  args: {
    departments: [],
  },
};

export const Departments: StoryObj<DepartmentsComponent> = {
  args: {
    professions: [],
  },
};
