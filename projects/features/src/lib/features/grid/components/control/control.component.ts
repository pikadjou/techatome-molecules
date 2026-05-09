import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, input, signal } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TaModalComponent, TaOverlayPanelComponent, TitleComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { Preset, ViewType } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import { TaGridFormComponent } from '../form/form.component';

@Component({
  selector: 'ta-grid-filters-modal',
  template: `
    <ta-modal
      [open]="this.open()"
      size="medium"
      [title]="'grid.filters.title' | translate"
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content>
        <ta-grid-form [gridId]="this.gridId()" [showTitle]="false"></ta-grid-form>
      </div>
      <div modal-footer>
        <ta-button (action)="this.closeEvent.emit()">{{ 'grid.filters.apply' | translate }}</ta-button>
      </div>
    </ta-modal>
  `,
  styleUrls: ['./filters-modal.component.scss'],
  standalone: true,
  imports: [TaGridFormComponent, ButtonComponent, TaModalComponent, TranslatePipe],
})
export class FiltersModal extends TaBaseComponent {
  open = input.required<boolean>();
  gridId = input.required<string>();

  @Output() closeEvent = new EventEmitter<void>();

  constructor() {
    super();
  }
}

@Component({
  selector: 'ta-grid-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, TaOverlayPanelComponent, FiltersModal],
})
export class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
  show = input<{ switchView?: boolean; filters?: boolean; preset?: boolean }>({
    switchView: true,
    filters: true,
    preset: true,
  });

  public isFiltersOpen = signal(false);

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
    this.isFiltersOpen.set(true);
  }

  public setPreset(preset: Preset) {
    this.grid.filters?.apply(preset.filters);
  }
}
