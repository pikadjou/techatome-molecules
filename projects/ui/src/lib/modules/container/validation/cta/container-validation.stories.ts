import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

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
      <ta-container-validation (validated)="validated()">
        Validation modal
      </ta-container-validation>
      `,
    };
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
