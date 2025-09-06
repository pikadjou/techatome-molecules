import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontIconComponent } from './components/font-icon/font-icon.component';
import { LocalIconComponent } from './components/local-icon/local-icon.component';
import { MaterialIconComponent } from './components/material-icon/material-icon.component';
import { TaIconsService } from './services/icons.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaIconsModule } from '@ta/icons';
 *
 * // Import the standalone components directly:
 * import { FontIconComponent, LocalIconComponent, MaterialIconComponent } from '@ta/icons';
 */
export class TaIconsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaIconsModule, imports: [CommonModule, LocalIconComponent, MaterialIconComponent, FontIconComponent], exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaIconsModule, providers: [TaIconsService], imports: [CommonModule, MaterialIconComponent, FontIconComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, LocalIconComponent, MaterialIconComponent, FontIconComponent],
                    exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
                    providers: [TaIconsService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9pY29ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUUxRDs7Ozs7Ozs7OztHQVVHO0FBT0gsTUFBTSxPQUFPLGFBQWE7K0dBQWIsYUFBYTtnSEFBYixhQUFhLFlBSmQsWUFBWSxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixhQUMxRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUI7Z0hBRzNELGFBQWEsYUFGYixDQUFDLGNBQWMsQ0FBQyxZQUZqQixZQUFZLEVBQXNCLHFCQUFxQixFQUFFLGlCQUFpQjs7NEZBSXpFLGFBQWE7a0JBTnpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDckYsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3ZFLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9udC1pY29uL2ZvbnQtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9jYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvY2FsLWljb24vbG9jYWwtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hdGVyaWFsLWljb24vbWF0ZXJpYWwtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFJY29uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb25zLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCwgTG9jYWxJY29uQ29tcG9uZW50LCBNYXRlcmlhbEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMb2NhbEljb25Db21wb25lbnQsIE1hdGVyaWFsSWNvbkNvbXBvbmVudCwgRm9udEljb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbTG9jYWxJY29uQ29tcG9uZW50LCBNYXRlcmlhbEljb25Db21wb25lbnQsIEZvbnRJY29uQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbVGFJY29uc1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUljb25zTW9kdWxlIHt9XG4iXX0=