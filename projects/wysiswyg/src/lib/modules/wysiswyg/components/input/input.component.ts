import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { CamDocumentsService } from '@ta/services';
import { CamTranslationService } from '@ta/translation';
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from '@ta/utils';
import { ColorTool } from 'editorjs-color';
import { Observable, firstValueFrom } from 'rxjs';

import { WysiswgBlockData, convertBlocksToHtml } from '../../public-api';
import { TagTool } from '../plugins/tag-editor/tag-editor';
import * as en from './translation/en.json';
import * as es from './translation/es.json';
import * as fr from './translation/fr.json';
import * as nl from './translation/nl.json';

export type EditorInputSavedData = { blocks: WysiswgBlockData[]; tags: string[] };
@Component({
selector: 'ta-cms-editor-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],,
  standalone: true,
})
export class EditorInputComponent extends TaBaseComponent implements OnInit, AfterViewInit {
  @Input()
  initValue?: WysiswgBlockData[] | null;

  @Input()
  setNewValue$?: Observable<{ blocks: WysiswgBlockData[] | string | null; saveAfter?: boolean }>;

  @Input()
  requestSave$?: Observable<void>;

  @Input()
  clear$?: Observable<void>;

  @Input()
  users: { id: string; name: string }[] = [];

  @Input()
  saveOnChange = false;

  @Input()
  maxHeight = false;

  @Output()
  changed = new EventEmitter<{ blocks: WysiswgBlockData[] }>();

  @Output()
  saved = new EventEmitter<EditorInputSavedData>();

  public translationService = inject(CamTranslationService);
  public readonly languages: {
    [index: string]: { editorjs: { i18n: Object } & any };
  } = {
    en: en,
    es: es,
    fr: fr,
    nl: nl,
  };

  private readonly _documentsService = inject(CamDocumentsService);
  private _saveAfter = false;

  @ViewChild('editorjs', { static: true })
  editorjs!: ElementRef;

  public editorInstance: EditorJS | null = null;
  constructor() {
    super();
  }

  ngOnInit() {
    if (this.requestSave$) {
      this._registerSubscription(
        this.requestSave$?.subscribe({
          next: () => this.save(),
        })
      );
    }
    if (this.clear$) {
      this._registerSubscription(
        this.clear$?.subscribe({
          next: () => this.editorInstance?.clear(),
        })
      );
    }
    if (this.setNewValue$) {
      this._registerSubscription(
        this.setNewValue$?.subscribe({
          next: ({ blocks, saveAfter }) => {
            this._saveAfter = saveAfter ?? false;
            if (this.editorInstance && blocks) {
              if (typeof blocks === 'string') {
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
      this.saved.emit({ blocks: data.blocks, tags: this._extractTags(data.blocks) });
    }
  }
  public init(): EditorJS {
    const translations = this._getTranslation();

    return new EditorJS({
      holder: this.editorjs.nativeElement,
      minHeight: 100,
      data: { blocks: this.initValue },
      placeholder: translations['placeholder'],
      tools: {
        header: Header,
        list: List,
        quote: Quote,
        delimiter: Delimiter,
        warning: Warning,
        TextColor: {
          class: ColorTool,
          config: {
            backgroundColorLabel: translations['colortool.backgroundColorLabel'],
            frontColorLabel: translations['colortool.frontColorLabel'],
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile: async (file: File) => {
                return this.uploadByFile(file);
              },
            },
          },
        },
        mention: {
          class: TagTool,
          config: {
            users: this.users,
          },
        },
      },
      onChange: this._onChange,
      ...translations,
    });
  }

  public uploadByFile = async (file: File) => {
    const doc = await firstValueFrom(this._documentsService.addDocument$({ file }));

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
    if (this.saveOnChange) {
      this.save();
    }
    if (this._saveAfter) {
      this.save();
      this._saveAfter = false;
    }
  };
  private _getTranslation() {
    if (!isNonNullable(this.translationService.getLanguage())) {
      return {};
    }
    return this.languages[this.translationService.getLanguage()].editorjs ?? {};
  }

  private async _extractWithColorTokenStyles() {
    const output = await this.editorInstance?.save();
    if (!output) {
      return null;
    }

    const styledSpans = Array.from(
      this.editorjs.nativeElement.innerHTML.matchAll(/<span class="ce-inline-tool--color__token"(.*?)>/gs)
    ).map((match: any) => ({
      style: match[1].trim(), // `style`
    }));

    if (styledSpans.length === 0) {
      return output;
    }

    let spanIndex = 0;
    const updatedBlocks = output.blocks.map(block => {
      if (block.type !== 'paragraph' || !block.data?.text) {
        return block;
      }

      const newText = block.data.text.replace(/<span class="ce-inline-tool--color__token">/gs, (match: unknown) => {
        const styled = styledSpans[spanIndex++];
        if (!styled) {
          return match;
        }
        return `<span class="ce-inline-tool--color__token" ${styled.style}>`;
      });

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
    return [...html.matchAll(regex)].map(match => match[1]);
  }
}
