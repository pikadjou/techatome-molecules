import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ENotificationCode, NotificationInlineComponent } from '@ta/notification';
import { TranslatePipe } from '@ta/translation';
import { LoaderComponent, ButtonComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { InputsComponent } from './inputs/inputs.component';
import deepEqual from 'fast-deep-equal';
import { distinctUntilChanged } from 'rxjs';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: "inputs", askValidation$: "askValidation$", askOnDestroy: "askOnDestroy", loader: "loader", error: "error", border: "border", canDisplayButton: "canDisplayButton", buttonTitle: "buttonTitle", onLive: "onLive" }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form', standalone: true, imports: [NgIf, NgFor, AsyncPipe, ReactiveFormsModule, NotificationInlineComponent, LoaderComponent, ButtonComponent, TranslatePipe, InputsComponent], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n      <div>\n        @if (input.visible$ | async) {\n          <ta-inputs [input]=\"input\"></ta-inputs>\n        }\n      </div>\n    }\n    <div>\n      <ta-notification-inline [message]=\"this.error.message\" [code]=\"this.error.status\" class=\"my-space-sm\">\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n              <ta-button\n                (action)=\"this.onSubmit()\"\n                [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n                icon=\"check-line\"\n              >\n                {{ this.buttonTitle | translate }}\n              </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVN4RCxNQUFNLE9BQU8sYUFBYyxTQUFRLGVBQWU7SUFpQ2hEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF2QlYsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVmLFVBQUssR0FBaUIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUd0RSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBR2QscUJBQWdCLEdB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VSxhQUFhO21HQUFiLGFBQWEsOFlDcEIxQiwrOEJBNEJBLHFERFZ5QixTQUFTLDZDQUFFLG1CQUFtQixxYkFBRSwyQkFBMkIsb0lBQUUsZUFBZSx5RkFBRSxlQUFlLHlKQUFFLGFBQWEsa0RBQUUsZUFBZTs7NEZBRXpJLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0EsU0FBUyxjQUdMLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLDJCQUEyQixFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQzt3REFJckosTUFBTTtzQkFETCxLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSztnQkFJTixZQUFZO3NCQURYLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUdOLEtBQUs7c0JBREosS0FBSztnQkFJTixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBR04sV0FBVztzQkFEVixLQUFLO2dCQUdOLE1BQU07c0JBREwsS0FBSztnQkFJTixLQUFLO3NCQURKLE1BQU07Z0JBSVAsV0FBVztzQkFEVixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiwgTmdGb3IsIEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJSW5wdXRzRXJyb3IsIElucHV0QmFzZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IEVOb3RpZmljYXRpb25Db2RlLCBOb3RpZmljYXRpb25JbmxpbmVDb21wb25lbnQgfSBmcm9tICdAdGEvbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IElucHV0c0NvbXBvbmVudCB9IGZyb20gJy4vaW5wdXRzL2lucHV0cy5jb21wb25lbnQnO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE5nRm9yLCBBc3luY1BpcGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCwgTG9hZGVyQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIFRyYW5zbGF0ZVBpcGUsIElucHV0c0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgaW5wdXRzITogSW5wdXRCYXNlPGFueT5bXTtcblxuICBASW5wdXQoKVxuICBhc2tWYWxpZGF0aW9uJCE6IE9ic2VydmFibGU8bnVsbD47XG5cbiAgQElucHV0KClcbiAgYXNrT25EZXN0cm95ITogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBsb2FkZXIgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZXJyb3I6IElJbnB1dHNFcnJvciA9IHsgc3RhdHVzOiBFTm90aWZpY2F0aW9uQ29kZS5ub25lLCBtZXNzYWdlOiAnJyB9O1xuXG4gIEBJbnB1dCgpXG4gIGJvcmRlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgY2FuRGlzcGxheUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblRpdGxlID0gJ2Zvcm0uc2F2ZSc7XG4gIEBJbnB1dCgpXG4gIG9uTGl2ZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICB2YWxpZDogRXZlbnRFbWl0dGVyPHt9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KClcbiAgaXNGb3JtVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHVibGljIGZvcm0hOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMudG9Gb3JtR3JvdXAodGhpcy5pbnB1dHMpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24odGhpcy5mb3JtLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuaXNGb3JtVmFsaWQuZW1pdCh0aGlzLmlzVmFsaWQoKSkpKTtcblxuICAgIGlmICh0aGlzLm9uTGl2ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXNcbiAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldiwgY3VycikgPT4gZGVlcEVxdWFsKHByZXYsIGN1cnIpKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdWJtaXQoKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXNrVmFsaWRhdGlvbiQpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuYXNrVmFsaWRhdGlvbiQuc3Vic2NyaWJlKF8gPT4gdGhpcy5vblN1Ym1pdCgpKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChzaW1wbGVDaGFuZ2VzWydpbnB1dHMnXSAmJiAhc2ltcGxlQ2hhbmdlc1snaW5wdXRzJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMudG9Gb3JtR3JvdXAodGhpcy5pbnB1dHMpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICBpbnB1dC5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXNrT25EZXN0cm95KSB7XG4gICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3VibWl0KCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWxpZC5lbWl0KHRoaXMuZm9ybS52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkICYmICF0aGlzLmxvYWRlcjtcbiAgfVxuXG4gIHB1YmxpYyB0b0Zvcm1Hcm91cChpbnB1dHM6IElucHV0QmFzZTxhbnk+W10pOiBGb3JtR3JvdXAge1xuICAgIGNvbnN0IGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XG4gICAgaWYgKGlucHV0cyA9PT0gbnVsbCB8fCBpbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfVxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGlucHV0LmNyZWF0ZUZvcm1Db250cm9sKGdyb3VwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxuICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIFtmb3JtR3JvdXBdPVwidGhpcy5mb3JtXCI+XG4gICAgQGZvciAoaW5wdXQgb2YgdGhpcy5pbnB1dHM7IHRyYWNrIHRyYWNrQnlLZXkoJGluZGV4LCBpbnB1dCkpIHtcbiAgICAgIDxkaXY+XG4gICAgICAgIEBpZiAoaW5wdXQudmlzaWJsZSQgfCBhc3luYykge1xuICAgICAgICAgIDx0YS1pbnB1dHMgW2lucHV0XT1cImlucHV0XCI+PC90YS1pbnB1dHM+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8ZGl2PlxuICAgICAgPHRhLW5vdGlmaWNhdGlvbi1pbmxpbmUgW21lc3NhZ2VdPVwidGhpcy5lcnJvci5tZXNzYWdlXCIgW2NvZGVdPVwidGhpcy5lcnJvci5zdGF0dXNcIiBjbGFzcz1cIm15LXNwYWNlLXNtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLmxvYWRlclwiPlxuICAgICAgICAgICAgQGlmICh0aGlzLmNhbkRpc3BsYXlCdXR0b24gJiYgdGhpcy5idXR0b25UaXRsZSkge1xuICAgICAgICAgICAgICA8dGEtYnV0dG9uXG4gICAgICAgICAgICAgICAgKGFjdGlvbik9XCJ0aGlzLm9uU3VibWl0KClcIlxuICAgICAgICAgICAgICAgIFtzdGF0ZV09XCIhdGhpcy5pc1ZhbGlkKCkgPyAnZGlzYWJsZWQnIDogJ2NsYXNzaWMnXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2hlY2stbGluZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyB0aGlzLmJ1dHRvblRpdGxlIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgIDwvdGEtYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdGEtbG9hZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGEtbm90aWZpY2F0aW9uLWlubGluZT5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=