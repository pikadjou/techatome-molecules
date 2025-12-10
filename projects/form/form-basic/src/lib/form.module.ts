import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  ErrorStateMatcher,
  MatNativeDateModule,
  ShowOnDirtyErrorStateMatcher,
} from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";

import { TaFormInputsModule } from "@ta/form-input";
import { TaIconsModule } from "@ta/icons";
import { TaMenuModule } from "@ta/menu";
import { TaNotificationModule } from "@ta/notification";
import { TranslatePipe } from "@ta/translation";
import { TaContainerModule, TaUiModule } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";

import { EditFieldComponent } from "./components/edit-field/edit-field.component";
import { FormComponent } from "./components/form.component";
import { DynamicComponent } from "./components/input/dynamic/dynamic.component";
import { PanelComponent } from "./components/input/panel/panel.component";
import { InputTranslationComponent } from "./components/input/translation/translation.component";
import { InputsComponent } from "./components/inputs/inputs.component";
import { TaTranslationForm } from "./translation.service";

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFormModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FormComponent, MatNativeDateModule, EditFieldComponent } from '@ta/library-name';
 */
@NgModule({
  imports: [
    TaContainerModule,
    TaDirectivePipeModule,
    TaNotificationModule,
    TaFormInputsModule,
    TaUiModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaIconsModule,
    TaMenuModule,
    MatMenuModule,
    TranslatePipe,
    FormComponent,
    InputsComponent,
    PanelComponent,
    DynamicComponent,
    EditFieldComponent,
    InputTranslationComponent,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  declarations: [],
  exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
})
export class TaFormModule {
  constructor() {
    TaTranslationForm.getInstance();
  }
}
