import { AsyncPipe } from "@angular/common";
import { Component, input } from "@angular/core";
import { BulletComponent as TaBulletComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
import * as i1 from "../../services/data.service";
export class BulletComponent extends TaBaseComponent {
    get number$() {
        return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters()));
    }
    constructor(_notificationDataService) {
        super();
        this._notificationDataService = _notificationDataService;
        this.filters = input(null);
    }
    ngOnInit() {
        this.requestState.asked();
        this._notificationDataService
            .fetchNumberOfNotifications$(this.filters())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, deps: [{ token: i1.TaNotificationDataService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: { classPropertyName: "filters", publicName: "filters", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: TaBulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-bullet", standalone: true, imports: [AsyncPipe, TaBulletComponent], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: i1.TaNotificationDataService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxJQUFJLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVk1QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlO0lBR2xELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQsWUFBb0Isd0JBQW1EO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBRFUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQVJ2RSxZQUFPLEdBQUcsS0FBSyxDQUFxQixJQUFJLENBQUMsQ0FBQztJQVUxQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHdCQUF3QjthQUMxQiwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDM0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzdDLEtBQUssRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7K0dBdkJVLGVBQWU7bUdBQWYsZUFBZSxtUENqQjVCLHNGQUdBLHFERFlZLFNBQVMsOENBQUUsaUJBQWlCOzs0RkFFM0IsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgaW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJ1bGxldENvbXBvbmVudCBhcyBUYUJ1bGxldENvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFOb3RpZmljYXRpb25EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkZpbHRlciB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWVyaWVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1ub3RpZmljYXRpb24tYnVsbGV0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYnVsbGV0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9idWxsZXQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtBc3luY1BpcGUsIFRhQnVsbGV0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlsdGVycyA9IGlucHV0PE5vdGlmaWNhdGlvbkZpbHRlcj4obnVsbCk7XG5cbiAgZ2V0IG51bWJlciQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlLmNvdW50LmdldCQoXG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5jb21wdXRlS2V5KHRoaXMuZmlsdGVycygpKVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ub3RpZmljYXRpb25EYXRhU2VydmljZTogVGFOb3RpZmljYXRpb25EYXRhU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuX25vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlXG4gICAgICAuZmV0Y2hOdW1iZXJPZk5vdGlmaWNhdGlvbnMkKHRoaXMuZmlsdGVycygpKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKSxcbiAgICAgICAgZXJyb3I6IChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5vbkVycm9yKGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxufVxuIiwiPHRhLWJ1bGxldCB0eXBlPVwibm90aWZcIiBzaXplPVwibWRcIj5cbiAge3sgdGhpcy5udW1iZXIkIHwgYXN5bmMgfX1cbjwvdGEtYnVsbGV0PlxuIl19