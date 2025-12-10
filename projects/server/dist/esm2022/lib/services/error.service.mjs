import { Injectable, signal } from "@angular/core";
import { print } from "graphql";
import * as i0 from "@angular/core";
export class TaServerErrorService {
    constructor() {
        this.notifications = signal([]);
    }
    addError(query, error) {
        this.notifications().push({
            query: print("query" in query ? query.query : query.mutation),
            variables: query.variables,
            error,
            errorsMessage: error.networkError.error.errors,
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQWNoQyxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CO1FBRk8sa0JBQWEsR0FBRyxNQUFNLENBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFVCxRQUFRLENBQ2IsS0FBK0MsRUFDL0MsS0FBa0I7UUFFbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDN0QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLEtBQUs7WUFDTCxhQUFhLEVBQUcsS0FBSyxDQUFDLFlBQWtDLENBQUMsS0FBSyxDQUFDLE1BQU07U0FDdEUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FmVSxvQkFBb0I7bUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIHNpZ25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEFwb2xsb0Vycm9yIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2Vycm9yc1wiO1xuaW1wb3J0IHsgcHJpbnQgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgR3JhcGhRTEZvcm1hdHRlZEVycm9yIH0gZnJvbSBcImdyYXBocWxcIjtcblxuaW1wb3J0IHsgR3JhcGhNdXRhdGlvblBheWxvYWQsIEdyYXBoUXVlcnlQYXlsb2FkIH0gZnJvbSBcIi4vZ3JhcGhxbC9wdWJsaWMtYXBpXCI7XG5cbmV4cG9ydCB0eXBlIFNlcnZlckVycm9yID0ge1xuICBxdWVyeTogc3RyaW5nO1xuICB2YXJpYWJsZXM6IGFueTtcbiAgZXJyb3I6IEFwb2xsb0Vycm9yO1xuICBlcnJvcnNNZXNzYWdlOiBHcmFwaFFMRm9ybWF0dGVkRXJyb3JbXTtcbn07XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBUYVNlcnZlckVycm9yU2VydmljZSB7XG4gIHB1YmxpYyBub3RpZmljYXRpb25zID0gc2lnbmFsPFNlcnZlckVycm9yW10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFkZEVycm9yKFxuICAgIHF1ZXJ5OiBHcmFwaFF1ZXJ5UGF5bG9hZCB8IEdyYXBoTXV0YXRpb25QYXlsb2FkLFxuICAgIGVycm9yOiBBcG9sbG9FcnJvclxuICApIHtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMoKS5wdXNoKHtcbiAgICAgIHF1ZXJ5OiBwcmludChcInF1ZXJ5XCIgaW4gcXVlcnkgPyBxdWVyeS5xdWVyeSA6IHF1ZXJ5Lm11dGF0aW9uKSxcbiAgICAgIHZhcmlhYmxlczogcXVlcnkudmFyaWFibGVzLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvcnNNZXNzYWdlOiAoZXJyb3IubmV0d29ya0Vycm9yIGFzIEh0dHBFcnJvclJlc3BvbnNlKS5lcnJvci5lcnJvcnMsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==