# Pattern composé canonique — Layout Page

```html
<!-- Structure standard d'une page -->
<ta-layout-page>
  <ta-layout-nav>
    <ta-menu [routes]="routes" />
  </ta-layout-nav>

  <ta-layout-header>
    <ta-layout-header-default [title]="'Ma page'" [showBack]="true" (backEvent)="goBack()" />
  </ta-layout-header>

  <ta-layout-content>
    <ta-layout-title>
      <ta-title [level]="2">Liste des éléments</ta-title>
      <ta-button [icon]="'add'" (action)="onCreate()">Créer</ta-button>
    </ta-layout-title>

    <!-- Gestion des états async -->
    <ta-loader [isLoading]="this.requestState.isLoading()">
      @if (items().length === 0) {
        <ta-empty [isEmpty]="true" />
      } @else {
        <ta-list-container>
          @for (item of items(); track item.id) {
            <ta-list-element (action)="onSelect(item)">
              <ta-list-title>{{ item.name }}</ta-list-title>
            </ta-list-element>
          }
        </ta-list-container>
      }
    </ta-loader>
  </ta-layout-content>
</ta-layout-page>

<!-- Avec logo dans le header (app principale) -->
<ta-layout-page>
  <ta-layout-nav>
    <ta-menu [routes]="routes" />
  </ta-layout-nav>

  <ta-layout-header>
    <ta-layout-header-logo
      [profile]="profileData"
      [notificationTemplate]="notifTpl"
    />
  </ta-layout-header>

  <ta-layout-content>
    <router-outlet />
  </ta-layout-content>
</ta-layout-page>
```

**Composants** : `ta-layout-page` · `ta-layout-nav` · `ta-layout-header` · `ta-layout-header-default` · `ta-layout-header-logo` · `ta-layout-content` · `ta-layout-title`

**Règles** :
- `ta-layout-nav` : toujours en premier enfant de `ta-layout-page`
- `ta-layout-header` : avant `ta-layout-content`
- `ta-layout-content` : dernier enfant, contient le contenu scrollable
- `ta-layout-title` : premier enfant de `ta-layout-content` pour titre + actions
