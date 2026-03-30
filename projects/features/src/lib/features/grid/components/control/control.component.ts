import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TaOverlayPanelComponent, TitleComponent } from '@ta/ui';
import { TaBaseModal } from '@ta/utils';

import { Preset, ViewType } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import { TaGridFormComponent } from '../form/form.component';

@Component({
  selector: 'ta-grid-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, TaOverlayPanelComponent],
})
export class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
  show = input<{ switchView?: boolean; filters?: boolean; preset?: boolean }>({
    switchView: true,
    filters: true,
    preset: true,
  });

  private readonly _dialog = inject(MatDialog);

  constructor() {
    super();
  }

  public override ngOnInit() {
    super.ngOnInit();
    if (this.breakpoints.isMobile && this.show().switchView) {
      this.switchView('card');
    }
  }

  public switchView(type: ViewType) {
    this._grid.switchView(type);
  }

  public openFilters() {
    this._dialog.open<FiltersModal, FiltersModalData>(FiltersModal, {
      data: { gridId: this.gridId() },
      panelClass: 'grid-filters-modal',
    });
  }

  public setPreset(preset: Preset) {
    this.grid.filters?.apply(preset.filters);
  }
}

interface FiltersModalData {
  gridId: string;
}

@Component({
  selector: 'ta-grid-filters-modal',
  template: `
    <div class="filters-modal">
      <div class="filters-modal__header">
        <div class="flex-row align-center g-space-sm">
          <ta-font-icon name="filter" size="sm"></ta-font-icon>
          <ta-title [level]="3">{{ 'grid.filters.title' | translate }}</ta-title>
        </div>
        <ta-font-icon name="close" size="xs" class="c-pointer" (click)="this.close()"></ta-font-icon>
      </div>
      <div class="filters-modal__content">
        <ta-grid-form [gridId]="this.data.gridId" [showTitle]="false"></ta-grid-form>
      </div>
      <div class="filters-modal__footer">
        <ta-button (action)="this.close()">{{ 'grid.filters.apply' | translate }}</ta-button>
      </div>
    </div>
  `,
  styleUrls: ['./filters-modal.component.scss'],
  standalone: true,
  imports: [TaGridFormComponent, ButtonComponent, FontIconComponent, TitleComponent, TranslatePipe],
})
export class FiltersModal extends TaBaseModal {
  private readonly _dialogRef = inject(MatDialogRef<FiltersModal>);
  public readonly data = inject<FiltersModalData>(MAT_DIALOG_DATA);

  constructor() {
    super();
  }

  public close() {
    this._dialogRef.close();
  }
}
