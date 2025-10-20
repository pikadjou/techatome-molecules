import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor() {
        this.slidesPerPage = 3.5;
        this.slidesPerGroup = 1;
        this.isFreeMode = true;
        this.startAt = 1;
        this.onSlideChanged = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.startAt) {
            this.swiperContainer.nativeElement.swiper.slideTo(this.startAt);
        }
    }
    trackByKey(_, item) {
        return item.key;
    }
    slideChanged($event) {
        if ($event.detail)
            this.onSlideChanged.emit($event.detail[0].activeIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwiperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SwiperComponent, isStandalone: true, selector: "ta-swiper", inputs: { swipeTemplate: "swipeTemplate", slides: "slides", slidesPerPage: "slidesPerPage", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", startAt: "startAt" }, outputs: { onSlideChanged: "onSlideChanged" }, viewQueries: [{ propertyName: "swiperContainer", first: true, predicate: ["swiperContainer"], descendants: true }], ngImport: i0, template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) {\n    @if (element.visible$ | async) {\n      <swiper-slide>\n        <ng-container\n          [ngTemplateOutlet]=\"this.swipeTemplate\"\n          [ngTemplateOutletContext]=\"{\n            element: element\n          }\"\n        >\n        </ng-container>\n      </swiper-slide>\n    }\n  }\n</swiper-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-swiper', standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], encapsulation: ViewEncapsulation.None, imports: [CommonModule], template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) {\n    @if (element.visible$ | async) {\n      <swiper-slide>\n        <ng-container\n          [ngTemplateOutlet]=\"this.swipeTemplate\"\n          [ngTemplateOutletContext]=\"{\n            element: element\n          }\"\n        >\n        </ng-container>\n      </swiper-slide>\n    }\n  }\n</swiper-container>\n" }]
        }], ctorParameters: () => [], propDecorators: { swipeTemplate: [{
                type: Input
            }], slides: [{
                type: Input
            }], slidesPerPage: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], isFreeMode: [{
                type: Input
            }], startAt: [{
                type: Input
            }], onSlideChanged: [{
                type: Output
            }], swiperContainer: [{
                type: ViewChild,
                args: ['swiperContainer', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7QUFtQnZCLE1BQU0sT0FBTyxlQUFlO0lBeUIxQjtRQWpCTyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUczQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHcEIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBS3BDLENBQUM7SUFFaEIsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLENBQU0sRUFBRSxJQUFnQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFXO1FBQzdCLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7K0dBdkNVLGVBQWU7bUdBQWYsZUFBZSxzWkM5QjVCLHl4QkE2QkEseURERFksWUFBWTs7NEZBRVgsZUFBZTtrQkFUM0IsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxXQUdQLENBQUMsc0JBQXNCLENBQUMsaUJBQ2xCLGlCQUFpQixDQUFDLElBQUksV0FDNUIsQ0FBQyxZQUFZLENBQUM7d0RBSWhCLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSUMsTUFBTTtzQkFEWixLQUFLO2dCQUlDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSUMsY0FBYztzQkFEcEIsS0FBSztnQkFJQyxVQUFVO3NCQURoQixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFJQyxjQUFjO3NCQURwQixNQUFNO2dCQUlQLGVBQWU7c0JBRGQsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3dpcGVyIH0gZnJvbSAnc3dpcGVyL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTd2lwZXJEYXRhIHtcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGtleTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1zd2lwZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpcGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFN3aXBlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzd2lwZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2xpZGVzITogU3dpcGVyRGF0YVtdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzbGlkZXNQZXJQYWdlOiBudW1iZXIgPSAzLjU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNsaWRlc1Blckdyb3VwOiBudW1iZXIgPSAxO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0ZyZWVNb2RlOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RhcnRBdDogbnVtYmVyID0gMTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uU2xpZGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgnc3dpcGVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHN3aXBlckNvbnRhaW5lciE6IEVsZW1lbnRSZWY8eyBzd2lwZXI6IFN3aXBlciB9PjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnN0YXJ0QXQpIHtcbiAgICAgIHRoaXMuc3dpcGVyQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3dpcGVyLnNsaWRlVG8odGhpcy5zdGFydEF0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdHJhY2tCeUtleShfOiBhbnksIGl0ZW06IFN3aXBlckRhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBpdGVtLmtleTtcbiAgfVxuXG4gIHB1YmxpYyBzbGlkZUNoYW5nZWQoJGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoJGV2ZW50LmRldGFpbCkgdGhpcy5vblNsaWRlQ2hhbmdlZC5lbWl0KCRldmVudC5kZXRhaWxbMF0uYWN0aXZlSW5kZXgpO1xuICB9XG59XG4iLCI8c3dpcGVyLWNvbnRhaW5lclxuICAjc3dpcGVyQ29udGFpbmVyXG4gIFthdHRyLnNsaWRlcy1wZXItdmlld109XCJ0aGlzLnNsaWRlc1BlclBhZ2VcIlxuICAodHJhbnNpdGlvbmVuZCk9XCJ0aGlzLnNsaWRlQ2hhbmdlZCgkZXZlbnQpXCJcbiAgW2F0dHIuZnJlZS1tb2RlXT1cInRoaXMuaXNGcmVlTW9kZVwiXG4gIFthdHRyLnNsaWRlcy1wZXItZ3JvdXBdPVwidGhpcy5zbGlkZXNQZXJHcm91cFwiXG4gIFthdHRyLnpvb21dPVwidHJ1ZVwiXG4gIFthdHRyLnBhZ2luYXRpb25dPVwie1xuICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgfVwiXG4gIHdhdGNoLXNsaWRlcy1wcm9ncmVzcz1cInRydWVcIlxuICBpbml0PVwidHJ1ZVwiXG4gIGNsYXNzPVwidy1mdWxsXCJcbiAgYWN0aXZlLWluZGV4PVwiM1wiXG4+XG4gIEBmb3IgKGVsZW1lbnQgb2YgdGhpcy5zbGlkZXM7IHRyYWNrIHRoaXMudHJhY2tCeUtleSgkaW5kZXgsIGVsZW1lbnQpKSB7XG4gICAgQGlmIChlbGVtZW50LnZpc2libGUkIHwgYXN5bmMpIHtcbiAgICAgIDxzd2lwZXItc2xpZGU+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aGlzLnN3aXBlVGVtcGxhdGVcIlxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3N3aXBlci1zbGlkZT5cbiAgICB9XG4gIH1cbjwvc3dpcGVyLWNvbnRhaW5lcj5cbiJdfQ==