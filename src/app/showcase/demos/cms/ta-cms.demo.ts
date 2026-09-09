import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NEVER, of, throwError } from "rxjs";

import { CmsComponent, TaCmsService } from "@ta/cms";
import { TENANT_CONFIG_TOKEN } from "@ta/server";

import { ComponentDemo } from "../../demo.types";

/**
 * Contenu Strapi factice, au format lu par `ta-rich-text` (voir
 * `projects/cms/.../dto/types/rich-text.ts`).
 */
const MOCK_CONTENT = {
  Title: "Politique de confidentialité",
  Description: [
    {
      type: "heading",
      level: 2,
      children: [{ type: "text", text: "Vos données", bold: false, italic: false, underline: false }],
    },
    {
      type: "paragraph",
      level: 1,
      children: [
        { type: "text", text: "Ce contenu est ", bold: false, italic: false, underline: false },
        { type: "text", text: "géré depuis Strapi", bold: true, italic: false, underline: false },
        { type: "text", text: " et injecté ici sans appel réseau.", bold: false, italic: false, underline: false },
      ],
    },
  ],
  Tenant: "default",
  Type: "page",
};

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-loaded",
  imports: [CmsComponent],
  // `TaCmsService` n'est pas exporté avec un moyen prévu de le mocker autrement
  // qu'en substituant le jeton : c'est ce que fait aussi le cas E2E `cms.case.ts`.
  providers: [
    { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 1 } },
    {
      provide: TaCmsService,
      useValue: {
        cmsContents: { get$: () => of(MOCK_CONTENT) },
        fetchCmsContents$: () => of(MOCK_CONTENT),
      },
    },
  ],
  template: ` <ta-cms [contentType]="'privacy-policy'"></ta-cms> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsLoadedExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-loading",
  imports: [CmsComponent],
  providers: [
    { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 1 } },
    {
      provide: TaCmsService,
      useValue: {
        // Le `@if` englobant du template de `ta-cms` masque tout le composant
        // (loader compris) tant que `get$` n'a rien émis de véridique : il faut
        // donc lui donner un contenu, puis ne jamais terminer `fetchCmsContents$`
        // pour que `requestState` reste en chargement.
        cmsContents: { get$: () => of(MOCK_CONTENT) },
        fetchCmsContents$: () => NEVER,
      },
    },
  ],
  template: ` <ta-cms [contentType]="'privacy-policy'"></ta-cms> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsLoadingExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-error",
  imports: [CmsComponent],
  providers: [
    { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 1 } },
    {
      provide: TaCmsService,
      useValue: {
        cmsContents: { get$: () => of(MOCK_CONTENT) },
        fetchCmsContents$: () => throwError(() => ({ status: 500, statusText: "Erreur serveur" })),
      },
    },
  ],
  template: ` <ta-cms [contentType]="'privacy-policy'"></ta-cms> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsErrorExample {}

export const DEMO: ComponentDemo = {
  id: "ta-cms",
  group: "CMS",
  summary:
    "Contenu Strapi identifié par `contentType`, avec chargement, erreur et rendu enchaînés via `RequestState`.",
  examples: [
    { title: "Contenu chargé", component: TaCmsLoadedExample },
    { title: "Chargement", component: TaCmsLoadingExample },
    {
      title: "Erreur",
      description: "Le service échoue à la récupération ; `ta-error` intercepte le rendu avant le contenu.",
      component: TaCmsErrorExample,
    },
  ],
  notes:
    "`CmsComponent` dépend de `TaCmsService` et du jeton `TENANT_CONFIG_TOKEN` (@ta/server) pour retrouver le tenant courant. Ces trois exemples substituent `TaCmsService` par un service factice — aucun appel Strapi n'est fait — selon le même principe que le cas E2E `src/app/e2e-harness/cases/cms.case.ts`.",
};
