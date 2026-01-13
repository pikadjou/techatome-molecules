import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaUiModule } from '@ta/ui';
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
 * // import { TaWysiswygModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { BlockTextComponent, EditorInputComponent } from '@ta/library-name';
 */
export class TaWysiswygModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule, TaUiModule, SafePipe, BlockTextComponent, EditorInputComponent], exports: [BlockTextComponent, EditorInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule, TaUiModule, BlockTextComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, TaUiModule, SafePipe, BlockTextComponent, EditorInputComponent],
                    exports: [BlockTextComponent, EditorInputComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXN3eWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL3d5c2lzd3lnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRTFFOzs7Ozs7Ozs7O0dBVUc7QUFNSCxNQUFNLE9BQU8sZ0JBQWdCOytHQUFoQixnQkFBZ0I7Z0hBQWhCLGdCQUFnQixZQUhqQixZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsYUFDNUUsa0JBQWtCLEVBQUUsb0JBQW9CO2dIQUV2QyxnQkFBZ0IsWUFIakIsWUFBWSxFQUFFLFVBQVUsRUFBWSxrQkFBa0I7OzRGQUdyRCxnQkFBZ0I7a0JBTDVCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDO29CQUN2RixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztpQkFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBTYWZlUGlwZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEJsb2NrVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ibG9jay10ZXh0L2Jsb2NrLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRvcklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYVd5c2lzd3lnTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBCbG9ja1RleHRDb21wb25lbnQsIEVkaXRvcklucHV0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRhVWlNb2R1bGUsIFNhZmVQaXBlLCBCbG9ja1RleHRDb21wb25lbnQsIEVkaXRvcklucHV0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Jsb2NrVGV4dENvbXBvbmVudCwgRWRpdG9ySW5wdXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYVd5c2lzd3lnTW9kdWxlIHt9XG4iXX0=