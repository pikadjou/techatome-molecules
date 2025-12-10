import { AsyncPipe } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BulletComponent as TaBulletComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
import * as i1 from "../../services/data.service";
export class BulletComponent extends TaBaseComponent {
    get number$() {
        return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters));
    }
    constructor(_notificationDataService) {
        super();
        this._notificationDataService = _notificationDataService;
        this.filters = null;
    }
    ngOnInit() {
        this.requestState.asked();
        this._notificationDataService
            .fetchNumberOfNotifications$(this.filters)
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, deps: [{ token: i1.TaNotificationDataService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: "filters" }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: TaBulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-bullet", standalone: true, imports: [AsyncPipe, TaBulletComponent], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: i1.TaNotificationDataService }], propDecorators: { filters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxJQUFJLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVk1QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlO0lBSWxELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQW9CLHdCQUFtRDtRQUNyRSxLQUFLLEVBQUUsQ0FBQztRQURVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMkI7UUFSdkUsWUFBTyxHQUF1QixJQUFJLENBQUM7SUFVbkMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsS0FBSyxFQUFFLENBQUMsS0FBd0IsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzsrR0F4QlUsZUFBZTttR0FBZixlQUFlLHlJQ2pCNUIsc0ZBR0EscUREWVksU0FBUyw4Q0FBRSxpQkFBaUI7OzRGQUUzQixlQUFlO2tCQVAzQixTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1AsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7OEZBSXZDLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCdWxsZXRDb21wb25lbnQgYXMgVGFCdWxsZXRDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25GaWx0ZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVlcmllc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbm90aWZpY2F0aW9uLWJ1bGxldFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2J1bGxldC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYnVsbGV0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBUYUJ1bGxldENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1bGxldENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGZpbHRlcnM6IE5vdGlmaWNhdGlvbkZpbHRlciA9IG51bGw7XG5cbiAgZ2V0IG51bWJlciQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlLmNvdW50LmdldCQoXG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5jb21wdXRlS2V5KHRoaXMuZmlsdGVycylcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbm90aWZpY2F0aW9uRGF0YVNlcnZpY2U6IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZVxuICAgICAgLmZldGNoTnVtYmVyT2ZOb3RpZmljYXRpb25zJCh0aGlzLmZpbHRlcnMpXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG59XG4iLCI8dGEtYnVsbGV0IHR5cGU9XCJub3RpZlwiIHNpemU9XCJtZFwiPlxuICB7eyB0aGlzLm51bWJlciQgfCBhc3luYyB9fVxuPC90YS1idWxsZXQ+XG4iXX0=