# `SubscriberHandler` — gestionnaire de lifecycle des subscriptions

**Usage direct** : Rarement utilisé directement — préférer `_registerSubscription()` depuis les classes de base.

**Méthodes** :
- `registerSubscription(sub: Subscription)` — ajoute un abonnement à la liste
- `destroy()` — unsubscribe tous les abonnements enregistrés

**Instanciation** (si utilisé hors classe de base) :
```typescript
private _handler = new SubscriberHandler();

ngOnInit() {
  this._handler.registerSubscription(myObservable$.subscribe(...));
}

ngOnDestroy() {
  this._handler.destroy();
}
```

**Notes** : Dans les composants étendant `TaBaseComponent`, utiliser directement `this._registerSubscription()`. Le `destroy()` est appelé automatiquement dans `ngOnDestroy` de `TaAbstractComponent`.
