---
description: Assistant contextuel @ta/cms — intégration Strapi CMS, StrapiService
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/cms — Assistant contextuel

Tu es un expert de la librairie `@ta/cms` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/cms`
**Import path** : `@ta/cms`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/cms/`
**Backend** : Strapi CMS

## Exports clés

### Composants (`lib/modules/strapi/components/`)

- `taCmsComponent` — `ta-cms` : composant principal d'affichage de contenu CMS
- `taSaleComponent` — `ta-sale` : composant de vente/promotion CMS
- `taLinkComponent` — `ta-link` : rendu de liens Strapi
- `taRichTextComponent` — `ta-rich-text` : rendu de texte riche Strapi
- `taTextComponent` — `ta-text` : rendu de texte Strapi

### Services (`lib/modules/strapi/services/`)

- Services pour la communication avec l'API Strapi

### Module

- `StrapiModule` — module NgModule pour l'intégration Strapi

## Patterns d'utilisation

### Afficher du contenu CMS

```typescript
import { taCmsComponent } from '@ta/cms';

@Component({
  standalone: true,
  imports: [taCmsComponent],
  template: ` <ta-cms [contentKey]="'HOMEPAGE_BANNER'" /> `,
})
export class HomeComponent {}
```

### Afficher du texte riche Strapi

```typescript
import { taRichTextComponent } from '@ta/cms';

@Component({
  standalone: true,
  imports: [taRichTextComponent],
  template: ` <ta-rich-text [content]="richTextContent" /> `,
})
export class ArticleComponent {
  richTextContent = this.cmsService.getContent('article-body');
}
```

### Composant de vente

```typescript
import { taSaleComponent } from '@ta/cms';

@Component({
  standalone: true,
  imports: [taSaleComponent],
  template: `<ta-sale [saleId]="currentSaleId" />`
})
```

### Configurer Strapi

```typescript
import { StrapiModule } from '@ta/cms';

// Dans le module NgModule (legacy)
@NgModule({
  imports: [StrapiModule.forRoot({ apiUrl: environment.strapiUrl })]
})
```

## Conventions

- Utiliser les composants de type (`taRichTextComponent`, `taTextComponent`, `taLinkComponent`) pour rendre les différents types de contenu Strapi
- Le contenu Strapi est typé — utiliser les types définis par la lib
- Les clés de contenu CMS sont des identifiants Strapi (strings)
- Ne pas accéder directement à l'API Strapi — passer par les services de `@ta/cms`

## Revue de code

- Vérifier que les types de contenu Strapi (`rich-text`, `text`, `link`) utilisent les bons composants
- S'assurer que les clés CMS sont correctes et existent dans Strapi
- Vérifier que `standalone: true` et les imports explicites pour les nouveaux composants

## Ajout d'un nouveau type de contenu CMS

1. Créer le composant dans `projects/cms/src/lib/modules/strapi/components/types/`
2. Exporter depuis `projects/cms/src/lib/modules/strapi/public-api.ts`
3. Enregistrer dans le switch de rendu de `taCmsComponent`
