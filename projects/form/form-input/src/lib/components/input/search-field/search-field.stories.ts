import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { InputTextBox } from "@ta/form-model";
import { SearchFieldComponent } from "./search-field.component";

type StoryType = SearchFieldComponent;

export default {
  title: "MENU/Search Field",
  component: SearchFieldComponent,
  tags: ["autodocs"],
  render: (args) => {
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
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
      ],
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
