import { Component, signal, viewChild } from '@angular/core';
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
        this.phoneInput = viewChild.required('phoneInput');
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
        this._iti = intlTelInput(this.phoneInput().nativeElement, {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, LoaderComponent], template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFakYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQVEsQ0FBQyxDQUFDO0FBU3RFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBb0M7SUFQN0U7O1FBUUUsZUFBVSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQStCLFlBQVksQ0FBQyxDQUFDO1FBRTVELFlBQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHaEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0tBa0dyQztJQS9GVSxRQUFRO1FBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQ3JDLG9CQUFvQixFQUNwQixtRkFB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IHNpZ25hbCwgdmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IGludGxUZWxJbnB1dCBmcm9tICdpbnRsLXRlbC1pbnB1dCc7XG5cbmltcG9ydCB7IElucHV0UGhvbmUsIHBob25lVmFsaWRhdG9yIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IGxvYWRTdHlsZXNoZWV0IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnQnO1xuXG5pbnRsVGVsSW5wdXQuYXR0YWNoVXRpbHMoKCkgPT4gaW1wb3J0KCdpbnRsLXRlbC1pbnB1dC91dGlscycpIGFzIGFueSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LXBob25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5zY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBMb2FkZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dFBob25lQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0UGhvbmU+IHtcbiAgcGhvbmVJbnB1dCA9IHZpZXdDaGlsZC5yZXF1aXJlZDxFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+PigncGhvbmVJbnB1dCcpO1xuXG4gIHB1YmxpYyByZWFkb25seSBpc1JlYWR5ID0gc2lnbmFsKGZhbHNlKTtcbiAgcHJpdmF0ZSBfaXRpPzogUmV0dXJuVHlwZTx0eXBlb2YgaW50bFRlbElucHV0PjtcbiAgcHJpdmF0ZSBfc3R5bGVzaGVldFJlYWR5JD86IFByb21pc2U8dm9pZD47XG4gIHByaXZhdGUgX3N5bmNpbmdGcm9tQ29udHJvbCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWxpZGF0b3I/OiBWYWxpZGF0b3JGbjtcblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuX3N0eWxlc2hlZXRSZWFkeSQgPSBsb2FkU3R5bGVzaGVldChcbiAgICAgICdpbnRsLXRlbC1pbnB1dC1jc3MnLFxuICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMjUuMy4wL2J1aWxkL2Nzcy9pbnRsVGVsSW5wdXQubWluLmNzcydcbiAgICApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgICh0aGlzLl9zdHlsZXNoZWV0UmVhZHkkID8/IFByb21pc2UucmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpLnRoZW4oKCkgPT4gdGhpcy5faW5pdFBob25lSW5wdXQoKSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0UGhvbmVJbnB1dCgpIHtcbiAgICB0aGlzLl9pdGkgPSBpbnRsVGVsSW5wdXQodGhpcy5waG9uZUlucHV0KCkubmF0aXZlRWxlbWVudCwge1xuICAgICAgaW5pdGlhbENvdW50cnk6ICdiZScsXG4gICAgICBjb3VudHJ5T3JkZXI6IHRoaXMuaW5wdXQucHJlZmVycmVkQ291bnRyaWVzIGFzIGFueSxcbiAgICAgIHNlcGFyYXRlRGlhbENvZGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5pbnB1dC5mb3JtQ29udHJvbDtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pdGkucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3dyaXRlRnJvbUNvbnRyb2woY29udHJvbC52YWx1ZSk7XG4gICAgICB9XG4gICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5pc1JlYWR5LnNldCh0cnVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3ZhbGlkYXRvciA9IHBob25lVmFsaWRhdG9yKCgpID0+IHRoaXMuX2l0aSk7XG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKHRoaXMuX3ZhbGlkYXRvcik7XG4gICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93cml0ZUZyb21Db250cm9sKHZhbHVlKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2l0aS5zZXREaXNhYmxlZChjb250cm9sLmRpc2FibGVkKTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9pdGk/LnNldERpc2FibGVkKGNvbnRyb2wuZGlzYWJsZWQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3ZhbGlkYXRvcikge1xuICAgICAgdGhpcy5pbnB1dC5mb3JtQ29udHJvbD8ucmVtb3ZlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3IpO1xuICAgIH1cbiAgICB0aGlzLl9pdGk/LmRlc3Ryb3koKTtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIG9uQmx1cigpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc3BhdGNoKCk7XG4gIH1cblxuICBwdWJsaWMgb25Db3VudHJ5Q2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzcGF0Y2goKTtcbiAgICB0aGlzLmlucHV0LmZvcm1Db250cm9sPy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNwYXRjaCgpIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5pbnB1dC5mb3JtQ29udHJvbDtcbiAgICBpZiAoIWNvbnRyb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZnVsbFZhbHVlID0gdGhpcy5faXRpPy5nZXROdW1iZXIoKSA/PyAnJztcbiAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gZnVsbFZhbHVlKSB7XG4gICAgICB0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wgPSB0cnVlO1xuICAgICAgY29udHJvbC5zZXRWYWx1ZShmdWxsVmFsdWUpO1xuICAgICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfd3JpdGVGcm9tQ29udHJvbCh2YWx1ZTogdW5rbm93bikge1xuICAgIHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCA9IHRydWU7XG4gICAgdGhpcy5faXRpPy5zZXROdW1iZXIodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogJycpO1xuICAgIHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCA9IGZhbHNlO1xuICB9XG59XG4iLCI8dGEtaW5wdXQtbGF5b3V0IFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+XG4gIEBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRydWVcIj48L3RhLWxvYWRlcj5cbiAgfVxuICA8ZGl2IGNsYXNzPVwidGEtaW5wdXQtcGhvbmVfX2ZpZWxkXCIgW2NsYXNzLnRhLWlucHV0LXBob25lX19maWVsZC0taGlkZGVuXT1cIiF0aGlzLmlzUmVhZHkoKVwiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgI3Bob25lSW5wdXRcbiAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgKGJsdXIpPVwidGhpcy5vbkJsdXIoKVwiXG4gICAgICAoY291bnRyeWNoYW5nZSk9XCJ0aGlzLm9uQ291bnRyeUNoYW5nZSgpXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGEtaW5wdXQtbGF5b3V0PlxuIl19