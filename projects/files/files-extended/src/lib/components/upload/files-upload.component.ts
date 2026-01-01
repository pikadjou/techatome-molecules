import { Component, EventEmitter, Output, input } from "@angular/core";

import { Camera, CameraResultType } from "@capacitor/camera";
import { FilePicker, PickedFile } from "@capawesome/capacitor-file-picker";

import {
  ActionButtonComponent,
  ActionButtonData,
  ButtonComponent,
} from "@ta/ui";
import { FileStructure, pathToFile, pickImages } from "@ta/utils";

export type Feature = "take-pic" | "upload-pic" | "upload-file";

@Component({
  selector: "ta-files-upload",
  templateUrl: "./files-upload.component.html",
  styleUrls: ["./files-upload.component.scss"],
  standalone: true,
  imports: [ActionButtonComponent, ButtonComponent],
})
export class UploadComponent {
  features = input<Feature[]>([]);

  canSelectMultipleFiles = input<boolean>(false);

  showInActionButton = input<boolean>(true);

  @Output()
  filesPicked = new EventEmitter<FileStructure[]>();

  get addActions(): ActionButtonData[] {
    const actionsAvailable: ActionButtonData[] = [];

    if (this._haveFeature("take-pic")) {
      actionsAvailable.push({
        label: "Take",
        icon: "add_a_photo",
        callback: (_) => this._takePic(),
      });
    }

    if (this._haveFeature("upload-pic")) {
      actionsAvailable.push({
        label: "Upload",
        icon: "insert_photo",
        callback: (_) => this._uploadPic(),
      });
    }

    if (this._haveFeature("upload-file")) {
      actionsAvailable.push({
        label: "upload file",
        icon: "upload_file",
        callback: (_) => this._uploadFile(),
      });
    }

    return actionsAvailable;
  }

  private _haveFeature(feature: Feature) {
    return this.features().includes(feature);
  }

  private async _takePic() {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.Uri,
    });

    const file = {
      file: await pathToFile(image),
      localUrl: image.webPath || null,
    };
    if (!file.file) {
      return;
    }
    this.filesPicked.emit([file]);
  }

  private async _uploadPic() {
    const pics = await pickImages();
    this.filesPicked.emit(pics);
  }

  private async _uploadFile() {
    // todo move into a capacitor filesystem service
    const pickFiles = await FilePicker.pickFiles({
      multiple: this.canSelectMultipleFiles(),
      types: [
        // pdf
        "application/pdf",
        // word
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        // excel
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        // text
        "text/plain",
      ],
    });

    const files = [];
    for (let file of pickFiles.files) {
      if (!file || !file.blob) continue;

      files.push({ file: this._localToFile(file), localUrl: null });
    }

    this.filesPicked.emit(files);
  }

  private _localToFile(file: PickedFile): File {
    return new File([file.blob!], file.name, {
      type: file.mimeType,
    });
  }
}
