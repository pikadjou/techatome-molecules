# `TaBaseModal<T, U>` — classe de base du contenu d'une modale

**Hériter de** : `TaBaseModal<In, Out>` (depuis `@ta/utils`)

**Usage** : tout composant de modale piloté par un `ModalState<In, Out>` du parent — l'entrée `In` est poussée à l'ouverture, le résultat `Out` rendu à la fermeture. C'est le seul pattern pour une nouvelle modale (même contrat que `CamBaseModal` côté Camelot).

**API** :

- `modalState = input<ModalState<T, U> | null>(null)` — l'état partagé avec le parent
- `closeEvent = output<U>()` — émis avec le résultat par `confirm()`
- `isOpen(): boolean` — `modalState()?.open() ?? false`, à lier sur `[open]` du `ta-modal` embarqué
- `confirm(output: U)` — `completed(output)` sur l'état, puis `closeEvent.emit(output)`
- `dismiss()` — ferme sans résultat (`dismissed()`), n'émet rien
- Tout l'héritage de `TaAbstractComponent` : `requestState`, `breakpoints`, `_registerSubscription()`, `_router`, `_route`…

**Pattern canonique** :

```typescript
export type ConfirmInput = { title: string };

@Component({
  selector: 'ta-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  standalone: true,
  imports: [ButtonComponent, TaModalComponent, TranslateModule],
})
export class ConfirmModal extends TaBaseModal<ConfirmInput, boolean> {
  public get title(): string {
    return this.modalState()?.input()?.title ?? 'confirm.title';
  }

  public onYes(): void {
    this.confirm(true);
  }
}
```

```html
<ta-modal [open]="this.isOpen()" size="small" [title]="this.title | translate" (closeEvent)="this.dismiss()">
  <div modal-content>…</div>
  <div modal-footer>
    <ta-button type="danger" (action)="this.dismiss()">{{ 'common.cancel' | translate }}</ta-button>
    <ta-button type="primary" (action)="this.onYes()">{{ 'common.ok' | translate }}</ta-button>
  </div>
</ta-modal>
```

```typescript
// Parent
confirmModal = new ModalState<ConfirmInput, boolean>();

askDelete() {
  this.confirmModal.asked({ title: 'delete.title' });
}
```

```html
<ta-confirm-modal [modalState]="this.confirmModal" (closeEvent)="this.onConfirmed($event)"></ta-confirm-modal>
```

**Notes** :

- Toujours spécifier `In` et `Out` ; `null` quand il n'y a rien à passer (`TaBaseModal<null, null>`).
- L'entrée se lit **à la demande** via `this.modalState()?.input()` (getter, méthode), pas dans `ngOnInit` : le composant est monté en permanence, seul `open()` change. Pour repartir de l'entrée à chaque ouverture (sélection locale, souscription), utiliser un `effect()` dans le constructeur : `effect(() => { if (this.isOpen()) this._init(this.modalState()?.input()); })` — n'y écrire que des champs simples, pas de signal (Angular 18).
- Le `<ta-modal>` reste **embarqué** dans le composant de modale (titre, taille, slots `modal-content` / `modal-footer`) ; le parent ne pose que `[modalState]`.
- Fermeture par la croix ou le fond → `(closeEvent)="this.dismiss()"` sur le `ta-modal`.
- Exemples dans les libs : `ta-validation-modal`, `ta-error-box`, `ta-input-schema-modal`, `ta-component-selector-modal`, `ta-input-images-modal`, `ta-input-logo-modal`.
- Voir `ModalState` (`references/utils/modal-state.md`).
