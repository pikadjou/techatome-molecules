import { Meta, StoryObj } from '@storybook/angular';

import { DataGridItemComponent } from './item/data-grid-item.component';
import { DataGridComponent, DataGridOrientation } from './data-grid.component';

export default {
  title: 'Modules/Data grid',
  component: DataGridComponent,
  subcomponents: { DataGridItemComponent },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['row', 'stack'] as DataGridOrientation[],
      control: 'inline-radio',
    },
    columns: {
      options: [1, 2, 3, 4],
      control: 'select',
    },
  },
  args: {
    orientation: 'row',
    columns: 2,
  },
} as Meta<DataGridComponent>;

const rows = [
  ['Date de début', '01/10/2024'],
  ['Date de fin', '30/09/2027'],
  ['Loyer mensuel', '1 150 €'],
  ['Charges', '90 €'],
  ['Garantie locative', '2 mois'],
  ['Durée', '3 ans'],
];

export const Rows: StoryObj<DataGridComponent> = {
  render: args => ({
    props: args,
    template: `
      <ta-data-grid [orientation]="orientation" [columns]="columns">
        ${rows.map(([label, value]) => `<ta-data-grid-item label="${label}">${value}</ta-data-grid-item>`).join('')}
      </ta-data-grid>
    `,
    moduleMetadata: { imports: [DataGridComponent, DataGridItemComponent] },
  }),
};

export const Stacked: StoryObj<DataGridComponent> = {
  ...Rows,
  args: { orientation: 'stack', columns: 2 },
};
