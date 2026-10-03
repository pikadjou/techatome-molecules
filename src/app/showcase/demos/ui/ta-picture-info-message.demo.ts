import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaIconType } from "@ta/icons";
import { PictureInfoMessageComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-picture-info-message-with-icon",
  imports: [PictureInfoMessageComponent],
  template: `
    <ta-picture-info-message [icon]="this.TaIconType.NoResult" text="Aucun résultat pour cette recherche."></ta-picture-info-message>
    <ta-picture-info-message icon="info" iconSize="lg" text="Icône Material passée en chaîne : isFontIcon() la détecte via son typeof string."></ta-picture-info-message>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaPictureInfoMessageWithIconExample {
  readonly TaIconType = TaIconType;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-picture-info-message-fallback",
  imports: [PictureInfoMessageComponent],
  template: `
    <ta-picture-info-message text="Cette action est irréversible." type="warning"></ta-picture-info-message>
    <ta-picture-info-message text="Une erreur est survenue." type="danger"></ta-picture-info-message>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaPictureInfoMessageFallbackExample {}

export const DEMO: ComponentDemo = {
  id: "ta-picture-info-message",
  group: "Affichage",
  summary: "Message illustré par une icône locale ou Material, ou message typé (`ta-typed-message`) si aucune icône n'est fournie.",
  examples: [
    {
      title: "Avec icône",
      layout: "stack",
      description:
        "`icon` accepte un `TaIconType` (`isLocalIcon()`, rendu en grand par `ta-local-icon`) ou une chaîne libre (`isFontIcon()`, rendue par `ta-font-icon`). `type` est alors ignoré, non lu par ce chemin du template.",
      component: TaPictureInfoMessageWithIconExample,
    },
    {
      title: "Sans icône",
      layout: "stack",
      description: "Sans `icon`, le composant délègue entièrement à `ta-typed-message` avec `type` (`warning`/`danger` ici, `info` par défaut).",
      component: TaPictureInfoMessageFallbackExample,
    },
  ],
};
