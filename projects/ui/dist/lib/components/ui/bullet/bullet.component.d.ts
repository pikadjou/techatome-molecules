import { ColorType, TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class BulletComponent {
    size: TaSizes;
    type: ColorType | "notif";
    getClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletComponent, "ta-bullet", never, { "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
