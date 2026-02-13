import { OnInit, TemplateRef } from '@angular/core';
import { InputBase, InputTranslation } from '@ta/form-model';
import { Menu } from '@ta/menu';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class InputTranslationComponent extends TaBaseComponent implements OnInit {
    inputModel: import("@angular/core").InputSignal<InputTranslation>;
    inputsTemplate: import("@angular/core").InputSignal<TemplateRef<any>>;
    get input(): InputTranslation;
    cultureList: {
        value: number;
        name: string;
    }[];
    cultureMenu: Menu | null;
    currentCulture: string;
    constructor();
    ngOnInit(): void;
    changeSelection(culture: string): void;
    add(culture: string): void;
    remove(culture: string): void;
    hasKey(culture: string): boolean;
    getKeys(): string[];
    getInputs(culture: string): InputBase<any>[];
    trackByFn(_: number, key: string): string;
    trackInputByFn(_: number, input: InputBase<any>): string;
    private _renderMenu;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTranslationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTranslationComponent, "ta-input-translation", never, { "inputModel": { "alias": "input"; "required": true; "isSignal": true; }; "inputsTemplate": { "alias": "inputsTemplate"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
