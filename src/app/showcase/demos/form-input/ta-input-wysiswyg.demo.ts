import { ChangeDetectionStrategy, Component } from "@angular/core";

import { WysiswygComponent } from "@ta/form-input";
import { InputWysiswyg } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-wysiswyg-empty",
  imports: [WysiswygComponent],
  template: ` <ta-input-wysiswyg [input]="this.model" [standalone]="true"></ta-input-wysiswyg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputWysiswygEmptyExample {
  model = new InputWysiswyg({ key: "content", label: "Contenu", placeholder: "Rédigez votre article…" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-wysiswyg-initial",
  imports: [WysiswygComponent],
  template: ` <ta-input-wysiswyg [input]="this.model" [standalone]="true"></ta-input-wysiswyg> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputWysiswygInitialExample {
  model = new InputWysiswyg({
    key: "content-existing",
    label: "Contenu existant",
    value: [
      { id: "h1", type: "header", data: { text: "Article d'exemple", level: 2 } },
      { id: "p1", type: "paragraph", data: { text: "Ce bloc initial vient de l'option `value` du modèle." } },
    ],
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-wysiswyg",
  group: "Média",
  summary: "Éditeur de contenu riche (EditorJS), enveloppé dans un modèle de formulaire — voir `ta-cms-editor-input` pour le composant sous-jacent.",
  examples: [
    { title: "Vide", layout: "stack", component: TaInputWysiswygEmptyExample },
    { title: "Avec contenu initial", layout: "stack", component: TaInputWysiswygInitialExample },
  ],
  notes:
    "Le composant sauvegarde automatiquement à chaque modification (`ta-cms-editor-input` monté avec `[saveOnChange]=\"true\"`, événement `(saved)` relié à `set()`) : il n'y a pas de bouton « Enregistrer » séparé. La méthode publique `clear()` (qui vide `input.value`) n'est câblée à aucun contrôle du template actuel — elle n'a donc aucun déclencheur visible dans ces démos, vérifié dans `wysiswyg.component.html`.",
};
