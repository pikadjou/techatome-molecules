import * as i0 from "@angular/core";
import * as i1 from "./pipe/file-size.pipe";
import * as i2 from "./directive/let.directive";
import * as i3 from "./directive/on-render.directive";
import * as i4 from "@angular/common";
import * as i5 from "./pipe/safe.pipe";
import * as i6 from "./pipe/plural.pipe";
import * as i7 from "./directive/stop-propagation.directive";
import * as i8 from "./pipe/join.pipe";
import * as i9 from "./directive/type-template-directive";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamDirectivePipeModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileSizePipe, JoinPipe, LetDirective } from '@ta/library-name';
 */
export declare class CamDirectivePipeModule {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CamDirectivePipeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamDirectivePipeModule, [typeof i1.FileSizePipe, typeof i2.LetDirective, typeof i3.OnRenderDirective], [typeof i4.CommonModule, typeof i5.SafePipe, typeof i6.PluralTranslatePipe, typeof i7.StopPropagationDirective, typeof i8.JoinPipe, typeof i9.TypedTemplateDirective], [typeof i1.FileSizePipe, typeof i2.LetDirective, typeof i6.PluralTranslatePipe, typeof i7.StopPropagationDirective, typeof i3.OnRenderDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamDirectivePipeModule>;
}
