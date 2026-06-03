# `<ta-criticity>` — `CriticityComponent`
**Quand l'utiliser** : Afficher une criticité P1/P2/P3 sous forme de badge coloré.
**Template canonique** :
```html
<ta-criticity [criticity]="ticket.criticity" />
```
**Inputs** :
- `criticity` (required) : `number | CriticityStatus` — enum `CriticityStatus` : `Unknown=0`, `P1=1` (danger), `P2=2` (warning), `P3=3` (success)

**Notes** : Utilise `<ta-badge>` en interne avec la couleur correspondant au niveau.
