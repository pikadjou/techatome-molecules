# `PluralTranslatePipe` — `pluralTranslate` — clé de traduction au singulier/pluriel

**Quand l'utiliser** : Construire la clé de traduction correcte selon un nombre (0 ou 1 → `.one`, 2+ → `.plural`).

**Import** : `PluralTranslatePipe` depuis `@ta/utils`

**Template** :
```html
{{ count | pluralTranslate:'common.item' | translate }}
<!-- count=1 → clé utilisée : "common.item.one" -->
<!-- count=5 → clé utilisée : "common.item.plural" -->
```

**Signature** : `transform(key: string, number: number): string`

**Convention i18n** : Les fichiers de traduction doivent avoir :
```json
{
  "common": {
    "item": {
      "one": "1 élément",
      "plural": "{{ count }} éléments"
    }
  }
}
```

**Notes** : Pipe `pure: false` (réévalué à chaque détection de changements). Standalone.
