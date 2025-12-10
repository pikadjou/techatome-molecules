import { Component, Input, inject } from "@angular/core";
import { TaNotificationDataService } from "../../../../services/data.service";
import { TaNotificationSharedService } from "../../../../services/shared.service";
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
        return (this.notification.context.find((item) => item.key === key)
            ?.value ?? "");
    }
    extractredirectContext(key) {
        return (this.notification.redirectContext.find((item) => item.key === key)?.value ?? "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AbstractNotificationTemplateComponent, selector: "ng-component", inputs: { notification: "notification" }, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], propDecorators: { notification: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBR2xGLE1BQU0sT0FBZ0IscUNBQXFDO0lBRDNEO1FBS1Msa0JBQWEsR0FBRyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNwRCxnQkFBVyxHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBNkJ4RDtJQTNCUSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQyxNQUFNLENBRWxELENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVNLGNBQWMsQ0FBQyxHQUFXO1FBQy9CLE9BQU8sQ0FDUSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDO1lBQ3RFLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FDaEIsQ0FBQztJQUNKLENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxHQUFXO1FBQ3ZDLE9BQU8sQ0FDUSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWdCLENBQUMsSUFBSSxDQUNsRCxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQzNCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQzsrR0FqQ21CLHFDQUFxQzttR0FBckMscUNBQXFDLDhGQURwQyxFQUFFOzs0RkFDSCxxQ0FBcUM7a0JBRDFELFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzhCQUd6QixZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBLZXlWYWx1ZSB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5cbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25EdG8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvZHRvL25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgVGFOb3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3NoYXJlZC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogXCJcIiB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Tm90aWZpY2F0aW9uVGVtcGxhdGVDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBub3RpZmljYXRpb24hOiBOb3RpZmljYXRpb25EdG87XG5cbiAgcHVibGljIHNoYXJlZFNlcnZpY2UgPSBpbmplY3QoVGFOb3RpZmljYXRpb25TaGFyZWRTZXJ2aWNlKTtcbiAgcHVibGljIGRhdGFTZXJ2aWNlID0gaW5qZWN0KFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UpO1xuXG4gIHB1YmxpYyBnb1RvKCkge1xuICAgIHRoaXMuZGF0YVNlcnZpY2UuaXNSZWFkJCh0aGlzLm5vdGlmaWNhdGlvbi5pZCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgcmV0dXJuICg8S2V5VmFsdWVbXT50aGlzLm5vdGlmaWNhdGlvbi5jb250ZXh0KS5yZWR1Y2U8e1xuICAgICAgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG4gICAgfT4oKGFjYywgaXRlbSkgPT4ge1xuICAgICAgYWNjW2l0ZW0ua2V5IGFzIHN0cmluZ10gPSBpdGVtLnZhbHVlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH1cblxuICBwdWJsaWMgZXh0cmFjdENvbnRleHQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKDxLZXlWYWx1ZVtdPnRoaXMubm90aWZpY2F0aW9uLmNvbnRleHQpLmZpbmQoKGl0ZW0pID0+IGl0ZW0ua2V5ID09PSBrZXkpXG4gICAgICAgID8udmFsdWUgPz8gXCJcIlxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZXh0cmFjdHJlZGlyZWN0Q29udGV4dChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoXG4gICAgICAoPEtleVZhbHVlW10+dGhpcy5ub3RpZmljYXRpb24ucmVkaXJlY3RDb250ZXh0KS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleVxuICAgICAgKT8udmFsdWUgPz8gXCJcIlxuICAgICk7XG4gIH1cbn1cbiJdfQ==