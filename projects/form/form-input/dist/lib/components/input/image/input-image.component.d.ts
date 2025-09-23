import { InputImages } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputImageComponent extends TaAbstractInputComponent<InputImages> {
    get selection(): string[] | undefined;
    get userInfo(): {
        picture: string;
        firstname: string;
        lastname: string;
    } | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputImageComponent, "ta-input-image", never, {}, {}, never, never, true, never>;
}
