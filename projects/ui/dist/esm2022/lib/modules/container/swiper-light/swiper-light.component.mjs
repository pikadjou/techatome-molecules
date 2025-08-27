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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, deps: [{ token: i1.CamDeviceInfoService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwiperLightComponent, isStandalone: true, selector: "ta-swiper-light", inputs: { items: "items", template: "template", swiperClasses: "swiperClasses", containerClasses: "containerClasses", forced: "forced" }, usesInheritance: true, ngImport: i0, template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-swiper-light', standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe], template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"] }]
        }], ctorParameters: () => [{ type: i1.CamDeviceInfoService }], propDecorators: { items: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLWxpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvc3dpcGVyLWxpZ2h0L3N3aXBlci1saWdodC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3N3aXBlci1saWdodC9zd2lwZXItbGlnaHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUd0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFTNUMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFrQnZELFlBQW9CLGtCQUF3QztRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQURVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0I7UUFWNUQsa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFNN0IsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUVsQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBb0JyQixVQUFLLEdBQUcsQ0FBQyxDQUFNLEVBQUUsSUFBUyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQXhCRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLEVBQUU7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7K0dBbENVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDRPQ2JqQyxzU0FPQSxrYkRJeUIsT0FBTywrRUFBRSxTQUFTOzs0RkFFOUIsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQzt5RkFJMUMsS0FBSztzQkFESixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUs7Z0JBSU4sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0NsYXNzLCBOZ0ZvciwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbURldmljZUluZm9TZXJ2aWNlIH0gZnJvbSAnQHRhL2NhcGFjaXRvcic7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1zd2lwZXItbGlnaHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcGVyLWxpZ2h0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpcGVyLWxpZ2h0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ0ZvciwgTmdDbGFzcywgQXN5bmNQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVyTGlnaHRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBpdGVtcyE6IGFueVtdO1xuXG4gIEBJbnB1dCgpXG4gIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzd2lwZXJDbGFzc2VzID0gJ2ctc3BhY2Utc20nO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lckNsYXNzZXM/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZm9yY2VkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjbGFzc2VzOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kZXZpY2VJbmZvU2VydmljZTogQ2FtRGV2aWNlSW5mb1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9yY2VkKSB7XG4gICAgICB0aGlzLmNsYXNzZXMgPSBgaXRlbXMgJHt0aGlzLnN3aXBlckNsYXNzZXMgPz8gJyd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMuX2RldmljZUluZm9TZXJ2aWNlLm9zJC5zdWJzY3JpYmUob3MgPT4ge1xuICAgICAgICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMuX2RldmljZUluZm9TZXJ2aWNlLmlzTW9iaWxlT3Mob3MpXG4gICAgICAgICAgICA/IGBpdGVtcyAke3RoaXMuc3dpcGVyQ2xhc3NlcyA/PyAnJ31gXG4gICAgICAgICAgICA6ICh0aGlzLmNvbnRhaW5lckNsYXNzZXMgPz8gJycpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdHJhY2sgPSAoXzogYW55LCBpdGVtOiBhbnkpID0+IHtcbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnaWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeUlkKF8sIGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrQnlLZXkoXywgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xufVxuIiwiPGRpdiBjbGFzcz1cInN3aXBlci1jb250YWluZXJcIiBbbmdDbGFzc109XCJ0aGlzLmNsYXNzZXNcIj5cbiAgQGZvciAoaXRlbSBvZiB0aGlzLml0ZW1zOyB0cmFjayB0aGlzLnRyYWNrKCRpbmRleCwgaXRlbSkpIHtcbiAgICBAaWYgKChpdGVtLnZpc2libGUkIHwgYXN5bmMpICE9PSBmYWxzZSkge1xuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRoaXMudGVtcGxhdGU7IGNvbnRleHQ6IHsgZWxlbWVudDogaXRlbSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgfVxuICB9XG48L2Rpdj5cbiJdfQ==