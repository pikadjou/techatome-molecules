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
         * Color of filled stars. `null` (default) lets the design system's rating
         * token apply through the stylesheet.
         */
        this.color = input(null);
        /**
         * Color of empty stars. `null` (default) lets the design system's rating
         * token apply through the stylesheet.
         */
        this.emptyColor = input(null);
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, showHover: { classPropertyName: "showHover", publicName: "showHover", isSignal: true, isRequired: false, transformFunction: null }, containerClass: { classPropertyName: "containerClass", publicName: "containerClass", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.ta-rating-star-fg path:not([fill]){fill:var(--ta-components-control-rating-color)}.ta-rating-star-bg path:not([fill]){fill:var(--ta-components-control-rating-empty)}.no-rating{font-style:italic;opacity:.7}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent, TranslateModule], template: "@if (this.value() || !this.readonly()) {\n  <div class=\"align-center g-space-sm\" [class]=\"this.containerClass()\">\n    <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n      @for (star of this.stars; track star) {\n        <div\n          class=\"ta-rating-star\"\n          [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n          [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n          (click)=\"this.onStarClick(star)\"\n          (mouseenter)=\"this.onStarHover(star)\"\n        >\n          <!-- Background star (empty) -->\n          <svg\n            class=\"ta-rating-star-bg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.emptyColor()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n\n          <!-- Foreground star (filled) with clip-path for partial fill -->\n          <svg\n            class=\"ta-rating-star-fg\"\n            viewBox=\"0 0 24 24\"\n            [attr.width]=\"this.size()\"\n            [attr.height]=\"this.size()\"\n            [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              [attr.fill]=\"this.color()\"\n              d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n            />\n          </svg>\n        </div>\n      }\n    </div>\n    <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n  </div>\n} @else {\n  <ta-text class=\"no-rating\">{{ 'ui.rating.no-evaluation' | translate }}</ta-text>\n}\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}.ta-rating-star-fg path:not([fill]){fill:var(--ta-components-control-rating-color)}.ta-rating-star-bg path:not([fill]){fill:var(--ta-components-control-rating-empty)}.no-rating{font-style:italic;opacity:.7}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTdkQsTUFBTSxPQUFPLGVBQWU7SUFDMUI7UUFHQTs7V0FFRztRQUNILFVBQUssR0FBRyxLQUFLLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSCxRQUFHLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXZCOztXQUVHO1FBQ0gsU0FBSSxHQUFHLEtBQUssQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV6Qjs7O1dBR0c7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUVuQzs7O1dBR0c7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUV4Qzs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxjQUFTLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQVMsVUFBVSxDQUFDLENBQUM7UUFDM0M7O1dBRUc7UUFDSCxpQkFBWSxHQUFHLE1BQU0sRUFBVSxDQUFDO1FBRWhDOztXQUVHO1FBQ0gsZ0JBQVcsR0FBRyxNQUFNLEVBQVUsQ0FBQztRQUV4QixrQkFBYSxHQUFrQixJQUFJLENBQUM7UUFyRHpDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBc0RELElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBQyxJQUFZO1FBQ3ZDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTFELElBQUksY0FBYyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQzthQUFNLElBQUksY0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdDLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNqRCxDQUFDOytHQTdHVSxlQUFlO21HQUFmLGVBQWUsOG9DQ2Y1Qiw0NkRBK0NBLDR1QkRsQ1ksT0FBTyxvRkFBRSxPQUFPLDJFQUFFLGFBQWEsd0ZBQUUsZUFBZTs7NEZBRS9DLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsV0FBVyxjQUdULElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIGlucHV0LCBvdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuLi90ZXh0L3RleHQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtcmF0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ1N0eWxlLCBUZXh0Q29tcG9uZW50LCBUcmFuc2xhdGVNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDdXJyZW50IHJhdGluZyB2YWx1ZSAoc3VwcG9ydHMgZGVjaW1hbHMgZm9yIHBhcnRpYWwgc3RhcnMpXHJcbiAgICovXHJcbiAgdmFsdWUgPSBpbnB1dDxudW1iZXI+KDApO1xyXG5cclxuICAvKipcclxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBzdGFyc1xyXG4gICAqL1xyXG4gIG1heCA9IGlucHV0PG51bWJlcj4oNSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpemUgb2YgdGhlIHN0YXJzIGluIHBpeGVsc1xyXG4gICAqL1xyXG4gIHNpemUgPSBpbnB1dDxudW1iZXI+KDI0KTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29sb3Igb2YgZmlsbGVkIHN0YXJzLiBgbnVsbGAgKGRlZmF1bHQpIGxldHMgdGhlIGRlc2lnbiBzeXN0ZW0ncyByYXRpbmdcclxuICAgKiB0b2tlbiBhcHBseSB0aHJvdWdoIHRoZSBzdHlsZXNoZWV0LlxyXG4gICAqL1xyXG4gIGNvbG9yID0gaW5wdXQ8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbG9yIG9mIGVtcHR5IHN0YXJzLiBgbnVsbGAgKGRlZmF1bHQpIGxldHMgdGhlIGRlc2lnbiBzeXN0ZW0ncyByYXRpbmdcclxuICAgKiB0b2tlbiBhcHBseSB0aHJvdWdoIHRoZSBzdHlsZXNoZWV0LlxyXG4gICAqL1xyXG4gIGVtcHR5Q29sb3IgPSBpbnB1dDxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZC1vbmx5IG1vZGUgKG5vIGNsaWNrIGludGVyYWN0aW9ucylcclxuICAgKi9cclxuICByZWFkb25seSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBob3ZlciBlZmZlY3RcclxuICAgKi9cclxuICBzaG93SG92ZXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBob3ZlciBlZmZlY3RcclxuICAgKi9cclxuICBjb250YWluZXJDbGFzcyA9IGlucHV0PHN0cmluZz4oJ2ZsZXgtcm93Jyk7XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgdGhlIG5ldyByYXRpbmcgdmFsdWUgd2hlbiBhIHN0YXIgaXMgY2xpY2tlZFxyXG4gICAqL1xyXG4gIHJhdGluZ0NoYW5nZSA9IG91dHB1dDxudW1iZXI+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHdoZW4gaG92ZXJpbmcgb3ZlciBhIHN0YXJcclxuICAgKi9cclxuICBob3ZlckNoYW5nZSA9IG91dHB1dDxudW1iZXI+KCk7XHJcblxyXG4gIHB1YmxpYyBob3ZlcmVkUmF0aW5nOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IHN0YXJzKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMubWF4KCkgfSwgKF8sIGkpID0+IGkgKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmaWxsIHBlcmNlbnRhZ2UgZm9yIGEgc3RhciAoMC0xMDApXHJcbiAgICovXHJcbiAgcHVibGljIGdldFN0YXJGaWxsUGVyY2VudGFnZShzdGFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgZWZmZWN0aXZlVmFsdWUgPSB0aGlzLmhvdmVyZWRSYXRpbmcgPz8gdGhpcy52YWx1ZSgpO1xyXG5cclxuICAgIGlmIChlZmZlY3RpdmVWYWx1ZSA+PSBzdGFyKSB7XHJcbiAgICAgIHJldHVybiAxMDA7XHJcbiAgICB9IGVsc2UgaWYgKGVmZmVjdGl2ZVZhbHVlID4gc3RhciAtIDEpIHtcclxuICAgICAgcmV0dXJuIChlZmZlY3RpdmVWYWx1ZSAtIChzdGFyIC0gMSkpICogMTAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgc3RhciBjbGlja1xyXG4gICAqL1xyXG4gIHB1YmxpYyBvblN0YXJDbGljayhzdGFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFkb25seSgpKSB7XHJcbiAgICAgIHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQoc3Rhcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgc3RhciBob3ZlclxyXG4gICAqL1xyXG4gIHB1YmxpYyBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFkb25seSgpICYmIHRoaXMuc2hvd0hvdmVyKCkpIHtcclxuICAgICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gc3RhcjtcclxuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHN0YXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIG1vdXNlIGxlYXZlXHJcbiAgICovXHJcbiAgcHVibGljIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaG92ZXJlZFJhdGluZyA9IG51bGw7XHJcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkoKSAmJiB0aGlzLnNob3dIb3ZlcigpKSB7XHJcbiAgICAgIHRoaXMuaG92ZXJDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGN1cnNvciBzdHlsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDdXJzb3JTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHkoKSA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJztcclxuICB9XHJcbn1cclxuIiwiQGlmICh0aGlzLnZhbHVlKCkgfHwgIXRoaXMucmVhZG9ubHkoKSkge1xuICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGctc3BhY2Utc21cIiBbY2xhc3NdPVwidGhpcy5jb250YWluZXJDbGFzcygpXCI+XG4gICAgPGRpdiBjbGFzcz1cInRhLXJhdGluZy1jb250YWluZXJcIiAobW91c2VsZWF2ZSk9XCJ0aGlzLm9uTW91c2VMZWF2ZSgpXCIgW25nU3R5bGVdPVwieyBjdXJzb3I6IHRoaXMuZ2V0Q3Vyc29yU3R5bGUoKSB9XCI+XG4gICAgICBAZm9yIChzdGFyIG9mIHRoaXMuc3RhcnM7IHRyYWNrIHN0YXIpIHtcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ3RhLXJhdGluZy1zdGFyLS1yZWFkb25seSc6IHRoaXMucmVhZG9ubHkoKSB9XCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7IHdpZHRoOiB0aGlzLnNpemUoKSArICdweCcsIGhlaWdodDogdGhpcy5zaXplKCkgKyAncHgnIH1cIlxuICAgICAgICAgIChjbGljayk9XCJ0aGlzLm9uU3RhckNsaWNrKHN0YXIpXCJcbiAgICAgICAgICAobW91c2VlbnRlcik9XCJ0aGlzLm9uU3RhckhvdmVyKHN0YXIpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBzdGFyIChlbXB0eSkgLS0+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3Rhci1iZ1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIFthdHRyLndpZHRoXT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJ0aGlzLnNpemUoKVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuZW1wdHlDb2xvcigpXCJcbiAgICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgPCEtLSBGb3JlZ3JvdW5kIHN0YXIgKGZpbGxlZCkgd2l0aCBjbGlwLXBhdGggZm9yIHBhcnRpYWwgZmlsbCAtLT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cInRhLXJhdGluZy1zdGFyLWZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2NsaXAtcGF0aCc6ICdpbnNldCgwICcgKyAoMTAwIC0gdGhpcy5nZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcikpICsgJyUgMCAwKScgfVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInRoaXMuY29sb3IoKVwiXG4gICAgICAgICAgICAgIGQ9XCJNMTIgMkwxNS4wOSA4LjI2TDIyIDkuMjdMMTcgMTQuMTRMMTguMTggMjEuMDJMMTIgMTcuNzdMNS44MiAyMS4wMkw3IDE0LjE0TDIgOS4yN0w4LjkxIDguMjZMMTIgMlpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPHRhLXRleHQ+e3sgdGhpcy52YWx1ZSgpIH19IC8ge3sgdGhpcy5tYXgoKSB9fTwvdGEtdGV4dD5cbiAgPC9kaXY+XG59IEBlbHNlIHtcbiAgPHRhLXRleHQgY2xhc3M9XCJuby1yYXRpbmdcIj57eyAndWkucmF0aW5nLm5vLWV2YWx1YXRpb24nIHwgdHJhbnNsYXRlIH19PC90YS10ZXh0PlxufVxuIl19