import { Subject } from 'rxjs';
import { InputComponent } from '@ta/form-model';
import { TaBaseModal } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class ComponentInputComponent extends TaAbstractInputComponent<InputComponent> {
    private _dialog;
    open(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentInputComponent, "ta-input-component", never, {}, {}, never, never, true, never>;
}
type TemplateModalData = {
    input: InputComponent;
};
export declare class TemplateModal extends TaBaseModal {
    private _dialogRef;
    readonly data: TemplateModalData;
    readonly selectedValue$: Subject<string>;
    constructor();
    select(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateModal, "ng-component", never, {}, {}, never, never, true, never>;
}
export {};
