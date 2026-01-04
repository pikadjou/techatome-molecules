import { TaIconType } from "@ta/icons";
import * as i0 from "@angular/core";
export declare class ContactInformationComponent {
    /**
     * Text to display
     */
    value: import("@angular/core").InputSignal<string | null>;
    /**
     * Material icon to display
     */
    icon: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Local icon to display
     */
    localIcon: import("@angular/core").InputSignal<TaIconType | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactInformationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContactInformationComponent, "ta-contact-information", never, { "value": { "alias": "value"; "required": true; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "localIcon": { "alias": "localIcon"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
