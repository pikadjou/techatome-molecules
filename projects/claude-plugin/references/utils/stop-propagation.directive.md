# `StopPropagationDirective` — `[appStopPropagation]`

**Quand l'utiliser** : Empêcher la propagation d'un événement `click` vers les parents (ex. : bouton à l'intérieur d'une carte cliquable).

**Import** : `StopPropagationDirective` depuis `@ta/utils`

**Template** :
```html
<button appStopPropagation (click)="handleClick()">Action isolée</button>

<!-- Désactiver conditionnellement -->
<button appStopPropagation [stopPropagationActivation]="isActive" (click)="handleClick()">
  Action
</button>
```

**Inputs** :
- `stopPropagationActivation` — `boolean` (défaut: `true`) — si `false`, la propagation n'est pas stoppée

**Comportement** : Appelle `event.stopPropagation()` et `event.preventDefault()` sur le clic.

**Notes** : Standalone. Le sélecteur est `[appStopPropagation]` (pas `[taStopPropagation]`).
