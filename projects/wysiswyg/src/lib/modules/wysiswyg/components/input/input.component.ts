import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
  input,
} from "@angular/core";

import Delimiter from "@editorjs/delimiter";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { ColorTool } from "editorjs-color";
import { Observable, firstValueFrom } from "rxjs";

import { TaDocumentsService } from "@ta/services";
import { TaTranslationService } from "@ta/translation";
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from "@ta/utils";

import { WysiswgBlockData, convertBlocksToHtml } from "../../public-api";
import { TagTool } from "../plugins/tag-editor/tag-editor";
import * as en from "./translation/en.json";
import * as es from "./translation/es.json";
import * as fr from "./translation/fr.json";
import * as nl from "./translation/nl.json";

export type EditorInputSavedData = {
  blocks: WysiswgBlockData[];
  tags: string[];
};

export type EditorToolType =
  | "header"
  | "list"
  | "quote"
  | "delimiter"
  | "warning"
  | "color"
  | "image"
  | "mention";

export const EDITOR_ALL_TOOLS: EditorToolType[] = [
  "header",
  "list",
  "quote",
  "delimiter",
  "warning",
  "color",
  "image",
  "mention",
];

@Component({
  selector: "ta-cms-editor-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  standalone: true,
})
export class EditorInputComponent
  extends TaBaseComponent
  implements OnInit, AfterViewInit
{
  initValue = input<WysiswgBlockData[] | null>();

  setNewValue$ = input<Observable<{
    blocks: WysiswgBlockData[] | string | null;
    saveAfter?: boolean;
  }>>();

  requestSave$ = input<Observable<void>>();

  clear$ = input<Observable<void>>();

  users = input<{ id: string; name: string }[]>([]);

  saveOnChange = input<boolean>(false);

  maxHeight = input<boolean>(false);

  enabledTools = input<EditorToolType[]>(EDITOR_ALL_TOOLS);

  @Output()
  changed = new EventEmitter<{ blocks: WysiswgBlockData[] }>();

  @Output()
  saved = new EventEmitter<EditorInputSavedData>();

  private _translationService = inject(TaTranslationService);
  public readonly languages: {
    [index: string]: { editorjs: { i18n: Object } & any };
  } = {
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
  }

  override ngOnDestroy(): void {
    this.editorInstance?.destroy();
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
      placeholder: translations["placeholder"],
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
          backgroundColorLabel:
            translations["colortool.backgroundColorLabel"],
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
    if (this.saveOnChange()) {
      this.save();
    }
    if (this._saveAfter) {
      this.save();
      this._saveAfter = false;
    }
  };
  private _getTranslation() {
    if (!isNonNullable(this._translationService.getLanguage())) {
      return {};
    }
    return this.languages[this._translationService.getLanguage()].editorjs ?? {};
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
