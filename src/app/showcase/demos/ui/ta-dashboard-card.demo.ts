import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardSubtitleComponent, CardTitleComponent, DashboardCardComponent, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-dashboard-card-kpis",
  imports: [CardSubtitleComponent, CardTitleComponent, DashboardCardComponent, TextComponent],
  template: `
    <ta-dashboard-card icon="trending_up">
      <ta-card-title>Chiffre d'affaires</ta-card-title>
      <ta-card-subtitle>+12 % ce mois-ci</ta-card-subtitle>
      <ta-text size="sm">Comparé au mois précédent.</ta-text>
    </ta-dashboard-card>
    <ta-dashboard-card icon="group">
      <ta-card-title>Utilisateurs actifs</ta-card-title>
      <ta-card-subtitle>1 234 comptes</ta-card-subtitle>
    </ta-dashboard-card>
    <ta-dashboard-card icon="inventory_2">
      <ta-card-title>Commandes</ta-card-title>
      <ta-card-subtitle>56 en attente</ta-card-subtitle>
    </ta-dashboard-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDashboardCardKpisExample {}

export const DEMO: ComponentDemo = {
  id: "ta-dashboard-card",
  group: "Cartes",
  summary: "Carte indicateur : une icône Material obligatoire, un titre et un sous-titre projetés, un corps libre en dessous.",
  examples: [
    {
      title: "Trois indicateurs",
      description: "`icon` (obligatoire) choisit l'icône Material affichée en fond et en médaillon.",
      component: TaDashboardCardKpisExample,
    },
  ],
  notes:
    "Le titre et le sous-titre doivent être portés par des éléments `ta-card-title`/`ta-card-subtitle` : ce sont les sélecteurs de projection lus par `dashboard.component.html` (`<ng-content select=\"ta-card-title\">` / `select=\"ta-card-subtitle\"`). Tout autre contenu, y compris un `ta-text` en gras, tombe dans la zone libre du bas plutôt que dans l'emplacement stylé du titre — vérifié dans le template du composant, à la différence de la page showcase héritée (`ui-cards-lists.component.html`), qui y projetait directement des `ta-text`.",
};
