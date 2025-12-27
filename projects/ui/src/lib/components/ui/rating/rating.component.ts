import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TextComponent } from '../text/text.component';

@Component({
  selector: 'ta-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle, TextComponent],
})
export class RatingComponent {
  /**
   * Current rating value (supports decimals for partial stars)
   */
  @Input()
  value: number = 0;

  /**
   * Maximum number of stars
   */
  @Input()
  max: number = 5;

  /**
   * Size of the stars in pixels
   */
  @Input()
  size: number = 24;

  /**
   * Color of filled stars
   */
  @Input()
  color: string = '#fbbf24';

  /**
   * Color of empty stars
   */
  @Input()
  emptyColor: string = '#d1d5db';

  /**
   * Read-only mode (no click interactions)
   */
  @Input()
  readonly: boolean = false;

  /**
   * Show hover effect
   */
  @Input()
  showHover: boolean = true;

  /**
   * Emits the new rating value when a star is clicked
   */
  @Output()
  ratingChange = new EventEmitter<number>();

  /**
   * Emits when hovering over a star
   */
  @Output()
  hoverChange = new EventEmitter<number>();

  public hoveredRating: number | null = null;

  get stars() {
    return Array.from({ length: this.max }, (_, i) => i + 1);
  }

  /**
   * Get fill percentage for a star (0-100)
   */
  public getStarFillPercentage(star: number): number {
    const effectiveValue = this.hoveredRating ?? this.value;

    if (effectiveValue >= star) {
      return 100;
    } else if (effectiveValue > star - 1) {
      return (effectiveValue - (star - 1)) * 100;
    }
    return 0;
  }

  /**
   * Handle star click
   */
  public onStarClick(star: number): void {
    if (!this.readonly) {
      this.value = star;
      this.ratingChange.emit(star);
    }
  }

  /**
   * Handle star hover
   */
  public onStarHover(star: number): void {
    if (!this.readonly && this.showHover) {
      this.hoveredRating = star;
      this.hoverChange.emit(star);
    }
  }

  /**
   * Handle mouse leave
   */
  public onMouseLeave(): void {
    this.hoveredRating = null;
    if (!this.readonly && this.showHover) {
      this.hoverChange.emit(this.value);
    }
  }

  /**
   * Get cursor style
   */
  public getCursorStyle(): string {
    return this.readonly ? 'default' : 'pointer';
  }
}
