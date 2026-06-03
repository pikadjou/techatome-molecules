# `TaAbstractComponent` — classe abstraite racine

**Hériter de** : `TaAbstractComponent` (depuis `@ta/utils`)

**Usage** : Classe parente de `TaBaseComponent`, `TaBasePage`, `TaBaseModal`. Ne pas l'étendre directement dans les composants d'application — utiliser `TaBaseComponent` à la place.

**Propriétés injectées** :
- `breakpoints` — instance de `BreakpointDetection`
- `requestState` — instance de `RequestState`
- `icon` — alias de `TaIconType` (pour utiliser `this.icon.Add` en template)
- `_route` — `ActivatedRoute`
- `_router` — `Router`
- `_location` — `Location`
- `_subscriberHandler` — `SubscriberHandler` (gestion lifecycle des subscriptions)

**Méthode protégée** :
- `_registerSubscription(sub: Subscription)` — délègue à `_subscriberHandler.registerSubscription()`

**Raccourcis** :
- `isMobile` → `this.breakpoints.isMobile` (boolean synchrone)
- `isDesktop` → `this.breakpoints.isDesktop` (boolean synchrone)

**Cycle de vie** : `ngOnDestroy()` appelle `_subscriberHandler.destroy()` — toutes subscriptions unsubscribed.

**Notes** : Classe abstraite, ne pas instancier directement. Préférer `TaBaseComponent`.
