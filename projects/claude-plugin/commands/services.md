---
description: Assistant contextuel @ta/services — services applicatifs partagés
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/services — Assistant contextuel

Tu es un expert de la librairie `@ta/services` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/services`
**Import path** : `@ta/services`
**Localisation** : `projects/services/`

## Exports clés

### Services communs (`lib/services/common/`)

- Services utilitaires partagés entre les features

### Services contacts (`lib/services/contacts/`)

- Services pour la gestion des contacts
- DTOs contacts

### Services énumérations traduites

- `EnumerationService` — service de gestion des énumérations avec traduction
- `translatedEnumerationHelpers` — helpers pour les énumérations traduites

### Service menu

- `MenuService` — service de gestion de l'état du menu

### Services projets (`lib/services/projects/`)

- Services pour la gestion des projets

### Services tâches (`lib/services/tasks/`)

- Services pour la gestion des tâches

### Services planning (`lib/services/planning/`)

- Services pour la gestion du planning

### Services fichiers (`lib/services/files/`)

- `DocumentsService` — service de gestion des documents
- DTOs fichiers : `UploadFilePayloadInput`, `Document`, `FileType`

## Patterns d'utilisation

### Utiliser EnumerationService

```typescript
import { EnumerationService } from '@ta/services';

@Component({ standalone: true, ... })
export class MonComponent {
  private enumService = inject(EnumerationService);

  getStatuses() {
    return this.enumService.getTranslated('STATUS');
  }
}
```

### Utiliser DocumentsService

```typescript
import { DocumentsService, UploadFilePayloadInput } from '@ta/services';

@Injectable({ providedIn: 'root' })
export class MyService {
  private docs = inject(DocumentsService);

  uploadDocument(payload: UploadFilePayloadInput) {
    return this.docs.upload(payload);
  }
}
```

### Gérer les énumérations avec traductions

```typescript
import { EnumerationService, translatedEnumerationHelpers } from '@ta/services';

// Obtenir les options traduites d'une enum pour un dropdown
const options = translatedEnumerationHelpers.toDropdownOptions(myEnum, translateFn);
```

### MenuService

```typescript
import { MenuService } from '@ta/services';

constructor(private menu: MenuService) {}

openMenu() {
  this.menu.open();
}
```

## Conventions

- Utiliser `inject()` plutôt que l'injection par constructeur dans les nouveaux composants
- Les services sont `providedIn: 'root'` par défaut
- Les DTOs suivent la convention de nommage `XxxPayloadInput` pour les créations/modifications
- Les enums doivent passer par `EnumerationService` pour la traduction

## Revue de code

- Vérifier que les enums ne sont pas traduits manuellement (utiliser `EnumerationService`)
- Vérifier que les types DTOs (`UploadFilePayloadInput`, `Document`, `FileType`) sont importés depuis `@ta/services`
- Vérifier les clés d'objet triées alphabétiquement

## Ajout d'un nouveau service dans @ta/services

1. Choisir le sous-dossier approprié dans `projects/services/src/lib/services/`
2. Créer le service en étendant `BaseService` si c'est un service HTTP
3. Exporter depuis le `public-api.ts` du sous-dossier correspondant
4. S'assurer que l'export remonte jusqu'à `projects/services/src/public-api.ts`
