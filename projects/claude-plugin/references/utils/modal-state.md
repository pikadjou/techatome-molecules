# `ModalState<T, U>` — état partagé parent ↔ modale

**Importer** : `import { ModalState } from '@ta/utils';`

**Quand l'utiliser** : porter l'état d'une modale `TaBaseModal<T, U>` depuis son parent — l'entrée `T` poussée à l'ouverture, le résultat `U` rendu à la fermeture, et le flag d'ouverture, tous sous forme de signaux.

**API** :

```typescript
class ModalState<T, U> {
  open: WritableSignal<boolean>; // false au départ
  input: WritableSignal<T | null | undefined>; // null au départ
  output: WritableSignal<U | null>; // null au départ

  asked(input: T): void; // input := input ; output := null ; open := true
  completed(output: U): void; // output := output ; open := false
  dismissed(): void; // open := false, output inchangé
}
```

**Pattern canonique** :

```typescript
// Parent
export class DocumentsComponent extends TaBaseComponent {
  public uploadModal = new ModalState<{ folderId: string }, UploadResult>();

  public openUpload(folderId: string) {
    this.uploadModal.asked({ folderId });
  }

  public onUploaded(result: UploadResult) {
    // reçu par closeEvent ; aussi lisible via this.uploadModal.output()
  }
}
```

```html
<ta-button (action)="this.openUpload(this.folderId)">{{ 'documents.upload' | translate }}</ta-button>
<ta-upload-modal [modalState]="this.uploadModal" (closeEvent)="this.onUploaded($event)"></ta-upload-modal>
```

**Notes** :

- `asked()` remet `output` à `null` : une nouvelle ouverture ne porte jamais le résultat précédent.
- `completed()` est appelé par la modale (via `confirm()`), jamais par le parent ; `dismissed()` par `dismiss()`.
- Une seule instance par modale, créée comme champ du parent — pas dans un service, pas dans la modale.
- Tous les membres étant des signaux, ils se lisent en template (`@if (this.uploadModal.open()) { … }`) et dans `computed()` / `effect()`.
- Remplace l'ancien couple `isModalOpen = signal(false)` + inputs/outputs spécifiques à chaque modale.
