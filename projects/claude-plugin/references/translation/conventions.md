# Conventions i18n — `@ta/translation`

## Structure des clés

Pattern obligatoire : `<lib>.<feature>.<element>`

```
form.name          → label du champ "name" dans les formulaires
form.email         → label du champ "email"
action.save        → bouton "Enregistrer"
action.cancel      → bouton "Annuler"
user.title         → titre de la section "user"
error.notFound     → message d'erreur "non trouvé"
notification.success.saved  → toast de succès "enregistré"
```

## Fichiers JSON

4 langues supportées (toujours tenir à jour) :
```
src/i18n/
  en.json   ← anglais (référence)
  fr.json   ← français
  nl.json   ← néerlandais
  de.json   ← allemand
```

## Format des fichiers JSON

**Format plat** (recommandé pour `TaLazyTranslationService`) :
```json
{
  "form.name": "Nom",
  "form.email": "Adresse email",
  "action.save": "Enregistrer",
  "action.cancel": "Annuler",
  "user.greeting": "Bonjour {{name}}"
}
```

Les clés pointées sont automatiquement converties en objets imbriqués par `TaLazyTranslationService`.

## Interpolation

```json
{ "user.greeting": "Bonjour {{name}}, vous avez {{count}} message(s)" }
```
```html
{{ 'user.greeting' | translate: { name: user.firstName, count: 3 } }}
```

## Règles importantes

1. **Ne jamais hardcoder de texte** dans les templates — toujours utiliser une clé i18n
2. **Toujours mettre à jour les 4 fichiers** (en, fr, nl, de) en même temps
3. **Préfixer par le nom de la librairie** : `notification.`, `form.`, `menu.`, etc.
4. **Clés en camelCase** : `user.firstName`, `action.saveAndClose`
5. **La langue est persistée** dans `localStorage` (clé `lang`)
6. **Langue par défaut** : configurable via `TRANSLATION_CONFIG`

## Activer les traductions d'une librairie

Dans chaque composant qui utilise des clés de la librairie :
```typescript
constructor() {
  super();
  TaTranslationMyLib.getInstance(); // déclenche le chargement des traductions
}
```

## Configuration app

```typescript
// app.config.ts
{ provide: TRANSLATION_CONFIG, useValue: {
  default: 'fr',
  supportedLanguages: ['fr', 'en', 'nl', 'de']
}}
```
