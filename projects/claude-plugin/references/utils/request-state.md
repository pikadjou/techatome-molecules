# `RequestState` — machine d'état pour opérations asynchrones

**Disponible via** : `this.requestState` dans tout composant étendant `TaBaseComponent`

**Méthodes** :
- `asked()` — passe en loading, marque `alreadyAsked = true`, reset l'erreur
- `completed()` — arrête le loading (`loading.set(false)`)
- `onError(status: number, message: string)` — arrête le loading, stocke l'erreur
- `clean()` — reset complet (loading false, alreadyAsked false, erreur reset)
- `resetError()` — remet l'erreur à `{ status: -1, message: '' }`

**Accesseurs** :
- `isLoading()` — signal `boolean` (utiliser avec `()` en template)
- `getErrorStatus()` — `number` (-1 si pas d'erreur)
- `getErrorMessage()` — `string`

**Propriétés publiques** :
- `loading` — `signal<boolean>` (Angular signal)
- `alreadyAsked` — `boolean`
- `error` — `{ status: number, message: string }`

**Utilisation typique** :
```typescript
loadData() {
  this.requestState.asked();
  this._registerSubscription(
    this._service.get().subscribe({
      next: (data) => { this.data = data; this.requestState.completed(); },
      error: (e) => this.requestState.onError(e.status, e.message),
    })
  );
}
```

**En template** :
```html
<ta-loader [isLoading]="this.requestState.isLoading()">
  @if (this.requestState.getErrorStatus() > 0) {
    <ta-error></ta-error>
  }
</ta-loader>
```
