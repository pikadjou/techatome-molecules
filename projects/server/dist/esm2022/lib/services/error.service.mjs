import { Injectable, signal } from '@angular/core';
import { print } from 'graphql';
import * as i0 from "@angular/core";
export class CamServerErrorService {
    constructor() {
        this.notifications = signal([]);
    }
    addError(query, error) {
        this.notifications().push({
            query: print('query' in query ? query.query : query.mutation),
            variables: query.variables,
            error,
            errorsMessage: error.networkError.error.errors,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamServerErrorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQVNoQyxNQUFNLE9BQU8scUJBQXFCO0lBR2hDO1FBRk8sa0JBQWEsR0FBRyxNQUFNLENBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFVCxRQUFRLENBQUMsS0FBK0MsRUFBRSxLQUFrQjtRQUNqRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUM3RCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSztZQUNMLGFBQWEsRUFBRyxLQUFLLENBQUMsWUFBa0MsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUN0RSxDQUFDLENBQUM7SUFDTCxDQUFDOytHQVpVLHFCQUFxQjttSEFBckIscUJBQXFCLGNBRnBCLE1BQU07OzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2Vycm9ycyc7XHJcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnZ3JhcGhxbCc7XHJcbmltcG9ydCB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xyXG5cclxuaW1wb3J0IHsgR3JhcGhNdXRhdGlvblBheWxvYWQsIEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSAnLi9ncmFwaHFsL3B1YmxpYy1hcGknO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VydmVyRXJyb3IgPSB7IHF1ZXJ5OiBzdHJpbmc7IHZhcmlhYmxlczogYW55OyBlcnJvcjogQXBvbGxvRXJyb3I7IGVycm9yc01lc3NhZ2U6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvcltdIH07XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYW1TZXJ2ZXJFcnJvclNlcnZpY2Uge1xyXG4gIHB1YmxpYyBub3RpZmljYXRpb25zID0gc2lnbmFsPFNlcnZlckVycm9yW10+KFtdKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgYWRkRXJyb3IocXVlcnk6IEdyYXBoUXVlcnlQYXlsb2FkIHwgR3JhcGhNdXRhdGlvblBheWxvYWQsIGVycm9yOiBBcG9sbG9FcnJvcikge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25zKCkucHVzaCh7XHJcbiAgICAgIHF1ZXJ5OiBwcmludCgncXVlcnknIGluIHF1ZXJ5ID8gcXVlcnkucXVlcnkgOiBxdWVyeS5tdXRhdGlvbiksXHJcbiAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JzTWVzc2FnZTogKGVycm9yLm5ldHdvcmtFcnJvciBhcyBIdHRwRXJyb3JSZXNwb25zZSkuZXJyb3IuZXJyb3JzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==