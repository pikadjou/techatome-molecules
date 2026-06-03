# `<ta-template-modal-container>` — `TemplateModalContainer`
**Quand l'utiliser** : Modale générique pilotée par un `TemplateRef` (pattern ouverture programmatique).
**Template canonique** :
```html
<ta-template-modal-container
  [open]="isOpen"
  [template]="myTemplate"
  [style]="'classic'"
  (closeEvent)="isOpen = false"
/>

<ng-template #myTemplate>
  <ta-layout-modal [title]="'Titre'" (closeEvent)="isOpen = false">
    <!-- contenu -->
  </ta-layout-modal>
</ng-template>
```
**Inputs** :
- `open` (required) : `boolean`
- `template` : `TemplateRef<any> | null`
- `style` : `ModalStyle` — `'full'` (défaut) | `'big'` | `'classic'` | `'small'`
- `askClosing$` : `Observable<null> | undefined`

**Outputs** : `(closeEvent)`.

**Notes** : Sélecteur réel : `ta-template-modal-container`.
