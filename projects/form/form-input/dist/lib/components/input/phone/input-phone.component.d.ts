import { ElementRef } from "@angular/core";
import { InputPhone } from "@ta/form-model";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class InputPhoneComponent extends TaAbstractInputComponent<InputPhone> {
    phoneInput: ElementRef;
    private _renderer;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputPhoneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputPhoneComponent, "ta-input-phone", never, {}, {}, never, never, true, never>;
}
