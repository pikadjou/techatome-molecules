import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaTranslationUI } from '../../../translation.service';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'ta-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle, TextComponent, TranslateModule],
})
export class RatingComponent {
  constructor() {
    TaTranslationUI.getInstance();
  }
  /**
   * Current rating value (supports decimals for partial stars)
   */
  value = input<number>(0);

  /**
   * Maximum number of stars
   */
  max = input<number>(5);

  /**
   * Size of the stars in pixels
   */
  size = input<number>(24);

  /**
   * Color of filled stars
   */
  color = input<string>('#fbbf24');

  /**
   * Color of empty stars
   */
  emptyColor = input<string>('#d1d5db');

  /**
   * Read-only mode (no click interactions)
   */
  readonly = input<boolean>(false);

  /**
   * Show hover effect
   */
  showHover = input<boolean>(true);

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
    return Array.from({ length: this.max() }, (_, i) => i + 1);
  }

  /**
   * Get fill percentage for a star (0-100)
   */
  public getStarFillPercentage(star: number): number {
    const effectiveValue = this.hoveredRating ?? this.value();

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
    if (!this.readonly()) {
      this.ratingChange.emit(star);
    }
  }

  /**
   * Handle star hover
   */
  public onStarHover(star: number): void {
    if (!this.readonly() && this.showHover()) {
      this.hoveredRating = star;
      this.hoverChange.emit(star);
    }
  }

  /**
   * Handle mouse leave
   */
  public onMouseLeave(): void {
    this.hoveredRating = null;
    if (!this.readonly() && this.showHover()) {
      this.hoverChange.emit(this.value());
    }
  }

  /**
   * Get cursor style
   */
  public getCursorStyle(): string {
    return this.readonly() ? 'default' : 'pointer';
  }
}
