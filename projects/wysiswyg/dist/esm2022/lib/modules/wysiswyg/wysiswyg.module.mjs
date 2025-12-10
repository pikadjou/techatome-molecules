import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaNotificationModule } from "@ta/notification";
import { TaUiModule } from "@ta/ui";
import { SafePipe } from "@ta/utils";
import { BlockTextComponent } from "./components/block-text/block-text.component";
import { EditorInputComponent } from "./components/input/input.component";
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
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule,
            TaUiModule,
            TaNotificationModule,
            SafePipe,
            BlockTextComponent,
            EditorInputComponent], exports: [BlockTextComponent, EditorInputComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, imports: [CommonModule,
            TaUiModule,
            TaNotificationModule,
            BlockTextComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWysiswygModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaUiModule,
                        TaNotificationModule,
                        SafePipe,
                        BlockTextComponent,
                        EditorInputComponent,
                    ],
                    exports: [BlockTextComponent, EditorInputComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXN3eWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL3d5c2lzd3lnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRTFFOzs7Ozs7Ozs7O0dBVUc7QUFhSCxNQUFNLE9BQU8sZ0JBQWdCOytHQUFoQixnQkFBZ0I7Z0hBQWhCLGdCQUFnQixZQVR6QixZQUFZO1lBQ1osVUFBVTtZQUNWLG9CQUFvQjtZQUNwQixRQUFRO1lBQ1Isa0JBQWtCO1lBQ2xCLG9CQUFvQixhQUVaLGtCQUFrQixFQUFFLG9CQUFvQjtnSEFFdkMsZ0JBQWdCLFlBVHpCLFlBQVk7WUFDWixVQUFVO1lBQ1Ysb0JBQW9CO1lBRXBCLGtCQUFrQjs7NEZBS1QsZ0JBQWdCO2tCQVo1QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLG9CQUFvQjt3QkFDcEIsUUFBUTt3QkFDUixrQkFBa0I7d0JBQ2xCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7aUJBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gXCJAdGEvbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBUYVVpTW9kdWxlIH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgU2FmZVBpcGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IEJsb2NrVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYmxvY2stdGV4dC9ibG9jay10ZXh0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRWRpdG9ySW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFXeXNpc3d5Z01vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQmxvY2tUZXh0Q29tcG9uZW50LCBFZGl0b3JJbnB1dENvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFOb3RpZmljYXRpb25Nb2R1bGUsXG4gICAgU2FmZVBpcGUsXG4gICAgQmxvY2tUZXh0Q29tcG9uZW50LFxuICAgIEVkaXRvcklucHV0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQmxvY2tUZXh0Q29tcG9uZW50LCBFZGl0b3JJbnB1dENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhV3lzaXN3eWdNb2R1bGUge31cbiJdfQ==