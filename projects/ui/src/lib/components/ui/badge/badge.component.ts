import { Component, EventEmitter, Input, Output } from '@angular/core';

export type BadgeType = 'danger' | 'warning' | 'success' | 'primary' | 'secondary' | 'info' | 'purple' | 'orange';
@Component({
  selector: 'cam-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  /**
   * Text to display in badge
   */
  @Input()
  value!: string;

  /**
   * Style of badge
   */
  @Input()
  type: BadgeType = 'primary';

  /**
   * @deprecated
   * showClickOption
   */
  @Input()
  showClickOption = false;

  @Input()
  icon?: string;

  @Output()
  clickAction = new EventEmitter();

  constructor() {}

  public getClass(): string {
    return `badge-${this.type}`;
  }

  public click() {
    this.clickAction.emit();
  }
}
