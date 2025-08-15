import { Component } from '@angular/core';

import { TaBaseComponent } from '@ta/utils';
import { TitleComponent } from "../../../../components/title/title.component";
import { LogoComponent } from "../../../../components/logo/logo.component";

@Component({
  selector: 'ta-layout-header-default',
  templateUrl: './layout-header-default.component.html',
  styleUrls: ['./layout-header-default.component.scss'],
  standalone: true,
  imports: [TitleComponent, LogoComponent]
})
export class LayoutHeaderDefaultComponent extends TaBaseComponent {

  public goToHome() {
    this._router.navigateByUrl('/');
  }
}
