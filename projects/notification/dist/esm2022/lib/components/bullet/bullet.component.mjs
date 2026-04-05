import { AsyncPipe } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { BulletComponent as TaBulletComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { TaNotificationDataService } from "../../services/data.service";
import * as i0 from "@angular/core";
export class BulletComponent extends TaBaseComponent {
    get number$() {
        return this._notificationDataService.count.get$(this._notificationDataService.computeKey(this.filters()));
    }
    constructor() {
        super();
        this.filters = input(null);
        this._notificationDataService = inject(TaNotificationDataService);
    }
    ngOnInit() {
        this.requestState.asked();
        this._registerSubscription(this._notificationDataService
            .fetchNumberOfNotifications$(this.filters())
            .subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: BulletComponent, isStandalone: true, selector: "ta-notification-bullet", inputs: { filters: { classPropertyName: "filters", publicName: "filters", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: TaBulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-notification-bullet", standalone: true, imports: [AsyncPipe, TaBulletComponent], template: "<ta-bullet type=\"notif\" size=\"md\">\n  {{ this.number$ | async }}\n</ta-bullet>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9idWxsZXQvYnVsbGV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLGVBQWUsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQVV4RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxlQUFlO0lBS2xELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVhWLFlBQU8sR0FBRyxLQUFLLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRWxDLDZCQUF3QixHQUFHLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBVXJFLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyx3QkFBd0I7YUFDMUIsMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxLQUFLLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVELENBQUM7U0FDRixDQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7K0dBM0JVLGVBQWU7bUdBQWYsZUFBZSxtUENqQjVCLHNGQUdBLHFERFlZLFNBQVMsOENBQUUsaUJBQWlCOzs0RkFFM0IsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBpbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQnVsbGV0Q29tcG9uZW50IGFzIFRhQnVsbGV0Q29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uRmlsdGVyIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3F1ZXJpZXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLW5vdGlmaWNhdGlvbi1idWxsZXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9idWxsZXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2J1bGxldC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0FzeW5jUGlwZSwgVGFCdWxsZXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCdWxsZXRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWx0ZXJzID0gaW5wdXQ8Tm90aWZpY2F0aW9uRmlsdGVyPihudWxsKTtcblxuICBwcml2YXRlIF9ub3RpZmljYXRpb25EYXRhU2VydmljZSA9IGluamVjdChUYU5vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlKTtcblxuICBnZXQgbnVtYmVyJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZpY2F0aW9uRGF0YVNlcnZpY2UuY291bnQuZ2V0JChcbiAgICAgIHRoaXMuX25vdGlmaWNhdGlvbkRhdGFTZXJ2aWNlLmNvbXB1dGVLZXkodGhpcy5maWx0ZXJzKCkpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uRGF0YVNlcnZpY2VcbiAgICAgICAgLmZldGNoTnVtYmVyT2ZOb3RpZmljYXRpb25zJCh0aGlzLmZpbHRlcnMoKSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHRoaXMucmVxdWVzdFN0YXRlLmNvbXBsZXRlZCgpLFxuICAgICAgICAgIGVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5vbkVycm9yKGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCI8dGEtYnVsbGV0IHR5cGU9XCJub3RpZlwiIHNpemU9XCJtZFwiPlxuICB7eyB0aGlzLm51bWJlciQgfCBhc3luYyB9fVxuPC90YS1idWxsZXQ+XG4iXX0=