# `TaLazyTranslationService` — chargement lazy de traductions

**Quand l'utiliser** : Charger les traductions d'une librairie depuis des fichiers JSON ou Strapi, de manière lazy (à la demande).

**Import** : `import { TaLazyTranslationService } from '@ta/translation'`

**Classe abstraite à étendre** :
```typescript
@Injectable({ providedIn: 'root' })
export class TaTranslationMyLib extends TaLazyTranslationService {
  constructor() {
    super('mylib');  // id = préfixe des clés (ex: 'mylib.key')
  }
  static override getInstance() {
    return inject(this);
  }
}
```

**Activation dans un composant** :
```typescript
constructor() {
  super();
  TaTranslationMyLib.getInstance(); // force le chargement des traductions
}
```

**Sources de traduction** :
- **Fichier JSON** (mode `TranslationSourceType.FILE`) : charge `{filePath}{id}/{lang}.json`
- **Strapi GraphQL** : charge via la query `GET_TRANSLATIONS`

**Fichiers JSON** (pattern) :
```
src/i18n/
  en.json  ← clés plates { "key": "value" }
  fr.json
  nl.json
  de.json
```

**Format du fichier JSON** :
```json
{
  "form.name": "Nom",
  "form.email": "Email",
  "action.save": "Enregistrer"
}
```
Les clés pointées sont converties en objets imbriqués automatiquement.

**Notes** :
- `id` correspond au préfixe des clés dans les JSON (`'mylib'` → `mylib.form.name`)
- `isApp = true` : les clés ne sont pas préfixées (pour l'app principale)
- S'enregistre automatiquement dans `TaTranslationRegistryService`
