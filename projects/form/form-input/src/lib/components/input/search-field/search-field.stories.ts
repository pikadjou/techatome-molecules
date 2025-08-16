import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { InputTextBox } from '@ta/form-model';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { SearchFieldComponent } from './search-field.component';

type StoryType = SearchFieldComponent;

export default {
  title: 'MENU/Search Field',
  component: SearchFieldComponent,
  tags: ['autodocs'],
  render: args => {
    const { ...props } = args;
    return {
      props,
      template: `
        <ta-search-field [input]="input" [isOpen]="isOpen" [space]="space" [searchHistory]="searchHistory" (valueCompleted)="valueCompleted($event)">
        </ta-search-field>
      `,
    };
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatInputModule,
        MatFormFieldModule,
        CamDirectivePipeModule,
        TranslatePipe,
        CommonModule,
        CamUiModule,
        CamIconsModule,
        RouterTestingModule,
        CamDirectivePipeModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
    }),
  ],
  args: {
    input: new InputTextBox({
      validators: [Validators.minLength(3)],
    }),
    isOpen: false,
  },
} as Meta<StoryType>;

export const Basic: StoryObj<StoryType> = {};
