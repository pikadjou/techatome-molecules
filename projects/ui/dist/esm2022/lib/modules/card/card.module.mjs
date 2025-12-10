import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaIconsModule } from "@ta/icons";
import { TaUiModule } from "../../components/ui/ui.module";
import { CardImageComponent } from "./card-image/card-image.component";
import { CardComponent } from "./card.component";
import { CardContentComponent } from "./content/card-content.component";
import { CardCtaComponent } from "./cta/card-cta.component";
import { DashboardCardComponent } from "./dashboard/dashboard.component";
import { CardHeaderComponent } from "./header/card-header.component";
import { CardSubtitleComponent } from "./subtitle/card-subtitle.component";
import { CardTagComponent } from "./tag/card-tag.component";
import { CardTitleComponent } from "./title/card-title.component";
import * as i0 from "@angular/core";
const exports = [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardCtaComponent,
    CardTagComponent,
    CardContentComponent,
    DashboardCardComponent,
    CardImageComponent,
];
const declarations = [];
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 */
export class TaCardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaCardModule, imports: [CommonModule, TaUiModule, TaIconsModule, CardComponent,
            CardHeaderComponent,
            CardTitleComponent,
            CardSubtitleComponent,
            CardCtaComponent,
            CardTagComponent,
            CardContentComponent,
            DashboardCardComponent,
            CardImageComponent], exports: [CardComponent,
            CardHeaderComponent,
            CardTitleComponent,
            CardSubtitleComponent,
            CardCtaComponent,
            CardTagComponent,
            CardContentComponent,
            DashboardCardComponent,
            CardImageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCardModule, imports: [CommonModule, TaUiModule, TaIconsModule, DashboardCardComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: declarations,
                    imports: [CommonModule, TaUiModule, TaIconsModule, ...exports],
                    exports: exports,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWxFLE1BQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFVLEVBQUUsQ0FBQztBQUUvQjs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksWUFIYixZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFuQmpELGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCLGFBUmxCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCO2dIQWNQLFlBQVksWUFIYixZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFaakQsc0JBQXNCOzs0RkFlWCxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQztvQkFDOUQsT0FBTyxFQUFFLE9BQU87aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuXG5pbXBvcnQgeyBUYVVpTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvdWkubW9kdWxlXCI7XG5pbXBvcnQgeyBDYXJkSW1hZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jYXJkLWltYWdlL2NhcmQtaW1hZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGVudC9jYXJkLWNvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkQ3RhQ29tcG9uZW50IH0gZnJvbSBcIi4vY3RhL2NhcmQtY3RhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyL2NhcmQtaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyZFN1YnRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vc3VidGl0bGUvY2FyZC1zdWJ0aXRsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcmRUYWdDb21wb25lbnQgfSBmcm9tIFwiLi90YWcvY2FyZC10YWcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJkVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi90aXRsZS9jYXJkLXRpdGxlLmNvbXBvbmVudFwiO1xuXG5jb25zdCBleHBvcnRzID0gW1xuICBDYXJkQ29tcG9uZW50LFxuICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBDYXJkVGl0bGVDb21wb25lbnQsXG4gIENhcmRTdWJ0aXRsZUNvbXBvbmVudCxcbiAgQ2FyZEN0YUNvbXBvbmVudCxcbiAgQ2FyZFRhZ0NvbXBvbmVudCxcbiAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIERhc2hib2FyZENhcmRDb21wb25lbnQsXG4gIENhcmRJbWFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9uczogYW55W10gPSBbXTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRhVWlNb2R1bGUsIFRhSWNvbnNNb2R1bGUsIC4uLmV4cG9ydHNdLFxuICBleHBvcnRzOiBleHBvcnRzLFxufSlcbmV4cG9ydCBjbGFzcyBUYUNhcmRNb2R1bGUge31cbiJdfQ==