import { Component } from '@angular/core';

import { CamAbstractComponent } from './abstractComponent';

@Component({ template: '' })
export abstract class CamBaseModal extends CamAbstractComponent {
  constructor() {
    super();
  }
}
