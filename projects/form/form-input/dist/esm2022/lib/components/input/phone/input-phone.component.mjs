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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, LoaderComponent], template: "<ta-input-layout [input]=\"this.input\">\n  @if (!this.isReady()) {\n    <ta-loader [isLoading]=\"true\"></ta-loader>\n  }\n  <div class=\"ta-input-phone__field\" [class.ta-input-phone__field--hidden]=\"!this.isReady()\">\n    <input\n      class=\"form-control\"\n      #phoneInput\n      type=\"tel\"\n      (blur)=\"this.onBlur()\"\n      (countrychange)=\"this.onCountryChange()\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.ta-input-phone__field--hidden{display:none}\n"] }]
        }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekUsT0FBTyxZQUFZLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFakYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQVEsQ0FBQyxDQUFDO0FBU3RFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBb0M7SUFQN0U7O1FBVWtCLFlBQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHaEMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0tBa0dyQztJQS9GVSxRQUFRO1FBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQ3JDLG9CQUFvQixFQUNwQixtRkFBbUYsQ0FDcEYsQ0FBQztJQUNKLENBQUM7SUFFUSxlQUFlO1FBQ3RCLEtBQUssQ0FBQyxl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bWVudFJlZiwgc2lnbmFsLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gJ2ludGwtdGVsLWlucHV0JztcblxuaW1wb3J0IHsgSW5wdXRQaG9uZSwgcGhvbmVWYWxpZGF0b3IgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgbG9hZFN0eWxlc2hlZXQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LmNvbXBvbmVudCc7XG5cbmludGxUZWxJbnB1dC5hdHRhY2hVdGlscygoKSA9PiBpbXBvcnQoJ2ludGwtdGVsLWlucHV0L3V0aWxzJykgYXMgYW55KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtaW5wdXQtcGhvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtcGhvbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1waG9uZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbSW5wdXRMYXlvdXRDb21wb25lbnQsIExvYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UGhvbmVDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQ8SW5wdXRQaG9uZT4ge1xuICBAVmlld0NoaWxkKCdwaG9uZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHBob25lSW5wdXQhOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyByZWFkb25seSBpc1JlYWR5ID0gc2lnbmFsKGZhbHNlKTtcbiAgcHJpdmF0ZSBfaXRpPzogUmV0dXJuVHlwZTx0eXBlb2YgaW50bFRlbElucHV0PjtcbiAgcHJpdmF0ZSBfc3R5bGVzaGVldFJlYWR5JD86IFByb21pc2U8dm9pZD47XG4gIHByaXZhdGUgX3N5bmNpbmdGcm9tQ29udHJvbCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWxpZGF0b3I/OiBWYWxpZGF0b3JGbjtcblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuX3N0eWxlc2hlZXRSZWFkeSQgPSBsb2FkU3R5bGVzaGVldChcbiAgICAgICdpbnRsLXRlbC1pbnB1dC1jc3MnLFxuICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMjUuMy4wL2J1aWxkL2Nzcy9pbnRsVGVsSW5wdXQubWluLmNzcydcbiAgICApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgICh0aGlzLl9zdHlsZXNoZWV0UmVhZHkkID8/IFByb21pc2UucmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpLnRoZW4oKCkgPT4gdGhpcy5faW5pdFBob25lSW5wdXQoKSk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0UGhvbmVJbnB1dCgpIHtcbiAgICB0aGlzLl9pdGkgPSBpbnRsVGVsSW5wdXQodGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGluaXRpYWxDb3VudHJ5OiAnYmUnLFxuICAgICAgY291bnRyeU9yZGVyOiB0aGlzLmlucHV0LnByZWZlcnJlZENvdW50cmllcyBhcyBhbnksXG4gICAgICBzZXBhcmF0ZURpYWxDb2RlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXRpLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICB0aGlzLl93cml0ZUZyb21Db250cm9sKGNvbnRyb2wudmFsdWUpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgIHRoaXMuaXNSZWFkeS5zZXQodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl92YWxpZGF0b3IgPSBwaG9uZVZhbGlkYXRvcigoKSA9PiB0aGlzLl9pdGkpO1xuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3IpO1xuICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd3JpdGVGcm9tQ29udHJvbCh2YWx1ZSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9pdGkuc2V0RGlzYWJsZWQoY29udHJvbC5kaXNhYmxlZCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBjb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5faXRpPy5zZXREaXNhYmxlZChjb250cm9sLmRpc2FibGVkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl92YWxpZGF0b3IpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnJlbW92ZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9yKTtcbiAgICB9XG4gICAgdGhpcy5faXRpPy5kZXN0cm95KCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kaXNwYXRjaCgpO1xuICB9XG5cbiAgcHVibGljIG9uQ291bnRyeUNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWFkeSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc3BhdGNoKCk7XG4gICAgdGhpcy5pbnB1dC5mb3JtQ29udHJvbD8udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcGF0Y2goKSB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w7XG4gICAgaWYgKCFjb250cm9sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZ1bGxWYWx1ZSA9IHRoaXMuX2l0aT8uZ2V0TnVtYmVyKCkgPz8gJyc7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IGZ1bGxWYWx1ZSkge1xuICAgICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gdHJ1ZTtcbiAgICAgIGNvbnRyb2wuc2V0VmFsdWUoZnVsbFZhbHVlKTtcbiAgICAgIHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3dyaXRlRnJvbUNvbnRyb2wodmFsdWU6IHVua25vd24pIHtcbiAgICB0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wgPSB0cnVlO1xuICAgIHRoaXMuX2l0aT8uc2V0TnVtYmVyKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnKTtcbiAgICB0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wgPSBmYWxzZTtcbiAgfVxufVxuIiwiPHRhLWlucHV0LWxheW91dCBbaW5wdXRdPVwidGhpcy5pbnB1dFwiPlxuICBAaWYgKCF0aGlzLmlzUmVhZHkoKSkge1xuICAgIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0cnVlXCI+PC90YS1sb2FkZXI+XG4gIH1cbiAgPGRpdiBjbGFzcz1cInRhLWlucHV0LXBob25lX19maWVsZFwiIFtjbGFzcy50YS1pbnB1dC1waG9uZV9fZmllbGQtLWhpZGRlbl09XCIhdGhpcy5pc1JlYWR5KClcIj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICNwaG9uZUlucHV0XG4gICAgICB0eXBlPVwidGVsXCJcbiAgICAgIChibHVyKT1cInRoaXMub25CbHVyKClcIlxuICAgICAgKGNvdW50cnljaGFuZ2UpPVwidGhpcy5vbkNvdW50cnlDaGFuZ2UoKVwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RhLWlucHV0LWxheW91dD5cbiJdfQ==