import { Component, input, inject } from "@angular/core";
import { TaNotificationDataService } from "../../../../services/data.service";
import { TaNotificationSharedService } from "../../../../services/shared.service";
import * as i0 from "@angular/core";
export class AbstractNotificationTemplateComponent {
    constructor() {
        this.notification = input.required();
        this.sharedService = inject(TaNotificationSharedService);
        this.dataService = inject(TaNotificationDataService);
    }
    goTo() {
        this.dataService.isRead$(this.notification().id).subscribe();
    }
    getTranslation() {
        return this.notification().context.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
    }
    extractContext(key) {
        return (this.notification().context.find((item) => item.key === key)
            ?.value ?? "");
    }
    extractredirectContext(key) {
        return (this.notification().redirectContext.find((item) => item.key === key)?.value ?? "");
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: AbstractNotificationTemplateComponent, selector: "ng-component", inputs: { notification: { classPropertyName: "notification", publicName: "notification", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AbstractNotificationTemplateComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaXRlbXMvaXRlbS90ZW1wbGF0ZS9hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBR2xGLE1BQU0sT0FBZ0IscUNBQXFDO0lBRDNEO1FBRUUsaUJBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFtQixDQUFDO1FBRTFDLGtCQUFhLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQTZCeEQ7SUEzQlEsSUFBSTtRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBUSxDQUFDLE1BQU0sQ0FFcEQsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckMsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU0sY0FBYyxDQUFDLEdBQVc7UUFDL0IsT0FBTyxDQUNRLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUN4RSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQ2hCLENBQUM7SUFDSixDQUFDO0lBRU0sc0JBQXNCLENBQUMsR0FBVztRQUN2QyxPQUFPLENBQ1EsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWdCLENBQUMsSUFBSSxDQUNwRCxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQzNCLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FDZixDQUFDO0lBQ0osQ0FBQzsrR0FoQ21CLHFDQUFxQzttR0FBckMscUNBQXFDLDRNQURwQyxFQUFFOzs0RkFDSCxxQ0FBcUM7a0JBRDFELFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCwgaW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuXG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRHRvIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2R0by9ub3RpZmljYXRpb25cIjtcbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9zaGFyZWQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE5vdGlmaWNhdGlvblRlbXBsYXRlQ29tcG9uZW50IHtcbiAgbm90aWZpY2F0aW9uID0gaW5wdXQucmVxdWlyZWQ8Tm90aWZpY2F0aW9uRHRvPigpO1xuXG4gIHB1YmxpYyBzaGFyZWRTZXJ2aWNlID0gaW5qZWN0KFRhTm90aWZpY2F0aW9uU2hhcmVkU2VydmljZSk7XG4gIHB1YmxpYyBkYXRhU2VydmljZSA9IGluamVjdChUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlKTtcblxuICBwdWJsaWMgZ29UbygpIHtcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmlzUmVhZCQodGhpcy5ub3RpZmljYXRpb24oKS5pZCkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgcmV0dXJuICg8S2V5VmFsdWVbXT50aGlzLm5vdGlmaWNhdGlvbigpLmNvbnRleHQpLnJlZHVjZTx7XG4gICAgICBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbiAgICB9PigoYWNjLCBpdGVtKSA9PiB7XG4gICAgICBhY2NbaXRlbS5rZXkgYXMgc3RyaW5nXSA9IGl0ZW0udmFsdWU7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIHB1YmxpYyBleHRyYWN0Q29udGV4dChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiAoXG4gICAgICAoPEtleVZhbHVlW10+dGhpcy5ub3RpZmljYXRpb24oKS5jb250ZXh0KS5maW5kKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KVxuICAgICAgICA/LnZhbHVlID8/IFwiXCJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGV4dHJhY3RyZWRpcmVjdENvbnRleHQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKDxLZXlWYWx1ZVtdPnRoaXMubm90aWZpY2F0aW9uKCkucmVkaXJlY3RDb250ZXh0KS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleVxuICAgICAgKT8udmFsdWUgPz8gXCJcIlxuICAgICk7XG4gIH1cbn1cbiJdfQ==