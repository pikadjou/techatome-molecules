import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  InputImageComponent,
  InputImagesComponent,
  InputLogoComponent,
  InputSchemaComponent,
  UploadComponent,
  WysiswygComponent,
} from "@ta/form-input";
import { InputImages, InputLogo, InputSchema, InputUpload, InputWysiswyg } from "@ta/form-model";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « form-inputs-media » @ta/form-input — inputs média/fichier.
 * Route isolée pour cantonner les dépendances lourdes (editorjs, upload).
 * Route: /e2e-harness/form-inputs-media
 */
@Component({
  standalone: true,
  selector: "app-case-form-inputs-media",
  imports: [
    InputImageComponent,
    InputImagesComponent,
    InputLogoComponent,
    InputSchemaComponent,
    UploadComponent,
    WysiswygComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-input-upload taTestId="ta-input-upload" [input]="upload" [standalone]="true"></ta-input-upload>
    <ta-input-image taTestId="ta-input-image" [input]="images" [standalone]="true"></ta-input-image>
    <ta-input-images taTestId="ta-input-images" [input]="images" [standalone]="true"></ta-input-images>
    <ta-input-logo taTestId="ta-input-logo" [input]="logo" [standalone]="true"></ta-input-logo>
    <ta-input-schema taTestId="ta-input-schema" [input]="schema" [standalone]="true"></ta-input-schema>
    <ta-input-wysiswyg taTestId="ta-input-wysiswyg" [input]="wysiswyg" [standalone]="true"></ta-input-wysiswyg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputsMediaCase {
  readonly upload = new InputUpload({ key: "upload", label: "Upload" });
  readonly images = new InputImages({ key: "images", label: "Images" });
  readonly logo = new InputLogo({ key: "logo", label: "Logo" });
  readonly schema = new InputSchema({ key: "schema", label: "Schéma" });
  readonly wysiswyg = new InputWysiswyg({ key: "wysiswyg", label: "Wysiwyg" });
}
