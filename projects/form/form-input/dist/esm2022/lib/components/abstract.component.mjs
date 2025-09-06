import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { delay } from 'rxjs';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export class TaAbstractInputComponent extends TaBaseComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaAbstractInputComponent, selector: "ng-component", inputs: { input: "input", matcher: "matcher", standalone: "standalone", onFocus: "onFocus" }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFHNUMsTUFBTSxPQUFnQix3QkFDcEIsU0FBUSxlQUFlO0lBdUJ2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBZFYsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU1uQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFLNUIsZUFBVSxHQUFHLFVBQVUsQ0FBQztJQUlqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUNwQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3BDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQ1QsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDNUMsQ0FBQztnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVRLFdBQVc7UUFDbEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7SUFFTSxRQUFRLENBQUMsS0FBUTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOytHQWxFbUIsd0JBQXdCO21HQUF4Qix3QkFBd0IsMFJBbUJQLFVBQVUsb0RBcEIxQixFQUFFOzs0RkFDSCx3QkFBd0I7a0JBRDdDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dEQU16QixLQUFLO3NCQURKLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxNQUFNO2dCQUlQLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGVsYXkgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxDIGV4dGVuZHMgSW5wdXRCYXNlPGFueT4sIFYgPSB1bmtub3duPlxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIEBJbnB1dCgpXG4gIGlucHV0ITogQztcblxuICBASW5wdXQoKVxuICBtYXRjaGVyITogRXJyb3JTdGF0ZU1hdGNoZXI7XG5cbiAgQElucHV0KClcbiAgc3RhbmRhbG9uZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIG9uRm9jdXMhOiBPYnNlcnZhYmxlPHZvaWQ+O1xuXG4gIEBPdXRwdXQoKVxuICB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFY+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZm9jdXNlZEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZm9jdXNlZEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHJlYWRvbmx5IHZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1hdGNoZXIgPSBuZXcgRXJyb3JTdGF0ZU1hdGNoZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xuICAgICAgdGhpcy5pbnB1dC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IHZhbHVlID0+IHRoaXMub25DaGFuZ2UodmFsdWUpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLm9uRm9jdXMucGlwZShkZWxheSgxKSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XG4gICAgICB0aGlzLmlucHV0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UodmFsdWU6IFYpIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19