import { Component, OnDestroy } from '@angular/core';

import { CamAbstractComponent } from './abstractComponent';

@Component({ template: '' })
export abstract class CamBaseComponent extends CamAbstractComponent implements OnDestroy {
  constructor() {
    super();
  }

  public trackById(_: any, item: { id: number | string }) {
    return item.id;
  }

  public trackByKey(_: any, item: { key: string }) {
    return item.key;
  }
}
