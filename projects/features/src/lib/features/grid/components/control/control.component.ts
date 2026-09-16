import { AsyncPipe } from '@angular/common';
import { Component, OnInit, input, output, signal } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, LayoutFullPanelComponent, TaOverlayPanelComponent } from '@ta/ui';
import { PluralTranslatePipe } from '@ta/utils';

import { Preset, ViewType } from '../../models/types';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import { TaGridFormComponent } from '../form/form.component';

/**
 * Panneau latéral des filtres. Un panneau plutôt qu'une modale : les critères
 * restent à côté de la liste, qui se met à jour pendant qu'on les règle.
 */
@Component({
  selector: 'ta-grid-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
  standalone: true,
  imports: [TaGridFormComponent, ButtonComponent, LayoutFullPanelComponent, TranslatePipe, PluralTranslatePipe],
})
export class TaGridFiltersPanel extends TaAbstractGridComponent<unknown> {
  closeEvent = output<void>();

  get resultCount(): number {
    return this.grid?.totalItems() ?? 0;
  }

  /** Ne touche qu'aux filtres : le regroupement se pilote depuis ta-grid-control. */
  public reset(): void {
    this._grid.filters?.apply([]);
  }
}

@Component({
  selector: 'ta-grid-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, TaOverlayPanelComponent, TaGridFiltersPanel, TranslatePipe],
})
export class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
  show = input<{
    switchView?: boolean;
    filters?: boolean;
    preset?: boolean;
    group?: boolean;
    sort?: boolean;
  }>({
    filters: true,
    group: true,
    preset: true,
    sort: true,
    switchView: true,
  });

  /** Masque les libellés textuels : ne restent que les icônes. */
  compact = input<boolean>(false);

  public isFiltersOpen = signal(false);

  /** Nombre de critères actifs, hors recherche globale — affiché sur le bouton Filtres. */
  get activeFiltersCount(): number {
    return (this.grid?.filters?.get() ?? [])
      .filter(tag => tag.key !== gridSearchFieldsName)
      .reduce((count, tag) => count + tag.values.length, 0);
  }

  /** Colonnes sur lesquelles un regroupement a du sens. */
  get groupableCols(): { key: string; label: string }[] {
    return Object.values(this.grid?.cols ?? {})
      .filter(col => col.data.col.showOnSearch && !col.data.col.notDisplayable)
      .map(col => ({ key: col.key, label: col.inputLabel }));
  }

  get hasGroupableCols(): boolean {
    return this.groupableCols.length > 0;
  }

  /** Colonnes triables, pour les vues sans en-têtes (cartes). */
  get sortableCols(): { key: string; label: string }[] {
    return Object.values(this.grid?.cols ?? {})
      .filter(col => !col.data.col.notDisplayable && !String(col.key).startsWith('_'))
      .map(col => ({ key: col.key, label: col.inputLabel }));
  }

  get hasSortableCols(): boolean {
    return this.sortableCols.length > 0;
  }

  get activeSort(): string | null {
    return this.grid?.table?.sortField() ?? null;
  }

  get activeSortDir(): 'asc' | 'desc' {
    return this.grid?.table?.sortDir() ?? 'asc';
  }

  get activeSortLabel(): string | null {
    const key = this.activeSort;
    return key ? (this.grid?.cols[key]?.inputLabel ?? key) : null;
  }

  get activeGroup(): string | null {
    return (this.grid?.groupBy as string) ?? null;
  }

  get activeGroupLabel(): string | null {
    const key = this.activeGroup;
    return key ? (this.grid?.cols[key]?.inputLabel ?? key) : null;
  }

  get hasPresets(): boolean {
    return (this.grid?.filters?.preset?.length ?? 0) > 0;
  }

  get activePresetName(): string | null {
    return this.grid?.filters?.preset?.find(preset => this.isPresetActive(preset))?.name ?? null;
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
    this.grid.filters?.apply(this.isPresetActive(preset) ? [] : preset.filters);
  }

  /** Rejouer le même critère inverse le sens. */
  public setSort(key: string | null) {
    if (!key) {
      this.grid?.table?.setSort(null, 'asc');
      return;
    }
    const dir = key === this.activeSort && this.activeSortDir === 'asc' ? 'desc' : 'asc';
    this.grid?.table?.setSort(key, dir);
  }

  public setGroup(key: string | null) {
    if (!key || key === this.activeGroup) {
      this._grid.clearGroupBy();
      return;
    }
    this._grid.setGroupBy(key);
  }

  public isPresetActive(preset: Preset): boolean {
    if (!preset.filters.length) {
      return false;
    }
    const active = (this.grid?.filters?.get() ?? []).flatMap(tag => tag.values);

    return preset.filters.every(filter =>
      active.some(
        current =>
          current.field === filter.field &&
          current.type === filter.type &&
          String(current.value) === String(filter.value)
      )
    );
  }
}
