import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import deepEqual from 'fast-deep-equal';
import { distinctUntilChanged } from 'rxjs';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { TaTranslationForm } from '../translation.service';
import { InputsComponent } from './inputs/inputs.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class FormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.inputs = input.required();
        this.askValidation$ = input();
        this.askOnDestroy = input();
        this.loader = input(false);
        this.error = input({ status: ENotificationCode.none, message: '' });
        this.border = input(true);
        this.canDisplayButton = input(true);
        this.buttonTitle = input('form.save');
        this.onLive = input(false);
        this.valid = new EventEmitter();
        this.isFormValid = new EventEmitter();
        TaTranslationForm.getInstance();
    }
    ngOnInit() {
        this.form = this.toFormGroup(this.inputs());
        this._registerSubscription(this.form.statusChanges.subscribe(() => this.isFormValid.emit(this.isValid())));
        if (this.onLive()) {
            this._registerSubscription(this.form.valueChanges
                .pipe(distinctUntilChanged((prev, curr) => deepEqual(prev, curr)))
                .subscribe(() => this.onSubmit()));
        }
        const askValidation = this.askValidation$();
        if (askValidation) {
            this._registerSubscription(askValidation.subscribe(_ => this.onSubmit()));
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges['inputs'] && !simpleChanges['inputs'].firstChange) {
            this.form = this.toFormGroup(this.inputs());
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputs().forEach(inputItem => {
            inputItem.destroy();
        });
        if (this.askOnDestroy()) {
            this.onSubmit();
        }
    }
    onSubmit() {
        if (!this.isValid()) {
            return;
        }
        this.valid.emit(this.form.value);
    }
    isValid() {
        return this.form.valid && !this.loader();
    }
    toFormGroup(inputs) {
        const group = new FormGroup({});
        if (inputs === null || inputs.length === 0) {
            return group;
        }
        inputs.forEach(input => {
            input.createFormControl(group);
        });
        return group;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: { classPropertyName: "inputs", publicName: "inputs", isSignal: true, isRequired: true, transformFunction: null }, askValidation$: { classPropertyName: "askValidation$", publicName: "askValidation$", isSignal: true, isRequired: false, transformFunction: null }, askOnDestroy: { classPropertyName: "askOnDestroy", publicName: "askOnDestroy", isSignal: true, isRequired: false, transformFunction: null }, loader: { classPropertyName: "loader", publicName: "loader", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, border: { classPropertyName: "border", publicName: "border", isSignal: true, isRequired: false, transformFunction: null }, canDisplayButton: { classPropertyName: "canDisplayButton", publicName: "canDisplayButton", isSignal: true, isRequired: false, transformFunction: null }, buttonTitle: { classPropertyName: "buttonTitle", publicName: "buttonTitle", isSignal: true, isRequired: false, transformFunction: null }, onLive: { classPropertyName: "onLive", publicName: "onLive", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs(); track trackByKey($index, input)) {\n    <div>\n      @if (input.visible$ | async) {\n      <ta-inputs [input]=\"input\"></ta-inputs>\n      }\n    </div>\n    }\n    <div>\n      <ta-notification-inline\n        [message]=\"this.error().message\"\n        [code]=\"this.error().status\"\n        class=\"my-space-sm\"\n      >\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader()\">\n            @if (this.canDisplayButton() && this.buttonTitle()) {\n            <ta-button\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle() | translate }}\n            </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form', standalone: true, imports: [
                        AsyncPipe,
                        ReactiveFormsModule,
                        NotificationInlineComponent,
                        LoaderComponent,
                        ButtonComponent,
                        TranslatePipe,
                        InputsComponent,
                    ], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs(); track trackByKey($index, input)) {\n    <div>\n      @if (input.visible$ | async) {\n      <ta-inputs [input]=\"input\"></ta-inputs>\n      }\n    </div>\n    }\n    <div>\n      <ta-notification-inline\n        [message]=\"this.error().message\"\n        [code]=\"this.error().status\"\n        class=\"my-space-sm\"\n      >\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader()\">\n            @if (this.canDisplayButton() && this.buttonTitle()) {\n            <ta-button\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle() | translate }}\n            </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { valid: [{
                type: Output
            }], isFormValid: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWdDLE1BQU0sRUFBaUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFpQjVELE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQXdCaEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXhCVixXQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBb0IsQ0FBQztRQUU1QyxtQkFBYyxHQUFHLEtBQUssRUFBb0IsQ0FBQztRQUUzQyxpQkFBWSxHQUFHLEtBQUssRUFBVyxDQUFDO1FBRWhDLFdBQU0s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LENBQUM7SUFFTSxXQUFXLENBQUMsTUFBd0I7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDM0MsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBcEZVLGFBQWE7bUdBQWIsYUFBYSwwMUNDL0IxQixzK0JBZ0NBLHFERFZJLFNBQVMsNkNBQ1QsbUJBQW1CLHFiQUNuQiwyQkFBMkIsb0lBQzNCLGVBQWUseUdBQ2YsZUFBZSx5SkFDZixhQUFhLGtEQUNiLGVBQWU7OzRGQUdOLGFBQWE7a0JBZnpCLFNBQVM7K0JBQ0UsU0FBUyxjQUdQLElBQUksV0FDUDt3QkFDUCxTQUFTO3dCQUNULG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixlQUFlO3FCQUNoQjt3REFtQkQsS0FBSztzQkFESixNQUFNO2dCQUlQLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJSW5wdXRzRXJyb3IsIElucHV0QmFzZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlLCBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQgfSBmcm9tICdAdGEvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvbkZvcm0gfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gJy4vaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBBc3luY1BpcGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIElucHV0c0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBpbnB1dHMgPSBpbnB1dC5yZXF1aXJlZDxJbnB1dEJhc2U8YW55PltdPigpO1xuXG4gIGFza1ZhbGlkYXRpb24kID0gaW5wdXQ8T2JzZXJ2YWJsZTxudWxsPj4oKTtcblxuICBhc2tPbkRlc3Ryb3kgPSBpbnB1dDxib29sZWFuPigpO1xuXG4gIGxvYWRlciA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcbiAgZXJyb3IgPSBpbnB1dDxJSW5wdXRzRXJyb3I+KHsgc3RhdHVzOiBFTm90aWZpY2F0aW9uQ29kZS5ub25lLCBtZXNzYWdlOiAnJyB9KTtcblxuICBib3JkZXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICBjYW5EaXNwbGF5QnV0dG9uID0gaW5wdXQ8Ym9vbGVhbj4odHJ1ZSk7XG4gIGJ1dHRvblRpdGxlID0gaW5wdXQ8c3RyaW5nPignZm9ybS5zYXZlJyk7XG4gIG9uTGl2ZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBAT3V0cHV0KClcbiAgdmFsaWQ6IEV2ZW50RW1pdHRlcjx7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGlzRm9ybVZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBmb3JtITogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgVGFUcmFuc2xhdGlvbkZvcm0uZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMudG9Gb3JtR3JvdXAodGhpcy5pbnB1dHMoKSk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbih0aGlzLmZvcm0uc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pc0Zvcm1WYWxpZC5lbWl0KHRoaXMuaXNWYWxpZCgpKSkpO1xuXG4gICAgaWYgKHRoaXMub25MaXZlKCkpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXYsIGN1cnIpID0+IGRlZXBFcXVhbChwcmV2LCBjdXJyKSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uU3VibWl0KCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGFza1ZhbGlkYXRpb24gPSB0aGlzLmFza1ZhbGlkYXRpb24kKCk7XG4gICAgaWYgKGFza1ZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKGFza1ZhbGlkYXRpb24uc3Vic2NyaWJlKF8gPT4gdGhpcy5vblN1Ym1pdCgpKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChzaW1wbGVDaGFuZ2VzWydpbnB1dHMnXSAmJiAhc2ltcGxlQ2hhbmdlc1snaW5wdXRzJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMudG9Gb3JtR3JvdXAodGhpcy5pbnB1dHMoKSk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmlucHV0cygpLmZvckVhY2goaW5wdXRJdGVtID0+IHtcbiAgICAgIGlucHV0SXRlbS5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXNrT25EZXN0cm95KCkpIHtcbiAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbGlkLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsaWQgJiYgIXRoaXMubG9hZGVyKCk7XG4gIH1cblxuICBwdWJsaWMgdG9Gb3JtR3JvdXAoaW5wdXRzOiBJbnB1dEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcbiAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIGlmIChpbnB1dHMgPT09IG51bGwgfHwgaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpbnB1dC5jcmVhdGVGb3JtQ29udHJvbChncm91cCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBbZm9ybUdyb3VwXT1cInRoaXMuZm9ybVwiPlxuICAgIEBmb3IgKGlucHV0IG9mIHRoaXMuaW5wdXRzKCk7IHRyYWNrIHRyYWNrQnlLZXkoJGluZGV4LCBpbnB1dCkpIHtcbiAgICA8ZGl2PlxuICAgICAgQGlmIChpbnB1dC52aXNpYmxlJCB8IGFzeW5jKSB7XG4gICAgICA8dGEtaW5wdXRzIFtpbnB1dF09XCJpbnB1dFwiPjwvdGEtaW5wdXRzPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIH1cbiAgICA8ZGl2PlxuICAgICAgPHRhLW5vdGlmaWNhdGlvbi1pbmxpbmVcbiAgICAgICAgW21lc3NhZ2VdPVwidGhpcy5lcnJvcigpLm1lc3NhZ2VcIlxuICAgICAgICBbY29kZV09XCJ0aGlzLmVycm9yKCkuc3RhdHVzXCJcbiAgICAgICAgY2xhc3M9XCJteS1zcGFjZS1zbVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLmxvYWRlcigpXCI+XG4gICAgICAgICAgICBAaWYgKHRoaXMuY2FuRGlzcGxheUJ1dHRvbigpICYmIHRoaXMuYnV0dG9uVGl0bGUoKSkge1xuICAgICAgICAgICAgPHRhLWJ1dHRvblxuICAgICAgICAgICAgICAoYWN0aW9uKT1cInRoaXMub25TdWJtaXQoKVwiXG4gICAgICAgICAgICAgIFtzdGF0ZV09XCIhdGhpcy5pc1ZhbGlkKCkgPyAnZGlzYWJsZWQnIDogJ2NsYXNzaWMnXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNoZWNrLWxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyB0aGlzLmJ1dHRvblRpdGxlKCkgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvdGEtYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGEtbG9hZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGEtbm90aWZpY2F0aW9uLWlubGluZT5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=