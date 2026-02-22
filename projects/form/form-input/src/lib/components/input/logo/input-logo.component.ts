import { Component, OnInit, inject } from '@angular/core';

import { InputLogo } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TaDocumentsService } from '@ta/services';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { pickImages } from '@ta/utils';

import { TaTranslationInput } from '../../../translation.service';
import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
  selector: 'ta-input-logo',
  templateUrl: './input-logo.component.html',
  styleUrls: ['./input-logo.component.scss'],
  standalone: true,
  imports: [FontIconComponent, FormLabelComponent, ButtonComponent, TranslatePipe],
})
export class InputLogoComponent extends TaAbstractInputComponent<InputLogo> implements OnInit {
  private _documentsService = inject(TaDocumentsService);

  constructor() {
    super();
    TaTranslationInput.getInstance();
  }

  public async openDialog() {
    const images = await pickImages();

    const logoFile = images.length > 0 ? images[0].file : null;
    if (logoFile) {
      this._documentsService.addDocument$({ file: logoFile, description: 'logo' }).subscribe({
        next: document => {
          this.input.value = document.url;
        },
      });
    }
  }

  public removeLogo() {
    this.input.value = '';
  }
}
