import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontIconComponent } from "./components/font-icon/font-icon.component";
import { LocalIconComponent } from "./components/local-icon/local-icon.component";
import { MaterialIconComponent } from "./components/material-icon/material-icon.component";
import { TaIconsService } from "./services/icons.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaIconsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaIconsModule, imports: [CommonModule,
            LocalIconComponent,
            MaterialIconComponent,
            FontIconComponent], exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaIconsModule, providers: [TaIconsService], imports: [CommonModule,
            MaterialIconComponent,
            FontIconComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaIconsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        LocalIconComponent,
                        MaterialIconComponent,
                        FontIconComponent,
                    ],
                    exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
                    providers: [TaIconsService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9pY29ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUUxRDs7Ozs7Ozs7OztHQVVHO0FBWUgsTUFBTSxPQUFPLGFBQWE7K0dBQWIsYUFBYTtnSEFBYixhQUFhLFlBUnRCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIscUJBQXFCO1lBQ3JCLGlCQUFpQixhQUVULGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQjtnSEFHM0QsYUFBYSxhQUZiLENBQUMsY0FBYyxDQUFDLFlBTnpCLFlBQVk7WUFFWixxQkFBcUI7WUFDckIsaUJBQWlCOzs0RkFLUixhQUFhO2tCQVh6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLHFCQUFxQjt3QkFDckIsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDdkUsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZvbnQtaWNvbi9mb250LWljb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2NhbEljb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvY2FsLWljb24vbG9jYWwtaWNvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1hdGVyaWFsSWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWF0ZXJpYWwtaWNvbi9tYXRlcmlhbC1pY29uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFJY29uc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9pY29ucy5zZXJ2aWNlXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50LCBMb2NhbEljb25Db21wb25lbnQsIE1hdGVyaWFsSWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTG9jYWxJY29uQ29tcG9uZW50LFxuICAgIE1hdGVyaWFsSWNvbkNvbXBvbmVudCxcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0xvY2FsSWNvbkNvbXBvbmVudCwgTWF0ZXJpYWxJY29uQ29tcG9uZW50LCBGb250SWNvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1RhSWNvbnNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFJY29uc01vZHVsZSB7fVxuIl19