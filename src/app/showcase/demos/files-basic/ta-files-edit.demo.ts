import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from "@angular/core";

import { Subject } from "rxjs";

import { FileEditComponent } from "@ta/files-basic";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-files-edit-default",
  imports: [ButtonComponent, FileEditComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-button (action)="this.save$.next(null)">Enregistrer la retouche</ta-button>
      <div style="height: 500px">
        <ta-files-edit
          style="display: block; height: 100%"
          [imagePath]="this.imagePath"
          [saveImage$]="this.save$"
          (savedImage)="this.onSaved($event)"
        ></ta-files-edit>
      </div>
      @if (this.previewUrl(); as url) {
        <p>Dernier export :</p>
        <img [src]="url" style="max-width: 200px" />
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesEditDefaultExample {
  imagePath = "/assets/partners/logo/logo.png";

  // `ta-files-edit` n'a pas de bouton de validation propre à ce périmètre :
  // c'est le parent qui pousse dans `saveImage$` pour déclencher `onSaveClick()`.
  save$ = new Subject<null>();

  previewUrl = signal<string | null>(null);

  // `ta-files-edit` calcule la taille de son canevas dans `_createImageEditor()`,
  // après un `await tuiImageEditor.loadImageFromURL(...)` qui semble s'exécuter
  // hors zone Angular : la propriété `_canvasSize` (une propriété simple, pas un
  // signal) se met bien à jour — vérifié via `ng.getComponent()` — mais la liaison
  // de gabarit qui pose `[style.height]`/`[style.width]` sur le canevas reste
  // figée à sa valeur initiale (0) tant que rien d'autre ne redéclenche la
  // détection de changements. Sans ce correctif, le canevas reste invisible.
  private _cdr = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => this._cdr.detectChanges(), 300);
  }

  onSaved(blob: Blob) {
    this.previewUrl.set(URL.createObjectURL(blob));
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-files-edit",
  group: "Fichiers",
  summary: "Éditeur d'image (tui-image-editor intégré) : dessin, formes, texte, undo/redo, puis export en `Blob`.",
  examples: [
    {
      title: "Retouche et export",
      layout: "stack",
      description:
        "`saveImage$`, un `Observable<null>` fourni par le parent (ici déclenché par le bouton au-dessus), fait appeler `onSaveClick()` ; `savedImage` émet ensuite le `Blob` obtenu via `tuiImageEditor.toDataURL()`.",
      component: TaFilesEditDefaultExample,
    },
  ],
  notes:
    "`ta-files-edit` calcule la taille de son canevas à partir de la hauteur du conteneur qui l'entoure (`clientHeight - 70`, voir `_createImageEditor()` dans `files-edit.component.ts`). Il n'a pas de feuille de style propre pour son hôte (`files-edit.component.scss` ne définit pas de `:host`) : sans forcer `display: block; height: 100%` directement sur la balise, l'hôte reste `display: inline` et `clientHeight` vaut 0 au moment du calcul. Même une fois cela corrigé, le canevas restait invisible : `_canvasSize` se met bien à jour (vérifié via `ng.getComponent()`, valeur correcte après coup) mais la liaison de gabarit qui en dépend ne se rafraîchit jamais toute seule — c'est le même symptôme que documenté pour `NotificationInlineComponent`, appliqué ici à `_createImageEditor()`. Le remède est le même : `ChangeDetectorRef.detectChanges()` différé dans le composant d'exemple.",
};
