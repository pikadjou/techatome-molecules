import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, OnInit, Output, input } from "@angular/core";

import { map } from "rxjs";
import { Observable } from "rxjs";

import { FileListComponent } from "@ta/files-basic";
import { DualButtonComponent, TaModalComponent } from "@ta/ui";
import { FileData, FileStructure, TaBaseComponent, TemporaryFile, pickImages } from "@ta/utils";

export interface DialogData {
  selection: string[];
  input: {
    files$?: Observable<FileData[]>;
    update?: (files: FileStructure[]) => void;
  };
}

@Component({
  selector: "ta-input-images-modal",
  styleUrls: ["./input-images-modal.component.scss"],
  templateUrl: "./input-images-modal.component.html",
  standalone: true,
  imports: [AsyncPipe, DualButtonComponent, FileListComponent, TaModalComponent],
})
export class InputImageModal extends TaBaseComponent implements OnInit {
  open = input.required<boolean>();
  initialSelection = input<string[]>([]);
  files$ = input<Observable<FileData[]> | undefined>(undefined);
  updateFn = input<((files: FileStructure[]) => void) | undefined>(undefined);

  @Output() saved = new EventEmitter<string[]>();
  @Output() closeEvent = new EventEmitter<void>();

  public selection: string[] = [];
  public tempFiles = new TemporaryFile();

  constructor() {
    super();
  }

  ngOnInit() {
    this.selection = [...this.initialSelection()];
    if (this.files$()) {
      this._registerSubscription(
        this.files$()!.subscribe(() => this.tempFiles.removeAll())
      );
    }
  }

  public getPics$() {
    return this.files$()?.pipe(
      map((files) =>
        files.map((file) => ({
          ...file,
          isSelected: this.selection.includes(file.url),
        }))
      )
    );
  }

  public onFileSelected(file: FileData) {
    if (this.selection.includes(file.url)) {
      this.selection = this.selection.filter((url) => file.url !== url);
    } else {
      this.selection = [...this.selection, file.url];
    }
  }

  public uploadPics = async () => {
    const pics = await pickImages();
    const fn = this.updateFn();
    if (fn) {
      this.tempFiles.addFiles(pics);
      fn(pics);
    }
  };

  public selected = () => {
    this.saved.emit(this.selection);
    this.closeEvent.emit();
  };
}
