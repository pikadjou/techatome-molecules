import { Component } from '@angular/core';

import { TaAbstractComponent } from './abstractComponent';

@Component({ template: '' })
export abstract class CamBaseModal extends TaAbstractComponent {
  constructor() {
    super();
  }
}
