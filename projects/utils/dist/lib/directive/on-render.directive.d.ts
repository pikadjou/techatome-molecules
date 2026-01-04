import { EventEmitter, SimpleChanges } from "@angular/core";
import * as i0 from "@angular/core";
export declare class OnRenderDirective {
    onRender: import("@angular/core").InputSignal<boolean>;
    rendered: EventEmitter<any>;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnRenderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OnRenderDirective, "[TaOnRender]", never, { "onRender": { "alias": "onRender"; "required": true; "isSignal": true; }; }, { "rendered": "rendered"; }, never, never, false, never>;
}
