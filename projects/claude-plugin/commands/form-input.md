---
description: Assistant contextuel @ta/form-input — champs de saisie individuels ta-input-*
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-input — Assistant contextuel

Tu es un expert de la librairie `@ta/form-input` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/form-input`
**Import path** : `@ta/form-input`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/form/form-input/`

## Exports clés

### Composants layout

- `taInputLayoutComponent` — `ta-input-layout` : layout wrapper pour inputs
- `taInputErrorComponent` — `ta-input-error` : affichage des erreurs de validation
- `taInputContainerComponent` — `ta-input-container` : conteneur d'input
- `taLabelComponent` — `ta-label` : étiquette de champ

### Composant abstrait

- `AbstractInputComponent` — base pour créer des inputs personnalisés

### Composants d'input (depuis `lib/components/input/`)

Tous les types d'input correspondant aux modèles de `@ta/form-model` :

- Checkbox, Choices, ColorPicker, DatePicker, DynamicTranslation
- Dropdown, Dynamic, Email, Images, Label, Number, Panel, Password
- Phone, Radio, Schema, Slider, Switch, Textarea, Textbox, TimePicker
- Wysiswyg, Address, Upload, Translation, Culture, Component

### Services

- `InputsTranslationService` — service de traduction du module inputs

### Module

- `InputsModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Créer un input personnalisé

```typescript
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractInputComponent } from '@ta/form-input';
import { taInputLayoutComponent } from '@ta/form-input';

@Component({
  selector: 'ta-my-custom-input',
  standalone: true,
  imports: [taInputLayoutComponent],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCustomInputComponent),
    },
  ],
  template: `
    <ta-input-layout [field]="field" [formControl]="formControl">
      <input type="text" [formControl]="formControl" />
    </ta-input-layout>
  `,
})
export class MyCustomInputComponent extends AbstractInputComponent {}
```

### Utiliser le layout d'input directement

```typescript
import { taInputLayoutComponent, taInputErrorComponent } from '@ta/form-input';

@Component({
  standalone: true,
  imports: [taInputLayoutComponent, taInputErrorComponent],
  template: `
    <ta-input-layout [field]="myField">
      <input [formControl]="ctrl" />
      <ta-input-error [control]="ctrl" />
    </ta-input-layout>
  `
})
```

### Afficher les erreurs de validation

```typescript
import { taInputErrorComponent } from '@ta/form-input';

@Component({
  standalone: true,
  imports: [taInputErrorComponent],
  template: `
    <ta-input-error [control]="formControl" />
  `
})
```

## Conventions

- `AbstractInputComponent` doit être étendu pour tout nouvel input personnalisé
- Toujours implémenter `ControlValueAccessor` via `NG_VALUE_ACCESSOR`
- `taInputLayoutComponent` gère l'affichage du label, des erreurs et du wrapper
- `InputsModule` est deprecated — utiliser les composants standalone
- Les inputs sont compatibles avec Angular Reactive Forms

## Revue de code

- Vérifier que les inputs personnalisés étendent `AbstractInputComponent`
- Vérifier que `NG_VALUE_ACCESSOR` est fourni avec `forwardRef`
- Vérifier que `taInputLayoutComponent` est utilisé pour le wrapper
- S'assurer que `standalone: true` et les imports explicites
- Vérifier que les erreurs de validation sont affichées via `taInputErrorComponent`

## Ajout d'un nouveau type d'input dans @ta/form-input

1. Créer le modèle dans `@ta/form-model` d'abord
2. Créer le composant dans `projects/form/form-input/src/lib/components/input/`
3. Étendre `AbstractInputComponent`
4. Exporter depuis `projects/form/form-input/src/lib/components/input/public-api.ts`
5. Exporter depuis `projects/form/form-input/src/lib/components/public-api.ts`
