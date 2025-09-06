import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, ViewChild, Output, Input, Component, Inject, HostListener, inject, Injectable, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { delay, map, Subject, BehaviorSubject, of, take, combineLatest, startWith, debounceTime, tap, concatMap } from 'rxjs';
import { TaBaseComponent, TaBaseModal, TemporaryFile, pickImages, removeElement, newGuid, getBase64FromFile, StopPropagationDirective, toArray, getUniqueArray, downloadFile, isNonNullable, TaDirectivePipeModule } from '@ta/utils';
import { NgFor, NgClass, NgStyle, NgIf, AsyncPipe, NgTemplateOutlet, CommonModule } from '@angular/common';
import { TranslatePipe, TaLazyTranslationService } from '@ta/translation';
import * as i2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { isEqual } from 'date-fns';
import * as i2$3 from '@ta/icons';
import { FontIconComponent, LocalIconComponent, TaIconsModule } from '@ta/icons';
import * as i3$2 from '@ta/ui';
import { TaOverlayPanelComponent, LabelComponent as LabelComponent$1, DualButtonComponent, ButtonComponent, UserLogoComponent, LinkComponent, EmptyComponent, LoaderComponent, LayoutSideCtaComponent, LayoutSideContentComponent, LayoutSideComponent, TextComponent, MegaoctetComponent, TaLayoutModule, TaUiModule, TaListModule, TaContainerModule, TaCardModule } from '@ta/ui';
import * as i3$1 from 'ngx-material-timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FileListComponent, FileEditComponent, TaFilesBasicModule } from '@ta/files-basic';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as i1$2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextBox, InputCheckBox } from '@ta/form-model';
import { EditorInputComponent, TaWysiswygModule } from '@ta/wysiswyg';
import intlTelInput from 'intl-tel-input';
import * as i2$1 from '@angular-material-extensions/google-maps-autocomplete';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import * as i2$2 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { TaDocumentsService } from '@ta/services';
import { CdkMenuModule, PARENT_OR_NEW_MENU_STACK_PROVIDER } from '@angular/cdk/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { TaMenuModule } from '@ta/menu';

class TaAbstractInputComponent extends TaBaseComponent {
    constructor() {
        super();
        this.standalone = false;
        this.valueChanged = new EventEmitter();
        this.validators = Validators;
    }
    ngOnInit() {
        if (this.matcher === null) {
            this.matcher = new ErrorStateMatcher();
        }
        if (this.standalone) {
            this.input.createFormControl();
        }
        this._registerSubscription(this.input.changeValue$.subscribe({
            next: value => this.onChange(value),
        }));
    }
    ngAfterViewInit() {
        if (this.onFocus) {
            this._registerSubscription(this.onFocus.pipe(delay(1)).subscribe({
                next: () => {
                    if (this.focusedElement) {
                        this.focusedElement.nativeElement.click();
                        this.focusedElement.nativeElement.focus();
                    }
                },
            }));
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.standalone) {
            this.input.destroy();
        }
    }
    onChange(value) {
        this.valueChanged.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaAbstractInputComponent, selector: "ng-component", inputs: { input: "input", matcher: "matcher", standalone: "standalone", onFocus: "onFocus" }, outputs: { valueChanged: "valueChanged" }, viewQueries: [{ propertyName: "focusedElement", first: true, predicate: ["focusedElement"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAbstractInputComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [], propDecorators: { input: [{
                type: Input
            }], matcher: [{
                type: Input
            }], standalone: [{
                type: Input
            }], onFocus: [{
                type: Input
            }], valueChanged: [{
                type: Output
            }], focusedElement: [{
                type: ViewChild,
                args: ['focusedElement', { read: ElementRef }]
            }] } });

class FormLabelComponent {
    constructor() {
        this.withMarginBottom = true;
        this.validators = Validators;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormLabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FormLabelComponent, isStandalone: true, selector: "ta-form-label", inputs: { input: "input", withMarginBottom: "withMarginBottom" }, ngImport: i0, template: "@if(this.input.label) {\n<label class=\"form-label\" [class.mb-space-sm]=\"this.withMarginBottom\">\n  {{ input.label | translate }}\n  @for (validator of this.input.validators; track validator) {\n    <span>\n      @if(validator === validators.required) {\n      <span> * </span>\n      }\n    </span>\n  }\n</label>\n}\n", styles: [".form-label{display:block;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FormLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-form-label', standalone: true, imports: [NgFor, TranslatePipe], template: "@if(this.input.label) {\n<label class=\"form-label\" [class.mb-space-sm]=\"this.withMarginBottom\">\n  {{ input.label | translate }}\n  @for (validator of this.input.validators; track validator) {\n    <span>\n      @if(validator === validators.required) {\n      <span> * </span>\n      }\n    </span>\n  }\n</label>\n}\n", styles: [".form-label{display:block;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { input: [{
                type: Input
            }], withMarginBottom: [{
                type: Input
            }] } });

class CheckboxComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CheckboxComponent, isStandalone: true, selector: "ta-input-checkbox", usesInheritance: true, ngImport: i0, template: "<div class=\"custom-checkbox align-center g-space-xs\">\n  <input\n    type=\"checkbox\"\n    #focusedElement\n    (click)=\"this.input.value = !this.input.value\"\n    [checked]=\"this.input.value\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    [disabled]=\"this.input.disabled\"\n  />\n  <ta-form-label [input]=\"this.input\" [withMarginBottom]=\"false\"></ta-form-label>\n</div>\n", styles: [".custom-checkbox{border-color:var(--ta-border-brand)}.custom-checkbox:hover{border-color:var(--ta-neutral-500)}.input:checked{background-color:var(--ta-border-brand);border-color:var(--ta-border-brand)}.input:not(:disabled){border-color:var(--ta-neutral-500)}\n"], dependencies: [{ kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-checkbox', standalone: true, imports: [FormLabelComponent], template: "<div class=\"custom-checkbox align-center g-space-xs\">\n  <input\n    type=\"checkbox\"\n    #focusedElement\n    (click)=\"this.input.value = !this.input.value\"\n    [checked]=\"this.input.value\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    [disabled]=\"this.input.disabled\"\n  />\n  <ta-form-label [input]=\"this.input\" [withMarginBottom]=\"false\"></ta-form-label>\n</div>\n", styles: [".custom-checkbox{border-color:var(--ta-border-brand)}.custom-checkbox:hover{border-color:var(--ta-neutral-500)}.input:checked{background-color:var(--ta-border-brand);border-color:var(--ta-border-brand)}.input:not(:disabled){border-color:var(--ta-neutral-500)}\n"] }]
        }], ctorParameters: () => [] });

class ColorPickerComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    onChangeValue(value) {
        this.input.formControl?.setValue(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ColorPickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ColorPickerComponent, isStandalone: true, selector: "ta-input-color-picker", usesInheritance: true, ngImport: i0, template: "<div>\n  <!-- <input\n    [value]=\"input.value\"\n    class=\"form-control\"\n    [formControl]=\"$any(input.formControl)\"\n    [(colorPicker)]=\"input.value\"\n    (colorPickerChange)=\"onChangeValue($event)\"\n    [style.background]=\"input.value\"\n  /> -->\n</div>\n", styles: [".form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ColorPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-color-picker', standalone: true, template: "<div>\n  <!-- <input\n    [value]=\"input.value\"\n    class=\"form-control\"\n    [formControl]=\"$any(input.formControl)\"\n    [(colorPicker)]=\"input.value\"\n    (colorPickerChange)=\"onChangeValue($event)\"\n    [style.background]=\"input.value\"\n  /> -->\n</div>\n", styles: [".form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n"] }]
        }], ctorParameters: () => [] });

class InputErrorComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputErrorComponent, isStandalone: true, selector: "ta-input-error", inputs: { input: "input" }, ngImport: i0, template: "@if(this.input.formControl?.invalid && this.input.formControl?.touched) {\n<div class=\"error-message\">\n  @if(this.input.formControl?.hasError('message')) {\n  <small class=\"form-text text-danger\">\n    {{ this.input.formControl?.getError(\"message\") }}\n  </small>\n  } @else if(this.input.formControl?.hasError('minlength')) {\n  <small class=\"form-text text-danger\">\n    {{ \"form.text-box.minimum-length\" | translate }}\n  </small>\n  } @else if(this.input.formControl?.hasError('type')) {\n  <div class=\"error\">\n    <small class=\"form-text text-danger\">\n      {{ \"form.text-box.error-occured\" | translate }}\n    </small>\n  </div>\n  } @else if(this.input.formControl?.hasError('required')) {\n  <small class=\"form-text text-danger\">\n    {{ \"form.text-box.is-mandatory\" | translate }}\n  </small>\n  } @else if(this.input.formControl?.errors?.['minlength']) {\n  <span>{{ \"form.layout.input-too-short\" | translate }}</span>\n  } @else if(this.input.formControl?.hasError('validatePhoneNumber')) {\n  <span>{{ \"form.phone.placeholder\" | translate }} </span>\n  }\n</div>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-error', standalone: true, imports: [TranslatePipe], template: "@if(this.input.formControl?.invalid && this.input.formControl?.touched) {\n<div class=\"error-message\">\n  @if(this.input.formControl?.hasError('message')) {\n  <small class=\"form-text text-danger\">\n    {{ this.input.formControl?.getError(\"message\") }}\n  </small>\n  } @else if(this.input.formControl?.hasError('minlength')) {\n  <small class=\"form-text text-danger\">\n    {{ \"form.text-box.minimum-length\" | translate }}\n  </small>\n  } @else if(this.input.formControl?.hasError('type')) {\n  <div class=\"error\">\n    <small class=\"form-text text-danger\">\n      {{ \"form.text-box.error-occured\" | translate }}\n    </small>\n  </div>\n  } @else if(this.input.formControl?.hasError('required')) {\n  <small class=\"form-text text-danger\">\n    {{ \"form.text-box.is-mandatory\" | translate }}\n  </small>\n  } @else if(this.input.formControl?.errors?.['minlength']) {\n  <span>{{ \"form.layout.input-too-short\" | translate }}</span>\n  } @else if(this.input.formControl?.hasError('validatePhoneNumber')) {\n  <span>{{ \"form.phone.placeholder\" | translate }} </span>\n  }\n</div>\n}\n" }]
        }], propDecorators: { input: [{
                type: Input
            }] } });

class InputLayoutComponent {
    constructor() {
        this.width = '100%';
        this.height = '100%';
    }
    get containerStyles() {
        return {
            width: this.width,
            height: this.height,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputLayoutComponent, isStandalone: true, selector: "ta-input-layout", inputs: { input: "input", width: "width", height: "height" }, ngImport: i0, template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div\n  class=\"input-layout-container\"\n  [ngClass]=\"[this.input.formControl?.invalid && this.input.formControl?.touched ? 'error' : '']\"\n  [ngStyle]=\"this.containerStyles\"\n>\n  <ng-content></ng-content>\n</div>\n<ta-input-error [input]=\"this.input\"></ta-input-error>\n", styles: [".input-layout-container{width:100%;display:flex;flex-direction:column}.error-message{color:var(--ta-semantic-red-dark);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);margin-top:var(--ta-space-xs)}:host ::ng-deep .form-control{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm) var(--ta-space-md);outline:none;border:1px solid;border-color:var(--ta-neutral-300);background-color:var(--ta-neutral-white);width:100%;cursor:pointer;box-sizing:border-box;min-height:40px}:host ::ng-deep .form-control:hover:not(:disabled){border-color:var(--ta-neutral-500)}:host ::ng-deep .form-control:focus:not(:disabled){border-color:var(--ta-border-brand)}:host ::ng-deep .form-control:required:not(:disabled){border-color:var(--ta-semantic-red-dark)}:host ::ng-deep .form-control:disabled{border-color:var(--ta-neutral-300)}\n"], dependencies: [{ kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "component", type: InputErrorComponent, selector: "ta-input-error", inputs: ["input"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-layout', standalone: true, imports: [FormLabelComponent, InputErrorComponent, NgClass, NgStyle], template: "<ta-form-label [input]=\"this.input\"></ta-form-label>\n\n<div\n  class=\"input-layout-container\"\n  [ngClass]=\"[this.input.formControl?.invalid && this.input.formControl?.touched ? 'error' : '']\"\n  [ngStyle]=\"this.containerStyles\"\n>\n  <ng-content></ng-content>\n</div>\n<ta-input-error [input]=\"this.input\"></ta-input-error>\n", styles: [".input-layout-container{width:100%;display:flex;flex-direction:column}.error-message{color:var(--ta-semantic-red-dark);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);margin-top:var(--ta-space-xs)}:host ::ng-deep .form-control{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm) var(--ta-space-md);outline:none;border:1px solid;border-color:var(--ta-neutral-300);background-color:var(--ta-neutral-white);width:100%;cursor:pointer;box-sizing:border-box;min-height:40px}:host ::ng-deep .form-control:hover:not(:disabled){border-color:var(--ta-neutral-500)}:host ::ng-deep .form-control:focus:not(:disabled){border-color:var(--ta-border-brand)}:host ::ng-deep .form-control:required:not(:disabled){border-color:var(--ta-semantic-red-dark)}:host ::ng-deep .form-control:disabled{border-color:var(--ta-neutral-300)}\n"] }]
        }], propDecorators: { input: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });

class DatePickerComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
        this._registerSubscription(this.range.valueChanges.subscribe({
            next: value => {
                if (value.start && value.end && isEqual(value.start, value.end)) {
                    this.input.value = value.start;
                    return;
                }
                this.input.value = {
                    start: value.start,
                    end: value.end,
                };
            },
        }));
    }
    onDateSelect(event) {
        if (!event.value) {
            return;
        }
        this.input.value = event.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DatePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DatePickerComponent, isStandalone: true, selector: "ta-input-date-picker", viewQueries: [{ propertyName: "picker", first: true, predicate: ["picker"], descendants: true }], usesInheritance: true, ngImport: i0, template: "@if (this.input) {\n  <ta-input-layout [input]=\"this.input\">\n    @if (!this.input.rangeEnabled) {\n      <div class=\"align-center\" [class.disabled]=\"this.input.disabled\">\n        <input\n          matInput\n          #focusedElement\n          class=\"form-control\"\n          [matDatepicker]=\"picker\"\n          [value]=\"this.input.value\"\n          (dateInput)=\"this.onDateSelect($event)\"\n          (click)=\"this.picker.open()\"\n          [min]=\"this.input.minDate\"\n          [max]=\"this.input.maxDate\"\n          readonly\n        />\n        <mat-datepicker touchUi #picker></mat-datepicker>\n        <mat-datepicker-toggle matSuffix [for]=\"this.picker\"></mat-datepicker-toggle>\n      </div>\n    } @else {\n      <div class=\"align-center\">\n        <mat-date-range-input [formGroup]=\"this.range\" [rangePicker]=\"this.picker\">\n          <input\n            matStartDate\n            #focusedElement\n            placeholder=\"Start date\"\n            [min]=\"this.input.minDate\"\n            [max]=\"this.input.maxDate\"\n            formControlName=\"start\"\n            readonly\n          />\n          <input\n            matEndDate\n            placeholder=\"End date\"\n            [min]=\"this.input.minDate\"\n            [max]=\"this.input.maxDate\"\n            formControlName=\"end\"\n            readonly\n          />\n        </mat-date-range-input>\n        <mat-date-range-picker touchUi #picker></mat-date-range-picker>\n        <mat-datepicker-toggle matSuffix [for]=\"this.picker\"></mat-datepicker-toggle>\n      </div>\n    }\n  </ta-input-layout>\n}\n", styles: [":host ::ng-deep .form-control{width:100%}.disabled{border-color:var(--ta-neutral-300);pointer-events:none}\n"], dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-date-picker', standalone: true, imports: [NgIf, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, InputLayoutComponent], template: "@if (this.input) {\n  <ta-input-layout [input]=\"this.input\">\n    @if (!this.input.rangeEnabled) {\n      <div class=\"align-center\" [class.disabled]=\"this.input.disabled\">\n        <input\n          matInput\n          #focusedElement\n          class=\"form-control\"\n          [matDatepicker]=\"picker\"\n          [value]=\"this.input.value\"\n          (dateInput)=\"this.onDateSelect($event)\"\n          (click)=\"this.picker.open()\"\n          [min]=\"this.input.minDate\"\n          [max]=\"this.input.maxDate\"\n          readonly\n        />\n        <mat-datepicker touchUi #picker></mat-datepicker>\n        <mat-datepicker-toggle matSuffix [for]=\"this.picker\"></mat-datepicker-toggle>\n      </div>\n    } @else {\n      <div class=\"align-center\">\n        <mat-date-range-input [formGroup]=\"this.range\" [rangePicker]=\"this.picker\">\n          <input\n            matStartDate\n            #focusedElement\n            placeholder=\"Start date\"\n            [min]=\"this.input.minDate\"\n            [max]=\"this.input.maxDate\"\n            formControlName=\"start\"\n            readonly\n          />\n          <input\n            matEndDate\n            placeholder=\"End date\"\n            [min]=\"this.input.minDate\"\n            [max]=\"this.input.maxDate\"\n            formControlName=\"end\"\n            readonly\n          />\n        </mat-date-range-input>\n        <mat-date-range-picker touchUi #picker></mat-date-range-picker>\n        <mat-datepicker-toggle matSuffix [for]=\"this.picker\"></mat-datepicker-toggle>\n      </div>\n    }\n  </ta-input-layout>\n}\n", styles: [":host ::ng-deep .form-control{width:100%}.disabled{border-color:var(--ta-neutral-300);pointer-events:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { picker: [{
                type: ViewChild,
                args: ['picker']
            }] } });

class DropdownComponent extends TaAbstractInputComponent {
    constructor() {
        super(...arguments);
        this.space = true;
        this.optionsList = [];
        this.filteredOptions = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this._registerSubscription(this.input.options.subscribe(options => {
            this.optionsList = options;
            this.filteredOptions = this.optionsList;
        }));
    }
    getOptionName(id) {
        const found = this.optionsList.find(opt => opt.id === id);
        return found ? found.name : '';
    }
    onMenuSelect(selectedId) {
        if (this.input.multiple) {
            let currentValue = this.input.value || [];
            if (currentValue.includes(selectedId)) {
                currentValue = currentValue.filter((v) => v !== selectedId);
            }
            else {
                currentValue = [...currentValue, selectedId];
            }
            this.input.value = currentValue;
        }
        else {
            this.input.value = selectedId;
            this.overlayPanelRef.close();
        }
    }
    onOverlayClosed() {
        this.filteredOptions = this.optionsList;
    }
    isSelected(id) {
        const currentValue = this.input.value;
        return this.input.multiple ? Array.isArray(currentValue) && currentValue.includes(id) : currentValue === id;
    }
    selectOption(id, event) {
        this.onMenuSelect(id);
    }
    onSearchChange(event) {
        if (!this.input.withSearch)
            return;
        const target = event.target;
        const searchTerm = target.value.trim();
        this.filteredOptions =
            searchTerm.length >= 0
                ? this.optionsList.filter(opt => opt.name.toLowerCase().includes(searchTerm.toLowerCase()))
                : this.optionsList;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DropdownComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DropdownComponent, isStandalone: true, selector: "ta-input-dropdown", inputs: { space: "space" }, viewQueries: [{ propertyName: "overlayPanelRef", first: true, predicate: TaOverlayPanelComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "@if (this.input) {\n  <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: true }\" (closed)=\"this.onOverlayClosed()\">\n    <ng-template #panelTrigger>\n      <ta-input-layout [input]=\"this.input\">\n        <div #focusedElement class=\"custom-dropdown-button form-control\" [class.disabled]=\"this.input.disabled\">\n          <span class=\"selected-value align-center g-space-xs\">\n            @if (!this.input.multiple) {\n              @if (this.input.value) {\n                <span>\n                  {{ this.getOptionName(this.input.value) | translate }}\n                </span>\n              } @else {\n                {{ 'form.input.dropdown.novalue' | translate }}\n              }\n            } @else if (this.input.multiple) {\n              @for (value of this.input.value; track value) {\n                <ta-label size=\"sm\" class=\"d-flex\">\n                  {{ this.getOptionName(value) | translate }}\n                </ta-label>\n              }\n            }\n          </span>\n          <ta-font-icon name=\"arrow-big-bottom\" type=\"sm\"></ta-font-icon>\n        </div>\n      </ta-input-layout>\n    </ng-template>\n\n    <ng-template #panelContent>\n      <div class=\"custom-menu\">\n        @if (this.input.withSearch) {\n          <input class=\"input-search\" type=\"search\" placeholder=\"Rechercher...\" (input)=\"this.onSearchChange($event)\" />\n        }\n\n        @for (opt of this.filteredOptions; track opt.id) {\n          <button\n            [attr.cdkMenuItem]=\"!this.input.multiple ? '' : null\"\n            (click)=\"this.selectOption(opt.id, $event)\"\n            [class.selected]=\"this.isSelected(opt.id)\"\n            [class.disabled]=\"opt.disabled\"\n            class=\"dropdown-option space-between\"\n          >\n            {{ opt.name | translate }}\n            @if (this.isSelected(opt.id)) {\n              <ta-font-icon class=\"checkmark\" name=\"check-line\"></ta-font-icon>\n            }\n          </button>\n        }\n      </div>\n    </ng-template>\n  </ta-overlay-panel>\n}\n", styles: [".custom-dropdown-button{text-align:left;display:flex;justify-content:space-between;align-items:center}.custom-dropdown-button.disabled{border-color:var(--ta-neutral-300);pointer-events:none}button .selected-value{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom-menu{padding:0}.input-search{width:100%;display:flex;flex-direction:column;padding:10px;border:none;outline:none}.input-search:focus{border:none;outline:none;box-shadow:none}.dropdown-option{display:flex;align-items:center;padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border:none;background:transparent;cursor:pointer;width:100%}.dropdown-option .checkmark{margin-left:var(--ta-space-sm);color:var(--ta-border-brand)}.dropdown-option:hover{background-color:var(--ta-neutral-100)}.dropdown-option.disabled{color:var(--ta-neutral-500);cursor:not-allowed}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TaOverlayPanelComponent, selector: "ta-overlay-panel", inputs: ["panelConfig", "position"], outputs: ["closed"] }, { kind: "component", type: LabelComponent$1, selector: "ta-label", inputs: ["size", "type"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-dropdown', standalone: true, imports: [FontIconComponent, TaOverlayPanelComponent, LabelComponent$1, TranslatePipe, InputLayoutComponent], template: "@if (this.input) {\n  <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: true }\" (closed)=\"this.onOverlayClosed()\">\n    <ng-template #panelTrigger>\n      <ta-input-layout [input]=\"this.input\">\n        <div #focusedElement class=\"custom-dropdown-button form-control\" [class.disabled]=\"this.input.disabled\">\n          <span class=\"selected-value align-center g-space-xs\">\n            @if (!this.input.multiple) {\n              @if (this.input.value) {\n                <span>\n                  {{ this.getOptionName(this.input.value) | translate }}\n                </span>\n              } @else {\n                {{ 'form.input.dropdown.novalue' | translate }}\n              }\n            } @else if (this.input.multiple) {\n              @for (value of this.input.value; track value) {\n                <ta-label size=\"sm\" class=\"d-flex\">\n                  {{ this.getOptionName(value) | translate }}\n                </ta-label>\n              }\n            }\n          </span>\n          <ta-font-icon name=\"arrow-big-bottom\" type=\"sm\"></ta-font-icon>\n        </div>\n      </ta-input-layout>\n    </ng-template>\n\n    <ng-template #panelContent>\n      <div class=\"custom-menu\">\n        @if (this.input.withSearch) {\n          <input class=\"input-search\" type=\"search\" placeholder=\"Rechercher...\" (input)=\"this.onSearchChange($event)\" />\n        }\n\n        @for (opt of this.filteredOptions; track opt.id) {\n          <button\n            [attr.cdkMenuItem]=\"!this.input.multiple ? '' : null\"\n            (click)=\"this.selectOption(opt.id, $event)\"\n            [class.selected]=\"this.isSelected(opt.id)\"\n            [class.disabled]=\"opt.disabled\"\n            class=\"dropdown-option space-between\"\n          >\n            {{ opt.name | translate }}\n            @if (this.isSelected(opt.id)) {\n              <ta-font-icon class=\"checkmark\" name=\"check-line\"></ta-font-icon>\n            }\n          </button>\n        }\n      </div>\n    </ng-template>\n  </ta-overlay-panel>\n}\n", styles: [".custom-dropdown-button{text-align:left;display:flex;justify-content:space-between;align-items:center}.custom-dropdown-button.disabled{border-color:var(--ta-neutral-300);pointer-events:none}button .selected-value{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom-menu{padding:0}.input-search{width:100%;display:flex;flex-direction:column;padding:10px;border:none;outline:none}.input-search:focus{border:none;outline:none;box-shadow:none}.dropdown-option{display:flex;align-items:center;padding:var(--ta-space-sm) var(--ta-space-md);text-align:left;border:none;background:transparent;cursor:pointer;width:100%}.dropdown-option .checkmark{margin-left:var(--ta-space-sm);color:var(--ta-border-brand)}.dropdown-option:hover{background-color:var(--ta-neutral-100)}.dropdown-option.disabled{color:var(--ta-neutral-500);cursor:not-allowed}\n"] }]
        }], propDecorators: { space: [{
                type: Input
            }], overlayPanelRef: [{
                type: ViewChild,
                args: [TaOverlayPanelComponent]
            }] } });

class LabelComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LabelComponent, isStandalone: true, selector: "ta-input-label", usesInheritance: true, ngImport: i0, template: "<span>{{ input.label | translate }}</span>\n", styles: [""], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-label', standalone: true, imports: [TranslatePipe], template: "<span>{{ input.label | translate }}</span>\n" }]
        }], ctorParameters: () => [] });

class RadioComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    iconSize(option) {
        return this.hasLabel(option) ? 'xs' : 'sm';
    }
    hasLabel(option) {
        return !!option.name && option.name.length > 0;
    }
    onOptionClicked(optionId) {
        if (this.input.disabled)
            return;
        if (this.input.value === optionId) {
            this.input.formControl?.setValue(null);
        }
        else {
            this.input.formControl?.setValue(optionId);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: RadioComponent, isStandalone: true, selector: "ta-input-radio", usesInheritance: true, ngImport: i0, template: "<div class=\"radio-label\">\n  <ta-form-label [input]=\"this.input\"></ta-form-label>\n</div>\n\n<div class=\"radio-container\">\n  @for (option of this.input.options | async; track option.id) {\n    <div\n      class=\"radio-element\"\n      [ngClass]=\"{\n        validated: this.input.value === option.id,\n        disabled: this.input.disabled,\n      }\"\n      (click)=\"this.onOptionClicked(option.id)\"\n    >\n      <div\n        [ngClass]=\"{\n          'button-with-icon': this.hasLabel(option),\n          'only-icon': !this.hasLabel(option),\n        }\"\n      >\n        @if (option.icon) {\n          <ta-local-icon [type]=\"option.icon\" [size]=\"this.iconSize(option)\"> </ta-local-icon>\n        }\n        @if (option.name) {\n          <span>\n            {{ option.name | translate }}\n          </span>\n        }\n      </div>\n    </div>\n  }\n</div>\n", styles: [".radio-label{display:block;padding-bottom:.5em}.button-with-icon{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;column-gap:8px}.only-icon{margin-left:auto;margin-right:auto}.radio-container{display:flex!important;flex-direction:row;justify-content:space-between}.radio-container .radio-element{display:flex;height:50px;width:45%;border:2px solid var(--ta-neutral-400);border-radius:20px;box-sizing:border-box;align-items:center;gap:8px;justify-content:center;color:var(--ta-neutral-600);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);line-height:28px;font-weight:500}.radio-container .radio-element app-local-icon{opacity:.4}.radio-container .radio-element.validated{border:2px solid var(--ta-surface-brand-primary)}.radio-container .radio-element.validated app-local-icon{opacity:1}.radio-container .radio-element.validated span{color:var(--ta-neutral-900)}.radio-container .radio-element.disabled{opacity:.4}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-radio', standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe, LocalIconComponent, FormLabelComponent, TranslatePipe], template: "<div class=\"radio-label\">\n  <ta-form-label [input]=\"this.input\"></ta-form-label>\n</div>\n\n<div class=\"radio-container\">\n  @for (option of this.input.options | async; track option.id) {\n    <div\n      class=\"radio-element\"\n      [ngClass]=\"{\n        validated: this.input.value === option.id,\n        disabled: this.input.disabled,\n      }\"\n      (click)=\"this.onOptionClicked(option.id)\"\n    >\n      <div\n        [ngClass]=\"{\n          'button-with-icon': this.hasLabel(option),\n          'only-icon': !this.hasLabel(option),\n        }\"\n      >\n        @if (option.icon) {\n          <ta-local-icon [type]=\"option.icon\" [size]=\"this.iconSize(option)\"> </ta-local-icon>\n        }\n        @if (option.name) {\n          <span>\n            {{ option.name | translate }}\n          </span>\n        }\n      </div>\n    </div>\n  }\n</div>\n", styles: [".radio-label{display:block;padding-bottom:.5em}.button-with-icon{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;column-gap:8px}.only-icon{margin-left:auto;margin-right:auto}.radio-container{display:flex!important;flex-direction:row;justify-content:space-between}.radio-container .radio-element{display:flex;height:50px;width:45%;border:2px solid var(--ta-neutral-400);border-radius:20px;box-sizing:border-box;align-items:center;gap:8px;justify-content:center;color:var(--ta-neutral-600);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);line-height:28px;font-weight:500}.radio-container .radio-element app-local-icon{opacity:.4}.radio-container .radio-element.validated{border:2px solid var(--ta-surface-brand-primary)}.radio-container .radio-element.validated app-local-icon{opacity:1}.radio-container .radio-element.validated span{color:var(--ta-neutral-900)}.radio-container .radio-element.disabled{opacity:.4}\n"] }]
        }], ctorParameters: () => [] });

class SliderComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SliderComponent, isStandalone: true, selector: "ta-input-slider", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"slider-container\">\n    <input\n      type=\"range\"\n      [min]=\"this.input.min\"\n      [max]=\"this.input.max\"\n      [formControl]=\"$any(this.input.formControl)\"\n      class=\"slider-input\"\n      [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".slider-container{width:100%;position:relative}.slider-input{width:100%;margin:0}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-slider', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"slider-container\">\n    <input\n      type=\"range\"\n      [min]=\"this.input.min\"\n      [max]=\"this.input.max\"\n      [formControl]=\"$any(this.input.formControl)\"\n      class=\"slider-input\"\n      [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    />\n  </div>\n</ta-input-layout>\n", styles: [".slider-container{width:100%;position:relative}.slider-input{width:100%;margin:0}\n"] }]
        }], ctorParameters: () => [] });

class TextareaComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TextareaComponent, isStandalone: true, selector: "ta-input-textarea", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"input\">\n  <textarea\n    #focusedElement\n    cdkTextareaAutosize\n    class=\"form-control\"\n    [value]=\"this.input.value\"\n    [formControl]=\"$any(this.input.formControl)\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    [attr.aria-describedby]=\"\n      this.input.formControl?.invalid && this.input.formControl?.touched ? 'error-message' : null\n    \"\n  ></textarea>\n</ta-input-layout>\n", styles: [".textarea-container{width:100%}.form-control{height:auto;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-textarea', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"input\">\n  <textarea\n    #focusedElement\n    cdkTextareaAutosize\n    class=\"form-control\"\n    [value]=\"this.input.value\"\n    [formControl]=\"$any(this.input.formControl)\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n    [attr.aria-describedby]=\"\n      this.input.formControl?.invalid && this.input.formControl?.touched ? 'error-message' : null\n    \"\n  ></textarea>\n</ta-input-layout>\n", styles: [".textarea-container{width:100%}.form-control{height:auto;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [] });

class TextBoxComponent extends TaAbstractInputComponent {
    get isPassword() {
        return this.input.type === 'password';
    }
    constructor() {
        super();
        this.space = true;
        this.hide = false;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.isPassword) {
            this.hide = true;
        }
    }
    iconClicked() {
        if (this.input.iconClicked)
            this.input.iconClicked();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TextBoxComponent, isStandalone: true, selector: "ta-input-textbox", inputs: { space: "space" }, usesInheritance: true, ngImport: i0, template: "@if (this.input.type === 'textarea') {\n  <ta-input-textarea [input]=\"this.input\" [matcher]=\"this.matcher\"></ta-input-textarea>\n} @else {\n  <ta-input-layout [input]=\"this.input\">\n    <div>\n      <input\n        #box\n        #focusedElement\n        class=\"form-control\"\n        [value]=\"this.input.value\"\n        [formControl]=\"$any(this.input.formControl)\"\n        [readonly]=\"this.input.disabled\"\n        [type]=\"this.isPassword && !this.hide ? 'text' : this.input.type\"\n        (keyup)=\"this.onChange(box.value)\"\n      />\n      @if (this.isPassword) {\n        <span class=\"toggle-icon\" (click)=\"this.hide = !this.hide\">\n          <ta-font-icon name=\"eye\"></ta-font-icon>\n        </span>\n      }\n    </div>\n  </ta-input-layout>\n}\n", styles: [".form-control{box-sizing:border-box}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: TextareaComponent, selector: "ta-input-textarea" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextBoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-textbox', standalone: true, imports: [NgIf, FontIconComponent, ReactiveFormsModule, TextareaComponent, InputLayoutComponent], template: "@if (this.input.type === 'textarea') {\n  <ta-input-textarea [input]=\"this.input\" [matcher]=\"this.matcher\"></ta-input-textarea>\n} @else {\n  <ta-input-layout [input]=\"this.input\">\n    <div>\n      <input\n        #box\n        #focusedElement\n        class=\"form-control\"\n        [value]=\"this.input.value\"\n        [formControl]=\"$any(this.input.formControl)\"\n        [readonly]=\"this.input.disabled\"\n        [type]=\"this.isPassword && !this.hide ? 'text' : this.input.type\"\n        (keyup)=\"this.onChange(box.value)\"\n      />\n      @if (this.isPassword) {\n        <span class=\"toggle-icon\" (click)=\"this.hide = !this.hide\">\n          <ta-font-icon name=\"eye\"></ta-font-icon>\n        </span>\n      }\n    </div>\n  </ta-input-layout>\n}\n", styles: [".form-control{box-sizing:border-box}\n"] }]
        }], ctorParameters: () => [], propDecorators: { space: [{
                type: Input
            }] } });

class SwitchComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwitchComponent, isStandalone: true, selector: "ta-input-switch", usesInheritance: true, ngImport: i0, template: "<div>\n  @switch (input.matchtype()) {\n    @case ('textbox') {\n      <ta-input-textbox [input]=\"$any(input)\"></ta-input-textbox>\n    }\n    @case ('number') {\n      <ta-input-textbox [input]=\"$any(input)\"></ta-input-textbox>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox [input]=\"$any(input)\"></ta-input-checkbox>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker [input]=\"$any(input)\"></ta-input-date-picker>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown [input]=\"$any(input)\"></ta-input-dropdown>\n    }\n    @default {\n      <span>Aucune valeur selectionn\u00E9e</span>\n    }\n  }\n</div>\n", styles: [".mat-form-field{display:block}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n"], dependencies: [{ kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }, { kind: "component", type: CheckboxComponent, selector: "ta-input-checkbox" }, { kind: "component", type: DatePickerComponent, selector: "ta-input-date-picker" }, { kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-switch', standalone: true, imports: [TextBoxComponent, CheckboxComponent, DatePickerComponent, DropdownComponent], template: "<div>\n  @switch (input.matchtype()) {\n    @case ('textbox') {\n      <ta-input-textbox [input]=\"$any(input)\"></ta-input-textbox>\n    }\n    @case ('number') {\n      <ta-input-textbox [input]=\"$any(input)\"></ta-input-textbox>\n    }\n    @case ('checkbox') {\n      <ta-input-checkbox [input]=\"$any(input)\"></ta-input-checkbox>\n    }\n    @case ('datePicker') {\n      <ta-input-date-picker [input]=\"$any(input)\"></ta-input-date-picker>\n    }\n    @case ('dropdown') {\n      <ta-input-dropdown [input]=\"$any(input)\"></ta-input-dropdown>\n    }\n    @default {\n      <span>Aucune valeur selectionn\u00E9e</span>\n    }\n  }\n</div>\n", styles: [".mat-form-field{display:block}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n"] }]
        }], ctorParameters: () => [] });

class TimePickerComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TimePickerComponent, isStandalone: true, selector: "ta-input-time-picker", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    matInput\n    #focusedElement\n    class=\"form-control\"\n    [ngxTimepicker]=\"picker\"\n    [formControl]=\"$any(this.input.formControl)\"\n    [value]=\"this.input.value\"\n    [format]=\"24\"\n    readonly\n  />\n  <ngx-material-timepicker #picker [timepickerClass]=\"'time-picker-container-class'\"></ngx-material-timepicker>\n</ta-input-layout>\n", styles: [".mat-form-field{display:block}.time-picker-container{width:100%}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: NgxMaterialTimepickerModule }, { kind: "component", type: i3$1.NgxMaterialTimepickerComponent, selector: "ngx-material-timepicker", inputs: ["cancelBtnTmpl", "editableHintTmpl", "confirmBtnTmpl", "ESC", "enableKeyboardInput", "preventOverlayClick", "disableAnimation", "appendToInput", "hoursOnly", "defaultTime", "timepickerClass", "theme", "min", "max", "ngxMaterialTimepickerTheme", "format", "minutesGap"], outputs: ["timeSet", "opened", "closed", "hourSelected", "timeChanged"] }, { kind: "directive", type: i3$1.TimepickerDirective, selector: "[ngxTimepicker]", inputs: ["format", "min", "max", "ngxTimepicker", "value", "disabled", "disableClick"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-time-picker', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule, MatInputModule, NgxMaterialTimepickerModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input\n    matInput\n    #focusedElement\n    class=\"form-control\"\n    [ngxTimepicker]=\"picker\"\n    [formControl]=\"$any(this.input.formControl)\"\n    [value]=\"this.input.value\"\n    [format]=\"24\"\n    readonly\n  />\n  <ngx-material-timepicker #picker [timepickerClass]=\"'time-picker-container-class'\"></ngx-material-timepicker>\n</ta-input-layout>\n", styles: [".mat-form-field{display:block}.time-picker-container{width:100%}\n"] }]
        }], ctorParameters: () => [] });

class ToggleComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToggleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ToggleComponent, isStandalone: true, selector: "ta-input-toggle", usesInheritance: true, ngImport: i0, template: "<label class=\"toggle-switch\">\n  <input\n    type=\"checkbox\"\n    (click)=\"this.input.value = !this.input.value\"\n    [checked]=\"this.input.value\"\n    [disabled]=\"this.input.disabled\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n  />\n  <span class=\"slider\"></span>\n  <ta-form-label [input]=\"input\" [withMarginBottom]=\"false\"></ta-form-label>\n</label>\n", styles: [".toggle-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.toggle-switch input{display:none}.toggle-switch input:checked+.slider{background-color:var(--ta-border-brand)}.toggle-switch input:checked+.slider:before{transform:translate(14px)}.toggle-switch input:disabled+.slider{border-color:var(--ta-neutral-300);cursor:not-allowed}.toggle-switch input:disabled+.slider:before{border-color:var(--ta-neutral-200)}.slider{position:relative;width:30px;height:16px;background-color:var(--ta-neutral-300);border-radius:var(--ta-radius-rounded);transition:background-color .2s ease;margin-right:var(--ta-space-sm)}.slider:before{content:\"\";position:absolute;width:12px;height:12px;left:2px;top:2px;background-color:var(--ta-neutral-white);border-radius:var(--ta-radius-full);transition:transform .2s ease}\n"], dependencies: [{ kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "ngmodule", type: ReactiveFormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToggleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-toggle', standalone: true, imports: [FormLabelComponent, ReactiveFormsModule], template: "<label class=\"toggle-switch\">\n  <input\n    type=\"checkbox\"\n    (click)=\"this.input.value = !this.input.value\"\n    [checked]=\"this.input.value\"\n    [disabled]=\"this.input.disabled\"\n    [attr.aria-invalid]=\"this.input.formControl?.invalid\"\n  />\n  <span class=\"slider\"></span>\n  <ta-form-label [input]=\"input\" [withMarginBottom]=\"false\"></ta-form-label>\n</label>\n", styles: [".toggle-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.toggle-switch input{display:none}.toggle-switch input:checked+.slider{background-color:var(--ta-border-brand)}.toggle-switch input:checked+.slider:before{transform:translate(14px)}.toggle-switch input:disabled+.slider{border-color:var(--ta-neutral-300);cursor:not-allowed}.toggle-switch input:disabled+.slider:before{border-color:var(--ta-neutral-200)}.slider{position:relative;width:30px;height:16px;background-color:var(--ta-neutral-300);border-radius:var(--ta-radius-rounded);transition:background-color .2s ease;margin-right:var(--ta-space-sm)}.slider:before{content:\"\";position:absolute;width:12px;height:12px;left:2px;top:2px;background-color:var(--ta-neutral-white);border-radius:var(--ta-radius-full);transition:transform .2s ease}\n"] }]
        }], ctorParameters: () => [] });

// eslint-disable-next-line @angular-eslint/component-class-suffix
class InputImageModal extends TaBaseModal {
    constructor(dialogRef, data) {
        super();
        this.dialogRef = dialogRef;
        this.data = data;
        this.selection = [];
        this.tempFiles = new TemporaryFile();
        this.uploadPics = async () => {
            const pics = await pickImages();
            if (this.data.input.update) {
                this.tempFiles.addFiles(pics);
                this.data.input.update(pics);
            }
        };
        this.selected = () => {
            this.dialogRef.close(this.selection);
        };
        this.dialogRef.addPanelClass(['full-screen-modal', 'forced']);
        this.selection = this.data.selection;
    }
    ngOnInit() {
        if (this.data.input.files$) {
            this._registerSubscription(this.data.input.files$.subscribe(() => this.tempFiles.removeAll()));
        }
    }
    getPics$() {
        return this.data.input.files$?.pipe(map(files => files.map(file => ({
            ...file,
            isSelected: this.selection.includes(file.url),
        }))));
    }
    onFileSelected(file) {
        if (this.selection.includes(file.url)) {
            this.selection = this.selection.filter(url => file.url !== url);
            return;
        }
        this.selection = [...this.selection, file.url];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageModal, deps: [{ token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImageModal, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div class=\"input-image-container\">\n  @if (this.tempFiles.files.length > 0) {\n    <ta-files-list [files]=\"this.tempFiles.files\"></ta-files-list>\n    <hr />\n  }\n\n  <ta-files-list [files]=\"(this.getPics$() | async) || []\" (fileSelected)=\"this.onFileSelected($event)\">\n  </ta-files-list>\n\n  <div class=\"cta-container\">\n    <ta-dual-button\n      [isFull]=\"true\"\n      [first]=\"{\n        icon: 'add',\n        label: 'input.images.add',\n        callback: this.uploadPics,\n      }\"\n      [second]=\"{\n        icon: 'check-line',\n        label: 'input.images.pick',\n        callback: this.selected,\n      }\"\n    ></ta-dual-button>\n  </div>\n</div>\n", styles: [".input-image-container{padding-bottom:70px}.cta-container{position:fixed;bottom:env(safe-area-inset-bottom);right:0;left:0;margin:space(xs)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: DualButtonComponent, selector: "ta-dual-button", inputs: ["isFull", "first", "second", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageModal, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgIf, AsyncPipe, FileListComponent, DualButtonComponent], template: "<div class=\"input-image-container\">\n  @if (this.tempFiles.files.length > 0) {\n    <ta-files-list [files]=\"this.tempFiles.files\"></ta-files-list>\n    <hr />\n  }\n\n  <ta-files-list [files]=\"(this.getPics$() | async) || []\" (fileSelected)=\"this.onFileSelected($event)\">\n  </ta-files-list>\n\n  <div class=\"cta-container\">\n    <ta-dual-button\n      [isFull]=\"true\"\n      [first]=\"{\n        icon: 'add',\n        label: 'input.images.add',\n        callback: this.uploadPics,\n      }\"\n      [second]=\"{\n        icon: 'check-line',\n        label: 'input.images.pick',\n        callback: this.selected,\n      }\"\n    ></ta-dual-button>\n  </div>\n</div>\n", styles: [".input-image-container{padding-bottom:70px}.cta-container{position:fixed;bottom:env(safe-area-inset-bottom);right:0;left:0;margin:space(xs)}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });

class InputImagesComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value;
    }
    get fileDataSelection() {
        return this.selection.map(selection => ({
            id: 0,
            type: 'Image',
            url: selection,
        }));
    }
    get isCircularButton() {
        if (!this.selection)
            return false;
        return this.selection.length > 0;
    }
    set selection(value) {
        this.input.formControl?.setValue(value);
    }
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.input.removeFile$) {
            this._registerSubscription(this.input.removeFile$.subscribe(fileData => removeElement(this.selection, fileData.url)));
        }
    }
    async openDialog() {
        if (!this.input.files$) {
            this.selection.push(...(await pickImages()).map(image => image.localUrl));
            return;
        }
        const dialogRef = this.dialog.open(InputImageModal, {
            data: { input: this.input, selection: this.selection },
        });
        this._registerSubscription(dialogRef.afterClosed().subscribe(selection => {
            if (!selection) {
                return;
            }
            this.selection = selection;
        }));
    }
    onFileDeleted(fileData) {
        this.selection = this.selection.filter(url => url !== fileData.url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImagesComponent, deps: [{ token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImagesComponent, isStandalone: true, selector: "ta-input-images", usesInheritance: true, ngImport: i0, template: "<div class=\"row g-0 align-items-center mb-space-2\">\n  <div class=\"col\">\n    <ta-form-label [input]=\"this.input\"></ta-form-label>\n  </div>\n  <div [ngClass]=\"this.selection.length === 0 ? 'col-12 my-space-2' : 'col-auto'\">\n    <ta-button\n      type=\"secondary\"\n      #focusedElement\n      (action)=\"this.openDialog()\"\n      [options]=\"{ circular: this.isCircularButton }\"\n    >\n      <ta-local-icon [type]=\"this.icon.Gallery\"></ta-local-icon>\n    </ta-button>\n  </div>\n</div>\n\n@if (this.selection.length > 0) {\n  <ta-files-list\n    [files]=\"this.fileDataSelection\"\n    [canDeleteFile]=\"!!this.input.fileDeleted\"\n    (fileDeleted)=\"this.onFileDeleted($event)\"\n  ></ta-files-list>\n}\n", styles: [""], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-images', standalone: true, imports: [NgIf, NgClass, LocalIconComponent, FormLabelComponent, ButtonComponent, FileListComponent], template: "<div class=\"row g-0 align-items-center mb-space-2\">\n  <div class=\"col\">\n    <ta-form-label [input]=\"this.input\"></ta-form-label>\n  </div>\n  <div [ngClass]=\"this.selection.length === 0 ? 'col-12 my-space-2' : 'col-auto'\">\n    <ta-button\n      type=\"secondary\"\n      #focusedElement\n      (action)=\"this.openDialog()\"\n      [options]=\"{ circular: this.isCircularButton }\"\n    >\n      <ta-local-icon [type]=\"this.icon.Gallery\"></ta-local-icon>\n    </ta-button>\n  </div>\n</div>\n\n@if (this.selection.length > 0) {\n  <ta-files-list\n    [files]=\"this.fileDataSelection\"\n    [canDeleteFile]=\"!!this.input.fileDeleted\"\n    (fileDeleted)=\"this.onFileDeleted($event)\"\n  ></ta-files-list>\n}\n" }]
        }], ctorParameters: () => [{ type: i1$1.MatDialog }] });

class InputImageComponent extends TaAbstractInputComponent {
    get selection() {
        return this.input.value;
    }
    get userInfo() {
        return this.selection.map(selection => ({
            picture: selection,
            firstname: '',
            lastname: '',
        }))[0];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputImageComponent, isStandalone: true, selector: "ta-input-image", usesInheritance: true, ngImport: i0, template: "@if (this.userInfo) {\n  <ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n", styles: [""], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-image', standalone: true, imports: [NgIf, UserLogoComponent], template: "@if (this.userInfo) {\n  <ta-user-logo [user]=\"this.userInfo\" size=\"xl\"></ta-user-logo>\n}\n" }]
        }] });

class InputSchemaModal extends TaBaseModal {
    constructor(dialogRef) {
        super();
        this.dialogRef = dialogRef;
        this.askImage$ = new Subject();
        this.imagePath = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAABlBMVEUAAAD8/vwnjUF/AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAcVJREFUeJztzTEBAAAMAiD7l9YYOwYFSC/Fbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xb7g32cNHwzdl5x4gAAAABJRU5ErkJggg==';
        this.close = () => {
            this.dialogRef.close();
        };
        this.selected = () => {
            this.askImage$.next(null);
        };
        this.dialogRef.addPanelClass(['full-screen-modal', 'edit-mode']);
    }
    savedImage(blob) {
        const file = new File([blob], newGuid(), { type: blob.type });
        this.dialogRef.close({ file: { file, localUrl: this.imagePath } });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaModal, deps: [{ token: i1$1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputSchemaModal, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<div class=\"edit-schema-container\">\n  <ta-files-edit\n    [imagePath]=\"this.imagePath\"\n    [saveImage$]=\"this.askImage$\"\n    (savedImage)=\"this.savedImage($event)\"\n  ></ta-files-edit>\n</div>\n", styles: [".edit-schema-container{height:80vh;padding-bottom:70px}\n"], dependencies: [{ kind: "component", type: FileEditComponent, selector: "ta-files-edit", inputs: ["imagePath", "saveImage$"], outputs: ["savedImage"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaModal, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [FileEditComponent], template: "<div class=\"edit-schema-container\">\n  <ta-files-edit\n    [imagePath]=\"this.imagePath\"\n    [saveImage$]=\"this.askImage$\"\n    (savedImage)=\"this.savedImage($event)\"\n  ></ta-files-edit>\n</div>\n", styles: [".edit-schema-container{height:80vh;padding-bottom:70px}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.MatDialogRef }] });

class InputSchemaComponent extends TaAbstractInputComponent {
    get pics() {
        if (!this.input.value) {
            return null;
        }
        return [
            {
                id: 0,
                type: 'Image',
                url: this.input.value,
            },
        ];
    }
    get isCircularButton() {
        if (!this.pics)
            return false;
        return this.pics.length > 0;
    }
    set selection(value) {
        this.input.formControl?.setValue(value);
    }
    constructor(dialog) {
        super();
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(InputSchemaModal);
        this._registerSubscription(dialogRef.afterClosed().subscribe(async (data) => {
            if (!data || !data.file) {
                return;
            }
            if (this.input.update) {
                const pics = await this.input.update([data.file]);
                if (pics && pics.length > 0 && data.file.file) {
                    this.selection = await getBase64FromFile(data.file.file);
                }
            }
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaComponent, deps: [{ token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputSchemaComponent, isStandalone: true, selector: "ta-input-schema", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FileListComponent, selector: "ta-files-list", inputs: ["files", "canDeleteFile"], outputs: ["fileSelected", "moreInformationSelected", "fileDeleted"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputSchemaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-schema', standalone: true, imports: [NgIf, LocalIconComponent, ButtonComponent, FileListComponent, InputLayoutComponent], template: "<ta-input-layout [input]=\"this.input\">\n  <ta-button\n    #focusedElement\n    (action)=\"this.openDialog()\"\n    [options]=\"{ circular: this.isCircularButton }\"\n    [style]=\"'secondary'\"\n  >\n    <ta-local-icon [type]=\"this.icon.Pencil\"></ta-local-icon>\n  </ta-button>\n\n  @if (this.pics) {\n    <ta-files-list [files]=\"this.pics\"></ta-files-list>\n  }\n</ta-input-layout>\n" }]
        }], ctorParameters: () => [{ type: i1$1.MatDialog }] });

class SearchFieldComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.isOpen = false;
        this.placeholder = '';
        this.space = true;
        this.type = 'sm';
        this.valueCompleted = new EventEmitter();
        this.isDeployed = false;
        this.focusTextBox = false;
        this.keyPress = (event) => {
            if (event.key === 'Enter') {
                this.iconClicked();
            }
        };
    }
    ngOnInit() {
        super.ngOnInit();
        this.isDeployed = this.isOpen;
        if (this.input.value) {
            this.isDeployed = true;
        }
        this.input.createFormControl();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.input.destroy();
    }
    iconClicked() {
        if (!this.isDeployed) {
            this.isDeployed = true;
            return;
        }
        if (this.input.value) {
            this.valueCompleted.emit(this.input.value);
            return;
        }
        if (!this.isOpen) {
            this.isDeployed = false;
        }
    }
    focus() {
        this.focusTextBox = true;
    }
    focusOut() {
        this.focusTextBox = false;
        if (!this.isOpen) {
            this.isDeployed = !!this.input.value;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SearchFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SearchFieldComponent, isStandalone: true, selector: "ta-search-field", inputs: { isOpen: "isOpen", placeholder: "placeholder", space: "space", type: "type" }, outputs: { valueCompleted: "valueCompleted" }, host: { listeners: { "window:keyup": "keyPress($event)" } }, usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"input-group\" [class.isDeployed]=\"this.isDeployed\" [class.focus]=\"this.focusTextBox\">\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-search-field', standalone: true, imports: [FontIconComponent, StopPropagationDirective, ReactiveFormsModule, TranslateModule, InputLayoutComponent], template: "<ta-input-layout [input]=\"this.input\">\n  <div class=\"input-group\" [class.isDeployed]=\"this.isDeployed\" [class.focus]=\"this.focusTextBox\">\n    <div class=\"search-div\" appStopPropagation (click)=\"this.iconClicked()\">\n      <div class=\"action\">\n        <ta-font-icon name=\"search\" size=\"xs\"></ta-font-icon>\n      </div>\n    </div>\n    <div class=\"inner-div\" [hidden]=\"!this.isDeployed\">\n      <div class=\"search-input-container\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          #focusedElement\n          [placeholder]=\"this.placeholder | translate\"\n          [value]=\"this.input.value\"\n          [formControl]=\"$any(this.input.formControl)\"\n          [readonly]=\"this.input.disabled\"\n          (blur)=\"this.focusOut()\"\n          (focus)=\"this.focus()\"\n        />\n      </div>\n    </div>\n  </div>\n</ta-input-layout>\n", styles: [".input-group{flex-wrap:nowrap;display:flex;align-items:center;padding:var(--ta-space-sm);gap:var(--ta-space-sm);box-sizing:border-box}.input-group .inner-div{flex-grow:1}.input-group.focus ta-font-icon{color:var(--ta-icon-brand-primary)}.input-group.disabled{color:var(--ta-text-tertiary)}.input-group.disabled ta-font-icon{color:var(--ta-icon-tertiary)}.search-input-container{width:100%}.form-control{width:90%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { isOpen: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], space: [{
                type: Input
            }], type: [{
                type: Input
            }], valueCompleted: [{
                type: Output
            }], keyPress: [{
                type: HostListener,
                args: ['window:keyup', ['$event']]
            }] } });

class InputChoicesComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.inputSearch = new InputTextBox();
        this.inputNullable = new InputCheckBox({
            label: 'input.choices.nullable.label',
        });
        this.filteredOptions$ = null;
        this.bOptions$ = new BehaviorSubject([]);
        this.searchFocus = new BehaviorSubject(undefined);
        this.refresh = () => {
            (this.input.advancedSearch$ ? this.input.advancedSearch$() : of()).pipe(take(1)).subscribe({
                next: data => {
                    this.bOptions$.next(data);
                },
            });
        };
        this.select = (option) => {
            const values = this.input.value ?? [];
            if (values.includes(option.id)) {
                this.input.value = values.filter((val) => val !== option.id);
                return;
            }
            if (!this.input.multiple) {
                this.input.value = [option.id];
                this.close();
                return;
            }
            this.input.value = [...values, option.id];
        };
        this.isSelected = (option) => {
            const values = toArray(this.input.value);
            return values.includes(option.id);
        };
    }
    ngOnInit() {
        super.ngOnInit();
        if (!this.input.advancedSearch$) {
            this.requestState.asked();
            this._registerSubscription(this.input.options.subscribe({
                next: data => {
                    this.bOptions$.next(data);
                    this.requestState.completed();
                },
            }));
            this.filteredOptions$ = combineLatest([this.inputSearch.changeValue$.pipe(startWith('')), this.bOptions$]).pipe(map(data => ({
                search: data[0],
                list: data[1],
            })), map(({ search, list }) => list.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))));
        }
        else {
            this.filteredOptions$ = this.bOptions$;
            this.refresh();
            this._registerSubscription(this.inputSearch.changeValue$
                .pipe(debounceTime(500), tap(() => this.requestState.asked()), concatMap(search => (this.input.advancedSearch$ ? this.input.advancedSearch$(search) : of())))
                .subscribe({
                next: data => {
                    const prevData = this.bOptions$.getValue();
                    this.bOptions$.next(getUniqueArray([...prevData.filter(item => this.input.value?.includes(item.id)), ...data]));
                    this.requestState.completed();
                },
            }));
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.searchFocus.next();
    }
    getName$(id) {
        return this.bOptions$.pipe(map(values => values.find(value => value.id === id)?.name ?? null), map(name => name ?? id));
    }
    selectNullable(select) {
        if (!select) {
            this.input.value = [];
            return;
        }
        this.input.value = [''];
    }
    clear() {
        this.input.formControl?.setValue([]);
        this.close();
    }
    close() {
        this.focusedElement.nativeElement.click();
        this.overlayPanelRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputChoicesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InputChoicesComponent, isStandalone: true, selector: "ta-input-choices", viewQueries: [{ propertyName: "overlayPanelRef", first: true, predicate: TaOverlayPanelComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "@if (this.input.onlyTemplate !== true) {\n  <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\n    <ng-template #panelTrigger>\n      <ta-input-layout [input]=\"this.input\">\n        <div class=\"form-control\" #focusedElement>\n          <div class=\"input-group d-flex full-width\">\n            <input type=\"hidden\" [formControl]=\"$any(this.input.formControl)\" [value]=\"this.input.value\" />\n\n            <div class=\"flex-start g-space-xs\">\n              @for (value of this.input.value; track value) {\n                <ta-label size=\"sm\" class=\"d-flex\">\n                  {{ (getName$(value) | async) ?? '' | translate }}\n                </ta-label>\n              }\n            </div>\n            @if (this.input.message) {\n              <div class=\"message\">\n                <small class=\"form-text text-muted\">\n                  <span>{{ this.input.message }}</span>\n                </small>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-input-layout>\n    </ng-template>\n    <ng-template #panelContent>\n      <ng-template [ngTemplateOutlet]=\"choicesTemplate\"></ng-template>\n    </ng-template>\n  </ta-overlay-panel>\n} @else {\n  <div class=\"only-template\">\n    <ng-template [ngTemplateOutlet]=\"choicesTemplate\"></ng-template>\n  </div>\n}\n\n<ng-template #choicesTemplate>\n  <div appStopPropagation class=\"flex-column g-space-sm\">\n    @if (!this.input.choiceTemplate) {\n      @if (this.input.withSearch) {\n        <ta-search-field\n          [isOpen]=\"true\"\n          [input]=\"this.inputSearch\"\n          [onFocus]=\"this.searchFocus\"\n          [standalone]=\"true\"\n          class=\"m-space-sm\"\n        ></ta-search-field>\n      }\n\n      <ta-layout-side class=\"d-flex full-width choices-wrapper\" style=\"min-height: 300px; max-height: 400px\">\n        <ta-layout-side-content>\n          <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n            <ta-empty [isEmpty]=\"(this.filteredOptions$ | async)?.length === 0\">\n              @if (this.input.showNullableFields) {\n                <div class=\"p-space-sm\">\n                  <ta-input-checkbox\n                    [input]=\"this.inputNullable\"\n                    [standalone]=\"true\"\n                    (valueChanged)=\"this.selectNullable($event)\"\n                  ></ta-input-checkbox>\n                </div>\n              }\n              @for (option of this.filteredOptions$ | async; track option) {\n                <div\n                  class=\"flex-row pointer m-space-sm p-space-sm\"\n                  [class.is-selected]=\"this.isSelected(option)\"\n                  (click)=\"this.select(option)\"\n                >\n                  <ta-text>{{ option.name }}</ta-text>\n                </div>\n              }\n            </ta-empty>\n          </ta-loader>\n        </ta-layout-side-content>\n        <ta-layout-side-cta>\n          <div class=\"align-center space-between\">\n            <div class=\"pr-space-md\">\n              <div class=\"align-center g-space-xs link\">\n                <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n                <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n                  {{ 'core.filter.clear' | translate }}\n                </ta-link>\n              </div>\n            </div>\n            <div>\n              @if (this.input.onlyTemplate !== true) {\n                <ta-button (action)=\"this.close()\">\n                  <div class=\"align-center m-space-xs\">\n                    <ta-font-icon name=\"check-line\"></ta-font-icon>\n                    {{ 'form.validate' | translate }}\n                  </div>\n                </ta-button>\n              }\n            </div>\n          </div>\n        </ta-layout-side-cta>\n      </ta-layout-side>\n    } @else if (this.input.choiceTemplate && this.filteredOptions$) {\n      @if (this.input.withSearch) {\n        <ta-search-field\n          [isOpen]=\"true\"\n          [input]=\"this.inputSearch\"\n          [onFocus]=\"this.searchFocus\"\n          class=\"m-space-sm\"\n          [standalone]=\"true\"\n        ></ta-search-field>\n      }\n      <ta-layout-side class=\"d-flex full-width\" style=\"min-height: 300px; max-height: 400px\">\n        <ta-layout-side-content>\n          <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n            @if (this.input.choiceTemplate.one) {\n              <ta-empty [isEmpty]=\"(this.filteredOptions$ | async)?.length === 0\">\n                @for (option of this.filteredOptions$ | async; track option) {\n                  <div\n                    class=\"flex-row pointer m-space-sm p-space-sm\"\n                    [class.is-selected]=\"this.isSelected(option)\"\n                    (click)=\"this.select(option)\"\n                  >\n                    <ng-template\n                      [ngTemplateOutlet]=\"this.input.choiceTemplate.one\"\n                      [ngTemplateOutletContext]=\"{ item: option.data }\"\n                    ></ng-template>\n                  </div>\n                }\n              </ta-empty>\n            } @else if (this.input.choiceTemplate.list) {\n              <ng-template\n                [ngTemplateOutlet]=\"this.input.choiceTemplate.list\"\n                [ngTemplateOutletContext]=\"{\n                  data: {\n                    items: this.filteredOptions$ | async,\n                    isselected: this.isSelected,\n                    select: this.select,\n                    search: this.inputSearch.value,\n                    refresh: this.refresh,\n                  },\n                }\"\n              ></ng-template>\n            }\n          </ta-loader>\n        </ta-layout-side-content>\n        <ta-layout-side-cta>\n          <div class=\"align-center space-between\">\n            <div class=\"pr-space-md\">\n              <div class=\"align-center g-space-xs link\">\n                <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n                <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n                  {{ 'core.filter.clear' | translate }}\n                </ta-link>\n              </div>\n            </div>\n            <div>\n              @if (this.input.onlyTemplate !== true) {\n                <ta-button (action)=\"this.close()\">\n                  <div class=\"align-center m-space-xs\">\n                    <ta-font-icon name=\"check-line\"></ta-font-icon>\n                    {{ 'form.validate' | translate }}\n                  </div>\n                </ta-button>\n              }\n            </div>\n          </div>\n        </ta-layout-side-cta>\n      </ta-layout-side>\n    }\n  </div>\n</ng-template>\n", styles: [".textbox-container{width:100%}.input-group{position:relative}.input-group .action{position:absolute;right:8px;top:16px;bottom:0}.is-selected{border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-full)}.menu-panel{background-color:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded);border:1px solid;border-color:var(--ta-neutral-300);overflow:hidden}.choices-wrapper{overflow:visible;max-height:none}.only-template{background:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: TaOverlayPanelComponent, selector: "ta-overlay-panel", inputs: ["panelConfig", "position"], outputs: ["closed"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: LayoutSideCtaComponent, selector: "ta-layout-side-cta", inputs: ["background"] }, { kind: "component", type: LayoutSideContentComponent, selector: "ta-layout-side-content" }, { kind: "component", type: LayoutSideComponent, selector: "ta-layout-side" }, { kind: "component", type: SearchFieldComponent, selector: "ta-search-field", inputs: ["isOpen", "placeholder", "space", "type"], outputs: ["valueCompleted"] }, { kind: "component", type: LabelComponent$1, selector: "ta-label", inputs: ["size", "type"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: CheckboxComponent, selector: "ta-input-checkbox" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputChoicesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-choices', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        AsyncPipe,
                        FontIconComponent,
                        StopPropagationDirective,
                        TranslateModule,
                        ButtonComponent,
                        LinkComponent,
                        TaOverlayPanelComponent,
                        EmptyComponent,
                        LoaderComponent,
                        LayoutSideCtaComponent,
                        LayoutSideContentComponent,
                        LayoutSideComponent,
                        SearchFieldComponent,
                        LabelComponent$1,
                        TextComponent,
                        CheckboxComponent,
                        ReactiveFormsModule,
                        InputLayoutComponent,
                    ], template: "@if (this.input.onlyTemplate !== true) {\n  <ta-overlay-panel [panelConfig]=\"{ matchTriggerWidth: false }\">\n    <ng-template #panelTrigger>\n      <ta-input-layout [input]=\"this.input\">\n        <div class=\"form-control\" #focusedElement>\n          <div class=\"input-group d-flex full-width\">\n            <input type=\"hidden\" [formControl]=\"$any(this.input.formControl)\" [value]=\"this.input.value\" />\n\n            <div class=\"flex-start g-space-xs\">\n              @for (value of this.input.value; track value) {\n                <ta-label size=\"sm\" class=\"d-flex\">\n                  {{ (getName$(value) | async) ?? '' | translate }}\n                </ta-label>\n              }\n            </div>\n            @if (this.input.message) {\n              <div class=\"message\">\n                <small class=\"form-text text-muted\">\n                  <span>{{ this.input.message }}</span>\n                </small>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-input-layout>\n    </ng-template>\n    <ng-template #panelContent>\n      <ng-template [ngTemplateOutlet]=\"choicesTemplate\"></ng-template>\n    </ng-template>\n  </ta-overlay-panel>\n} @else {\n  <div class=\"only-template\">\n    <ng-template [ngTemplateOutlet]=\"choicesTemplate\"></ng-template>\n  </div>\n}\n\n<ng-template #choicesTemplate>\n  <div appStopPropagation class=\"flex-column g-space-sm\">\n    @if (!this.input.choiceTemplate) {\n      @if (this.input.withSearch) {\n        <ta-search-field\n          [isOpen]=\"true\"\n          [input]=\"this.inputSearch\"\n          [onFocus]=\"this.searchFocus\"\n          [standalone]=\"true\"\n          class=\"m-space-sm\"\n        ></ta-search-field>\n      }\n\n      <ta-layout-side class=\"d-flex full-width choices-wrapper\" style=\"min-height: 300px; max-height: 400px\">\n        <ta-layout-side-content>\n          <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n            <ta-empty [isEmpty]=\"(this.filteredOptions$ | async)?.length === 0\">\n              @if (this.input.showNullableFields) {\n                <div class=\"p-space-sm\">\n                  <ta-input-checkbox\n                    [input]=\"this.inputNullable\"\n                    [standalone]=\"true\"\n                    (valueChanged)=\"this.selectNullable($event)\"\n                  ></ta-input-checkbox>\n                </div>\n              }\n              @for (option of this.filteredOptions$ | async; track option) {\n                <div\n                  class=\"flex-row pointer m-space-sm p-space-sm\"\n                  [class.is-selected]=\"this.isSelected(option)\"\n                  (click)=\"this.select(option)\"\n                >\n                  <ta-text>{{ option.name }}</ta-text>\n                </div>\n              }\n            </ta-empty>\n          </ta-loader>\n        </ta-layout-side-content>\n        <ta-layout-side-cta>\n          <div class=\"align-center space-between\">\n            <div class=\"pr-space-md\">\n              <div class=\"align-center g-space-xs link\">\n                <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n                <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n                  {{ 'core.filter.clear' | translate }}\n                </ta-link>\n              </div>\n            </div>\n            <div>\n              @if (this.input.onlyTemplate !== true) {\n                <ta-button (action)=\"this.close()\">\n                  <div class=\"align-center m-space-xs\">\n                    <ta-font-icon name=\"check-line\"></ta-font-icon>\n                    {{ 'form.validate' | translate }}\n                  </div>\n                </ta-button>\n              }\n            </div>\n          </div>\n        </ta-layout-side-cta>\n      </ta-layout-side>\n    } @else if (this.input.choiceTemplate && this.filteredOptions$) {\n      @if (this.input.withSearch) {\n        <ta-search-field\n          [isOpen]=\"true\"\n          [input]=\"this.inputSearch\"\n          [onFocus]=\"this.searchFocus\"\n          class=\"m-space-sm\"\n          [standalone]=\"true\"\n        ></ta-search-field>\n      }\n      <ta-layout-side class=\"d-flex full-width\" style=\"min-height: 300px; max-height: 400px\">\n        <ta-layout-side-content>\n          <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n            @if (this.input.choiceTemplate.one) {\n              <ta-empty [isEmpty]=\"(this.filteredOptions$ | async)?.length === 0\">\n                @for (option of this.filteredOptions$ | async; track option) {\n                  <div\n                    class=\"flex-row pointer m-space-sm p-space-sm\"\n                    [class.is-selected]=\"this.isSelected(option)\"\n                    (click)=\"this.select(option)\"\n                  >\n                    <ng-template\n                      [ngTemplateOutlet]=\"this.input.choiceTemplate.one\"\n                      [ngTemplateOutletContext]=\"{ item: option.data }\"\n                    ></ng-template>\n                  </div>\n                }\n              </ta-empty>\n            } @else if (this.input.choiceTemplate.list) {\n              <ng-template\n                [ngTemplateOutlet]=\"this.input.choiceTemplate.list\"\n                [ngTemplateOutletContext]=\"{\n                  data: {\n                    items: this.filteredOptions$ | async,\n                    isselected: this.isSelected,\n                    select: this.select,\n                    search: this.inputSearch.value,\n                    refresh: this.refresh,\n                  },\n                }\"\n              ></ng-template>\n            }\n          </ta-loader>\n        </ta-layout-side-content>\n        <ta-layout-side-cta>\n          <div class=\"align-center space-between\">\n            <div class=\"pr-space-md\">\n              <div class=\"align-center g-space-xs link\">\n                <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n                <ta-link class=\"c-pointer\" (action)=\"this.clear()\">\n                  {{ 'core.filter.clear' | translate }}\n                </ta-link>\n              </div>\n            </div>\n            <div>\n              @if (this.input.onlyTemplate !== true) {\n                <ta-button (action)=\"this.close()\">\n                  <div class=\"align-center m-space-xs\">\n                    <ta-font-icon name=\"check-line\"></ta-font-icon>\n                    {{ 'form.validate' | translate }}\n                  </div>\n                </ta-button>\n              }\n            </div>\n          </div>\n        </ta-layout-side-cta>\n      </ta-layout-side>\n    }\n  </div>\n</ng-template>\n", styles: [".textbox-container{width:100%}.input-group{position:relative}.input-group .action{position:absolute;right:8px;top:16px;bottom:0}.is-selected{border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-full)}.menu-panel{background-color:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded);border:1px solid;border-color:var(--ta-neutral-300);overflow:hidden}.choices-wrapper{overflow:visible;max-height:none}.only-template{background:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { overlayPanelRef: [{
                type: ViewChild,
                args: [TaOverlayPanelComponent]
            }] } });

class WysiswygComponent extends TaAbstractInputComponent {
    set(value) {
        this.input.value = value.blocks;
    }
    clear() {
        this.input.value = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WysiswygComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: WysiswygComponent, isStandalone: true, selector: "ta-input-wysiswyg", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input type=\"hidden\" #focusedElement [formControl]=\"$any(this.input.formControl)\" [value]=\"this.input.value\" />\n\n  <ta-cms-editor-input\n    class=\"form-control\"\n    [initValue]=\"this.input.value\"\n    (saved)=\"this.set($event)\"\n    [saveOnChange]=\"true\"\n  >\n  </ta-cms-editor-input>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.form-control{width:auto}\n"], dependencies: [{ kind: "component", type: EditorInputComponent, selector: "ta-cms-editor-input", inputs: ["initValue", "setNewValue$", "requestSave$", "clear$", "users", "saveOnChange", "maxHeight"], outputs: ["changed", "saved"] }, { kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WysiswygComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-wysiswyg', standalone: true, imports: [EditorInputComponent, InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input type=\"hidden\" #focusedElement [formControl]=\"$any(this.input.formControl)\" [value]=\"this.input.value\" />\n\n  <ta-cms-editor-input\n    class=\"form-control\"\n    [initValue]=\"this.input.value\"\n    (saved)=\"this.set($event)\"\n    [saveOnChange]=\"true\"\n  >\n  </ta-cms-editor-input>\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}.form-control{width:auto}\n"] }]
        }] });

class InputPhoneComponent extends TaAbstractInputComponent {
    constructor(renderer) {
        super();
        this.renderer = renderer;
    }
    ngOnInit() {
        super.ngOnInit();
        const link = this.renderer.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css';
        this.renderer.appendChild(document.head, link);
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // Initialiser intl-tel-input une fois que le DOM est prêt
        intlTelInput(this.phoneInput.nativeElement, {
            initialCountry: 'fr',
            countryOrder: this.input.preferredCountries,
            separateDialCode: true,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputPhoneComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputPhoneComponent, isStandalone: true, selector: "ta-input-phone", viewQueries: [{ propertyName: "phoneInput", first: true, predicate: ["phoneInput"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputPhoneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-phone', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule], template: "<ta-input-layout [input]=\"this.input\">\n  <input class=\"form-control\" #phoneInput type=\"tel\" [formControl]=\"$any(this.input.formControl)\" />\n</ta-input-layout>\n", styles: [".textbox-container{width:100%}:host ::ng-deep .mdc-text-field{overflow:visible}\n"] }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }], propDecorators: { phoneInput: [{
                type: ViewChild,
                args: ['phoneInput', { static: false }]
            }] } });

class InputAddressComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.addressDetails = {
            street: null,
            streetNumber: null,
            locality: null,
            postalCode: null,
            country: null,
            longitude: null,
            latitude: null,
        };
    }
    parseAddress(place) {
        const addressComponents = place.address_components;
        const geometry = place.geometry;
        const getComponent = (type) => {
            const component = addressComponents.find((comp) => comp.types.includes(type));
            return component ? component.long_name : null;
        };
        this.input.value = {
            streetNumber: getComponent('street_number'),
            street: getComponent('route'),
            locality: getComponent('locality'),
            postalCode: getComponent('postal_code'),
            country: getComponent('country'),
            longitude: geometry?.location?.lng() || null,
            latitude: geometry?.location?.lat() || null,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputAddressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputAddressComponent, isStandalone: true, selector: "ta-input-address", viewQueries: [{ propertyName: "addresstext", first: true, predicate: ["addresstext"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-form-label [input]=\"input\"></ta-form-label>\n<mat-google-maps-autocomplete\n  class=\"form-control\"\n  autocomplete=\"off\"\n  appearance=\"standard\"\n  [addressLabelText]=\"''\"\n  [placeholderText]=\"'form.input.address.placeholder' | translate\"\n  [requiredErrorText]=\"'form.input.address.required' | translate\"\n  [invalidErrorText]=\"'form.input.address.invalid' | translate\"\n  (onAutocompleteSelected)=\"this.parseAddress($event)\"\n  #addresstext\n></mat-google-maps-autocomplete>\n", styles: ["::ng-deep .mat-mdc-form-field-required-marker{display:none}::ng-deep .mat-mdc-form-field-infix{padding-top:var(--ta-space-sm)!important;padding-bottom:var(--ta-space-sm)!important;align-content:center;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}::ng-deep .mat-mdc-text-field-wrapper{border-radius:var(--ta-radius-rounded)!important}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: MatGoogleMapsAutocompleteModule }, { kind: "component", type: i2$1.MatGoogleMapsAutocompleteComponent, selector: "mat-google-maps-autocomplete", inputs: ["addressLabelText", "placeholderText", "requiredErrorText", "invalidErrorText", "appearance", "value", "address", "country", "placeIdOnly", "strictBounds", "types", "type", "autoCompleteOptions"], outputs: ["onChange", "onAutocompleteSelected", "onGermanAddressMapped", "onLocationSelected"], exportAs: ["matGoogleMapsAutocomplete"] }, { kind: "component", type: FormLabelComponent, selector: "ta-form-label", inputs: ["input", "withMarginBottom"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputAddressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-address', standalone: true, imports: [TranslateModule, MatGoogleMapsAutocompleteModule, FormLabelComponent], template: "<ta-form-label [input]=\"input\"></ta-form-label>\n<mat-google-maps-autocomplete\n  class=\"form-control\"\n  autocomplete=\"off\"\n  appearance=\"standard\"\n  [addressLabelText]=\"''\"\n  [placeholderText]=\"'form.input.address.placeholder' | translate\"\n  [requiredErrorText]=\"'form.input.address.required' | translate\"\n  [invalidErrorText]=\"'form.input.address.invalid' | translate\"\n  (onAutocompleteSelected)=\"this.parseAddress($event)\"\n  #addresstext\n></mat-google-maps-autocomplete>\n", styles: ["::ng-deep .mat-mdc-form-field-required-marker{display:none}::ng-deep .mat-mdc-form-field-infix{padding-top:var(--ta-space-sm)!important;padding-bottom:var(--ta-space-sm)!important;align-content:center;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}::ng-deep .mat-mdc-text-field-wrapper{border-radius:var(--ta-radius-rounded)!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { addresstext: [{
                type: ViewChild,
                args: ['addresstext']
            }] } });

class UploadComponent extends TaAbstractInputComponent {
    constructor() {
        super();
        this.uploadStatusChanged = new EventEmitter();
        this._documentsService = inject(TaDocumentsService);
        this.inProgressFiles = [];
        this._invervalId = window.setInterval(() => {
            if (!this.inProgressFiles || this.inProgressFiles.length === 0) {
                return;
            }
            for (const file of this.inProgressFiles) {
                if (file.progress === 100) {
                    continue;
                }
                if (file.progress >= 95) {
                    continue;
                }
                file.progress += 5;
            }
        }, 1000);
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.input.value && this.input.value.length > 0) {
            const ids = this.input.value.map(file => file.id);
            this.requestState.asked();
            this._documentsService.fetchDocuments$(ids).subscribe({
                next: () => {
                    const documents = this._documentsService.getDocuments(ids);
                    for (let doc of documents ?? []) {
                        this.inProgressFiles.push({
                            name: doc.name ?? '',
                            completed: doc,
                            progress: 100,
                        });
                    }
                    this.requestState.completed();
                },
            });
        }
    }
    ngOnDestroy() {
        window.clearInterval(this._invervalId);
    }
    onFileDropped($event) {
        this.prepareFilesList($event);
    }
    fileBrowseHandler(files) {
        this.prepareFilesList(files.files);
    }
    openDocument(doc) {
        downloadFile(doc.url);
    }
    isValidDocumentList() {
        if (this.inProgressFiles.length === 0) {
            return false;
        }
        return !this.inProgressFiles.find(file => file.progress < 100);
    }
    validation() {
        const values = this.inProgressFiles
            .map(file => file.completed
            ? {
                id: file.completed.id,
                name: file.completed.name ?? '',
                url: file.completed.url,
            }
            : null)
            .filter(isNonNullable);
        this.input.confirmValue(values);
    }
    deleteInProgressFile(name) {
        this.inProgressFiles = this.inProgressFiles.filter(file => file.name !== name);
        this._refreshUploadStatus();
    }
    deleteFile(id) {
        this.inProgressFiles = this.inProgressFiles.filter(file => file.completed?.id !== id);
        this._refreshUploadStatus();
    }
    prepareFilesList(files) {
        for (const item of files) {
            const inProgressFile = {
                name: item.name,
                progress: 0,
                completed: null,
            };
            this.inProgressFiles.push(inProgressFile);
            this.uploadStatusChanged.emit(false);
            this._documentsService.addDocument$({ file: item }).subscribe({
                next: data => {
                    inProgressFile.progress = 100;
                    inProgressFile.completed = data;
                    this._refreshUploadStatus();
                    if (!this.input.confirmButton) {
                        this.validation();
                    }
                },
            });
        }
    }
    async uploadFile() {
        // todo move into a capacitor filesystem service
        const pickFiles = await FilePicker.pickFiles({
            multiple: true,
            types: [
                // pdf
                'application/pdf',
                // word
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/msword',
                // excel
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                // text
                'text/plain',
            ],
        });
        const files = [];
        for (let file of pickFiles.files) {
            if (!file || !file.blob)
                continue;
            files.push(this._localToFile(file));
        }
        this.prepareFilesList(files);
    }
    _refreshUploadStatus() {
        const allComplete = this.inProgressFiles.every(file => file.progress === 100);
        this.uploadStatusChanged.emit(allComplete);
    }
    _localToFile(file) {
        return new File([file.blob], file.name, {
            type: file.mimeType,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UploadComponent, isStandalone: true, selector: "ta-input-upload", outputs: { uploadStatusChanged: "uploadStatusChanged" }, viewQueries: [{ propertyName: "fileDropEl", first: true, predicate: ["fileDropRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text>\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: MegaoctetComponent, selector: "ta-megaoctet", inputs: ["octet", "icon"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i2$2.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-upload', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        FontIconComponent,
                        ButtonComponent,
                        TranslateModule,
                        TextComponent,
                        MegaoctetComponent,
                        LinkComponent,
                        LoaderComponent,
                        MatProgressBarModule,
                    ], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <div class=\"upload-container flex-column\" appDnd (fileDropped)=\"this.onFileDropped($event)\">\n    <div class=\"flex-responsive-ctr g-space-md\">\n      @if (this.inProgressFiles.length > 0) {\n        <div class=\"files-list flex-column g-space-sm\">\n          @for (item of this.inProgressFiles; track item) {\n            <div class=\"flex-column\">\n              <div class=\"flex-row align-center\">\n                <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n                @if (item.progress < 100) {\n                  <ta-text class=\"name\" size=\"sm\">\n                    {{ item.name }}\n                  </ta-text>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-link class=\"name\" (action)=\"this.openDocument(item.completed)\" size=\"sm\">{{ item.name }}</ta-link>\n                }\n              </div>\n              <div class=\"extra flex-row g-space-md\">\n                @if (item.progress < 100) {\n                  <mat-progress-bar mode=\"determinate\" [value]=\"item.progress\"></mat-progress-bar>\n                  <ta-link (action)=\"this.deleteInProgressFile(item.name)\" [underline]=\"false\">\n                    <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                  </ta-link>\n                } @else if (item.progress === 100 && item.completed) {\n                  <ta-text size=\"sm\" class=\"justify-end\">\n                    <ta-megaoctet [octet]=\"item.completed.size\"></ta-megaoctet>\n                  </ta-text>\n                  @if (item.completed.id) {\n                    <ta-link (action)=\"this.deleteFile(item.completed.id)\" [underline]=\"false\">\n                      <ta-font-icon name=\"close\" type=\"sm\"></ta-font-icon>\n                    </ta-link>\n                  }\n                }\n              </div>\n            </div>\n          }\n        </div>\n      }\n      <div class=\"content ta-c\">\n        <input type=\"file\" multiple (change)=\"this.fileBrowseHandler($event.target)\" />\n        <h3>\n          {{ 'input.upload.dragndrop' | translate }}\n        </h3>\n        <div class=\"d-flex\">\n          <ta-button type=\"secondary\" icon=\"add\" class=\"m-a\" (action)=\"this.uploadFile()\">\n            {{ 'input.upload.add' | translate }}\n          </ta-button>\n        </div>\n      </div>\n    </div>\n    @if (this.input.confirmButton) {\n      <div class=\"d-flex\">\n        <ta-button\n          icon=\"check-line\"\n          class=\"justify-end align-center\"\n          (action)=\"this.validation()\"\n          size=\"small\"\n          [state]=\"this.isValidDocumentList() ? 'classic' : 'disabled'\"\n        >\n          {{ 'input.upload.confirm' | translate }}\n        </ta-button>\n      </div>\n    }\n  </div>\n</ta-loader>\n", styles: [".upload-container{display:flex;border:1px dotted var(--ta-border-primary);padding:var(--ta-space-md);gap:var(--ta-space-md)}.upload-container .files-list{width:50%;max-height:500px}.upload-container .files-list ta-font-icon{color:var(--ta-surface-brand-secondary)}.upload-container .files-list .name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.upload-container .content{position:relative;background-color:var(--ta-surface-default);padding:var(--ta-space-xl);flex:1}.upload-container .content input{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;cursor:pointer}\n"] }]
        }], ctorParameters: () => [], propDecorators: { uploadStatusChanged: [{
                type: Output
            }], fileDropEl: [{
                type: ViewChild,
                args: ['fileDropRef', { static: false }]
            }] } });

class CultureComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CultureComponent, isStandalone: true, selector: "ta-input-culture", usesInheritance: true, ngImport: i0, template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n", styles: [""], dependencies: [{ kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-culture', standalone: true, imports: [DropdownComponent], template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n" }]
        }], ctorParameters: () => [] });

class ComponentInputComponent extends TaAbstractInputComponent {
    constructor() {
        super(...arguments);
        this.dialog = inject(MatDialog);
    }
    open() {
        this.dialog.open(TemplateModal, {
            data: {
                input: this.input,
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ComponentInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ComponentInputComponent, isStandalone: true, selector: "ta-input-component", usesInheritance: true, ngImport: i0, template: "<ta-input-layout [input]=\"this.input\">\r\n  <div class=\"component-container\">\r\n    <input\r\n      #box\r\n      #focusedElement\r\n      class=\"form-control\"\r\n      [value]=\"this.input.value\"\r\n      [formControl]=\"$any(this.input.formControl)\"\r\n      [readonly]=\"this.input.disabled\"\r\n      type=\"text\"\r\n    />\r\n    <div class=\"cta\" (click)=\"this.open()\">\r\n      <ta-font-icon name=\"ressources\"></ta-font-icon>\r\n    </div>\r\n  </div>\r\n</ta-input-layout>\r\n", styles: [".component-container{position:relative}.cta{position:absolute;top:0;right:0;padding:var(--ta-space-sm)}\n"], dependencies: [{ kind: "component", type: InputLayoutComponent, selector: "ta-input-layout", inputs: ["input", "width", "height"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: TaIconsModule }, { kind: "component", type: i2$3.FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ComponentInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-component', standalone: true, imports: [InputLayoutComponent, ReactiveFormsModule, TaIconsModule], template: "<ta-input-layout [input]=\"this.input\">\r\n  <div class=\"component-container\">\r\n    <input\r\n      #box\r\n      #focusedElement\r\n      class=\"form-control\"\r\n      [value]=\"this.input.value\"\r\n      [formControl]=\"$any(this.input.formControl)\"\r\n      [readonly]=\"this.input.disabled\"\r\n      type=\"text\"\r\n    />\r\n    <div class=\"cta\" (click)=\"this.open()\">\r\n      <ta-font-icon name=\"ressources\"></ta-font-icon>\r\n    </div>\r\n  </div>\r\n</ta-input-layout>\r\n", styles: [".component-container{position:relative}.cta{position:absolute;top:0;right:0;padding:var(--ta-space-sm)}\n"] }]
        }] });
class TemplateModal extends TaBaseModal {
    constructor() {
        super();
        this.dialogRef = inject((MatDialogRef));
        this.data = inject(MAT_DIALOG_DATA);
        this.selectedValue$ = new Subject();
        this.dialogRef.addPanelClass('classic-modal');
        this._registerSubscription(this.selectedValue$.subscribe({
            next: value => this.select(value),
        }));
    }
    select(value) {
        this.data.input.selectedValue$.next(value);
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModal, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TemplateModal, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "<ta-layout-modal style=\"classic\" title=\"input.component.modal.title\">\r\n  @if(this.data.input.template) {\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"this.data.input.template\"\r\n    [ngTemplateOutletContext]=\"{ selectedValue$: this.selectedValue$ }\"\r\n  ></ng-template>\r\n  }\r\n</ta-layout-modal>\r\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: TaLayoutModule }, { kind: "component", type: i3$2.LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "ngmodule", type: TaUiModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModal, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [NgTemplateOutlet, TaLayoutModule, TaUiModule], template: "<ta-layout-modal style=\"classic\" title=\"input.component.modal.title\">\r\n  @if(this.data.input.template) {\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"this.data.input.template\"\r\n    [ngTemplateOutletContext]=\"{ selectedValue$: this.selectedValue$ }\"\r\n  ></ng-template>\r\n  }\r\n</ta-layout-modal>\r\n" }]
        }], ctorParameters: () => [] });

class InputContainerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: InputContainerComponent, isStandalone: true, selector: "ta-input-container", inputs: { input: "input" }, ngImport: i0, template: "<div class=\"input-container\">\n  <ng-content></ng-content>\n</div>\n", styles: [".input-container{border:1px solid var(--ta-neutral-300);border-radius:10px;padding:15px}.input-container:hover:not(:disabled){border-color:var(--ta-neutral-500)}.input-container:focus:not(:disabled){border-color:var(--ta-border-brand)}.input-container:required:not(:disabled){border-color:var(--ta-semantic-red-dark)}.input-container:disabled{border-color:var(--ta-neutral-300)}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InputContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-container', standalone: true, template: "<div class=\"input-container\">\n  <ng-content></ng-content>\n</div>\n", styles: [".input-container{border:1px solid var(--ta-neutral-300);border-radius:10px;padding:15px}.input-container:hover:not(:disabled){border-color:var(--ta-neutral-500)}.input-container:focus:not(:disabled){border-color:var(--ta-border-brand)}.input-container:required:not(:disabled){border-color:var(--ta-semantic-red-dark)}.input-container:disabled{border-color:var(--ta-neutral-300)}\n"] }]
        }], propDecorators: { input: [{
                type: Input
            }] } });

class TaTranslationInput extends TaLazyTranslationService {
    constructor() {
        super('input');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationInput, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationInput, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationInput, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFormInputsModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CheckboxComponent, ColorPickerComponent, DatePickerComponent } from '@ta/library-name';
 */
class TaFormInputsModule {
    constructor() {
        TaTranslationInput.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, imports: [FormLabelComponent,
            InputLayoutComponent,
            InputErrorComponent,
            TaDirectivePipeModule,
            TaUiModule,
            TaLayoutModule,
            CommonModule,
            FormsModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatNativeDateModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
            NgxMaterialTimepickerModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaListModule,
            TaContainerModule,
            TaMenuModule,
            MatMenuModule,
            TaWysiswygModule,
            TaCardModule,
            MatProgressBarModule, i2$1.MatGoogleMapsAutocompleteModule, CdkMenuModule,
            TranslatePipe,
            ComponentInputComponent,
            TaOverlayPanelComponent,
            CheckboxComponent,
            ColorPickerComponent,
            DatePickerComponent,
            DropdownComponent,
            LabelComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputImageModal,
            InputSchemaComponent,
            InputSchemaModal,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            InputPhoneComponent,
            InputAddressComponent,
            CultureComponent,
            InputContainerComponent], exports: [CheckboxComponent,
            ColorPickerComponent,
            DatePickerComponent,
            DropdownComponent,
            LabelComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputSchemaComponent,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            CultureComponent,
            InputPhoneComponent,
            InputAddressComponent,
            ComponentInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, providers: [
            { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
            PARENT_OR_NEW_MENU_STACK_PROVIDER,
        ], imports: [TaDirectivePipeModule,
            TaUiModule,
            TaLayoutModule,
            CommonModule,
            FormsModule,
            MatAutocompleteModule,
            MatCheckboxModule,
            MatDatepickerModule,
            MatFormFieldModule,
            MatInputModule,
            MatNativeDateModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSliderModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
            NgxMaterialTimepickerModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaListModule,
            TaContainerModule,
            TaMenuModule,
            MatMenuModule,
            TaWysiswygModule,
            TaCardModule,
            MatProgressBarModule,
            MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8'),
            CdkMenuModule,
            ComponentInputComponent,
            TaOverlayPanelComponent,
            DatePickerComponent,
            DropdownComponent,
            RadioComponent,
            SearchFieldComponent,
            SliderComponent,
            SwitchComponent,
            TextareaComponent,
            TextBoxComponent,
            TimePickerComponent,
            ToggleComponent,
            InputImagesComponent,
            InputImageModal,
            InputSchemaComponent,
            InputSchemaModal,
            InputImageComponent,
            InputChoicesComponent,
            WysiswygComponent,
            UploadComponent,
            InputPhoneComponent,
            InputAddressComponent,
            CultureComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaFormInputsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        FormLabelComponent,
                        InputLayoutComponent,
                        InputErrorComponent,
                        TaDirectivePipeModule,
                        TaUiModule,
                        TaLayoutModule,
                        CommonModule,
                        FormsModule,
                        MatAutocompleteModule,
                        MatCheckboxModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                        NgxMaterialTimepickerModule,
                        TaFilesBasicModule,
                        TaIconsModule,
                        TaListModule,
                        TaContainerModule,
                        TaMenuModule,
                        MatMenuModule,
                        TaWysiswygModule,
                        TaCardModule,
                        MatProgressBarModule,
                        MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8'),
                        CdkMenuModule,
                        TranslatePipe,
                        ComponentInputComponent,
                        TaOverlayPanelComponent,
                        CheckboxComponent,
                        ColorPickerComponent,
                        DatePickerComponent,
                        DropdownComponent,
                        LabelComponent,
                        RadioComponent,
                        SearchFieldComponent,
                        SliderComponent,
                        SwitchComponent,
                        TextareaComponent,
                        TextBoxComponent,
                        TimePickerComponent,
                        ToggleComponent,
                        InputImagesComponent,
                        InputImageModal,
                        InputSchemaComponent,
                        InputSchemaModal,
                        InputImageComponent,
                        InputChoicesComponent,
                        WysiswygComponent,
                        UploadComponent,
                        InputPhoneComponent,
                        InputAddressComponent,
                        CultureComponent,
                        InputContainerComponent,
                    ],
                    exports: [
                        CheckboxComponent,
                        ColorPickerComponent,
                        DatePickerComponent,
                        DropdownComponent,
                        LabelComponent,
                        RadioComponent,
                        SearchFieldComponent,
                        SliderComponent,
                        SwitchComponent,
                        TextareaComponent,
                        TextBoxComponent,
                        TimePickerComponent,
                        ToggleComponent,
                        InputImagesComponent,
                        InputSchemaComponent,
                        InputImageComponent,
                        InputChoicesComponent,
                        WysiswygComponent,
                        UploadComponent,
                        CultureComponent,
                        InputPhoneComponent,
                        InputAddressComponent,
                        ComponentInputComponent,
                    ],
                    providers: [
                        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
                        PARENT_OR_NEW_MENU_STACK_PROVIDER,
                    ],
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxComponent, ColorPickerComponent, ComponentInputComponent, CultureComponent, DatePickerComponent, DropdownComponent, InputAddressComponent, InputChoicesComponent, InputImageComponent, InputImagesComponent, InputPhoneComponent, InputSchemaComponent, LabelComponent, RadioComponent, SearchFieldComponent, SliderComponent, SwitchComponent, TaFormInputsModule, TemplateModal, TextBoxComponent, TextareaComponent, TimePickerComponent, ToggleComponent, UploadComponent, WysiswygComponent };
//# sourceMappingURL=ta-form-input.mjs.map
