import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild, signal } from "@angular/core";

import { ComponentSelectorModal } from "@ta/form-input";
import { InputComponent, TypeComponentInputToken } from "@ta/form-model";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-component-selector-modal-basic",
  imports: [ComponentSelectorModal, ButtonComponent],
  template: `
    <ta-button (action)="this.isOpen.set(true)">Choisir une couleur</ta-button>
    <ta-component-selector-modal
      [open]="this.isOpen()"
      [inputData]="this.model"
      (closeEvent)="this.isOpen.set(false)"
    ></ta-component-selector-modal>
    <ng-template #picker let-selectedValue$="selectedValue$">
      <div class="flex-column g-space-sm p-space-md">
        @for (option of this.options; track option) {
          <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
        }
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaComponentSelectorModalBasicExample implements AfterViewInit {
  @ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

  readonly options = ["Rouge", "Vert", "Bleu"];

  isOpen = signal(false);
  model = new InputComponent({ key: "color", label: "Couleur" });

  ngAfterViewInit(): void {
    this.model.template = this._picker;
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-component-selector-modal",
  group: "Avancé",
  summary:
    "Modale générique qui projette le `TemplateRef` porté par un modèle `InputComponent` ; c'est elle que `ta-input-component` ouvre en interne, mais elle se pilote aussi seule via `open`/`inputData`/`closeEvent`.",
  examples: [
    {
      title: "Sélection dans une modale",
      description:
        "`select(value)` pousse `value` dans `inputData().selectedValue$` — ce qui met à jour `model.value`, via l'abonnement fait dans le constructeur d'`InputComponent` — puis émet `closeEvent`.",
      component: TaComponentSelectorModalBasicExample,
    },
  ],
  notes:
    "Utilisée seule, hors de `ta-input-component`, cette modale s'ouvre sur n'importe quel déclencheur — ici un bouton — plutôt qu'au clic sur l'icône d'un champ.",
};
