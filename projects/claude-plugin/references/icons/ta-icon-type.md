# `TaIconType` — enum des icônes SVG locales

**Import** : `TaIconType` depuis `@ta/icons`

**Usage dans les composants** : L'alias `this.icon` est disponible dans tous les composants étendant `TaBaseComponent`.

```typescript
// En TypeScript
import { TaIconType } from '@ta/icons';
const icon = TaIconType.Dashboard;

// Dans un composant (via TaAbstractComponent)
this.icon.Search // équivalent à TaIconType.Search
```

**Liste complète des 86 icônes** :

| Valeur | Usage |
|--------|-------|
| `Unknown` | Icône inconnue |
| `Add` | Ajouter |
| `Advisor` | Conseiller |
| `AppStore` | App Store |
| `Back` | Retour |
| `BoxChecked` | Boîte cochée |
| `BoxOut` | Boîte sortante |
| `BoxReturn` | Boîte retour |
| `Building` | Bâtiment |
| `Cancel` | Annuler |
| `CancelLight` | Annuler (light) |
| `Checked` | Coché |
| `CheckLight` | Check (light) |
| `Checklist` | Liste de vérification |
| `Close` | Fermer |
| `Comment` | Commentaire |
| `Company` | Entreprise |
| `Contacts` | Contacts |
| `Csv` | Fichier CSV |
| `Dashboard` | Tableau de bord |
| `Deal` | Affaire/Deal |
| `Delete` | Supprimer |
| `DeleteLight` | Supprimer (light) |
| `Devices` | Appareils |
| `Doc` | Document Word |
| `Download` | Télécharger |
| `Edit` | Modifier |
| `EditBook` | Modifier livre |
| `Email` | Email |
| `ErrorLogo` | Logo erreur |
| `Excel` | Fichier Excel |
| `ExclamationMark` | Point d'exclamation |
| `FileEmpty` | Fichier vide |
| `Filter` | Filtre |
| `Folder` | Dossier |
| `Gallery` | Galerie |
| `Gmail` | Gmail |
| `GoodJob` | Bravo |
| `Image` | Image |
| `Incident` | Incident |
| `Info` | Information |
| `Loader` | Chargement |
| `Maintenance` | Maintenance |
| `Map` | Carte |
| `Men` | Homme |
| `Menu` | Menu |
| `NoAccess` | Accès refusé |
| `NoResult` | Aucun résultat |
| `NotFound` | Non trouvé |
| `Offer` | Offre |
| `Pdf` | Fichier PDF |
| `Pencil` | Crayon |
| `Phone` | Téléphone |
| `Plan` | Plan |
| `Play` | Lecture |
| `PlayStore` | Play Store |
| `Ppt` | Fichier PowerPoint |
| `Profile` | Profil |
| `RightArrow` | Flèche droite |
| `RightArrowBlack` | Flèche droite (noire) |
| `Rocket` | Fusée |
| `Save` | Sauvegarder |
| `Search` | Rechercher |
| `Send` | Envoyer |
| `SendPlane` | Avion de papier |
| `Smartphone` | Smartphone |
| `Snooze` | Snooze |
| `Speak` | Parler |
| `Star` | Étoile |
| `Stop` | Arrêter |
| `Target` | Cible |
| `Task` | Tâche |
| `TeamsSupport` | Support Teams |
| `TechnicalSupport` | Support technique |
| `ThumbDown` | Pouce bas |
| `ThumbUp` | Pouce haut |
| `ToDo` | À faire |
| `Undo` | Annuler action |
| `UnknownFile` | Fichier inconnu |
| `Van` | Camionnette |
| `Visit` | Visite |
| `Waiting` | En attente |
| `Warning` | Avertissement |
| `Women` | Femme |
| `WorkInProgress` | En cours |
| `Xls` | Fichier XLS |

**Notes** : Utilisé principalement avec `<ta-local-icon>` (deprecated). Pour les nouveaux développements, utiliser les noms de classes Remix Icon avec `<ta-font-icon>`.
