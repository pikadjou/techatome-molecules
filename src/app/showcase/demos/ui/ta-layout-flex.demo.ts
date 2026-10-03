import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, LayoutFlexComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-flex-panels",
  imports: [LayoutFlexComponent, TitleComponent, TextComponent, ButtonComponent],
  template: `
    <ta-layout-flex [allowClose]="true">
      <div left class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Conversations</ta-title>
        <ta-text size="sm">Amélie Laurent</ta-text>
        <ta-text size="sm">Karim Haddad</ta-text>
        <ta-text size="sm">Sophie Meunier</ta-text>
      </div>
      <div center class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Échange avec Amélie Laurent</ta-title>
        <ta-text>Bonjour, où en est le dossier 4821 ?</ta-text>
        <ta-text>Il est prêt, je vous l'envoie cet après-midi.</ta-text>
      </div>
      <div right class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Détails</ta-title>
        <ta-text size="sm">Client depuis 2021</ta-text>
        <ta-button type="secondary" size="small">Voir la fiche</ta-button>
      </div>
    </ta-layout-flex>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutFlexPanelsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-flex",
  group: "Mise en page",
  summary: "Disposition à trois zones (gauche, centre, droite) repliables, chacune projetée via un attribut `left` / `center` / `right`.",
  examples: [
    {
      title: "Trois zones repliables (allowClose=true)",
      layout: "stack",
      description:
        "Bug de bibliothèque vérifié en conditions réelles (chargement de src/app/e2e-harness/cases/ui-layout.case.ts dans le navigateur) : le template de `LayoutFlexComponent` instancie chaque zone via `<ng-template [ngTemplateOutlet]=\"...\">`, mais `NgTemplateOutlet` est absent du tableau `imports` du composant (layout-flex.component.ts) — Angular lève `NG0303` pour les trois zones et **aucun contenu projeté (`left` / `center` / `right`) ne s'affiche**, quel que soit ce qu'on y place ci-dessus. Seuls le squelette à deux colonnes (`.main` / `.second`, bordures) et les boutons de bascule à droite de chaque zone (visibles avec `allowClose=true`, appelant `toggle()` qui ne dépend pas du template cassé) restent fonctionnels : cliquer une icône change bien de sens (flèche d'expansion / de réduction). Sous 1400px de large, `.center` passe sous `.left` (media query dans layout-flex.component.scss) ; sous 992px (`isLessThanLG$`), le composant réduit `view` à `['left']` seul à l'initialisation. Bug hors périmètre de cette vitrine, signalé ici plutôt que corrigé.",
      component: TaLayoutFlexPanelsExample,
    },
  ],
  notes:
    "`allowClose=false` (défaut) masque les boutons de bascule sans rien ajouter d'autre : avec le bug ci-dessus, la démo serait alors un simple squelette vide, moins informative que la variante `allowClose=true` retenue ici.",
};
