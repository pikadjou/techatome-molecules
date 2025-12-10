import { Injectable } from "@angular/core";

import { map } from "rxjs/operators";

import { of } from "rxjs";

import {
  InputBase,
  InputDropdown,
  InputPanel,
  InputTextarea,
} from "@ta/form-model";
import { TranslatedEnumeration } from "@ta/services";

import { UploadDocumentData } from "./upload-document-data";

@Injectable({
  providedIn: "root",
})
export class UploadDocumentFormService {
  constructor() {}

  public getGroupForm(data: UploadDocumentData): InputBase<any>[] {
    return [
      new InputPanel({
        key: "panel",
        label: "documents.upload.dialog.title",
        containerClass: ["highlight-title", "no-title-space", "p-20"],
        children: [
          new InputDropdown({
            key: "documentType",
            label: "documents.upload.dialog.document-type",
            options$: data.documentTypes$.pipe(
              map((fileTypes: TranslatedEnumeration[]) => {
                return fileTypes.map((fileType) => {
                  return {
                    id: fileType.id.toString(),
                    name: fileType.translatedValue,
                  };
                });
              })
            ),
            multiple: false,
            visible$: of(true),
          }),
          new InputTextarea({
            key: "description",
            label: "documents.upload.dialog.description",
            value: data.description,
          }),
        ],
      }),
    ];
  }
}
