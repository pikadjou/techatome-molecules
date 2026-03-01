import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, showHover: { classPropertyName: "showHover", publicName: "showHover", isSignal: true, isRequired: false, transformFunction: null }, containerClass: { classPropertyName: "containerClass", publicName: "containerClass", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent, TranslateModule], template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.no-rating{font-style:italic;opacity:.7}\n"] }]
        }], ctorParameters: () => [], propDecorators: { ratingChange: [{
                type: Output
            }], hoverChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBU3ZELE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBR0E7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsUUFBRyxHQUFHLEtBQUssQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUV2Qjs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEtBQUssQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUV0Qzs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxjQUFTLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQVMsVUFBVSxDQUFDLENBQUM7UUFDM0M7O1dBRUc7UUFFSCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFMUM7O1dBRUc7UUFFSCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFbEMsa0JBQWEsR0FBa0IsSUFBSSxDQUFDO1FBckR6QyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQXNERCxJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUJBQXFCLENBQUMsSUFBWTtRQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUxRCxJQUFJLGNBQWMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7YUFBTSxJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckMsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDakQsQ0FBQzsrR0E3R1UsZUFBZTttR0FBZixlQUFlLDhvQ0NmNUIsNDZEQStDQSxza0JEbENZLE9BQU8sb0ZBQUUsT0FBTywyRUFBRSxhQUFhLHdGQUFFLGVBQWU7OzRGQUUvQyxlQUFlO2tCQVAzQixTQUFTOytCQUNFLFdBQVcsY0FHVCxJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUM7d0RBaUQzRCxZQUFZO3NCQURYLE1BQU07Z0JBT1AsV0FBVztzQkFEVixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi4vdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE5nU3R5bGUsIFRleHRDb21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIC8qKlxuICAgKiBDdXJyZW50IHJhdGluZyB2YWx1ZSAoc3VwcG9ydHMgZGVjaW1hbHMgZm9yIHBhcnRpYWwgc3RhcnMpXG4gICAqL1xuICB2YWx1ZSA9IGlucHV0PG51bWJlcj4oMCk7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHN0YXJzXG4gICAqL1xuICBtYXggPSBpbnB1dDxudW1iZXI+KDUpO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBzdGFycyBpbiBwaXhlbHNcbiAgICovXG4gIHNpemUgPSBpbnB1dDxudW1iZXI+KDI0KTtcblxuICAvKipcbiAgICogQ29sb3Igb2YgZmlsbGVkIHN0YXJzXG4gICAqL1xuICBjb2xvciA9IGlucHV0PHN0cmluZz4oJyNmYmJmMjQnKTtcblxuICAvKipcbiAgICogQ29sb3Igb2YgZW1wdHkgc3RhcnNcbiAgICovXG4gIGVtcHR5Q29sb3IgPSBpbnB1dDxzdHJpbmc+KCcjZDFkNWRiJyk7XG5cbiAgLyoqXG4gICAqIFJlYWQtb25seSBtb2RlIChubyBjbGljayBpbnRlcmFjdGlvbnMpXG4gICAqL1xuICByZWFkb25seSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAvKipcbiAgICogU2hvdyBob3ZlciBlZmZlY3RcbiAgICovXG4gIHNob3dIb3ZlciA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIC8qKlxuICAgKiBTaG93IGhvdmVyIGVmZmVjdFxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3MgPSBpbnB1dDxzdHJpbmc+KCdmbGV4LXJvdycpO1xuICAvKipcbiAgICogRW1pdHMgdGhlIG5ldyByYXRpbmcgdmFsdWUgd2hlbiBhIHN0YXIgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJhdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIGhvdmVyaW5nIG92ZXIgYSBzdGFyXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwdWJsaWMgaG92ZXJlZFJhdGluZzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHN0YXJzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLm1heCgpIH0sIChfLCBpKSA9PiBpICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbGwgcGVyY2VudGFnZSBmb3IgYSBzdGFyICgwLTEwMClcbiAgICovXG4gIHB1YmxpYyBnZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBlZmZlY3RpdmVWYWx1ZSA9IHRoaXMuaG92ZXJlZFJhdGluZyA/PyB0aGlzLnZhbHVlKCk7XG5cbiAgICBpZiAoZWZmZWN0aXZlVmFsdWUgPj0gc3Rhcikge1xuICAgICAgcmV0dXJuIDEwMDtcbiAgICB9IGVsc2UgaWYgKGVmZmVjdGl2ZVZhbHVlID4gc3RhciAtIDEpIHtcbiAgICAgIHJldHVybiAoZWZmZWN0aXZlVmFsdWUgLSAoc3RhciAtIDEpKSAqIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgY2xpY2tcbiAgICovXG4gIHB1YmxpYyBvblN0YXJDbGljayhzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSkge1xuICAgICAgdGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChzdGFyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHN0YXIgaG92ZXJcbiAgICovXG4gIHB1YmxpYyBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyZWRSYXRpbmcgPSBzdGFyO1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHN0YXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2UgbGVhdmVcbiAgICovXG4gIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gbnVsbDtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XG4gICAgICB0aGlzLmhvdmVyQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnNvciBzdHlsZVxuICAgKi9cbiAgcHVibGljIGdldEN1cnNvclN0eWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHkoKSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcbiAgfVxufVxuIiwiQGlmICh0aGlzLnZhbHVlKCkgfHwgIXRoaXMucmVhZG9ubHkoKSkge1xuICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIiBbY2xhc3NdPVwidGhpcy5jb250YWluZXJDbGFzcygpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhLXJhdGluZy1jb250YWluZXJcIiAobW91c2VsZWF2ZSk9XCJ0aGlzLm9uTW91c2VMZWF2ZSgpXCIgW25nU3R5bGVdPVwieyBjdXJzb3I6IHRoaXMuZ2V0Q3Vyc29yU3R5bGUoKSB9XCI+XG4gICAgICBAZm9yIChzdGFyIG9mIHRoaXMuc3RhcnM7IHRyYWNrIHN0YXIpIHtcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3RhLXJhdGluZy1zdGFyLS1yZWFkb25seSc6IHRoaXMucmVhZG9ubHkoKSB9XCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiB0aGlzLnNpemUoKSArICdweCcsIGhlaWdodDogdGhpcy5zaXplKCkgKyAncHgnIH1cIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLm9uU3RhckNsaWNrKHN0YXIpXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJ0aGlzLm9uU3RhckhvdmVyKHN0YXIpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBzdGFyIChlbXB0eSkgLS0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3Rhci1iZ1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJ0aGlzLnNpemUoKVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuZW1wdHlDb2xvcigpXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgPCEtLSBGb3JlZ3JvdW5kIHN0YXIgKGZpbGxlZCkgd2l0aCBjbGlwLXBhdGggZm9yIHBhcnRpYWwgZmlsbCAtLT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cInRhLXJhdGluZy1zdGFyLWZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2NsaXAtcGF0aCc6ICdpbnNldCgwICcgKyAoMTAwIC0gdGhpcy5nZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcikpICsgJyUgMCAwKScgfVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuY29sb3IoKVwiXG4gICAgICAgICAgICAgIGQ9XCJNMTIgMkwxNS4wOSA4LjI2TDIyIDkuMjdMMTcgMTQuMTRMMTguMTggMjEuMDJMMTIgMTcuNzdMNS44MiAyMS4wMkw3IDE0LjE0TDIgOS4yN0w4LjkxIDguMjZMMTIgMlpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPHRhLXRleHQ+e3sgdGhpcy52YWx1ZSgpIH19IC8ge3sgdGhpcy5tYXgoKSB9fTwvdGEtdGV4dD5cbiAgPC9kaXY+XG59IEBlbHNlIHtcbiAgPHRhLXRleHQgY2xhc3M9XCJuby1yYXRpbmdcIj57eyAndWkucmF0aW5nLm5vLWV2YWx1YXRpb24nIHwgdHJhbnNsYXRlIH19PC90YS10ZXh0PlxufVxuIl19