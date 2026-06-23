import { Component, OnInit, inject } from '@angular/core';

import { CameraSource } from '@capacitor/camera';

import { InputLogo } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TaDocumentsService } from '@ta/services';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, LoaderComponent, TaOverlayPanelComponent } from '@ta/ui';
import { takePhoto } from '@ta/utils';

import { TaTranslationInput } from '../../../translation.service';
import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
  selector: 'ta-input-logo',
  templateUrl: './input-logo.component.html',
  styleUrls: ['./input-logo.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    FontIconComponent,
    FormLabelComponent,
    LoaderComponent,
    TaOverlayPanelComponent,
    TranslatePipe,
  ],
})
export class InputLogoComponent extends TaAbstractInputComponent<InputLogo> implements OnInit {
  private _documentsService = inject(TaDocumentsService);

  constructor() {
    super();
    TaTranslationInput.getInstance();
  }

  public async openCamera() {
    const photo = await takePhoto(CameraSource.Camera);
    this._uploadLogo(photo?.file ?? null);
  }

  public async openGallery() {
    const photo = await takePhoto(CameraSource.Photos);
    this._uploadLogo(photo?.file ?? null);
  }

  public removeLogo() {
    this.input.value = null;
  }

  private _uploadLogo(logoFile: File | null) {
    if (!logoFile) {
      return;
    }
    this.requestState.asked();
    this._registerSubscription(
      this._documentsService.addDocument$({ file: logoFile, description: 'logo' }).subscribe({
        next: document => {
          this.input.value = document;
          this.requestState.completed();
        },
        error: () => {
          this.requestState.completed();
        },
      })
    );
  }
}
