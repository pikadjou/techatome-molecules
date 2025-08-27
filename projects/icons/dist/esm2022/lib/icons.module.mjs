import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontIconComponent } from './components/font-icon/font-icon.component';
import { LocalIconComponent } from './components/local-icon/local-icon.component';
import { MaterialIconComponent } from './components/material-icon/material-icon.component';
import { CamIconsService } from './services/icons.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamIconsModule } from '@ta/icons';
 *
 * // Import the standalone components directly:
 * import { FontIconComponent, LocalIconComponent, MaterialIconComponent } from '@ta/icons';
 */
export class CamIconsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamIconsModule, imports: [CommonModule, LocalIconComponent, MaterialIconComponent, FontIconComponent], exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamIconsModule, providers: [CamIconsService], imports: [CommonModule, MaterialIconComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, LocalIconComponent, MaterialIconComponent, FontIconComponent],
                    exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
                    providers: [CamIconsService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9pY29ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUUzRDs7Ozs7Ozs7OztHQVVHO0FBT0gsTUFBTSxPQUFPLGNBQWM7K0dBQWQsY0FBYztnSEFBZCxjQUFjLFlBSmYsWUFBWSxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixhQUMxRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUI7Z0hBRzNELGNBQWMsYUFGZCxDQUFDLGVBQWUsQ0FBQyxZQUZsQixZQUFZLEVBQXNCLHFCQUFxQjs7NEZBSXRELGNBQWM7a0JBTjFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDckYsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9udC1pY29uL2ZvbnQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvY2FsLWljb24vbG9jYWwtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hdGVyaWFsLWljb24vbWF0ZXJpYWwtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FtSWNvbnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pY29ucy5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBDYW1JY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQsIExvY2FsSWNvbkNvbXBvbmVudCwgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTG9jYWxJY29uQ29tcG9uZW50LCBNYXRlcmlhbEljb25Db21wb25lbnQsIEZvbnRJY29uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvY2FsSWNvbkNvbXBvbmVudCwgTWF0ZXJpYWxJY29uQ29tcG9uZW50LCBGb250SWNvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0NhbUljb25zU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhbUljb25zTW9kdWxlIHt9XG4iXX0=