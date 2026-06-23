import { Component, OnInit, inject } from "@angular/core";

import { CameraSource } from "@capacitor/camera";

import { combineLatest } from "rxjs";

import { InputImages } from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import { DocumentDto, TaDocumentsService } from "@ta/services";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, LoaderComponent, TaOverlayPanelComponent } from "@ta/ui";
import { isNonNullable, pickImages, takePhoto } from "@ta/utils";

import { TaTranslationInput } from "../../../translation.service";
import { TaAbstractInputComponent } from "../../abstract.component";
import { FormLabelComponent } from "../../label/label.component";

@Component({
  selector: "ta-input-images",
  templateUrl: "./input-images.component.html",
  styleUrls: ["./input-images.component.scss"],
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
export class InputImagesComponent
  extends TaAbstractInputComponent<InputImages>
  implements OnInit
{
  private _documentsService = inject(TaDocumentsService);

  constructor() {
    super();
    TaTranslationInput.getInstance();
  }

  public async openGallery() {
    const images = await pickImages();
    const files = images.map((image) => image.file).filter(isNonNullable);
    if (files.length === 0) {
      return;
    }

    this.requestState.asked();
    this._registerSubscription(
      combineLatest(
        files.map((file) => this._documentsService.addDocument$({ file: file }))
      ).subscribe({
        next: (documents) => {
          this.input.value = [...(this.input.value || []), ...documents];
          this.requestState.completed();
        },
        error: () => {
          this.requestState.completed();
        },
      })
    );
  }

  public async takePhoto() {
    const photo = await takePhoto(CameraSource.Camera);
    const file = photo?.file ?? null;
    if (!file) {
      return;
    }

    this.requestState.asked();
    this._registerSubscription(
      this._documentsService.addDocument$({ file: file }).subscribe({
        next: (document) => {
          this.input.value = [...(this.input.value || []), document];
          this.requestState.completed();
        },
        error: () => {
          this.requestState.completed();
        },
      })
    );
  }

  public onFileDeleted(fileData: DocumentDto) {
    if (!this.input.value) {
      return;
    }
    this.input.value = this.input.value.filter(
      (doc) => doc.url !== fileData.url
    );
  }
}
