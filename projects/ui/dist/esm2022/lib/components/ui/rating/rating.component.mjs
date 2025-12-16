import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class RatingComponent {
    constructor() {
        /**
         * Current rating value (supports decimals for partial stars)
         */
        this.value = 0;
        /**
         * Maximum number of stars
         */
        this.max = 5;
        /**
         * Size of the stars in pixels
         */
        this.size = 24;
        /**
         * Color of filled stars
         */
        this.color = '#fbbf24';
        /**
         * Color of empty stars
         */
        this.emptyColor = '#d1d5db';
        /**
         * Read-only mode (no click interactions)
         */
        this.readonly = false;
        /**
         * Show hover effect
         */
        this.showHover = true;
        /**
         * Emits the new rating value when a star is clicked
         */
        this.ratingChange = new EventEmitter();
        /**
         * Emits when hovering over a star
         */
        this.hoverChange = new EventEmitter();
        this.hoveredRating = null;
    }
    get stars() {
        return Array.from({ length: this.max }, (_, i) => i + 1);
    }
    /**
     * Get fill percentage for a star (0-100)
     */
    getStarFillPercentage(star) {
        const effectiveValue = this.hoveredRating ?? this.value;
        if (effectiveValue >= star) {
            return 100;
        }
        else if (effectiveValue > star - 1) {
            return (effectiveValue - (star - 1)) * 100;
        }
        return 0;
    }
    /**
     * Handle star click
     */
    onStarClick(star) {
        if (!this.readonly) {
            this.value = star;
            this.ratingChange.emit(star);
        }
    }
    /**
     * Handle star hover
     */
    onStarHover(star) {
        if (!this.readonly && this.showHover) {
            this.hoveredRating = star;
            this.hoverChange.emit(star);
        }
    }
    /**
     * Handle mouse leave
     */
    onMouseLeave() {
        this.hoveredRating = null;
        if (!this.readonly && this.showHover) {
            this.hoverChange.emit(this.value);
        }
    }
    /**
     * Get cursor style
     */
    getCursorStyle() {
        return this.readonly ? 'default' : 'pointer';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: "value", max: "max", size: "size", color: "color", emptyColor: "emptyColor", readonly: "readonly", showHover: "showHover" }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "<div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n  @for (star of this.stars; track star) {\n    <div\n      class=\"ta-rating-star\"\n      [ngClass]=\"{ 'ta-rating-star--readonly': readonly }\"\n      [ngStyle]=\"{ width: size + 'px', height: size + 'px' }\"\n      (click)=\"this.onStarClick(star)\"\n      (mouseenter)=\"this.onStarHover(star)\"\n    >\n      <!-- Background star (empty) -->\n      <svg\n        class=\"ta-rating-star-bg\"\n        viewBox=\"0 0 24 24\"\n        [attr.width]=\"size\"\n        [attr.height]=\"size\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          [attr.fill]=\"emptyColor\"\n          d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n        />\n      </svg>\n\n      <!-- Foreground star (filled) with clip-path for partial fill -->\n      <svg\n        class=\"ta-rating-star-fg\"\n        viewBox=\"0 0 24 24\"\n        [attr.width]=\"size\"\n        [attr.height]=\"size\"\n        [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          [attr.fill]=\"color\"\n          d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n        />\n      </svg>\n    </div>\n  }\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgFor, NgClass, NgStyle], template: "<div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n  @for (star of this.stars; track star) {\n    <div\n      class=\"ta-rating-star\"\n      [ngClass]=\"{ 'ta-rating-star--readonly': readonly }\"\n      [ngStyle]=\"{ width: size + 'px', height: size + 'px' }\"\n      (click)=\"this.onStarClick(star)\"\n      (mouseenter)=\"this.onStarHover(star)\"\n    >\n      <!-- Background star (empty) -->\n      <svg\n        class=\"ta-rating-star-bg\"\n        viewBox=\"0 0 24 24\"\n        [attr.width]=\"size\"\n        [attr.height]=\"size\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          [attr.fill]=\"emptyColor\"\n          d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n        />\n      </svg>\n\n      <!-- Foreground star (filled) with clip-path for partial fill -->\n      <svg\n        class=\"ta-rating-star-fg\"\n        viewBox=\"0 0 24 24\"\n        [attr.width]=\"size\"\n        [attr.height]=\"size\"\n        [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <path\n          [attr.fill]=\"color\"\n          d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n        />\n      </svg>\n    </div>\n  }\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], emptyColor: [{
                type: Input
            }], readonly: [{
                type: Input
            }], showHover: [{
                type: Input
            }], ratingChange: [{
                type: Output
            }], hoverChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBU3ZFLE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUUU7O1dBRUc7UUFFSCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCOztXQUVHO1FBRUgsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUVoQjs7V0FFRztRQUVILFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEI7O1dBRUc7UUFFSCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBRTFCOztXQUVHO1FBRUgsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUUvQjs7V0FFRztRQUVILGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUI7O1dBRUc7UUFFSCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCOztXQUVHO1FBRUgsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTFDOztXQUVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxDLGtCQUFhLEdBQWtCLElBQUksQ0FBQztLQXdENUM7SUF0REMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBQyxJQUFZO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4RCxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7YUFBTSxJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckMsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7K0dBOUdVLGVBQWU7bUdBQWYsZUFBZSwwUkNWNUIsODZDQXdDQSw4aEJEaENtQixPQUFPLG9GQUFFLE9BQU87OzRGQUV0QixlQUFlO2tCQVAzQixTQUFTOytCQUNFLFdBQVcsY0FHVCxJQUFJLFdBQ1AsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQzs4QkFPbEMsS0FBSztzQkFESixLQUFLO2dCQU9OLEdBQUc7c0JBREYsS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBT04sS0FBSztzQkFESixLQUFLO2dCQU9OLFVBQVU7c0JBRFQsS0FBSztnQkFPTixRQUFRO3NCQURQLEtBQUs7Z0JBT04sU0FBUztzQkFEUixLQUFLO2dCQU9OLFlBQVk7c0JBRFgsTUFBTTtnQkFPUCxXQUFXO3NCQURWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzLCBOZ0ZvciwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0ZvciwgTmdDbGFzcywgTmdTdHlsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDdXJyZW50IHJhdGluZyB2YWx1ZSAoc3VwcG9ydHMgZGVjaW1hbHMgZm9yIHBhcnRpYWwgc3RhcnMpXG4gICAqL1xuICBASW5wdXQoKVxuICB2YWx1ZTogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygc3RhcnNcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heDogbnVtYmVyID0gNTtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgc3RhcnMgaW4gcGl4ZWxzXG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplOiBudW1iZXIgPSAyNDtcblxuICAvKipcbiAgICogQ29sb3Igb2YgZmlsbGVkIHN0YXJzXG4gICAqL1xuICBASW5wdXQoKVxuICBjb2xvcjogc3RyaW5nID0gJyNmYmJmMjQnO1xuXG4gIC8qKlxuICAgKiBDb2xvciBvZiBlbXB0eSBzdGFyc1xuICAgKi9cbiAgQElucHV0KClcbiAgZW1wdHlDb2xvcjogc3RyaW5nID0gJyNkMWQ1ZGInO1xuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkgbW9kZSAobm8gY2xpY2sgaW50ZXJhY3Rpb25zKVxuICAgKi9cbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2hvdyBob3ZlciBlZmZlY3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dIb3ZlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBuZXcgcmF0aW5nIHZhbHVlIHdoZW4gYSBzdGFyIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBob3ZlcmluZyBvdmVyIGEgc3RhclxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHVibGljIGhvdmVyZWRSYXRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBzdGFycygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5tYXggfSwgKF8sIGkpID0+IGkgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZmlsbCBwZXJjZW50YWdlIGZvciBhIHN0YXIgKDAtMTAwKVxuICAgKi9cbiAgcHVibGljIGdldFN0YXJGaWxsUGVyY2VudGFnZShzdGFyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGVmZmVjdGl2ZVZhbHVlID0gdGhpcy5ob3ZlcmVkUmF0aW5nID8/IHRoaXMudmFsdWU7XG5cbiAgICBpZiAoZWZmZWN0aXZlVmFsdWUgPj0gc3Rhcikge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9IGVsc2UgaWYgKGVmZmVjdGl2ZVZhbHVlID4gc3RhciAtIDEpIHtcbiAgICAgIHJldHVybiAoZWZmZWN0aXZlVmFsdWUgLSAoc3RhciAtIDEpKSAqIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgY2xpY2tcbiAgICovXG4gIHB1YmxpYyBvblN0YXJDbGljayhzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBzdGFyO1xuICAgICAgdGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgaG92ZXJcbiAgICovXG4gIHB1YmxpYyBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdGhpcy5zaG93SG92ZXIpIHtcbiAgICAgIHRoaXMuaG92ZXJlZFJhdGluZyA9IHN0YXI7XG4gICAgICB0aGlzLmhvdmVyQ2hhbmdlLmVtaXQoc3Rhcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZSBsZWF2ZVxuICAgKi9cbiAgcHVibGljIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBudWxsO1xuICAgIGlmICghdGhpcy5yZWFkb25seSAmJiB0aGlzLnNob3dIb3Zlcikge1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3Vyc29yIHN0eWxlXG4gICAqL1xuICBwdWJsaWMgZ2V0Q3Vyc29yU3R5bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkb25seSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRhLXJhdGluZy1jb250YWluZXJcIiAobW91c2VsZWF2ZSk9XCJ0aGlzLm9uTW91c2VMZWF2ZSgpXCIgW25nU3R5bGVdPVwieyBjdXJzb3I6IHRoaXMuZ2V0Q3Vyc29yU3R5bGUoKSB9XCI+XG4gIEBmb3IgKHN0YXIgb2YgdGhpcy5zdGFyczsgdHJhY2sgc3Rhcikge1xuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXJcIlxuICAgICAgW25nQ2xhc3NdPVwieyAndGEtcmF0aW5nLXN0YXItLXJlYWRvbmx5JzogcmVhZG9ubHkgfVwiXG4gICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiBzaXplICsgJ3B4JywgaGVpZ2h0OiBzaXplICsgJ3B4JyB9XCJcbiAgICAgIChjbGljayk9XCJ0aGlzLm9uU3RhckNsaWNrKHN0YXIpXCJcbiAgICAgIChtb3VzZWVudGVyKT1cInRoaXMub25TdGFySG92ZXIoc3RhcilcIlxuICAgID5cbiAgICAgIDwhLS0gQmFja2dyb3VuZCBzdGFyIChlbXB0eSkgLS0+XG4gICAgICA8c3ZnXG4gICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItYmdcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgW2F0dHIud2lkdGhdPVwic2l6ZVwiXG4gICAgICAgIFthdHRyLmhlaWdodF09XCJzaXplXCJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgW2F0dHIuZmlsbF09XCJlbXB0eUNvbG9yXCJcbiAgICAgICAgICBkPVwiTTEyIDJMMTUuMDkgOC4yNkwyMiA5LjI3TDE3IDE0LjE0TDE4LjE4IDIxLjAyTDEyIDE3Ljc3TDUuODIgMjEuMDJMNyAxNC4xNEwyIDkuMjdMOC45MSA4LjI2TDEyIDJaXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuXG4gICAgICA8IS0tIEZvcmVncm91bmQgc3RhciAoZmlsbGVkKSB3aXRoIGNsaXAtcGF0aCBmb3IgcGFydGlhbCBmaWxsIC0tPlxuICAgICAgPHN2Z1xuICAgICAgICBjbGFzcz1cInRhLXJhdGluZy1zdGFyLWZnXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIFthdHRyLndpZHRoXT1cInNpemVcIlxuICAgICAgICBbYXR0ci5oZWlnaHRdPVwic2l6ZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgJ2NsaXAtcGF0aCc6ICdpbnNldCgwICcgKyAoMTAwIC0gdGhpcy5nZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcikpICsgJyUgMCAwKScgfVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIFthdHRyLmZpbGxdPVwiY29sb3JcIlxuICAgICAgICAgIGQ9XCJNMTIgMkwxNS4wOSA4LjI2TDIyIDkuMjdMMTcgMTQuMTRMMTguMTggMjEuMDJMMTIgMTcuNzdMNS44MiAyMS4wMkw3IDE0LjE0TDIgOS4yN0w4LjkxIDguMjZMMTIgMlpcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19