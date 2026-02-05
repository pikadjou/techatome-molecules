import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
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
         * Emits the new rating value when a star is clicked
         */
        this.ratingChange = new EventEmitter();
        /**
         * Emits when hovering over a star
         */
        this.hoverChange = new EventEmitter();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, showHover: { classPropertyName: "showHover", publicName: "showHover", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "@if (this.value() !== null && this.value() !== undefined && this.value() > 0) {\n  <div class=\"flex-row align-center g-space-sm\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent, TranslateModule], template: "@if (this.value() !== null && this.value() !== undefined && this.value() > 0) {\n  <div class=\"flex-row align-center g-space-sm\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"] }]
        }], ctorParameters: () => [], propDecorators: { ratingChange: [{
                type: Output
            }], hoverChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBU3ZELE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBR0E7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsUUFBRyxHQUFHLEtBQUssQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUV2Qjs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEtBQUssQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUV0Qzs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxjQUFTLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBRUgsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTFDOztXQUVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxDLGtCQUFhLEdBQWtCLElBQUksQ0FBQztRQWpEekMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFrREQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQixDQUFDLElBQVk7UUFDdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUQsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO2FBQU0sSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7K0dBekdVLGVBQWU7bUdBQWYsZUFBZSwyL0JDZjVCLDA3REErQ0Esc2tCRGxDWSxPQUFPLG9GQUFFLE9BQU8sMkVBQUUsYUFBYSx3RkFBRSxlQUFlOzs0RkFFL0MsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxXQUFXLGNBR1QsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDO3dEQTZDM0QsWUFBWTtzQkFEWCxNQUFNO2dCQU9QLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGlucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3RleHQvdGV4dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ1N0eWxlLCBUZXh0Q29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICAvKipcbiAgICogQ3VycmVudCByYXRpbmcgdmFsdWUgKHN1cHBvcnRzIGRlY2ltYWxzIGZvciBwYXJ0aWFsIHN0YXJzKVxuICAgKi9cbiAgdmFsdWUgPSBpbnB1dDxudW1iZXI+KDApO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBzdGFyc1xuICAgKi9cbiAgbWF4ID0gaW5wdXQ8bnVtYmVyPig1KTtcblxuICAvKipcbiAgICogU2l6ZSBvZiB0aGUgc3RhcnMgaW4gcGl4ZWxzXG4gICAqL1xuICBzaXplID0gaW5wdXQ8bnVtYmVyPigyNCk7XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIGZpbGxlZCBzdGFyc1xuICAgKi9cbiAgY29sb3IgPSBpbnB1dDxzdHJpbmc+KCcjZmJiZjI0Jyk7XG5cbiAgLyoqXG4gICAqIENvbG9yIG9mIGVtcHR5IHN0YXJzXG4gICAqL1xuICBlbXB0eUNvbG9yID0gaW5wdXQ8c3RyaW5nPignI2QxZDVkYicpO1xuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkgbW9kZSAobm8gY2xpY2sgaW50ZXJhY3Rpb25zKVxuICAgKi9cbiAgcmVhZG9ubHkgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqXG4gICAqIFNob3cgaG92ZXIgZWZmZWN0XG4gICAqL1xuICBzaG93SG92ZXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICAvKipcbiAgICogRW1pdHMgdGhlIG5ldyByYXRpbmcgdmFsdWUgd2hlbiBhIHN0YXIgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGhvdmVyaW5nIG92ZXIgYSBzdGFyXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwdWJsaWMgaG92ZXJlZFJhdGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHN0YXJzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLm1heCgpIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbGwgcGVyY2VudGFnZSBmb3IgYSBzdGFyICgwLTEwMClcbiAgICovXG4gIHB1YmxpYyBnZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBlZmZlY3RpdmVWYWx1ZSA9IHRoaXMuaG92ZXJlZFJhdGluZyA/PyB0aGlzLnZhbHVlKCk7XG5cbiAgICBpZiAoZWZmZWN0aXZlVmFsdWUgPj0gc3Rhcikge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9IGVsc2UgaWYgKGVmZmVjdGl2ZVZhbHVlID4gc3RhciAtIDEpIHtcbiAgICAgIHJldHVybiAoZWZmZWN0aXZlVmFsdWUgLSAoc3RhciAtIDEpKSAqIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgY2xpY2tcbiAgICovXG4gIHB1YmxpYyBvblN0YXJDbGljayhzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSkge1xuICAgICAgdGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgaG92ZXJcbiAgICovXG4gIHB1YmxpYyBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBzdGFyO1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHN0YXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2UgbGVhdmVcbiAgICovXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gbnVsbDtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnNvciBzdHlsZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnNvclN0eWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHkoKSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbiAgfVxufVxuIiwiQGlmICh0aGlzLnZhbHVlKCkgIT09IG51bGwgJiYgdGhpcy52YWx1ZSgpICE9PSB1bmRlZmluZWQgJiYgdGhpcy52YWx1ZSgpID4gMCkge1xuICA8ZGl2IGNsYXNzPVwiZmxleC1yb3cgYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGEtcmF0aW5nLWNvbnRhaW5lclwiIChtb3VzZWxlYXZlKT1cInRoaXMub25Nb3VzZUxlYXZlKClcIiBbbmdTdHlsZV09XCJ7IGN1cnNvcjogdGhpcy5nZXRDdXJzb3JTdHlsZSgpIH1cIj5cbiAgICAgIEBmb3IgKHN0YXIgb2YgdGhpcy5zdGFyczsgdHJhY2sgc3Rhcikge1xuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3RhclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyAndGEtcmF0aW5nLXN0YXItLXJlYWRvbmx5JzogdGhpcy5yZWFkb25seSgpIH1cIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsgd2lkdGg6IHRoaXMuc2l6ZSgpICsgJ3B4JywgaGVpZ2h0OiB0aGlzLnNpemUoKSArICdweCcgfVwiXG4gICAgICAgICAgKGNsaWNrKT1cInRoaXMub25TdGFyQ2xpY2soc3RhcilcIlxuICAgICAgICAgIChtb3VzZWVudGVyKT1cInRoaXMub25TdGFySG92ZXIoc3RhcilcIlxuICAgICAgICA+XG4gICAgICAgICAgPCEtLSBCYWNrZ3JvdW5kIHN0YXIgKGVtcHR5KSAtLT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cInRhLXJhdGluZy1zdGFyLWJnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwidGhpcy5lbXB0eUNvbG9yKClcIlxuICAgICAgICAgICAgICBkPVwiTTEyIDJMMTUuMDkgOC4yNkwyMiA5LjI3TDE3IDE0LjE0TDE4LjE4IDIxLjAyTDEyIDE3Ljc3TDUuODIgMjEuMDJMNyAxNC4xNEwyIDkuMjdMOC45MSA4LjI2TDEyIDJaXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICA8IS0tIEZvcmVncm91bmQgc3RhciAoZmlsbGVkKSB3aXRoIGNsaXAtcGF0aCBmb3IgcGFydGlhbCBmaWxsIC0tPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItZmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBbYXR0ci53aWR0aF09XCJ0aGlzLnNpemUoKVwiXG4gICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwieyAnY2xpcC1wYXRoJzogJ2luc2V0KDAgJyArICgxMDAgLSB0aGlzLmdldFN0YXJGaWxsUGVyY2VudGFnZShzdGFyKSkgKyAnJSAwIDApJyB9XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIFthdHRyLmZpbGxdPVwidGhpcy5jb2xvcigpXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICA8dGEtdGV4dD57eyB0aGlzLnZhbHVlKCkgfX0gLyB7eyB0aGlzLm1heCgpIH19PC90YS10ZXh0PlxuICA8L2Rpdj5cbn0gQGVsc2Uge1xuICA8dGEtdGV4dCBjbGFzcz1cIm5vLXJhdGluZ1wiPnt7ICd1aS5yYXRpbmcubm8tZXZhbHVhdGlvbicgfCB0cmFuc2xhdGUgfX08L3RhLXRleHQ+XG59XG4iXX0=