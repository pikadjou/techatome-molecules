# `TaCmsService`
**Quand l'utiliser** : Récupérer des contenus CMS depuis Strapi par type de contenu.
**Méthodes** :
- `fetchCmsContents$(type: string, tenantId: string): Observable<Cms>` — charge le contenu et le met en cache

**Propriétés** :
- `cmsContents: HandleComplexRequest<Cms>` — cache des contenus par type
- `cmsContents.get$(type): Observable<Cms>` — accès en lecture au contenu mis en cache

**Notes** : `providedIn: 'root'`. Extend `TaBaseStrapiService`. Utilise la locale Angular (`LOCALE_ID`) pour la langue du contenu. Requiert `provideStrapi()` dans les providers.
