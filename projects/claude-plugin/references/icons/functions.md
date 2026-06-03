# Fonctions utilitaires `@ta/icons`

**Import** : depuis `@ta/icons`

## `isFontIcon(icon: string | TaIconType): boolean`
Détermine si une icône est une icône de police (string) plutôt qu'un `TaIconType`.
```typescript
isFontIcon('ri-home-line') // true
isFontIcon(TaIconType.Dashboard) // false
```

## `isLocalIcon(icon: string | TaIconType): boolean`
Détermine si une icône correspond à une valeur de `TaIconType`.
```typescript
isLocalIcon(TaIconType.Search) // true
isLocalIcon('ri-search-line') // false
```

## `getFontIcon(icon: string | TaIconType): string`
Retourne la string de classe si c'est une font icon, sinon `""`.
```typescript
getFontIcon('ri-home-line') // 'ri-home-line'
getFontIcon(TaIconType.Dashboard) // ''
```

**Notes** : Ces fonctions sont utiles pour les composants qui acceptent indifféremment une font icon (string Remix) ou une icône SVG locale (`TaIconType`), et qui doivent brancher sur l'un ou l'autre selon le type.
