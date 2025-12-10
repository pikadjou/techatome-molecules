import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { map } from "rxjs";

import { FontIconComponent } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, DualButtonComponent, TitleComponent } from "@ta/ui";
import { FileData, TaBaseModal, TemporaryFile, pickImages } from "@ta/utils";

import { LogoDialogData } from "../input-logo.component";

@Component({
  selector: "",
  styleUrls: ["./input-logo-modal.component.scss"],
  templateUrl: "./input-logo-modal.component.html",
  standalone: true,
  imports: [
    ButtonComponent,
    FontIconComponent,
    TitleComponent,
    DualButtonComponent,
    TranslatePipe,
  ],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class InputLogoModal extends TaBaseModal implements OnInit {
  public selection: string | null = null;

  public tempFiles = new TemporaryFile();

  constructor(
    public dialogRef: MatDialogRef<InputLogoModal>,
    @Inject(MAT_DIALOG_DATA) public data: LogoDialogData
  ) {
    super();

    this.dialogRef.addPanelClass(["full-screen-modal", "forced"]);
    this.selection = this.data.selection;
  }

  ngOnInit() {
    if (this.data.input.availableFile$) {
      this._registerSubscription(
        this.data.input.availableFile$.subscribe(() =>
          this.tempFiles.removeAll()
        )
      );
    }
  }

  public getPics$() {
    return this.data.input.availableFile$?.pipe(
      map((file) => ({
        ...file,
        isSelected: this.selection === file.url,
      }))
    );
  }

  public onFileSelected(file: FileData) {
    // For logo, only one selection is allowed
    this.selection = this.selection === file.url ? null : file.url;
  }

  public uploadPics = async () => {
    const pics = await pickImages();
    if (pics.length > 0) {
      if (this.data.input.update) {
        this.tempFiles.addFiles(pics);
        // For logo, pass only the first image (not an array)
        this.data.input.update(pics[0]);
      }
      // For logo, automatically select the first uploaded image
      this.selection = pics[0].localUrl!;
    }
  };

  public selected = () => {
    this.dialogRef.close(this.selection);
  };

  public cancel = () => {
    this.dialogRef.close(undefined);
  };

  public clearSelection = () => {
    this.selection = null;
  };
}
