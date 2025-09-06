import { Component, inject } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

import { FontIconComponent } from '@ta/icons';
import { TaTranslationService } from '@ta/translation';

import { SwitchLanguageComponent } from '../switch-language.component';

@Component({
  selector: 'ta-switch-language-cta',
  templateUrl: './switch-language-cta.component.html',
  styleUrls: ['./switch-language-cta.component.scss'],
  standalone: true,
  imports: [FontIconComponent, MatMenu, SwitchLanguageComponent, MatMenuTrigger],
})
export class SwitchLanguageCtaComponent {
  readonly translateService = inject(TaTranslationService);

  public activeLanguage = this.translateService.getLanguage();
}
