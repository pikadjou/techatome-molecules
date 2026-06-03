# `TaTranslationService` — gestion de la langue active

**Quand l'utiliser** : Initialiser les langues, changer la langue active, accéder à la langue courante.

**Import** : `import { TaTranslationService } from '@ta/translation'`

**Méthodes** :
```typescript
class TaTranslationService {
  translateService: TranslateService;  // accès direct au service ngx-translate

  init(): void                                          // initialisation (appelé au démarrage)
  getLanguage(): string                                 // langue active (ex: 'fr', 'en')
  get(key: string | string[], params?: Object): Observable<string | object>
  use(lang: string): Observable<any>                    // changer la langue
}
```

**Configuration** (`TRANSLATION_CONFIG`) :
```typescript
// Dans app.config.ts
{ provide: TRANSLATION_CONFIG, useValue: { default: 'fr', supportedLanguages: ['fr', 'en', 'nl'] } }
```

**Usage** :
```typescript
private _translation = inject(TaTranslationService);

// Obtenir la langue active
const currentLang = this._translation.getLanguage(); // 'fr'

// Changer la langue (recharge la page automatiquement si changement)
this._translation.use('en').subscribe();

// Traduction async
this._translation.get('user.name').subscribe(msg => this.label = msg);
```

**Comportement** :
- La langue est mémorisée dans `localStorage` (clé `lang`)
- Si la langue stockée n'est pas dans `supportedLanguages`, utilise la langue par défaut
- Lors d'un changement de langue, la page est rechargée automatiquement via `location.reload()`
- Lorsqu'une nouvelle librairie s'enregistre, recharge les traductions de la langue courante
