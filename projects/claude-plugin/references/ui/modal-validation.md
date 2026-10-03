# `<ta-validation-modal>` — `ValidationModal`

**Quand l'utiliser** : Modale de confirmation oui/non (actions destructrices, confirmations critiques), pilotée par un `ModalState` du parent.

**Template canonique** :

```html
<ta-button type="danger" (action)="this.deleteModal.asked({ title: 'Supprimer ?', subtitle: 'Action définitive' })">
  {{ 'common.delete' | translate }}
</ta-button>
<ta-validation-modal [modalState]="this.deleteModal" (closeEvent)="this.onYes()"></ta-validation-modal>
```

```typescript
public deleteModal = new ModalState<ModalParameter | undefined, boolean>();
```

**Contrat** : `TaBaseModal<ModalParameter | undefined, boolean>`

- Entrée : `{ title?, subtitle? }` (clés de traduction ou texte) ; sans entrée, `validation.modal.title` / `validation.modal.content`
- Oui → `confirm(true)` : `output()` vaut `true`, `closeEvent` émet `true`
- Non, croix ou fond → `dismiss()` : fermeture sans événement

**Notes** : `ta-modal` de taille `small`, `closeOnBackdrop` à `false`. Pour envelopper un déclencheur et confirmer au clic, préférer `<ta-container-validation>`. Voir `references/utils/ta-base-modal.md`.
