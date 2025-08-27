import { Component, Input, inject } from '@angular/core';
import { CamNotificationDataService } from '../../../../services/data.service';
import { CamNotificationSharedService } from '../../../../services/shared.service';
import * as i0 from "@angular/core";
export class AbstractNotificationTemplateComponent {
    constructor() {
        this.sharedService = inject(CamNotificationSharedService);
        this.dataService = inject(CamNotificationDataService);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AbstractNotificationTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: AbstractNotificationTemplateComponent, selector: "ng-component", inputs: { notification: "notification" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AbstractNotificationTemplateComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFL0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBR25GLE1BQU0sT0FBZ0IscUNBQXFDO0lBRDNEO1FBS1Msa0JBQWEsR0FBRyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNyRCxnQkFBVyxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBc0J6RDtJQXBCUSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBRWxELENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLGNBQWMsQ0FBQyxHQUFXO1FBQy9CLE9BQW9CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3RixDQUFDO0lBRU0sc0JBQXNCLENBQUMsR0FBVztRQUN2QyxPQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ3JHLENBQUM7K0dBMUJtQixxQ0FBcUM7bUdBQXJDLHFDQUFxQyw4RkFEcEMsRUFBRTs7NEZBQ0gscUNBQXFDO2tCQUQxRCxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs4QkFHekIsWUFBWTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEtleVZhbHVlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IENhbU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkR0byB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2R0by9ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQ2FtTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3NoYXJlZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Tm90aWZpY2F0aW9uVGVtcGxhdGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBub3RpZmljYXRpb24hOiBOb3RpZmljYXRpb25EdG87XG5cbiAgcHVibGljIHNoYXJlZFNlcnZpY2UgPSBpbmplY3QoQ2FtTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSk7XG4gIHB1YmxpYyBkYXRhU2VydmljZSA9IGluamVjdChDYW1Ob3RpZmljYXRpb25EYXRhU2VydmljZSk7XG5cbiAgcHVibGljIGdvVG8oKSB7XG4gICAgdGhpcy5kYXRhU2VydmljZS5pc1JlYWQkKHRoaXMubm90aWZpY2F0aW9uLmlkKS5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFuc2xhdGlvbigpIHtcbiAgICByZXR1cm4gKDxLZXlWYWx1ZVtdPnRoaXMubm90aWZpY2F0aW9uLmNvbnRleHQpLnJlZHVjZTx7XG4gICAgICBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbiAgICB9PigoYWNjLCBpdGVtKSA9PiB7XG4gICAgICBhY2NbaXRlbS5rZXkgYXMgc3RyaW5nXSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHB1YmxpYyBleHRyYWN0Q29udGV4dChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoPEtleVZhbHVlW10+dGhpcy5ub3RpZmljYXRpb24uY29udGV4dCkuZmluZChpdGVtID0+IGl0ZW0ua2V5ID09PSBrZXkpPy52YWx1ZSA/PyAnJztcbiAgfVxuXG4gIHB1YmxpYyBleHRyYWN0cmVkaXJlY3RDb250ZXh0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICg8S2V5VmFsdWVbXT50aGlzLm5vdGlmaWNhdGlvbi5yZWRpcmVjdENvbnRleHQpLmZpbmQoaXRlbSA9PiBpdGVtLmtleSA9PT0ga2V5KT8udmFsdWUgPz8gJyc7XG4gIH1cbn1cbiJdfQ==