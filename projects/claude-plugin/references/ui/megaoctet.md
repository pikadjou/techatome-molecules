# `<ta-megaoctet>` — `MegaoctetComponent`
**Quand l'utiliser** : Afficher une taille de fichier en Mo, convertie depuis des octets.
**Template canonique** :
```html
<ta-megaoctet [octet]="file.size" />
<ta-megaoctet [octet]="file.size" [icon]="true" />
```
**Inputs** :
- `octet` (required) : `number` — taille en octets
- `icon` : `boolean` — afficher une icône de fichier (`false` par défaut)

**Notes** : Convertit automatiquement en Mo avec 2 décimales.
