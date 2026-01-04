import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class BulletComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<ColorType | "notif">;
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletComponent, "ta-bullet", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
