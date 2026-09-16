import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class BulletComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    /**
     * `notif` : pastille de comptage sur la surface de marque.
     * `notif-highlight` : même pastille, dans la couleur secondaire de marque —
     * la seule qui reste visible posée sur un bandeau de marque.
     */
    type: import("@angular/core").InputSignal<ColorType | "notif" | "notif-highlight">;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletComponent, "ta-bullet", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
