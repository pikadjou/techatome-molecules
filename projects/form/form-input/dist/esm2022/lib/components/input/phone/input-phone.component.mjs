import { Component, ViewChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import intlTelInput from "intl-tel-input";
import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputPhoneComponent extends TaAbstractInputComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
    }
    ngOnInit() {
        super.ngOnInit();
        const link = this.renderer.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css";
        this.renderer.appendChild(document.head, link);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // Initialiser intl-tel-input une fois que le DOM est prêt
        intlTelInput(this.phoneInput.nativeElement, {
            initialCountry: "be",
            countryOrder: this.input.preferredCountries,
            separateDialCode: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-phone", standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ["phoneInput", { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQVNqRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsd0JBQW9DO0lBRzNFLFlBQW9CLFFBQW1CO1FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUV2QyxDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSTtZQUNQLG1GQUFtRixDQUFDO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNRLGVBQWU7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLDBEQUEwRDtRQUMxRCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsY0FBYyxFQUFFLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQXlCO1lBQ2xELGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F0QlUsbUJBQW1CO21HQUFuQixtQkFBbUIsMk1DakJoQyxtTUFRQSwySURPWSxvQkFBb0IsaUdBQUUsbUJBQW1COzs0RkFFeEMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDOzhFQUdSLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gXCJpbnRsLXRlbC1pbnB1dFwiO1xuXG5pbXBvcnQgeyBJbnB1dFBob25lIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1pbnB1dC1waG9uZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9pbnB1dC1waG9uZS5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQaG9uZUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFBob25lPiB7XG4gIEBWaWV3Q2hpbGQoXCJwaG9uZUlucHV0XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBwaG9uZUlucHV0ITogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgY29uc3QgbGluayA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICBsaW5rLmhyZWYgPVxuICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2ludGwtdGVsLWlucHV0QDI1LjMuMC9idWlsZC9jc3MvaW50bFRlbElucHV0Lm1pbi5jc3NcIjtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmhlYWQsIGxpbmspO1xuICB9XG4gIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAvLyBJbml0aWFsaXNlciBpbnRsLXRlbC1pbnB1dCB1bmUgZm9pcyBxdWUgbGUgRE9NIGVzdCBwcsOqdFxuICAgIGludGxUZWxJbnB1dCh0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudCwge1xuICAgICAgaW5pdGlhbENvdW50cnk6IFwiYmVcIixcbiAgICAgIGNvdW50cnlPcmRlcjogdGhpcy5pbnB1dC5wcmVmZXJyZWRDb3VudHJpZXMgYXMgYW55LFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgI3Bob25lSW5wdXRcbiAgICB0eXBlPVwidGVsXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiJGFueSh0aGlzLmlucHV0LmZvcm1Db250cm9sKVwiXG4gIC8+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==