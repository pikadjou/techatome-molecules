import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MessageLevel, TranslatePipe } from '@ta/utils';

@Component({
  selector: 'ta-typed-message',
  templateUrl: './typed-message.component.html',
  styleUrls: ['./typed-message.component.scss'],
  standalone: true,
  imports: [MatIconModule, TranslatePipe]
})
export class TypedMessageComponent {
  @Input() text!: string;
  @Input() type!: MessageLevel;

  get icon() {
    switch (this.type) {
      case 'danger':
        return 'error_outline';
      case 'success':
        return 'check_circle_outline';
      case 'info':
        return 'help_outline';
      case 'warning':
        return 'warning_amber';
      default:
        return '';
    }
  }
}
