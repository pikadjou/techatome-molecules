import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { __basicForm } from 'projects/form/__mock__/form';

import { CamFormModule } from '@camelot/form-basic';
import { CamIconsModule } from '@camelot/icons';
import { CamLayoutModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { FiltersFormComponent } from '../form/filters-form.component';
import { FiltersTagComponent } from '../tag/filters-tag.component';
import { FiltersContainerComponent } from './filters-container.component';

type StoryType = FiltersContainerComponent;

export default {
  title: 'CORE/Filters',
  component: FiltersContainerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [FiltersFormComponent, FiltersTagComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CamUiModule,
        CamDirectivePipeModule,
        CamLayoutModule,
        CamIconsModule,
        CamFormModule,
      ],
    }),
  ],
  render: (args) => {
    const { ...props } = args;
    return {
      props,
      template: `
        <cam-filters-container [form]="form" [activeFilter]="activeFilter" (filtersSelected)="filtersSelected($event)" (removedFilter)="removedFilter($event)">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<p>
        </cam-filters-container>
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
