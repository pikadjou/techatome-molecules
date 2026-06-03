---
description: Assistant contextuel @ta/form-model — catalogue compact + pointeurs vers references/form-model/inputs/<name>.md et references/form-model/validators/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-model — Assistant contextuel

Tu es un expert de la librairie `@ta/form-model` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (modèle d'input, validator, helper…).
2. **Lis la fiche de référence** via `Read` :
   - Inputs : `references/form-model/inputs/<name>.md`
   - Validators : `references/form-model/validators/<name>.md`
3. **Réponds à partir du contenu lu** — ne **devine pas** les propriétés ou constructeurs des modèles.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/form-model`
- **Import path** : `@ta/form-model`
- **Localisation** : `projects/form/form-model/`

## Catalogue

### Modèles d'inputs (base : `references/form-model/inputs/`)

- `InputBase<T>` — classe de base pour tous les inputs.
- `InputTextBox` — champ texte simple.
- `InputTextarea` — zone de texte multilignes.
- `InputEmail` — champ email.
- `InputPassword` — champ mot de passe.
- `InputPhone` — champ téléphone.
- `InputNumber` — champ numérique.
- `InputDropdown` — liste déroulante.
- `InputChoices` — choix multiples (checkbox/radio group).
- `InputCheckBox` — case à cocher unique.
- `InputRadio` — bouton radio.
- `InputDatePicker` — sélecteur de date.
- `InputTimePicker` — sélecteur d'heure.
- `InputSlider` — curseur de valeur.
- `InputSwitch` — interrupteur on/off.
- `InputColorPicker` — sélecteur de couleur.
- `InputRating` — notation par étoiles.
- `InputUpload` — upload de fichier.
- `InputImages` — upload multiple d'images.
- `InputLogo` — upload de logo.
- `InputWysiswyg` — éditeur WYSIWYG.
- `InputSchema` — schéma dynamique.
- `InputAddress` — adresse postale.
- `InputCulture` — sélection de culture/langue.
- `InputComponent` — composant personnalisé injecté.
- `InputPanel` — groupe/panneau conteneur d'autres inputs.
- `InputLabel` — texte statique ou titre dans le formulaire (props : `icon?`, `level?: 1|2|3|4|5|6`).
- `InputDynamic` — input dynamique.
- `InputTranslation` — champ de traduction multilingue.

### Validators (`references/form-model/validators/`)

- `phoneValidator()` — validation numéro de téléphone.
- `slugValidator()` — validation slug (format URL-friendly).

### Helpers

- `DateHelper` — manipulation des dates dans les formulaires (`toApiFormat`, `fromApiFormat`).
- `InputFactory` — factory pour créer des instances d'input de manière programmatique.

## Conventions

- Les `label` sont des **clés de traduction**, pas du texte direct.
- Les clés d'objets doivent être triées alphabétiquement (`sort-keys`).
- Les modèles définissent la **configuration**, pas le rendu (rendu = `@ta/form-input` + `@ta/form-basic`).
- `InputPanel` pour grouper avec `containerClass: ['highlight-title', 'with-separator']`.
