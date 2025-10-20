import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import deepEqual from 'fast-deep-equal';
import { distinctUntilChanged } from 'rxjs';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { InputsComponent } from './inputs/inputs.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class FormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.loader = false;
        this.error = { status: ENotificationCode.none, message: '' };
        this.border = true;
        this.canDisplayButton = true;
        this.buttonTitle = 'form.save';
        this.onLive = false;
        this.valid = new EventEmitter();
        this.isFormValid = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.toFormGroup(this.inputs);
        this._registerSubscription(this.form.statusChanges.subscribe(() => this.isFormValid.emit(this.isValid())));
        if (this.onLive) {
            this._registerSubscription(this.form.valueChanges
                .pipe(distinctUntilChanged((prev, curr) => deepEqual(prev, curr)))
                .subscribe(() => this.onSubmit()));
        }
        if (this.askValidation$) {
            this._registerSubscription(this.askValidation$.subscribe(_ => this.onSubmit()));
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges['inputs'] && !simpleChanges['inputs'].firstChange) {
            this.form = this.toFormGroup(this.inputs);
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputs.forEach(input => {
            input.destroy();
        });
        if (this.askOnDestroy) {
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
        return this.form.valid && !this.loader;
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: "inputs", askValidation$: "askValidation$", askOnDestroy: "askOnDestroy", loader: "loader", error: "error", border: "border", canDisplayButton: "canDisplayButton", buttonTitle: "buttonTitle", onLive: "onLive" }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
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
                    ], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { inputs: [{
                type: Input
            }], askValidation$: [{
                type: Input
            }], askOnDestroy: [{
                type: Input
            }], loader: [{
                type: Input
            }], error: [{
                type: Input
            }], border: [{
                type: Input
            }], canDisplayButton: [{
                type: Input
            }], buttonTitle: [{
                type: Input
            }], onLive: [{
                type: Input
            }], valid: [{
                type: Output
            }], isFormValid: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFpQjVELE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQWlDaEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXZCVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsVUFBSyxHQUFpQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBR3RFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFHZCxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIs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WUM5QjFCLCs4QkE0QkEscUREUEksU0FBUyw2Q0FDVCxtQkFBbUIscWJBQ25CLDJCQUEyQixvSUFDM0IsZUFBZSx5R0FDZixlQUFlLHlKQUNmLGFBQWEsa0RBQ2IsZUFBZTs7NEZBR04sYUFBYTtrQkFmekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQO3dCQUNQLFNBQVM7d0JBQ1QsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO3dEQUlELE1BQU07c0JBREwsS0FBSztnQkFJTixjQUFjO3NCQURiLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLE1BQU07c0JBREwsS0FBSztnQkFHTixLQUFLO3NCQURKLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUlOLGdCQUFnQjtzQkFEZixLQUFLO2dCQUdOLFdBQVc7c0JBRFYsS0FBSztnQkFHTixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sS0FBSztzQkFESixNQUFNO2dCQUlQLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJSW5wdXRzRXJyb3IsIElucHV0QmFzZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlLCBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQgfSBmcm9tICdAdGEvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dHMvaW5wdXRzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEFzeW5jUGlwZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgSW5wdXRzQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGlucHV0cyE6IElucHV0QmFzZTxhbnk+W107XG5cbiAgQElucHV0KClcbiAgYXNrVmFsaWRhdGlvbiQhOiBPYnNlcnZhYmxlPG51bGw+O1xuXG4gIEBJbnB1dCgpXG4gIGFza09uRGVzdHJveSE6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgbG9hZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGVycm9yOiBJSW5wdXRzRXJyb3IgPSB7IHN0YXR1czogRU5vdGlmaWNhdGlvbkNvZGUubm9uZSwgbWVzc2FnZTogJycgfTtcblxuICBASW5wdXQoKVxuICBib3JkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGNhbkRpc3BsYXlCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBidXR0b25UaXRsZSA9ICdmb3JtLnNhdmUnO1xuICBASW5wdXQoKVxuICBvbkxpdmUgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgdmFsaWQ6IEV2ZW50RW1pdHRlcjx7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGlzRm9ybVZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHB1YmxpYyBmb3JtITogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLnRvRm9ybUdyb3VwKHRoaXMuaW5wdXRzKTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmlzRm9ybVZhbGlkLmVtaXQodGhpcy5pc1ZhbGlkKCkpKSk7XG5cbiAgICBpZiAodGhpcy5vbkxpdmUpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZXYsIGN1cnIpID0+IGRlZXBFcXVhbChwcmV2LCBjdXJyKSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uU3VibWl0KCkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFza1ZhbGlkYXRpb24kKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbih0aGlzLmFza1ZhbGlkYXRpb24kLnN1YnNjcmliZShfID0+IHRoaXMub25TdWJtaXQoKSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoc2ltcGxlQ2hhbmdlc1snaW5wdXRzJ10gJiYgIXNpbXBsZUNoYW5nZXNbJ2lucHV0cyddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLnRvRm9ybUdyb3VwKHRoaXMuaW5wdXRzKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmFza09uRGVzdHJveSkge1xuICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblN1Ym1pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsaWQuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZCAmJiAhdGhpcy5sb2FkZXI7XG4gIH1cblxuICBwdWJsaWMgdG9Gb3JtR3JvdXAoaW5wdXRzOiBJbnB1dEJhc2U8YW55PltdKTogRm9ybUdyb3VwIHtcbiAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuICAgIGlmIChpbnB1dHMgPT09IG51bGwgfHwgaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpbnB1dC5jcmVhdGVGb3JtQ29udHJvbChncm91cCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBbZm9ybUdyb3VwXT1cInRoaXMuZm9ybVwiPlxuICAgIEBmb3IgKGlucHV0IG9mIHRoaXMuaW5wdXRzOyB0cmFjayB0cmFja0J5S2V5KCRpbmRleCwgaW5wdXQpKSB7XG4gICAgICA8ZGl2PlxuICAgICAgICBAaWYgKGlucHV0LnZpc2libGUkIHwgYXN5bmMpIHtcbiAgICAgICAgICA8dGEtaW5wdXRzIFtpbnB1dF09XCJpbnB1dFwiPjwvdGEtaW5wdXRzPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgPGRpdj5cbiAgICAgIDx0YS1ub3RpZmljYXRpb24taW5saW5lIFttZXNzYWdlXT1cInRoaXMuZXJyb3IubWVzc2FnZVwiIFtjb2RlXT1cInRoaXMuZXJyb3Iuc3RhdHVzXCIgY2xhc3M9XCJteS1zcGFjZS1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwianVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5sb2FkZXJcIj5cbiAgICAgICAgICAgIEBpZiAodGhpcy5jYW5EaXNwbGF5QnV0dG9uICYmIHRoaXMuYnV0dG9uVGl0bGUpIHtcbiAgICAgICAgICAgICAgPHRhLWJ1dHRvblxuICAgICAgICAgICAgICAgIChhY3Rpb24pPVwidGhpcy5vblN1Ym1pdCgpXCJcbiAgICAgICAgICAgICAgICBbc3RhdGVdPVwiIXRoaXMuaXNWYWxpZCgpID8gJ2Rpc2FibGVkJyA6ICdjbGFzc2ljJ1wiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNoZWNrLWxpbmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgdGhpcy5idXR0b25UaXRsZSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RhLWxvYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RhLW5vdGlmaWNhdGlvbi1pbmxpbmU+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19