import { OnInit, TemplateRef } from '@angular/core';
import { InputBase, InputTranslation } from '@ta/form-model';
import { Menu } from '@ta/menu';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class InputTranslationComponent extends TaBaseComponent implements OnInit {
    input: InputTranslation;
    inputsTemplate: TemplateRef<any>;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTranslationComponent, "ta-input-translation", never, { "input": { "alias": "input"; "required": false; }; "inputsTemplate": { "alias": "inputsTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
