# `<ta-expansion-panel>` — `TaExpansionPanelComponent`
**Quand l'utiliser** : Accordéon avec titre et contenu colapsibles basé sur Angular Material.
**Template canonique** :
```html
<ta-expansion-panel [templates]="panelTemplates" />

<ng-template #myTitle>Mon titre</ng-template>
<ng-template #myContent>Mon contenu</ng-template>
```
**Setup TypeScript** :
```typescript
import { ExpansionPanelInput } from '@ta/ui';

panelTemplates: ExpansionPanelInput[] = [
  { title: this.myTitle, content: this.myContent },
];
```
**Inputs** :
- `templates` : `ExpansionPanelInput[]` — liste `{ title: TemplateRef, content: TemplateRef, context? }`

**Notes** : Extend `TaBaseComponent`. Basé sur `MatExpansionModule`.
