# `SafePipe` — `safe` — bypass la sécurité Angular DomSanitizer

**Quand l'utiliser** : Injecter du contenu HTML, CSS, URL ou script en contournant la sanitisation Angular.

**Import** : `SafePipe` depuis `@ta/utils`

**Template** :
```html
<div [innerHTML]="htmlContent | safe:'html'"></div>
<img [src]="imageUrl | safe:'url'" />
<iframe [src]="videoUrl | safe:'resourceUrl'"></iframe>
<div [style]="cssString | safe:'style'"></div>
```

**Signature** : `transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl`

**Types acceptés** :
- `'html'` — `bypassSecurityTrustHtml()`
- `'style'` — `bypassSecurityTrustStyle()`
- `'script'` — `bypassSecurityTrustScript()`
- `'url'` — `bypassSecurityTrustUrl()`
- `'resourceUrl'` — `bypassSecurityTrustResourceUrl()`

**Notes** : Lève une erreur si le type est invalide. Utiliser avec précaution — ne bypasser que du contenu de confiance. Standalone.
