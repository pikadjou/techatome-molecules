import { Component, input, output } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

/** Case à cocher hors formulaire ; dans un formulaire, utiliser `ta-input-checkbox`. */
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
