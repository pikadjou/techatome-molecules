# `<ta-switch-language>` — `SwitchLanguageComponent`
**Quand l'utiliser** : Sélecteur de langue avec drapeaux, en mode inline, dropdown ou modale.
**Template canonique** :
```html
<!-- Mode dropdown dans un menu -->
<ta-switch-language mode="dropdown"></ta-switch-language>

<!-- Mode inline dans une page -->
<ta-switch-language mode="inline"></ta-switch-language>
```
**Inputs** :
- `mode: 'inline' | 'dropdown' | 'modal'` — mode d'affichage (défaut: `'inline'`)

**Configuration** : Langues disponibles via `TA_LANGUAGES` token (défaut: fr + en) :
```typescript
{ provide: TA_LANGUAGES, useValue: [{ id: 'fr', name: 'Français' }, { id: 'en', name: 'English' }, { id: 'nl', name: 'Nederlands' }] }
```

---

# `<ta-switch-language-cta>` — `SwitchLanguageCtaComponent`
**Quand l'utiliser** : Raccourci rapide qui affiche `<ta-switch-language mode="modal">`.
```html
<ta-switch-language-cta></ta-switch-language-cta>
```
