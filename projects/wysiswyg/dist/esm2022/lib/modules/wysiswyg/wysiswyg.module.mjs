import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamNotificationModule } from '@ta/notification';
import { CamUiModule } from '@ta/ui';
import { SafePipe } from '@ta/utils';
import { BlockTextComponent } from './components/block-text/block-text.component';
import { EditorInputComponent } from './components/input/input.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamWysiswygModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { BlockTextComponent, EditorInputComponent } from '@ta/library-name';
 */
export class CamWysiswygModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamWysiswygModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamWysiswygModule, imports: [CommonModule, CamUiModule, CamNotificationModule, SafePipe, BlockTextComponent, EditorInputComponent], exports: [BlockTextComponent, EditorInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamWysiswygModule, imports: [CommonModule, CamUiModule, CamNotificationModule, BlockTextComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamWysiswygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, CamUiModule, CamNotificationModule, SafePipe, BlockTextComponent, EditorInputComponent],
                    exports: [BlockTextComponent, EditorInputComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXN3eWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL3d5c2lzd3lnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRTFFOzs7Ozs7Ozs7O0dBVUc7QUFRSCxNQUFNLE9BQU8saUJBQWlCOytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixZQUpsQixZQUFZLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsYUFDcEcsa0JBQWtCLEVBQUUsb0JBQW9CO2dIQUd2QyxpQkFBaUIsWUFKbEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBWSxrQkFBa0I7OzRGQUk3RSxpQkFBaUI7a0JBUDdCLFFBQVE7bUJBQUM7b0JBRVIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO29CQUMvRyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztpQkFFcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FtTm90aWZpY2F0aW9uTW9kdWxlIH0gZnJvbSAnQHRhL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBDYW1VaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBTYWZlUGlwZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEJsb2NrVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ibG9jay10ZXh0L2Jsb2NrLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRvcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtV3lzaXN3eWdNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBCbG9ja1RleHRDb21wb25lbnQsIEVkaXRvcklucHV0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FtVWlNb2R1bGUsIENhbU5vdGlmaWNhdGlvbk1vZHVsZSwgU2FmZVBpcGUsIEJsb2NrVGV4dENvbXBvbmVudCwgRWRpdG9ySW5wdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmxvY2tUZXh0Q29tcG9uZW50LCBFZGl0b3JJbnB1dENvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FtV3lzaXN3eWdNb2R1bGUge31cbiJdfQ==