import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HandleComplexRequest, HandleSimpleRequest, TaBaseService } from '@ta/server';
import { projectProps } from './dto/project';
import { GET_LIGHT_PROJECTS, GET_MY_PROJECTS, GET_PROJECTS, GET_PROJECT_BY_ID } from './queries';
import * as i0 from "@angular/core";
const graphEndpoint = {
    clientName: 'projectService',
    endpoint: 'project',
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
            .fetchPagedQueryList(GET_LIGHT_PROJECTS(ids), 'projects', graphEndpoint.clientName)
            .pipe(map(data => data.items ?? []));
    }
    fetchProjectsByContact$(contactId) {
        return this.projectByContact.fetch(contactId, this._graphService
            .fetchPagedQueryList(GET_PROJECTS(`where: { contactId: { eq: "${contactId}" } }`, `
              ${projectProps.get('id')}
              ${projectProps.get('name')}
            `), 'projects', graphEndpoint.clientName)
            .pipe(map(data => data.items ?? [])));
    }
    fetchProjects$() {
        return this.projects.fetch(this._graphService
            .fetchPagedQueryList(GET_MY_PROJECTS(), 'projects', graphEndpoint.clientName)
            .pipe(map(data => data.items)));
    }
    fetchProject$(id) {
        return this.project.fetch(id, this._graphService.fetchQuery(GET_PROJECT_BY_ID(id), 'projectById', graphEndpoint.clientName));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaProjectsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvcHJvamVjdHMvcHJvamVjdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBTyxFQUFpQixvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckcsT0FBTyxFQUFXLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFakcsTUFBTSxhQUFhLEdBQWtCO0lBQ25DLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsUUFBUSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQztBQUtGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhO0lBT2xEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFQQSxtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxtQkFBbUIsRUFBYSxDQUFDO1FBQ2hELFlBQU8sR0FBRyxJQUFJLG9CQUFvQixFQUFXLENBQUM7UUFFOUMscUJBQWdCLEdBQUcsSUFBSSxvQkFBb0IsRUFBYSxDQUFDO1FBSTlELEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0scUJBQXFCLENBQUMsR0FBYTtRQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ3RCLG1CQUFtQixDQUFVLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQzNGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHVCQUF1QixDQUFDLFNBQWlCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FDaEMsU0FBUyxFQUNULElBQUksQ0FBQyxhQUFhO2FBQ2YsbUJBQW1CLENBQ2xCLFlBQVksQ0FDViw4QkFBOEIsU0FBUyxPQUFPLEVBQzlDO2dCQUNJLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUN0QixZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUMzQixDQUNGLEVBQ0QsVUFBVSxFQUNWLGFBQWEsQ0FBQyxVQUFVLENBQ3pCO2FBQ0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ3hCLElBQUksQ0FBQyxhQUFhO2FBQ2YsbUJBQW1CLENBQVUsZUFBZSxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDckYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVNLGFBQWEsQ0FBQyxFQUFVO1FBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ3ZCLEVBQUUsRUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBVSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUN2RyxDQUFDO0lBQ0osQ0FBQzsrR0FsRFUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEdyYXBoRW5kcG9pbnQsIEhhbmRsZUNvbXBsZXhSZXF1ZXN0LCBIYW5kbGVTaW1wbGVSZXF1ZXN0LCBUYUJhc2VTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RQcm9wcyB9IGZyb20gJy4vZHRvL3Byb2plY3QnO1xuaW1wb3J0IHsgR0VUX0xJR0hUX1BST0pFQ1RTLCBHRVRfTVlfUFJPSkVDVFMsIEdFVF9QUk9KRUNUUywgR0VUX1BST0pFQ1RfQllfSUQgfSBmcm9tICcuL3F1ZXJpZXMnO1xuXG5jb25zdCBncmFwaEVuZHBvaW50OiBHcmFwaEVuZHBvaW50ID0ge1xuICBjbGllbnROYW1lOiAncHJvamVjdFNlcnZpY2UnLFxuICBlbmRwb2ludDogJ3Byb2plY3QnLFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhUHJvamVjdHNTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIHByb3RlY3RlZCBfZ3JhcGhFbmRwb2ludCA9IGdyYXBoRW5kcG9pbnQ7XG4gIHB1YmxpYyBwcm9qZWN0cyA9IG5ldyBIYW5kbGVTaW1wbGVSZXF1ZXN0PFByb2plY3RbXT4oKTtcbiAgcHVibGljIHByb2plY3QgPSBuZXcgSGFuZGxlQ29tcGxleFJlcXVlc3Q8UHJvamVjdD4oKTtcblxuICBwdWJsaWMgcHJvamVjdEJ5Q29udGFjdCA9IG5ldyBIYW5kbGVDb21wbGV4UmVxdWVzdDxQcm9qZWN0W10+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBzdXBlci5yZWdpc3RlclJvdXRlcyh7IGdyYXBoRW5kcG9pbnQ6IGdyYXBoRW5kcG9pbnQgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0UHJvamVjdHNMaWdodEluZm8kKGlkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JhcGhTZXJ2aWNlXG4gICAgICAuZmV0Y2hQYWdlZFF1ZXJ5TGlzdDxQcm9qZWN0PihHRVRfTElHSFRfUFJPSkVDVFMoaWRzKSwgJ3Byb2plY3RzJywgZ3JhcGhFbmRwb2ludC5jbGllbnROYW1lKVxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5pdGVtcyA/PyBbXSkpO1xuICB9XG5cbiAgcHVibGljIGZldGNoUHJvamVjdHNCeUNvbnRhY3QkKGNvbnRhY3RJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdEJ5Q29udGFjdC5mZXRjaChcbiAgICAgIGNvbnRhY3RJZCxcbiAgICAgIHRoaXMuX2dyYXBoU2VydmljZVxuICAgICAgICAuZmV0Y2hQYWdlZFF1ZXJ5TGlzdDxQcm9qZWN0PihcbiAgICAgICAgICBHRVRfUFJPSkVDVFMoXG4gICAgICAgICAgICBgd2hlcmU6IHsgY29udGFjdElkOiB7IGVxOiBcIiR7Y29udGFjdElkfVwiIH0gfWAsXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICR7cHJvamVjdFByb3BzLmdldCgnaWQnKX1cbiAgICAgICAgICAgICAgJHtwcm9qZWN0UHJvcHMuZ2V0KCduYW1lJyl9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKSxcbiAgICAgICAgICAncHJvamVjdHMnLFxuICAgICAgICAgIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKG1hcChkYXRhID0+IGRhdGEuaXRlbXMgPz8gW10pKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hQcm9qZWN0cyQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmV0Y2goXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2VcbiAgICAgICAgLmZldGNoUGFnZWRRdWVyeUxpc3Q8UHJvamVjdD4oR0VUX01ZX1BST0pFQ1RTKCksICdwcm9qZWN0cycsIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZSlcbiAgICAgICAgLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5pdGVtcykpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFByb2plY3QkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0LmZldGNoKFxuICAgICAgaWQsXG4gICAgICB0aGlzLl9ncmFwaFNlcnZpY2UuZmV0Y2hRdWVyeTxQcm9qZWN0PihHRVRfUFJPSkVDVF9CWV9JRChpZCksICdwcm9qZWN0QnlJZCcsIGdyYXBoRW5kcG9pbnQuY2xpZW50TmFtZSlcbiAgICApO1xuICB9XG59XG4iXX0=