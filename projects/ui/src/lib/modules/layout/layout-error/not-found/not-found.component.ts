import { Component } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-layout-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class LayoutNotFoundComponent extends CamBaseComponent {
  constructor() {
    super();
  }

  public goToHome() {
    this._router.navigateByUrl('/');
  }
}
