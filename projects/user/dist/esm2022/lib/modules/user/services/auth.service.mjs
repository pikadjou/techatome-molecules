import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Subject, filter, switchMap } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { TaPermissionsService } from './permissions.service';
import * as i0 from "@angular/core";
export const TA_AUTH_TOKEN = new InjectionToken('TaAuthService');
export class TaAuthService extends TaBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(TaPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this.isLoading$ = new Subject();
        this.isLoading$.next(true);
        this.user$
            .pipe(filter(user => !!user), switchMap(() => this.fetchUserProfile$()))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvRSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUczRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFnQixlQUFlLENBQUMsQ0FBQztBQUtoRixNQUFNLE9BQWdCLGFBQWMsU0FBUSxhQUFhO0lBZXZELFlBQVksU0FBMEI7UUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBZkgsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDNUQscUJBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFbkYsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBWTNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLO2FBQ1AsSUFBSSxDQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDdEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQzFDO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzsrR0F4Qm1CLGFBQWE7bUhBQWIsYUFBYSxjQUZyQixNQUFNOzs0RkFFRSxhQUFhO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNYXBwaW5nQXBpVHlwZSwgVGFCYXNlU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJy4vZHRvL3VzZXItcHJvZmlsZSc7XG5pbXBvcnQgeyBUYVBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBUQV9BVVRIX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFRhQXV0aFNlcnZpY2U+KCdUYUF1dGhTZXJ2aWNlJyk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUF1dGhTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIHB1YmxpYyByZWFkb25seSBfcGVybWlzc2lvbnNTZXJ2aWNlID0gaW5qZWN0KFRhUGVybWlzc2lvbnNTZXJ2aWNlKTtcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCQgPSB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuY2FuQWNjZXNzJCgnJywgJ2F1dGhlbnRpY2F0ZWQnKTtcblxuICB1c2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dW5rbm93bj4obnVsbCk7XG4gIHJlYWRvbmx5IGlzTG9hZGluZyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGFic3RyYWN0IGdldCB1c2VyUHJvZmlsZSQoKTogT2JzZXJ2YWJsZTxVc2VyUHJvZmlsZSB8IG51bGw+O1xuXG4gIGFic3RyYWN0IGZldGNoVXNlclByb2ZpbGUkKCk6IE9ic2VydmFibGU8VXNlclByb2ZpbGU+O1xuICBhYnN0cmFjdCBsb2FkKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGxvZ2luKCk6IHZvaWQ7XG4gIGFic3RyYWN0IHNpZ25pbigpOiB2b2lkO1xuICBhYnN0cmFjdCBsb2dvdXQoKTogUHJvbWlzZTxudWxsPjtcblxuICBjb25zdHJ1Y3RvcihhcGlSb3V0ZXM/OiBNYXBwaW5nQXBpVHlwZSkge1xuICAgIHN1cGVyKGFwaVJvdXRlcyk7XG4gICAgdGhpcy5pc0xvYWRpbmckLm5leHQodHJ1ZSk7XG4gICAgdGhpcy51c2VyJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcih1c2VyID0+ICEhdXNlciksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmZldGNoVXNlclByb2ZpbGUkKCkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==