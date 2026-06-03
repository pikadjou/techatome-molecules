---
description: Assistant contextuel @ta/form-basic — catalogue compact + pointeurs vers references/form-basic/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/form-basic — Assistant contextuel

Tu es un expert de la librairie `@ta/form-basic` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant de formulaire, service…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/form-basic/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/form-basic`
- **Import path** : `@ta/form-basic`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/form/form-basic/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/form-basic/<name>.md`.

### Composants principaux

- `ta-form` (`FormComponent`) — composant de formulaire principal. Gère le `FormGroup` Angular en interne. Outputs : `(valid)`, `(submitted)`.
- `ta-inputs` (`InputsComponent`) — rendu d'un ensemble d'inputs depuis un tableau `InputBase[]`. Peut s'utiliser sans `ta-form`.
- `ta-edit-field` (`EditFieldComponent`) — champ éditable inline (sans formulaire complet). Output : `(changed)`.

### Composants internes (sous-composants)

- `InputDynamicComponent` — rendu dynamique d'un input selon son type `InputBase`.
- `InputPanelComponent` — rendu d'un `InputPanel` avec ses enfants.
- `InputTranslationComponent` — rendu d'un `InputTranslation`.

### Services

- `FormTranslationService` — service de traduction du module form-basic.

## Architecture form system (3 couches)

```
@ta/form-model  → InputBase<T> et ses sous-classes (données/config)
@ta/form-input  → TaAbstractInputComponent (UI de chaque champ)
@ta/form-basic  → <ta-form> orchestre et rend dynamiquement
```

## Conventions

- Les modèles d'input viennent **toujours** de `@ta/form-model`.
- `ta-form` gère le `FormGroup` — ne pas créer de FormGroup manuellement si `ta-form` suffit.
- Les labels sont des clés de traduction (pas de texte hardcodé).
- Ne pas utiliser `FormModule` (deprecated) — utiliser les composants standalone.
