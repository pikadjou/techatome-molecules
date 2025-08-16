import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { TranslatePipe } from '@camelot/translation';
import { CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { ValidationModal } from '../modal/modal-validation.component';
import { ContainerValidationComponent } from './container-validation.component';

type StoryType = ContainerValidationComponent;

export default {
  title: 'CONTAINER/validaiton',
  component: ContainerValidationComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ValidationModal],
      imports: [CamUiModule, MatDialogModule, RouterTestingModule, CamDirectivePipeModule, TranslatePipe],
    }),
  ],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
      <cam-container-validation (validated)="validated()">
        Validation modal
      </cam-container-validation>
      `,
    };
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
