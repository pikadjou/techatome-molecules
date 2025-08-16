import { Component, inject } from '@angular/core';

import { CamTranslationService } from '@camelot/translation';

@Component({
  selector: 'cam-switch-language-cta',
  templateUrl: './switch-language-cta.component.html',
  styleUrls: ['./switch-language-cta.component.scss'],
})
export class SwitchLanguageCtaComponent {
  readonly translateService = inject(CamTranslationService);

  public activeLanguage = this.translateService.getLanguage();
}
