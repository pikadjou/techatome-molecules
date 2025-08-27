import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { CamAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputPhoneComponent extends CamAbstractInputComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
    }
    ngOnInit() {
        super.ngOnInit();
        const link = this.renderer.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css';
        this.renderer.appendChild(document.head, link);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // Initialiser intl-tel-input une fois que le DOM est prêt
        intlTelInput(this.phoneInput.nativeElement, {
            initialCountry: 'fr',
            countryOrder: this.input.preferredCountries,
            separateDialCode: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputPhoneComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckQsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQVNqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEseUJBQXFDO0lBRzVFLFlBQW9CLFFBQW1CO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUV2QyxDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLG1GQUFtRixDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNRLGVBQWU7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLDBEQUEwRDtRQUMxRCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsY0FBYyxFQUFFLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQzNDLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FyQlUsbUJBQW1CO21HQUFuQixtQkFBbUIsMk1DaEJoQyw0S0FHQSwySURXWSxvQkFBb0IsaUdBQUUsbUJBQW1COzs0RkFFeEMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNBLGdCQUFnQixjQUdaLElBQUksV0FDUCxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDOzhFQUdSLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElucHV0UGhvbmUgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gJ2ludGwtdGVsLWlucHV0JztcblxuaW1wb3J0IHsgQ2FtQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dExheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWlucHV0LXBob25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtcGhvbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQaG9uZUNvbXBvbmVudCBleHRlbmRzIENhbUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRQaG9uZT4ge1xuICBAVmlld0NoaWxkKCdwaG9uZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHBob25lSW5wdXQhOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMjUuMy4wL2J1aWxkL2Nzcy9pbnRsVGVsSW5wdXQubWluLmNzcyc7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5oZWFkLCBsaW5rKTtcbiAgfVxuICBvdmVycmlkZSBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgLy8gSW5pdGlhbGlzZXIgaW50bC10ZWwtaW5wdXQgdW5lIGZvaXMgcXVlIGxlIERPTSBlc3QgcHLDqnRcbiAgICBpbnRsVGVsSW5wdXQodGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGluaXRpYWxDb3VudHJ5OiAnZnInLFxuICAgICAgY291bnRyeU9yZGVyOiB0aGlzLmlucHV0LnByZWZlcnJlZENvdW50cmllcyxcbiAgICAgIHNlcGFyYXRlRGlhbENvZGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI3Bob25lSW5wdXQgdHlwZT1cInRlbFwiIFtmb3JtQ29udHJvbF09XCIkYW55KHRoaXMuaW5wdXQuZm9ybUNvbnRyb2wpXCIgLz5cbjwvdGEtaW5wdXQtbGF5b3V0PlxuIl19