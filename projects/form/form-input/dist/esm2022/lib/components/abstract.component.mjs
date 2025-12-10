import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { delay } from "rxjs";
import { TaBaseComponent } from "@ta/utils";
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
            next: (value) => this.onChange(value),
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaAbstractInputComponent, selector: "ng-component", inputs: { input: "input", matcher: "matcher", standalone: "standalone", onFocus: "onFocus" }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
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
                args: ["focusedElement", { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFHNUMsTUFBTSxPQUFnQix3QkFJcEIsU0FBUSxlQUFlO0lBdUJ2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBZFYsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU1uQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFLNUIsZUFBVSxHQUFHLFVBQVUsQ0FBQztJQUlqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ3RDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDcEMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM1QyxDQUFDO2dCQUNILENBQUM7YUFDRixDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7K0dBckVtQix3QkFBd0I7bUdBQXhCLHdCQUF3QiwwUkFzQlAsVUFBVSxvREF2QjFCLEVBQUU7OzRGQUNILHdCQUF3QjtrQkFEN0MsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0RBU3pCLEtBQUs7c0JBREosS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixZQUFZO3NCQURYLE1BQU07Z0JBSVAsY0FBYztzQkFEYixTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkZWxheSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8XG4gICAgQyBleHRlbmRzIElucHV0QmFzZTxhbnk+LFxuICAgIFYgPSB1bmtub3duXG4gID5cbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKVxuICBpbnB1dCE6IEM7XG5cbiAgQElucHV0KClcbiAgbWF0Y2hlciE6IEVycm9yU3RhdGVNYXRjaGVyO1xuXG4gIEBJbnB1dCgpXG4gIHN0YW5kYWxvbmUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBvbkZvY3VzITogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICBAT3V0cHV0KClcbiAgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxWPigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2VkRWxlbWVudFwiLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZm9jdXNlZEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHJlYWRvbmx5IHZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5tYXRjaGVyID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1hdGNoZXIgPSBuZXcgRXJyb3JTdGF0ZU1hdGNoZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xuICAgICAgdGhpcy5pbnB1dC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4gdGhpcy5vbkNoYW5nZSh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMub25Gb2N1cykge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMub25Gb2N1cy5waXBlKGRlbGF5KDEpKS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZTogVikge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=