import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { InputDatePicker } from '@ta/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class DatePickerComponent extends CamAbstractInputComponent<InputDatePicker> {
    picker: MatDatepicker<any>;
    readonly range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    constructor();
    onDateSelect(event: MatDatepickerInputEvent<Date>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatePickerComponent, "ta-input-date-picker", never, {}, {}, never, never, true, never>;
}
