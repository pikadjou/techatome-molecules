# `TaBaseComponent` — classe de base pour tous les composants

**Hériter de** : `TaBaseComponent` (depuis `@ta/utils`)

**Propriétés disponibles** (héritées de `TaAbstractComponent`) :
- `requestState` — machine d'état async (`asked()`, `completed()`, `onError()`, `isLoading()`, `clean()`)
- `breakpoints` — détection responsive (`isMobile`, `isDesktop`, `isLessThanMD`, `isMoreThanLG$`...)
- `icon` — alias de `TaIconType` pour l'utilisation en template
- `isMobile` — raccourci synchrone `boolean`
- `isDesktop` — raccourci synchrone `boolean`

**Méthodes protégées** :
- `_registerSubscription(sub: Subscription)` — enregistre un abonnement, détruit automatiquement au `ngOnDestroy`
- `_route`, `_router`, `_location` — accès au routing Angular (injectés)

**Méthodes publiques** :
- `trackById(_, item)` — fonction de tracking `@for` par `id`
- `trackByKey(_, item)` — fonction de tracking `@for` par `key`

**Notes** :
- Toujours étendre `TaBaseComponent` pour tous les composants normaux.
- Ne pas étendre `TaAbstractComponent` directement (réservé aux pages et modales).
- `ngOnDestroy` est géré automatiquement : toutes les subscriptions enregistrées sont unsubscribed.

**Exemple** :
```typescript
@Component({ standalone: true, selector: 'ta-my-component', template: '' })
export class MyComponent extends TaBaseComponent {
  constructor() { super(); }

  loadData() {
    this.requestState.asked();
    this._registerSubscription(
      this._myService.getData().subscribe({
        next: () => this.requestState.completed(),
        error: (e) => this.requestState.onError(e.status, e.message),
      })
    );
  }
}
```
