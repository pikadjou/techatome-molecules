import { BehaviorSubject, Observable, filter, map, tap } from 'rxjs';

import { isNonNullable } from '@ta/utils';

export class HandleComplexRequest<T> {
  public data$ = new BehaviorSubject<{ [index: string | number]: T }>({});

  constructor() {}

  public fetch(id: string | number, subscriber: Observable<T>) {
    return subscriber.pipe(
      filter(data => !!data),
      tap(entity => {
        const entities = this.data$.getValue();
        entities[id] = entity;
        this.data$.next(entities);
      })
    );
  }

  public update(id: string | number, item: T, merge: boolean = true) {
    const entities = this.data$.getValue();

    if (!entities[id]) {
      return;
    }
    entities[id] = merge ? { ...entities[id], ...item } : item;
    this.data$.next(entities);
  }
  public get(key: string | number) {
    return this.data$.getValue()[key] ?? null;
  }

  public get$(key: string | number) {
    return this.data$.pipe(
      map(data => data[key]),
      filter(data => !!data)
    );
  }
}

export class HandleSimpleRequest<T> {
  public data$ = new BehaviorSubject<T | null>(null);

  constructor() {}

  public fetch(subscriber: Observable<T | undefined | null>) {
    return subscriber.pipe(
      filter(isNonNullable),
      tap(entity => {
        this.data$.next(entity);
      })
    );
  }
  public get() {
    return this.data$.getValue() ?? null;
  }

  public get$() {
    return this.data$.pipe(filter(data => !!data));
  }
}
