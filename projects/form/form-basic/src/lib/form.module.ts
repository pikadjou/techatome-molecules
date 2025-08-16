import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';

import { CamFormInputsModule } from '@camelot/form-input';
import { CamIconsModule } from '@camelot/icons';
import { CamMenuModule } from '@camelot/menu';
import { CamNotificationModule } from '@camelot/notification';
import { TranslatePipe } from '@camelot/translation';
import { CamContainerModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { EditFieldComponent } from './components/edit-field/edit-field.component';
import { FormComponent } from './components/form.component';
import { DynamicComponent } from './components/input/dynamic/dynamic.component';
import { PanelComponent } from './components/input/panel/panel.component';
import { InputTranslationComponent } from './components/input/translation/translation.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { CamTranslationForm } from './translation.service';

@NgModule({
  imports: [
    CamContainerModule,
    CamDirectivePipeModule,
    CamNotificationModule,
    CamFormInputsModule,
    CamUiModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CamIconsModule,
    CamMenuModule,
    MatMenuModule,
    TranslatePipe,
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  declarations: [
    FormComponent,
    InputsComponent,
    PanelComponent,
    DynamicComponent,
    EditFieldComponent,
    InputTranslationComponent,
  ],
  exports: [FormComponent, MatNativeDateModule, EditFieldComponent],
})
export class CamFormModule {
  constructor() {
    CamTranslationForm.getInstance();
  }
}
