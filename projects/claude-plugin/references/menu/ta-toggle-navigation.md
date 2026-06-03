# Bottom Sheet — `BottomSheetTemplateBasicComponent` / `BottomSheetTemplateGenericComponent`

**Sélecteurs** : `ta-bottom-sheet-template-basic` / `ta-bottom-sheet-template-generic`

**Import** : `import { BottomSheetTemplateBasicComponent, BottomSheetTemplateGenericComponent } from '@ta/menu'`

**Quand l'utiliser** : Contenu d'un bottom sheet sur mobile (drawer depuis le bas de l'écran).

## `BottomSheetTemplateBasicComponent`
Template simple avec titre + contenu :
```html
<ta-bottom-sheet-template-basic>
  <ng-content></ng-content>
</ta-bottom-sheet-template-basic>
```

## `BottomSheetTemplateGenericComponent`
Template générique configurable :
```typescript
// Données passées via MatBottomSheet
interface BottomSheetData {
  title?: string;
  template?: TemplateRef<any>;
}
```

**Usage avec `MatBottomSheet`** :
```typescript
private _bottomSheet = inject(MatBottomSheet);

openBottomSheet() {
  this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
    data: { title: 'menu.options', template: this.optionsTpl }
  });
}
```

**Notes** :
- Utilisé principalement sur mobile (< MD breakpoint)
- `MenuItemComponent` l'utilise automatiquement pour les `MenuPanel` sur mobile
