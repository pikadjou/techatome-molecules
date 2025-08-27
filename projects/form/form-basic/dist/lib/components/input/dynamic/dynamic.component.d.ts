import { TemplateRef } from '@angular/core';
import { InputBase, InputDynamic } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class DynamicComponent extends TaBaseComponent {
    inputsTemplate: TemplateRef<any>;
    input: InputDynamic;
    constructor();
    add: () => void;
    canRemove(index: string): boolean;
    remove: (index: string) => void;
    getKeys(): string[];
    getInputs(key: string): InputBase<any>[];
    trackByFn(_: number, key: string): string;
    trackInputByFn(_: number, input: InputBase<any>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicComponent, "ta-input-dynamic", never, { "inputsTemplate": { "alias": "inputsTemplate"; "required": false; }; "input": { "alias": "input"; "required": false; }; }, {}, never, never, true, never>;
}
