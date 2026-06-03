# `TaIconsService` — service d'icônes SVG

**Import** : `TaIconsService` depuis `@ta/icons`

**Usage** : Résoudre un `TaIconType` en SVG brut. Utilisé en interne par `LocalIconComponent`.

**Méthode** :
- `getIcon(icon: TaIconType): string` — retourne le SVG HTML string correspondant à l'icône

**Utilisation directe** (rare) :
```typescript
private _iconsService = inject(TaIconsService);

getSvg() {
  return this._iconsService.getIcon(TaIconType.Dashboard);
}
```

**Notes** : Singleton (`providedIn: 'root'`). Normalement pas besoin d'injecter directement — `LocalIconComponent` l'utilise via `DomSanitizer`. Pour les nouveaux développements, utiliser `<ta-font-icon>`.
