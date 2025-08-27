import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LetDirective } from './directive/let.directive';
import { OnRenderDirective } from './directive/on-render.directive';
import { StopPropagationDirective } from './directive/stop-propagation.directive';
import { TypedTemplateDirective } from './directive/type-template-directive';
import { FileSizePipe } from './pipe/file-size.pipe';
import { JoinPipe } from './pipe/join.pipe';
import { PluralTranslatePipe } from './pipe/plural.pipe';
import { SafePipe } from './pipe/safe.pipe';
import * as i0 from "@angular/core";
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
export class CamDirectivePipeModule {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDirectivePipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamDirectivePipeModule, declarations: [FileSizePipe, LetDirective, TypedTemplateDirective, OnRenderDirective], imports: [CommonModule, SafePipe, PluralTranslatePipe, StopPropagationDirective, JoinPipe], exports: [FileSizePipe,
            LetDirective,
            PluralTranslatePipe,
            StopPropagationDirective,
            TypedTemplateDirective,
            OnRenderDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDirectivePipeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDirectivePipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FileSizePipe, LetDirective, TypedTemplateDirective, OnRenderDirective],
                    imports: [CommonModule, SafePipe, PluralTranslatePipe, StopPropagationDirective, JoinPipe],
                    exports: [
                        FileSizePipe,
                        LetDirective,
                        PluralTranslatePipe,
                        StopPropagationDirective,
                        TypedTemplateDirective,
                        OnRenderDirective,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLXBpcGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmUtcGlwZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUU1Qzs7Ozs7Ozs7OztHQVVHO0FBYUgsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxnQkFBZSxDQUFDOytHQURMLHNCQUFzQjtnSEFBdEIsc0JBQXNCLGlCQVhsQixZQUFZLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixhQUMxRSxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLFFBQVEsYUFFdkYsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixpQkFBaUI7Z0hBR1Isc0JBQXNCLFlBVnZCLFlBQVk7OzRGQVVYLHNCQUFzQjtrQkFabEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO29CQUNyRixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLHdCQUF3QixFQUFFLFFBQVEsQ0FBQztvQkFDMUYsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixpQkFBaUI7cUJBQ2xCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExldERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL2xldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT25SZW5kZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9vbi1yZW5kZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3N0b3AtcHJvcGFnYXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFR5cGVkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS90eXBlLXRlbXBsYXRlLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWxlU2l6ZVBpcGUgfSBmcm9tICcuL3BpcGUvZmlsZS1zaXplLnBpcGUnO1xuaW1wb3J0IHsgSm9pblBpcGUgfSBmcm9tICcuL3BpcGUvam9pbi5waXBlJztcbmltcG9ydCB7IFBsdXJhbFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3BpcGUvcGx1cmFsLnBpcGUnO1xuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tICcuL3BpcGUvc2FmZS5waXBlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbGVTaXplUGlwZSwgSm9pblBpcGUsIExldERpcmVjdGl2ZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGaWxlU2l6ZVBpcGUsIExldERpcmVjdGl2ZSwgVHlwZWRUZW1wbGF0ZURpcmVjdGl2ZSwgT25SZW5kZXJEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTYWZlUGlwZSwgUGx1cmFsVHJhbnNsYXRlUGlwZSwgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLCBKb2luUGlwZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWxlU2l6ZVBpcGUsXG4gICAgTGV0RGlyZWN0aXZlLFxuICAgIFBsdXJhbFRyYW5zbGF0ZVBpcGUsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIFR5cGVkVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgT25SZW5kZXJEaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iXX0=