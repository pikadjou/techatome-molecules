---
description: Assistant contextuel @ta/form-model — InputBase, InputTextBox, InputChoices, InputDatePicker, InputPanel, InputUpload
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-model — Assistant contextuel

Tu es un expert de la librairie `@ta/form-model` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/form-model`
**Import path** : `@ta/form-model`
**Localisation** : `projects/form/form-model/`

## Exports clés

### Validators

- `SlugValidator` — validateur pour les slugs (format URL-friendly)
- `PhoneValidator` — validateur pour les numéros de téléphone

### Helpers

- `DateHelper` — helper pour la manipulation des dates dans les formulaires

### Modèles (`lib/models/`)

- Modèles de données pour les différents types d'inputs :
  - `BaseInput` — base pour tous les inputs
  - `CheckboxInput` — modèle checkbox
  - `ChoicesInput` — modèle choix multiples
  - `ColorPickerInput` — modèle sélecteur de couleur
  - `DatePickerInput` — modèle sélecteur de date
  - `DynamicTranslationInput` — modèle traduction dynamique
  - `DropdownInput` — modèle liste déroulante
  - `DynamicInput` — modèle input dynamique
  - `EmailInput` — modèle email
  - `ImagesInput` — modèle images
  - `LabelInput` — modèle label
  - `NumberInput` — modèle nombre
  - `PanelInput` — modèle panneau
  - `PasswordInput` — modèle mot de passe
  - `PhoneInput` — modèle téléphone
  - `RadioInput` — modèle radio
  - `SchemaInput` — modèle schéma
  - `SliderInput` — modèle curseur
  - `SwitchInput` — modèle interrupteur
  - `TextareaInput` — modèle zone de texte
  - `TextboxInput` — modèle champ texte
  - `TimePickerInput` — modèle sélecteur d'heure
  - `WysiswyInput` — modèle éditeur WYSIWYG
  - `AddressInput` — modèle adresse
  - `UploadInput` — modèle upload
  - `TranslationInput` — modèle traduction
  - `CultureInput` — modèle culture
  - `ComponentInput` — modèle composant personnalisé
- `InputFactory` — factory pour créer des instances d'input

## Patterns d'utilisation

### Créer un formulaire avec des modèles

```typescript
import { DropdownInput, InputFactory, TextboxInput } from '@ta/form-model';

const formConfig = {
  fields: [
    new TextboxInput({
      key: 'firstName',
      label: 'FIRST_NAME',
      required: true,
    }),
    new DropdownInput({
      key: 'status',
      label: 'STATUS',
      options: statusOptions,
    }),
  ],
};
```

### Utiliser les validators

```typescript
import { FormControl } from '@angular/forms';

import { PhoneValidator, SlugValidator } from '@ta/form-model';

const phoneControl = new FormControl('', [PhoneValidator()]);
const slugControl = new FormControl('', [SlugValidator()]);
```

### Utiliser DateHelper

```typescript
import { DateHelper } from '@ta/form-model';

const formattedDate = DateHelper.toApiFormat(new Date());
const parsedDate = DateHelper.fromApiFormat('2024-01-15');
```

### Factory pattern

```typescript
import { InputFactory } from '@ta/form-model';

const input = InputFactory.create('textbox', {
  key: 'name',
  label: 'NAME',
});
```

## Conventions

- Les modèles d'input définissent la configuration, pas le rendu (c'est `@ta/form-basic` et `@ta/form-input` qui font le rendu)
- Toutes les clés d'objet doivent être triées alphabétiquement
- Les `label` sont des clés de traduction, pas du texte direct
- Utiliser la factory `InputFactory` pour créer des inputs de manière programmatique

## Revue de code

- Vérifier que les `label` sont des clés de traduction
- Vérifier que les validators sont importés depuis `@ta/form-model` (pas recréés)
- Vérifier que les clés des objets de configuration sont triées
- S'assurer que `required` est explicitement défini si nécessaire

## Ajout d'un nouveau type d'input dans @ta/form-model

1. Créer le modèle dans `projects/form/form-model/src/lib/models/input/`
2. Exporter depuis `projects/form/form-model/src/lib/models/public-api.ts`
3. Enregistrer dans `InputFactory` si nécessaire
