import { Injectable } from "@angular/core";

import { map, of, switchMap } from "rxjs";

import { GraphEndpoint, HandleComplexRequest, TaBaseService } from "@ta/server";
import { getUniqueArray } from "@ta/utils";

import { NotificationDto } from "./dto/notification";
import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_COUNT,
  NotificationFilter,
  READ_NOTIFICATION,
} from "./queries";
import { TaNotificationSharedService } from "./shared.service";

const graphEndpoint: GraphEndpoint = {
  clientName: "notificationService",
  endpoint: "notification",
};

@Injectable({
  providedIn: "root",
})
export class TaNotificationDataService extends TaBaseService {
  public list = new HandleComplexRequest<NotificationDto[]>();

  public count = new HandleComplexRequest<number>();

  constructor(private _sharedService: TaNotificationSharedService) {
    super();

    this._graphService.registerGraphEndpoint(graphEndpoint);
  }

  public fetchNotifications$(filters: NotificationFilter) {
    return this.list.fetch(
      this.computeKey(filters),
      this._graphService
        .fetchPagedQueryList<NotificationDto>(
          GET_NOTIFICATIONS(filters),
          "notifications",
          graphEndpoint.clientName
        )
        .pipe(
          map((data) => data.items ?? []),
          switchMap((entities) => {
            if (!this._sharedService.getProjects$) {
              return of(entities);
            }
            return this._sharedService
              .getProjects$(
                getUniqueArray(entities.map((entity) => entity.projectId))
              )
              .pipe(
                map((projects) =>
                  entities.map((entity) => ({
                    ...entity,
                    ...{
                      project: projects.find(
                        (project) => project.id === entity.projectId
                      ),
                    },
                  }))
                )
              );
          })
        )
    );
  }

  public fetchNumberOfNotifications$(filters: NotificationFilter) {
    return this.count.fetch(
      this.computeKey(filters),
      this._graphService
        .fetchPagedQueryList(
          GET_NOTIFICATIONS_COUNT(filters),
          "notifications",
          graphEndpoint.clientName
        )
        .pipe(map((data) => data.totalCount))
    );
  }

  public isRead$(id: string) {
    return this._graphService.mutate<boolean>(
      READ_NOTIFICATION(id),
      "notificationRead",
      graphEndpoint.clientName
    );
  }

  public computeKey(filters?: NotificationFilter) {
    if (!filters) {
      return "all";
    }

    return `${filters.projectId}-${filters.isNew}-${filters.take}`;
  }
}
