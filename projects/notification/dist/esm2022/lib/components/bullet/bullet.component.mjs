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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BulletComponent, deps: [{ token: i1.CamNotificationDataService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: "filters" }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: TaBulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-bullet', standalone: true, imports: [
                        AsyncPipe,
                        TaBulletComponent
                    ], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [{ type: i1.CamNotificationDataService }], propDecorators: { filters: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxJQUFJLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQVk1QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlO0lBSWxELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsWUFBb0Isd0JBQW9EO1FBQ3RFLEtBQUssRUFBRSxDQUFDO1FBRFUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUE0QjtRQU54RSxZQUFPLEdBQXVCLElBQUksQ0FBQztJQVFuQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDaEYsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzdDLEtBQUssRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBcEJVLGVBQWU7bUdBQWYsZUFBZSx5SUNsQjVCLHNGQUdBLHFERFdJLFNBQVMsOENBQ1QsaUJBQWlCOzs0RkFHUixlQUFlO2tCQVYzQixTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1A7d0JBQ1AsU0FBUzt3QkFDVCxpQkFBaUI7cUJBQ2xCOytGQUlELE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkZpbHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3F1ZXJpZXMnO1xuaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdWxsZXRDb21wb25lbnQgYXMgVGFCdWxsZXRDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbm90aWZpY2F0aW9uLWJ1bGxldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWxsZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idWxsZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEFzeW5jUGlwZSxcbiAgICBUYUJ1bGxldENvbXBvbmVudFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBCdWxsZXRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBmaWx0ZXJzOiBOb3RpZmljYXRpb25GaWx0ZXIgPSBudWxsO1xuXG4gIGdldCBudW1iZXIkKCkge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5jb3VudC5nZXQkKHRoaXMuX25vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlLmNvbXB1dGVLZXkodGhpcy5maWx0ZXJzKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ub3RpZmljYXRpb25EYXRhU2VydmljZTogQ2FtTm90aWZpY2F0aW9uRGF0YVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcbiAgICB0aGlzLl9ub3RpZmljYXRpb25EYXRhU2VydmljZS5mZXRjaE51bWJlck9mTm90aWZpY2F0aW9ucyQodGhpcy5maWx0ZXJzKS5zdWJzY3JpYmUoe1xuICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgZXJyb3I6IChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0U3RhdGUub25FcnJvcihlcnJvci5zdGF0dXMsIGVycm9yLnN0YXR1c1RleHQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPHRhLWJ1bGxldCB0eXBlPVwibm90aWZcIiBzaXplPVwibWRcIj5cbiAge3sgdGhpcy5udW1iZXIkIHwgYXN5bmMgfX1cbjwvdGEtYnVsbGV0PlxuIl19