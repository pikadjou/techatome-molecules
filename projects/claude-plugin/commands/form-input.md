---
description: Assistant contextuel @ta/form-input — catalogue compact + pointeurs vers references/form-input/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-input — Assistant contextuel

Tu es un expert de la librairie `@ta/form-input` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant d'input, composant layout, classe abstraite…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/form-input/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou le pattern d'extension.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/form-input`
- **Import path** : `@ta/form-input`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/form/form-input/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/form-input/<name>.md`.

### Composants layout

- `ta-input-layout` (`InputLayoutComponent`) — wrapper universel pour inputs (label + erreurs + conteneur).
- `ta-input-error` (`InputErrorComponent`) — affichage des messages d'erreur de validation.
- `ta-label` (`LabelComponent`) — étiquette de champ.

### Classe abstraite

- `TaAbstractInputComponent` — base obligatoire pour tout nouvel input personnalisé. Implémente `ControlValueAccessor`.

### Composants d'input (correspondant aux modèles de `@ta/form-model`)

- `ta-input-textbox` (`TextBoxComponent`) — champ texte.
- `ta-input-textarea` (`TextareaComponent`) — zone de texte.
- `ta-input-dropdown` (`DropdownComponent`) — liste déroulante.
- `ta-input-choices` (`InputChoicesComponent`) — choix multiples.
- `ta-input-checkbox` (`CheckboxComponent`) — case à cocher.
- `ta-input-radio` (`RadioComponent`) — bouton radio.
- `ta-input-date-picker` (`DatePickerComponent`) — sélecteur de date.
- `ta-input-time-picker` (`TimePickerComponent`) — sélecteur d'heure.
- `ta-input-slider` (`SliderComponent`) — curseur.
- `ta-input-toggle` (`ToggleComponent`) — toggle.
- `ta-input-switch` (`SwitchComponent`) — interrupteur.
- `ta-input-color-picker` (`ColorPickerComponent`) — sélecteur de couleur.
- `ta-input-rating` (`RatingComponent`) — notation par étoiles.
- `ta-input-phone` (`PhoneComponent`) — champ téléphone.
- `ta-input-search-field` (`SearchFieldComponent`) — champ de recherche.
- `ta-input-wysiswyg` (`WysiswygComponent`) — éditeur WYSIWYG.
- `ta-input-upload` (`UploadComponent`) — upload de fichier.
- `ta-input-image` (`InputImageComponent`) — upload d'image unique.
- `ta-input-images` (`InputImagesComponent`) — upload multi-images.
- `ta-input-logo` (`InputLogoComponent`) — upload de logo.
- `ta-input-schema` (`InputSchemaComponent`) — schéma dynamique.
- `ta-input-culture` (`CultureComponent`) — sélection de culture.
- `ta-input-component` (`ComponentComponent`) — composant personnalisé.
- `ta-input-label` (`LabelComponent`) — texte statique / titre dans formulaire.

### Services

- `InputsTranslationService` — service de traduction du module inputs.

## Conventions

- **Toujours étendre** `TaAbstractInputComponent` pour tout nouvel input personnalisé.
- Toujours implémenter `ControlValueAccessor` via `NG_VALUE_ACCESSOR` avec `forwardRef`.
- `ta-input-layout` gère l'affichage du label, des erreurs et du wrapper.
- Composants `standalone: true` — ne pas utiliser `InputsModule` (deprecated).
