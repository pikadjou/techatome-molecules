import { Component, effect } from '@angular/core';

import { Observable, Subscription, map } from 'rxjs';

import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, DualButtonComponent, TaModalComponent, TitleComponent } from '@ta/ui';
import { FileData, FileStructure, TaBaseModal, TemporaryFile, pickImages } from '@ta/utils';

export type InputLogoModalInput = {
  initialSelection: string | null;
  availableFile$?: Observable<FileData>;
  update?: (file: FileStructure) => void;
};

/** Choix ou remplacement d'un logo ; rend l'URL retenue, `null` si effacée. */
@Component({
  selector: 'ta-input-logo-modal',
  styleUrls: ['./input-logo-modal.component.scss'],
  templateUrl: './input-logo-modal.component.html',
  standalone: true,
  imports: [ButtonComponent, DualButtonComponent, FontIconComponent, TaModalComponent, TitleComponent, TranslatePipe],
})
export class InputLogoModal extends TaBaseModal<InputLogoModalInput, string | null> {
  public selection: string | null = null;
  public tempFiles = new TemporaryFile();

  private _fileSubscription?: Subscription;

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
      ?.availableFile$?.pipe(map(file => ({ ...file, isSelected: this.selection === file.url })));
  }

  public onFileSelected(file: FileData) {
    this.selection = this.selection === file.url ? null : file.url;
  }

  public uploadPics = async () => {
    const pics = await pickImages();
    if (pics.length > 0) {
      const fn = this.modalState()?.input()?.update;
      if (fn) {
        this.tempFiles.addFiles(pics);
        fn(pics[0]);
      }
      this.selection = pics[0].localUrl!;
    }
  };

  public selected = () => {
    this.confirm(this.selection);
  };

  public cancel = () => {
    this.dismiss();
  };

  public clearSelection = () => {
    this.selection = null;
  };

  /** Repart de l'entrée à chaque ouverture. */
  private _init(data: InputLogoModalInput | null | undefined) {
    this.selection = data?.initialSelection ?? null;
    this._fileSubscription?.unsubscribe();
    if (data?.availableFile$) {
      this._fileSubscription = data.availableFile$.subscribe(() => this.tempFiles.removeAll());
      this._registerSubscription(this._fileSubscription);
    }
  }
}
