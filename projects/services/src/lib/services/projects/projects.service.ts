import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { GraphEndpoint, HandleComplexRequest, HandleSimpleRequest, TaBaseService } from '@ta/server';

import { Project, projectProps } from './dto/project';
import { GET_LIGHT_PROJECTS, GET_MY_PROJECTS, GET_PROJECTS, GET_PROJECT_BY_ID } from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'projectService',
  endpoint: 'project',
};

@Injectable({
  providedIn: 'root',
})
export class TaProjectsService extends TaBaseService {
  protected _graphEndpoint = graphEndpoint;
  public projects = new HandleSimpleRequest<Project[]>();
  public project = new HandleComplexRequest<Project>();

  public projectByContact = new HandleComplexRequest<Project[]>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public getProjectsLightInfo$(ids: string[]) {
    return this._graphService
      .fetchPagedQueryList<Project>(GET_LIGHT_PROJECTS(ids), 'projects', graphEndpoint.clientName)
      .pipe(map(data => data.items ?? []));
  }

  public fetchProjectsByContact$(contactId: string) {
    return this.projectByContact.fetch(
      contactId,
      this._graphService
        .fetchPagedQueryList<Project>(
          GET_PROJECTS(
            `where: { contactId: { eq: "${contactId}" } }`,
            `
              ${projectProps.get('id')}
              ${projectProps.get('name')}
            `
          ),
          'projects',
          graphEndpoint.clientName
        )
        .pipe(map(data => data.items ?? []))
    );
  }

  public fetchProjects$() {
    return this.projects.fetch(
      this._graphService
        .fetchPagedQueryList<Project>(GET_MY_PROJECTS(), 'projects', graphEndpoint.clientName)
        .pipe(map(data => data.items))
    );
  }

  public fetchProject$(id: string) {
    return this.project.fetch(
      id,
      this._graphService.fetchQuery<Project>(GET_PROJECT_BY_ID(id), 'projectById', graphEndpoint.clientName)
    );
  }
}
