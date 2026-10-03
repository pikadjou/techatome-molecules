import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { BulletComponent } from "@ta/notification";
import { TaGraphService } from "@ta/server";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-bullet-count",
  imports: [BulletComponent],
  // `BulletComponent` s'appuie sur `TaNotificationDataService`, interne à
  // @ta/notification et non exporté par son `public-api.ts` : impossible de le
  // substituer depuis l'extérieur du paquet, contrairement à `TaCmsService` dans
  // la démo `ta-cms`. On mocke donc une couche plus bas, à la frontière publique
  // dont ce service dépend réellement : `TaGraphService` (@ta/server).
  // `registerGraphEndpoint` devient un no-op et `fetchPagedQueryList` renvoie
  // directement un total, sans appel réseau.
  providers: [
    {
      provide: TaGraphService,
      useValue: {
        registerGraphEndpoint: () => {},
        fetchPagedQueryList: () => of({ totalCount: 7 }),
      },
    },
  ],
  template: `<ta-notification-bullet></ta-notification-bullet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBulletCountExample {}

export const DEMO: ComponentDemo = {
  id: "ta-notification-bullet",
  group: "Notifications",
  summary: "Pastille numérique affichant un décompte de notifications, obtenu par une requête GraphQL comptée.",
  examples: [{ title: "Nombre affiché", component: TaNotificationBulletCountExample }],
  notes:
    "L'entrée `filters` (`NotificationFilter` : `projectId`, `isNew`, `take`) restreint le décompte à un projet ou un statut de lecture donné — elle ne change que la requête envoyée à `GET_NOTIFICATIONS_COUNT`, pas la façon dont le résultat est rendu, et n'est donc pas démontrée séparément ici.",
};
