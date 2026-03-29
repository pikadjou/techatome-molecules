import { inject, Injectable, signal } from "@angular/core";
import { print } from "graphql";
import { NOTIFICATION_HANDLER_TOKEN, } from "./server/token";
import * as i0 from "@angular/core";
// Matches ENotificationCode.error from @ta/notification
const NOTIFICATION_CODE_ERROR = 1;
export class TaServerErrorService {
    constructor() {
        this.notifications = signal([]);
        this._notificationHandler = inject(NOTIFICATION_HANDLER_TOKEN, { optional: true });
    }
    addError(query, error) {
        const errorsMessage = this._extractErrorMessages(error);
        this.notifications().push({
            query: print("query" in query ? query.query : query.mutation),
            variables: query.variables,
            error,
            errorsMessage,
        });
        if (this._notificationHandler) {
            const message = this._extractUserMessage(error, errorsMessage);
            this._notificationHandler(message, NOTIFICATION_CODE_ERROR);
        }
    }
    _extractErrorMessages(error) {
        try {
            return error.networkError?.error?.errors ?? [];
        }
        catch {
            return [];
        }
    }
    _extractUserMessage(error, errorsMessage) {
        const firstMessage = errorsMessage?.[0]?.message;
        return firstMessage ?? error.message ?? "notification.inline.label.error";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUloQyxPQUFPLEVBQ0wsMEJBQTBCLEdBRTNCLE1BQU0sZ0JBQWdCLENBQUM7O0FBU3hCLHdEQUF3RDtBQUN4RCxNQUFNLHVCQUF1QixHQUFHLENBQUMsQ0FBQztBQUtsQyxNQUFNLE9BQU8sb0JBQW9CO0lBUS9CO1FBUE8sa0JBQWEsR0FBRyxNQUFNLENBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLHlCQUFvQixHQUErQixNQUFNLENBQy9ELDBCQUEwQixFQUMxQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FDbkIsQ0FBQztJQUVhLENBQUM7SUFFVCxRQUFRLENBQ2IsS0FBK0MsRUFDL0MsS0FBa0I7UUFFbEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQzdELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixLQUFLO1lBQ0wsYUFBYTtTQUNkLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFFTyxxQkFBcUIsQ0FDM0IsS0FBa0I7UUFFbEIsSUFBSSxDQUFDO1lBQ0gsT0FBUSxLQUFLLENBQUMsWUFBa0MsRUFBRSxLQUFLLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN4RSxDQUFDO1FBQUMsTUFBTSxDQUFDO1lBQ1AsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQixDQUN6QixLQUFrQixFQUNsQixhQUFzQztRQUV0QyxNQUFNLFlBQVksR0FBRyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUM7UUFDakQsT0FBTyxZQUFZLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQztJQUM1RSxDQUFDOytHQTdDVSxvQkFBb0I7bUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IGluamVjdCwgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvZXJyb3JzXCI7XG5pbXBvcnQgeyBwcmludCB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuXG5pbXBvcnQgeyBHcmFwaE11dGF0aW9uUGF5bG9hZCwgR3JhcGhRdWVyeVBheWxvYWQgfSBmcm9tIFwiLi9ncmFwaHFsL3B1YmxpYy1hcGlcIjtcbmltcG9ydCB7XG4gIE5PVElGSUNBVElPTl9IQU5ETEVSX1RPS0VOLFxuICBOb3RpZmljYXRpb25IYW5kbGVyLFxufSBmcm9tIFwiLi9zZXJ2ZXIvdG9rZW5cIjtcblxuZXhwb3J0IHR5cGUgU2VydmVyRXJyb3IgPSB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHZhcmlhYmxlczogYW55O1xuICBlcnJvcjogQXBvbGxvRXJyb3I7XG4gIGVycm9yc01lc3NhZ2U6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvcltdO1xufTtcblxuLy8gTWF0Y2hlcyBFTm90aWZpY2F0aW9uQ29kZS5lcnJvciBmcm9tIEB0YS9ub3RpZmljYXRpb25cbmNvbnN0IE5PVElGSUNBVElPTl9DT0RFX0VSUk9SID0gMTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFTZXJ2ZXJFcnJvclNlcnZpY2Uge1xuICBwdWJsaWMgbm90aWZpY2F0aW9ucyA9IHNpZ25hbDxTZXJ2ZXJFcnJvcltdPihbXSk7XG5cbiAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uSGFuZGxlcjogTm90aWZpY2F0aW9uSGFuZGxlciB8IG51bGwgPSBpbmplY3QoXG4gICAgTk9USUZJQ0FUSU9OX0hBTkRMRVJfVE9LRU4sXG4gICAgeyBvcHRpb25hbDogdHJ1ZSB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBhZGRFcnJvcihcbiAgICBxdWVyeTogR3JhcGhRdWVyeVBheWxvYWQgfCBHcmFwaE11dGF0aW9uUGF5bG9hZCxcbiAgICBlcnJvcjogQXBvbGxvRXJyb3JcbiAgKSB7XG4gICAgY29uc3QgZXJyb3JzTWVzc2FnZSA9IHRoaXMuX2V4dHJhY3RFcnJvck1lc3NhZ2VzKGVycm9yKTtcblxuICAgIHRoaXMubm90aWZpY2F0aW9ucygpLnB1c2goe1xuICAgICAgcXVlcnk6IHByaW50KFwicXVlcnlcIiBpbiBxdWVyeSA/IHF1ZXJ5LnF1ZXJ5IDogcXVlcnkubXV0YXRpb24pLFxuICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yc01lc3NhZ2UsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fbm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2V4dHJhY3RVc2VyTWVzc2FnZShlcnJvciwgZXJyb3JzTWVzc2FnZSk7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25IYW5kbGVyKG1lc3NhZ2UsIE5PVElGSUNBVElPTl9DT0RFX0VSUk9SKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9leHRyYWN0RXJyb3JNZXNzYWdlcyhcbiAgICBlcnJvcjogQXBvbGxvRXJyb3JcbiAgKTogR3JhcGhRTEZvcm1hdHRlZEVycm9yW10ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGVycm9yLm5ldHdvcmtFcnJvciBhcyBIdHRwRXJyb3JSZXNwb25zZSk/LmVycm9yPy5lcnJvcnMgPz8gW107XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFjdFVzZXJNZXNzYWdlKFxuICAgIGVycm9yOiBBcG9sbG9FcnJvcixcbiAgICBlcnJvcnNNZXNzYWdlOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3JbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGVycm9yc01lc3NhZ2U/LlswXT8ubWVzc2FnZTtcbiAgICByZXR1cm4gZmlyc3RNZXNzYWdlID8/IGVycm9yLm1lc3NhZ2UgPz8gXCJub3RpZmljYXRpb24uaW5saW5lLmxhYmVsLmVycm9yXCI7XG4gIH1cbn1cbiJdfQ==