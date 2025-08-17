import { NgIf, NgFor } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, inject } from '@angular/core';

import { CamTranslationService } from '@ta/translation';

@Component({
selector: 'ta-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, FontIconComponent],
})
export class SwitchLanguageComponent {
  readonly translateService = inject(CamTranslationService);
  readonly languages = [
    { id: 'fr', name: 'Français' },
    { id: 'nl', name: 'Nederlands' },
    { id: 'en', name: 'English' },
    { id: 'es', name: 'Español' },
  ];

  public activeLanguage = this.translateService.getLanguage();
  public changeLanguageAsked: boolean = false;

  public changeLanguage(language: string) {
    if (this.activeLanguage != language) {
      this.activeLanguage = language;
      this.changeLanguageAsked = true;
      this.translateService.use(language);
    }
  }
}
