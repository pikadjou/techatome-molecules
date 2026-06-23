import { OnInit } from '@angular/core';
import { InputLogo } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputLogoComponent extends TaAbstractInputComponent<InputLogo> implements OnInit {
    private _documentsService;
    constructor();
    openCamera(): Promise<void>;
    openGallery(): Promise<void>;
    removeLogo(): void;
    private _uploadLogo;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLogoComponent, "ta-input-logo", never, {}, {}, never, never, true, never>;
}
