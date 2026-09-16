import { Component, OnChanges, SimpleChanges, computed, input, output, signal } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { OverlineComponent } from '@ta/ui';
import { EFileExtension, TaBaseComponent, downloadFile } from '@ta/utils';

import { TaTranslationFiles } from '../../../translation.service';
import { PreviewDocumentDto, getDocumentExtension } from '../type';
import { ExcelViewerComponent } from '../viewers/excel-viewer/excel-viewer.component';
import { ImageViewerComponent } from '../viewers/image-viewer/image-viewer.component';
import { PdfViewerComponent } from '../viewers/pdf-viewer/pdf-viewer.component';
import { WordViewerComponent } from '../viewers/word-viewer/word-viewer.component';

export type PreviewModalDataModal = {
  initial: PreviewDocumentDto | null;
};

/** Visionneuse plein écran ; avec `documents`, navigation en galerie. */
@Component({
  selector: 'ta-files-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss'],
  standalone: true,
  imports: [
    ExcelViewerComponent,
    FontIconComponent,
    ImageViewerComponent,
    OverlineComponent,
    PdfViewerComponent,
    TranslateModule,
    WordViewerComponent,
  ],
  host: {
    '(document:keydown)': 'this.onKeydown($event)',
  },
})
export class PreviewModal extends TaBaseComponent implements OnChanges {
  open = input.required<boolean>();

  initial = input<PreviewDocumentDto | null>(null);

  /** Documents parcourables ; vide, seul `initial` est affiché. */
  documents = input<PreviewDocumentDto[] | null>(null);

  /** Surtitre de contexte (bien, dossier, personne). */
  overline = input<string>('');

  closeEvent = output<void>();

  readonly EFileExtension = EFileExtension;
  readonly getDocumentExtension = getDocumentExtension;

  /** Position courante dans la pellicule. */
  public index = signal(0);

  readonly items = computed<PreviewDocumentDto[]>(() => {
    const documents = this.documents();
    if (documents?.length) return documents;

    const single = this.initial();
    return single ? [single] : [];
  });

  readonly current = computed<PreviewDocumentDto | null>(() => this.items()[this.index()] ?? null);

  readonly hasGallery = computed(() => this.items().length > 1);

  constructor() {
    super();
    TaTranslationFiles.getInstance();
  }

  /** Recale la galerie sur `initial` à chaque ouverture (pas d'effet : écriture de signal interdite en Angular 18). */
  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['open'] && !changes['initial']) return;
    if (!this.open()) return;

    const target = this.initial();
    const found = target ? this.items().findIndex(item => item.url === target.url) : -1;
    this.index.set(found > -1 ? found : 0);
  }

  public select(index: number): void {
    const total = this.items().length;
    if (!total) return;
    this.index.set((index + total) % total);
  }

  public previous(): void {
    this.select(this.index() - 1);
  }

  public next(): void {
    this.select(this.index() + 1);
  }

  public download(): void {
    const current = this.current();
    if (current) downloadFile(current.url);
  }

  public close(): void {
    this.closeEvent.emit();
  }

  public onKeydown(event: KeyboardEvent): void {
    if (!this.open()) return;

    if (event.key === 'Escape') {
      this.close();
      return;
    }
    if (!this.hasGallery()) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.previous();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    }
  }
}
