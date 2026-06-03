import { Component, signal, ViewChild } from '@angular/core';
import intlTelInput from 'intl-tel-input';
import { phoneValidator } from '@ta/form-model';
import { LoaderComponent } from '@ta/ui';
import { loadStylesheet } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import * as i0 from "@angular/core";
intlTelInput.attachUtils(() => import('intl-tel-input/utils'));
export class InputPhoneComponent extends TaAbstractInputComponent {
    constructor() {
        super(...arguments);
        this.isReady = signal(false);
        this._syncingFromControl = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this._stylesheetReady$ = loadStylesheet('intl-tel-input-css', 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css');
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        (this._stylesheetReady$ ?? Promise.resolve()).catch(() => undefined).then(() => this._initPhoneInput());
    }
    _initPhoneInput() {
        this._iti = intlTelInput(this.phoneInput.nativeElement, {
            initialCountry: 'be',
            countryOrder: this.input.preferredCountries,
            separateDialCode: true,
        });
        const control = this.input.formControl;
        if (!control) {
            return;
        }
        this._iti.promise.then(() => {
            if (control.value) {
                this._writeFromControl(control.value);
            }
            control.updateValueAndValidity({ emitEvent: false });
            this.isReady.set(true);
        });
        this._validator = phoneValidator(() => this._iti);
        control.addValidators(this._validator);
        control.updateValueAndValidity({ emitEvent: false });
        this._registerSubscription(control.valueChanges.subscribe(value => {
            if (this._syncingFromControl) {
                return;
            }
            this._writeFromControl(value);
        }));
        this._iti.setDisabled(control.disabled);
        this._registerSubscription(control.statusChanges.subscribe(() => {
            this._iti?.setDisabled(control.disabled);
        }));
    }
    ngOnDestroy() {
        if (this._validator) {
            this.input.formControl?.removeValidators(this._validator);
        }
        this._iti?.destroy();
        super.ngOnDestroy();
    }
    onBlur() {
        if (!this.isReady()) {
            return;
        }
        this._dispatch();
    }
    onCountryChange() {
        if (!this.isReady()) {
            return;
        }
        this._dispatch();
        this.input.formControl?.updateValueAndValidity();
    }
    _dispatch() {
        const control = this.input.formControl;
        if (!control) {
            return;
        }
        const fullValue = this._iti?.getNumber() ?? '';
        if (control.value !== fullValue) {
            this._syncingFromControl = true;
            control.setValue(fullValue);
            this._syncingFromControl = false;
        }
    }
    _writeFromControl(value) {
        this._syncingFromControl = true;
        this._iti?.setNumber(typeof value === 'string' ? value : '');
        this._syncingFromControl = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}:host ::ng-deep .mdc-text-field{overflow:visible}:host ::ng-deep .iti__search-icon{display:none}:host ::ng-deep .iti__search-input-wrapper{display:flex;align-items:center}:host ::ng-deep .iti__search-input{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm) var(--ta-space-md);outline:none;border:1px solid var(--ta-neutral-300);background-color:var(--ta-neutral-white);width:100%;box-sizing:border-box;min-height:40px}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, LoaderComponent], template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}:host ::ng-deep .mdc-text-field{overflow:visible}:host ::ng-deep .iti__search-icon{display:none}:host ::ng-deep .iti__search-input-wrapper{display:flex;align-items:center}:host ::ng-deep .iti__search-input{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm) var(--ta-space-md);outline:none;border:1px solid var(--ta-neutral-300);background-color:var(--ta-neutral-white);width:100%;box-sizing:border-box;min-height:40px}\n"] }]
        }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFakYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQVEsQ0FBQyxDQUFDO0FBU3RFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBb0M7SUFQN0U7O1FBVWtCLFlBQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHaEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0tBa0dyQztJQS9GVSxRQUFRO1FBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQ3JDLG9CQUFvQixFQUNwQixtRkFBbUYsQ0FDcEYsQ0FBQztJQUNKLENBQUM7SUFFUSxlQUFlO1FBQ3RCLEtBQUssQ0FBQyxl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ZW1lbnRSZWYsIHNpZ25hbCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IGludGxUZWxJbnB1dCBmcm9tICdpbnRsLXRlbC1pbnB1dCc7XG5cbmltcG9ydCB7IElucHV0UGhvbmUsIHBob25lVmFsaWRhdG9yIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IGxvYWRTdHlsZXNoZWV0IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnQnO1xuXG5pbnRsVGVsSW5wdXQuYXR0YWNoVXRpbHMoKCkgPT4gaW1wb3J0KCdpbnRsLXRlbC1pbnB1dC91dGlscycpIGFzIGFueSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LXBob25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtcGhvbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBMb2FkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFBob25lQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0UGhvbmU+IHtcbiAgQFZpZXdDaGlsZCgncGhvbmVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwaG9uZUlucHV0ITogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgcmVhZG9ubHkgaXNSZWFkeSA9IHNpZ25hbChmYWxzZSk7XG4gIHByaXZhdGUgX2l0aT86IFJldHVyblR5cGU8dHlwZW9mIGludGxUZWxJbnB1dD47XG4gIHByaXZhdGUgX3N0eWxlc2hlZXRSZWFkeSQ/OiBQcm9taXNlPHZvaWQ+O1xuICBwcml2YXRlIF9zeW5jaW5nRnJvbUNvbnRyb2wgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yPzogVmFsaWRhdG9yRm47XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLl9zdHlsZXNoZWV0UmVhZHkkID0gbG9hZFN0eWxlc2hlZXQoXG4gICAgICAnaW50bC10ZWwtaW5wdXQtY3NzJyxcbiAgICAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2ludGwtdGVsLWlucHV0QDI1LjMuMC9idWlsZC9jc3MvaW50bFRlbElucHV0Lm1pbi5jc3MnXG4gICAgKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgICAodGhpcy5fc3R5bGVzaGVldFJlYWR5JCA/PyBQcm9taXNlLnJlc29sdmUoKSkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKS50aGVuKCgpID0+IHRoaXMuX2luaXRQaG9uZUlucHV0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFBob25lSW5wdXQoKSB7XG4gICAgdGhpcy5faXRpID0gaW50bFRlbElucHV0KHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBpbml0aWFsQ291bnRyeTogJ2JlJyxcbiAgICAgIGNvdW50cnlPcmRlcjogdGhpcy5pbnB1dC5wcmVmZXJyZWRDb3VudHJpZXMgYXMgYW55LFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmlucHV0LmZvcm1Db250cm9sO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2l0aS5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fd3JpdGVGcm9tQ29udHJvbChjb250cm9sLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmlzUmVhZHkuc2V0KHRydWUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdmFsaWRhdG9yID0gcGhvbmVWYWxpZGF0b3IoKCkgPT4gdGhpcy5faXRpKTtcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9yKTtcbiAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc3luY2luZ0Zyb21Db250cm9sKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dyaXRlRnJvbUNvbnRyb2wodmFsdWUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5faXRpLnNldERpc2FibGVkKGNvbnRyb2wuZGlzYWJsZWQpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2l0aT8uc2V0RGlzYWJsZWQoY29udHJvbC5kaXNhYmxlZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fdmFsaWRhdG9yKSB7XG4gICAgICB0aGlzLmlucHV0LmZvcm1Db250cm9sPy5yZW1vdmVWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcik7XG4gICAgfVxuICAgIHRoaXMuX2l0aT8uZGVzdHJveSgpO1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzcGF0Y2goKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNvdW50cnlDaGFuZ2UoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kaXNwYXRjaCgpO1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BhdGNoKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmlucHV0LmZvcm1Db250cm9sO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmdWxsVmFsdWUgPSB0aGlzLl9pdGk/LmdldE51bWJlcigpID8/ICcnO1xuICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBmdWxsVmFsdWUpIHtcbiAgICAgIHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCA9IHRydWU7XG4gICAgICBjb250cm9sLnNldFZhbHVlKGZ1bGxWYWx1ZSk7XG4gICAgICB0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF93cml0ZUZyb21Db250cm9sKHZhbHVlOiB1bmtub3duKSB7XG4gICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gdHJ1ZTtcbiAgICB0aGlzLl9pdGk/LnNldE51bWJlcih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJyk7XG4gICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gZmFsc2U7XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgQGlmICghdGhpcy5pc1JlYWR5KCkpIHtcbiAgICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidHJ1ZVwiPjwvdGEtbG9hZGVyPlxuICB9XG4gIDxkaXYgY2xhc3M9XCJ0YS1pbnB1dC1waG9uZV9fZmllbGRcIiBbY2xhc3MudGEtaW5wdXQtcGhvbmVfX2ZpZWxkLS1oaWRkZW5dPVwiIXRoaXMuaXNSZWFkeSgpXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAjcGhvbmVJbnB1dFxuICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAoYmx1cik9XCJ0aGlzLm9uQmx1cigpXCJcbiAgICAgIChjb3VudHJ5Y2hhbmdlKT1cInRoaXMub25Db3VudHJ5Q2hhbmdlKClcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90YS1pbnB1dC1sYXlvdXQ+XG4iXX0=