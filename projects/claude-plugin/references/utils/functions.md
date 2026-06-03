# Fonctions utilitaires `@ta/utils`

## Tableaux (`array.ts`)

### `isNonNullable<T>(value): value is NonNullable<T>`
Filtre type guard — élimine `null` et `undefined`.
```typescript
items$.pipe(filter(isNonNullable))
list.filter(isNonNullable) // enlève null/undefined
```

### `getUniqueArray<T>(array: T[]): T[]`
Élimine les doublons d'un tableau (via `Set`), filtre aussi les `null/undefined`.

### `getUniqueValues<T>(array, propName): T[]`
Déduplique par une propriété extraite avec une fonction.
```typescript
getUniqueValues(items, x => x.id)
```

### `filterNonNullableItems<T>(list: T[]): NonNullable<T>[]`
Filtre un tableau en retirant `null` et `undefined`, avec typage correct.

### `toArray<T>(value: T | T[]): T[]`
Normalise une valeur en tableau — si déjà tableau, retourne tel quel.

### `keepUniqueObjectByProperty<T>(list, property): T[]`
Déduplique une liste d'objets par une propriété donnée.

---

## Objet (`object.ts`)

### `merge(override = true)<T>(init: T, ...objects): T`
Deep merge d'objets (immutable). Arrays concaténés.
```typescript
merge()(defaultConfig, userConfig)
merge(false)(base, extra) // pas d'override si déjà défini
```

### `getModifiedValues<T>(current: T, initial: Partial<T>): Partial<T>`
Retourne uniquement les propriétés qui ont changé entre deux objets.

### `ObjectKeys<T>(object: T): Array<keyof T>`
Équivalent typé de `Object.keys()`.

### `removeObjectKeys<T>(obj, keysToRemove): Partial<T>`
Retourne un objet sans les clés spécifiées.

### `compareObjectsByKeys<T>(obj1, obj2, keys): boolean`
Compare deux objets sur une liste de propriétés.

---

## Identifiant (`identifier.ts`)

### `newGuid(): string`
Génère un UUID v4-like aléatoire (ex: `'a1b2c3d4-...'`).

### `newId(): number`
Génère un nombre aléatoire entre 1 et 1 000 000.

---

## Tri (`sorts.ts`)

### `sort(array, options): any[]`
Trie un tableau par une propriété.
```typescript
sort(items, { active: 'name', direction: 'asc' })
```

### `compare(a, b, isAsc): number`
Comparateur pour `Array.sort()` — gère les valeurs nulles.

### `compareHour(a: Date, b: Date, isAsc): number`
Comparateur temporel (heures, minutes, secondes).

---

## Recherche (`filters.ts`)

### `search(array: string[], term: string): boolean`
Recherche approximative avec `slugify` — insensible à la casse et aux accents.
```typescript
search(['Éléphant', 'Lion'], 'elephant') // true
```

---

## Chaîne (`string.ts`)

### `capitalizeFirstLetter(value: string): string`
Met la première lettre en majuscule.

### `isURL(str: string): boolean`
Vérifie si la chaîne commence par `http://` ou `https://`.

### `trigram(name: string | null): string`
Génère un trigramme (3 lettres) depuis un nom : `"Dupont"` → `"DPO"`.

### `getFileExtension(filePath: string): EFileExtension`
Extrait l'extension d'un chemin de fichier et retourne l'enum `EFileExtension`.

---

## Email (`mail.ts`)

### `isValidEmail(email: string): boolean`
Valide un email avec regex.

### `sendMail(mail: string): void`
Ouvre le client mail via `mailto:`.

---

## Fichiers (`file.ts`)

### `octetsToMo(octets: number): number`
Convertit des octets en mégaoctets.

### `compressImage(blob: Blob): Promise<Blob>`
Compresse une image via `compressorjs` (qualité 0.4, seuil 1 Mo).

### `downloadFile(url: string, filename?: string): void`
Déclenche le téléchargement d'un fichier via un lien `<a>` temporaire.

### `getBase64FromFile(file: File): Promise<string>`
Lit un fichier et retourne sa représentation base64.

---

## Math (`math.ts`)

### `createRange(number: number): number[]`
Crée un tableau `[1, 2, ..., n]`.
```typescript
createRange(5) // [1, 2, 3, 4, 5]
```

### `percentage(partialValue, totalValue): number`
Calcule un pourcentage : `(100 * partial) / total`.

### `roundToDecimal(number, precision): number`
Arrondit à N décimales.

---

## Couleur (`color.ts`)

### `isLight(color: string): boolean`
Détermine si une couleur hexadécimale est claire ou sombre (seuil brightness: 155).

---

## Presse-papiers (`clipboard.ts`)

### `copyTextToClipboard(text, success, error): Promise<void>`
Copie du texte dans le presse-papiers via l'API `navigator.clipboard`.
```typescript
copyTextToClipboard(
  this.value,
  (msg) => this._toast.success(msg),
  (msg) => this._toast.error(msg)
)
```

---

## Enum (`enum.ts`)

### `extractEnum(allEnum, backendOne = false): { value: number, name: string }[]`
Extrait les entrées numériques d'un enum TypeScript (filtre les clés inverses).

---

## Personne (`person.ts`)

### `fullName(naming?: { firstname, lastname }): string`
Concatène prénom et nom.

### `getCivilityIcon(civility: Civility): TaIconType | null`
Retourne l'icône correspondant à une civilité.
