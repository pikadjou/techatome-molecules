import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { HandleComplexRequest, HandleSimpleRequest, TaBaseService, } from "@ta/server";
import { projectProps } from "./dto/project";
import { GET_LIGHT_PROJECTS, GET_MY_PROJECTS, GET_PROJECTS, GET_PROJECT_BY_ID, } from "./queries";
import * as i0 from "@angular/core";
const graphEndpoint = {
    clientName: "projectService",
    endpoint: "project",
};
export class TaProjectsService extends TaBaseService {
    constructor() {
        super();
        this._graphEndpoint = graphEndpoint;
        this.projects = new HandleSimpleRequest();
        this.project = new HandleComplexRequest();
        this.projectByContact = new HandleComplexRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint });
    }
    getProjectsLightInfo$(ids) {
        return this._graphService
            .fetchPagedQueryList(GET_LIGHT_PROJECTS(ids), "projects", graphEndpoint.clientName)
            .pipe(map((data) => data.items ?? []));
    }
    fetchProjectsByContact$(contactId) {
        return this.projectByContact.fetch(contactId, this._graphService
            .fetchPagedQueryList(GET_PROJECTS(`where: { contactId: { eq: "${contactId}" } }`, `
              ${projectProps.get("id")}
              ${projectProps.get("name")}
            `), "projects", graphEndpoint.clientName)
            .pipe(map((data) => data.items ?? [])));
    }
    fetchProjects$() {
        return this.projects.fetch(this._graphService
            .fetchPagedQueryList(GET_MY_PROJECTS(), "projects", graphEndpoint.clientName)
            .pipe(map((data) => data.items)));
    }
    fetchProject$(id) {
        return this.project.fetch(id, this._graphService.fetchQuery(GET_PROJECT_BY_ID(id), "projectById", graphEndpoint.clientName));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaProjectsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaProjectsService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaProjectsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcHJvamVjdHMvcHJvamVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsYUFBYSxHQUNkLE1BQU0sWUFBWSxDQUFDO0FBRXBCLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLFdBQVcsQ0FBQzs7QUFFbkIsTUFBTSxhQUFhLEdBQWtCO0lBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsUUFBUSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBT2xEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFQQSxtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBYSxDQUFDO1FBQ2hELFlBQU8sR0FBRyxJQUFJLG9CQUFvQixFQUFXLENBQUM7UUFFOUMscUJBQWdCLEdBQUcsSUFBSSxvQkFBb0IsRUFBYSxDQUFDO1FBSTlELEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUJBQXFCLENBQUMsR0FBYTtRQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ3RCLG1CQUFtQixDQUNsQixrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFDdkIsVUFBVSxFQUNWLGFBQWEsQ0FBQyxVQUFVLENBQ3pCO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxTQUFpQjtRQUM5QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQ2hDLFNBQVMsRUFDVCxJQUFJLENBQUMsYUFBYTthQUNmLG1CQUFtQixDQUNsQixZQUFZLENBQ1YsOEJBQThCLFNBQVMsT0FBTyxFQUM5QztnQkFDSSxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7YUFDM0IsQ0FDRixFQUNELFVBQVUsRUFDVixhQUFhLENBQUMsVUFBVSxDQUN6QjthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ3hCLElBQUksQ0FBQyxhQUFhO2FBQ2YsbUJBQW1CLENBQ2xCLGVBQWUsRUFBRSxFQUNqQixVQUFVLEVBQ1YsYUFBYSxDQUFDLFVBQVUsQ0FDekI7YUFDQSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFTSxhQUFhLENBQUMsRUFBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUN2QixFQUFFLEVBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQzNCLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUNyQixhQUFhLEVBQ2IsYUFBYSxDQUFDLFVBQVUsQ0FDekIsQ0FDRixDQUFDO0lBQ0osQ0FBQzsrR0E5RFUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQge1xuICBHcmFwaEVuZHBvaW50LFxuICBIYW5kbGVDb21wbGV4UmVxdWVzdCxcbiAgSGFuZGxlU2ltcGxlUmVxdWVzdCxcbiAgVGFCYXNlU2VydmljZSxcbn0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcblxuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdFByb3BzIH0gZnJvbSBcIi4vZHRvL3Byb2plY3RcIjtcbmltcG9ydCB7XG4gIEdFVF9MSUdIVF9QUk9KRUNUUyxcbiAgR0VUX01ZX1BST0pFQ1RTLFxuICBHRVRfUFJPSkVDVFMsXG4gIEdFVF9QUk9KRUNUX0JZX0lELFxufSBmcm9tIFwiLi9xdWVyaWVzXCI7XG5cbmNvbnN0IGdyYXBoRW5kcG9pbnQ6IEdyYXBoRW5kcG9pbnQgPSB7XG4gIGNsaWVudE5hbWU6IFwicHJvamVjdFNlcnZpY2VcIixcbiAgZW5kcG9pbnQ6IFwicHJvamVjdFwiLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFQcm9qZWN0c1NlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIF9ncmFwaEVuZHBvaW50ID0gZ3JhcGhFbmRwb2ludDtcbiAgcHVibGljIHByb2plY3RzID0gbmV3IEhhbmRsZVNpbXBsZVJlcXVlc3Q8UHJvamVjdFtdPigpO1xuICBwdWJsaWMgcHJvamVjdCA9IG5ldyBIYW5kbGVDb21wbGV4UmVxdWVzdDxQcm9qZWN0PigpO1xuXG4gIHB1YmxpYyBwcm9qZWN0QnlDb250YWN0ID0gbmV3IEhhbmRsZUNvbXBsZXhSZXF1ZXN0PFByb2plY3RbXT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHN1cGVyLnJlZ2lzdGVyUm91dGVzKHsgZ3JhcGhFbmRwb2ludDogZ3JhcGhFbmRwb2ludCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9qZWN0c0xpZ2h0SW5mbyQoaWRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgIC5mZXRjaFBhZ2VkUXVlcnlMaXN0PFByb2plY3Q+KFxuICAgICAgICBHRVRfTElHSFRfUFJPSkVDVFMoaWRzKSxcbiAgICAgICAgXCJwcm9qZWN0c1wiLFxuICAgICAgICBncmFwaEVuZHBvaW50LmNsaWVudE5hbWVcbiAgICAgIClcbiAgICAgIC5waXBlKG1hcCgoZGF0YSkgPT4gZGF0YS5pdGVtcyA/PyBbXSkpO1xuICB9XG5cbiAgcHVibGljIGZldGNoUHJvamVjdHNCeUNvbnRhY3QkKGNvbnRhY3RJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdEJ5Q29udGFjdC5mZXRjaChcbiAgICAgIGNvbnRhY3RJZCxcbiAgICAgIHRoaXMuX2dyYXBoU2VydmljZVxuICAgICAgICAuZmV0Y2hQYWdlZFF1ZXJ5TGlzdDxQcm9qZWN0PihcbiAgICAgICAgICBHRVRfUFJPSkVDVFMoXG4gICAgICAgICAgICBgd2hlcmU6IHsgY29udGFjdElkOiB7IGVxOiBcIiR7Y29udGFjdElkfVwiIH0gfWAsXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldChcImlkXCIpfVxuICAgICAgICAgICAgICAke3Byb2plY3RQcm9wcy5nZXQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgYFxuICAgICAgICAgICksXG4gICAgICAgICAgXCJwcm9qZWN0c1wiLFxuICAgICAgICAgIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKG1hcCgoZGF0YSkgPT4gZGF0YS5pdGVtcyA/PyBbXSkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFByb2plY3RzJCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5mZXRjaChcbiAgICAgIHRoaXMuX2dyYXBoU2VydmljZVxuICAgICAgICAuZmV0Y2hQYWdlZFF1ZXJ5TGlzdDxQcm9qZWN0PihcbiAgICAgICAgICBHRVRfTVlfUFJPSkVDVFMoKSxcbiAgICAgICAgICBcInByb2plY3RzXCIsXG4gICAgICAgICAgZ3JhcGhFbmRwb2ludC5jbGllbnROYW1lXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUobWFwKChkYXRhKSA9PiBkYXRhLml0ZW1zKSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZldGNoUHJvamVjdCQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnByb2plY3QuZmV0Y2goXG4gICAgICBpZCxcbiAgICAgIHRoaXMuX2dyYXBoU2VydmljZS5mZXRjaFF1ZXJ5PFByb2plY3Q+KFxuICAgICAgICBHRVRfUFJPSkVDVF9CWV9JRChpZCksXG4gICAgICAgIFwicHJvamVjdEJ5SWRcIixcbiAgICAgICAgZ3JhcGhFbmRwb2ludC5jbGllbnROYW1lXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19