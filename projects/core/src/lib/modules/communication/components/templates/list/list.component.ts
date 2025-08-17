import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';

import { TaBaseComponent, Culture } from '@ta/utils';

import {
  AbstractCellComponent,
  AgGrid_ColDef,
  CamGridData,
  CamGridDataService,
  GridBoolCellComponent,
} from '../../../../grid/public-api';
import { CommunicationType } from '../../../services/dto/communication';
import { Template, TemplateVariant } from '../../../services/dto/template';
import { CamCommunicationsTemplatesService } from '../../../services/templates.service';

@Component({
selector: 'ta-communication-template-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
})
export class CommunicationTemplateListComponent extends TaBaseComponent {
  @Output()
  askNavigation = new EventEmitter<string>();

  readonly id = 'communicationTemplateList';

  readonly communicationsTemplateService = inject(CamCommunicationsTemplatesService);
  readonly list$ = this.communicationsTemplateService.communicationTemplates.get$();

  readonly fieldsOverrides: {
    [index in keyof Partial<Template>]: AgGrid_ColDef;
  } = {
    isActive: { cellRenderer: GridBoolCellComponent },
    availableCultures: { cellRenderer: CultureCellComponent },
    variants: { cellRenderer: VariantsCellComponent },
    communicationType: { cellRenderer: CommunicationTypeCellComponent },
  };

  protected _grid: CamGridData<Template> | null = null;

  private readonly _dataService = inject(CamGridDataService<Template>);

  constructor() {
    super();
    this._fetch();
  }

  ngOnInit() {
    this._grid = this._dataService.get(this.id, true);
    this._grid.switchView('grid');
    this._registerSubscription(
      this._grid.selectedData$.subscribe(data => {
        if (data.length == 1) {
          this.goToTemplate(data[0].id);
        }
      })
    );
  }

  public goToTemplate(id: string) {
    this.askNavigation.emit(id);
  }
  private _fetch() {
    this.communicationsTemplateService.fetchConversationTemplates$().subscribe({
      complete: () => {
        this.requestState.completed();
      },
      error: (error: HttpErrorResponse) => this.requestState.onError(error.status, error.statusText),
    });
  }
}

/**
 * override cell template
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '',
  template: `<div class="align-center" style="height: 100%">
    <ta-culture [cultures]="this.availableCultures"></ta-culture>
  </div>`,
})
export class CultureCellComponent extends AbstractCellComponent<any, Culture[]> {
  get availableCultures() {
    return this.value ?? [];
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '',
  template: `<div class="align-center" style="height: 100%">
    <ta-text>{{ this.title }}</ta-text>

    <!-- <ta-text [innerHTML]="this.body"></ta-text> -->
  </div>`,
})
export class VariantsCellComponent extends AbstractCellComponent<any, TemplateVariant[]> {
  get body() {
    if (!this.value || this.value.length === 0) {
      return '';
    }
    return this.value[0].body ?? '';
  }
  get title() {
    if (!this.value || this.value.length === 0) {
      return '';
    }
    return this.value[0].title ?? '';
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '',
  template: `<div class="align-center" style="height: 100%">
    <ta-communication-type [value]="this.type"></ta-communication-type>
  </div>`,
})
export class CommunicationTypeCellComponent extends AbstractCellComponent<any, CommunicationType> {
  get type() {
    return this.value ?? CommunicationType.Unknown;
  }
}
