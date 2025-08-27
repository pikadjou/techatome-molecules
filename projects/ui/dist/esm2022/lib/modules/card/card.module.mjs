import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamIconsModule } from '@ta/icons';
import { CamUiModule } from '../../components/ui/ui.module';
import { CardImageComponent } from './card-image/card-image.component';
import { CardComponent } from './card.component';
import { CardContentComponent } from './content/card-content.component';
import { CardCtaComponent } from './cta/card-cta.component';
import { DashboardCardComponent } from './dashboard/dashboard.component';
import { CardHeaderComponent } from './header/card-header.component';
import { CardSubtitleComponent } from './subtitle/card-subtitle.component';
import { CardTagComponent } from './tag/card-tag.component';
import { CardTitleComponent } from './title/card-title.component';
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
export class CamCardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, imports: [CommonModule, CamUiModule, CamIconsModule, CardComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, imports: [CommonModule, CamUiModule, CamIconsModule, DashboardCardComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: declarations,
                    imports: [CommonModule, CamUiModule, CamIconsModule, ...exports],
                    exports: exports,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWxFLE1BQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFVLEVBQUUsQ0FBQztBQUUvQjs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sYUFBYTsrR0FBYixhQUFhO2dIQUFiLGFBQWEsWUFIZCxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFuQm5ELGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCLGFBUmxCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCO2dIQWNQLGFBQWEsWUFIZCxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFabkQsc0JBQXNCOzs0RkFlWCxhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQztvQkFDaEUsT0FBTyxFQUFFLE9BQU87aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcblxuaW1wb3J0IHsgQ2FtVWlNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpL3VpLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtaW1hZ2UvY2FyZC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQvY2FyZC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkQ3RhQ29tcG9uZW50IH0gZnJvbSAnLi9jdGEvY2FyZC1jdGEuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENhcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZFN1YnRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkVGFnQ29tcG9uZW50IH0gZnJvbSAnLi90YWcvY2FyZC10YWcuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUvY2FyZC10aXRsZS5jb21wb25lbnQnO1xuXG5jb25zdCBleHBvcnRzID0gW1xuICBDYXJkQ29tcG9uZW50LFxuICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBDYXJkVGl0bGVDb21wb25lbnQsXG4gIENhcmRTdWJ0aXRsZUNvbXBvbmVudCxcbiAgQ2FyZEN0YUNvbXBvbmVudCxcbiAgQ2FyZFRhZ0NvbXBvbmVudCxcbiAgQ2FyZENvbnRlbnRDb21wb25lbnQsXG4gIERhc2hib2FyZENhcmRDb21wb25lbnQsXG4gIENhcmRJbWFnZUNvbXBvbmVudCxcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9uczogYW55W10gPSBbXTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENhbVVpTW9kdWxlLCBDYW1JY29uc01vZHVsZSwgLi4uZXhwb3J0c10sXG4gIGV4cG9ydHM6IGV4cG9ydHMsXG59KVxuZXhwb3J0IGNsYXNzIENhbUNhcmRNb2R1bGUge31cbiJdfQ==