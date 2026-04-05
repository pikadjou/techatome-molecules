import { Component, inject, Renderer2, ViewChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import intlTelInput from "intl-tel-input";
import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class InputPhoneComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this._renderer = inject(Renderer2);
    }
    ngOnInit() {
        super.ngOnInit();
        const link = this._renderer.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css";
        this._renderer.appendChild(document.head, link);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-phone", standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], ctorParameters: () => [], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ["phoneInput", { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBSTFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7QUFTakYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUFvQztJQUszRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSEYsY0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUl0QyxDQUFDO0lBQ1EsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSTtZQUNQLG1GQUFtRixDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNRLGVBQWU7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLDBEQUEwRDtRQUMxRCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDMUMsY0FBYyxFQUFFLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQXlCO1lBQ2xELGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F4QlUsbUJBQW1CO21HQUFuQixtQkFBbUIsMk1DakJoQyxtTUFRQSwySURPWSxvQkFBb0IsaUdBQUUsbUJBQW1COzs0RkFFeEMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGdCQUFnQixjQUdkLElBQUksV0FDUCxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO3dEQUdSLFVBQVU7c0JBQXJELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgaW5qZWN0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCBpbnRsVGVsSW5wdXQgZnJvbSBcImludGwtdGVsLWlucHV0XCI7XG5cbmltcG9ydCB7IElucHV0UGhvbmUgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LXBob25lXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5wdXQtcGhvbmUuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lucHV0LXBob25lLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbSW5wdXRMYXlvdXRDb21wb25lbnQsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFBob25lQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0UGhvbmU+IHtcbiAgQFZpZXdDaGlsZChcInBob25lSW5wdXRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHBob25lSW5wdXQhOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3JlbmRlcmVyID0gaW5qZWN0KFJlbmRlcmVyMik7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgIGxpbmsuaHJlZiA9XG4gICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMjUuMy4wL2J1aWxkL2Nzcy9pbnRsVGVsSW5wdXQubWluLmNzc1wiO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmhlYWQsIGxpbmspO1xuICB9XG4gIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAvLyBJbml0aWFsaXNlciBpbnRsLXRlbC1pbnB1dCB1bmUgZm9pcyBxdWUgbGUgRE9NIGVzdCBwcsOqdFxuICAgIGludGxUZWxJbnB1dCh0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudCwge1xuICAgICAgaW5pdGlhbENvdW50cnk6IFwiYmVcIixcbiAgICAgIGNvdW50cnlPcmRlcjogdGhpcy5pbnB1dC5wcmVmZXJyZWRDb3VudHJpZXMgYXMgYW55LFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgI3Bob25lSW5wdXRcbiAgICB0eXBlPVwidGVsXCJcbiAgICBbZm9ybUNvbnRyb2xdPVwiJGFueSh0aGlzLmlucHV0LmZvcm1Db250cm9sKVwiXG4gIC8+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==