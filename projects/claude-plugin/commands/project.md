---
description: Assistant contextuel @ta/project — catalogue compact + pointeurs vers references/project/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/project — Assistant contextuel

Tu es un expert de la librairie `@ta/project` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous la feature et l'élément concerné (composant, service, DTO…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/project/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, méthodes ou les types.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/project`
- **Import path** : `@ta/project`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/features/project/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/project/<name>.md`.

### Feature Project

- `ta-project-status` (`ProjectStatusComponent`) — affichage du statut de projet.
- `ta-project-tenant-url-displayer` (`ProjectTenantUrlDisplayerComponent`) — affichage URL tenant.
- `ta-project-profile` (`ProjectProfileComponent`) — profil du projet.
- `ta-project-profile-card` (`ProjectProfileCardComponent`) — carte de profil projet.

### Feature Invoice (facturation)

- Composants et services de facturation.
- Helpers de facturation (logique métier pure).

### Feature Quotation (devis)

- Composants et services de devis.

### Feature Maintenance

- Composants et services de maintenance.

### Feature Organization

- Composants d'organisation.
- DTOs d'organisation.

### Feature Mission

- Composants et services de mission.

### Common (partagé entre features)

- Services communs accessibles par toutes les features de `@ta/project`.

## Structure de fichiers

```
projects/features/project/src/lib/
├── common/
├── features/
│   ├── invoice/      (components/, helpers/, services/)
│   ├── maintenance/
│   ├── mission/
│   ├── organization/ (dto/)
│   ├── project/      (components/, services/)
│   └── quotation/    (components/, services/)
```

## Conventions

- Chaque feature expose son propre `public-api.ts`.
- Les helpers (`helpers/`) contiennent la logique métier pure.
- Payloads de création : `XxxCreationPayloadInput` ; modification : `XxxModifierPayloadInput`.
- Imports depuis `@ta/project` (pas de chemins relatifs hors lib).
- Clés d'objets triées alphabétiquement.
