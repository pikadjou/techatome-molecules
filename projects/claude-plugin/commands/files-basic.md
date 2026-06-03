---
description: Assistant contextuel @ta/files-basic — catalogue compact + pointeurs vers references/files-basic/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/files-basic — Assistant contextuel

Tu es un expert de la librairie `@ta/files-basic` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/files-basic/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/files-basic`
- **Import path** : `@ta/files-basic`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/files/files-basic/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/files-basic/<name>.md`.

### Composants

- `ta-files-list` (`FilesListComponent`) — liste de fichiers.
- `ta-display` (`DisplayComponent`) — affichage d'un fichier unique.
- `ta-slide` (`SlideComponent`) — visualisation en carrousel/slide.
- `ta-pdf-viewer` (`PdfViewerComponent`) — lecteur PDF.
- `ta-file-card` (`FileCardComponent`) — carte d'un fichier.
- `ta-files-edit` (`FilesEditComponent`) — édition des fichiers (ajout/suppression).
- `ta-documents-list` (`DocumentsListComponent`) — liste de documents.
- `ta-file-type-badge` (`FileTypeBadgeComponent`) — badge type de fichier.

## Différence avec @ta/files-extended

| `@ta/files-basic` | `@ta/files-extended` |
|---|---|
| Affichage et lecture de fichiers | Upload et gestion avancée |
| Liste, slide, PDF viewer | Upload avec progression |
| Pas d'upload | Intégration serveur complète |

## Conventions

- Les types `FileData` et `EFileExtension` viennent de `@ta/utils` (pas de `@ta/files-basic`).
- Ne pas utiliser `FilesBasicModule` (deprecated) — composants standalone.
- Pour l'upload, utiliser `@ta/files-extended`.
- Les documents utilisent `DocumentsService` de `@ta/services`.
