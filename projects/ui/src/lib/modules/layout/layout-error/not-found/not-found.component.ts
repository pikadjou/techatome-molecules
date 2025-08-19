import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { CamTranslationLayout } from '../../translation.service';

import { ButtonComponent } from '../../../../components/ui/button/button.component';

@Component({
  selector: 'ta-layout-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [FontIconComponent, TranslateModule, ButtonComponent],
})
export class LayoutNotFoundComponent extends TaBaseComponent {
  constructor() {
    super();
    CamTranslationLayout.getInstance();
  }

  public goToHome() {
    this._router.navigateByUrl('/');
  }
}
