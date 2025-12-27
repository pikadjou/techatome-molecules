import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../text/text.component';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: "value", max: "max", size: "size", color: "color", emptyColor: "emptyColor", readonly: "readonly", showHover: "showHover" }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "<div class=\"flex-row align-center g-space-sm\">\n  <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n    @for (star of this.stars; track star) {\n      <div\n        class=\"ta-rating-star\"\n        [ngClass]=\"{ 'ta-rating-star--readonly': readonly }\"\n        [ngStyle]=\"{ width: size + 'px', height: size + 'px' }\"\n        (click)=\"this.onStarClick(star)\"\n        (mouseenter)=\"this.onStarHover(star)\"\n      >\n        <!-- Background star (empty) -->\n        <svg\n          class=\"ta-rating-star-bg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"size\"\n          [attr.height]=\"size\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"emptyColor\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n\n        <!-- Foreground star (filled) with clip-path for partial fill -->\n        <svg\n          class=\"ta-rating-star-fg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"size\"\n          [attr.height]=\"size\"\n          [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"color\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n      </div>\n    }\n  </div>\n  <ta-text>{{ this.value }} / {{ this.max }}</ta-text>\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent], template: "<div class=\"flex-row align-center g-space-sm\">\n  <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n    @for (star of this.stars; track star) {\n      <div\n        class=\"ta-rating-star\"\n        [ngClass]=\"{ 'ta-rating-star--readonly': readonly }\"\n        [ngStyle]=\"{ width: size + 'px', height: size + 'px' }\"\n        (click)=\"this.onStarClick(star)\"\n        (mouseenter)=\"this.onStarHover(star)\"\n      >\n        <!-- Background star (empty) -->\n        <svg\n          class=\"ta-rating-star-bg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"size\"\n          [attr.height]=\"size\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"emptyColor\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n\n        <!-- Foreground star (filled) with clip-path for partial fill -->\n        <svg\n          class=\"ta-rating-star-fg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"size\"\n          [attr.height]=\"size\"\n          [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"color\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n      </div>\n    }\n  </div>\n  <ta-text>{{ this.value }} / {{ this.max }}</ta-text>\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBU3ZELE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUUU7O1dBRUc7UUFFSCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCOztXQUVHO1FBRUgsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUVoQjs7V0FFRztRQUVILFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEI7O1dBRUc7UUFFSCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBRTFCOztXQUVHO1FBRUgsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUUvQjs7V0FFRztRQUVILGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUI7O1dBRUc7UUFFSCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCOztXQUVHO1FBRUgsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTFDOztXQUVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxDLGtCQUFhLEdBQWtCLElBQUksQ0FBQztLQXdENUM7SUF0REMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBQyxJQUFZO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4RCxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7YUFBTSxJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckMsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7K0dBOUdVLGVBQWU7bUdBQWYsZUFBZSwwUkNaNUIsOG1EQTJDQSw4aEJEakNZLE9BQU8sb0ZBQUUsT0FBTywyRUFBRSxhQUFhOzs0RkFFOUIsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxXQUFXLGNBR1QsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUM7OEJBTzFDLEtBQUs7c0JBREosS0FBSztnQkFPTixHQUFHO3NCQURGLEtBQUs7Z0JBT04sSUFBSTtzQkFESCxLQUFLO2dCQU9OLEtBQUs7c0JBREosS0FBSztnQkFPTixVQUFVO3NCQURULEtBQUs7Z0JBT04sUUFBUTtzQkFEUCxLQUFLO2dCQU9OLFNBQVM7c0JBRFIsS0FBSztnQkFPTixZQUFZO3NCQURYLE1BQU07Z0JBT1AsV0FBVztzQkFEVixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE5nU3R5bGUsIFRleHRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xuICAvKipcbiAgICogQ3VycmVudCByYXRpbmcgdmFsdWUgKHN1cHBvcnRzIGRlY2ltYWxzIGZvciBwYXJ0aWFsIHN0YXJzKVxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHN0YXJzXG4gICAqL1xuICBASW5wdXQoKVxuICBtYXg6IG51bWJlciA9IDU7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHN0YXJzIGluIHBpeGVsc1xuICAgKi9cbiAgQElucHV0KClcbiAgc2l6ZTogbnVtYmVyID0gMjQ7XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIGZpbGxlZCBzdGFyc1xuICAgKi9cbiAgQElucHV0KClcbiAgY29sb3I6IHN0cmluZyA9ICcjZmJiZjI0JztcblxuICAvKipcbiAgICogQ29sb3Igb2YgZW1wdHkgc3RhcnNcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVtcHR5Q29sb3I6IHN0cmluZyA9ICcjZDFkNWRiJztcblxuICAvKipcbiAgICogUmVhZC1vbmx5IG1vZGUgKG5vIGNsaWNrIGludGVyYWN0aW9ucylcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNob3cgaG92ZXIgZWZmZWN0XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93SG92ZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgbmV3IHJhdGluZyB2YWx1ZSB3aGVuIGEgc3RhciBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmF0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gaG92ZXJpbmcgb3ZlciBhIHN0YXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBob3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIHB1YmxpYyBob3ZlcmVkUmF0aW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBnZXQgc3RhcnMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWF4IH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbGwgcGVyY2VudGFnZSBmb3IgYSBzdGFyICgwLTEwMClcbiAgICovXG4gIHB1YmxpYyBnZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBlZmZlY3RpdmVWYWx1ZSA9IHRoaXMuaG92ZXJlZFJhdGluZyA/PyB0aGlzLnZhbHVlO1xuXG4gICAgaWYgKGVmZmVjdGl2ZVZhbHVlID49IHN0YXIpIHtcbiAgICAgIHJldHVybiAxMDA7XG4gICAgfSBlbHNlIGlmIChlZmZlY3RpdmVWYWx1ZSA+IHN0YXIgLSAxKSB7XG4gICAgICByZXR1cm4gKGVmZmVjdGl2ZVZhbHVlIC0gKHN0YXIgLSAxKSkgKiAxMDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdGFyIGNsaWNrXG4gICAqL1xuICBwdWJsaWMgb25TdGFyQ2xpY2soc3RhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLnZhbHVlID0gc3RhcjtcbiAgICAgIHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQoc3Rhcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdGFyIGhvdmVyXG4gICAqL1xuICBwdWJsaWMgb25TdGFySG92ZXIoc3RhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5ICYmIHRoaXMuc2hvd0hvdmVyKSB7XG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBzdGFyO1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHN0YXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2UgbGVhdmVcbiAgICovXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gbnVsbDtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdGhpcy5zaG93SG92ZXIpIHtcbiAgICAgIHRoaXMuaG92ZXJDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnNvciBzdHlsZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnNvclN0eWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHkgPyAnZGVmYXVsdCcgOiAncG9pbnRlcic7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXIgZy1zcGFjZS1zbVwiPlxuICA8ZGl2IGNsYXNzPVwidGEtcmF0aW5nLWNvbnRhaW5lclwiIChtb3VzZWxlYXZlKT1cInRoaXMub25Nb3VzZUxlYXZlKClcIiBbbmdTdHlsZV09XCJ7IGN1cnNvcjogdGhpcy5nZXRDdXJzb3JTdHlsZSgpIH1cIj5cbiAgICBAZm9yIChzdGFyIG9mIHRoaXMuc3RhcnM7IHRyYWNrIHN0YXIpIHtcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3RhclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ3RhLXJhdGluZy1zdGFyLS1yZWFkb25seSc6IHJlYWRvbmx5IH1cIlxuICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiBzaXplICsgJ3B4JywgaGVpZ2h0OiBzaXplICsgJ3B4JyB9XCJcbiAgICAgICAgKGNsaWNrKT1cInRoaXMub25TdGFyQ2xpY2soc3RhcilcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJ0aGlzLm9uU3RhckhvdmVyKHN0YXIpXCJcbiAgICAgID5cbiAgICAgICAgPCEtLSBCYWNrZ3JvdW5kIHN0YXIgKGVtcHR5KSAtLT5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItYmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIFthdHRyLndpZHRoXT1cInNpemVcIlxuICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzaXplXCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBbYXR0ci5maWxsXT1cImVtcHR5Q29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPCEtLSBGb3JlZ3JvdW5kIHN0YXIgKGZpbGxlZCkgd2l0aCBjbGlwLXBhdGggZm9yIHBhcnRpYWwgZmlsbCAtLT5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItZmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIFthdHRyLndpZHRoXT1cInNpemVcIlxuICAgICAgICAgIFthdHRyLmhlaWdodF09XCJzaXplXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7ICdjbGlwLXBhdGgnOiAnaW5zZXQoMCAnICsgKDEwMCAtIHRoaXMuZ2V0U3RhckZpbGxQZXJjZW50YWdlKHN0YXIpKSArICclIDAgMCknIH1cIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIFthdHRyLmZpbGxdPVwiY29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuICA8dGEtdGV4dD57eyB0aGlzLnZhbHVlIH19IC8ge3sgdGhpcy5tYXggfX08L3RhLXRleHQ+XG48L2Rpdj5cbiJdfQ==