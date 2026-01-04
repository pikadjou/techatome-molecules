import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { TextComponent } from '../text/text.component';
import * as i0 from "@angular/core";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-rating", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, color: { classPropertyName: "color", publicName: "color", isSignal: true, isRequired: false, transformFunction: null }, emptyColor: { classPropertyName: "emptyColor", publicName: "emptyColor", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null }, showHover: { classPropertyName: "showHover", publicName: "showHover", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { ratingChange: "ratingChange", hoverChange: "hoverChange" }, ngImport: i0, template: "<div class=\"flex-row align-center g-space-sm\">\n  <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n    @for (star of this.stars; track star) {\n      <div\n        class=\"ta-rating-star\"\n        [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n        [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n        (click)=\"this.onStarClick(star)\"\n        (mouseenter)=\"this.onStarHover(star)\"\n      >\n        <!-- Background star (empty) -->\n        <svg\n          class=\"ta-rating-star-bg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"this.size()\"\n          [attr.height]=\"this.size()\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"this.emptyColor()\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n\n        <!-- Foreground star (filled) with clip-path for partial fill -->\n        <svg\n          class=\"ta-rating-star-fg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"this.size()\"\n          [attr.height]=\"this.size()\"\n          [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"this.color()\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n      </div>\n    }\n  </div>\n  <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rating', standalone: true, imports: [NgClass, NgStyle, TextComponent], template: "<div class=\"flex-row align-center g-space-sm\">\n  <div class=\"ta-rating-container\" (mouseleave)=\"this.onMouseLeave()\" [ngStyle]=\"{ cursor: this.getCursorStyle() }\">\n    @for (star of this.stars; track star) {\n      <div\n        class=\"ta-rating-star\"\n        [ngClass]=\"{ 'ta-rating-star--readonly': this.readonly() }\"\n        [ngStyle]=\"{ width: this.size() + 'px', height: this.size() + 'px' }\"\n        (click)=\"this.onStarClick(star)\"\n        (mouseenter)=\"this.onStarHover(star)\"\n      >\n        <!-- Background star (empty) -->\n        <svg\n          class=\"ta-rating-star-bg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"this.size()\"\n          [attr.height]=\"this.size()\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"this.emptyColor()\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n\n        <!-- Foreground star (filled) with clip-path for partial fill -->\n        <svg\n          class=\"ta-rating-star-fg\"\n          viewBox=\"0 0 24 24\"\n          [attr.width]=\"this.size()\"\n          [attr.height]=\"this.size()\"\n          [ngStyle]=\"{ 'clip-path': 'inset(0 ' + (100 - this.getStarFillPercentage(star)) + '% 0 0)' }\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            [attr.fill]=\"this.color()\"\n            d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"\n          />\n        </svg>\n      </div>\n    }\n  </div>\n  <ta-text>{{ this.value() }} / {{ this.max() }}</ta-text>\n</div>\n", styles: [".ta-rating-container{display:inline-flex;align-items:center;gap:4px;-webkit-user-select:none;user-select:none}.ta-rating-star{position:relative;display:inline-block;transition:transform .2s ease}.ta-rating-star:not(.ta-rating-star--readonly):hover{transform:scale(1.1)}.ta-rating-star:not(.ta-rating-star--readonly):active{transform:scale(.95)}.ta-rating-star-bg,.ta-rating-star-fg{position:absolute;top:0;left:0;pointer-events:none}.ta-rating-star-fg{transition:clip-path .2s ease}\n"] }]
        }], propDecorators: { ratingChange: [{
                type: Output
            }], hoverChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBU3ZELE1BQU0sT0FBTyxlQUFlO0lBUDVCO1FBUUU7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpCOztXQUVHO1FBQ0gsUUFBRyxHQUFHLEtBQUssQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUV2Qjs7V0FFRztRQUNILFNBQUksR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFekI7O1dBRUc7UUFDSCxVQUFLLEdBQUcsS0FBSyxDQUFTLFNBQVMsQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEtBQUssQ0FBUyxTQUFTLENBQUMsQ0FBQztRQUV0Qzs7V0FFRztRQUNILGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFakM7O1dBRUc7UUFDSCxjQUFTLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpDOztXQUVHO1FBRUgsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTFDOztXQUVHO1FBRUgsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxDLGtCQUFhLEdBQWtCLElBQUksQ0FBQztLQXVENUM7SUFyREMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQixDQUFDLElBQVk7UUFDdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUQsSUFBSSxjQUFjLElBQUksSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO2FBQU0sSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDN0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVyxDQUFDLElBQVk7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7K0dBdEdVLGVBQWU7bUdBQWYsZUFBZSwyL0JDWjVCLGlyREEyQ0EsOGhCRGpDWSxPQUFPLG9GQUFFLE9BQU8sMkVBQUUsYUFBYTs7NEZBRTlCLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsV0FBVyxjQUdULElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDOzhCQTBDMUMsWUFBWTtzQkFEWCxNQUFNO2dCQU9QLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGlucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4uL3RleHQvdGV4dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ1N0eWxlLCBUZXh0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEN1cnJlbnQgcmF0aW5nIHZhbHVlIChzdXBwb3J0cyBkZWNpbWFscyBmb3IgcGFydGlhbCBzdGFycylcbiAgICovXG4gIHZhbHVlID0gaW5wdXQ8bnVtYmVyPigwKTtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygc3RhcnNcbiAgICovXG4gIG1heCA9IGlucHV0PG51bWJlcj4oNSk7XG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIHN0YXJzIGluIHBpeGVsc1xuICAgKi9cbiAgc2l6ZSA9IGlucHV0PG51bWJlcj4oMjQpO1xuXG4gIC8qKlxuICAgKiBDb2xvciBvZiBmaWxsZWQgc3RhcnNcbiAgICovXG4gIGNvbG9yID0gaW5wdXQ8c3RyaW5nPignI2ZiYmYyNCcpO1xuXG4gIC8qKlxuICAgKiBDb2xvciBvZiBlbXB0eSBzdGFyc1xuICAgKi9cbiAgZW1wdHlDb2xvciA9IGlucHV0PHN0cmluZz4oJyNkMWQ1ZGInKTtcblxuICAvKipcbiAgICogUmVhZC1vbmx5IG1vZGUgKG5vIGNsaWNrIGludGVyYWN0aW9ucylcbiAgICovXG4gIHJlYWRvbmx5ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKlxuICAgKiBTaG93IGhvdmVyIGVmZmVjdFxuICAgKi9cbiAgc2hvd0hvdmVyID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBuZXcgcmF0aW5nIHZhbHVlIHdoZW4gYSBzdGFyIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByYXRpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiBob3ZlcmluZyBvdmVyIGEgc3RhclxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGhvdmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgcHVibGljIGhvdmVyZWRSYXRpbmc6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBzdGFycygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5tYXgoKSB9LCAoXywgaSkgPT4gaSArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBmaWxsIHBlcmNlbnRhZ2UgZm9yIGEgc3RhciAoMC0xMDApXG4gICAqL1xuICBwdWJsaWMgZ2V0U3RhckZpbGxQZXJjZW50YWdlKHN0YXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgZWZmZWN0aXZlVmFsdWUgPSB0aGlzLmhvdmVyZWRSYXRpbmcgPz8gdGhpcy52YWx1ZSgpO1xuXG4gICAgaWYgKGVmZmVjdGl2ZVZhbHVlID49IHN0YXIpIHtcbiAgICAgIHJldHVybiAxMDA7XG4gICAgfSBlbHNlIGlmIChlZmZlY3RpdmVWYWx1ZSA+IHN0YXIgLSAxKSB7XG4gICAgICByZXR1cm4gKGVmZmVjdGl2ZVZhbHVlIC0gKHN0YXIgLSAxKSkgKiAxMDA7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdGFyIGNsaWNrXG4gICAqL1xuICBwdWJsaWMgb25TdGFyQ2xpY2soc3RhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KCkpIHtcbiAgICAgIHRoaXMucmF0aW5nQ2hhbmdlLmVtaXQoc3Rhcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdGFyIGhvdmVyXG4gICAqL1xuICBwdWJsaWMgb25TdGFySG92ZXIoc3RhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KCkgJiYgdGhpcy5zaG93SG92ZXIoKSkge1xuICAgICAgdGhpcy5ob3ZlcmVkUmF0aW5nID0gc3RhcjtcbiAgICAgIHRoaXMuaG92ZXJDaGFuZ2UuZW1pdChzdGFyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIG1vdXNlIGxlYXZlXG4gICAqL1xuICBwdWJsaWMgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJlZFJhdGluZyA9IG51bGw7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KCkgJiYgdGhpcy5zaG93SG92ZXIoKSkge1xuICAgICAgdGhpcy5ob3ZlckNoYW5nZS5lbWl0KHRoaXMudmFsdWUoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJzb3Igc3R5bGVcbiAgICovXG4gIHB1YmxpYyBnZXRDdXJzb3JTdHlsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlYWRvbmx5KCkgPyAnZGVmYXVsdCcgOiAncG9pbnRlcic7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LXJvdyBhbGlnbi1jZW50ZXIgZy1zcGFjZS1zbVwiPlxuICA8ZGl2IGNsYXNzPVwidGEtcmF0aW5nLWNvbnRhaW5lclwiIChtb3VzZWxlYXZlKT1cInRoaXMub25Nb3VzZUxlYXZlKClcIiBbbmdTdHlsZV09XCJ7IGN1cnNvcjogdGhpcy5nZXRDdXJzb3JTdHlsZSgpIH1cIj5cbiAgICBAZm9yIChzdGFyIG9mIHRoaXMuc3RhcnM7IHRyYWNrIHN0YXIpIHtcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0YS1yYXRpbmctc3RhclwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInsgJ3RhLXJhdGluZy1zdGFyLS1yZWFkb25seSc6IHRoaXMucmVhZG9ubHkoKSB9XCJcbiAgICAgICAgW25nU3R5bGVdPVwieyB3aWR0aDogdGhpcy5zaXplKCkgKyAncHgnLCBoZWlnaHQ6IHRoaXMuc2l6ZSgpICsgJ3B4JyB9XCJcbiAgICAgICAgKGNsaWNrKT1cInRoaXMub25TdGFyQ2xpY2soc3RhcilcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJ0aGlzLm9uU3RhckhvdmVyKHN0YXIpXCJcbiAgICAgID5cbiAgICAgICAgPCEtLSBCYWNrZ3JvdW5kIHN0YXIgKGVtcHR5KSAtLT5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItYmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIFthdHRyLndpZHRoXT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIFthdHRyLmZpbGxdPVwidGhpcy5lbXB0eUNvbG9yKClcIlxuICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgPCEtLSBGb3JlZ3JvdW5kIHN0YXIgKGZpbGxlZCkgd2l0aCBjbGlwLXBhdGggZm9yIHBhcnRpYWwgZmlsbCAtLT5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzPVwidGEtcmF0aW5nLXN0YXItZmdcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgIFthdHRyLndpZHRoXT1cInRoaXMuc2l6ZSgpXCJcbiAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwidGhpcy5zaXplKClcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsgJ2NsaXAtcGF0aCc6ICdpbnNldCgwICcgKyAoMTAwIC0gdGhpcy5nZXRTdGFyRmlsbFBlcmNlbnRhZ2Uoc3RhcikpICsgJyUgMCAwKScgfVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJ0aGlzLmNvbG9yKClcIlxuICAgICAgICAgICAgZD1cIk0xMiAyTDE1LjA5IDguMjZMMjIgOS4yN0wxNyAxNC4xNEwxOC4xOCAyMS4wMkwxMiAxNy43N0w1LjgyIDIxLjAyTDcgMTQuMTRMMiA5LjI3TDguOTEgOC4yNkwxMiAyWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuICA8dGEtdGV4dD57eyB0aGlzLnZhbHVlKCkgfX0gLyB7eyB0aGlzLm1heCgpIH19PC90YS10ZXh0PlxuPC9kaXY+XG4iXX0=