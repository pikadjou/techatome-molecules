# `<ta-input-upload>` — `UploadComponent`

**Quand l'utiliser** : Rendu d'un `InputUpload` — upload de documents avec drag & drop et progress.

**Output supplémentaire** :
- `uploadStatusChanged: OutputEmitterRef<boolean>` — `false` quand en cours, `true` quand tout est uploadé

**Usage direct** :
```html
<ta-input-upload [input]="myUploadInput" (uploadStatusChanged)="onStatus($event)"></ta-input-upload>
```

**Notes** : Étend `TaAbstractInputComponent<InputUpload>`. Gère une fausse progress bar (incréments de 5% toutes les 1s). Supporte l'upload via `Capacitor FilePicker` (mobile) et l'input file classique. Si `confirmButton: false`, confirme automatiquement. Utilise `TaDocumentsService`.
