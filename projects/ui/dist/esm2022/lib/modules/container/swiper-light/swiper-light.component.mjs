import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
import * as i1 from "@ta/capacitor";
export class SwiperLightComponent extends TaBaseComponent {
    constructor(_deviceInfoService) {
        super();
        this._deviceInfoService = _deviceInfoService;
        this.swiperClasses = "g-space-sm";
        this.forced = false;
        this.classes = "";
        this.track = (_, item) => {
            if (item.hasOwnProperty("id")) {
                return this.trackById(_, item);
            }
            if (item.hasOwnProperty("key")) {
                return this.trackByKey(_, item);
            }
            return item;
        };
    }
    ngOnInit() {
        if (this.forced) {
            this.classes = `items ${this.swiperClasses ?? ""}`;
        }
        else {
            this._registerSubscription(this._deviceInfoService.os$.subscribe((os) => {
                this.classes = this._deviceInfoService.isMobileOs(os)
                    ? `items ${this.swiperClasses ?? ""}`
                    : this.containerClasses ?? "";
            }));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwiperLightComponent, deps: [{ token: i1.TaDeviceInfoService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SwiperLightComponent, isStandalone: true, selector: "ta-swiper-light", inputs: { items: "items", template: "template", swiperClasses: "swiperClasses", containerClasses: "containerClasses", forced: "forced" }, usesInheritance: true, ngImport: i0, template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) { @if\n  ((item.visible$ | async) !== false) {\n  <ng-container\n    *ngTemplateOutlet=\"this.template; context: { element: item }\"\n  ></ng-container>\n  } }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwiperLightComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-swiper-light", standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe], template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) { @if\n  ((item.visible$ | async) !== false) {\n  <ng-container\n    *ngTemplateOutlet=\"this.template; context: { element: item }\"\n  ></ng-container>\n  } }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLWxpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9jb250YWluZXIvc3dpcGVyLWxpZ2h0L3N3aXBlci1saWdodC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY29udGFpbmVyL3N3aXBlci1saWdodC9zd2lwZXItbGlnaHQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUd0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFTNUMsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFrQnZELFlBQW9CLGtCQUF1QztRQUN6RCxLQUFLLEVBQUUsQ0FBQztRQURVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFWM0Qsa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFNN0IsV0FBTSxHQUFhLEtBQUssQ0FBQztRQUVsQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBb0JyQixVQUFLLEdBQUcsQ0FBQyxDQUFNLEVBQUUsSUFBUyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQXhCRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ3JELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO29CQUNuRCxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsYUFBYSxJQUFJLEVBQUUsRUFBRTtvQkFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDOytHQWxDVSxvQkFBb0I7bUdBQXBCLG9CQUFvQiw0T0NiakMsb1NBUUEsa2JER3lCLE9BQU8sK0VBQUUsU0FBUzs7NEZBRTlCLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7d0ZBSTFDLEtBQUs7c0JBREosS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLO2dCQUlOLGdCQUFnQjtzQkFEZixLQUFLO2dCQUlOLE1BQU07c0JBREwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSwgTmdDbGFzcywgTmdGb3IsIE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFEZXZpY2VJbmZvU2VydmljZSB9IGZyb20gXCJAdGEvY2FwYWNpdG9yXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1zd2lwZXItbGlnaHRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zd2lwZXItbGlnaHQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3N3aXBlci1saWdodC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBOZ0NsYXNzLCBBc3luY1BpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZXJMaWdodENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGl0ZW1zITogYW55W107XG5cbiAgQElucHV0KClcbiAgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHN3aXBlckNsYXNzZXMgPSBcImctc3BhY2Utc21cIjtcblxuICBASW5wdXQoKVxuICBjb250YWluZXJDbGFzc2VzPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGZvcmNlZD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgY2xhc3Nlczogc3RyaW5nID0gXCJcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kZXZpY2VJbmZvU2VydmljZTogVGFEZXZpY2VJbmZvU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JjZWQpIHtcbiAgICAgIHRoaXMuY2xhc3NlcyA9IGBpdGVtcyAke3RoaXMuc3dpcGVyQ2xhc3NlcyA/PyBcIlwifWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLl9kZXZpY2VJbmZvU2VydmljZS5vcyQuc3Vic2NyaWJlKChvcykgPT4ge1xuICAgICAgICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMuX2RldmljZUluZm9TZXJ2aWNlLmlzTW9iaWxlT3Mob3MpXG4gICAgICAgICAgICA/IGBpdGVtcyAke3RoaXMuc3dpcGVyQ2xhc3NlcyA/PyBcIlwifWBcbiAgICAgICAgICAgIDogdGhpcy5jb250YWluZXJDbGFzc2VzID8/IFwiXCI7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0cmFjayA9IChfOiBhbnksIGl0ZW06IGFueSkgPT4ge1xuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwiaWRcIikpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrQnlJZChfLCBpdGVtKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJrZXlcIikpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrQnlLZXkoXywgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9O1xufVxuIiwiPGRpdiBjbGFzcz1cInN3aXBlci1jb250YWluZXJcIiBbbmdDbGFzc109XCJ0aGlzLmNsYXNzZXNcIj5cbiAgQGZvciAoaXRlbSBvZiB0aGlzLml0ZW1zOyB0cmFjayB0aGlzLnRyYWNrKCRpbmRleCwgaXRlbSkpIHsgQGlmXG4gICgoaXRlbS52aXNpYmxlJCB8IGFzeW5jKSAhPT0gZmFsc2UpIHtcbiAgPG5nLWNvbnRhaW5lclxuICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy50ZW1wbGF0ZTsgY29udGV4dDogeyBlbGVtZW50OiBpdGVtIH1cIlxuICA+PC9uZy1jb250YWluZXI+XG4gIH0gfVxuPC9kaXY+XG4iXX0=