import { BehaviorSubject, Observable } from 'rxjs';

import { Menu, MenuBase } from '../models/public-api';

export class FilterHelper {
  public refresh$ = new BehaviorSubject('');

  get filter() {
    return this._filter;
  }
  set filter(filter: string) {
    this._filter = filter;

    this.refresh$.next(this._filter);
  }
  private _filter: string = '';

  private _items: {
    label: string;
    defaultOpen: boolean;
    order?: number;
    visible$?: Observable<boolean>;
    translationData?: {};
    options?: { notificationBadge: { label: number; style?: string } };
  }[];
  constructor(
    items: {
      label: string;
      defaultOpen: boolean;
      order?: number;
      visible$?: Observable<boolean>;
      translationData?: {};
      options?: { notificationBadge: { label: number; style?: string } };
    }[]
  ) {
    this._items = items;
  }
  public getMenu() {
    return new Menu({
      elements: this._items.map(item => {
        const key = this._getKey(item.label);
        return new MenuBase({
          key: key,
          label: item.label,
          callback: () => (this.filter = key),
          defaultOpen: item.defaultOpen,
          order: item.order,
          visible$: item.visible$,
          translationData: item.translationData,
          options: item.options,
        });
      }),
      direction: 'responsive',
    });
  }

  public updateMenuDatas(
    data: {
      key: string;
      translationData?: object;
      options?: { notificationBadge: { label: number; style?: string } };
      visible$?: Observable<boolean>;
    }[]
  ) {
    for (const item of data) {
      const itemToModify = this._items.find(x => this._getKey(x.label) === item.key);
      if (itemToModify) {
        itemToModify.translationData = item.translationData;
        itemToModify.options = item.options;
        if (item.visible$) {
          itemToModify.visible$ = item.visible$;
        }
      }
    }
  }

  private _getKey(label: string): string {
    const lastDot = label.lastIndexOf('.');
    if (lastDot !== -1) {
      return label.substring(lastDot + 1);
    } else {
      return label;
    }
  }
}
