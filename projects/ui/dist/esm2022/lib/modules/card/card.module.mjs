import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaIconsModule } from '@ta/icons';
import { TaUiModule } from '../../components/ui/ui.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWxFLE1BQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFVLEVBQUUsQ0FBQztBQUUvQjs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksWUFIYixZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFuQmpELGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCLGFBUmxCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsa0JBQWtCO2dIQWNQLFlBQVksWUFIYixZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFaakQsc0JBQXNCOzs0RkFlWCxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQztvQkFDOUQsT0FBTyxFQUFFLE9BQU87aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuXG5pbXBvcnQgeyBUYVVpTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aS91aS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLWltYWdlL2NhcmQtaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NhcmQtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZEN0YUNvbXBvbmVudCB9IGZyb20gJy4vY3RhL2NhcmQtY3RhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRTdWJ0aXRsZUNvbXBvbmVudCB9IGZyb20gJy4vc3VidGl0bGUvY2FyZC1zdWJ0aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vdGFnL2NhcmQtdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlL2NhcmQtdGl0bGUuY29tcG9uZW50JztcblxuY29uc3QgZXhwb3J0cyA9IFtcbiAgQ2FyZENvbXBvbmVudCxcbiAgQ2FyZEhlYWRlckNvbXBvbmVudCxcbiAgQ2FyZFRpdGxlQ29tcG9uZW50LFxuICBDYXJkU3VidGl0bGVDb21wb25lbnQsXG4gIENhcmRDdGFDb21wb25lbnQsXG4gIENhcmRUYWdDb21wb25lbnQsXG4gIENhcmRDb250ZW50Q29tcG9uZW50LFxuICBEYXNoYm9hcmRDYXJkQ29tcG9uZW50LFxuICBDYXJkSW1hZ2VDb21wb25lbnQsXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnM6IGFueVtdID0gW107XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUYVVpTW9kdWxlLCBUYUljb25zTW9kdWxlLCAuLi5leHBvcnRzXSxcbiAgZXhwb3J0czogZXhwb3J0cyxcbn0pXG5leHBvcnQgY2xhc3MgVGFDYXJkTW9kdWxlIHt9XG4iXX0=