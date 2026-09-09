import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BannerComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-banner-types",
  imports: [BannerComponent],
  template: `
    <ta-banner [inline]="true" type="default" message="Message par défaut"></ta-banner>
    <ta-banner [inline]="true" type="secondary" message="Message secondaire"></ta-banner>
    <ta-banner [inline]="true" type="success" message="Opération réussie"></ta-banner>
    <ta-banner [inline]="true" type="warning" message="Vérifiez cette information"></ta-banner>
    <ta-banner [inline]="true" type="alert" message="Une erreur est survenue"></ta-banner>
    <ta-banner [inline]="true" type="purple" message="Message purple"></ta-banner>
    <ta-banner [inline]="true" type="new" message="Nouveauté"></ta-banner>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBannerTypesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-banner",
  group: "Bases",
  summary: "Bandeau de message, décliné en sept intentions de couleur ; épinglé en haut du viewport hors du mode `inline`.",
  examples: [
    { title: "Types", layout: "stack", description: "Les sept valeurs de `type`, en mode `inline` (voir notes).", component: TaBannerTypesExample },
  ],
  notes:
    "Sans `inline` (sa valeur par défaut est `false`), `.banner` est en `position: fixed; top:0; left:0; right:0` (banner.component.scss) : le bandeau se colle en haut du viewport par-dessus le reste de la page, pas dans la carte de démonstration. Les exemples ci-dessus forcent donc `inline=true` pour rester lisibles dans la vitrine ; `inline=false` est l'usage réel pour une bannière globale d'application.",
};
