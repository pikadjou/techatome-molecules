import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaBaseModal } from '@ta/utils';

import { ButtonComponent } from '../../../../components/ui/button/button.component';
import { TextComponent } from '../../../../components/ui/text/text.component';
import { TaTranslationUI } from '../../../../translation.service';
import { TaModalComponent } from '../../../layout/modal/modal.component';
import { ModalParameter } from '../common-modal';

/** Confirmation Oui/Non : `confirm(true)` sur Oui, `dismiss()` sur Non ou fermeture. */
@Component({
  selector: 'ta-validation-modal',
  templateUrl: './modal-validation.component.html',
  styleUrls: ['./modal-validation.component.scss'],
  standalone: true,
  imports: [TranslateModule, ButtonComponent, TextComponent, TaModalComponent],
})
export class ValidationModal extends TaBaseModal<ModalParameter | undefined, boolean> {
  public get title(): string {
    return this.modalState()?.input()?.title ?? 'validation.modal.title';
  }

  public get subtitle(): string {
    return this.modalState()?.input()?.subtitle ?? 'validation.modal.content';
  }

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public onNoClick(): void {
    this.dismiss();
  }

  public onYesClick(): void {
    this.confirm(true);
  }
}
