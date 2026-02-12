# @ta/utils - Complete Reference

## Abstract Base Classes

### TaAbstractComponent
Base for ALL components. Provides:
- `breakpoints: BreakpointDetection` - responsive detection
- `requestState: RequestState` - async state management
- `icon: typeof TaIconType` - icon enum reference
- `isMobile` / `isDesktop` computed booleans
- `_route`, `_router`, `_location` - injected routing
- `_registerSubscription(sub)` - auto-cleanup on destroy
- `ngOnDestroy()` - auto-unsubscribes all registered subs

### TaBaseComponent (extends TaAbstractComponent)
Adds: `trackById(_, item)`, `trackByKey(_, item)` for `@for` optimization

### TaBasePage (extends TaAbstractComponent)
Adds typed routing params:
```typescript
_getPathParams<T>(data: T): Observable<T>   // route params
_getQueryParams<T>(data: T): Observable<T>  // query string params
// Auto-converts string params to expected types (number, boolean)
```

### TaBaseModal (extends TaAbstractComponent)
Minimal modal base class.

## Directives

| Directive | Selector | Usage |
|-----------|----------|-------|
| `StopPropagationDirective` | `[appStopPropagation]` | Stops click propagation. Input: `stopPropagationActivation` |
| `DndDirective` | `[appDnd]` | Drag-and-drop file upload. Output: `fileDropped` |
| `LetDirective` | `[ngLet]` | Template variable binding with signals |
| `OnRenderDirective` | `[TaOnRender]` | Render lifecycle. Input: `onRender`, Output: `rendered` |
| `TypedTemplateDirective` | `ng-template[typedTemplate]` | Type-safe template contexts |

## Pipes

| Pipe | Usage | Example |
|------|-------|---------|
| `fileSize` | `{{ bytes \| fileSize }}` | `1048576 \| fileSize` → "1 MB" |
| `join` | `{{ array \| join:sep }}` | `['a','b'] \| join:'-'` → "a-b" |
| `pluralTranslate` | `{{ key \| pluralTranslate:count }}` | Returns `key.one` or `key.plural` |
| `safe` | `{{ html \| safe:'html' }}` | Bypasses DomSanitizer. Types: html, style, script, url, resourceUrl |

## Helpers

### RequestState
```typescript
const rs = new RequestState();
rs.asked();                  // Start loading
rs.completed();              // Stop loading
rs.onError(500, 'msg');     // Set error
rs.isLoading();             // signal<boolean>
rs.getErrorStatus();        // number
rs.getErrorMessage();       // string
rs.clean();                 // Reset all
rs.resetError();            // Clear error only
```

### BreakpointDetection
```typescript
const bp = new BreakpointDetection();
// Sync: bp.isMobile, bp.isDesktop, bp.isTablette
// Sync: bp.isLessThanSM, bp.isMoreThanMD, etc.
// Async: bp.isMobile$, bp.isDesktop$, bp.isLessThanSM$, etc.
```
Breakpoints: XS(0-575), SM(576-767), MD(768-991), LG(992-1199), XL(1200-1399), XXL(1400+)

### SubscriberHandler
```typescript
const sh = new SubscriberHandler();
sh.registerSubscription(obs$.subscribe(...));
sh.destroy(); // Unsubscribes all
```

### HorizontalScroll
```typescript
// After ngAfterViewInit:
new HorizontalScroll(element.nativeElement);
// Enables mouse-drag horizontal scrolling
```

## Utility Functions

### Array
- `isArray(v)` - type check
- `getUniqueValues<T>(arr, prop)` - unique by property
- `getUniqueArray<T>(arr)` - remove duplicates
- `isNonNullable<T>(v)` - type guard (filters null/undefined)
- `filterNonNullableItems<T>(list)` - filter null items
- `toArray<T>(v)` - wrap in array if not already
- `keepUniqueObjectByProperty<T>(list, prop)` - unique objects by prop

### String
- `capitalizeFirstLetter(v)` - capitalize first char
- `trigram(name)` - 3-letter code from name
- `isURL(str)` - regex check for http(s)://
- `getFileExtension(path)` - returns EFileExtension enum
- `getFullFileNameFromUrl(url)` - extract filename from URL
- `convertToNumber(values)` - string[] to number[]

### Object
- `isObject(v)` - strict object check
- `isNotEmptyObject(v)` - has keys
- `merge(override?)` - deep immutable merge
- `getPropertyTypes<T>(obj)` - map of property types
- `ObjectKeys<T>(obj)` - type-safe Object.keys()
- `ObjectKeysReOrder<T>(base, order)` - reorder properties
- `removeObjectKeys<T>(obj, keys)` - remove keys
- `compareObjectsByKeys<T>(a, b, keys)` - compare specific keys

### Date
- `toLocalDateString(utc)` - UTC to local string
- `toLocalDate(utc)` - UTC to local Date
- `toUtcDate(local)` - local to UTC Date
- `diffInHourAndMinutes(start, end)` - `{ h: string, m: string }`
- `isStrictISODateString(v)` - validates ISO 8601

### File
- `octetsToMo(octets)` - bytes to MB
- `extractExtension(name)` - get file extension
- `getBase64FromFile(file)` - File to base64 (Promise)
- `compressImage(blob)` - CompressorJS compression (quality: 0.4)
- `downloadFile(url)` - open/download file
- `determineNewSize(h, w, newW, newH)` - aspect-ratio preserving resize

### Math
- `createRange(n)` - [1..n] array
- `roundToDecimal(n, precision)` - round to decimals
- `percentage(partial, total)` - percentage calc

### Identifier
- `newGuid()` - UUID v4 string
- `newId()` - random 1-1000000

### Other
- `copyTextToClipboard(text, success, error)` - async clipboard copy
- `isLight(color)` - hex color brightness check
- `compare(a, b, isAsc)` - generic sort comparison
- `search(array, term)` - fuzzy search with slugify
- `sendMail(mail)` - mailto: link
- `isValidEmail(email)` - regex validation
- `call(phone)` - tel: link
- `openMap(query)` - Google Maps link
- `openExternalUrl(url)` - new window
- `sort(array, { active, direction })` - sort by property
- `getModifiedValues<T>(current, initial)` - diff only changed properties
- `extractEnum(enum, backendOne?)` - enum to `{ value, name }[]`
- `getCivilityIcon(civility)` - Civility to TaIconType
- `fullName(naming)` - firstname + lastname

## Types & Enums

```typescript
enum Civility { Unknown=0, Sir=1, Madame=2, Dear=3 }
enum Culture { Unknown=0, FR_FR=10, FR_BE=11, NL_NL=20, EN_EN=30, ES_ES=40 }
enum EFileExtension { Unknown=0, PDF=1, Excel=2, Word=3, Image=4 }
type FileType = "Unknown" | "Document" | "Image"
type RecursivePartial<T> = { [P in keyof T]?: any }
type MessageLevel = "danger" | "info" | "warning" | "success"

interface FileData<T> {
  id: number; url: string; thumbnailUrl?: string;
  type: FileType; fileExtension?: EFileExtension;
  name?: string; fileMetaData?: T; isLoading?: boolean; isSelected?: boolean;
}
```

## Service
- `ReadOnlyContextService` - `isReadOnly$: Observable<boolean>`, `setReadonly(value: boolean)`
