import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BulletComponent as TaBulletComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
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
        this._notificationDataService.fetchNumberOfNotifications$(this.filters).subscribe({
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
            args: [{ selector: 'ta-notification-bullet', standalone: true, imports: [AsyncPipe, TaBulletComponent], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: i1.TaNotificationDataService }], propDecorators: { filters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZUFBZSxJQUFJLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVk1QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlO0lBSWxELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsWUFBb0Isd0JBQW1EO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBRFUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEyQjtRQU52RSxZQUFPLEdBQXVCLElBQUksQ0FBQztJQVFuQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDaEYsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzdDLEtBQUssRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBcEJVLGVBQWU7bUdBQWYsZUFBZSx5SUNqQjVCLHNGQUdBLHFERFlZLFNBQVMsOENBQUUsaUJBQWlCOzs0RkFFM0IsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDOzhGQUl2QyxPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IGFzIFRhQnVsbGV0Q29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRmlsdGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcXVlcmllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW5vdGlmaWNhdGlvbi1idWxsZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnVsbGV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVsbGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtBc3luY1BpcGUsIFRhQnVsbGV0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZmlsdGVyczogTm90aWZpY2F0aW9uRmlsdGVyID0gbnVsbDtcblxuICBnZXQgbnVtYmVyJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uRGF0YVNlcnZpY2UuY291bnQuZ2V0JCh0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5jb21wdXRlS2V5KHRoaXMuZmlsdGVycykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbm90aWZpY2F0aW9uRGF0YVNlcnZpY2U6IFRhTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5mZXRjaE51bWJlck9mTm90aWZpY2F0aW9ucyQodGhpcy5maWx0ZXJzKS5zdWJzY3JpYmUoe1xuICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgZXJyb3I6IChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0U3RhdGUub25FcnJvcihlcnJvci5zdGF0dXMsIGVycm9yLnN0YXR1c1RleHQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRhLWJ1bGxldCB0eXBlPVwibm90aWZcIiBzaXplPVwibWRcIj5cbiAge3sgdGhpcy5udW1iZXIkIHwgYXN5bmMgfX1cbjwvdGEtYnVsbGV0PlxuIl19