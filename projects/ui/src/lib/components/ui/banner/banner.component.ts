import { Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TranslatePipe } from '@ta/translation';
import { TaBaseComponent } from '@ta/utils';

import { TaTranslationUI } from '../translation.service';

@Component({
  selector: 'ta-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [TranslatePipe, TranslateModule],
})
export class BannerComponent extends TaBaseComponent {
  @Input()
  message!: string;

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }
}
