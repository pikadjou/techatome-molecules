# Classes CSS — Espacement

Généré depuis `$space` : `xs`=4px, `sm`=8px, `md`=16px, `lg`=24px, `xl`=32px, `xxl`=48px, `xxxl`=104px.

## Format général

```
.{propriété}-space-{taille}
```

## Padding

| Classe | CSS |
|--------|-----|
| `.p-space-xs` | `padding: 4px` |
| `.p-space-sm` | `padding: 8px` |
| `.p-space-md` | `padding: 16px` |
| `.p-space-lg` | `padding: 24px` |
| `.p-space-xl` | `padding: 32px` |
| `.p-space-xxl` | `padding: 48px` |
| `.px-space-md` | `padding-left: 16px; padding-right: 16px` |
| `.py-space-md` | `padding-top: 16px; padding-bottom: 16px` |
| `.pt-space-md` | `padding-top: 16px` |
| `.pb-space-md` | `padding-bottom: 16px` |
| `.pl-space-md` | `padding-left: 16px` |
| `.pr-space-md` | `padding-right: 16px` |

## Margin

| Classe | CSS |
|--------|-----|
| `.m-space-md` | `margin: 16px` |
| `.mx-space-md` | `margin-left: 16px; margin-right: 16px` |
| `.my-space-md` | `margin-top: 16px; margin-bottom: 16px` |
| `.mt-space-md` | `margin-top: 16px` |
| `.mb-space-md` | `margin-bottom: 16px` |
| `.ml-space-md` | `margin-left: 16px` |
| `.mr-space-md` | `margin-right: 16px` |

## Margin auto

| Classe | CSS |
|--------|-----|
| `.m-a` | `margin: auto` |
| `.mx-a` | `margin-left: auto; margin-right: auto` |
| `.my-a` | `margin-top: auto; margin-bottom: auto` |
| `.mt-a` | `margin-top: auto` |
| `.mr-a` | `margin-right: auto` |
| `.mb-a` | `margin-bottom: auto` |
| `.ml-a` | `margin-left: auto` |

## Gap

| Classe | CSS |
|--------|-----|
| `.g-space-xs` | `gap: 4px` |
| `.g-space-sm` | `gap: 8px` |
| `.g-space-md` | `gap: 16px` |
| `.g-space-lg` | `gap: 24px` |
| `.g-space-xl` | `gap: 32px` |
| `.g-space-xxl` | `gap: 48px` |

## Border radius

| Classe | CSS |
|--------|-----|
| `.bdr-radius-minimal` | `border-radius: 5px` |
| `.bdr-radius-rounded` | `border-radius: 10px` |
| `.bdr-radius-label` | `border-radius: 20px` |
| `.bdr-radius-full` | `border-radius: 40px` |

## Exemple

```html
<div class="flex-column g-space-md p-space-lg">
  <div class="mb-space-sm">Item 1</div>
  <div class="mt-a">Item aligné en bas</div>
</div>
```
