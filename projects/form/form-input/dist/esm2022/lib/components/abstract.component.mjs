import { Component, ElementRef, input, output, ViewChild, } from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { EMPTY, Subject, delay, merge } from "rxjs";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export class TaAbstractInputComponent extends TaBaseComponent {
    // Getter for backward compatibility with subclasses
    get input() {
        return this.inputModel();
    }
    // Getter for backward compatibility
    get standalone() {
        return this.standaloneMode();
    }
    // Getter for backward compatibility
    get onFocus() {
        return this.onFocusObs();
    }
    constructor() {
        super();
        this.inputModel = input.required({ alias: 'input' });
        this.matcher = input(new ErrorStateMatcher());
        this.standaloneMode = input(false, { alias: 'standalone' });
        /** Prend le focus dès que le champ est affiché (recherche d'une liste qui s'ouvre). */
        this.autoFocus = input(false);
        this._autoFocus$ = new Subject();
        this.onFocusObs = input(undefined, { alias: 'onFocus' });
        this.valueChanged = output();
        this.validators = Validators;
    }
    ngOnInit() {
        if (this.standalone) {
            this.input.createFormControl();
        }
        this._registerSubscription(this.input.changeValue$.subscribe({
            next: (value) => this.onChange(value),
        }));
    }
    ngAfterViewInit() {
        this._registerSubscription(merge(this._autoFocus$, this.onFocus ?? EMPTY)
            .pipe(delay(1))
            .subscribe({
            next: () => {
                if (this.focusedElement) {
                    this.focusedElement.nativeElement.click();
                    this.focusedElement.nativeElement.focus();
                }
            },
        }));
        if (this.autoFocus()) {
            this._autoFocus$.next();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaAbstractInputComponent, selector: "ng-component", inputs: { inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null }, matcher: { classPropertyName: "matcher", publicName: "matcher", isSignal: true, isRequired: false, transformFunction: null }, standaloneMode: { classPropertyName: "standaloneMode", publicName: "standalone", isSignal: true, isRequired: false, transformFunction: null }, autoFocus: { classPropertyName: "autoFocus", publicName: "autoFocus", isSignal: true, isRequired: false, transformFunction: null }, onFocusObs: { classPropertyName: "onFocusObs", publicName: "onFocus", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [], propDecorators: { focusedElement: [{
                type: ViewChild,
                args: ["focusedElement", { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUc1QyxNQUFNLE9BQWdCLHdCQUlwQixTQUFRLGVBQWU7SUFrQnZCLG9EQUFvRDtJQUNwRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQU9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFwQ1YsZUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRCxZQUFPLEdBQUcsS0FBSyxDQUFvQixJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUU1RCxtQkFBYyxHQUFHLEtBQUssQ0FBVSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUVoRSx1RkFBdUY7UUFDdkYsY0FBUyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVqQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFbkQsZUFBVSxHQUFHLEtBQUssQ0FBK0IsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFbEYsaUJBQVksR0FBRyxNQUFNLEVBQUssQ0FBQztRQW9CbEIsZUFBVSxHQUFHLFVBQVUsQ0FBQztJQUlqQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUN0QyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQzthQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2QsU0FBUyxDQUFDO1lBQ1QsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QyxDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FDTCxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7K0dBcEZtQix3QkFBd0I7bUdBQXhCLHdCQUF3Qiw4MUJBcUNQLFVBQVUsb0RBdEMxQixFQUFFOzs0RkFDSCx3QkFBd0I7a0JBRDdDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dEQXVDekIsY0FBYztzQkFEYixTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgaW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBvdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuaW1wb3J0IHsgRU1QVFksIE9ic2VydmFibGUsIFN1YmplY3QsIGRlbGF5LCBtZXJnZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8XG4gICAgQyBleHRlbmRzIElucHV0QmFzZTxhbnk+LFxuICAgIFYgPSB1bmtub3duXG4gID5cbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBpbnB1dE1vZGVsID0gaW5wdXQucmVxdWlyZWQ8Qz4oeyBhbGlhczogJ2lucHV0JyB9KTtcblxuICBtYXRjaGVyID0gaW5wdXQ8RXJyb3JTdGF0ZU1hdGNoZXI+KG5ldyBFcnJvclN0YXRlTWF0Y2hlcigpKTtcblxuICBzdGFuZGFsb25lTW9kZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlLCB7IGFsaWFzOiAnc3RhbmRhbG9uZScgfSk7XG5cbiAgLyoqIFByZW5kIGxlIGZvY3VzIGTDqHMgcXVlIGxlIGNoYW1wIGVzdCBhZmZpY2jDqSAocmVjaGVyY2hlIGQndW5lIGxpc3RlIHF1aSBzJ291dnJlKS4gKi9cbiAgYXV0b0ZvY3VzID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2F1dG9Gb2N1cyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIG9uRm9jdXNPYnMgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQsIHsgYWxpYXM6ICdvbkZvY3VzJyB9KTtcblxuICB2YWx1ZUNoYW5nZWQgPSBvdXRwdXQ8Vj4oKTtcblxuICAvLyBHZXR0ZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBzdWJjbGFzc2VzXG4gIGdldCBpbnB1dCgpOiBDIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dE1vZGVsKCk7XG4gIH1cblxuICAvLyBHZXR0ZXIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgZ2V0IHN0YW5kYWxvbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhbmRhbG9uZU1vZGUoKTtcbiAgfVxuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBnZXQgb25Gb2N1cygpOiBPYnNlcnZhYmxlPHZvaWQ+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5vbkZvY3VzT2JzKCk7XG4gIH1cblxuICBAVmlld0NoaWxkKFwiZm9jdXNlZEVsZW1lbnRcIiwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIGZvY3VzZWRFbGVtZW50ITogRWxlbWVudFJlZjtcblxuICByZWFkb25seSB2YWxpZGF0b3JzID0gVmFsaWRhdG9ycztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xuICAgICAgdGhpcy5pbnB1dC5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICAgIH1cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuaW5wdXQuY2hhbmdlVmFsdWUkLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2YWx1ZSkgPT4gdGhpcy5vbkNoYW5nZSh2YWx1ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBtZXJnZSh0aGlzLl9hdXRvRm9jdXMkLCB0aGlzLm9uRm9jdXMgPz8gRU1QVFkpXG4gICAgICAgIC5waXBlKGRlbGF5KDEpKVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cygpKSB7XG4gICAgICB0aGlzLl9hdXRvRm9jdXMkLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZTogVikge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=