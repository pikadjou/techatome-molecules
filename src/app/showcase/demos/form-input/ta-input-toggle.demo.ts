import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToggleComponent } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';

import { ComponentDemo } from '../../demo.types';

@Component({
  standalone: true,
  selector: 'app-ex-ta-input-toggle-states',
  imports: [ToggleComponent],
  template: `
    <ta-input-toggle [input]="this.on" [standalone]="true"></ta-input-toggle>
    <ta-input-toggle [input]="this.off" [standalone]="true"></ta-input-toggle>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputToggleStatesExample {
  // `InputCheckBox({ toggle: true })` positionne `controlType` sur `'toggle'` :
  // c'est ce que fait `<ta-inputs>` pour choisir ce composant plutôt que la case
  // à cocher classique.
  on = new InputCheckBox({ key: 'notifications-on', label: 'Notifications', toggle: true, value: true });
  off = new InputCheckBox({ key: 'notifications-off', label: 'Notifications', toggle: true, value: false });
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-input-toggle-disabled',
  imports: [ToggleComponent],
  template: ` <ta-input-toggle [input]="this.model" [standalone]="true"></ta-input-toggle> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputToggleDisabledExample {
  model = new InputCheckBox({ key: 'toggle-disabled', label: 'Verrouillé', toggle: true, value: true, disabled: true });
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-input-toggle-state-labels',
  imports: [ToggleComponent],
  template: ` <ta-input-toggle [input]="this.model" [standalone]="true"></ta-input-toggle> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputToggleStateLabelsExample {
  model = new InputCheckBox({
    key: 'toggle-visibility',
    label: 'Adresse e-mail',
    offLabel: 'Privé',
    onLabel: 'Public',
    toggle: true,
    value: true,
  });
}

export const DEMO: ComponentDemo = {
  id: 'ta-input-toggle',
  group: 'Sélection',
  summary: 'Interrupteur booléen, piloté par un `InputCheckBox` construit avec `toggle: true`.',
  examples: [
    { title: 'États', component: TaInputToggleStatesExample },
    {
      title: 'Désactivé',
      description:
        "L'attribut `disabled` natif est posé sur la case à cocher sous-jacente : un clic ne déclenche aucun événement.",
      component: TaInputToggleDisabledExample,
    },
    {
      title: 'États nommés',
      description:
        "`onLabel` / `offLabel` (clés de traduction) nomment la position courante à côté de la glissière — le nom change avec elle, et passe au vert une fois ouverte. À réserver aux réglages où se tromper coûte cher : ce qui est publié, ce qui est notifié. Sans ces deux options, rien ne s'affiche et l'interrupteur reste tel quel.",
      component: TaInputToggleStateLabelsExample,
    },
  ],
};
