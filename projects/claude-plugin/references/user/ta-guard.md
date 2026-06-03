# `<ta-guard>` — `GuardComponent`
**Quand l'utiliser** : Wrapper qui masque ou affiche un overlay sur son contenu selon les permissions de l'utilisateur.
**Template canonique** :
```html
<!-- Par feature -->
<ta-guard [feature]="'myFeature'" [level]="'authorize'">
  <p>Contenu protégé</p>
</ta-guard>

<!-- Par rôle -->
<ta-guard [role]="'admin'">
  <p>Contenu admin</p>
</ta-guard>
```
**Inputs** :
- `level: Level` — `'authenticated' | 'unauthenticated' | 'authorize' | 'administrator'`
- `feature: string` — clé de feature à vérifier
- `role: string` — rôle requis (alternatif à feature)
- `canDisplayErrorMessage: boolean` — affiche le message d'accès refusé (défaut: `true`)
- `preview: boolean` — affiche le contenu avec overlay au lieu de le masquer (défaut: `false`)

**Notes** : Utilise `TaPermissionsService`. Affiche icône `NoAccess` + boutons login/register si accès refusé.
