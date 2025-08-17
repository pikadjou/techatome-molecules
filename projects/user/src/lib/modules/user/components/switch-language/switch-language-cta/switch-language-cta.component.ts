import { FontIconComponent } from '@ta/icons';
import { Component, inject } from '@angular/core';

import { CamTranslationService } from '@ta/translation';

@Component({
selector: 'ta-switch-language-cta',
  templateUrl: './switch-language-cta.component.html',
  styleUrls: ['./switch-language-cta.component.scss'],,
  standalone: true,
  imports: [FontIconComponent],
})
export class SwitchLanguageCtaComponent {
  readonly translateService = inject(CamTranslationService);

  public activeLanguage = this.translateService.getLanguage();
}
