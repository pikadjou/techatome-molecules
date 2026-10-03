import { AsyncPipe } from '@angular/common';
import { Component, effect } from '@angular/core';

import { Observable, Subscription, map } from 'rxjs';

import { FileListComponent } from '@ta/files-basic';
import { DualButtonComponent, TaModalComponent } from '@ta/ui';
import { FileData, FileStructure, TaBaseModal, TemporaryFile, pickImages } from '@ta/utils';

export type InputImagesModalInput = {
  initialSelection: string[];
  files$?: Observable<FileData[]>;
  update?: (files: FileStructure[]) => void;
};

/** Sélection d'images dans une galerie ; rend les URL choisies. */
@Component({
  selector: 'ta-input-images-modal',
  styleUrls: ['./input-images-modal.component.scss'],
  templateUrl: './input-images-modal.component.html',
  standalone: true,
  imports: [AsyncPipe, DualButtonComponent, FileListComponent, TaModalComponent],
})
export class InputImageModal extends TaBaseModal<InputImagesModalInput, string[]> {
  public selection: string[] = [];
  public tempFiles = new TemporaryFile();

  private _filesSubscription?: Subscription;

  constructor() {
    super();
    effect(() => {
      if (this.isOpen()) {
        this._init(this.modalState()?.input());
      }
    });
  }

  public getPics$() {
    return this.modalState()
      ?.input()
      ?.files$?.pipe(map(files => files.map(file => ({ ...file, isSelected: this.selection.includes(file.url) }))));
  }

  public onFileSelected(file: FileData) {
    if (this.selection.includes(file.url)) {
      this.selection = this.selection.filter(url => file.url !== url);
    } else {
      this.selection = [...this.selection, file.url];
    }
  }

  public uploadPics = async () => {
    const pics = await pickImages();
    const fn = this.modalState()?.input()?.update;
    if (fn) {
      this.tempFiles.addFiles(pics);
      fn(pics);
    }
  };

  public selected = () => {
    this.confirm(this.selection);
  };

  /** Repart de l'entrée à chaque ouverture. */
  private _init(data: InputImagesModalInput | null | undefined) {
    this.selection = [...(data?.initialSelection ?? [])];
    this._filesSubscription?.unsubscribe();
    if (data?.files$) {
      this._filesSubscription = data.files$.subscribe(() => this.tempFiles.removeAll());
      this._registerSubscription(this._filesSubscription);
    }
  }
}
