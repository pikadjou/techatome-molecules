# `BreakpointDetection` — détection responsive des breakpoints

**Disponible via** : `this.breakpoints` dans tout composant étendant `TaBaseComponent`

**Breakpoints** (basés sur `@angular/cdk/layout`) :
| Nom | Plage |
|-----|-------|
| XSmall | 0–575px |
| Small | 576–767px |
| Medium | 768–991px |
| Large | 992–1199px |
| XLarge | 1200–1399px |
| XXLarge | 1400px+ |

**Propriétés synchrones** (valeur au moment du rendu) :
- `isLessThanXS`, `isLessThanSM`, `isLessThanMD`, `isLessThanLG` — `boolean`
- `isMoreThanXS`, `isMoreThanSM`, `isMoreThanMD`, `isMoreThanLG` — `boolean`
- `isMobile` → alias de `isLessThanXS` (< 576px)
- `isTablette` → alias de `isLessThanMD` (< 768px)
- `isDesktop` → alias de `isMoreThanLG` (>= 992px)

**Propriétés observables** (réactives) :
- `isLessThanXS$`, `isLessThanSM$`, `isLessThanMD$`, `isLessThanLG$` — `Observable<boolean>`
- `isMoreThanXS$`, `isMoreThanSM$`, `isMoreThanMD$`, `isMoreThanLG$` — `Observable<boolean>`
- `isMobile$`, `isTablette$`, `isDesktop$` — `Observable<boolean>`

**Raccourcis dans les composants** :
- `this.isMobile` — depuis `TaAbstractComponent`
- `this.isDesktop` — depuis `TaAbstractComponent`

**Exemple** :
```typescript
ngOnInit() {
  this._registerSubscription(
    this.breakpoints.isMoreThanMD$.subscribe(isDesktop => {
      this.columns = isDesktop ? 3 : 1;
    })
  );
}
```
