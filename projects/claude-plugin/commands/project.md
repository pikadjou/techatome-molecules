---
description: Assistant contextuel @ta/project — feature project, composants et services de gestion de projet
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/project — Assistant contextuel

Tu es un expert de la librairie `@ta/project` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/project`
**Import path** : `@ta/project`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/features/project/`

## Exports clés (par feature)

### Feature Project (`lib/features/project/`)

- **Composants** :
  - `taProjectStatusComponent` — affichage du statut de projet
  - `taProjectTenantUrlDisplayerComponent` — affichage URL tenant
  - `taProjectProfileComponent` — profil du projet
  - `taProjectProfileCardComponent` — carte de profil projet
- **Services** : Services de gestion des projets

### Feature Invoice (`lib/features/invoice/`)

- Composants de facturation
- Services de facturation
- Helpers de facturation

### Feature Quotation (`lib/features/quotation/`)

- Composants de devis
- Services de devis

### Feature Maintenance (`lib/features/maintenance/`)

- Composants de maintenance
- Services de maintenance

### Feature Organization (`lib/features/organization/`)

- Composants d'organisation
- DTOs d'organisation

### Feature Mission (`lib/features/mission/`)

- Composants de mission
- Services de mission

### Common (`lib/common/`)

- Services communs partagés entre les features project

## Patterns d'utilisation

### Afficher le statut d'un projet

```typescript
import { taProjectStatusComponent } from '@ta/project';

@Component({
  standalone: true,
  imports: [taProjectStatusComponent],
  template: `<ta-project-status [status]="project.status" />`,
})
export class ProjectDetailComponent {
  project = this.projectService.getCurrent();
}
```

### Profil de projet

```typescript
import { taProjectProfileCardComponent } from '@ta/project';

@Component({
  standalone: true,
  imports: [taProjectProfileCardComponent],
  template: `
    <ta-project-profile-card [projectId]="projectId" />
  `
})
```

### URL tenant du projet

```typescript
import { taProjectTenantUrlDisplayerComponent } from '@ta/project';

@Component({
  standalone: true,
  imports: [taProjectTenantUrlDisplayerComponent],
  template: `<ta-project-tenant-url-displayer [url]="tenantUrl" />`
})
```

## Structure du monorepo feature/project

```
projects/features/project/src/lib/
├── common/           # services communs entre features
├── features/
│   ├── invoice/      # facturation
│   │   ├── components/
│   │   ├── helpers/
│   │   └── services/
│   ├── maintenance/  # maintenance
│   ├── mission/      # missions
│   ├── organization/ # organisations
│   │   └── dto/
│   ├── project/      # projets
│   │   ├── components/
│   │   └── services/
│   └── quotation/    # devis
│       ├── components/
│       └── services/
```

## Conventions

- Chaque feature est indépendante et expose son propre `public-api.ts`
- Les services communs (`lib/common/`) sont partagés entre les features
- Les helpers (`lib/features/invoice/helpers/`) contiennent la logique métier pure
- Les composants sont `standalone: true`
- Les payloads de mutation suivent le pattern `XxxCreationPayloadInput` / `XxxModifierPayloadInput`

## Revue de code

- Vérifier que les imports viennent de `@ta/project` (pas de chemins relatifs hors lib)
- S'assurer que chaque nouvelle feature exporte via un `public-api.ts` dédié
- Vérifier les clés d'objet triées alphabétiquement
- S'assurer que `standalone: true` et les imports explicites

## Ajout d'une nouvelle feature dans @ta/project

1. Créer le dossier `projects/features/project/src/lib/features/ma-feature/`
2. Créer les sous-dossiers : `components/`, `services/`, éventuellement `helpers/`, `dto/`
3. Créer les `public-api.ts` à chaque niveau
4. Exporter depuis `projects/features/project/src/lib/features/ma-feature/public-api.ts`
5. Exporter depuis `projects/features/project/src/public-api.ts`
