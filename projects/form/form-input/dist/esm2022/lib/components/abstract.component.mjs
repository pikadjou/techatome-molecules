import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TaBaseComponent } from '@ta/utils';
import { delay } from 'rxjs';
import * as i0 from "@angular/core";
export class CamAbstractInputComponent extends TaBaseComponent {
    constructor() {
        super();
        this.standalone = false;
        this.valueChanged = new EventEmitter();
        this.validators = Validators;
    }
    ngOnInit() {
        if (this.matcher === null) {
            this.matcher = new ErrorStateMatcher();
        }
        if (this.standalone) {
            this.input.createFormControl();
        }
        this._registerSubscription(this.input.changeValue$.subscribe({
            next: value => this.onChange(value),
        }));
    }
    ngAfterViewInit() {
        if (this.onFocus) {
            this._registerSubscription(this.onFocus.pipe(delay(1)).subscribe({
                next: () => {
                    if (this.focusedElement) {
                        this.focusedElement.nativeElement.click();
                        this.focusedElement.nativeElement.focus();
                    }
                },
            }));
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.standalone) {
            this.input.destroy();
        }
    }
    onChange(value) {
        this.valueChanged.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAbstractInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamAbstractInputComponent, selector: "ng-component", inputs: { input: "input", matcher: "matcher", standalone: "standalone", onFocus: "onFocus" }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [], propDecorators: { input: [{
                type: Input
            }], matcher: [{
                type: Input
            }], standalone: [{
                type: Input
            }], onFocus: [{
                type: Input
            }], valueChanged: [{
                type: Output
            }], focusedElement: [{
                type: ViewChild,
                args: ['focusedElement', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHekMsTUFBTSxPQUFnQix5QkFDcEIsU0FBUSxlQUFlO0lBdUJ2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBZFYsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU1uQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFLNUIsZUFBVSxHQUFHLFVBQVUsQ0FBQztJQUlqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNwQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3BDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQ1QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDNUMsQ0FBQztnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVRLFdBQVc7UUFDbEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFFTSxRQUFRLENBQUMsS0FBUTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOytHQWxFbUIseUJBQXlCO21HQUF6Qix5QkFBeUIsMFJBbUJSLFVBQVUsb0RBcEIxQixFQUFFOzs0RkFDSCx5QkFBeUI7a0JBRDlDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dEQU16QixLQUFLO3NCQURKLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxNQUFNO2dCQUlQLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGRlbGF5IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYW1BYnN0cmFjdElucHV0Q29tcG9uZW50PEMgZXh0ZW5kcyBJbnB1dEJhc2U8YW55PiwgViA9IHVua25vd24+XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgQElucHV0KClcbiAgaW5wdXQhOiBDO1xuXG4gIEBJbnB1dCgpXG4gIG1hdGNoZXIhOiBFcnJvclN0YXRlTWF0Y2hlcjtcblxuICBASW5wdXQoKVxuICBzdGFuZGFsb25lID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgb25Gb2N1cyE6IE9ic2VydmFibGU8dm9pZD47XG5cbiAgQE91dHB1dCgpXG4gIHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Vj4oKTtcblxuICBAVmlld0NoaWxkKCdmb2N1c2VkRWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBmb2N1c2VkRWxlbWVudCE6IEVsZW1lbnRSZWY7XG5cbiAgcmVhZG9ubHkgdmFsaWRhdG9ycyA9IFZhbGlkYXRvcnM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm1hdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubWF0Y2hlciA9IG5ldyBFcnJvclN0YXRlTWF0Y2hlcigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XG4gICAgICB0aGlzLmlucHV0LmNyZWF0ZUZvcm1Db250cm9sKCk7XG4gICAgfVxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogdmFsdWUgPT4gdGhpcy5vbkNoYW5nZSh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMub25Gb2N1cykge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMub25Gb2N1cy5waXBlKGRlbGF5KDEpKS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZTogVikge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=