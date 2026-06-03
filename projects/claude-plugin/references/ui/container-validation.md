# `<ta-container-validation>` — `ContainerValidationComponent`
**Quand l'utiliser** : Bouton de validation qui ouvre une modale de confirmation avant d'émettre l'événement.
**Template canonique** :
```html
<ta-container-validation
  [title]="'Confirmer la suppression'"
  [subtitle]="'Cette action est irréversible'"
  [disabled]="!canDelete"
  (validated)="onConfirm()"
>
  Supprimer
</ta-container-validation>
```
**Inputs** :
- `disabled` : `boolean` — `false` par défaut
- `title` : `string` — clé i18n (`'validation.modal.title'` par défaut)
- `subtitle` : `string` — clé i18n (`'validation.modal.content'` par défaut)

**Outputs** : `(validated)` — émis après confirmation dans la modale.
