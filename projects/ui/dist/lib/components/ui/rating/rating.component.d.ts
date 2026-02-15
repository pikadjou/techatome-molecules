import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RatingComponent {
    constructor();
    /**
     * Current rating value (supports decimals for partial stars)
     */
    value: import("@angular/core").InputSignal<number>;
    /**
     * Maximum number of stars
     */
    max: import("@angular/core").InputSignal<number>;
    /**
     * Size of the stars in pixels
     */
    size: import("@angular/core").InputSignal<number>;
    /**
     * Color of filled stars
     */
    color: import("@angular/core").InputSignal<string>;
    /**
     * Color of empty stars
     */
    emptyColor: import("@angular/core").InputSignal<string>;
    /**
     * Read-only mode (no click interactions)
     */
    readonly: import("@angular/core").InputSignal<boolean>;
    /**
     * Show hover effect
     */
    showHover: import("@angular/core").InputSignal<boolean>;
    /**
     * Show hover effect
     */
    containerClass: import("@angular/core").InputSignal<string>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "ta-rating", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "color": { "alias": "color"; "required": false; "isSignal": true; }; "emptyColor": { "alias": "emptyColor"; "required": false; "isSignal": true; }; "readonly": { "alias": "readonly"; "required": false; "isSignal": true; }; "showHover": { "alias": "showHover"; "required": false; "isSignal": true; }; "containerClass": { "alias": "containerClass"; "required": false; "isSignal": true; }; }, { "ratingChange": "ratingChange"; "hoverChange": "hoverChange"; }, never, never, true, never>;
}
