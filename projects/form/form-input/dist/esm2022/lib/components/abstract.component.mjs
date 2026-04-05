import { Component, ElementRef, input, output, ViewChild, } from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { delay } from "rxjs";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaAbstractInputComponent, selector: "ng-component", inputs: { inputModel: { classPropertyName: "inputModel", publicName: "input", isSignal: true, isRequired: true, transformFunction: null }, matcher: { classPropertyName: "matcher", publicName: "matcher", isSignal: true, isRequired: false, transformFunction: null }, standaloneMode: { classPropertyName: "standaloneMode", publicName: "standalone", isSignal: true, isRequired: false, transformFunction: null }, onFocusObs: { classPropertyName: "onFocusObs", publicName: "onFocus", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [], propDecorators: { focusedElement: [{
                type: ViewChild,
                args: ["focusedElement", { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0QsT0FBTyxFQUFjLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUc1QyxNQUFNLE9BQWdCLHdCQUlwQixTQUFRLGVBQWU7SUFhdkIsb0RBQW9EO0lBQ3BELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG9DQUFvQztJQUNwQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBT0Q7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQS9CVixlQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELFlBQU8sR0FBRyxLQUFLLENBQW9CLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBRTVELG1CQUFjLEdBQUcsS0FBSyxDQUFVLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLGVBQVUsR0FBRyxLQUFLLENBQStCLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRWxGLGlCQUFZLEdBQUcsTUFBTSxFQUFLLENBQUM7UUFvQmxCLGVBQVUsR0FBRyxVQUFVLENBQUM7SUFJakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDdEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUNULElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVDLENBQUM7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFUSxXQUFXO1FBQ2xCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrR0E1RW1CLHdCQUF3QjttR0FBeEIsd0JBQXdCLDB0QkFnQ1AsVUFBVSxvREFqQzFCLEVBQUU7OzRGQUNILHdCQUF3QjtrQkFEN0MsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0RBa0N6QixjQUFjO3NCQURiLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBpbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIG91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkZWxheSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8XG4gICAgQyBleHRlbmRzIElucHV0QmFzZTxhbnk+LFxuICAgIFYgPSB1bmtub3duXG4gID5cbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBpbnB1dE1vZGVsID0gaW5wdXQucmVxdWlyZWQ8Qz4oeyBhbGlhczogJ2lucHV0JyB9KTtcblxuICBtYXRjaGVyID0gaW5wdXQ8RXJyb3JTdGF0ZU1hdGNoZXI+KG5ldyBFcnJvclN0YXRlTWF0Y2hlcigpKTtcblxuICBzdGFuZGFsb25lTW9kZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlLCB7IGFsaWFzOiAnc3RhbmRhbG9uZScgfSk7XG5cbiAgb25Gb2N1c09icyA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCwgeyBhbGlhczogJ29uRm9jdXMnIH0pO1xuXG4gIHZhbHVlQ2hhbmdlZCA9IG91dHB1dDxWPigpO1xuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIHN1YmNsYXNzZXNcbiAgZ2V0IGlucHV0KCk6IEMge1xuICAgIHJldHVybiB0aGlzLmlucHV0TW9kZWwoKTtcbiAgfVxuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBnZXQgc3RhbmRhbG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFsb25lTW9kZSgpO1xuICB9XG5cbiAgLy8gR2V0dGVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIGdldCBvbkZvY3VzKCk6IE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9uRm9jdXNPYnMoKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2VkRWxlbWVudFwiLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZm9jdXNlZEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHJlYWRvbmx5IHZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XG4gICAgICB0aGlzLmlucHV0LmNyZWF0ZUZvcm1Db250cm9sKCk7XG4gICAgfVxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB0aGlzLm9uQ2hhbmdlKHZhbHVlKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5vbkZvY3VzLnBpcGUoZGVsYXkoMSkpLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xuICAgICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKHZhbHVlOiBWKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==