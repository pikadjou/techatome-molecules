import { Component, Input, inject } from '@angular/core';
import { TaNotificationDataService } from '../../../../services/data.service';
import { TaNotificationSharedService } from '../../../../services/shared.service';
import * as i0 from "@angular/core";
export class AbstractNotificationTemplateComponent {
    constructor() {
        this.sharedService = inject(TaNotificationSharedService);
        this.dataService = inject(TaNotificationDataService);
    }
    goTo() {
        this.dataService.isRead$(this.notification.id).subscribe();
    }
    getTranslation() {
        return this.notification.context.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
    }
    extractContext(key) {
        return this.notification.context.find(item => item.key === key)?.value ?? '';
    }
    extractredirectContext(key) {
        return this.notification.redirectContext.find(item => item.key === key)?.value ?? '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AbstractNotificationTemplateComponent, selector: "ng-component", inputs: { notification: "notification" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBR2xGLE1BQU0sT0FBZ0IscUNBQXFDO0lBRDNEO1FBS1Msa0JBQWEsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBc0J4RDtJQXBCUSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBRWxELENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLGNBQWMsQ0FBQyxHQUFXO1FBQy9CLE9BQW9CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3RixDQUFDO0lBRU0sc0JBQXNCLENBQUMsR0FBVztRQUN2QyxPQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3JHLENBQUM7K0dBMUJtQixxQ0FBcUM7bUdBQXJDLHFDQUFxQyw4RkFEcEMsRUFBRTs7NEZBQ0gscUNBQXFDO2tCQUQxRCxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs4QkFHekIsWUFBWTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRHRvIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZHRvL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvblNoYXJlZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE5vdGlmaWNhdGlvblRlbXBsYXRlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbm90aWZpY2F0aW9uITogTm90aWZpY2F0aW9uRHRvO1xuXG4gIHB1YmxpYyBzaGFyZWRTZXJ2aWNlID0gaW5qZWN0KFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSk7XG4gIHB1YmxpYyBkYXRhU2VydmljZSA9IGluamVjdChUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlKTtcblxuICBwdWJsaWMgZ29UbygpIHtcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmlzUmVhZCQodGhpcy5ub3RpZmljYXRpb24uaWQpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGdldFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiAoPEtleVZhbHVlW10+dGhpcy5ub3RpZmljYXRpb24uY29udGV4dCkucmVkdWNlPHtcbiAgICAgIFtpbmRleDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xuICAgIH0+KChhY2MsIGl0ZW0pID0+IHtcbiAgICAgIGFjY1tpdGVtLmtleSBhcyBzdHJpbmddID0gaXRlbS52YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RDb250ZXh0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICg8S2V5VmFsdWVbXT50aGlzLm5vdGlmaWNhdGlvbi5jb250ZXh0KS5maW5kKGl0ZW0gPT4gaXRlbS5rZXkgPT09IGtleSk/LnZhbHVlID8/ICcnO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RyZWRpcmVjdENvbnRleHQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKDxLZXlWYWx1ZVtdPnRoaXMubm90aWZpY2F0aW9uLnJlZGlyZWN0Q29udGV4dCkuZmluZChpdGVtID0+IGl0ZW0ua2V5ID09PSBrZXkpPy52YWx1ZSA/PyAnJztcbiAgfVxufVxuIl19