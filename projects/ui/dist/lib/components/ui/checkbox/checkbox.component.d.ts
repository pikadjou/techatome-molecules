import * as i0 from "@angular/core";
/** Case à cocher hors formulaire ; dans un formulaire, utiliser `ta-input-checkbox`. */
export declare class CheckboxComponent {
    checked: import("@angular/core").InputSignal<boolean>;
    disabled: import("@angular/core").InputSignal<boolean>;
    checkedChange: import("@angular/core").OutputEmitterRef<boolean>;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "ta-checkbox", never, { "checked": { "alias": "checked"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "checkedChange": "checkedChange"; }, never, ["*"], true, never>;
}
