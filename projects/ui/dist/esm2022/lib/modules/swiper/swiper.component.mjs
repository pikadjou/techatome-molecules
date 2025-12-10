import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from "@angular/core";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SwiperComponent, isStandalone: true, selector: "ta-swiper", inputs: { swipeTemplate: "swipeTemplate", slides: "slides", slidesPerPage: "slidesPerPage", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", startAt: "startAt" }, outputs: { onSlideChanged: "onSlideChanged" }, viewQueries: [{ propertyName: "swiperContainer", first: true, predicate: ["swiperContainer"], descendants: true }], ngImport: i0, template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) { @if\n  (element.visible$ | async) {\n  <swiper-slide>\n    <ng-container\n      [ngTemplateOutlet]=\"this.swipeTemplate\"\n      [ngTemplateOutletContext]=\"{\n        element: element\n      }\"\n    >\n    </ng-container>\n  </swiper-slide>\n  } }\n</swiper-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-swiper", standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], encapsulation: ViewEncapsulation.None, imports: [CommonModule], template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) { @if\n  (element.visible$ | async) {\n  <swiper-slide>\n    <ng-container\n      [ngTemplateOutlet]=\"this.swipeTemplate\"\n      [ngTemplateOutletContext]=\"{\n        element: element\n      }\"\n    >\n    </ng-container>\n  </swiper-slide>\n  } }\n</swiper-container>\n" }]
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
                args: ["swiperContainer", { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7QUFtQnZCLE1BQU0sT0FBTyxlQUFlO0lBeUIxQjtRQWpCTyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUc1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUczQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHcEIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBS3BDLENBQUM7SUFFaEIsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLENBQU0sRUFBRSxJQUFnQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFXO1FBQzdCLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7K0dBdkNVLGVBQWU7bUdBQWYsZUFBZSxzWkM5QjVCLDh1QkE0QkEseUREQVksWUFBWTs7NEZBRVgsZUFBZTtrQkFUM0IsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxXQUdQLENBQUMsc0JBQXNCLENBQUMsaUJBQ2xCLGlCQUFpQixDQUFDLElBQUksV0FDNUIsQ0FBQyxZQUFZLENBQUM7d0RBSWhCLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSUMsTUFBTTtzQkFEWixLQUFLO2dCQUlDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSUMsY0FBYztzQkFEcEIsS0FBSztnQkFJQyxVQUFVO3NCQURoQixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFJQyxjQUFjO3NCQURwQixNQUFNO2dCQUlQLGVBQWU7c0JBRGQsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1xuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgU3dpcGVyIH0gZnJvbSBcInN3aXBlci90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXBlckRhdGEge1xuICB2aXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAga2V5OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1zd2lwZXJcIixcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9zd2lwZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3N3aXBlci5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHN3aXBlVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzbGlkZXMhOiBTd2lwZXJEYXRhW107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNsaWRlc1BlclBhZ2U6IG51bWJlciA9IDMuNTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2xpZGVzUGVyR3JvdXA6IG51bWJlciA9IDE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGlzRnJlZU1vZGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGFydEF0OiBudW1iZXIgPSAxO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25TbGlkZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKFwic3dpcGVyQ29udGFpbmVyXCIsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzd2lwZXJDb250YWluZXIhOiBFbGVtZW50UmVmPHsgc3dpcGVyOiBTd2lwZXIgfT47XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5zdGFydEF0KSB7XG4gICAgICB0aGlzLnN3aXBlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN3aXBlci5zbGlkZVRvKHRoaXMuc3RhcnRBdCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRyYWNrQnlLZXkoXzogYW55LCBpdGVtOiBTd2lwZXJEYXRhKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5rZXk7XG4gIH1cblxuICBwdWJsaWMgc2xpZGVDaGFuZ2VkKCRldmVudDogYW55KSB7XG4gICAgaWYgKCRldmVudC5kZXRhaWwpIHRoaXMub25TbGlkZUNoYW5nZWQuZW1pdCgkZXZlbnQuZGV0YWlsWzBdLmFjdGl2ZUluZGV4KTtcbiAgfVxufVxuIiwiPHN3aXBlci1jb250YWluZXJcbiAgI3N3aXBlckNvbnRhaW5lclxuICBbYXR0ci5zbGlkZXMtcGVyLXZpZXddPVwidGhpcy5zbGlkZXNQZXJQYWdlXCJcbiAgKHRyYW5zaXRpb25lbmQpPVwidGhpcy5zbGlkZUNoYW5nZWQoJGV2ZW50KVwiXG4gIFthdHRyLmZyZWUtbW9kZV09XCJ0aGlzLmlzRnJlZU1vZGVcIlxuICBbYXR0ci5zbGlkZXMtcGVyLWdyb3VwXT1cInRoaXMuc2xpZGVzUGVyR3JvdXBcIlxuICBbYXR0ci56b29tXT1cInRydWVcIlxuICBbYXR0ci5wYWdpbmF0aW9uXT1cIntcbiAgICB0eXBlOiAnYnVsbGV0cycsXG4gIH1cIlxuICB3YXRjaC1zbGlkZXMtcHJvZ3Jlc3M9XCJ0cnVlXCJcbiAgaW5pdD1cInRydWVcIlxuICBjbGFzcz1cInctZnVsbFwiXG4gIGFjdGl2ZS1pbmRleD1cIjNcIlxuPlxuICBAZm9yIChlbGVtZW50IG9mIHRoaXMuc2xpZGVzOyB0cmFjayB0aGlzLnRyYWNrQnlLZXkoJGluZGV4LCBlbGVtZW50KSkgeyBAaWZcbiAgKGVsZW1lbnQudmlzaWJsZSQgfCBhc3luYykge1xuICA8c3dpcGVyLXNsaWRlPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoaXMuc3dpcGVUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50XG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvc3dpcGVyLXNsaWRlPlxuICB9IH1cbjwvc3dpcGVyLWNvbnRhaW5lcj5cbiJdfQ==