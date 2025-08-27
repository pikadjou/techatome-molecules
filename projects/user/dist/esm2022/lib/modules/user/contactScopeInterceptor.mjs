import { Inject, Injectable, Optional, inject } from '@angular/core';
import { GRAPHQL_SERVER_CONFIG } from '@ta/server';
import { APPLICATION_CONFIG } from '@ta/utils';
import * as i0 from "@angular/core";
import * as i1 from "./services/users.service";
export class ContactScopeInterceptor {
    constructor(graphQlConfig, _userService) {
        this.graphQlConfig = graphQlConfig;
        this._userService = _userService;
        this._applicationConfig = inject(APPLICATION_CONFIG);
    }
    intercept(req, next) {
        if (req.url.endsWith('.json')) {
            return next.handle(req);
        }
        if (!this._applicationConfig.isCustomerApplication) {
            return next.handle(req);
        }
        if (!this.graphQlConfig?.config?.url ||
            !req.url.startsWith(this.graphQlConfig?.config?.url) ||
            req.url.endsWith('user')) {
            return next.handle(req);
        }
        if (this.graphQlConfig?.config?.visitor && req.url.startsWith(this.graphQlConfig?.config?.visitor)) {
            return next.handle(req);
        }
        return this._setContactToHeader(req, next);
    }
    _setContactToHeader(req, next) {
        const contactIds = this._userService.currentUserContactIds.get()?.join(';') ?? '';
        const contactIdsRequest = req.clone({
            headers: req.headers.set('ContactIds', contactIds),
        });
        return next.handle(contactIdsRequest);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor, deps: [{ token: GRAPHQL_SERVER_CONFIG, optional: true }, { token: i1.CamUsersService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactScopeInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRAPHQL_SERVER_CONFIG]
                }] }, { type: i1.CamUsersService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFNjb3BlSW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb250YWN0U2NvcGVJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxxQkFBcUIsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLFdBQVcsQ0FBQzs7O0FBTW5FLE1BQU0sT0FBTyx1QkFBdUI7SUFHbEMsWUFHVSxhQUEyQixFQUMzQixZQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFOL0IsdUJBQWtCLEdBQXVCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBT3pFLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNoRCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUNFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsR0FBRztZQUNoQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFDeEIsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNuRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sbUJBQW1CLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNsRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEYsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO1NBQ25ELENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7K0dBdkNVLHVCQUF1QixrQkFLeEIscUJBQXFCO21IQUxwQix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVU7OzBCQUtOLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHUkFQSFFMX1NFUlZFUl9DT05GSUcsIElHcmFwaENvbmZpZyB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fQ09ORklHLCBJQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYW1Vc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGFjdFNjb3BlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnID0gaW5qZWN0KEFQUExJQ0FUSU9OX0NPTkZJRyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdSQVBIUUxfU0VSVkVSX0NPTkZJRylcbiAgICBwcml2YXRlIGdyYXBoUWxDb25maWc6IElHcmFwaENvbmZpZyxcbiAgICBwcml2YXRlIF91c2VyU2VydmljZTogQ2FtVXNlcnNTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxLnVybC5lbmRzV2l0aCgnLmpzb24nKSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fYXBwbGljYXRpb25Db25maWcuaXNDdXN0b21lckFwcGxpY2F0aW9uKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhdGhpcy5ncmFwaFFsQ29uZmlnPy5jb25maWc/LnVybCB8fFxuICAgICAgIXJlcS51cmwuc3RhcnRzV2l0aCh0aGlzLmdyYXBoUWxDb25maWc/LmNvbmZpZz8udXJsKSB8fFxuICAgICAgcmVxLnVybC5lbmRzV2l0aCgndXNlcicpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ncmFwaFFsQ29uZmlnPy5jb25maWc/LnZpc2l0b3IgJiYgcmVxLnVybC5zdGFydHNXaXRoKHRoaXMuZ3JhcGhRbENvbmZpZz8uY29uZmlnPy52aXNpdG9yKSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NldENvbnRhY3RUb0hlYWRlcihyZXEsIG5leHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q29udGFjdFRvSGVhZGVyKHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBjb25zdCBjb250YWN0SWRzID0gdGhpcy5fdXNlclNlcnZpY2UuY3VycmVudFVzZXJDb250YWN0SWRzLmdldCgpPy5qb2luKCc7JykgPz8gJyc7XG4gICAgY29uc3QgY29udGFjdElkc1JlcXVlc3QgPSByZXEuY2xvbmUoe1xuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMuc2V0KCdDb250YWN0SWRzJywgY29udGFjdElkcyksXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKGNvbnRhY3RJZHNSZXF1ZXN0KTtcbiAgfVxufVxuIl19