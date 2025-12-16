import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RatingComponent {
    /**
     * Current rating value (supports decimals for partial stars)
     */
    value: number;
    /**
     * Maximum number of stars
     */
    max: number;
    /**
     * Size of the stars in pixels
     */
    size: number;
    /**
     * Color of filled stars
     */
    color: string;
    /**
     * Color of empty stars
     */
    emptyColor: string;
    /**
     * Read-only mode (no click interactions)
     */
    readonly: boolean;
    /**
     * Show hover effect
     */
    showHover: boolean;
    /**
     * Emits the new rating value when a star is clicked
     */
    ratingChange: EventEmitter<number>;
    /**
     * Emits when hovering over a star
     */
    hoverChange: EventEmitter<number>;
    hoveredRating: number | null;
    get stars(): number[];
    /**
     * Get fill percentage for a star (0-100)
     */
    getStarFillPercentage(star: number): number;
    /**
     * Handle star click
     */
    onStarClick(star: number): void;
    /**
     * Handle star hover
     */
    onStarHover(star: number): void;
    /**
     * Handle mouse leave
     */
    onMouseLeave(): void;
    /**
     * Get cursor style
     */
    getCursorStyle(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "ta-rating", never, { "value": { "alias": "value"; "required": false; }; "max": { "alias": "max"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "emptyColor": { "alias": "emptyColor"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "showHover": { "alias": "showHover"; "required": false; }; }, { "ratingChange": "ratingChange"; "hoverChange": "hoverChange"; }, never, never, true, never>;
}
