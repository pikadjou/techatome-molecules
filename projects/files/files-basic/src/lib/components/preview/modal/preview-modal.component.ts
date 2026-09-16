import {
  Component,
  OnChanges,
  SimpleChanges,
  computed,
  input,
  output,
  signal,
} from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { OverlineComponent } from "@ta/ui";
import { EFileExtension, TaBaseComponent, downloadFile } from "@ta/utils";

import { TaTranslationFiles } from "../../../translation.service";
import { PreviewDocumentDto, getDocumentExtension } from "../type";
import { ExcelViewerComponent } from "../viewers/excel-viewer/excel-viewer.component";
import { ImageViewerComponent } from "../viewers/image-viewer/image-viewer.component";
import { PdfViewerComponent } from "../viewers/pdf-viewer/pdf-viewer.component";
import { WordViewerComponent } from "../viewers/word-viewer/word-viewer.component";

export type PreviewModalDataModal = {
  initial: PreviewDocumentDto | null;
};

/**
 * Visionneuse plein écran.
 *
 * Le fond sombre n'est pas décoratif : une image se juge sur un fond neutre, et
 * la page qui l'entoure fausserait la lecture des couleurs. La modale claire du
 * gabarit commun ne convient donc pas ici — la visionneuse pose son propre
 * calque et sa propre barre d'outils.
 *
 * `documents` transforme la visionneuse en galerie : flèches, compteur,
 * pellicule et raccourcis clavier n'apparaissent qu'à partir de deux éléments.
 * Sans elle, `initial` seul affiche une pièce isolée.
 */
@Component({
  selector: "ta-files-preview-modal",
  templateUrl: "./preview-modal.component.html",
  styleUrls: ["./preview-modal.component.scss"],
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
    "(document:keydown)": "this.onKeydown($event)",
  },
})
export class PreviewModal extends TaBaseComponent implements OnChanges {
  open = input.required<boolean>();

  initial = input<PreviewDocumentDto | null>(null);

  /** L'ensemble parcourable. Vide, la visionneuse se limite à `initial`. */
  documents = input<PreviewDocumentDto[] | null>(null);

  /** Contexte affiché en surtitre : le bien, le dossier, la personne. */
  overline = input<string>("");

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

  readonly current = computed<PreviewDocumentDto | null>(
    () => this.items()[this.index()] ?? null
  );

  readonly hasGallery = computed(() => this.items().length > 1);

  constructor() {
    super();
    TaTranslationFiles.getInstance();
  }

  /**
   * À chaque ouverture, la visionneuse se cale sur la pièce demandée : sans
   * cela, rouvrir la galerie repartirait de la dernière image consultée.
   *
   * Le cycle de vie plutôt qu'un effet : il voit le passage de `open` à vrai,
   * là où une valeur déduite ne verrait que deux états identiques, et écrire
   * dans un signal depuis un effet est refusé par Angular 18, sur lequel cette
   * librairie se compile.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes["open"] && !changes["initial"]) return;
    if (!this.open()) return;

    const target = this.initial();
    const found = target
      ? this.items().findIndex((item) => item.url === target.url)
      : -1;
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

    if (event.key === "Escape") {
      this.close();
      return;
    }
    if (!this.hasGallery()) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.previous();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      this.next();
    }
  }
}
