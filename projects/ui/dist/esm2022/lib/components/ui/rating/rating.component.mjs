import { NgClass, NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TaTranslationUI } from '../../../translation.service';
import { TextComponent } from '../text/text.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class RatingComponent {
    constructor() {
        /**
         * Current rating value (supports decimals for partial stars)
         */
        this.value = input(0);
        /**
         * Maximum number of stars
         */
        this.max = input(5);
        /**
         * Size of the stars in pixels
         */
        this.size = input(24);
        /**
         * Color of filled stars
         */
        this.color = input('#fbbf24');
        /**
         * Color of empty stars
         */
        this.emptyColor = input('#d1d5db');
        /**
         * Read-only mode (no click interactions)
         */
        this.readonly = input(false);
        /**
         * Show hover effect
         */
        this.showHover = input(true);
        /**
         * Show hover effect
         */
        this.containerClass = input('flex-row');
        /**
         * Emits the new rating value when a star is clicked
         */
        this.ratingChange = output();
        /**
         * Emits when hovering over a star
         */
        this.hoverChange = output();
        this.hoveredRating = null;
        TaTranslationUI.getInstance();
    }
    get stars() {
        return Array.from({ length: this.max() }, (_, i) => i + 1);
    }
    /**
     * Get fill percentage for a star (0-100)
     */
    getStarFillPercentage(star) {
        const effectiveValue = this.hoveredRating ?? this.value();
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
        if (!this.readonly()) {
            this.ratingChange.emit(star);
        }
    }
    /**
     * Handle star hover
     */
    onStarHover(star) {
        if (!this.readonly() && this.showHover()) {
            this.hoveredRating = star;
            this.hoverChange.emit(star);
        }
    }
    /**
     * Handle mouse leave
     */
    onMouseLeave() {
        this.hoveredRating = null;
        if (!this.readonly() && this.showHover()) {
            this.hoverChange.emit(this.value());
        }
    }
    /**
     * Get cursor style
     */
    getCursorStyle() {
        return this.readonly() ? 'default' : 'pointer';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, showHover: { classPropertyName: "showHover", publicName: "showHover", isSignal: true, isRequired: false, transformFunction: null }, containerClass: { classPropertyName: "containerClass", publicName: "containerClass", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent, TranslateModule], template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTdkQsTUFBTSxPQUFPLGVBQWU7SUFDMUI7UUFHQTs7V0FFRztRQUNILFVBQUssR0FBRyxLQUFLLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSCxRQUFHLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXZCOztXQUVHO1FBQ0gsU0FBSSxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6Qjs7V0FFRztRQUNILFVBQUssR0FBRyxLQUFLLENBQVMsU0FBUyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRXRDOztXQUVHO1FBQ0gsYUFBUSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVqQzs7V0FFRztRQUNILGNBQVMsR0FBRyxLQUFLLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxtQkFBYyxHQUFHLEtBQUssQ0FBUyxVQUFVLENBQUMsQ0FBQztRQUMzQzs7V0FFRztRQUNILGlCQUFZLEdBQUcsTUFBTSxFQUFVLENBQUM7UUFFaEM7O1dBRUc7UUFDSCxnQkFBVyxHQUFHLE1BQU0sRUFBVSxDQUFDO1FBRXhCLGtCQUFhLEdBQWtCLElBQUksQ0FBQztRQW5EekMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFvREQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQixDQUFDLElBQVk7UUFDdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUQsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO2FBQU0sSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7K0dBM0dVLGVBQWU7bUdBQWYsZUFBZSw4b0NDZjVCLDQ2REErQ0Esc2tCRGxDWSxPQUFPLG9GQUFFLE9BQU8sMkVBQUUsYUFBYSx3RkFBRSxlQUFlOzs0RkFFL0MsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxXQUFXLGNBR1QsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGlucHV0LCBvdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3RleHQvdGV4dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ1N0eWxlLCBUZXh0Q29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICAvKipcbiAgICogQ3VycmVudCByYXRpbmcgdmFsdWUgKHN1cHBvcnRzIGRlY2ltYWxzIGZvciBwYXJ0aWFsIHN0YXJzKVxuICAgKi9cbiAgdmFsdWUgPSBpbnB1dDxudW1iZXI+KDApO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBzdGFyc1xuICAgKi9cbiAgbWF4ID0gaW5wdXQ8bnVtYmVyPig1KTtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgc3RhcnMgaW4gcGl4ZWxzXG4gICAqL1xuICBzaXplID0gaW5wdXQ8bnVtYmVyPigyNCk7XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIGZpbGxlZCBzdGFyc1xuICAgKi9cbiAgY29sb3IgPSBpbnB1dDxzdHJpbmc+KCcjZmJiZjI0Jyk7XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIGVtcHR5IHN0YXJzXG4gICAqL1xuICBlbXB0eUNvbG9yID0gaW5wdXQ8c3RyaW5nPignI2QxZDVkYicpO1xuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkgbW9kZSAobm8gY2xpY2sgaW50ZXJhY3Rpb25zKVxuICAgKi9cbiAgcmVhZG9ubHkgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIFNob3cgaG92ZXIgZWZmZWN0XG4gICAqL1xuICBzaG93SG92ZXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICAvKipcbiAgICogU2hvdyBob3ZlciBlZmZlY3RcbiAgICovXG4gIGNvbnRhaW5lckNsYXNzID0gaW5wdXQ8c3RyaW5nPignZmxleC1yb3cnKTtcbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBuZXcgcmF0aW5nIHZhbHVlIHdoZW4gYSBzdGFyIGlzIGNsaWNrZWRcbiAgICovXG4gIHJhdGluZ0NoYW5nZSA9IG91dHB1dDxudW1iZXI+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gaG92ZXJpbmcgb3ZlciBhIHN0YXJcbiAgICovXG4gIGhvdmVyQ2hhbmdlID0gb3V0cHV0PG51bWJlcj4oKTtcblxuICBwdWJsaWMgaG92ZXJlZFJhdGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHN0YXJzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLm1heCgpIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbGwgcGVyY2VudGFnZSBmb3IgYSBzdGFyICgwLTEwMClcbiAgICovXG4gIHB1YmxpYyBnZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBlZmZlY3RpdmVWYWx1ZSA9IHRoaXMuaG92ZXJlZFJhdGluZyA/PyB0aGlzLnZhbHVlKCk7XG5cbiAgICBpZiAoZWZmZWN0aXZlVmFsdWUgPj0gc3Rhcikge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9IGVsc2UgaWYgKGVmZmVjdGl2ZVZhbHVlID4gc3RhciAtIDEpIHtcbiAgICAgIHJldHVybiAoZWZmZWN0aXZlVmFsdWUgLSAoc3RhciAtIDEpKSAqIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgY2xpY2tcbiAgICovXG4gIHB1YmxpYyBvblN0YXJDbGljayhzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSkge1xuICAgICAgdGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgaG92ZXJcbiAgICovXG4gIHB1YmxpYyBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBzdGFyO1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHN0YXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2UgbGVhdmVcbiAgICovXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gbnVsbDtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnNvciBzdHlsZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnNvclN0eWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHkoKSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbiAgfVxufVxuIiwiQGlmICh0aGlzLnZhbHVlKCkgfHwgIXRoaXMucmVhZG9ubHkoKSkge1xuICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIiBbY2xhc3NdPVwidGhpcy5jb250YWluZXJDbGFzcygpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhLXJhdGluZy1jb250YWluZXJcIiAobW91c2VsZWF2ZSk9XCJ0aGlzLm9uTW91c2VMZWF2ZSgpXCIgW25nU3R5bGVdPVwieyBjdXJzb3I6IHRoaXMuZ2V0Q3Vyc29yU3R5bGUoKSB9XCI+XG4gICAgICBAZm9yIChzdGFyIG9mIHRoaXMuc3RhcnM7IHRyYWNrIHN0YXIpIHtcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3RhLXJhdGluZy1zdGFyLS1yZWFkb25seSc6IHRoaXMucmVhZG9ubHkoKSB9XCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiB0aGlzLnNpemUoKSArICdweCcsIGhlaWdodDogdGhpcy5zaXplKCkgKyAncHgnIH1cIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLm9uU3RhckNsaWNrKHN0YXIpXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJ0aGlzLm9uU3RhckhvdmVyKHN0YXIpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBzdGFyIChlbXB0eSkgLS0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3Rhci1iZ1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJ0aGlzLnNpemUoKVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuZW1wdHlDb2xvcigpXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgPCEtLSBGb3JlZ3JvdW5kIHN0YXIgKGZpbGxlZCkgd2l0aCBjbGlwLXBhdGggZm9yIHBhcnRpYWwgZmlsbCAtLT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cInRhLXJhdGluZy1zdGFyLWZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2NsaXAtcGF0aCc6ICdpbnNldCgwICcgKyAoMTAwIC0gdGhpcy5nZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcikpICsgJyUgMCAwKScgfVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuY29sb3IoKVwiXG4gICAgICAgICAgICAgIGQ9XCJNMTIgMkwxNS4wOSA4LjI2TDIyIDkuMjdMMTcgMTQuMTRMMTguMTggMjEuMDJMMTIgMTcuNzdMNS44MiAyMS4wMkw3IDE0LjE0TDIgOS4yN0w4LjkxIDguMjZMMTIgMlpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPHRhLXRleHQ+e3sgdGhpcy52YWx1ZSgpIH19IC8ge3sgdGhpcy5tYXgoKSB9fTwvdGEtdGV4dD5cbiAgPC9kaXY+XG59IEBlbHNlIHtcbiAgPHRhLXRleHQgY2xhc3M9XCJuby1yYXRpbmdcIj57eyAndWkucmF0aW5nLm5vLWV2YWx1YXRpb24nIHwgdHJhbnNsYXRlIH19PC90YS10ZXh0PlxufVxuIl19