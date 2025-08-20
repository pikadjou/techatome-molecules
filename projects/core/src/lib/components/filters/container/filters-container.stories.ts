import { Meta, StoryObj } from '@storybook/angular';
import { __basicForm } from 'projects/form/__mock__/form';
import { FiltersContainerComponent } from './filters-container.component';

type StoryType = FiltersContainerComponent;

export default {
  title: 'CORE/Filters',
  component: FiltersContainerComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-filters-container [form]="form" [activeFilter]="activeFilter" (filtersSelected)="filtersSelected($event)" (removedFilter)="removedFilter($event)">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>
        </ta-filters-container>
      `,
    };
  },
  args: {
    form: __basicForm,
    activeFilter: [
      { id: '3', name: 'mon filtre' },
      { id: '2', name: 'Ton filtre' },
    ],
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
