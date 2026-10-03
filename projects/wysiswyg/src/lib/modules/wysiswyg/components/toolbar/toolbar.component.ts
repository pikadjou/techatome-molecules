import { Component, ViewEncapsulation, computed, inject, input, output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  IconChevronDown,
  IconChevronUp,
  IconDelimiter,
  IconListBulleted,
  IconListNumbered,
  IconPicture,
  IconQuote,
  IconText,
  IconTrash,
  IconWarning,
} from '@codexteam/icons';

import { EDITOR_ALL_TOOLS, EditorToolType } from '../input/editor-tools';

/** Bloc que la barre sait poser sur la sélection courante. */
export type EditorToolbarBlockTool =
  | 'delimiter'
  | 'header-1'
  | 'header-2'
  | 'header-3'
  | 'image'
  | 'list-ordered'
  | 'list-unordered'
  | 'paragraph'
  | 'quote'
  | 'warning';

/** Action portant sur le bloc courant, indépendamment de son type. */
export type EditorToolbarBlockCommand = 'delete' | 'move-down' | 'move-up';

type EditorToolbarEntry<T> = {
  icon: SafeHtml | null;
  id: T;
  labelKey: string;
  /** Outil EditorJS dont dépend l'entrée ; absent = toujours disponible. */
  requires?: EditorToolType;
  text?: string;
};

@Component({
  selector: 'ta-cms-editor-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  // SVG injecté par `innerHTML`, hors encapsulation : règles préfixées par le sélecteur du composant.
  encapsulation: ViewEncapsulation.None,
})
export class EditorToolbarComponent {
  /** Identifiant du bloc sous le curseur, pour marquer l'outil correspondant. */
  activeTool = input<string | null>(null);

  labels = input<{ [key: string]: string }>({});

  /** Outils montés dans l'éditeur ; la barre n'offre que ceux-là. */
  enabledTools = input<EditorToolType[]>(EDITOR_ALL_TOOLS);

  blockCommand = output<EditorToolbarBlockCommand>();

  blockTool = output<EditorToolbarBlockTool>();

  public readonly blockCommands: EditorToolbarEntry<EditorToolbarBlockCommand>[];
  public readonly deleteCommand: EditorToolbarEntry<EditorToolbarBlockCommand>;

  /** Le paragraphe est le bloc de repli d'EditorJS. */
  private readonly _allBlockTools: EditorToolbarEntry<EditorToolbarBlockTool>[];

  private readonly _sanitizer = inject(DomSanitizer);

  public readonly blockTools = computed(() => {
    const enabled = new Set(this.enabledTools());
    return this._allBlockTools.filter(entry => !entry.requires || enabled.has(entry.requires));
  });

  constructor() {
    this._allBlockTools = [
      { icon: this._trust(IconText), id: 'paragraph', labelKey: 'paragraph' },
      { icon: null, id: 'header-1', labelKey: 'header1', requires: 'header', text: 'H1' },
      { icon: null, id: 'header-2', labelKey: 'header2', requires: 'header', text: 'H2' },
      { icon: null, id: 'header-3', labelKey: 'header3', requires: 'header', text: 'H3' },
      {
        icon: this._trust(IconListBulleted),
        id: 'list-unordered',
        labelKey: 'listUnordered',
        requires: 'list',
      },
      {
        icon: this._trust(IconListNumbered),
        id: 'list-ordered',
        labelKey: 'listOrdered',
        requires: 'list',
      },
      { icon: this._trust(IconQuote), id: 'quote', labelKey: 'quote', requires: 'quote' },
      { icon: this._trust(IconWarning), id: 'warning', labelKey: 'warning', requires: 'warning' },
      {
        icon: this._trust(IconDelimiter),
        id: 'delimiter',
        labelKey: 'delimiter',
        requires: 'delimiter',
      },
      { icon: this._trust(IconPicture), id: 'image', labelKey: 'image', requires: 'image' },
    ];
    this.blockCommands = [
      { icon: this._trust(IconChevronUp), id: 'move-up', labelKey: 'moveUp' },
      { icon: this._trust(IconChevronDown), id: 'move-down', labelKey: 'moveDown' },
    ];
    this.deleteCommand = {
      icon: this._trust(IconTrash),
      id: 'delete',
      labelKey: 'delete',
    };
  }

  public getLabel(entry: EditorToolbarEntry<string>): string {
    return this.labels()[entry.labelKey] ?? '';
  }

  public isActive(id: string): boolean {
    return this.activeTool() === id;
  }

  private _trust(icon: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(icon);
  }
}
