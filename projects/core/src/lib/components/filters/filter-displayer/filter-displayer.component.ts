import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { InputBase } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { BottomSheetTemplateGenericComponent, BottomSheetTemplateGenericParams } from '@ta/menu';
import { ButtonComponent, LayoutFullPanelComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { FilterContainerComponent } from '../filter-container/filter-container.component';

@Component({
  selector: 'ta-filter-displayer',
  templateUrl: './filter-displayer.component.html',
  styleUrls: ['./filter-displayer.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, LayoutFullPanelComponent, FilterContainerComponent, ButtonComponent],
})
export class FilterDisplayerComponent extends TaBaseComponent {
  @Input()
  form: InputBase<any>[] = [];

  @Input()
  iconType: string = 'filter';

  @Input()
  container: 'button' | 'link' = 'button';

  @Output()
  filtersSelected = new EventEmitter<any>();

  @ViewChild('filterTemplate', { read: TemplateRef })
  filterTemplate!: TemplateRef<void>;

  private _isFilterOpen = false;
  get isFilterOpen() {
    return this._isFilterOpen;
  }
  set isFilterOpen(value: boolean) {
    this._isFilterOpen = value;

    if (this.mobileDetection) {
      if (value) {
        this._bottomSheet.open<BottomSheetTemplateGenericComponent, BottomSheetTemplateGenericParams<null>>(
          BottomSheetTemplateGenericComponent,
          {
            panelClass: 'no-padding',
            data: {
              template: this.filterTemplate,
              context: null,
            },
          }
        );
      } else {
        this._bottomSheet.dismiss();
      }
    }
  }

  get mobileDetection() {
    return this.breakpoints.isMobile;
  }

  constructor(private _bottomSheet: MatBottomSheet) {
    super();
  }

  public selected(filters: any) {
    this.filtersSelected.emit(filters);
    this.close();
  }

  public open() {
    this.isFilterOpen = true;
  }
  public close() {
    this.isFilterOpen = false;
  }
}
