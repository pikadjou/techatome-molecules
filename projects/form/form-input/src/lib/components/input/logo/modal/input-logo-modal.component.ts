import { Component, EventEmitter, OnInit, Output, input } from "@angular/core";

import { map } from "rxjs";
import { Observable } from "rxjs";

import { FontIconComponent } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, DualButtonComponent, TaModalComponent, TitleComponent } from "@ta/ui";
import { FileData, FileStructure, TaBaseComponent, TemporaryFile, pickImages } from "@ta/utils";

export interface LogoDialogData {
  selection: string | null;
  input: {
    availableFile$?: Observable<FileData>;
    update?: (file: FileStructure) => void;
  };
}

@Component({
  selector: "ta-input-logo-modal",
  styleUrls: ["./input-logo-modal.component.scss"],
  templateUrl: "./input-logo-modal.component.html",
  standalone: true,
  imports: [
    ButtonComponent,
    DualButtonComponent,
    FontIconComponent,
    TaModalComponent,
    TitleComponent,
    TranslatePipe,
  ],
})
export class InputLogoModal extends TaBaseComponent implements OnInit {
  open = input.required<boolean>();
  initialSelection = input<string | null>(null);
  availableFile$ = input<Observable<FileData> | undefined>(undefined);
  updateFn = input<((file: FileStructure) => void) | undefined>(undefined);

  @Output() saved = new EventEmitter<string | null>();
  @Output() closeEvent = new EventEmitter<void>();

  public selection: string | null = null;
  public tempFiles = new TemporaryFile();

  constructor() {
    super();
    this.selection = this.initialSelection();
  }

  ngOnInit() {
    this.selection = this.initialSelection();
    if (this.availableFile$()) {
      this._registerSubscription(
        this.availableFile$()!.subscribe(() => this.tempFiles.removeAll())
      );
    }
  }

  public getPics$() {
    return this.availableFile$()?.pipe(
      map((file) => ({ ...file, isSelected: this.selection === file.url }))
    );
  }

  public onFileSelected(file: FileData) {
    this.selection = this.selection === file.url ? null : file.url;
  }

  public uploadPics = async () => {
    const pics = await pickImages();
    if (pics.length > 0) {
      const fn = this.updateFn();
      if (fn) {
        this.tempFiles.addFiles(pics);
        fn(pics[0]);
      }
      this.selection = pics[0].localUrl!;
    }
  };

  public selected = () => {
    this.saved.emit(this.selection);
    this.closeEvent.emit();
  };

  public cancel = () => {
    this.closeEvent.emit();
  };

  public clearSelection = () => {
    this.selection = null;
  };
}
