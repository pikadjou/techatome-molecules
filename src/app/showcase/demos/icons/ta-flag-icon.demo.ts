import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FlagIconComponent } from "@ta/icons";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-flag-icon-codes",
  imports: [FlagIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr"></ta-flag-icon>
      <ta-text size="sm">fr</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="en"></ta-flag-icon>
      <ta-text size="sm">en</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="nl"></ta-flag-icon>
      <ta-text size="sm">nl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="es"></ta-flag-icon>
      <ta-text size="sm">es</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="de"></ta-flag-icon>
      <ta-text size="sm">de</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="it"></ta-flag-icon>
      <ta-text size="sm">it</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="pt"></ta-flag-icon>
      <ta-text size="sm">pt</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFlagIconCodesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-flag-icon-sizes",
  imports: [FlagIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr" size="xs"></ta-flag-icon>
      <ta-text size="sm">xs (20px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr" size="sm"></ta-flag-icon>
      <ta-text size="sm">sm (24px, défaut)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr" size="md"></ta-flag-icon>
      <ta-text size="sm">md (32px)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr" size="lg"></ta-flag-icon>
      <ta-text size="sm">lg (48px)</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFlagIconSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-flag-icon-unknown-code",
  imports: [FlagIconComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="fr"></ta-flag-icon>
      <ta-text size="sm">code="fr"</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-flag-icon code="zz"></ta-flag-icon>
      <ta-text size="sm">code="zz" : rien ne s'affiche</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFlagIconUnknownCodeExample {}

export const DEMO: ComponentDemo = {
  id: "ta-flag-icon",
  group: "Icônes",
  summary: "Drapeau SVG intégré, pour sept codes de langue câblés en dur, en quatre tailles distinctes.",
  examples: [
    {
      title: "Drapeaux disponibles",
      description:
        "`code` est comparé en minuscules à une table `FLAG_SVGS` câblée en dur dans le composant. Ces sept codes en sont la totalité — il n'y en a pas d'autres.",
      component: TaFlagIconCodesExample,
    },
    {
      title: "Tailles",
      description:
        "`size` accepte les sept valeurs de `TaSizes`, mais seules `xs`, `sm`, `md` et `lg` ont une largeur dédiée dans la table interne (`SIZE_MAP`) ; `xl`, `xxl` et `big` retombent sur 24px, comme `sm`.",
      component: TaFlagIconSizesExample,
    },
    {
      title: "Code non reconnu",
      description:
        "Un code sans correspondance ne lève pas d'erreur : le `computed` `svgContent` vaut `null` et le `@if` du template ne rend rien — la seconde case est vide par construction, pas cassée.",
      component: TaFlagIconUnknownCodeExample,
    },
  ],
};
