import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputPhoneComponent extends TaAbstractInputComponent {
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
            initialCountry: 'be',
            countryOrder: this.input.preferredCountries,
            separateDialCode: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQVNqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQW9DO0lBRzNFLFlBQW9CLFFBQW1CO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUV2QyxDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLG1GQUFtRixDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNRLGVBQWU7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLDBEQUEwRDtRQUMxRCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsY0FBYyxFQUFFLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQXlCO1lBQ2xELGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FyQlUsbUJBQW1CO21HQUFuQixtQkFBbUIsMk1DakJoQyw0S0FHQSwySURZWSxvQkFBb0IsaUdBQUUsbUJBQW1COzs0RkFFeEMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDOzhFQUdSLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCBpbnRsVGVsSW5wdXQgZnJvbSAnaW50bC10ZWwtaW5wdXQnO1xuXG5pbXBvcnQgeyBJbnB1dFBob25lIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LXBob25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtcGhvbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQaG9uZUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFBob25lPiB7XG4gIEBWaWV3Q2hpbGQoJ3Bob25lSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGhvbmVJbnB1dCE6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9pbnRsLXRlbC1pbnB1dEAyNS4zLjAvYnVpbGQvY3NzL2ludGxUZWxJbnB1dC5taW4uY3NzJztcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmhlYWQsIGxpbmspO1xuICB9XG4gIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAvLyBJbml0aWFsaXNlciBpbnRsLXRlbC1pbnB1dCB1bmUgZm9pcyBxdWUgbGUgRE9NIGVzdCBwcsOqdFxuICAgIGludGxUZWxJbnB1dCh0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudCwge1xuICAgICAgaW5pdGlhbENvdW50cnk6ICdiZScsXG4gICAgICBjb3VudHJ5T3JkZXI6IHRoaXMuaW5wdXQucHJlZmVycmVkQ291bnRyaWVzIGFzIGFueSxcbiAgICAgIHNlcGFyYXRlRGlhbENvZGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI3Bob25lSW5wdXQgdHlwZT1cInRlbFwiIFtmb3JtQ29udHJvbF09XCIkYW55KHRoaXMuaW5wdXQuZm9ybUNvbnRyb2wpXCIgLz5cbjwvdGEtaW5wdXQtbGF5b3V0PlxuIl19