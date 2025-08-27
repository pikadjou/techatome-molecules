import * as i0 from "@angular/core";
import * as i1 from "./pipe/file-size.pipe";
import * as i2 from "./directive/let.directive";
import * as i3 from "./directive/type-template-directive";
import * as i4 from "./directive/on-render.directive";
import * as i5 from "@angular/common";
import * as i6 from "./pipe/safe.pipe";
import * as i7 from "./pipe/plural.pipe";
import * as i8 from "./directive/stop-propagation.directive";
import * as i9 from "./pipe/join.pipe";
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
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamDirectivePipeModule, [typeof i1.FileSizePipe, typeof i2.LetDirective, typeof i3.TypedTemplateDirective, typeof i4.OnRenderDirective], [typeof i5.CommonModule, typeof i6.SafePipe, typeof i7.PluralTranslatePipe, typeof i8.StopPropagationDirective, typeof i9.JoinPipe], [typeof i1.FileSizePipe, typeof i2.LetDirective, typeof i7.PluralTranslatePipe, typeof i8.StopPropagationDirective, typeof i3.TypedTemplateDirective, typeof i4.OnRenderDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamDirectivePipeModule>;
}
