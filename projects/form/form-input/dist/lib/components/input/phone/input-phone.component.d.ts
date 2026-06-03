import { ElementRef } from '@angular/core';
import { InputPhone } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputPhoneComponent extends TaAbstractInputComponent<InputPhone> {
    phoneInput: ElementRef;
    readonly isReady: import("@angular/core").WritableSignal<boolean>;
    private _iti?;
    private _stylesheetReady$?;
    private _syncingFromControl;
    private _validator?;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _initPhoneInput;
    ngOnDestroy(): void;
    onBlur(): void;
    onCountryChange(): void;
    private _dispatch;
    private _writeFromControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPhoneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputPhoneComponent, "ta-input-phone", never, {}, {}, never, never, true, never>;
}
