# `TaBasePage` — classe de base pour les pages routées

**Hériter de** : `TaBasePage` (depuis `@ta/utils`)

**Usage** : Pour les composants de page qui lisent les paramètres de route (`:id`, `?query=...`).

**Méthodes protégées** :
- `_getPathParams<T>(data: T): Observable<T>` — lit les paramètres de path (`:param`) typés selon un objet modèle
- `_getQueryParams<T>(data: T): Observable<T>` — lit les query params (`?key=value`) typés

**Typage automatique** : Le type du param est déduit du type de la propriété dans l'objet modèle passé en argument (string → string, number → Number(value)).

**Exemple** :
```typescript
export class MyPage extends TaBasePage {
  constructor() { super(); }

  ngOnInit() {
    this._registerSubscription(
      this._getPathParams({ id: 0 }).subscribe(({ id }) => {
        // id est automatiquement casté en number
        this.loadItem(id);
      })
    );
  }
}
```

**Notes** : Hérite de toutes les propriétés de `TaAbstractComponent` (`requestState`, `breakpoints`, `_router`, etc.).
