import { OutputBlockData } from '@editorjs/editorjs';
import { ENotificationCode } from '@ta/notification';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class BlockTextComponent extends TaBaseComponent {
    blocks: OutputBlockData[];
    readonly ENotificationCode: typeof ENotificationCode;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlockTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BlockTextComponent, "ta-cms-editor-blocks", never, { "blocks": { "alias": "blocks"; "required": false; }; }, {}, never, never, true, never>;
}
