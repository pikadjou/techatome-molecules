import { Meta, StoryObj } from '@storybook/angular';
import { Civility } from '@ta/utils';
import { CivilityComponent } from './civility.component';

export default {
  title: 'UI/Civility',
  component: CivilityComponent,
  tags: ['autodocs'],
  render: args => ({ props: args }),
  argTypes: {
    civility: {
      options: Object.values(Civility).filter(x => typeof x === 'string'),
      mapping: Civility,
      control: { type: 'select' },
    },
  },
  args: {
    civility: Civility.Sir,
  },
} as Meta<CivilityComponent>;
export const Basic: StoryObj<CivilityComponent> = {};
export const Dear: StoryObj<CivilityComponent> = {
  args: {
    civility: Civility.Dear,
  },
};
