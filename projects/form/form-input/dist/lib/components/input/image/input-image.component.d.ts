import { InputImages } from '@ta/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputImageComponent extends CamAbstractInputComponent<InputImages> {
    get selection(): string[];
    get userInfo(): {
        profilePictureUrl: string;
        naming: null;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputImageComponent, "ta-input-image", never, {}, {}, never, never, true, never>;
}
