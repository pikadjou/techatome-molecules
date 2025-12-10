import { Component, OnInit, inject } from "@angular/core";

import { combineLatest } from "rxjs";

import { InputImages } from "@ta/form-model";
import { DocumentDto, TaDocumentsService } from "@ta/services";
import { ButtonComponent } from "@ta/ui";
import { isNonNullable, pickImages } from "@ta/utils";

import { TaAbstractInputComponent } from "../../abstract.component";
import { FormLabelComponent } from "../../label/label.component";

@Component({
  selector: "ta-input-images",
  templateUrl: "./input-images.component.html",
  styleUrls: ["./input-images.component.scss"],
  standalone: true,
  imports: [FormLabelComponent, ButtonComponent],
})
export class InputImagesComponent
  extends TaAbstractInputComponent<InputImages>
  implements OnInit
{
  private _documentsService = inject(TaDocumentsService);

  constructor() {
    super();
  }

  public async openDialog() {
    const images = await pickImages();

    if (images.length > 0) {
      combineLatest(
        images
          .map((image) => image.file)
          .filter(isNonNullable)
          .map((file) => this._documentsService.addDocument$({ file: file }))
      ).subscribe({
        next: (documents) => {
          this.input.value = [...(this.input.value || []), ...documents];
        },
      });
    }
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
