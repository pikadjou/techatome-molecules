import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { InputComponent } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class ComponentSelectorModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    inputData: import("@angular/core").InputSignal<InputComponent>;
    closeEvent: EventEmitter<void>;
    readonly selectedValue$: Subject<string>;
    constructor();
    select(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentSelectorModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentSelectorModal, "ta-component-selector-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "inputData": { "alias": "inputData"; "required": true; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
export declare class ComponentInputComponent extends TaAbstractInputComponent<InputComponent> {
    isModalOpen: import("@angular/core").WritableSignal<boolean>;
    open(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentInputComponent, "ta-input-component", never, {}, {}, never, never, true, never>;
}
