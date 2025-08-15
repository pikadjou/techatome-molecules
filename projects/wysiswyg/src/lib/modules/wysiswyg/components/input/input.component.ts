import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';

import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
// @ts-ignore
import Warning from '@editorjs/warning';
import { Observable } from 'rxjs';

import { TaBaseComponent } from '@ta/utils';

import { WysiswgBlockData } from '../../public-api';
import * as en from './translation/en.json';
import * as es from './translation/es.json';
import * as fr from './translation/fr.json';
import * as nl from './translation/nl.json';

@Component({
  selector: 'ta-cms-editor-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class EditorInputComponent extends TaBaseComponent implements OnInit, AfterViewInit {
  @Input()
  initValue?: WysiswgBlockData[] | null;

  @Input()
  setNewValue$?: Observable<WysiswgBlockData[] | null>;

  @Input()
  requestSave$?: Observable<void>;

  @Input()
  clear$?: Observable<void>;

  @Input()
  saveOnChange = false;

  @Input()
  maxHeight = false;

  @Output()
  saved = new EventEmitter<WysiswgBlockData[]>();

  // public translationService = inject(TaTranslationService);
  public readonly languages: { [index: string]: { editorjs: { i18n: Object } & any } } = {
    en: en,
    es: es,
    fr: fr,
    nl: nl,
  };

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
          next: newValue => {
            if (this.editorInstance && newValue) {
              this.editorInstance.render({ blocks: newValue });
            }
          },
        })
      );
    }
  }

  ngAfterViewInit() {
    this.editorInstance = this.init();
  }

  public save() {
    if (this.editorInstance) {
      this.editorInstance.save().then(data => {
        this.saved.emit(data.blocks);
      });
    }
  }
  public init(): EditorJS {
    const translations = this._getTranslation();

    return new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: this.editorjs.nativeElement,
      minHeight: 100,
      data: { blocks: this.initValue ?? [] },
    //  placeholder: translations['placeholder'],
      tools: {
        header: Header,
        list: List,
        quote: Quote,
        delimiter: Delimiter,
        warning: Warning,
      },
      onChange: this._onChange,
      ...translations,
    });
  }

  private _onChange = () => {
    if (this.saveOnChange) {
      this.save();
    }
  };
  private _getTranslation() {
    return {};
    // if (!isNonNullable(this.translationService.getLanguage())) {
    //   return {};
    // }
    // return this.languages[this.translationService.getLanguage()].editorjs ?? {};
  }
}
