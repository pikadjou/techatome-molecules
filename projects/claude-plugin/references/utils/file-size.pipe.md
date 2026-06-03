# `FileSizePipe` — `fileSize` — formater une taille en octets

**Quand l'utiliser** : Afficher une taille de fichier (en octets) sous forme lisible (Ko, Mo, Go...).

**Import** : `FileSizePipe` depuis `@ta/utils`

**Template** :
```html
{{ fileSize | fileSize }}
<!-- Résultat : "1.23 MB" -->

{{ fileSize | fileSize:true }}
<!-- Résultat : "1.23 Megabytes" (forme longue) -->
```

**Signature** : `transform(sizeInBytes: number | null, longForm: boolean = false): string`

**Unités courtes** : B, KB, MB, GB, TB, PB, EB, ZB, YB
**Unités longues** : Bytes, Kilobytes, Megabytes, Gigabytes...

**Notes** : Retourne `""` si `sizeInBytes` est `null`. Standalone.
