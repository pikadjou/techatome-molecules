import { ChangeDetectionStrategy, Component } from "@angular/core";

import { WrappedIconComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-wrapped-icon-types",
  imports: [WrappedIconComponent],
  template: `
    <ta-wrapped-icon type="default" icon="home"></ta-wrapped-icon>
    <ta-wrapped-icon type="secondary" icon="home"></ta-wrapped-icon>
    <ta-wrapped-icon type="success" icon="check"></ta-wrapped-icon>
    <ta-wrapped-icon type="warning" icon="warning"></ta-wrapped-icon>
    <ta-wrapped-icon type="alert" icon="error"></ta-wrapped-icon>
    <ta-wrapped-icon type="purple" icon="star"></ta-wrapped-icon>
    <ta-wrapped-icon type="new" icon="new_releases"></ta-wrapped-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWrappedIconTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-wrapped-icon-sizes",
  imports: [WrappedIconComponent],
  template: `
    <ta-wrapped-icon type="success" icon="check" size="xs"></ta-wrapped-icon>
    <ta-wrapped-icon type="success" icon="check" size="sm"></ta-wrapped-icon>
    <ta-wrapped-icon type="success" icon="check" size="md"></ta-wrapped-icon>
    <ta-wrapped-icon type="success" icon="check" size="lg"></ta-wrapped-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWrappedIconSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-wrapped-icon",
  group: "Affichage",
  summary: "Icône Material dans un fond coloré arrondi (`ColorType`), en quatre tailles.",
  examples: [
    {
      title: "Types",
      description:
        "Six des sept valeurs de `type` ont une classe `wrapped-icon-<type>` dédiée dans le SCSS ; `\"new\"` (dernier ici) n'en a pas et retombe donc sur le fond neutre du conteneur, sans couleur de fond ni de texte propre — vérifié dans `wrapped-icon.component.scss`.",
      component: TaWrappedIconTypesExample,
    },
    {
      title: "Tailles",
      description: "`xs`/`sm`/`lg` ont un padding et une échelle d'icône dédiés ; `md`, la valeur par défaut, retombe sur le padding de base du conteneur — aucune classe `.md` n'existe.",
      component: TaWrappedIconSizesExample,
    },
  ],
};
