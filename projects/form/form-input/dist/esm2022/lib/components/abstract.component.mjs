import { Component, ElementRef, EventEmitter, input, Output, ViewChild, } from "@angular/core";
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
        this.valueChanged = new EventEmitter();
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
        }], ctorParameters: () => [], propDecorators: { valueChanged: [{
                type: Output
            }], focusedElement: [{
                type: ViewChild,
                args: ["focusedElement", { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Fic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE9BQU8sRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFHNUMsTUFBTSxPQUFnQix3QkFJcEIsU0FBUSxlQUFlO0lBY3ZCLG9EQUFvRDtJQUNwRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQU9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQ1YsZUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVuRCxZQUFPLEdBQUcsS0FBSyxDQUFvQixJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUU1RCxtQkFBYyxHQUFHLEtBQUssQ0FBVSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUVoRSxlQUFVLEdBQUcsS0FBSyxDQUErQixTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUdsRixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFvQjVCLGVBQVUsR0FBRyxVQUFVLENBQUM7SUFJakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDdEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNwQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUNULElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVDLENBQUM7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFUSxXQUFXO1FBQ2xCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQVE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrR0E3RW1CLHdCQUF3QjttR0FBeEIsd0JBQXdCLDB0QkFpQ1AsVUFBVSxvREFsQzFCLEVBQUU7OzRGQUNILHdCQUF3QjtrQkFEN0MsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0RBaUJ6QixZQUFZO3NCQURYLE1BQU07Z0JBbUJQLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGVsYXkgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiBcIlwiIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PFxuICAgIEMgZXh0ZW5kcyBJbnB1dEJhc2U8YW55PixcbiAgICBWID0gdW5rbm93blxuICA+XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgaW5wdXRNb2RlbCA9IGlucHV0LnJlcXVpcmVkPEM+KHsgYWxpYXM6ICdpbnB1dCcgfSk7XG5cbiAgbWF0Y2hlciA9IGlucHV0PEVycm9yU3RhdGVNYXRjaGVyPihuZXcgRXJyb3JTdGF0ZU1hdGNoZXIoKSk7XG5cbiAgc3RhbmRhbG9uZU1vZGUgPSBpbnB1dDxib29sZWFuPihmYWxzZSwgeyBhbGlhczogJ3N0YW5kYWxvbmUnIH0pO1xuXG4gIG9uRm9jdXNPYnMgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQsIHsgYWxpYXM6ICdvbkZvY3VzJyB9KTtcblxuICBAT3V0cHV0KClcbiAgdmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxWPigpO1xuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIHN1YmNsYXNzZXNcbiAgZ2V0IGlucHV0KCk6IEMge1xuICAgIHJldHVybiB0aGlzLmlucHV0TW9kZWwoKTtcbiAgfVxuXG4gIC8vIEdldHRlciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBnZXQgc3RhbmRhbG9uZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGFuZGFsb25lTW9kZSgpO1xuICB9XG5cbiAgLy8gR2V0dGVyIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gIGdldCBvbkZvY3VzKCk6IE9ic2VydmFibGU8dm9pZD4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9uRm9jdXNPYnMoKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoXCJmb2N1c2VkRWxlbWVudFwiLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZm9jdXNlZEVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHJlYWRvbmx5IHZhbGlkYXRvcnMgPSBWYWxpZGF0b3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zdGFuZGFsb25lKSB7XG4gICAgICB0aGlzLmlucHV0LmNyZWF0ZUZvcm1Db250cm9sKCk7XG4gICAgfVxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5pbnB1dC5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB0aGlzLm9uQ2hhbmdlKHZhbHVlKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5vbkZvY3VzLnBpcGUoZGVsYXkoMSkpLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuc3RhbmRhbG9uZSkge1xuICAgICAgdGhpcy5pbnB1dC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKHZhbHVlOiBWKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==