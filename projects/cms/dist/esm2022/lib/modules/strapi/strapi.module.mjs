import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaFormInputsModule } from "@ta/form-input";
import { TaContainerModule, TaUiModule } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { CmsComponent } from "./components/cms/cms.component";
import { SaleComponent } from "./components/sale/sale.component";
import { LinkComponent } from "./components/types/link/link.component";
import { RichTextComponent } from "./components/types/rich-text/rich-text.component";
import { TextComponent } from "./components/types/text/text.component";
import { TaTranslationStrapi } from "./translation.service";
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaStrapiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
export class TaStrapiModule {
    constructor() {
        TaTranslationStrapi.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            TextComponent,
            SaleComponent], exports: [CmsComponent, SaleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            SaleComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaUiModule,
                        TaDirectivePipeModule,
                        TaContainerModule,
                        TaFormInputsModule,
                        CmsComponent,
                        RichTextComponent,
                        LinkComponent,
                        TextComponent,
                        SaleComponent,
                    ],
                    exports: [CmsComponent, SaleComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvc3RyYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVEOzs7Ozs7Ozs7O0dBVUc7QUFpQkgsTUFBTSxPQUFPLGNBQWM7SUFDekI7UUFDRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDOytHQUhVLGNBQWM7Z0hBQWQsY0FBYyxZQWJ2QixZQUFZO1lBQ1osVUFBVTtZQUNWLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhLGFBRUwsWUFBWSxFQUFFLGFBQWE7Z0hBRTFCLGNBQWMsWUFidkIsWUFBWTtZQUNaLFVBQVU7WUFDVixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFFYixhQUFhOzs0RkFJSixjQUFjO2tCQWhCMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztpQkFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhRm9ybUlucHV0c01vZHVsZSB9IGZyb20gXCJAdGEvZm9ybS1pbnB1dFwiO1xuaW1wb3J0IHsgVGFDb250YWluZXJNb2R1bGUsIFRhVWlNb2R1bGUgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY21zL2Ntcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNhbGVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NhbGUvc2FsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpbmtDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3R5cGVzL2xpbmsvbGluay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJpY2hUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90eXBlcy9yaWNoLXRleHQvcmljaC10ZXh0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdHlwZXMvdGV4dC90ZXh0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblN0cmFwaSB9IGZyb20gXCIuL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhU3RyYXBpTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBDbXNDb21wb25lbnQsIFNhbGVDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUYVVpTW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYUZvcm1JbnB1dHNNb2R1bGUsXG4gICAgQ21zQ29tcG9uZW50LFxuICAgIFJpY2hUZXh0Q29tcG9uZW50LFxuICAgIExpbmtDb21wb25lbnQsXG4gICAgVGV4dENvbXBvbmVudCxcbiAgICBTYWxlQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQ21zQ29tcG9uZW50LCBTYWxlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFTdHJhcGlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uU3RyYXBpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==