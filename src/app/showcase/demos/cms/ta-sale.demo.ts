import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-sale",
  group: "CMS",
  summary:
    "Contenu Strapi « conditions de vente » avec case à cocher d'acceptation, émise sur `acceptation`.",
  examples: [],
  notRenderable: {
    reason:
      "SaleComponent injecte TaSaleService par le constructeur, mais ce service n'est réexporté nulle part : `services/public-api.ts` de @ta/cms n'exporte que TaCmsService. Un consommateur — la vitrine y compris — ne peut donc pas fournir `{ provide: TaSaleService, useValue: … }`, faute de pouvoir importer la classe à substituer ; seul le vrai service serait instancié, et il appelle un backend Strapi via TaBaseStrapiService. Le cas E2E documente la même limite : « ta-sale non couvert : TaSaleService n'est pas exporté publiquement » (src/app/e2e-harness/cases/cms.case.ts).",
    usage: `<ta-sale (acceptation)="this.onAcceptation($event)"></ta-sale>`,
  },
};
