# Pattern composé canonique — États Loader / Error / Empty

```html
<!-- Pattern complet avec requestState (depuis TaBaseComponent) -->
<ta-loader [isLoading]="this.requestState.isLoading()">
  @if (this.requestState.isError()) {
    <ta-error
      [message]="this.requestState.errorMessage()"
      [code]="this.requestState.errorCode()"
      [showRetry]="true"
      (retry)="loadData()"
    />
  } @else {
    <ta-empty [isEmpty]="items().length === 0" [text]="'ui.list.empty'">
      <!-- Contenu quand items non vide -->
      <ta-list-container>
        @for (item of items(); track item.id) {
          <ta-list-element>...</ta-list-element>
        }
      </ta-list-container>
    </ta-empty>
  }
</ta-loader>

<!-- Loader avec skeleton -->
<ta-loader [isLoading]="loading" [skeleton]="'list'" [size]="'md'">
  <!-- contenu -->
</ta-loader>

<!-- Empty standalone -->
<ta-empty
  [isEmpty]="results.length === 0"
  [emptyIcon]="'search_off'"
  [text]="'ui.search.no-results'"
  [subtitle]="'Essayez avec d\'autres termes'"
/>

<!-- Error standalone -->
<ta-error
  [message]="'Erreur de chargement'"
  [code]="500"
  (retry)="reload()"
/>
```

**Composants** : `ta-loader` · `ta-empty` · `ta-error` · `ta-placeholder`

**Règles** :
- `ta-loader` : toujours le conteneur externe — gère isLoading via `requestState.isLoading()`
- `ta-error` : s'affiche si `requestState.isError()` — à l'intérieur de `ta-loader`
- `ta-empty` : à l'intérieur du bloc non-erreur, conditionné par la longueur du tableau
- `ta-placeholder` : utilisé en interne par `ta-loader` via `[skeleton]` — rarement direct

**Pattern TypeScript associé** :
```typescript
// Dans le composant (extends TaBaseComponent)
ngOnInit() {
  this.requestState.asked();
  this._registerSubscription(
    this._service.getList().subscribe({
      next: (data) => { this.items.set(data); this.requestState.completed(); },
      error: (err) => this.requestState.onError(err.status, err.message),
    })
  );
}
```
