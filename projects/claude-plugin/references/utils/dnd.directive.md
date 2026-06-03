# `DndDirective` — `[appDnd]` — drag-and-drop de fichiers

**Quand l'utiliser** : Créer une zone de drop pour des fichiers (drag & drop natif du navigateur).

**Import** : `DndDirective` depuis `@ta/utils`

**Template** :
```html
<div appDnd (fileDropped)="onFileDrop($event)" [class.active]="isOver">
  Déposer vos fichiers ici
</div>
```

**Outputs** :
- `fileDropped: EventEmitter<FileList>` — émis quand des fichiers sont déposés

**Classe CSS appliquée automatiquement** :
- `.fileover` — ajoutée sur l'élément quand un fichier est survolé (via `@HostBinding`)

**Événements gérés** : `dragover`, `dragleave`, `drop`

**Notes** : Non standalone (pas de `standalone: true` dans la directive source). À déclarer dans le module ou le composant standalone via `imports`.
