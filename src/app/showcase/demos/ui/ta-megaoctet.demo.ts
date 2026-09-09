import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MegaoctetComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-megaoctet-sizes",
  imports: [MegaoctetComponent],
  template: `
    <ta-megaoctet [octet]="900"></ta-megaoctet>
    <ta-megaoctet [octet]="1048576"></ta-megaoctet>
    <ta-megaoctet [octet]="4404019200" [icon]="true"></ta-megaoctet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMegaoctetSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-megaoctet",
  group: "Affichage",
  summary: "Taille de fichier convertie en mégaoctets (`octetsToMo`), toujours affichée avec le suffixe « MB ».",
  examples: [
    {
      title: "Petit fichier, un mégaoctet, un très gros fichier",
      description:
        "`megaoctet` arrondit `octet / (1024*1024)` à deux décimales (`roundToDecimal`, @ta/utils). 900 octets arrondit à `0` : le composant affiche `0 MB`, pas une unité plus petite (Ko). À l'autre extrême, 4404019200 octets (~4,1 Go) donnent exactement `4200 MB` — le libellé reste `MB` quelle que soit la magnitude, `ui.megaoctet` (`\"{{size}} MB\"` dans `projects/ui/src/i18n/fr.json`) n'ayant pas de variante Ko/Go. `icon` (dernier exemple) ajoute un pictogramme `database` devant le texte.",
      component: TaMegaoctetSizesExample,
    },
  ],
};
