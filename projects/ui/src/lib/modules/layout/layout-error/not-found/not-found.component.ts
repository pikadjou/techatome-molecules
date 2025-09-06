import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';

import { ButtonComponent } from '../../../../components/ui/button/button.component';
import { TaTranslationLayout } from '../../translation.service';

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
    TaTranslationLayout.getInstance();
  }

  public goToHome() {
    this._router.navigateByUrl('/');
  }
}
