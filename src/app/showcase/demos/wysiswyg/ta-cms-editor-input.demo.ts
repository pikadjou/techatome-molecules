import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { Subject } from "rxjs";

import { ButtonComponent } from "@ta/ui";
import {
  EditorInputComponent,
  EditorInputSavedData,
  EditorToolType,
  WysiswgBlockData,
} from "@ta/wysiswyg";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-editor-input-empty",
  imports: [EditorInputComponent],
  template: ` <ta-cms-editor-input [placeholder]="'Commencez à écrire…'"></ta-cms-editor-input> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsEditorInputEmptyExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-editor-input-initial",
  imports: [EditorInputComponent],
  template: `
    <ta-cms-editor-input
      [initValue]="this.initialBlocks"
      [users]="this.users"
      (changed)="this.onChanged($event)"
    ></ta-cms-editor-input>
    <p>Blocs actuels : {{ this.blockCount() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsEditorInputInitialExample {
  initialBlocks: WysiswgBlockData[] = [
    { id: "h1", type: "header", data: { text: "Article d'exemple", level: 2 } },
    {
      id: "p1",
      type: "paragraph",
      data: { text: "Cet éditeur repose sur <b>EditorJS</b> et prend en charge plusieurs types de blocs." },
    },
    {
      id: "l1",
      type: "list",
      data: {
        style: "unordered",
        items: ["Titres", "Mise en forme (gras, italique)", "Citations et séparateurs", "Mentions d'utilisateur (@)"],
      },
    },
  ];

  // `users` alimente l'outil de mention : taper « @ » dans l'éditeur propose cette liste.
  users = [
    { id: "u1", name: "Alice Martin" },
    { id: "u2", name: "Bob Dupont" },
    { id: "u3", name: "Claire Fontaine" },
  ];

  blockCount = signal(this.initialBlocks.length);

  onChanged(data: { blocks: WysiswgBlockData[] }) {
    this.blockCount.set(data.blocks.length);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-editor-input-save",
  imports: [EditorInputComponent, ButtonComponent, JsonPipe],
  template: `
    <div class="flex-row g-space-sm">
      <ta-button size="small" (action)="this.requestSave$.next()">Enregistrer</ta-button>
      <ta-button size="small" type="secondary" (action)="this.clear$.next()">Vider</ta-button>
    </div>
    <ta-cms-editor-input
      [initValue]="this.initialBlocks"
      [requestSave$]="this.requestSave$"
      [clear$]="this.clear$"
      (saved)="this.onSaved($event)"
    ></ta-cms-editor-input>
    @if (this.lastSaved(); as saved) {
      <pre>{{ saved | json }}</pre>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsEditorInputSaveExample {
  initialBlocks: WysiswgBlockData[] = [
    { id: "p1", type: "paragraph", data: { text: "Modifiez ce texte, puis cliquez sur « Enregistrer »." } },
  ];

  // `requestSave$` et `clear$` pilotent l'éditeur depuis l'extérieur — une barre
  // d'actions ou un formulaire parent — sans référence directe à son instance.
  requestSave$ = new Subject<void>();
  clear$ = new Subject<void>();

  lastSaved = signal<EditorInputSavedData | null>(null);

  onSaved(data: EditorInputSavedData) {
    this.lastSaved.set(data);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-editor-input-max-height",
  imports: [EditorInputComponent],
  template: `
    <ta-cms-editor-input [initValue]="this.blocks" [maxHeight]="true" [enabledTools]="this.tools">
    </ta-cms-editor-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsEditorInputMaxHeightExample {
  // `maxHeight` limite l'éditeur à 300px avec défilement interne (voir la classe
  // `.max-height` dans input.component.scss).
  blocks: WysiswgBlockData[] = [
    { id: "h1", type: "header", data: { text: "Sommaire", level: 2 } },
    { id: "p1", type: "paragraph", data: { text: "Premier paragraphe." } },
    { id: "p2", type: "paragraph", data: { text: "Deuxième paragraphe." } },
    { id: "p3", type: "paragraph", data: { text: "Troisième paragraphe." } },
    {
      id: "p4",
      type: "paragraph",
      data: { text: "Quatrième paragraphe : le défilement apparaît dans le cadre de l'éditeur, pas dans la page." },
    },
  ];

  // `enabledTools` restreint la palette de blocs proposée par le bouton « + ».
  tools: EditorToolType[] = ["header", "list", "quote"];
}

export const DEMO: ComponentDemo = {
  id: "ta-cms-editor-input",
  group: "Éditeur riche",
  summary: "Éditeur de contenu riche (EditorJS), piloté par un modèle de blocs et une sauvegarde externe.",
  examples: [
    { title: "Vide", layout: "stack", component: TaCmsEditorInputEmptyExample },
    {
      title: "Contenu initial et mentions",
      layout: "stack",
      description: "Le compteur se met à jour à chaque modification, via la sortie `changed`.",
      component: TaCmsEditorInputInitialExample,
    },
    {
      title: "Sauvegarde pilotée",
      layout: "stack",
      description:
        "« Enregistrer » déclenche `save()` via l'entrée `requestSave$` ; « Vider » vide l'éditeur via `clear$`. Le JSON affiché est le dernier événement `saved`.",
      component: TaCmsEditorInputSaveExample,
    },
    {
      title: "Hauteur limitée et outils restreints",
      layout: "stack",
      description: "Cadre limité à 300px avec défilement ; seuls Titre, Liste et Citation restent disponibles.",
      component: TaCmsEditorInputMaxHeightExample,
    },
  ],
  notes:
    "Ces exemples montent un vrai éditeur EditorJS, sans mock ni backend — comme le cas E2E `src/app/e2e-harness/cases/wysiwyg.case.ts`. Les outils `image` et `mention`, actifs par défaut, n'appellent `TaDocumentsService` qu'après une interaction (upload de fichier), jamais au montage. Deux entrées ne sont démontrées dans aucun exemple ci-dessus : `setNewValue$`, un `Observable` qui permet à un parent de recharger le contenu de l'éditeur après le montage (`editorInstance.render(...)` ou `renderFromHTML(...)` selon que la valeur poussée est un tableau de blocs ou une chaîne HTML) — c'est une fonctionnalité à part entière, l'injection de contenu externe, pas un détail ; et `saveOnChange`, qui déclenche `save()` automatiquement à chaque modification plutôt que sur demande explicite.",
};
