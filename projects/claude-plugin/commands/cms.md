---
description: Assistant contextuel @ta/cms — catalogue compact + pointeurs vers references/cms/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/cms — Assistant contextuel

Tu es un expert de la librairie `@ta/cms` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/cms/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API Strapi.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/cms`
- **Import path** : `@ta/cms`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/cms/`
- **Backend** : Strapi CMS

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/cms/<name>.md`.

### Composants

- `ta-cms` (`CmsComponent`) — composant principal d'affichage de contenu CMS Strapi.
- `ta-sale` (`SaleComponent`) — composant de vente/promotion CMS.
- `ta-rich-text` (`RichTextComponent`) — rendu de texte riche Strapi.
- `ta-text` (`TextComponent`) — rendu de texte simple Strapi.
- `ta-link` (`LinkComponent`) — rendu de liens Strapi.

### Services

- `TaCmsService` — service principal de communication avec l'API Strapi.

### Module

- `StrapiModule` — module NgModule pour l'intégration Strapi (configuration `forRoot`).

## Conventions

- Ne pas accéder directement à l'API Strapi — passer par les services de `@ta/cms`.
- Utiliser les composants typés (`ta-rich-text`, `ta-text`, `ta-link`) selon le type de contenu.
- Les clés de contenu CMS sont des identifiants Strapi (strings).
- Vérifier que `standalone: true` et les imports explicites pour les nouveaux composants.
