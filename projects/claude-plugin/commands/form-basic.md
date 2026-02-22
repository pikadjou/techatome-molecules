---
description: Assistant contextuel @ta/form-basic — ta-form, FormComponent, AbstractPanelFormLayout
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-basic — Assistant contextuel

Tu es un expert de la librairie `@ta/form-basic` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/form-basic`
**Import path** : `@ta/form-basic`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/form/form-basic/`

## Exports clés

### Composants standalone

- `taFormComponent` — `ta-form` : composant de formulaire principal
- `taInputsComponent` — `ta-inputs` : rendu d'un ensemble d'inputs
- `taEditFieldComponent` — `ta-edit-field` : champ éditable inline

### Composants input (sous-composants)

- `taInputDynamicComponent` — rendu dynamique d'un input selon son type
- `taInputPanelComponent` — input dans un panneau
- `taInputTranslationComponent` — input de traduction

### Services

- `FormTranslationService` — service de traduction du module form

### Module

- `FormModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Formulaire de base

```typescript
import { taFormComponent } from '@ta/form-basic';
import { DropdownInput, TextboxInput } from '@ta/form-model';

@Component({
  standalone: true,
  imports: [taFormComponent],
  template: ` <ta-form [fields]="fields" [value]="entity" (submitted)="onSubmit($event)" /> `,
})
export class MonFormComponent {
  fields = [
    new TextboxInput({ key: 'name', label: 'NAME', required: true }),
    new DropdownInput({ key: 'status', label: 'STATUS', options: [] }),
  ];

  entity = { name: '', status: null };

  onSubmit(value: unknown) {
    // traiter les données
  }
}
```

### EditField pour édition inline

```typescript
import { taEditFieldComponent } from '@ta/form-basic';
import { TextboxInput } from '@ta/form-model';

@Component({
  standalone: true,
  imports: [taEditFieldComponent],
  template: ` <ta-edit-field [field]="nameField" [value]="entity.name" (changed)="onNameChange($event)" /> `,
})
export class InlineEditComponent {
  nameField = new TextboxInput({ key: 'name', label: 'NAME' });
}
```

### Rendu dynamique d'inputs

```typescript
import { taInputsComponent } from '@ta/form-basic';

@Component({
  standalone: true,
  imports: [taInputsComponent],
  template: `
    <ta-inputs [fields]="fields" [formGroup]="form" />
  `
})
```

## Conventions

- `taFormComponent` gère le `FormGroup` Angular en interne
- Les modèles d'input viennent de `@ta/form-model`
- Utiliser `taEditFieldComponent` pour l'édition inline (sans formulaire complet)
- `FormModule` est deprecated — utiliser les composants standalone
- Les labels sont des clés de traduction

## Revue de code

- Vérifier que les modèles d'input viennent de `@ta/form-model`
- Vérifier que les labels sont des clés de traduction (pas de texte hardcodé)
- S'assurer que `standalone: true` et que les imports sont explicites
- Vérifier les événements de sortie (`submitted`, `changed`) pour l'intégration

## Ajout d'un nouveau composant dans @ta/form-basic

1. Créer dans `projects/form/form-basic/src/lib/components/`
2. Exporter depuis `projects/form/form-basic/src/lib/components/public-api.ts`
3. S'assurer que `standalone: true`
