import { Component } from '@angular/core';

import { SwitchLanguageComponent } from '../switch-language.component';

@Component({
  selector: 'ta-switch-language-cta',
  template: `<ta-switch-language mode="modal"></ta-switch-language>`,
  standalone: true,
  imports: [SwitchLanguageComponent],
})
export class SwitchLanguageCtaComponent {}
