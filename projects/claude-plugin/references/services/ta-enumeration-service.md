# `TaEnumerationService` — service d'énumérations

**Note** : Ce service n'est pas directement présent dans `@ta/services`. Les énumérations applicatives sont gérées via `TaProjectsService` et les DTOs partagés.

**Pour les énumérations via GraphQL**, utiliser le pattern suivant dans un service personnalisé :
```typescript
@Injectable({ providedIn: 'root' })
export class TaEnumerationService extends TaBaseService {
  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: { clientName: 'enumService', endpoint: 'enum' } });
  }

  getEnumerations$(type: string): Observable<TranslatedEnumeration[]> {
    return this._graphService.fetchQueryList<TranslatedEnumeration>(
      createQuery<TranslatedEnumeration>('enumerations', {
        props: 'id translatedValue',
        where: { type: { eq: type } },
        prefixType: 'Enumeration'
      }),
      'enumerations',
      'enumService'
    );
  }
}
```

**`TranslatedEnumeration`** :
```typescript
interface TranslatedEnumeration {
  id: number;
  translatedValue: string;
}
```

**Usage dans un dropdown** :
```typescript
new InputDropdown({
  key: 'status',
  label: 'form.status',
  options: this._enumService.getEnumerations$('ProjectStatus').pipe(
    map(items => items.map(e => ({ id: e.id, name: e.translatedValue })))
  )
})
```
