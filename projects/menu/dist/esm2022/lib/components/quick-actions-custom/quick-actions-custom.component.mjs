import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SwiperComponent } from '@ta/ui';
import * as i0 from "@angular/core";
export class QuickActionsCustomComponent {
    constructor() {
        this.elementPerPage = 3.5;
        this.slidesPerGroup = 1;
        this.isFreeMode = true;
        this.onSlideChanged = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: QuickActionsCustomComponent, isStandalone: true, selector: "ta-quick-actions-custom", inputs: { elementPerPage: "elementPerPage", swipeTemplate: "swipeTemplate", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", elements: "elements" }, outputs: { onSlideChanged: "onSlideChanged" }, ngImport: i0, template: "@if (this.elements && this.elements.length > 0) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [slidesPerGroup]=\"this.slidesPerGroup\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.elements\"\n        [isFreeMode]=\"this.isFreeMode\"\n        (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n", styles: [""], dependencies: [{ kind: "component", type: SwiperComponent, selector: "ta-swiper", inputs: ["swipeTemplate", "slides", "slidesPerPage", "slidesPerGroup", "isFreeMode", "startAt"], outputs: ["onSlideChanged"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-quick-actions-custom', standalone: true, imports: [NgIf, SwiperComponent], template: "@if (this.elements && this.elements.length > 0) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [slidesPerGroup]=\"this.slidesPerGroup\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.elements\"\n        [isFreeMode]=\"this.isFreeMode\"\n        (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n" }]
        }], propDecorators: { elementPerPage: [{
                type: Input
            }], swipeTemplate: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], isFreeMode: [{
                type: Input
            }], onSlideChanged: [{
                type: Output
            }], elements: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stYWN0aW9ucy1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3F1aWNrLWFjdGlvbnMtY3VzdG9tL3F1aWNrLWFjdGlvbnMtY3VzdG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9xdWljay1hY3Rpb25zLWN1c3RvbS9xdWljay1hY3Rpb25zLWN1c3RvbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUVwRixPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQVNyRCxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBU1MsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFLN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFHM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FJcEQ7K0dBakJZLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtTQ1p4QyxpZEFjQSwwRERKa0IsZUFBZTs7NEZBRXBCLDJCQUEyQjtrQkFQdkMsU0FBUzsrQkFDQSx5QkFBeUIsY0FHckIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQzs4QkFJekIsY0FBYztzQkFEcEIsS0FBSztnQkFJQyxhQUFhO3NCQURuQixLQUFLO2dCQUdDLGNBQWM7c0JBRHBCLEtBQUs7Z0JBSUMsVUFBVTtzQkFEaEIsS0FBSztnQkFJQyxjQUFjO3NCQURwQixNQUFNO2dCQUlBLFFBQVE7c0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN3aXBlckRhdGEsIFN3aXBlckNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1xdWljay1hY3Rpb25zLWN1c3RvbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWljay1hY3Rpb25zLWN1c3RvbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3F1aWNrLWFjdGlvbnMtY3VzdG9tLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBTd2lwZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja0FjdGlvbnNDdXN0b21Db21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgZWxlbWVudFBlclBhZ2U6IG51bWJlciA9IDMuNTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3dpcGVUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzbGlkZXNQZXJHcm91cDogbnVtYmVyID0gMTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNGcmVlTW9kZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblNsaWRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbGVtZW50cyE6IFN3aXBlckRhdGFbXTtcbn1cbiIsIkBpZiAodGhpcy5lbGVtZW50cyAmJiB0aGlzLmVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgPGRpdiBjbGFzcz1cInRhYnMgbXktc3BhY2UtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LXRhYlwiPlxuICAgICAgPHRhLXN3aXBlclxuICAgICAgICBbc2xpZGVzUGVyUGFnZV09XCJ0aGlzLmVsZW1lbnRQZXJQYWdlXCJcbiAgICAgICAgW3NsaWRlc1Blckdyb3VwXT1cInRoaXMuc2xpZGVzUGVyR3JvdXBcIlxuICAgICAgICBbc3dpcGVUZW1wbGF0ZV09XCJzd2lwZVRlbXBsYXRlXCJcbiAgICAgICAgW3NsaWRlc109XCJ0aGlzLmVsZW1lbnRzXCJcbiAgICAgICAgW2lzRnJlZU1vZGVdPVwidGhpcy5pc0ZyZWVNb2RlXCJcbiAgICAgICAgKG9uU2xpZGVDaGFuZ2VkKT1cInRoaXMub25TbGlkZUNoYW5nZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgID48L3RhLXN3aXBlcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59XG4iXX0=