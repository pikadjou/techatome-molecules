---
description: Assistant contextuel @ta/files-extended — catalogue compact + pointeurs vers references/files-extended/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/files-extended — Assistant contextuel

Tu es un expert de la librairie `@ta/files-extended` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/files-extended/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/files-extended`
- **Import path** : `@ta/files-extended`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/files/files-extended/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/files-extended/<name>.md`.

### Composants

- `ta-files-display` (`FilesDisplayComponent`) — affichage étendu de fichiers avec preview et actions.
- `ta-files-upload` (`FilesUploadComponent`) — upload de fichiers avec progression, intégration serveur.

### Services

- `UploadDocumentFormService` — service de formulaire d'upload de documents.

## Différence avec @ta/files-basic

| `@ta/files-basic` | `@ta/files-extended` |
|---|---|
| Affichage et lecture de fichiers | Upload et gestion avancée |
| Liste, slide, PDF viewer | Upload avec progression |
| Pas d'upload | Intégration serveur complète |
| Composants simples | Services + composants |

## Conventions

- Ne pas utiliser `FilesExtendedModule` (deprecated) — composants standalone.
- `ta-files-upload` gère l'upload vers le serveur via `@ta/server`.
- `entityId` et `entityType` doivent être fournis pour l'upload.
- Intégration avec `DocumentsService` de `@ta/services` pour la persistance.
