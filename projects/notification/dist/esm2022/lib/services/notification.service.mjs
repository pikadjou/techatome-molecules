import { Injectable, InjectionToken } from "@angular/core";
import { Subject } from "rxjs";
import { newGuid } from "@ta/utils";
import { ENotificationCode } from "../enum";
import * as i0 from "@angular/core";
export const LAZY_SERVICE_TOKEN = new InjectionToken("TaNotificationService");
export class TaNotificationService {
    constructor() {
        this.id = Math.random();
        this.newNotification$ = new Subject();
        this.removeNotification$ = new Subject();
    }
    addNotification(message, code, persistent) {
        const isPersistent = persistent !== undefined ? persistent : code === ENotificationCode.error;
        this.newNotification$.next({
            id: newGuid(),
            message,
            code,
            persistent: isPersistent,
        });
    }
    removeNotification(id) {
        this.removeNotification$.next(id);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBUzVDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNsRCx1QkFBdUIsQ0FDeEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxxQkFBcUI7SUFPaEM7UUFOTyxPQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO1FBRW5ELHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7SUFFcEMsQ0FBQztJQUVULGVBQWUsQ0FDcEIsT0FBZSxFQUNmLElBQXVCLEVBQ3ZCLFVBQW9CO1FBRXBCLE1BQU0sWUFBWSxHQUNoQixVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7UUFFM0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUN6QixFQUFFLEVBQUUsT0FBTyxFQUFFO1lBQ2IsT0FBTztZQUNQLElBQUk7WUFDSixVQUFVLEVBQUUsWUFBWTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsRUFBVTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7K0dBM0JVLHFCQUFxQjttSEFBckIscUJBQXFCLGNBRnBCLE1BQU07OzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBuZXdHdWlkIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBFTm90aWZpY2F0aW9uQ29kZSB9IGZyb20gXCIuLi9lbnVtXCI7XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkl0ZW0gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY29kZTogRU5vdGlmaWNhdGlvbkNvZGU7XG4gIHBlcnNpc3RlbnQ6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTEFaWV9TRVJWSUNFX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFRhTm90aWZpY2F0aW9uU2VydmljZT4oXG4gIFwiVGFOb3RpZmljYXRpb25TZXJ2aWNlXCJcbik7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFRhTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHB1YmxpYyBpZCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgcHVibGljIG5ld05vdGlmaWNhdGlvbiQgPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb25JdGVtPigpO1xuXG4gIHB1YmxpYyByZW1vdmVOb3RpZmljYXRpb24kID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYWRkTm90aWZpY2F0aW9uKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBjb2RlOiBFTm90aWZpY2F0aW9uQ29kZSxcbiAgICBwZXJzaXN0ZW50PzogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCBpc1BlcnNpc3RlbnQgPVxuICAgICAgcGVyc2lzdGVudCAhPT0gdW5kZWZpbmVkID8gcGVyc2lzdGVudCA6IGNvZGUgPT09IEVOb3RpZmljYXRpb25Db2RlLmVycm9yO1xuXG4gICAgdGhpcy5uZXdOb3RpZmljYXRpb24kLm5leHQoe1xuICAgICAgaWQ6IG5ld0d1aWQoKSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBjb2RlLFxuICAgICAgcGVyc2lzdGVudDogaXNQZXJzaXN0ZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZU5vdGlmaWNhdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW1vdmVOb3RpZmljYXRpb24kLm5leHQoaWQpO1xuICB9XG59XG4iXX0=