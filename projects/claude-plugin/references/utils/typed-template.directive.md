# `TypedTemplateDirective` — `ng-template[typedTemplate]` — typer un ng-template

**Quand l'utiliser** : Donner un type fort à un `ng-template` passé en input à un composant, pour bénéficier de l'autocomplétion et de la vérification de type dans le template.

**Import** : `TypedTemplateDirective` depuis `@ta/utils`

**Template** :
```html
<ng-template typedTemplate [typedTemplate]="myItem" let-item>
  <!-- 'item' est typé selon MyItemType -->
  <span>{{ item.name }}</span>
</ng-template>
```

**Input** :
- `typedTemplate` — `TypeToken` (required) — objet dont le type sert de référence pour le contexte du template

**Notes** : Standalone. Utilise `ngTemplateContextGuard` pour l'inférence de type Ivy. L'objet passé n'est pas utilisé à l'exécution — sert uniquement au compilateur TypeScript pour typer la variable `let-`.
