import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ExpandableTextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-expandable-text-short",
  imports: [ExpandableTextComponent],
  template: `
    <ta-expandable-text [height]="100" style="width: 240px">
      Un texte court, dont la hauteur réelle reste sous les 100px imposés par height.
    </ta-expandable-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaExpandableTextShortExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-expandable-text-long",
  imports: [ExpandableTextComponent],
  template: `
    <ta-expandable-text [height]="60" style="width: 240px">
      Un texte nettement plus long que les 60px de height autorisés : sa hauteur réelle
      (mesurée sur l'élément projeté) dépasse ce seuil, hasTooBigText devient vrai et le
      bouton de bascule apparaît pour déplier ou replier le contenu.
    </ta-expandable-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaExpandableTextLongExample {}

export const DEMO: ComponentDemo = {
  id: "ta-expandable-text",
  group: "Bases",
  summary: "Bloc de texte projeté, tronqué à `height` pixels avec un bouton de bascule quand le contenu dépasse.",
  examples: [
    {
      title: "Texte court",
      description: "Le contenu projeté tient sous `height` : `hasTooBigText` est faux, aucun bouton de bascule n'apparaît.",
      component: TaExpandableTextShortExample,
    },
    {
      title: "Texte long",
      description: "Le contenu dépasse `height` : le bouton bascule entre replié (hauteur fixe, ombre portée) et déplié (`showFullText`, hauteur `auto`).",
      component: TaExpandableTextLongExample,
    },
  ],
  notes:
    "Le libellé du bouton vient des clés de traduction `ui.expandabletext.seemore` / `.seeless` — absentes de `projects/ui/src/i18n/{en,fr}.json` : `ngx-translate` retombe sur la clé brute, affichée telle quelle plutôt qu'un texte traduit. Défaut de la bibliothèque, hors périmètre de cette vitrine.",
};
