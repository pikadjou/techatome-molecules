import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { loadStylesheet } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
intlTelInput.attachUtils(() => import('intl-tel-input/utils'));
export class InputPhoneComponent extends TaAbstractInputComponent {
    constructor() {
        super(...arguments);
        this._isReady = false;
        this._syncingFromControl = false;
    }
    ngOnInit() {
        super.ngOnInit();
        loadStylesheet('intl-tel-input-css', 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css');
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
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
            this._isReady = true;
        });
        this._validator = () => {
            if (!control.value) {
                return null;
            }
            const valid = this._iti?.isValidNumber();
            if (valid == null) {
                return null;
            }
            return valid ? null : { validatePhoneNumber: true };
        };
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
        if (!this._isReady) {
            return;
        }
        this._dispatch();
    }
    onCountryChange() {
        if (!this._isReady) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    class=\"form-control\"\n    #phoneInput\n    type=\"tel\"\n    [formControl]=\"$any(this.input.formControl)\"\n  />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGhvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L3Bob25lL2lucHV0LXBob25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9waG9uZS9pbnB1dC1waG9uZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7QUFFakYsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQVEsQ0FBQyxDQUFDO0FBU3RFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSx3QkFBb0M7SUFQN0U7O1FBVVUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQix3QkFBbUIsR0FBRyxLQUFLLENBQUM7S0F3R3JDO0lBckdVLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsY0FBYyxDQUNaLG9CQUFvQixFQUNwQixtRkFBbUYsQ0FDcEYsQ0FBQztJQUNKLENBQUM7SUFFUSxlQUFlO1FBQ3RCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN0RCxj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QUFFLHNCQUFzQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVPLFNBQVM7UUFDZixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDYixPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOytHQTVHVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiwyTUNwQmhDLG1NQVFBLDJJRFVZLG9CQUFvQixpR0FBRSxtQkFBbUI7OzRGQUV4QyxtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7OEJBR1IsVUFBVTtzQkFBckQsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgaW50bFRlbElucHV0IGZyb20gJ2ludGwtdGVsLWlucHV0JztcblxuaW1wb3J0IHsgSW5wdXRQaG9uZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IGxvYWRTdHlsZXNoZWV0IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC5jb21wb25lbnQnO1xuXG5pbnRsVGVsSW5wdXQuYXR0YWNoVXRpbHMoKCkgPT4gaW1wb3J0KCdpbnRsLXRlbC1pbnB1dC91dGlscycpIGFzIGFueSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LXBob25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LXBob25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtcGhvbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0lucHV0TGF5b3V0Q29tcG9uZW50LCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQaG9uZUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dFBob25lPiB7XG4gIEBWaWV3Q2hpbGQoJ3Bob25lSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGhvbmVJbnB1dCE6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfaXNSZWFkeSA9IGZhbHNlO1xuICBwcml2YXRlIF9pdGk/OiBSZXR1cm5UeXBlPHR5cGVvZiBpbnRsVGVsSW5wdXQ+O1xuICBwcml2YXRlIF9zeW5jaW5nRnJvbUNvbnRyb2wgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yPzogVmFsaWRhdG9yRm47XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBsb2FkU3R5bGVzaGVldChcbiAgICAgICdpbnRsLXRlbC1pbnB1dC1jc3MnLFxuICAgICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vaW50bC10ZWwtaW5wdXRAMjUuMy4wL2J1aWxkL2Nzcy9pbnRsVGVsSW5wdXQubWluLmNzcydcbiAgICApO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuXG4gICAgdGhpcy5faXRpID0gaW50bFRlbElucHV0KHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBpbml0aWFsQ291bnRyeTogJ2JlJyxcbiAgICAgIGNvdW50cnlPcmRlcjogdGhpcy5pbnB1dC5wcmVmZXJyZWRDb3VudHJpZXMgYXMgYW55LFxuICAgICAgc2VwYXJhdGVEaWFsQ29kZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmlucHV0LmZvcm1Db250cm9sO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2l0aS5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKGNvbnRyb2wudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fd3JpdGVGcm9tQ29udHJvbChjb250cm9sLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3ZhbGlkYXRvciA9ICgpID0+IHtcbiAgICAgIGlmICghY29udHJvbC52YWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbGlkID0gdGhpcy5faXRpPy5pc1ZhbGlkTnVtYmVyKCk7XG4gICAgICBpZiAodmFsaWQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxpZCA/IG51bGwgOiB7IHZhbGlkYXRlUGhvbmVOdW1iZXI6IHRydWUgfTtcbiAgICB9O1xuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3IpO1xuICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd3JpdGVGcm9tQ29udHJvbCh2YWx1ZSk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9pdGkuc2V0RGlzYWJsZWQoY29udHJvbC5kaXNhYmxlZCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBjb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5faXRpPy5zZXREaXNhYmxlZChjb250cm9sLmRpc2FibGVkKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl92YWxpZGF0b3IpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnJlbW92ZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9yKTtcbiAgICB9XG4gICAgdGhpcy5faXRpPy5kZXN0cm95KCk7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc3BhdGNoKCk7XG4gIH1cblxuICBwdWJsaWMgb25Db3VudHJ5Q2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5faXNSZWFkeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kaXNwYXRjaCgpO1xuICAgIHRoaXMuaW5wdXQuZm9ybUNvbnRyb2w/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc3BhdGNoKCkge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmlucHV0LmZvcm1Db250cm9sO1xuICAgIGlmICghY29udHJvbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmdWxsVmFsdWUgPSB0aGlzLl9pdGk/LmdldE51bWJlcigpID8/ICcnO1xuICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBmdWxsVmFsdWUpIHtcbiAgICAgIHRoaXMuX3N5bmNpbmdGcm9tQ29udHJvbCA9IHRydWU7XG4gICAgICBjb250cm9sLnNldFZhbHVlKGZ1bGxWYWx1ZSk7XG4gICAgICB0aGlzLl9zeW5jaW5nRnJvbUNvbnRyb2wgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF93cml0ZUZyb21Db250cm9sKHZhbHVlOiB1bmtub3duKSB7XG4gICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gdHJ1ZTtcbiAgICB0aGlzLl9pdGk/LnNldE51bWJlcih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJyk7XG4gICAgdGhpcy5fc3luY2luZ0Zyb21Db250cm9sID0gZmFsc2U7XG4gIH1cbn1cbiIsIjx0YS1pbnB1dC1sYXlvdXQgW2lucHV0XT1cInRoaXMuaW5wdXRcIj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICNwaG9uZUlucHV0XG4gICAgdHlwZT1cInRlbFwiXG4gICAgW2Zvcm1Db250cm9sXT1cIiRhbnkodGhpcy5pbnB1dC5mb3JtQ29udHJvbClcIlxuICAvPlxuPC90YS1pbnB1dC1sYXlvdXQ+XG4iXX0=