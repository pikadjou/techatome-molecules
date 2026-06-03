# `UploadDocumentFormService`
**Quand l'utiliser** : Génère le formulaire d'upload de document (type de document + description).
**Méthodes** :
- `getGroupForm(data: UploadDocumentData): InputBase<any>[]` — retourne un `InputPanel` avec `InputDropdown` (type) + `InputTextarea` (description)

**Type** :
```typescript
interface UploadDocumentData {
  documentTypes$: Observable<TranslatedEnumeration[]>;
  description?: string;
}
```
**Notes** : `providedIn: 'root'`. À utiliser avec `<ta-form>` dans une modale d'upload. Le dropdown affiche les types depuis une énumération traduite.
