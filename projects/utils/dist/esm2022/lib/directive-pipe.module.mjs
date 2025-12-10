import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LetDirective } from "./directive/let.directive";
import { OnRenderDirective } from "./directive/on-render.directive";
import { StopPropagationDirective } from "./directive/stop-propagation.directive";
import { TypedTemplateDirective } from "./directive/type-template-directive";
import { FileSizePipe } from "./pipe/file-size.pipe";
import { JoinPipe } from "./pipe/join.pipe";
import { PluralTranslatePipe } from "./pipe/plural.pipe";
import { SafePipe } from "./pipe/safe.pipe";
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaDirectivePipeModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileSizePipe, JoinPipe, LetDirective } from '@ta/library-name';
 */
export class TaDirectivePipeModule {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, declarations: [FileSizePipe, LetDirective, OnRenderDirective], imports: [CommonModule,
            SafePipe,
            PluralTranslatePipe,
            StopPropagationDirective,
            JoinPipe,
            TypedTemplateDirective], exports: [FileSizePipe,
            LetDirective,
            PluralTranslatePipe,
            StopPropagationDirective,
            OnRenderDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FileSizePipe, LetDirective, OnRenderDirective],
                    imports: [
                        CommonModule,
                        SafePipe,
                        PluralTranslatePipe,
                        StopPropagationDirective,
                        JoinPipe,
                        TypedTemplateDirective,
                    ],
                    exports: [
                        FileSizePipe,
                        LetDirective,
                        PluralTranslatePipe,
                        StopPropagationDirective,
                        OnRenderDirective,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmUtcGlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUU1Qzs7Ozs7Ozs7OztHQVVHO0FBbUJILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsZ0JBQWUsQ0FBQzsrR0FETCxxQkFBcUI7Z0hBQXJCLHFCQUFxQixpQkFqQmpCLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLGFBRTFELFlBQVk7WUFDWixRQUFRO1lBQ1IsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixRQUFRO1lBQ1Isc0JBQXNCLGFBR3RCLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixpQkFBaUI7Z0hBR1IscUJBQXFCLFlBZjlCLFlBQVk7OzRGQWVILHFCQUFxQjtrQkFsQmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztvQkFDN0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osUUFBUTt3QkFDUixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsUUFBUTt3QkFDUixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLGlCQUFpQjtxQkFDbEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExldERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9sZXQuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBPblJlbmRlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZS9vbi1yZW5kZXIuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFR5cGVkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmUvdHlwZS10ZW1wbGF0ZS1kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEZpbGVTaXplUGlwZSB9IGZyb20gXCIuL3BpcGUvZmlsZS1zaXplLnBpcGVcIjtcbmltcG9ydCB7IEpvaW5QaXBlIH0gZnJvbSBcIi4vcGlwZS9qb2luLnBpcGVcIjtcbmltcG9ydCB7IFBsdXJhbFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiLi9waXBlL3BsdXJhbC5waXBlXCI7XG5pbXBvcnQgeyBTYWZlUGlwZSB9IGZyb20gXCIuL3BpcGUvc2FmZS5waXBlXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbGVTaXplUGlwZSwgSm9pblBpcGUsIExldERpcmVjdGl2ZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGaWxlU2l6ZVBpcGUsIExldERpcmVjdGl2ZSwgT25SZW5kZXJEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNhZmVQaXBlLFxuICAgIFBsdXJhbFRyYW5zbGF0ZVBpcGUsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIEpvaW5QaXBlLFxuICAgIFR5cGVkVGVtcGxhdGVEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWxlU2l6ZVBpcGUsXG4gICAgTGV0RGlyZWN0aXZlLFxuICAgIFBsdXJhbFRyYW5zbGF0ZVBpcGUsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIE9uUmVuZGVyRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=