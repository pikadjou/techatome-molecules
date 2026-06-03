# `<ta-overlay-panel>` — `TaOverlayPanelComponent`
**Quand l'utiliser** : Dropdown/popover positionné au clic sur un élément déclencheur.
**Template canonique** :
```html
<ta-overlay-panel
  [panelConfig]="{ maxHeight: 300 }"
  [position]="'default'"
  (closed)="onClose()"
>
  <ng-template #panelTrigger>
    <ta-button [icon]="'more_vert'" (action)="panel.open()" />
  </ng-template>
  <ng-template #panelContent>
    <div class="p-space-md">Contenu du panel</div>
  </ng-template>
</ta-overlay-panel>
```
**Inputs** :
- `panelConfig` (required) : `OverlayMenuConfig` — config CDK overlay
- `position` : `'default'` | `'right'` — `'default'` par défaut

**Outputs** : `(closed)`.

**Notes** : Utilise `ContentChild` pour `#panelTrigger` et `#panelContent`. Appeler `panel.open()` manuellement ou configurer `manualTrigger: false`.
