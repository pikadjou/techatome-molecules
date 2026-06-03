# `TaBaseModal` — classe de base pour les modales

**Hériter de** : `TaBaseModal` (depuis `@ta/utils`)

**Usage** : Pour les composants ouverts en tant que modale (via `@ta/ui` ou CDK Dialog).

**Propriétés disponibles** (héritées de `TaAbstractComponent`) :
- `requestState`, `breakpoints`, `isMobile`, `isDesktop`
- `_registerSubscription()`, `_router`, `_route`, `_location`
- `icon` — alias `TaIconType`

**Exemple** :
```typescript
@Component({ standalone: true, selector: 'ta-confirm-modal', template: '' })
export class ConfirmModal extends TaBaseModal {
  constructor() { super(); }
}
```

**Notes** : `TaBaseModal` est actuellement identique à `TaAbstractComponent` — il sert de marqueur sémantique pour distinguer les modales des composants normaux. Toujours l'utiliser pour les modales plutôt que `TaBaseComponent`.
