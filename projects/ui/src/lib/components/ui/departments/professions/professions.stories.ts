import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CamDirectivePipeModule } from '@ta/utils';

import { DepartmentProfessionsComponent } from './professions.component';

export default {
  title: 'UI/Department/Professions',
  component: DepartmentProfessionsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CamDirectivePipeModule],
    }),
  ],
  render: args => ({ props: args }),
  args: {
    professions: ['Eleveur de moules', 'Conducteur de pouce-pouce'],
  },
} as Meta<DepartmentProfessionsComponent>;

export const Basic: StoryObj<DepartmentProfessionsComponent> = {};

export const WithSize: StoryObj<DepartmentProfessionsComponent> = {
  args: {
    fontSize: 'md',
  },
};
