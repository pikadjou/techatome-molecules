# `InputComponent` (extends `InputBase<string>`)

**Quand l'utiliser** : Input entièrement personnalisé via un `TemplateRef` — pour des cas non couverts par les inputs standards.

**Champs ajoutés vs `InputBase`** :
- `icon?: TaIconType | null` — icône optionnelle du déclencheur
- `template?: TemplateRef<TypeComponentInputToken>` — template de la sélection (requis)
- `selectedValue$: Subject<string>` — à utiliser dans le template pour émettre la valeur

**Token de contexte du template** :
```typescript
type TypeComponentInputToken = { selectedValue$: Subject<string> }
```

**Interface de config** :
```typescript
// Dans le composant :
@ViewChild('myTpl') myTemplate!: TemplateRef<any>;
new InputComponent({ key: 'custom', label: 'form.custom', template: this.myTemplate })
// Dans le template :
<ng-template #myTpl let-ctx>
  <button (click)="ctx.selectedValue$.next('valeur')">Choisir</button>
</ng-template>
```

**Notes** : `controlType = 'component'`. Ouvre une modal `TaModalComponent` avec le template fourni. Émet une erreur si `template` est absent.
