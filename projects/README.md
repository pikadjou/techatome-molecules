# Techatome Molecules - Packages Documentation

Bienvenue dans la documentation des packages Techatome Molecules (@ta).

Ce monorepo contient 23 packages Angular spécialisés, organisés en bibliothèques micro-modulaires réutilisables.

## 📦 Packages Disponibles

### Composants UI & Affichage

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/ui](./ui/README.md) | 100+ composants UI (boutons, badges, layouts, cards, etc.) | [Voir la documentation](./ui/README.md) |
| [@ta/icons](./icons/README.md) | Système de gestion d'icônes (Material, Font Awesome, locales) | [Voir la documentation](./icons/README.md) |
| [@ta/charts](./charts/README.md) | Composants de graphiques (bar, line, pie, doughnut, mixed) | [Voir la documentation](./charts/README.md) |
| [@ta/menu](./menu/README.md) | Navigation et menus (main menu, context menu, quick actions) | [Voir la documentation](./menu/README.md) |
| [@ta/notification](./notification/README.md) | Système de notifications et alertes | [Voir la documentation](./notification/README.md) |
| [@ta/styles](./styles/README.md) | Styles SCSS partagés et variables globales | [Voir la documentation](./styles/README.md) |

### Formulaires & Inputs

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/form-basic](./form/form-basic/README.md) | Système de formulaires dynamiques de base | [Voir la documentation](./form/form-basic/README.md) |
| [@ta/form-input](./form/form-input/README.md) | 30+ composants d'inputs (textbox, dropdown, date picker, etc.) | [Voir la documentation](./form/form-input/README.md) |
| [@ta/form-model](./form/form-model/README.md) | Modèles et types pour les formulaires | [Voir la documentation](./form/form-model/README.md) |
| [@ta/wysiswyg](./wysiswyg/README.md) | Éditeur WYSIWYG pour contenu riche | [Voir la documentation](./wysiswyg/README.md) |

### Gestion de Fichiers

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/files-basic](./files/files-basic/README.md) | Gestion de fichiers de base (liste, édition) | [Voir la documentation](./files/files-basic/README.md) |
| [@ta/files-extended](./files/files-extended/README.md) | Fonctionnalités avancées (upload, display) | [Voir la documentation](./files/files-extended/README.md) |

### Core & Services

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/core](./core/README.md) | Composants et services core (filtres, maps, clipboard) | [Voir la documentation](./core/README.md) |
| [@ta/server](./server/README.md) | Services de communication serveur (GraphQL, API, Strapi) | [Voir la documentation](./server/README.md) |
| [@ta/services](./services/README.md) | Services utilitaires partagés | [Voir la documentation](./services/README.md) |
| [@ta/utils](./utils/README.md) | Directives, pipes et utilitaires | [Voir la documentation](./utils/README.md) |
| [@ta/translation](./translation/README.md) | Système d'internationalisation (i18n) | [Voir la documentation](./translation/README.md) |

### Features & Modules

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/features](./features/README.md) | Features complexes (Grid avec pagination, filtres, recherche) | [Voir la documentation](./features/README.md) |
| [@ta/cms](./cms/README.md) | Intégration CMS (Strapi) | [Voir la documentation](./cms/README.md) |
| [@ta/user](./user/README.md) | Gestion utilisateurs et authentification | [Voir la documentation](./user/README.md) |
| [@ta/capacitor](./capacitor/README.md) | Intégration Capacitor pour PWA/mobile | [Voir la documentation](./capacitor/README.md) |

### Configuration

| Package | Description | Documentation |
|---------|-------------|---------------|
| [@ta/eslint-config](./config/eslint-config/README.md) | Configuration ESLint partagée | [Voir la documentation](./config/eslint-config/README.md) |
| [@ta/prettier-config](./prettier-config/README.md) | Configuration Prettier partagée | [Voir la documentation](./prettier-config/README.md) |

## 🚀 Démarrage Rapide

### Installation d'un package

```bash
npm install @ta/ui
# ou
yarn add @ta/ui
```

### Import dans votre application

```typescript
import { TaButtonComponent } from '@ta/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TaButtonComponent],
  template: '<ta-button label="Click me"></ta-button>'
})
export class ExampleComponent {}
```

## 📊 Statistiques

- **Total packages:** 23
- **Total composants:** 214+
- **Total services:** 47
- **Total modules:** 20
- **Directives:** 4
- **Pipes:** 4

## 🏗️ Architecture

Tous les packages suivent ces conventions:

- **Namespace:** `@ta/`
- **Préfixe composants:** `ta-`
- **Build system:** Angular CLI + ng-packagr
- **Gestion monorepo:** Lerna + Yarn workspaces
- **Documentation:** Storybook

## 📖 Documentation par Package

Consultez le README de chaque package pour:

- Liste complète des composants/services
- Exemples d'utilisation
- API détaillée
- Cas d'usage recommandés

## 🛠️ Développement

Pour contribuer ou développer localement:

```bash
# Installation
yarn install

# Build tous les packages
yarn build

# Démarrer Storybook
yarn storybook

# Tests
ng test @ta/[package-name]
```

## 📝 Licence

Voir le fichier LICENSE à la racine du projet.
