import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
  input,
  signal,
} from "@angular/core";

import Delimiter from "@editorjs/delimiter";
import EditorJS, { BlockAPI } from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { ColorTool } from "editorjs-color";
import { Observable, firstValueFrom, fromEvent, merge } from "rxjs";

import { TaDocumentsService } from "@ta/services";
import { TaTranslationService } from "@ta/translation";
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from "@ta/utils";

import { WysiswgBlockData, convertBlocksToHtml } from "../../public-api";
import { TagTool } from "../plugins/tag-editor/tag-editor";
import {
  EditorToolbarBlockCommand,
  EditorToolbarBlockTool,
  EditorToolbarComponent,
} from "../toolbar/toolbar.component";
import { EDITOR_ALL_TOOLS, EditorToolType } from "./editor-tools";
import * as de from "./translation/de.json";
import * as en from "./translation/en.json";
import * as es from "./translation/es.json";
import * as fr from "./translation/fr.json";
import * as nl from "./translation/nl.json";

export type EditorInputSavedData = {
  blocks: WysiswgBlockData[];
  tags: string[];
};

export { EDITOR_ALL_TOOLS };
export type { EditorToolType };

/** Ce que chaque outil de la barre pose comme bloc EditorJS. */
const TOOLBAR_BLOCK_CONFIG: {
  [tool in EditorToolbarBlockTool]: {
    data?: { [key: string]: string | number };
    type: string;
  };
} = {
  delimiter: { type: "delimiter" },
  "header-1": { data: { level: 1 }, type: "header" },
  "header-2": { data: { level: 2 }, type: "header" },
  "header-3": { data: { level: 3 }, type: "header" },
  image: { type: "image" },
  "list-ordered": { data: { style: "ordered" }, type: "list" },
  "list-unordered": { data: { style: "unordered" }, type: "list" },
  paragraph: { type: "paragraph" },
  quote: { type: "quote" },
  warning: { type: "warning" },
};

@Component({
  selector: "ta-cms-editor-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  standalone: true,
  imports: [EditorToolbarComponent],
  // L'habillage porte sur le DOM d'EditorJS, monté hors du template : il ne
  // reçoit aucun attribut d'encapsulation. Chaque règle du SCSS est préfixée par
  // le sélecteur du composant, ce qui lui rend la portée qu'il aurait eue.
  encapsulation: ViewEncapsulation.None,
})
export class EditorInputComponent
  extends TaBaseComponent
  implements OnInit, AfterViewInit
{
  initValue = input<WysiswgBlockData[] | null>();

  setNewValue$ = input<
    Observable<{
      blocks: WysiswgBlockData[] | string | null;
      saveAfter?: boolean;
    }>
  >();

  requestSave$ = input<Observable<void>>();

  clear$ = input<Observable<void>>();

  users = input<{ id: string; name: string }[]>([]);

  saveOnChange = input<boolean>(false);

  maxHeight = input<boolean>(false);

  enabledTools = input<EditorToolType[]>(EDITOR_ALL_TOOLS);

  placeholder = input<string>();

  /** Affiche la barre d'outils au-dessus de la zone d'édition. */
  showToolbar = input<boolean>(true);

  /** Supprime la réserve d'espace basse d'EditorJS, pour les champs courts. */
  isCompact = input<boolean>(false);

  /** Laisse l'utilisateur régler la hauteur de la zone d'édition. */
  resizable = input<boolean>(true);

  @Output()
  changed = new EventEmitter<{ blocks: WysiswgBlockData[] }>();

  @Output()
  saved = new EventEmitter<EditorInputSavedData>();

  /** Outil du bloc sous le curseur, que la barre met en évidence. */
  public readonly activeTool = signal<string | null>(null);

  public toolbarLabels: { [key: string]: string } = {};

  private _translationService = inject(TaTranslationService);
  public readonly languages: {
    [index: string]: {
      editorjs: { i18n: Object } & any;
      toolbar?: { [key: string]: string };
    };
  } = {
    de: de,
    en: en,
    es: es,
    fr: fr,
    nl: nl,
  };

  private readonly _documentsService = inject(TaDocumentsService);
  private _saveAfter = false;

  @ViewChild("editorjs", { static: true })
  editorjs!: ElementRef;

  public editorInstance: EditorJS | null = null;
  constructor() {
    super();
  }

  ngOnInit() {
    this.toolbarLabels = this._getLanguagePack()?.toolbar ?? {};
    const requestSave = this.requestSave$();
    if (requestSave) {
      this._registerSubscription(
        requestSave.subscribe({
          next: () => this.save(),
        })
      );
    }
    const clear = this.clear$();
    if (clear) {
      this._registerSubscription(
        clear.subscribe({
          next: () => this.editorInstance?.clear(),
        })
      );
    }
    const setNewValue = this.setNewValue$();
    if (setNewValue) {
      this._registerSubscription(
        setNewValue.subscribe({
          next: ({ blocks, saveAfter }) => {
            this._saveAfter = saveAfter ?? false;
            if (this.editorInstance && blocks) {
              if (typeof blocks === "string") {
                this.editorInstance.blocks.renderFromHTML(blocks);
              } else {
                this.editorInstance.render({ blocks: blocks });
              }
            }
          },
        })
      );
    }
  }

  ngAfterViewInit() {
    this.editorInstance = this.init();
    this._trackActiveBlock();
  }

  override ngOnDestroy(): void {
    // `super` d'abord : c'est lui qui coupe les souscriptions, dont celles que
    // `_trackActiveBlock` a posées sur l'élément hôte.
    super.ngOnDestroy();
    this.editorInstance?.destroy();
    this.editorInstance = null;
  }
  public async save() {
    if (isNotEmptyObject(this.editorInstance)) {
      const data = await this._extractWithColorTokenStyles();
      if (!data) {
        return;
      }
      this.saved.emit({
        blocks: data.blocks,
        tags: this._extractTags(data.blocks),
      });
    }
  }
  public init(): EditorJS {
    const translations = this._getTranslation();
    const tools = this._buildTools(translations);

    return new EditorJS({
      holder: this.editorjs.nativeElement,
      minHeight: 100,
      data: { blocks: this.initValue() },
      placeholder: this.placeholder() ?? translations["placeholder"],
      tools,
      onChange: this._onChange,
      ...translations,
    });
  }

  private _buildTools(translations: Record<string, any>): Record<string, any> {
    const enabled = new Set(this.enabledTools());
    const tools: Record<string, any> = {};

    if (enabled.has("header")) {
      tools["header"] = Header;
    }
    if (enabled.has("list")) {
      tools["list"] = List;
    }
    if (enabled.has("quote")) {
      tools["quote"] = Quote;
    }
    if (enabled.has("delimiter")) {
      tools["delimiter"] = Delimiter;
    }
    if (enabled.has("warning")) {
      tools["warning"] = Warning;
    }
    if (enabled.has("color")) {
      tools["TextColor"] = {
        class: ColorTool,
        config: {
          backgroundColorLabel: translations["colortool.backgroundColorLabel"],
          frontColorLabel: translations["colortool.frontColorLabel"],
        },
      };
    }
    if (enabled.has("image")) {
      tools["image"] = {
        class: ImageTool,
        config: {
          uploader: {
            uploadByFile: async (file: File) => {
              return this.uploadByFile(file);
            },
          },
        },
      };
    }
    if (enabled.has("mention")) {
      tools["mention"] = {
        class: TagTool,
        config: {
          users: this.users(),
        },
      };
    }

    return tools;
  }

  /**
   * Applique un outil de la barre au bloc courant : on convertit le bloc en
   * place quand EditorJS le permet, sinon on en insère un nouveau — un bloc vide
   * est alors remplacé plutôt que doublé.
   */
  public async applyBlockTool(tool: EditorToolbarBlockTool) {
    const editor = this.editorInstance;
    if (!editor) {
      return;
    }
    const { data, type } = TOOLBAR_BLOCK_CONFIG[tool];
    const block = this._getCurrentBlock();
    if (!block) {
      editor.blocks.insert(
        type,
        data,
        undefined,
        editor.blocks.getBlocksCount(),
        true
      );
      this._updateActiveTool();
      return;
    }
    const index = editor.blocks.getCurrentBlockIndex();
    if (block.name === type) {
      if (data) {
        await editor.blocks.update(block.id, data);
        editor.caret.setToBlock(index, "end");
      }
    } else {
      try {
        await editor.blocks.convert(block.id, type, data);
        editor.caret.setToBlock(index, "end");
      } catch {
        editor.blocks.insert(
          type,
          data,
          undefined,
          block.isEmpty ? index : index + 1,
          true,
          block.isEmpty
        );
      }
    }
    this._updateActiveTool();
  }

  /** Déplace ou supprime le bloc courant. */
  public applyBlockCommand(command: EditorToolbarBlockCommand) {
    const editor = this.editorInstance;
    if (!editor) {
      return;
    }
    const index = editor.blocks.getCurrentBlockIndex();
    if (index < 0) {
      return;
    }
    switch (command) {
      case "delete": {
        editor.blocks.delete(index);
        break;
      }
      case "move-down": {
        if (index < editor.blocks.getBlocksCount() - 1) {
          editor.blocks.move(index + 1);
          editor.caret.setToBlock(index + 1, "end");
        }
        break;
      }
      case "move-up": {
        if (index > 0) {
          editor.blocks.move(index - 1);
          editor.caret.setToBlock(index - 1, "end");
        }
        break;
      }
    }
    this._updateActiveTool();
  }

  /**
   * Le bloc courant n'est pas observable : on le relit après chaque clic ou
   * frappe. `Tab` et `/` sont retenus au passage, faute de quoi EditorJS ouvre
   * sa propre palette par-dessus la barre.
   */
  private _trackActiveBlock() {
    const holder = this.editorjs.nativeElement as HTMLElement;
    this._registerSubscription(
      merge(fromEvent(holder, "click"), fromEvent(holder, "keyup")).subscribe(
        () => this._updateActiveTool()
      )
    );
    this._registerSubscription(
      fromEvent<KeyboardEvent>(holder, "keydown", { capture: true }).subscribe(
        (event) => {
          if (event.key === "Tab" || event.key === "/") {
            event.stopPropagation();
          }
        }
      )
    );
  }

  private _updateActiveTool() {
    const block = this._getCurrentBlock();
    this.activeTool.set(block ? this._resolveToolId(block) : null);
  }

  private _getCurrentBlock(): BlockAPI | undefined {
    // L'API `blocks` n'existe ni avant `isReady` ni après `destroy()` : tester
    // l'instance ne suffit pas.
    const blocks = this.editorInstance?.blocks;
    if (!blocks) {
      return undefined;
    }
    const index = blocks.getCurrentBlockIndex();
    if (index < 0) {
      return undefined;
    }
    return blocks.getBlockByIndex(index);
  }

  /** Un titre ou une liste ne disent pas leur variante : on lit le DOM rendu. */
  private _resolveToolId(block: BlockAPI): string {
    if (block.name === "header") {
      const heading = block.holder.querySelector("h1, h2, h3, h4, h5, h6");
      return heading ? `header-${heading.tagName.charAt(1)}` : "header-2";
    }
    if (block.name === "list") {
      return block.holder.querySelector("ol")
        ? "list-ordered"
        : "list-unordered";
    }
    return block.name;
  }

  private _getLanguagePack() {
    const language = this._translationService.getLanguage();
    if (!isNonNullable(language)) {
      return null;
    }
    return this.languages[language] ?? null;
  }

  public uploadByFile = async (file: File) => {
    const doc = await firstValueFrom(
      this._documentsService.addDocument$({ file })
    );

    return {
      success: 1,
      file: {
        url: doc.url,
      },
    };
  };

  private _onChange = async () => {
    if (isNotEmptyObject(this.editorInstance)) {
      const data = await this._extractWithColorTokenStyles();
      if (!data) {
        return;
      }
      this.changed.emit({ blocks: data.blocks });
    }
    this._updateActiveTool();
    if (this.saveOnChange()) {
      this.save();
    }
    if (this._saveAfter) {
      this.save();
      this._saveAfter = false;
    }
  };
  private _getTranslation() {
    return this._getLanguagePack()?.editorjs ?? {};
  }

  private async _extractWithColorTokenStyles() {
    const output = await this.editorInstance?.save();
    if (!output) {
      return null;
    }

    const styledSpans = Array.from(
      this.editorjs.nativeElement.innerHTML.matchAll(
        /<span class="ce-inline-tool--color__token"(.*?)>/gs
      )
    ).map((match: any) => ({
      style: match[1].trim(), // `style`
    }));

    if (styledSpans.length === 0) {
      return output;
    }

    let spanIndex = 0;
    const updatedBlocks = output.blocks.map((block) => {
      if (block.type !== "paragraph" || !block.data?.text) {
        return block;
      }

      const newText = block.data.text.replace(
        /<span class="ce-inline-tool--color__token">/gs,
        (match: unknown) => {
          const styled = styledSpans[spanIndex++];
          if (!styled) {
            return match;
          }
          return `<span class="ce-inline-tool--color__token" ${styled.style}>`;
        }
      );

      return {
        ...block,
        data: {
          ...block.data,
          text: newText,
        },
      };
    });

    return {
      ...output,
      blocks: updatedBlocks,
    };
  }
  private _extractTags(blocks: WysiswgBlockData<string, any>[]) {
    const html = convertBlocksToHtml(blocks);
    const regex = /data-user-id="([^"]+)"/g;
    // Extraction des IDs sous forme de tableau
    return [...html.matchAll(regex)].map((match) => match[1]);
  }
}
