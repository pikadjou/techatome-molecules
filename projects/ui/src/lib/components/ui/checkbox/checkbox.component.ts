import { Component, input, output } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

/**
 * Case à cocher autonome, hors formulaire : consentement, filtre, bascule d'une
 * option isolée. Dans un formulaire, c'est `ta-input-checkbox` qui s'impose —
 * lui seul est relié au modèle.
 */
@Component({
  selector: 'ta-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [FontIconComponent],
})
export class CheckboxComponent {
  checked = input<boolean>(false);

  disabled = input<boolean>(false);

  checkedChange = output<boolean>();

  public toggle(): void {
    if (this.disabled()) return;
    this.checkedChange.emit(!this.checked());
  }
}
