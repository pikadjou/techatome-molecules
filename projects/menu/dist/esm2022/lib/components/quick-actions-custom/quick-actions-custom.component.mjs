import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, } from "@angular/core";
import { SwiperComponent } from "@ta/ui";
import * as i0 from "@angular/core";
export class QuickActionsCustomComponent {
    constructor() {
        this.elementPerPage = 3.5;
        this.slidesPerGroup = 1;
        this.isFreeMode = true;
        this.onSlideChanged = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: QuickActionsCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: QuickActionsCustomComponent, isStandalone: true, selector: "ta-quick-actions-custom", inputs: { elementPerPage: "elementPerPage", swipeTemplate: "swipeTemplate", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", elements: "elements" }, outputs: { onSlideChanged: "onSlideChanged" }, ngImport: i0, template: "@if (this.elements && this.elements.length > 0) {\n<div class=\"tabs my-space-2\">\n  <div class=\"menu-tab\">\n    <ta-swiper\n      [slidesPerPage]=\"this.elementPerPage\"\n      [slidesPerGroup]=\"this.slidesPerGroup\"\n      [swipeTemplate]=\"swipeTemplate\"\n      [slides]=\"this.elements\"\n      [isFreeMode]=\"this.isFreeMode\"\n      (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n    ></ta-swiper>\n  </div>\n</div>\n}\n", styles: [""], dependencies: [{ kind: "component", type: SwiperComponent, selector: "ta-swiper", inputs: ["swipeTemplate", "slides", "slidesPerPage", "slidesPerGroup", "isFreeMode", "startAt"], outputs: ["onSlideChanged"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: QuickActionsCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-quick-actions-custom", standalone: true, imports: [NgIf, SwiperComponent], template: "@if (this.elements && this.elements.length > 0) {\n<div class=\"tabs my-space-2\">\n  <div class=\"menu-tab\">\n    <ta-swiper\n      [slidesPerPage]=\"this.elementPerPage\"\n      [slidesPerGroup]=\"this.slidesPerGroup\"\n      [swipeTemplate]=\"swipeTemplate\"\n      [slides]=\"this.elements\"\n      [isFreeMode]=\"this.isFreeMode\"\n      (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n    ></ta-swiper>\n  </div>\n</div>\n}\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stYWN0aW9ucy1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3F1aWNrLWFjdGlvbnMtY3VzdG9tL3F1aWNrLWFjdGlvbnMtY3VzdG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9xdWljay1hY3Rpb25zLWN1c3RvbS9xdWljay1hY3Rpb25zLWN1c3RvbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQVNyRCxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBU1MsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFLN0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFHM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FJcEQ7K0dBakJZLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtTQ2xCeEMseWJBY0EsMERERWtCLGVBQWU7OzRGQUVwQiwyQkFBMkI7a0JBUHZDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLENBQUM7OEJBSXpCLGNBQWM7c0JBRHBCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFHQyxjQUFjO3NCQURwQixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsY0FBYztzQkFEcEIsTUFBTTtnQkFJQSxRQUFRO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTd2lwZXJEYXRhLCBTd2lwZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1xdWljay1hY3Rpb25zLWN1c3RvbVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3F1aWNrLWFjdGlvbnMtY3VzdG9tLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9xdWljay1hY3Rpb25zLWN1c3RvbS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIFN3aXBlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrQWN0aW9uc0N1c3RvbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbGVtZW50UGVyUGFnZTogbnVtYmVyID0gMy41O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzd2lwZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgcHVibGljIHNsaWRlc1Blckdyb3VwOiBudW1iZXIgPSAxO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0ZyZWVNb2RlOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2xpZGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGVsZW1lbnRzITogU3dpcGVyRGF0YVtdO1xufVxuIiwiQGlmICh0aGlzLmVsZW1lbnRzICYmIHRoaXMuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuPGRpdiBjbGFzcz1cInRhYnMgbXktc3BhY2UtMlwiPlxuICA8ZGl2IGNsYXNzPVwibWVudS10YWJcIj5cbiAgICA8dGEtc3dpcGVyXG4gICAgICBbc2xpZGVzUGVyUGFnZV09XCJ0aGlzLmVsZW1lbnRQZXJQYWdlXCJcbiAgICAgIFtzbGlkZXNQZXJHcm91cF09XCJ0aGlzLnNsaWRlc1Blckdyb3VwXCJcbiAgICAgIFtzd2lwZVRlbXBsYXRlXT1cInN3aXBlVGVtcGxhdGVcIlxuICAgICAgW3NsaWRlc109XCJ0aGlzLmVsZW1lbnRzXCJcbiAgICAgIFtpc0ZyZWVNb2RlXT1cInRoaXMuaXNGcmVlTW9kZVwiXG4gICAgICAob25TbGlkZUNoYW5nZWQpPVwidGhpcy5vblNsaWRlQ2hhbmdlZC5lbWl0KCRldmVudClcIlxuICAgID48L3RhLXN3aXBlcj5cbiAgPC9kaXY+XG48L2Rpdj5cbn1cbiJdfQ==