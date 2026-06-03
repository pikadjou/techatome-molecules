# `TaSharedMenuService` — état partagé du menu

**Quand l'utiliser** : Gérer l'état minimisé/développé du menu latéral entre les composants.

**Import** : `import { TaSharedMenuService } from '@ta/services'`

**API** :
```typescript
class TaSharedMenuService {
  public isMinimized$: BehaviorSubject<boolean>;  // état courant (persiste en localStorage)
}
```

**Usage** :
```typescript
private _sharedMenu = inject(TaSharedMenuService);

// Lire l'état
this._sharedMenu.isMinimized$.value  // boolean sync
this._sharedMenu.isMinimized$.subscribe(isMin => ...)  // réactif

// Changer l'état
this._sharedMenu.isMinimized$.next(true);   // minimiser
this._sharedMenu.isMinimized$.next(false);  // développer

// Toggle
this._sharedMenu.isMinimized$.next(!this._sharedMenu.isMinimized$.getValue());
```

**Usage dans un template** :
```html
<div [class.minimized]="(sharedMenu.isMinimized$ | async)">
  <ta-main-menu [menuMain]="menu"></ta-main-menu>
</div>
```

**Notes** :
- L'état est persisté dans `localStorage` (clé `isMinimizedMenu`)
- Utilisé par `MainMenuComponent` pour gérer le toggle du menu latéral
- `TaSharedMenuService` est un singleton (`providedIn: 'root'`)
