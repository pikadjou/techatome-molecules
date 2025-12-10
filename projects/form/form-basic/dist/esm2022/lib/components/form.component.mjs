import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output, } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import deepEqual from "fast-deep-equal";
import { distinctUntilChanged } from "rxjs";
import { ENotificationCode, NotificationInlineComponent, } from "@ta/notification";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { InputsComponent } from "./inputs/inputs.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class FormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.loader = false;
        this.error = { status: ENotificationCode.none, message: "" };
        this.border = true;
        this.canDisplayButton = true;
        this.buttonTitle = "form.save";
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
            this._registerSubscription(this.askValidation$.subscribe((_) => this.onSubmit()));
        }
    }
    ngOnChanges(simpleChanges) {
        if (simpleChanges["inputs"] && !simpleChanges["inputs"].firstChange) {
            this.form = this.toFormGroup(this.inputs);
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.inputs.forEach((input) => {
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
        inputs.forEach((input) => {
            input.createFormControl(group);
        });
        return group;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FormComponent, isStandalone: true, selector: "ta-form", inputs: { inputs: "inputs", askValidation$: "askValidation$", askOnDestroy: "askOnDestroy", loader: "loader", error: "error", border: "border", canDisplayButton: "canDisplayButton", buttonTitle: "buttonTitle", onLive: "onLive" }, outputs: { valid: "valid", isFormValid: "isFormValid" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n    <div>\n      @if (input.visible$ | async) {\n      <ta-inputs [input]=\"input\"></ta-inputs>\n      }\n    </div>\n    }\n    <div>\n      <ta-notification-inline\n        [message]=\"this.error.message\"\n        [code]=\"this.error.status\"\n        class=\"my-space-sm\"\n      >\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n            <ta-button\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle | translate }}\n            </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: NotificationInlineComponent, selector: "ta-notification-inline", inputs: ["message", "code", "showClose"], outputs: ["askClose"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputsComponent, selector: "ta-inputs", inputs: ["input", "standalone", "onFocus", "space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FormComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-form", standalone: true, imports: [
                        AsyncPipe,
                        ReactiveFormsModule,
                        NotificationInlineComponent,
                        LoaderComponent,
                        ButtonComponent,
                        TranslatePipe,
                        InputsComponent,
                    ], template: "<div class=\"form-container\">\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"this.form\">\n    @for (input of this.inputs; track trackByKey($index, input)) {\n    <div>\n      @if (input.visible$ | async) {\n      <ta-inputs [input]=\"input\"></ta-inputs>\n      }\n    </div>\n    }\n    <div>\n      <ta-notification-inline\n        [message]=\"this.error.message\"\n        [code]=\"this.error.status\"\n        class=\"my-space-sm\"\n      >\n        <div class=\"justify-end\">\n          <ta-loader [isLoading]=\"this.loader\">\n            @if (this.canDisplayButton && this.buttonTitle) {\n            <ta-button\n              (action)=\"this.onSubmit()\"\n              [state]=\"!this.isValid() ? 'disabled' : 'classic'\"\n              icon=\"check-line\"\n            >\n              {{ this.buttonTitle | translate }}\n            </ta-button>\n            }\n          </ta-loader>\n        </div>\n      </ta-notification-inline>\n    </div>\n  </form>\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEUsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFjLG9CQUFvQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3hELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsMkJBQTJCLEdBQzVCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFpQjVELE1BQU0sT0FBTyxhQUNYLFNBQVEsZUFBZTtJQW1DdkI7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXZCVixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsVUFBSyxHQUFpQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBR3RFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFHZCxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFeEIs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LGFBQWE7bUdBQWIsYUFBYSw4WUMxQzFCLHc5QkFnQ0EscUREQ0ksU0FBUyw2Q0FDVCxtQkFBbUIscWJBQ25CLDJCQUEyQixvSUFDM0IsZUFBZSx5R0FDZixlQUFlLHlKQUNmLGFBQWEsa0RBQ2IsZUFBZTs7NEZBR04sYUFBYTtrQkFmekIsU0FBUzsrQkFDRSxTQUFTLGNBR1AsSUFBSSxXQUNQO3dCQUNQLFNBQVM7d0JBQ1QsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO3dEQU9ELE1BQU07c0JBREwsS0FBSztnQkFJTixjQUFjO3NCQURiLEtBQUs7Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLE1BQU07c0JBREwsS0FBSztnQkFHTixLQUFLO3NCQURKLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUlOLGdCQUFnQjtzQkFEZixLQUFLO2dCQUdOLFdBQVc7c0JBRFYsS0FBSztnQkFHTixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sS0FBSztzQkFESixNQUFNO2dCQUlQLFdBQVc7c0JBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCBkZWVwRXF1YWwgZnJvbSBcImZhc3QtZGVlcC1lcXVhbFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBJSW5wdXRzRXJyb3IsIElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHtcbiAgRU5vdGlmaWNhdGlvbkNvZGUsXG4gIE5vdGlmaWNhdGlvbklubGluZUNvbXBvbmVudCxcbn0gZnJvbSBcIkB0YS9ub3RpZmljYXRpb25cIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIExvYWRlckNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgSW5wdXRzQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5wdXRzL2lucHV0cy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZvcm1cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9mb3JtLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9mb3JtLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQXN5bmNQaXBlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTm90aWZpY2F0aW9uSW5saW5lQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBJbnB1dHNDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnRcbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95XG57XG4gIEBJbnB1dCgpXG4gIGlucHV0cyE6IElucHV0QmFzZTxhbnk+W107XG5cbiAgQElucHV0KClcbiAgYXNrVmFsaWRhdGlvbiQhOiBPYnNlcnZhYmxlPG51bGw+O1xuXG4gIEBJbnB1dCgpXG4gIGFza09uRGVzdHJveSE6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgbG9hZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGVycm9yOiBJSW5wdXRzRXJyb3IgPSB7IHN0YXR1czogRU5vdGlmaWNhdGlvbkNvZGUubm9uZSwgbWVzc2FnZTogXCJcIiB9O1xuXG4gIEBJbnB1dCgpXG4gIGJvcmRlciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgY2FuRGlzcGxheUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGJ1dHRvblRpdGxlID0gXCJmb3JtLnNhdmVcIjtcbiAgQElucHV0KClcbiAgb25MaXZlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHZhbGlkOiBFdmVudEVtaXR0ZXI8e30+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBpc0Zvcm1WYWxpZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgZm9ybSE6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy50b0Zvcm1Hcm91cCh0aGlzLmlucHV0cyk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICB0aGlzLmlzRm9ybVZhbGlkLmVtaXQodGhpcy5pc1ZhbGlkKCkpXG4gICAgICApXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm9uTGl2ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMuZm9ybS52YWx1ZUNoYW5nZXNcbiAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJldiwgY3VycikgPT4gZGVlcEVxdWFsKHByZXYsIGN1cnIpKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub25TdWJtaXQoKSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXNrVmFsaWRhdGlvbiQpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLmFza1ZhbGlkYXRpb24kLnN1YnNjcmliZSgoXykgPT4gdGhpcy5vblN1Ym1pdCgpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHNpbXBsZUNoYW5nZXNbXCJpbnB1dHNcIl0gJiYgIXNpbXBsZUNoYW5nZXNbXCJpbnB1dHNcIl0uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZm9ybSA9IHRoaXMudG9Gb3JtR3JvdXAodGhpcy5pbnB1dHMpO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5hc2tPbkRlc3Ryb3kpIHtcbiAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbGlkLmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsaWQgJiYgIXRoaXMubG9hZGVyO1xuICB9XG5cbiAgcHVibGljIHRvRm9ybUdyb3VwKGlucHV0czogSW5wdXRCYXNlPGFueT5bXSk6IEZvcm1Hcm91cCB7XG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICBpZiAoaW5wdXRzID09PSBudWxsIHx8IGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5jcmVhdGVGb3JtQ29udHJvbChncm91cCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiBbZm9ybUdyb3VwXT1cInRoaXMuZm9ybVwiPlxuICAgIEBmb3IgKGlucHV0IG9mIHRoaXMuaW5wdXRzOyB0cmFjayB0cmFja0J5S2V5KCRpbmRleCwgaW5wdXQpKSB7XG4gICAgPGRpdj5cbiAgICAgIEBpZiAoaW5wdXQudmlzaWJsZSQgfCBhc3luYykge1xuICAgICAgPHRhLWlucHV0cyBbaW5wdXRdPVwiaW5wdXRcIj48L3RhLWlucHV0cz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICB9XG4gICAgPGRpdj5cbiAgICAgIDx0YS1ub3RpZmljYXRpb24taW5saW5lXG4gICAgICAgIFttZXNzYWdlXT1cInRoaXMuZXJyb3IubWVzc2FnZVwiXG4gICAgICAgIFtjb2RlXT1cInRoaXMuZXJyb3Iuc3RhdHVzXCJcbiAgICAgICAgY2xhc3M9XCJteS1zcGFjZS1zbVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLmxvYWRlclwiPlxuICAgICAgICAgICAgQGlmICh0aGlzLmNhbkRpc3BsYXlCdXR0b24gJiYgdGhpcy5idXR0b25UaXRsZSkge1xuICAgICAgICAgICAgPHRhLWJ1dHRvblxuICAgICAgICAgICAgICAoYWN0aW9uKT1cInRoaXMub25TdWJtaXQoKVwiXG4gICAgICAgICAgICAgIFtzdGF0ZV09XCIhdGhpcy5pc1ZhbGlkKCkgPyAnZGlzYWJsZWQnIDogJ2NsYXNzaWMnXCJcbiAgICAgICAgICAgICAgaWNvbj1cImNoZWNrLWxpbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyB0aGlzLmJ1dHRvblRpdGxlIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RhLWxvYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RhLW5vdGlmaWNhdGlvbi1pbmxpbmU+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19