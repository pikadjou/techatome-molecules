import { Component, ElementRef, input, output, viewChild, } from "@angular/core";
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
        this.focusedElement = viewChild("focusedElement", { read: ElementRef });
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
                const focused = this.focusedElement();
                if (focused) {
                    focused.nativeElement.click();
                    focused.nativeElement.focus();
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.2.14", type: TaAbstractInputComponent, isStandalone: true, selector: "ng-component", inputs: { inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null }, matcher: { classPropertyName: "matcher", publicName: "matcher", isSignal: true, isRequired: false, transformFunction: null }, standaloneMode: { classPropertyName: "standaloneMode", publicName: "standalone", isSignal: true, isRequired: false, transformFunction: null }, autoFocus: { classPropertyName: "autoFocus", publicName: "autoFocus", isSignal: true, isRequired: false, transformFunction: null }, onFocusObs: { classPropertyName: "onFocusObs", publicName: "onFocus", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef, isSignal: true }], usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUdoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUc1QyxNQUFNLE9BQWdCLHdCQUlwQixTQUFRLGVBQWU7SUFrQnZCLG9EQUFvRDtJQUNwRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQU1EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFuQ1YsZUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRCxZQUFPLEdBQUcsS0FBSyxDQUFvQixJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUU1RCxtQkFBYyxHQUFHLEtBQUssQ0FBVSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUVoRSx1RkFBdUY7UUFDdkYsY0FBUyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVqQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFbkQsZUFBVSxHQUFHLEtBQUssQ0FBK0IsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFbEYsaUJBQVksR0FBRyxNQUFNLEVBQUssQ0FBQztRQWlCM0IsbUJBQWMsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUUxRCxlQUFVLEdBQUcsVUFBVSxDQUFDO0lBSWpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQ3RDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO2FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDZCxTQUFTLENBQUM7WUFDVCxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUNULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDWixPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FDTCxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFRO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7K0dBcEZtQix3QkFBd0I7bUdBQXhCLHdCQUF3QixrM0JBcUNTLFVBQVUsb0VBdEN4QixFQUFFOzs0RkFDckIsd0JBQXdCO2tCQUQ3QyxTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBpbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIG91dHB1dCxcbiAgdmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuXG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZGVsYXksIG1lcmdlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbkBDb21wb25lbnQoeyBzdGFuZGFsb25lOiB0cnVlLCB0ZW1wbGF0ZTogXCJcIiB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxcbiAgICBDIGV4dGVuZHMgSW5wdXRCYXNlPGFueT4sXG4gICAgViA9IHVua25vd25cbiAgPlxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIGlucHV0TW9kZWwgPSBpbnB1dC5yZXF1aXJlZDxDPih7IGFsaWFzOiAnaW5wdXQnIH0pO1xuXG4gIG1hdGNoZXIgPSBpbnB1dDxFcnJvclN0YXRlTWF0Y2hlcj4obmV3IEVycm9yU3RhdGVNYXRjaGVyKCkpO1xuXG4gIHN0YW5kYWxvbmVNb2RlID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UsIHsgYWxpYXM6ICdzdGFuZGFsb25lJyB9KTtcblxuICAvKiogUHJlbmQgbGUgZm9jdXMgZMOocyBxdWUgbGUgY2hhbXAgZXN0IGFmZmljaMOpIChyZWNoZXJjaGUgZCd1bmUgbGlzdGUgcXVpIHMnb3V2cmUpLiAqL1xuICBhdXRvRm9jdXMgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfYXV0b0ZvY3VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgb25Gb2N1c09icyA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCwgeyBhbGlhczogJ29uRm9jdXMnIH0pO1xuXG4gIHZhbHVlQ2hhbmdlZCA9IG91dHB1dDxWPigpO1xuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIHN1YmNsYXNzZXNcbiAgZ2V0IGlucHV0KCk6IEMge1xuICAgIHJldHVybiB0aGlzLmlucHV0TW9kZWwoKTtcbiAgfVxuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBnZXQgc3RhbmRhbG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFsb25lTW9kZSgpO1xuICB9XG5cbiAgLy8gR2V0dGVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIGdldCBvbkZvY3VzKCk6IE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9uRm9jdXNPYnMoKTtcbiAgfVxuXG4gIGZvY3VzZWRFbGVtZW50ID0gdmlld0NoaWxkKFwiZm9jdXNlZEVsZW1lbnRcIiwgeyByZWFkOiBFbGVtZW50UmVmIH0pO1xuXG4gIHJlYWRvbmx5IHZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XG4gICAgICB0aGlzLmlucHV0LmNyZWF0ZUZvcm1Db250cm9sKCk7XG4gICAgfVxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB0aGlzLm9uQ2hhbmdlKHZhbHVlKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIG1lcmdlKHRoaXMuX2F1dG9Gb2N1cyQsIHRoaXMub25Gb2N1cyA/PyBFTVBUWSlcbiAgICAgICAgLnBpcGUoZGVsYXkoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLmZvY3VzZWRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgICAgICBmb2N1c2VkLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICAgICAgZm9jdXNlZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICApO1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cygpKSB7XG4gICAgICB0aGlzLl9hdXRvRm9jdXMkLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnN0YW5kYWxvbmUpIHtcbiAgICAgIHRoaXMuaW5wdXQuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZTogVikge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=