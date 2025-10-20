import { Injectable, signal } from '@angular/core';
import { print } from 'graphql';
import * as i0 from "@angular/core";
export class TaServerErrorService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaServerErrorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQVNoQyxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CO1FBRk8sa0JBQWEsR0FBRyxNQUFNLENBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFVCxRQUFRLENBQUMsS0FBK0MsRUFBRSxLQUFrQjtRQUNqRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUM3RCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsS0FBSztZQUNMLGFBQWEsRUFBRyxLQUFLLENBQUMsWUFBa0MsQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUN0RSxDQUFDLENBQUM7SUFDTCxDQUFDOytHQVpVLG9CQUFvQjttSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcG9sbG9FcnJvciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2Vycm9ycyc7XHJcbmltcG9ydCB7IHByaW50IH0gZnJvbSAnZ3JhcGhxbCc7XHJcbmltcG9ydCB7IEdyYXBoUUxGb3JtYXR0ZWRFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xyXG5cclxuaW1wb3J0IHsgR3JhcGhNdXRhdGlvblBheWxvYWQsIEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSAnLi9ncmFwaHFsL3B1YmxpYy1hcGknO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VydmVyRXJyb3IgPSB7IHF1ZXJ5OiBzdHJpbmc7IHZhcmlhYmxlczogYW55OyBlcnJvcjogQXBvbGxvRXJyb3I7IGVycm9yc01lc3NhZ2U6IEdyYXBoUUxGb3JtYXR0ZWRFcnJvcltdIH07XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYVNlcnZlckVycm9yU2VydmljZSB7XHJcbiAgcHVibGljIG5vdGlmaWNhdGlvbnMgPSBzaWduYWw8U2VydmVyRXJyb3JbXT4oW10pO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHB1YmxpYyBhZGRFcnJvcihxdWVyeTogR3JhcGhRdWVyeVBheWxvYWQgfCBHcmFwaE11dGF0aW9uUGF5bG9hZCwgZXJyb3I6IEFwb2xsb0Vycm9yKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMoKS5wdXNoKHtcclxuICAgICAgcXVlcnk6IHByaW50KCdxdWVyeScgaW4gcXVlcnkgPyBxdWVyeS5xdWVyeSA6IHF1ZXJ5Lm11dGF0aW9uKSxcclxuICAgICAgdmFyaWFibGVzOiBxdWVyeS52YXJpYWJsZXMsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvcnNNZXNzYWdlOiAoZXJyb3IubmV0d29ya0Vycm9yIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5lcnJvci5lcnJvcnMsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19