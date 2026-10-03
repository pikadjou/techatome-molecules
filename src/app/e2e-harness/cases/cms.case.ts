import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { CmsComponent, TaCmsService } from "@ta/cms";
import { TENANT_CONFIG_TOKEN } from "@ta/server";
import { TaTestIdDirective } from "@ta/utils";

/** Contenu CMS factice (forme `Cms`) — aucun appel Strapi. */
const MOCK_CMS_CONTENT = {
  Title: "Titre CMS",
  Description: [
    {
      type: "paragraph",
      level: 1,
      children: [{ type: "text", text: "Contenu riche mocké.", bold: false, italic: false, underline: false }],
    },
  ],
  Tenant: "default",
  Type: "page",
};

/** TaCmsService factice : renvoie le contenu sans backend Strapi/Apollo. */
const MOCK_CMS_SERVICE = {
  cmsContents: { get$: () => of(MOCK_CMS_CONTENT), fetch: () => of(MOCK_CMS_CONTENT) },
  fetchCmsContents$: () => of(MOCK_CMS_CONTENT),
};

/**
 * Galerie « cms » @ta/cms — `ta-cms` monté avec un `TaCmsService` factice.
 * `ta-sale` non couvert : `TaSaleService` n'est pas exporté publiquement, donc
 * son token ne peut pas être surchargé par un consommateur.
 * Route: /e2e-harness/cms
 */
@Component({
  standalone: true,
  selector: "app-case-cms",
  imports: [CmsComponent, TaTestIdDirective],
  providers: [
    { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 1 } },
    { provide: TaCmsService, useValue: MOCK_CMS_SERVICE },
  ],
  template: ` <ta-cms taTestId="ta-cms" [contentType]="'page'"></ta-cms> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CmsCase {}
