import { Subject } from 'rxjs';

import { TaTableState } from './table-state';
import { ActiveFilter, Filter, Preset } from './types';

export class TaGridFilters {
  /** Les critères ont changé hors des formulaires (effacement, tag retiré) : ceux-ci se reconstruisent. */
  public readonly reset$ = new Subject<void>();

  private _debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private _pending: Filter[] | null = null;

  constructor(
    public readonly scope: string,
    public readonly table: TaTableState<any>,
    public readonly preset: Preset[] = []
  ) {}

  public get() {
    return this.table.getFilters(false).reduce<ActiveFilter[]>((acc, filter) => {
      const existing = acc.find(tag => tag.key === filter.field);
      if (existing) {
        existing.values.push(filter);
      } else {
        acc.push({
          key: filter.field,
          values: [filter],
        });
      }
      return acc;
    }, []);
  }

  public apply(filters: Filter[]) {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
    }
    this._pending = filters;

    this._debounceTimer = setTimeout(() => {
      this._debounceTimer = null;
      this.table.setFilter(this._pending ?? []);
      this._pending = null;
    }, 500);
  }

  /** Remplace les critères des seuls champs donnés : deux formulaires d'un même grid ne s'écrasent pas. */
  public applyFields(fields: string[], filters: Filter[]) {
    const current = this._pending ?? this.table.getFilters(false);
    this.apply([...current.filter(filter => !fields.includes(filter.field)), ...filters]);
  }

  /** Immédiat, pour que les formulaires se reconstruisent sur les critères restants. */
  public clear(fields?: string[]) {
    const current = this._pending ?? this.table.getFilters(false);
    this.destroy();
    this.table.setFilter(fields ? current.filter(filter => !fields.includes(filter.field)) : []);
    this.reset$.next();
  }

  public remove(filter: Filter) {
    this.table.removeFilter(filter.field, filter.type, filter.value);
    this.reset$.next();
  }

  public destroy(): void {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }
    this._pending = null;
  }
}
