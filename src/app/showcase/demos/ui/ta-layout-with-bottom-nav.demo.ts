import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, LayoutNavComponent, LayoutWithBottomNavComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-with-bottom-nav-working",
  imports: [LayoutWithBottomNavComponent, LayoutNavComponent, TitleComponent, TextComponent, ButtonComponent],
  template: `
    <ta-layout-with-bottom-nav type="default">
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="3">Fil d'actualité</ta-title>
        <ta-text>Contenu principal de la page.</ta-text>
      </div>

      <ta-layout-nav>
        <div class="flex-column g-space-sm p-space-sm">
          <ta-button type="tertiary" size="small">Accueil</ta-button>
          <ta-button type="tertiary" size="small">Recherche</ta-button>
          <ta-button type="tertiary" size="small">Profil</ta-button>
        </div>
      </ta-layout-nav>
    </ta-layout-with-bottom-nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutWithBottomNavWorkingExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-with-bottom-nav",
  group: "Mise en page",
  summary: "Page avec une navigation dédiée (`ta-layout-nav` projeté par sélecteur) positionnée en bas sur mobile, en rail latéral sur desktop.",
  examples: [
    {
      title: "Contenu et navigation projetés",
      layout: "stack",
      description:
        "`type` est un input requis mais n'est référencé ni dans le template ni dans la logique du composant (vérifié dans layout-with-bottom-nav.component.ts/.html) : il n'a aucun effet sur le rendu ci-dessous. Vérifié dans layout-with-bottom-nav.component.scss : sous 576px, `.bottom-nav-container` passe en `position: fixed`, pleine largeur, collée en bas — le comportement « barre du bas » qui donne son nom au composant. À partir de 576px, elle devient `position: sticky`, `order: 1` **avant** le contenu (`order: 2`) dans une disposition en colonne, avec une largeur fixe de 100px (220px à partir de 992px) : sur les largeurs de bureau habituelles de cette vitrine, elle apparaît donc comme un rail étroit au-dessus du contenu plutôt qu'en bas — d'où la disposition verticale des boutons ci-dessus, pensée pour cet espace réduit.",
      component: TaLayoutWithBottomNavWorkingExample,
    },
  ],
};
