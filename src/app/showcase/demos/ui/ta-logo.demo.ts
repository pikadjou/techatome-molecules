import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LogoComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-logo-colors",
  imports: [LogoComponent],
  template: `
    <div style="padding: 16px; background: #f2f2f2;">
      <ta-logo></ta-logo>
    </div>
    <div style="padding: 16px; background: #f2f2f2;">
      <ta-logo color="black"></ta-logo>
    </div>
    <div style="padding: 16px; background: #1a1a1a;">
      <ta-logo color="white"></ta-logo>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLogoColorsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-logo-type-and-width",
  imports: [LogoComponent],
  template: `
    <ta-logo type="oneline" [widthPercentage]="150"></ta-logo>
    <ta-logo type="oneline" [widthPercentage]="60"></ta-logo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLogoTypeAndWidthExample {}

export const DEMO: ComponentDemo = {
  id: "ta-logo",
  group: "Affichage",
  summary: "Logo Techatome, décliné en variantes de couleur et de mise en page, servi depuis `assets/partners/logo/`.",
  examples: [
    {
      title: "Couleurs",
      description:
        "`color` (`\"white\"` | `\"black\"` | non renseigné) choisit le fichier `logo[-color].png` (`getImagePath()`) ; le fond sombre ici rend la version blanche visible.",
      component: TaLogoColorsExample,
    },
    {
      title: "Variante « oneline » et largeur",
      description: "`type=\"oneline\"` prend `logo-oneline.png` ; `widthPercentage` (100 par défaut) fixe la largeur de l'image en `%`.",
      component: TaLogoTypeAndWidthExample,
    },
  ],
};
