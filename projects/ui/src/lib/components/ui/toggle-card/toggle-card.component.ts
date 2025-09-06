import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ta-toggle-card',
  templateUrl: './toggle-card.component.html',
  styleUrls: ['./toggle-card.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ToggleCardComponent {
  @Input()
  title: string = '';

  @Input()
  description?: string;

  @Input()
  icon?: string;

  @Input()
  isActive: boolean = false;

  @Input()
  disabled: boolean = false;

  @Output()
  toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public onToggle() {
    if (!this.disabled) {
      this.isActive = !this.isActive;
      this.toggle.emit(this.isActive);
    }
  }
}