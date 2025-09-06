import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
import * as i1 from "@ta/capacitor";
export class SwiperLightComponent extends TaBaseComponent {
    constructor(_deviceInfoService) {
        super();
        this._deviceInfoService = _deviceInfoService;
        this.swiperClasses = 'g-space-sm';
        this.forced = false;
        this.classes = '';
        this.track = (_, item) => {
            if (item.hasOwnProperty('id')) {
                return this.trackById(_, item);
            }
            if (item.hasOwnProperty('key')) {
                return this.trackByKey(_, item);
            }
            return item;
        };
    }
    ngOnInit() {
        if (this.forced) {
            this.classes = `items ${this.swiperClasses ?? ''}`;
        }
        else {
            this._registerSubscription(this._deviceInfoService.os$.subscribe(os => {
                this.classes = this._deviceInfoService.isMobileOs(os)
                    ? `items ${this.swiperClasses ?? ''}`
                    : (this.containerClasses ?? '');
            }));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, deps: [{ token: i1.TaDeviceInfoService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwiperLightComponent, isStandalone: true, selector: "ta-swiper-light", inputs: { items: "items", template: "template", swiperClasses: "swiperClasses", containerClasses: "containerClasses", forced: "forced" }, usesInheritance: true, ngImport: i0, template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-swiper-light', standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe], template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaDeviceInfoService }], propDecorators: { items: [{
                type: Input
            }], template: [{
                type: Input
            }], swiperClasses: [{
                type: Input
            }], containerClasses: [{
                type: Input
            }], forced: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLWxpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvc3dpcGVyLWxpZ2h0L3N3aXBlci1saWdodC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3N3aXBlci1saWdodC9zd2lwZXItbGlnaHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUd0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFTNUMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFrQnZELFlBQW9CLGtCQUF1QztRQUN6RCxLQUFLLEVBQUUsQ0FBQztRQURVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFWM0Qsa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFNN0IsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUVsQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBb0JyQixVQUFLLEdBQUcsQ0FBQyxDQUFNLEVBQUUsSUFBUyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQXhCRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUU7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7K0dBbENVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDRPQ2JqQyxzU0FPQSxrYkRJeUIsT0FBTywrRUFBRSxTQUFTOzs0RkFFOUIsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzt3RkFJMUMsS0FBSztzQkFESixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUs7Z0JBSU4sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0NsYXNzLCBOZ0ZvciwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhRGV2aWNlSW5mb1NlcnZpY2UgfSBmcm9tICdAdGEvY2FwYWNpdG9yJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXN3aXBlci1saWdodCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2lwZXItbGlnaHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2lwZXItbGlnaHQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBOZ0NsYXNzLCBBc3luY1BpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZXJMaWdodENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zITogYW55W107XG5cbiAgQElucHV0KClcbiAgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHN3aXBlckNsYXNzZXMgPSAnZy1zcGFjZS1zbSc7XG5cbiAgQElucHV0KClcbiAgY29udGFpbmVyQ2xhc3Nlcz86IHN0cmluZztcblxuICBASW5wdXQoKVxuICBmb3JjZWQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGNsYXNzZXM6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RldmljZUluZm9TZXJ2aWNlOiBUYURldmljZUluZm9TZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmZvcmNlZCkge1xuICAgICAgdGhpcy5jbGFzc2VzID0gYGl0ZW1zICR7dGhpcy5zd2lwZXJDbGFzc2VzID8/ICcnfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLl9kZXZpY2VJbmZvU2VydmljZS5vcyQuc3Vic2NyaWJlKG9zID0+IHtcbiAgICAgICAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLl9kZXZpY2VJbmZvU2VydmljZS5pc01vYmlsZU9zKG9zKVxuICAgICAgICAgICAgPyBgaXRlbXMgJHt0aGlzLnN3aXBlckNsYXNzZXMgPz8gJyd9YFxuICAgICAgICAgICAgOiAodGhpcy5jb250YWluZXJDbGFzc2VzID8/ICcnKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrID0gKF86IGFueSwgaXRlbTogYW55KSA9PiB7XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2lkJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrQnlJZChfLCBpdGVtKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ2tleScpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja0J5S2V5KF8sIGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyXCIgW25nQ2xhc3NdPVwidGhpcy5jbGFzc2VzXCI+XG4gIEBmb3IgKGl0ZW0gb2YgdGhpcy5pdGVtczsgdHJhY2sgdGhpcy50cmFjaygkaW5kZXgsIGl0ZW0pKSB7XG4gICAgQGlmICgoaXRlbS52aXNpYmxlJCB8IGFzeW5jKSAhPT0gZmFsc2UpIHtcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aGlzLnRlbXBsYXRlOyBjb250ZXh0OiB7IGVsZW1lbnQ6IGl0ZW0gfVwiPjwvbmctY29udGFpbmVyPlxuICAgIH1cbiAgfVxuPC9kaXY+XG4iXX0=