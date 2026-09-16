/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------

export interface DemoIndexExample {
  title: string;
  slug: string;
  className: string;
  skipHarness: boolean;
}

export interface DemoIndexEntry {
  summary: string;
  notRenderable: boolean;
  examples: DemoIndexExample[];
}

/** Résumés et titres lisibles sans importer les démos, pour le harness et l'index de paquet. */
export const DEMO_INDEX: Record<string, DemoIndexEntry> = {
  "ta-action-button": {
    "examples": [
      {
        "className": "TaActionButtonSingleExample",
        "skipHarness": false,
        "slug": "action-unique",
        "title": "Action unique"
      },
      {
        "className": "TaActionButtonMultipleExample",
        "skipHarness": false,
        "slug": "actions-multiples",
        "title": "Actions multiples"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton flottant à puce, qui déclenche une action seule directement ou déploie un menu au-delà d'une."
  },
  "ta-address": {
    "examples": [
      {
        "className": "TaAddressValuesExample",
        "skipHarness": false,
        "slug": "adresses",
        "title": "Adresses"
      }
    ],
    "notRenderable": false,
    "summary": "Ligne d'adresse formatée, avec le nom de pays résolu depuis son code ISO."
  },
  "ta-badge": {
    "examples": [
      {
        "className": "TaBadgeTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaBadgeIconExample",
        "skipHarness": false,
        "slug": "avec-icone",
        "title": "Avec icône"
      },
      {
        "className": "TaBadgeClickableExample",
        "skipHarness": false,
        "slug": "cliquable",
        "title": "Cliquable"
      }
    ],
    "notRenderable": false,
    "summary": "Pastille d'état, déclinée en huit intentions de couleur, avec icône optionnelle et clic toujours actif."
  },
  "ta-banner": {
    "examples": [
      {
        "className": "TaBannerTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      }
    ],
    "notRenderable": false,
    "summary": "Bandeau de message, décliné en sept intentions de couleur ; épinglé en haut du viewport hors du mode `inline`."
  },
  "ta-bar-chart": {
    "examples": [
      {
        "className": "TaBarChartComparisonExample",
        "skipHarness": false,
        "slug": "deux-series-comparees",
        "title": "Deux séries comparées"
      },
      {
        "className": "TaBarChartHorizontalExample",
        "skipHarness": false,
        "slug": "barres-horizontales",
        "title": "Barres horizontales"
      }
    ],
    "notRenderable": false,
    "summary": "Graphique en barres Chart.js. Le composant ne déclare aucun input propre : `labels`, `datasets`, `chartOptions` et `chartHeight` viennent tous de `BaseChartComponent`."
  },
  "ta-benefit-item": {
    "examples": [
      {
        "className": "TaBenefitItemTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      }
    ],
    "notRenderable": false,
    "summary": "Ligne à icône et bordure colorée pour signaler un statut, sur fond neutre."
  },
  "ta-boolean-icon": {
    "examples": [
      {
        "className": "TaBooleanIconStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaBooleanIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      }
    ],
    "notRenderable": false,
    "summary": "Icône de statut booléen, avec un état « non communiqué » distinct pour `null`/`undefined`."
  },
  "ta-bottom-sheet-template-basic": {
    "examples": [
      {
        "className": "TaBottomSheetTemplateBasicVerticalExample",
        "skipHarness": false,
        "slug": "orientation-verticale",
        "title": "Orientation verticale"
      },
      {
        "className": "TaBottomSheetTemplateBasicSecureExample",
        "skipHarness": false,
        "slug": "orientation-horizontale-et-action-securisee",
        "title": "Orientation horizontale et action sécurisée"
      }
    ],
    "notRenderable": false,
    "summary": "Contenu standard d'un `MatBottomSheet` : une liste d'actions (icône, libellé, sous-titre optionnel) fournie via le jeton `MAT_BOTTOM_SHEET_DATA`, pas par des `@Input()`."
  },
  "ta-bottom-sheet-template-generic": {
    "examples": [],
    "notRenderable": true,
    "summary": "Coquille générique d'un `MatBottomSheet` : un `TemplateRef` et un contexte libres, fournis via `MAT_BOTTOM_SHEET_DATA` — mais le contenu projeté ne s'affiche jamais (voir ci-dessous)."
  },
  "ta-bullet": {
    "examples": [
      {
        "className": "TaBulletTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaBulletSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaBulletNotifExample",
        "skipHarness": false,
        "slug": "avec-contenu",
        "title": "Avec contenu"
      }
    ],
    "notRenderable": false,
    "summary": "Puce colorée, ronde par défaut, avec un contenu projeté pour le type `notif`."
  },
  "ta-button": {
    "examples": [
      {
        "className": "TaButtonTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaButtonIconExample",
        "skipHarness": false,
        "slug": "avec-icone",
        "title": "Avec icône"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton d'action, décliné en quatre types, trois tailles et trois états."
  },
  "ta-button-tool": {
    "examples": [
      {
        "className": "TaButtonToolSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaButtonToolStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaButtonToolReadonlyExample",
        "skipHarness": false,
        "slug": "lecture-seule",
        "title": "Lecture seule"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton icône seul, en sept tailles et trois états, avec un blocage natif distinct via `readonly`."
  },
  "ta-card": {
    "examples": [
      {
        "className": "TaCardBasicExample",
        "skipHarness": false,
        "slug": "composition",
        "title": "Composition"
      },
      {
        "className": "TaCardFlagsExample",
        "skipHarness": false,
        "slug": "drapeaux",
        "title": "Drapeaux"
      },
      {
        "className": "TaCardDirectionExample",
        "skipHarness": false,
        "slug": "direction",
        "title": "Direction"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur de contenu à projection, avec en-tête, titre et corps optionnels."
  },
  "ta-card-content": {
    "examples": [
      {
        "className": "TaCardContentBasicExample",
        "skipHarness": false,
        "slug": "entre-en-tete-et-action",
        "title": "Entre en-tête et action"
      }
    ],
    "notRenderable": false,
    "summary": "Corps d'une carte, entre l'en-tête et la zone d'action (sélecteur `ta-card-content` dans `card.component.html`)."
  },
  "ta-card-cta": {
    "examples": [
      {
        "className": "TaCardCtaActionsExample",
        "skipHarness": false,
        "slug": "boutons-d-action",
        "title": "Boutons d'action"
      }
    ],
    "notRenderable": false,
    "summary": "Zone d'action en pied de carte, projetée via le sélecteur `ta-card-cta` de `card.component.html` — typiquement un ou plusieurs boutons."
  },
  "ta-card-header": {
    "examples": [
      {
        "className": "TaCardHeaderCompositionExample",
        "skipHarness": false,
        "slug": "composition-complete",
        "title": "Composition complète"
      },
      {
        "className": "TaCardHeaderMinimalExample",
        "skipHarness": false,
        "slug": "emplacements-optionnels",
        "title": "Emplacements optionnels"
      }
    ],
    "notRenderable": false,
    "summary": "Zone d'en-tête d'une carte : recueille les projections nommées `ta-card-tag`, `ta-card-title` et `ta-card-subtitle` au-dessus du contenu."
  },
  "ta-card-image": {
    "examples": [
      {
        "className": "TaCardImageSrcExample",
        "skipHarness": false,
        "slug": "deux-images",
        "title": "Deux images"
      }
    ],
    "notRenderable": false,
    "summary": "Image en tête d'une carte : `src` (chaîne, vide par défaut) est liée directement à l'attribut `src` de la balise `<img>`."
  },
  "ta-card-subtitle": {
    "examples": [
      {
        "className": "TaCardSubtitlePresentExample",
        "skipHarness": false,
        "slug": "avec-sous-titre",
        "title": "Avec sous-titre"
      },
      {
        "className": "TaCardSubtitleAbsentExample",
        "skipHarness": false,
        "slug": "sans-sous-titre",
        "title": "Sans sous-titre"
      }
    ],
    "notRenderable": false,
    "summary": "Sous-titre facultatif d'une carte, projeté sous le titre dans `ta-card-header` (sélecteur `ta-card-subtitle`)."
  },
  "ta-card-tag": {
    "examples": [
      {
        "className": "TaCardTagSuccessExample",
        "skipHarness": false,
        "slug": "etiquette-de-succes",
        "title": "Étiquette de succès"
      },
      {
        "className": "TaCardTagDangerExample",
        "skipHarness": false,
        "slug": "etiquette-de-danger",
        "title": "Étiquette de danger"
      }
    ],
    "notRenderable": false,
    "summary": "Zone d'étiquette d'une carte, projetée au-dessus du titre dans `ta-card-header` (sélecteur `ta-card-tag`) ; ne porte elle-même aucun style, tout vient de ce qu'elle projette."
  },
  "ta-card-title": {
    "examples": [
      {
        "className": "TaCardTitleBasicExample",
        "skipHarness": false,
        "slug": "dans-un-en-tete",
        "title": "Dans un en-tête"
      }
    ],
    "notRenderable": false,
    "summary": "Titre d'une carte, projeté dans `ta-card-header` (sélecteur `ta-card-title`) et rendu sans mise en forme propre."
  },
  "ta-civility": {
    "examples": [
      {
        "className": "TaCivilityValuesExample",
        "skipHarness": false,
        "slug": "valeurs",
        "title": "Valeurs"
      }
    ],
    "notRenderable": false,
    "summary": "Icône Material associée à une civilité (`Civility` de `@ta/utils`)."
  },
  "ta-cms": {
    "examples": [
      {
        "className": "TaCmsLoadedExample",
        "skipHarness": false,
        "slug": "contenu-charge",
        "title": "Contenu chargé"
      },
      {
        "className": "TaCmsLoadingExample",
        "skipHarness": false,
        "slug": "chargement",
        "title": "Chargement"
      },
      {
        "className": "TaCmsErrorExample",
        "skipHarness": false,
        "slug": "erreur",
        "title": "Erreur"
      }
    ],
    "notRenderable": false,
    "summary": "Contenu Strapi identifié par `contentType`, avec chargement, erreur et rendu enchaînés via `RequestState`."
  },
  "ta-cms-editor-blocks": {
    "examples": [
      {
        "className": "TaCmsEditorBlocksTypesExample",
        "skipHarness": false,
        "slug": "tous-les-types-de-blocs",
        "title": "Tous les types de blocs"
      }
    ],
    "notRenderable": false,
    "summary": "Rendu en lecture seule d'un contenu produit par `ta-cms-editor-input`, bloc par bloc."
  },
  "ta-cms-editor-input": {
    "examples": [
      {
        "className": "TaCmsEditorInputEmptyExample",
        "skipHarness": false,
        "slug": "vide",
        "title": "Vide"
      },
      {
        "className": "TaCmsEditorInputInitialExample",
        "skipHarness": false,
        "slug": "contenu-initial-et-mentions",
        "title": "Contenu initial et mentions"
      },
      {
        "className": "TaCmsEditorInputSaveExample",
        "skipHarness": false,
        "slug": "sauvegarde-pilotee",
        "title": "Sauvegarde pilotée"
      },
      {
        "className": "TaCmsEditorInputMaxHeightExample",
        "skipHarness": false,
        "slug": "hauteur-limitee-et-outils-restreints",
        "title": "Hauteur limitée et outils restreints"
      }
    ],
    "notRenderable": false,
    "summary": "Éditeur de contenu riche (EditorJS), piloté par un modèle de blocs et une sauvegarde externe."
  },
  "ta-component-selector-modal": {
    "examples": [
      {
        "className": "TaComponentSelectorModalBasicExample",
        "skipHarness": false,
        "slug": "selection-dans-une-modale",
        "title": "Sélection dans une modale"
      }
    ],
    "notRenderable": false,
    "summary": "Modale générique qui projette le `TemplateRef` porté par un modèle `InputComponent` ; c'est elle que `ta-input-component` ouvre en interne, mais elle se pilote aussi seule via `open`/`inputData`/`closeEvent`."
  },
  "ta-contact-information": {
    "examples": [
      {
        "className": "TaContactInformationIconsExample",
        "skipHarness": false,
        "slug": "icone-material-ou-icone-locale",
        "title": "Icône Material ou icône locale"
      },
      {
        "className": "TaContactInformationEmptyValueExample",
        "skipHarness": false,
        "slug": "valeur-absente",
        "title": "Valeur absente"
      }
    ],
    "notRenderable": false,
    "summary": "En-tête icône + valeur (passée dans `translate`), avec une zone de contenu projeté en dessous."
  },
  "ta-container-validation": {
    "examples": [
      {
        "className": "TaContainerValidationConfirmExample",
        "skipHarness": false,
        "slug": "confirmation-avant-action",
        "title": "Confirmation avant action"
      },
      {
        "className": "TaContainerValidationDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      },
      {
        "className": "TaContainerValidationInlineExample",
        "skipHarness": false,
        "slug": "confirmation-dans-le-flux",
        "title": "Confirmation dans le flux"
      }
    ],
    "notRenderable": false,
    "summary": "Enrobe un contenu projeté (typiquement un bouton) d'une confirmation ouverte au clic — en modale, ou dans le flux."
  },
  "ta-context-menu": {
    "examples": [
      {
        "className": "TaContextMenuGridExample",
        "skipHarness": false,
        "slug": "grille-de-tuiles",
        "title": "Grille de tuiles"
      }
    ],
    "notRenderable": false,
    "summary": "Grille d'actions en tuiles (icône + libellé), une tuile par élément de `menu`, chacune un `routerLink`."
  },
  "ta-copy-link-button": {
    "examples": [
      {
        "className": "TaCopyLinkButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaCopyLinkButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton qui copie une valeur dans le presse-papier au clic, en trois tailles et trois états."
  },
  "ta-criticity": {
    "examples": [
      {
        "className": "TaCriticityValuesExample",
        "skipHarness": false,
        "slug": "niveaux",
        "title": "Niveaux"
      }
    ],
    "notRenderable": false,
    "summary": "Badge de criticité (`ta-badge`), coloré selon le niveau `CriticityStatus`."
  },
  "ta-culture": {
    "examples": [
      {
        "className": "TaCultureListExample",
        "skipHarness": false,
        "slug": "liste-de-cultures",
        "title": "Liste de cultures"
      },
      {
        "className": "TaCultureEmptyExample",
        "skipHarness": false,
        "slug": "liste-vide",
        "title": "Liste vide"
      }
    ],
    "notRenderable": false,
    "summary": "Liste de cultures affichées en ligne, séparées par des virgules."
  },
  "ta-dashboard-card": {
    "examples": [
      {
        "className": "TaDashboardCardKpisExample",
        "skipHarness": false,
        "slug": "trois-indicateurs",
        "title": "Trois indicateurs"
      }
    ],
    "notRenderable": false,
    "summary": "Carte indicateur : une icône Material obligatoire, un titre et un sous-titre projetés, un corps libre en dessous."
  },
  "ta-default-panel": {
    "examples": [
      {
        "className": "TaDefaultPanelOverlayExample",
        "skipHarness": false,
        "slug": "via-ta-overlay-panel",
        "title": "Via ta-overlay-panel"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau générique qui projette un `TemplateRef` reçu par injection ; c'est le contenu par défaut d'un `ta-overlay-panel`."
  },
  "ta-department-icon-list": {
    "examples": [
      {
        "className": "TaDepartmentIconListWithNameExample",
        "skipHarness": false,
        "slug": "avec-noms",
        "title": "Avec noms"
      },
      {
        "className": "TaDepartmentIconListWithoutNameExample",
        "skipHarness": false,
        "slug": "sans-noms",
        "title": "Sans noms"
      }
    ],
    "notRenderable": false,
    "summary": "Liste d'icônes de départements, avec ou sans nom affiché à côté de chacune."
  },
  "ta-department-professions": {
    "examples": [
      {
        "className": "TaDepartmentProfessionsFullExample",
        "skipHarness": false,
        "slug": "liste-complete",
        "title": "Liste complète"
      },
      {
        "className": "TaDepartmentProfessionsMaxVisibleExample",
        "skipHarness": false,
        "slug": "plafonnee",
        "title": "Plafonnée"
      }
    ],
    "notRenderable": false,
    "summary": "Liste de professions en badges, avec un plafond optionnel et un compteur du surplus."
  },
  "ta-departments": {
    "examples": [
      {
        "className": "TaDepartmentsDefaultExample",
        "skipHarness": false,
        "slug": "departements-et-professions",
        "title": "Départements et professions"
      }
    ],
    "notRenderable": false,
    "summary": "Compose `ta-department-icon-list` et `ta-department-professions` l'un sous l'autre."
  },
  "ta-documents-list": {
    "examples": [
      {
        "className": "TaDocumentsListDefaultExample",
        "skipHarness": false,
        "slug": "liste-par-defaut",
        "title": "Liste par défaut"
      },
      {
        "className": "TaDocumentsListSelectionExample",
        "skipHarness": false,
        "slug": "selection",
        "title": "Sélection"
      },
      {
        "className": "TaDocumentsListDeleteExample",
        "skipHarness": false,
        "slug": "suppression",
        "title": "Suppression"
      },
      {
        "className": "TaDocumentsListReadonlyExample",
        "skipHarness": false,
        "slug": "lecture-seule",
        "title": "Lecture seule"
      },
      {
        "className": "TaDocumentsListEmptyExample",
        "skipHarness": false,
        "slug": "vide",
        "title": "Vide"
      }
    ],
    "notRenderable": false,
    "summary": "Liste de documents pilotée par `TaDocumentsService`, avec sélection ou suppression optionnelles."
  },
  "ta-doughnut-chart": {
    "examples": [
      {
        "className": "TaDoughnutChartDevicesExample",
        "skipHarness": false,
        "slug": "repartition-du-trafic-par-appareil",
        "title": "Répartition du trafic par appareil"
      }
    ],
    "notRenderable": false,
    "summary": "Graphique en anneau Chart.js, sans input propre : `labels` et `datasets` viennent de `BaseChartComponent`, commun aux cinq composants du paquet."
  },
  "ta-dual-button": {
    "examples": [
      {
        "className": "TaDualButtonTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaDualButtonFullExample",
        "skipHarness": false,
        "slug": "pleine-largeur",
        "title": "Pleine largeur"
      }
    ],
    "notRenderable": false,
    "summary": "Paire de boutons accolés, chacun avec sa propre icône, son libellé et son `callback`."
  },
  "ta-duration": {
    "examples": [
      {
        "className": "TaDurationShortExample",
        "skipHarness": false,
        "slug": "moins-d-une-heure",
        "title": "Moins d'une heure"
      },
      {
        "className": "TaDurationLongExample",
        "skipHarness": false,
        "slug": "plusieurs-unites",
        "title": "Plusieurs unités"
      }
    ],
    "notRenderable": false,
    "summary": "Durée entre deux dates, exprimée en années/mois/jours/heures via `date-fns`."
  },
  "ta-edit-field": {
    "examples": [
      {
        "className": "TaEditFieldBasicExample",
        "skipHarness": false,
        "slug": "edition-au-clic",
        "title": "Édition au clic"
      },
      {
        "className": "TaEditFieldStatesExample",
        "skipHarness": false,
        "slug": "desactive-et-sans-bordure",
        "title": "Désactivé et sans bordure"
      },
      {
        "className": "TaEditFieldLoadingExample",
        "skipHarness": false,
        "slug": "chargement",
        "title": "Chargement"
      }
    ],
    "notRenderable": false,
    "summary": "Champ affiché en lecture, qui bascule vers un `ta-inputs` d'édition au clic puis se referme au clic extérieur."
  },
  "ta-empty": {
    "examples": [
      {
        "className": "TaEmptyDefaultExample",
        "skipHarness": false,
        "slug": "complet-avec-action",
        "title": "Complet, avec action"
      },
      {
        "className": "TaEmptyLightExample",
        "skipHarness": false,
        "slug": "version-legere",
        "title": "Version légère"
      },
      {
        "className": "TaEmptyContentExample",
        "skipHarness": false,
        "slug": "avec-contenu-non-vide",
        "title": "Avec contenu (non vide)"
      }
    ],
    "notRenderable": false,
    "summary": "État vide standard (icône, titre, sous-titre, action) ou passe-plat vers le contenu projeté quand `isEmpty` est faux."
  },
  "ta-error": {
    "examples": [
      {
        "className": "TaErrorRetryExample",
        "skipHarness": false,
        "slug": "avec-bouton-de-reessai",
        "title": "Avec bouton de réessai"
      },
      {
        "className": "TaErrorNoRetryExample",
        "skipHarness": false,
        "slug": "sans-bouton-de-reessai",
        "title": "Sans bouton de réessai"
      },
      {
        "className": "TaErrorPassthroughExample",
        "skipHarness": false,
        "slug": "message-vide",
        "title": "Message vide"
      }
    ],
    "notRenderable": false,
    "summary": "Bloc d'erreur (icône, titre, message, bouton de réessai) affiché tant que `message` n'est pas vide."
  },
  "ta-excel-viewer": {
    "examples": [
      {
        "className": "TaExcelViewerDefaultExample",
        "skipHarness": false,
        "slug": "apercu",
        "title": "Aperçu"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu d'un fichier Excel dans un `ngx-doc-viewer` (`viewer=\"office\"`)."
  },
  "ta-expandable-text": {
    "examples": [
      {
        "className": "TaExpandableTextShortExample",
        "skipHarness": false,
        "slug": "texte-court",
        "title": "Texte court"
      },
      {
        "className": "TaExpandableTextLongExample",
        "skipHarness": false,
        "slug": "texte-long",
        "title": "Texte long"
      }
    ],
    "notRenderable": false,
    "summary": "Bloc de texte projeté, tronqué à `height` pixels avec un bouton de bascule quand le contenu dépasse."
  },
  "ta-expansion-panel": {
    "examples": [
      {
        "className": "TaExpansionPanelSectionsExample",
        "skipHarness": false,
        "slug": "sections",
        "title": "Sections"
      }
    ],
    "notRenderable": false,
    "summary": "Accordéon Material : une entrée `templates`, un couple `{ title, content }` de `TemplateRef` par panneau."
  },
  "ta-file-image": {
    "examples": [
      {
        "className": "TaFileImageExtensionsExample",
        "skipHarness": false,
        "slug": "extensions-reconnues",
        "title": "Extensions reconnues"
      },
      {
        "className": "TaFileImageSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      }
    ],
    "notRenderable": false,
    "summary": "Pictogramme de fichier déduit de l'extension du nom passé en entrée."
  },
  "ta-files-display": {
    "examples": [
      {
        "className": "TaFilesDisplayNoAddExample",
        "skipHarness": false,
        "slug": "sans-bouton-d-ajout",
        "title": "Sans bouton d'ajout"
      },
      {
        "className": "TaFilesDisplayDocumentsExample",
        "skipHarness": false,
        "slug": "documents",
        "title": "Documents"
      },
      {
        "className": "TaFilesDisplayImagesExample",
        "skipHarness": false,
        "slug": "images",
        "title": "Images"
      },
      {
        "className": "TaFilesDisplayTempFilesExample",
        "skipHarness": false,
        "slug": "fichiers-en-cours-d-envoi",
        "title": "Fichiers en cours d'envoi"
      }
    ],
    "notRenderable": false,
    "summary": "Liste de fichiers pilotée par un flux `files$`, avec navigation, fichiers temporaires et envoi."
  },
  "ta-files-edit": {
    "examples": [
      {
        "className": "TaFilesEditDefaultExample",
        "skipHarness": false,
        "slug": "retouche-et-export",
        "title": "Retouche et export"
      }
    ],
    "notRenderable": false,
    "summary": "Éditeur d'image (tui-image-editor intégré) : dessin, formes, texte, undo/redo, puis export en `Blob`."
  },
  "ta-files-list": {
    "examples": [
      {
        "className": "TaFilesListDocumentsExample",
        "skipHarness": false,
        "slug": "documents",
        "title": "Documents"
      },
      {
        "className": "TaFilesListImagesExample",
        "skipHarness": false,
        "slug": "images-et-documents-meles",
        "title": "Images et documents mêlés"
      },
      {
        "className": "TaFilesListDeletableExample",
        "skipHarness": false,
        "slug": "suppression",
        "title": "Suppression"
      }
    ],
    "notRenderable": false,
    "summary": "Grille de fichiers (`ta-file-card` pour les documents, vignette pour les images), sélection et suppression."
  },
  "ta-files-preview": {
    "examples": [
      {
        "className": "TaFilesPreviewPdfExample",
        "skipHarness": false,
        "slug": "pdf",
        "title": "PDF"
      },
      {
        "className": "TaFilesPreviewImageExample",
        "skipHarness": false,
        "slug": "image",
        "title": "Image"
      },
      {
        "className": "TaFilesPreviewUnsupportedExample",
        "skipHarness": false,
        "slug": "extension-non-prise-en-charge",
        "title": "Extension non prise en charge"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu d'un document : titre, date, poids, visualiseur adapté à l'extension, et téléchargement."
  },
  "ta-files-preview-modal": {
    "examples": [
      {
        "className": "TaFilesPreviewModalToggleExample",
        "skipHarness": false,
        "slug": "ouverture-fermeture",
        "title": "Ouverture / fermeture"
      },
      {
        "className": "TaFilesPreviewModalGalleryExample",
        "skipHarness": false,
        "slug": "galerie",
        "title": "Galerie"
      },
      {
        "className": "TaFilesPreviewModalSignedExample",
        "skipHarness": false,
        "slug": "adresse-sans-extension",
        "title": "Adresse sans extension"
      }
    ],
    "notRenderable": false,
    "summary": "Visionneuse plein écran : une pièce isolée, ou une galerie parcourable."
  },
  "ta-files-upload": {
    "examples": [
      {
        "className": "TaFilesUploadActionButtonExample",
        "skipHarness": false,
        "slug": "bouton-d-action",
        "title": "Bouton d'action"
      },
      {
        "className": "TaFilesUploadSeparateButtonsExample",
        "skipHarness": false,
        "slug": "boutons-separes",
        "title": "Boutons séparés"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton(s) de téléversement : prise de photo, choix d'image ou de document, selon `features`."
  },
  "ta-filter-container": {
    "examples": [
      {
        "className": "TaFilterContainerFormExample",
        "skipHarness": false,
        "slug": "formulaire-de-filtres",
        "title": "Formulaire de filtres"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau de filtres plein hauteur (`ta-layout-side`) rendant un `ta-form` depuis `form`, avec un lien « Effacer » et un bouton « Valider »."
  },
  "ta-filter-displayer": {
    "examples": [],
    "notRenderable": true,
    "summary": "Déclencheur (bouton ou lien) censé ouvrir un `ta-filter-container` en panneau plein écran ; sur mobile, une feuille du bas."
  },
  "ta-filters-container": {
    "examples": [
      {
        "className": "TaFiltersContainerWorkingExample",
        "skipHarness": false,
        "slug": "filtres-appliques-sur-une-liste",
        "title": "Filtres appliqués sur une liste"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau de filtres repliable, avec ses tags actifs intégrés (`ta-filters-tag`) et une zone de contenu projetée."
  },
  "ta-filters-tag": {
    "examples": [
      {
        "className": "TaFiltersTagRemovableExample",
        "skipHarness": false,
        "slug": "filtres-actifs-retirables",
        "title": "Filtres actifs, retirables"
      }
    ],
    "notRenderable": false,
    "summary": "Rangée de `ta-badge` (`type=\"info\"`, icône `close`) affichant les filtres actifs ; cliquer la croix d'un badge retire ce filtre."
  },
  "ta-flag-icon": {
    "examples": [
      {
        "className": "TaFlagIconCodesExample",
        "skipHarness": false,
        "slug": "drapeaux-disponibles",
        "title": "Drapeaux disponibles"
      },
      {
        "className": "TaFlagIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaFlagIconUnknownCodeExample",
        "skipHarness": false,
        "slug": "code-non-reconnu",
        "title": "Code non reconnu"
      }
    ],
    "notRenderable": false,
    "summary": "Drapeau SVG intégré, pour sept codes de langue câblés en dur, en quatre tailles distinctes."
  },
  "ta-font-icon": {
    "examples": [
      {
        "className": "TaFontIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaFontIconNamesExample",
        "skipHarness": false,
        "slug": "echantillon-de-noms",
        "title": "Échantillon de noms"
      }
    ],
    "notRenderable": false,
    "summary": "Icône rendue par un `<mat-icon>` ligaturé, en sept tailles, à partir d'un nom de police d'icônes."
  },
  "ta-form": {
    "examples": [
      {
        "className": "TaFormBasicExample",
        "skipHarness": false,
        "slug": "formulaire-complet",
        "title": "Formulaire complet"
      },
      {
        "className": "TaFormLoadingExample",
        "skipHarness": false,
        "slug": "chargement",
        "title": "Chargement"
      },
      {
        "className": "TaFormErrorExample",
        "skipHarness": false,
        "slug": "erreur",
        "title": "Erreur"
      },
      {
        "className": "TaFormLiveExample",
        "skipHarness": false,
        "slug": "soumission-automatique-sans-bouton",
        "title": "Soumission automatique, sans bouton"
      }
    ],
    "notRenderable": false,
    "summary": "Formulaire complet rendu depuis un modèle `InputBase[]`, avec validation, soumission et états de chargement/erreur."
  },
  "ta-form-label": {
    "examples": [
      {
        "className": "TaFormLabelBasicExample",
        "skipHarness": false,
        "slug": "libelle-simple-vs-requis",
        "title": "Libellé simple vs requis"
      },
      {
        "className": "TaFormLabelMarginExample",
        "skipHarness": false,
        "slug": "marge-sous-le-libelle",
        "title": "Marge sous le libellé"
      }
    ],
    "notRenderable": false,
    "summary": "Libellé de champ avec astérisque automatique, factorisé hors du système `InputBase` et réutilisé par plusieurs composants de saisie internes à @ta/form-input."
  },
  "ta-google-maps": {
    "examples": [],
    "notRenderable": true,
    "summary": "Carte Google Maps avec marqueurs groupés, fenêtre d'info et tracé d'itinéraire via l'API Routes ; ne déclare aucun input."
  },
  "ta-grid": {
    "examples": [
      {
        "className": "TaGridTableExample",
        "skipHarness": false,
        "slug": "tableau-tri-largeurs-formats-actions-de-ligne",
        "title": "Tableau : tri, largeurs, formats, actions de ligne"
      },
      {
        "className": "TaGridSelectionExample",
        "skipHarness": false,
        "slug": "selection-multiple-de-lignes",
        "title": "Sélection multiple de lignes"
      },
      {
        "className": "TaGridDensityExample",
        "skipHarness": false,
        "slug": "densite-comfortable-compacte",
        "title": "Densité comfortable / compacte"
      }
    ],
    "notRenderable": false,
    "summary": "Rendu de la grille de données — vue tableau ou carte, tri par colonne, sélection de lignes, densité — au-dessus de la pagination intégrée."
  },
  "ta-grid-container": {
    "examples": [
      {
        "className": "TaGridContainerBasicExample",
        "skipHarness": false,
        "slug": "donnees-locales-typees",
        "title": "Données locales typées"
      },
      {
        "className": "TaGridContainerPresetExample",
        "skipHarness": false,
        "slug": "vues-rapides-via-preset",
        "title": "Vues rapides via `preset`"
      }
    ],
    "notRenderable": false,
    "summary": "Racine d'une grille : crée l'instance `TaGridData` pour un `gridId` donné et l'initialise avec des données locales, des colonnes typées et des vues rapides."
  },
  "ta-grid-control": {
    "examples": [
      {
        "className": "TaGridControlFullExample",
        "skipHarness": false,
        "slug": "barre-de-controle-complete",
        "title": "Barre de contrôle complète"
      },
      {
        "className": "TaGridControlCompactExample",
        "skipHarness": false,
        "slug": "mode-compact",
        "title": "Mode compact"
      }
    ],
    "notRenderable": false,
    "summary": "Barre d'actions d'une grille — filtres, tri, vues rapides, regroupement et bascule carte/tableau — pilotée par les colonnes déclarées sur le `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-count": {
    "examples": [
      {
        "className": "TaGridCountDefaultExample",
        "skipHarness": false,
        "slug": "decompte-des-resultats",
        "title": "Décompte des résultats"
      },
      {
        "className": "TaGridCountLabelExample",
        "skipHarness": false,
        "slug": "libelle-metier",
        "title": "Libellé métier"
      }
    ],
    "notRenderable": false,
    "summary": "Nombre de résultats d'une grille, à poser au-dessus de la liste — lit le `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-filters-panel": {
    "examples": [
      {
        "className": "TaGridFiltersPanelOpenExample",
        "skipHarness": false,
        "slug": "ouverture-du-panneau",
        "title": "Ouverture du panneau"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau latéral plein écran portant le formulaire de filtres d'une grille (`ta-grid-form`) — sélectionné par `ta-grid-control` en cliquant « Filtres », mais montable seul."
  },
  "ta-grid-form": {
    "examples": [
      {
        "className": "TaGridFormBasicExample",
        "skipHarness": false,
        "slug": "formulaire-de-filtres",
        "title": "Formulaire de filtres"
      },
      {
        "className": "TaGridFormGroupExample",
        "skipHarness": false,
        "slug": "avec-regroupement",
        "title": "Avec regroupement"
      },
      {
        "className": "TaGridFormCompactExample",
        "skipHarness": false,
        "slug": "sans-titre-sans-compteur-ni-reinitialisation",
        "title": "Sans titre, sans compteur, ni réinitialisation"
      }
    ],
    "notRenderable": false,
    "summary": "Formulaire de filtres et de regroupement d'une grille, construit dynamiquement à partir des colonnes `showOnSearch` du `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-highlight-filters": {
    "examples": [
      {
        "className": "TaGridHighlightFiltersDefaultExample",
        "skipHarness": false,
        "slug": "filtres-mis-en-avant",
        "title": "Filtres mis en avant"
      },
      {
        "className": "TaGridHighlightFiltersNoCountExample",
        "skipHarness": false,
        "slug": "sans-compteur-de-resultats",
        "title": "Sans compteur de résultats"
      }
    ],
    "notRenderable": false,
    "summary": "Bandeau de filtres mis en avant hors du panneau replié — un sous-ensemble de colonnes marquées `highlighted`, toujours visible au-dessus de la grille."
  },
  "ta-grid-search": {
    "examples": [
      {
        "className": "TaGridSearchDefaultExample",
        "skipHarness": false,
        "slug": "recherche-globale",
        "title": "Recherche globale"
      },
      {
        "className": "TaGridSearchPlaceholderExample",
        "skipHarness": false,
        "slug": "placeholder-personnalise",
        "title": "Placeholder personnalisé"
      }
    ],
    "notRenderable": false,
    "summary": "Champ de recherche globale d'une grille, appliqué comme filtre `like` sur les colonnes marquées `isSearchField` du `ta-grid-container` partageant le même `gridId`."
  },
  "ta-grid-tags": {
    "examples": [
      {
        "className": "TaGridTagsActiveExample",
        "skipHarness": false,
        "slug": "etiquettes-de-filtres-actifs",
        "title": "Étiquettes de filtres actifs"
      }
    ],
    "notRenderable": false,
    "summary": "Étiquettes des filtres et du regroupement actifs d'une grille, avec retrait individuel ou global — reflète l'état du `ta-grid-container` partageant le même `gridId`, sans aucun input propre."
  },
  "ta-guard": {
    "examples": [
      {
        "className": "TaGuardAuthorizedExample",
        "skipHarness": false,
        "slug": "acces-autorise",
        "title": "Accès autorisé"
      },
      {
        "className": "TaGuardDeniedExample",
        "skipHarness": false,
        "slug": "acces-refuse-message-par-defaut",
        "title": "Accès refusé, message par défaut"
      },
      {
        "className": "TaGuardPreviewExample",
        "skipHarness": false,
        "slug": "acces-refuse-en-apercu",
        "title": "Accès refusé, en aperçu"
      },
      {
        "className": "TaGuardSilentExample",
        "skipHarness": false,
        "slug": "acces-refuse-message-masque",
        "title": "Accès refusé, message masqué"
      }
    ],
    "notRenderable": false,
    "summary": "Garde d'accès conditionnant l'affichage de son contenu projeté à `TaPermissionsService` (`@ta/user`), par fonctionnalité, rôle ou simple authentification."
  },
  "ta-hour-date-line": {
    "examples": [
      {
        "className": "TaHourDateLineFullExample",
        "skipHarness": false,
        "slug": "date-et-plage-completes",
        "title": "Date et plage complètes"
      },
      {
        "className": "TaHourDateLineNoEndExample",
        "skipHarness": false,
        "slug": "sans-heure-de-fin",
        "title": "Sans heure de fin"
      }
    ],
    "notRenderable": false,
    "summary": "Ligne date + plage horaire, formatée via `DatePipe`."
  },
  "ta-image-viewer": {
    "examples": [
      {
        "className": "TaImageViewerDefaultExample",
        "skipHarness": false,
        "slug": "apercu",
        "title": "Aperçu"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu d'une image : `<img [src]=\"file().url\">` dans un conteneur centré."
  },
  "ta-inline-profile-data": {
    "examples": [
      {
        "className": "TaInlineProfileDataWithLogoExample",
        "skipHarness": false,
        "slug": "avec-logo-utilisateur",
        "title": "Avec logo utilisateur"
      },
      {
        "className": "TaInlineProfileDataWithoutLogoExample",
        "skipHarness": false,
        "slug": "sans-logo-poste-absent",
        "title": "Sans logo, poste absent"
      }
    ],
    "notRenderable": false,
    "summary": "Poste et e-mail d'un profil, avec un `ta-user-logo` optionnel devant."
  },
  "ta-input-checkbox": {
    "examples": [
      {
        "className": "TaInputCheckboxValuesExample",
        "skipHarness": false,
        "slug": "coche-et-non-coche",
        "title": "Coché et non coché"
      },
      {
        "className": "TaInputCheckboxRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputCheckboxDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Case à cocher du système de formulaires, pilotée par un modèle `InputCheckBox`."
  },
  "ta-input-choices": {
    "examples": [
      {
        "className": "TaInputChoicesBasicExample",
        "skipHarness": false,
        "slug": "selection-simple",
        "title": "Sélection simple"
      },
      {
        "className": "TaInputChoicesMultipleExample",
        "skipHarness": false,
        "slug": "selection-multiple-avec-recherche",
        "title": "Sélection multiple avec recherche"
      },
      {
        "className": "TaInputChoicesDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur à panneau latéral avec recherche et sélection simple ou multiple, piloté par un modèle `InputChoices`."
  },
  "ta-input-color-picker": {
    "examples": [
      {
        "className": "TaInputColorPickerBasicExample",
        "skipHarness": false,
        "slug": "valeur",
        "title": "Valeur"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur de couleur du système de formulaires, piloté par un modèle `InputTextBox`."
  },
  "ta-input-component": {
    "examples": [
      {
        "className": "TaInputComponentBasicExample",
        "skipHarness": false,
        "slug": "champ-editable-avec-selection",
        "title": "Champ éditable avec sélection"
      },
      {
        "className": "TaInputComponentDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Champ texte lié à un `FormControl`, complété par une modale de sélection (`ta-component-selector-modal`) qui projette un `TemplateRef` fourni par le modèle `InputComponent`."
  },
  "ta-input-culture": {
    "examples": [
      {
        "className": "TaInputCultureBasicExample",
        "skipHarness": false,
        "slug": "valeur-initiale",
        "title": "Valeur initiale"
      },
      {
        "className": "TaInputCultureDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Menu déroulant spécialisé pour choisir une culture. `InputCulture` étend `InputDropdown` et remplit `options$` depuis l'énumération `Culture` de @ta/utils — toute valeur `options$` passée par l'appelant est ignorée, écrasée par le constructeur."
  },
  "ta-input-date-picker": {
    "examples": [
      {
        "className": "TaInputDatePickerBasicExample",
        "skipHarness": false,
        "slug": "valeur-initiale",
        "title": "Valeur initiale"
      },
      {
        "className": "TaInputDatePickerBoundsExample",
        "skipHarness": false,
        "slug": "borne-a-partir-d-aujourd-hui",
        "title": "Borné à partir d'aujourd'hui"
      },
      {
        "className": "TaInputDatePickerRangeExample",
        "skipHarness": false,
        "slug": "plage-de-dates",
        "title": "Plage de dates"
      },
      {
        "className": "TaInputDatePickerDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur de date basé sur Angular Material, piloté par un modèle `InputDatePicker`."
  },
  "ta-input-dropdown": {
    "examples": [
      {
        "className": "TaInputDropdownBasicExample",
        "skipHarness": false,
        "slug": "selection-simple",
        "title": "Sélection simple"
      },
      {
        "className": "TaInputDropdownMultipleExample",
        "skipHarness": false,
        "slug": "selection-multiple",
        "title": "Sélection multiple"
      },
      {
        "className": "TaInputDropdownRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputDropdownDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Menu déroulant du système de formulaires, à sélection simple ou multiple, piloté par un modèle `InputDropdown`."
  },
  "ta-input-image": {
    "examples": [
      {
        "className": "TaInputImageWithValueExample",
        "skipHarness": false,
        "slug": "avec-valeur",
        "title": "Avec valeur"
      },
      {
        "className": "TaInputImageEmptyExample",
        "skipHarness": false,
        "slug": "sans-valeur",
        "title": "Sans valeur"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu en lecture seule d'une image, piloté par un modèle `InputImages` (même modèle que `ta-input-images`) : il n'affiche que la première valeur, sans aucune interaction."
  },
  "ta-input-images": {
    "examples": [
      {
        "className": "TaInputImagesWithValueExample",
        "skipHarness": false,
        "slug": "avec-valeur",
        "title": "Avec valeur"
      },
      {
        "className": "TaInputImagesEmptyExample",
        "skipHarness": false,
        "slug": "vide",
        "title": "Vide"
      }
    ],
    "notRenderable": false,
    "summary": "Galerie éditable pilotée par un modèle `InputImages` : grille de vignettes avec suppression, et bouton d'ajout ouvrant un choix caméra/galerie."
  },
  "ta-input-label": {
    "examples": [
      {
        "className": "TaInputLabelTextExample",
        "skipHarness": false,
        "slug": "texte-simple-avec-icone",
        "title": "Texte simple avec icône"
      },
      {
        "className": "TaInputLabelTitleExample",
        "skipHarness": false,
        "slug": "titre-de-section-requis",
        "title": "Titre de section requis"
      }
    ],
    "notRenderable": false,
    "summary": "Élément de formulaire sans valeur, piloté par un modèle `InputLabel` : texte simple avec icône, ou titre de section selon que `level` est défini."
  },
  "ta-input-logo": {
    "examples": [
      {
        "className": "TaInputLogoWithValueExample",
        "skipHarness": false,
        "slug": "avec-valeur",
        "title": "Avec valeur"
      },
      {
        "className": "TaInputLogoEmptyExample",
        "skipHarness": false,
        "slug": "sans-valeur",
        "title": "Sans valeur"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu éditable d'un logo unique, piloté par un modèle `InputLogo` : image ou emplacement vide, avec un choix caméra/galerie et un bouton de suppression."
  },
  "ta-input-phone": {
    "examples": [
      {
        "className": "TaInputPhoneBasicExample",
        "skipHarness": false,
        "slug": "valeur-simple",
        "title": "Valeur simple"
      },
      {
        "className": "TaInputPhoneRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputPhoneDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Champ téléphone international (`intl-tel-input`), avec indicatif de pays et validation de format intégrée."
  },
  "ta-input-radio": {
    "examples": [
      {
        "className": "TaInputRadioBasicExample",
        "skipHarness": false,
        "slug": "options-simples",
        "title": "Options simples"
      },
      {
        "className": "TaInputRadioIconsExample",
        "skipHarness": false,
        "slug": "icones-seules",
        "title": "Icônes seules"
      },
      {
        "className": "TaInputRadioDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Groupe de boutons radio, options passées par un `Observable`, avec variante à icônes."
  },
  "ta-input-rating": {
    "examples": [
      {
        "className": "TaInputRatingBasicExample",
        "skipHarness": false,
        "slug": "valeur-initiale",
        "title": "Valeur initiale"
      },
      {
        "className": "TaInputRatingHalfExample",
        "skipHarness": false,
        "slug": "demi-etoiles",
        "title": "Demi-étoiles"
      },
      {
        "className": "TaInputRatingReadonlyExample",
        "skipHarness": false,
        "slug": "lecture-seule",
        "title": "Lecture seule"
      }
    ],
    "notRenderable": false,
    "summary": "Notation par étoiles (`ta-rating` de `@ta/ui`), avec maximum, taille et demi-étoiles configurables."
  },
  "ta-input-schema": {
    "examples": [
      {
        "className": "TaInputSchemaEmptyExample",
        "skipHarness": false,
        "slug": "vide",
        "title": "Vide"
      },
      {
        "className": "TaInputSchemaValueExample",
        "skipHarness": false,
        "slug": "avec-une-valeur-existante",
        "title": "Avec une valeur existante"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur d'une image unique (logo, schéma), ouvrant un éditeur en plein écran (`ta-input-schema-modal`)."
  },
  "ta-input-slider": {
    "examples": [
      {
        "className": "TaInputSliderBasicExample",
        "skipHarness": false,
        "slug": "plage-standard",
        "title": "Plage standard"
      },
      {
        "className": "TaInputSliderRangeExample",
        "skipHarness": false,
        "slug": "plage-personnalisee",
        "title": "Plage personnalisée"
      },
      {
        "className": "TaInputSliderDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Curseur natif (`input[type=range]`), bornes `min`/`max` fixées par le modèle."
  },
  "ta-input-switch": {
    "examples": [
      {
        "className": "TaInputSwitchTextboxExample",
        "skipHarness": false,
        "slug": "rendu-en-champ-texte",
        "title": "Rendu en champ texte"
      },
      {
        "className": "TaInputSwitchCheckboxExample",
        "skipHarness": false,
        "slug": "rendu-en-case-a-cocher",
        "title": "Rendu en case à cocher"
      },
      {
        "className": "TaInputSwitchDropdownExample",
        "skipHarness": false,
        "slug": "rendu-en-liste-deroulante",
        "title": "Rendu en liste déroulante"
      }
    ],
    "notRenderable": false,
    "summary": "Champ dont le type de rendu (texte, case à cocher, liste déroulante…) est décidé à l'exécution par un `Observable`."
  },
  "ta-input-textarea": {
    "examples": [
      {
        "className": "TaInputTextareaBasicExample",
        "skipHarness": false,
        "slug": "valeur-simple",
        "title": "Valeur simple"
      },
      {
        "className": "TaInputTextareaRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputTextareaDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Zone de texte multi-lignes, avec redimensionnement automatique (`cdkTextareaAutosize`)."
  },
  "ta-input-textbox": {
    "examples": [
      {
        "className": "TaInputTextboxBasicExample",
        "skipHarness": false,
        "slug": "valeur-simple",
        "title": "Valeur simple"
      },
      {
        "className": "TaInputTextboxRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputTextboxDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Champ texte du système de formulaires. Se pilote par un modèle `InputTextBox`, jamais par des inputs individuels."
  },
  "ta-input-time-picker": {
    "examples": [
      {
        "className": "TaInputTimePickerBasicExample",
        "skipHarness": false,
        "slug": "valeur-simple",
        "title": "Valeur simple"
      },
      {
        "className": "TaInputTimePickerRequiredExample",
        "skipHarness": false,
        "slug": "requis",
        "title": "Requis"
      },
      {
        "className": "TaInputTimePickerDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur d'heure (`ngx-material-timepicker`) ; le champ natif est toujours en lecture seule, la saisie passe par le cadran."
  },
  "ta-input-toggle": {
    "examples": [
      {
        "className": "TaInputToggleStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaInputToggleDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      },
      {
        "className": "TaInputToggleStateLabelsExample",
        "skipHarness": false,
        "slug": "etats-nommes",
        "title": "États nommés"
      }
    ],
    "notRenderable": false,
    "summary": "Interrupteur booléen, piloté par un `InputCheckBox` construit avec `toggle: true`."
  },
  "ta-input-upload": {
    "examples": [
      {
        "className": "TaInputUploadBasicExample",
        "skipHarness": false,
        "slug": "zone-de-depot",
        "title": "Zone de dépôt"
      },
      {
        "className": "TaInputUploadConfirmExample",
        "skipHarness": false,
        "slug": "avec-confirmation-manuelle",
        "title": "Avec confirmation manuelle"
      }
    ],
    "notRenderable": false,
    "summary": "Zone de dépôt de fichiers, avec barre de progression simulée et téléversement réel via `TaDocumentsService`."
  },
  "ta-input-wysiswyg": {
    "examples": [
      {
        "className": "TaInputWysiswygEmptyExample",
        "skipHarness": false,
        "slug": "vide",
        "title": "Vide"
      },
      {
        "className": "TaInputWysiswygInitialExample",
        "skipHarness": false,
        "slug": "avec-contenu-initial",
        "title": "Avec contenu initial"
      }
    ],
    "notRenderable": false,
    "summary": "Éditeur de contenu riche (EditorJS), enveloppé dans un modèle de formulaire — voir `ta-cms-editor-input` pour le composant sous-jacent."
  },
  "ta-inputs": {
    "examples": [
      {
        "className": "TaInputsTypesExample",
        "skipHarness": false,
        "slug": "types-rendus",
        "title": "Types rendus"
      },
      {
        "className": "TaInputsFocusExample",
        "skipHarness": false,
        "slug": "focus-programme",
        "title": "Focus programmé"
      }
    ],
    "notRenderable": false,
    "summary": "Dispatcher qui rend le composant @ta/form-input adapté à un modèle `InputBase`, seul ou dans un `ta-form`."
  },
  "ta-itsme-button": {
    "examples": [
      {
        "className": "TaItsmeButtonModesExample",
        "skipHarness": false,
        "slug": "modes",
        "title": "Modes"
      },
      {
        "className": "TaItsmeButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaItsmeButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton de connexion itsme, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-label": {
    "examples": [
      {
        "className": "TaLabelTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaLabelSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaLabelIconShapeExample",
        "skipHarness": false,
        "slug": "pictogramme-et-forme",
        "title": "Pictogramme et forme"
      }
    ],
    "notRenderable": false,
    "summary": "Étiquette de contenu projeté, déclinée en sept intentions de couleur et sept tailles, avec pictogramme optionnel."
  },
  "ta-layout-content": {
    "examples": [
      {
        "className": "TaLayoutContentHeightExample",
        "skipHarness": false,
        "slug": "autoheight",
        "title": "autoHeight"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur de contenu de page, avec une hauteur minimale d'écran par défaut ou une hauteur suivant le contenu."
  },
  "ta-layout-flex": {
    "examples": [
      {
        "className": "TaLayoutFlexPanelsExample",
        "skipHarness": false,
        "slug": "trois-zones-repliables-allowclose-true",
        "title": "Trois zones repliables (allowClose=true)"
      }
    ],
    "notRenderable": false,
    "summary": "Disposition à trois zones (gauche, centre, droite) repliables, chacune projetée via un attribut `left` / `center` / `right`."
  },
  "ta-layout-full-panel": {
    "examples": [
      {
        "className": "TaLayoutFullPanelWorkingExample",
        "skipHarness": false,
        "slug": "ouverture-fermeture-contenu-et-pied-projetes",
        "title": "Ouverture, fermeture, contenu et pied projetés"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau plein hauteur en overlay fixe depuis la droite, avec fond semi-transparent, en-tête titré et pieds de panneau projetés."
  },
  "ta-layout-header": {
    "examples": [
      {
        "className": "TaLayoutHeaderCompositionExample",
        "skipHarness": false,
        "slug": "enveloppe-autour-d-un-en-tete-par-defaut",
        "title": "Enveloppe autour d'un en-tête par défaut"
      }
    ],
    "notRenderable": false,
    "summary": "Bandeau d'en-tête sans mise en forme propre : `<div class=\"header\"><ng-content></ng-content></div>` (vérifié dans layout-header.component.html), destiné à recevoir `ta-layout-header-default`, `ta-layout-header-logo` et/ou `ta-layout-title`."
  },
  "ta-layout-header-default": {
    "examples": [
      {
        "className": "TaLayoutHeaderDefaultBackExample",
        "skipHarness": false,
        "slug": "avec-ou-sans-bouton-de-retour",
        "title": "Avec ou sans bouton de retour"
      },
      {
        "className": "TaLayoutHeaderDefaultMenuExample",
        "skipHarness": false,
        "slug": "menu-contextuel-menutemplate",
        "title": "Menu contextuel (menuTemplate)"
      }
    ],
    "notRenderable": false,
    "summary": "Barre d'en-tête à trois zones : retour, titre centré, menu contextuel — chacune conditionnée par ses inputs."
  },
  "ta-layout-header-logo": {
    "examples": [
      {
        "className": "TaLayoutHeaderLogoWorkingExample",
        "skipHarness": false,
        "slug": "profil-et-notifications",
        "title": "Profil et notifications"
      }
    ],
    "notRenderable": false,
    "summary": "Ligne d'en-tête avec avatar de profil, logo central et cloche de notifications, chacun ouvrant une `ta-modal` plein écran sur un `TemplateRef` fourni."
  },
  "ta-layout-modal": {
    "examples": [
      {
        "className": "TaLayoutModalCloseExample",
        "skipHarness": false,
        "slug": "bouton-de-fermeture",
        "title": "Bouton de fermeture"
      },
      {
        "className": "TaLayoutModalWorkingExample",
        "skipHarness": false,
        "slug": "contenu-et-fermeture",
        "title": "Contenu et fermeture"
      }
    ],
    "notRenderable": false,
    "summary": "Structure de contenu de modale — en-tête avec titre et fermeture optionnelle, zone de contenu défilante — sans overlay ni fond propres."
  },
  "ta-layout-nav": {
    "examples": [
      {
        "className": "TaLayoutNavTabsExample",
        "skipHarness": false,
        "slug": "barre-d-onglets",
        "title": "Barre d'onglets"
      }
    ],
    "notRenderable": false,
    "summary": "Emplacement de barre de navigation sans mise en forme propre : `<ng-content></ng-content>` seul (vérifié dans layout-nav.component.html et son SCSS vide)."
  },
  "ta-layout-not-found": {
    "examples": [
      {
        "className": "TaLayoutNotFoundDefaultExample",
        "skipHarness": false,
        "slug": "contenu-par-defaut",
        "title": "Contenu par défaut"
      }
    ],
    "notRenderable": false,
    "summary": "Page d'erreur 404 statique, sans input : icône, titre et texte traduits (clés `ui.layout.notfound.*`), avec un bouton de retour à l'accueil."
  },
  "ta-layout-page": {
    "examples": [
      {
        "className": "TaLayoutPageAnatomyExample",
        "skipHarness": false,
        "slug": "composition-complete",
        "title": "Composition complète"
      }
    ],
    "notRenderable": false,
    "summary": "Squelette de page complète : distribue son contenu projeté en quatre zones fixes — en-tête, titre, contenu principal et navigation."
  },
  "ta-layout-panel": {
    "examples": [
      {
        "className": "TaLayoutPanelInDrawerExample",
        "skipHarness": false,
        "slug": "contenu-du-tiroir-de-ta-layout-with-panel",
        "title": "Contenu du tiroir de ta-layout-with-panel"
      }
    ],
    "notRenderable": false,
    "summary": "Enveloppe de contenu sans mise en forme propre — `<ng-content></ng-content>` seul, SCSS vide (vérifié dans layout-panel.component.ts/.scss) — destinée au tiroir de `ta-layout-with-panel`."
  },
  "ta-layout-side": {
    "examples": [
      {
        "className": "TaLayoutSideAnatomyExample",
        "skipHarness": false,
        "slug": "contenu-defilant-et-pied-d-action",
        "title": "Contenu défilant et pied d'action"
      }
    ],
    "notRenderable": false,
    "summary": "Colonne latérale à deux zones nommées : un contenu défilant (`ta-layout-side-content`) et un pied d'action fixe (`ta-layout-side-cta`)."
  },
  "ta-layout-side-content": {
    "examples": [
      {
        "className": "TaLayoutSideContentListExample",
        "skipHarness": false,
        "slug": "liste-projetee",
        "title": "Liste projetée"
      }
    ],
    "notRenderable": false,
    "summary": "Enveloppe de contenu latéral sans mise en forme propre — `<div class=\"form-container\"><ng-content></ng-content></div>`, avec un SCSS entièrement commenté (vérifié dans layout-side-content.component.scss)."
  },
  "ta-layout-side-cta": {
    "examples": [
      {
        "className": "TaLayoutSideCtaFlagsExample",
        "skipHarness": false,
        "slug": "background-et-rounded",
        "title": "background et rounded"
      }
    ],
    "notRenderable": false,
    "summary": "Pied d'action pour une colonne latérale : fond optionnel et coins inférieurs arrondis optionnels autour du contenu projeté."
  },
  "ta-layout-title": {
    "examples": [
      {
        "className": "TaLayoutTitleBasicExample",
        "skipHarness": false,
        "slug": "titre-de-page",
        "title": "Titre de page"
      }
    ],
    "notRenderable": false,
    "summary": "Emplacement de titre de page : ajoute uniquement un padding horizontal autour de son contenu projeté."
  },
  "ta-layout-with-bottom-nav": {
    "examples": [
      {
        "className": "TaLayoutWithBottomNavWorkingExample",
        "skipHarness": false,
        "slug": "contenu-et-navigation-projetes",
        "title": "Contenu et navigation projetés"
      }
    ],
    "notRenderable": false,
    "summary": "Page avec une navigation dédiée (`ta-layout-nav` projeté par sélecteur) positionnée en bas sur mobile, en rail latéral sur desktop."
  },
  "ta-layout-with-panel": {
    "examples": [
      {
        "className": "TaLayoutWithPanelWorkingExample",
        "skipHarness": false,
        "slug": "ouverture-et-fermeture-du-tiroir",
        "title": "Ouverture et fermeture du tiroir"
      }
    ],
    "notRenderable": false,
    "summary": "Zone principale avec un tiroir latéral (Angular Material `mat-drawer`) piloté par l'input `open`, sur deux zones nommées : `ta-layout-content` et `ta-layout-panel`."
  },
  "ta-line-chart": {
    "examples": [
      {
        "className": "TaLineChartSeriesExample",
        "skipHarness": false,
        "slug": "plusieurs-series",
        "title": "Plusieurs séries"
      },
      {
        "className": "TaLineChartAreaExample",
        "skipHarness": false,
        "slug": "aire-remplie",
        "title": "Aire remplie"
      }
    ],
    "notRenderable": false,
    "summary": "Graphique en courbes Chart.js, sans input propre : `labels`, `datasets` et `chartHeight` viennent de `BaseChartComponent`, commun aux cinq composants du paquet."
  },
  "ta-link": {
    "examples": [
      {
        "className": "TaLinkStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaLinkStyleExample",
        "skipHarness": false,
        "slug": "soulignement-et-gras",
        "title": "Soulignement et gras"
      },
      {
        "className": "TaLinkIconSizesExample",
        "skipHarness": false,
        "slug": "icone-et-tailles",
        "title": "Icône et tailles"
      }
    ],
    "notRenderable": false,
    "summary": "Lien de contenu projeté, avec icône optionnelle, soulignement et graisse indépendants, trois états et sept tailles."
  },
  "ta-list-container": {
    "examples": [
      {
        "className": "TaListContainerTasksExample",
        "skipHarness": false,
        "slug": "liste-de-taches",
        "title": "Liste de tâches"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur d'une liste : enveloppe une suite de `ta-list-element` sans logique propre."
  },
  "ta-list-element": {
    "examples": [
      {
        "className": "TaListElementSeparatorExample",
        "skipHarness": false,
        "slug": "separateur",
        "title": "Séparateur"
      },
      {
        "className": "TaListElementFlexColumnExample",
        "skipHarness": false,
        "slug": "disposition-en-colonne",
        "title": "Disposition en colonne"
      },
      {
        "className": "TaListElementActionExample",
        "skipHarness": false,
        "slug": "emission-de-l-action",
        "title": "Émission de l'action"
      }
    ],
    "notRenderable": false,
    "summary": "Ligne d'une liste : assemble titre, sous-titre, étiquette et information annexe projetés, avec un output `action`."
  },
  "ta-list-extra-information": {
    "examples": [
      {
        "className": "TaListExtraInformationBasicExample",
        "skipHarness": false,
        "slug": "derniere-connexion",
        "title": "Dernière connexion"
      }
    ],
    "notRenderable": false,
    "summary": "Information annexe d'une ligne de liste, projetée en fin de ligne dans `ta-list-element` (sélecteur `ta-list-extra-information`)."
  },
  "ta-list-sub-title": {
    "examples": [
      {
        "className": "TaListSubTitlePresentExample",
        "skipHarness": false,
        "slug": "avec-sous-titre",
        "title": "Avec sous-titre"
      },
      {
        "className": "TaListSubTitleAbsentExample",
        "skipHarness": false,
        "slug": "sans-sous-titre",
        "title": "Sans sous-titre"
      }
    ],
    "notRenderable": false,
    "summary": "Sous-titre facultatif d'une ligne de liste, projeté sous le titre dans `ta-list-element` (sélecteur `ta-list-sub-title`)."
  },
  "ta-list-tag": {
    "examples": [
      {
        "className": "TaListTagAdminExample",
        "skipHarness": false,
        "slug": "une-etiquette",
        "title": "Une étiquette"
      },
      {
        "className": "TaListTagViewerExample",
        "skipHarness": false,
        "slug": "plusieurs-etiquettes",
        "title": "Plusieurs étiquettes"
      }
    ],
    "notRenderable": false,
    "summary": "Zone d'étiquette d'une ligne de liste, projetée à droite du titre dans `ta-list-element` (sélecteur `ta-list-tag`) ; ne porte elle-même aucun style."
  },
  "ta-list-title": {
    "examples": [
      {
        "className": "TaListTitleBasicExample",
        "skipHarness": false,
        "slug": "dans-une-liste",
        "title": "Dans une liste"
      }
    ],
    "notRenderable": false,
    "summary": "Titre principal d'une ligne de liste, projeté dans `ta-list-element` via le sélecteur `ta-list-title`."
  },
  "ta-loader": {
    "examples": [
      {
        "className": "TaLoaderLoadingExample",
        "skipHarness": false,
        "slug": "chargement",
        "title": "Chargement"
      },
      {
        "className": "TaLoaderSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaLoaderSkeletonExample",
        "skipHarness": false,
        "slug": "squelette-de-mise-en-page",
        "title": "Squelette de mise en page"
      },
      {
        "className": "TaLoaderLoadedExample",
        "skipHarness": false,
        "slug": "charge",
        "title": "Chargé"
      }
    ],
    "notRenderable": false,
    "summary": "Chargeur animé (plan d'appartement qui se dessine en boucle) avec message, ou squelette de mise en page alternatif."
  },
  "ta-local-icon": {
    "examples": [
      {
        "className": "TaLocalIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaLocalIconRotationExample",
        "skipHarness": false,
        "slug": "rotation",
        "title": "Rotation"
      },
      {
        "className": "TaLocalIconSampleExample",
        "skipHarness": false,
        "slug": "echantillon-d-icones",
        "title": "Échantillon d'icônes"
      }
    ],
    "notRenderable": false,
    "summary": "Icône SVG intégrée, résolue depuis l'énumération `TaIconType` par `TaIconsService`, en cinq tailles."
  },
  "ta-login-card": {
    "examples": [
      {
        "className": "TaLoginCardDefaultExample",
        "skipHarness": false,
        "slug": "utilisation",
        "title": "Utilisation"
      }
    ],
    "notRenderable": false,
    "summary": "Carte cliquable déclenchant la connexion, via le jeton d'injection `TA_AUTH_TOKEN` (`@ta/user`) que l'application hôte doit fournir."
  },
  "ta-logo": {
    "examples": [
      {
        "className": "TaLogoColorsExample",
        "skipHarness": false,
        "slug": "couleurs",
        "title": "Couleurs"
      },
      {
        "className": "TaLogoTypeAndWidthExample",
        "skipHarness": false,
        "slug": "variante-oneline-et-largeur",
        "title": "Variante « oneline » et largeur"
      }
    ],
    "notRenderable": false,
    "summary": "Logo Techatome, décliné en variantes de couleur et de mise en page, servi depuis `assets/partners/logo/`."
  },
  "ta-main-menu": {
    "examples": [
      {
        "className": "TaMainMenuDesktopExample",
        "skipHarness": false,
        "slug": "en-tete-complet",
        "title": "En-tête complet"
      },
      {
        "className": "TaMainMenuCustomUserZoneExample",
        "skipHarness": false,
        "slug": "zone-utilisateur-personnalisee",
        "title": "Zone utilisateur personnalisée"
      }
    ],
    "notRenderable": false,
    "summary": "Barre de navigation principale de l'application : logo, `ta-menu` pour `menuMain`, et zone utilisateur optionnelle (`menuUser` ou `userMenuTemplate`)."
  },
  "ta-material-icon": {
    "examples": [
      {
        "className": "TaMaterialIconStylesExample",
        "skipHarness": false,
        "slug": "styles",
        "title": "Styles"
      },
      {
        "className": "TaMaterialIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      }
    ],
    "notRenderable": false,
    "summary": "Icône Material rendue par un `<mat-icon>` dont le nom de ligature est projeté, en quatre variantes de style."
  },
  "ta-megaoctet": {
    "examples": [
      {
        "className": "TaMegaoctetSizesExample",
        "skipHarness": false,
        "slug": "petit-fichier-un-megaoctet-un-tres-gros-fichier",
        "title": "Petit fichier, un mégaoctet, un très gros fichier"
      }
    ],
    "notRenderable": false,
    "summary": "Taille de fichier convertie en mégaoctets (`octetsToMo`), toujours affichée avec le suffixe « MB »."
  },
  "ta-menu": {
    "examples": [
      {
        "className": "TaMenuContainersExample",
        "skipHarness": false,
        "slug": "les-quatre-valeurs-de-container",
        "title": "Les quatre valeurs de `container`"
      },
      {
        "className": "TaMenuMainWithBadgeExample",
        "skipHarness": false,
        "slug": "menu-principal-avec-badge-de-notification",
        "title": "Menu principal avec badge de notification"
      }
    ],
    "notRenderable": false,
    "summary": "Liste de `ta-menu-item` construite à partir d'un `Menu` ; `container` choisit la classe CSS appliquée (`main-nav`, `second`, `overflow vertical`, ou aucune pour `panel`)."
  },
  "ta-menu-item": {
    "examples": [
      {
        "className": "TaMenuItemBadgeExample",
        "skipHarness": false,
        "slug": "avec-badge-de-notification",
        "title": "Avec badge de notification"
      },
      {
        "className": "TaMenuItemSubmenuExample",
        "skipHarness": false,
        "slug": "sous-menu-a-deux-niveaux",
        "title": "Sous-menu à deux niveaux"
      },
      {
        "className": "TaMenuItemDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Élément de menu unique : icône, libellé, badge de notification optionnel, lien ou action au clic, et sous-menu à deux niveaux via `MenuPanel`."
  },
  "ta-menu-navigation": {
    "examples": [
      {
        "className": "TaMenuNavigationTabsExample",
        "skipHarness": false,
        "slug": "onglets-container-tab",
        "title": "Onglets (`container: 'tab'`)"
      },
      {
        "className": "TaMenuNavigationTagsExample",
        "skipHarness": false,
        "slug": "etiquettes-container-tags-espacement-reduit",
        "title": "Étiquettes (`container: 'tags'`), espacement réduit"
      }
    ],
    "notRenderable": false,
    "summary": "Navigation en onglets, étiquettes ou sous-menu, avec suivi interne de l'élément actif — sans dépendre du routeur quand les éléments portent un `callback`."
  },
  "ta-messenger-button": {
    "examples": [
      {
        "className": "TaMessengerButtonModesExample",
        "skipHarness": false,
        "slug": "modes",
        "title": "Modes"
      },
      {
        "className": "TaMessengerButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaMessengerButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton de partage Messenger, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-mixed-chart": {
    "examples": [
      {
        "className": "TaMixedChartComboExample",
        "skipHarness": false,
        "slug": "ventes-realisees-et-objectif",
        "title": "Ventes réalisées et objectif"
      }
    ],
    "notRenderable": false,
    "summary": "Graphique combinant plusieurs types de séries (barres, courbe…) sur un même canevas Chart.js, sans input propre."
  },
  "ta-modal": {
    "examples": [
      {
        "className": "TaModalSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaModalBackdropExample",
        "skipHarness": false,
        "slug": "fermeture-sur-le-fond-desactivee",
        "title": "Fermeture sur le fond désactivée"
      }
    ],
    "notRenderable": false,
    "summary": "Modale contrôlée par `[open]`, avec en-tête/titre, zone de contenu et pied projetés (`modal-content`, `modal-footer`)."
  },
  "ta-my-account": {
    "examples": [],
    "notRenderable": true,
    "summary": "Carte de profil connecté : identité, menu de profil optionnel, bouton d'édition optionnel et déconnexion, via les jetons `TA_USER_SERVICE` et `TA_AUTH_TOKEN` (`@ta/user`)."
  },
  "ta-new": {
    "examples": [
      {
        "className": "TaNewVisibleExample",
        "skipHarness": false,
        "slug": "visible-masque",
        "title": "Visible / masqué"
      },
      {
        "className": "TaNewRelativeExample",
        "skipHarness": false,
        "slug": "dans-le-flux",
        "title": "Dans le flux"
      }
    ],
    "notRenderable": false,
    "summary": "Puce « nouveau », positionnée en absolu sur un coin par défaut ou dans le flux avec `isRelative`."
  },
  "ta-notification-badge": {
    "examples": [
      {
        "className": "TaNotificationBadgeContainerExample",
        "skipHarness": false,
        "slug": "dans-un-conteneur",
        "title": "Dans un conteneur"
      },
      {
        "className": "TaNotificationBadgeFontSizesExample",
        "skipHarness": false,
        "slug": "tailles-de-police",
        "title": "Tailles de police"
      }
    ],
    "notRenderable": false,
    "summary": "Pastille de comptage, positionnée en absolu sur son conteneur par défaut ou en flux avec `relative`."
  },
  "ta-notification-badge-container": {
    "examples": [
      {
        "className": "TaNotificationBadgeContainerIconExample",
        "skipHarness": false,
        "slug": "autour-d-une-icone",
        "title": "Autour d'une icône"
      },
      {
        "className": "TaNotificationBadgeContainerTextExample",
        "skipHarness": false,
        "slug": "autour-d-un-libelle",
        "title": "Autour d'un libellé"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur générique en `position: relative`, dont le seul rôle est d'ancrer un `ta-notification-badge` projeté en son coin."
  },
  "ta-notification-box": {
    "examples": [
      {
        "className": "TaNotificationBoxStackExample",
        "skipHarness": false,
        "slug": "empilement-de-toasts",
        "title": "Empilement de toasts"
      }
    ],
    "notRenderable": false,
    "summary": "Pile de notifications, alimentée par `TaNotificationService` et retirée automatiquement après trois secondes — sauf les erreurs, qui restent jusqu'à fermeture manuelle."
  },
  "ta-notification-bullet": {
    "examples": [
      {
        "className": "TaNotificationBulletCountExample",
        "skipHarness": false,
        "slug": "nombre-affiche",
        "title": "Nombre affiché"
      }
    ],
    "notRenderable": false,
    "summary": "Pastille numérique affichant un décompte de notifications, obtenu par une requête GraphQL comptée."
  },
  "ta-notification-inline": {
    "examples": [
      {
        "className": "TaNotificationInlineTypesExample",
        "skipHarness": false,
        "slug": "quatre-types",
        "title": "Quatre types"
      },
      {
        "className": "TaNotificationInlineEmptyExample",
        "skipHarness": false,
        "slug": "sans-message-contenu-projete",
        "title": "Sans message : contenu projeté"
      },
      {
        "className": "TaNotificationInlineCloseExample",
        "skipHarness": false,
        "slug": "fermeture",
        "title": "Fermeture"
      },
      {
        "className": "TaNotificationInlineErrorDetailsExample",
        "skipHarness": false,
        "slug": "erreur-avec-details",
        "title": "Erreur avec détails"
      }
    ],
    "notRenderable": false,
    "summary": "Bannière d'alerte contextuelle, déclinée en quatre intentions, avec fermeture et détails d'erreur."
  },
  "ta-overlay-panel": {
    "examples": [
      {
        "className": "TaOverlayPanelMenuExample",
        "skipHarness": false,
        "slug": "menu-au-clic",
        "title": "Menu au clic"
      },
      {
        "className": "TaOverlayPanelPositionExample",
        "skipHarness": false,
        "slug": "position-a-droite",
        "title": "Position à droite"
      }
    ],
    "notRenderable": false,
    "summary": "Panneau flottant (CDK Overlay) ancré à un déclencheur projeté, avec un contenu projeté séparé."
  },
  "ta-pdf-viewer": {
    "examples": [
      {
        "className": "TaPdfViewerDefaultExample",
        "skipHarness": false,
        "slug": "apercu",
        "title": "Aperçu"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu d'un fichier PDF dans un `ngx-doc-viewer` (`viewer=\"pdf\"`)."
  },
  "ta-picture-info-message": {
    "examples": [
      {
        "className": "TaPictureInfoMessageWithIconExample",
        "skipHarness": false,
        "slug": "avec-icone",
        "title": "Avec icône"
      },
      {
        "className": "TaPictureInfoMessageFallbackExample",
        "skipHarness": false,
        "slug": "sans-icone",
        "title": "Sans icône"
      }
    ],
    "notRenderable": false,
    "summary": "Message illustré par une icône locale ou Material, ou message typé (`ta-typed-message`) si aucune icône n'est fournie."
  },
  "ta-pie-chart": {
    "examples": [
      {
        "className": "TaPieChartBrowsersExample",
        "skipHarness": false,
        "slug": "repartition-des-navigateurs",
        "title": "Répartition des navigateurs"
      }
    ],
    "notRenderable": false,
    "summary": "Graphique circulaire Chart.js. `labels` et `datasets` viennent de `BaseChartComponent` ; c'est le seul des cinq composants du paquet à ajouter un input propre, `radius`."
  },
  "ta-progress": {
    "examples": [
      {
        "className": "TaProgressTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaProgressSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaProgressValuesExample",
        "skipHarness": false,
        "slug": "valeurs",
        "title": "Valeurs"
      }
    ],
    "notRenderable": false,
    "summary": "Barre de progression compacte (piste + remplissage + libellé projeté), en sept couleurs et quatre tailles distinctes."
  },
  "ta-progress-bar": {
    "examples": [
      {
        "className": "TaProgressBarValuesExample",
        "skipHarness": false,
        "slug": "avancement",
        "title": "Avancement"
      }
    ],
    "notRenderable": false,
    "summary": "Barre de progression minimale : un élément HTML `<progress>` natif, sans libellé ni couleur configurable."
  },
  "ta-progress-bar-data": {
    "examples": [
      {
        "className": "TaProgressBarDataMetricsExample",
        "skipHarness": false,
        "slug": "indicateurs",
        "title": "Indicateurs"
      }
    ],
    "notRenderable": false,
    "summary": "`ta-progress-bar` habillée d'un titre (avec icône Material optionnelle) et d'une valeur textuelle à droite."
  },
  "ta-progress-circle": {
    "examples": [
      {
        "className": "TaProgressCircleValuesExample",
        "skipHarness": false,
        "slug": "valeurs",
        "title": "Valeurs"
      }
    ],
    "notRenderable": false,
    "summary": "Anneau de progression SVG, avec un pourcentage centré et un libellé optionnel au-dessus et en dessous."
  },
  "ta-pwa": {
    "examples": [
      {
        "className": "TaPwaPromptExample",
        "skipHarness": false,
        "slug": "invite-d-installation",
        "title": "Invite d'installation"
      }
    ],
    "notRenderable": false,
    "summary": "Bandeau flottant proposant l'installation en PWA, affiché quand le navigateur signale la capacité d'installation."
  },
  "ta-rating": {
    "examples": [
      {
        "className": "TaRatingInteractiveExample",
        "skipHarness": false,
        "slug": "interactif",
        "title": "Interactif"
      },
      {
        "className": "TaRatingReadonlyExample",
        "skipHarness": false,
        "slug": "lecture-seule",
        "title": "Lecture seule"
      },
      {
        "className": "TaRatingColorsExample",
        "skipHarness": false,
        "slug": "couleurs-et-taille",
        "title": "Couleurs et taille"
      }
    ],
    "notRenderable": false,
    "summary": "Étoiles de notation cliquables, avec remplissage partiel décimal, en lecture seule ou personnalisées (couleurs, taille)."
  },
  "ta-rating-distribution": {
    "examples": [
      {
        "className": "TaRatingDistributionDefaultExample",
        "skipHarness": false,
        "slug": "repartition",
        "title": "Répartition"
      },
      {
        "className": "TaRatingDistributionEmptyExample",
        "skipHarness": false,
        "slug": "aucune-evaluation",
        "title": "Aucune évaluation"
      },
      {
        "className": "TaRatingDistributionScaleExample",
        "skipHarness": false,
        "slug": "autre-echelle",
        "title": "Autre échelle"
      }
    ],
    "notRenderable": false,
    "summary": "Répartition des notes reçues, une barre par échelon — ce que la moyenne seule ne dit pas."
  },
  "ta-sale": {
    "examples": [],
    "notRenderable": true,
    "summary": "Contenu Strapi « conditions de vente » avec case à cocher d'acceptation, émise sur `acceptation`."
  },
  "ta-search-displayer": {
    "examples": [],
    "notRenderable": true,
    "summary": "Champ de recherche avec historique local, censé encapsuler `ta-search-history-displayer` ; `container` choisirait le déclencheur affiché sous 576px de large."
  },
  "ta-search-field": {
    "examples": [
      {
        "className": "TaSearchFieldCollapsedExample",
        "skipHarness": false,
        "slug": "replie-par-defaut",
        "title": "Replié par défaut"
      },
      {
        "className": "TaSearchFieldOpenExample",
        "skipHarness": false,
        "slug": "ouvert-avec-valeur",
        "title": "Ouvert avec valeur"
      },
      {
        "className": "TaSearchFieldDisabledExample",
        "skipHarness": false,
        "slug": "desactive",
        "title": "Désactivé"
      }
    ],
    "notRenderable": false,
    "summary": "Champ de recherche qui se déploie depuis une icône ; se pilote par un `InputTextBox` (ou `InputNumber`)."
  },
  "ta-search-history-displayer": {
    "examples": [
      {
        "className": "TaSearchHistoryDisplayerInlineExample",
        "skipHarness": false,
        "slug": "liste-inline",
        "title": "Liste inline"
      },
      {
        "className": "TaSearchHistoryDisplayerDropdownExample",
        "skipHarness": false,
        "slug": "menu-deroulant",
        "title": "Menu déroulant"
      }
    ],
    "notRenderable": false,
    "summary": "Champ de recherche (`ta-search-field`) avec liste des dernières recherches persistées en `localStorage`, en liste inline ou en menu déroulant."
  },
  "ta-share-button": {
    "examples": [
      {
        "className": "TaShareButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaShareButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton de partage natif (`navigator.share`), en trois tailles et trois états."
  },
  "ta-swiper": {
    "examples": [
      {
        "className": "TaSwiperScrollExample",
        "skipHarness": false,
        "slug": "defilement-horizontal",
        "title": "Défilement horizontal"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur à défilement horizontal, sans aucune entrée : c'est le contenu projeté qui porte la mise en page."
  },
  "ta-swiper-light": {
    "examples": [
      {
        "className": "TaSwiperLightGalleryExample",
        "skipHarness": false,
        "slug": "galerie",
        "title": "Galerie"
      }
    ],
    "notRenderable": false,
    "summary": "Liste projetée via un `TemplateRef`, mise en scène en défilement horizontal sur mobile ou selon `forced`."
  },
  "ta-switch-language": {
    "examples": [
      {
        "className": "TaSwitchLanguageModesExample",
        "skipHarness": false,
        "slug": "modes-d-affichage",
        "title": "Modes d'affichage"
      }
    ],
    "notRenderable": false,
    "summary": "Sélecteur de langue, dans l'une de trois présentations : liste de pastilles en ligne, menu déroulant ou panneau modal."
  },
  "ta-switch-language-cta": {
    "examples": [
      {
        "className": "TaSwitchLanguageCtaDefaultExample",
        "skipHarness": false,
        "slug": "utilisation",
        "title": "Utilisation"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton d'accès rapide au changement de langue : un simple alias de `ta-switch-language` figé en `mode=\"modal\"`."
  },
  "ta-template-modal-container": {
    "examples": [
      {
        "className": "TaTemplateModalContainerWorkingExample",
        "skipHarness": false,
        "slug": "ouverture-par-style",
        "title": "Ouverture par style"
      }
    ],
    "notRenderable": false,
    "summary": "Modale pilotée par `TemplateRef`, ouverte/fermée via l'input `open` : enveloppe une `ta-modal` interne dont la taille est dérivée de `style`."
  },
  "ta-text": {
    "examples": [
      {
        "className": "TaTextSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaTextColorsExample",
        "skipHarness": false,
        "slug": "couleurs",
        "title": "Couleurs"
      },
      {
        "className": "TaTextBoldExample",
        "skipHarness": false,
        "slug": "gras",
        "title": "Gras"
      }
    ],
    "notRenderable": false,
    "summary": "Bloc de texte projeté, avec taille, couleur de token et graisse."
  },
  "ta-text-to-clipboard": {
    "examples": [
      {
        "className": "TaTextToClipboardSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaTextToClipboardValueExample",
        "skipHarness": false,
        "slug": "copier-une-reference",
        "title": "Copier une référence"
      }
    ],
    "notRenderable": false,
    "summary": "Icône « copier » : au clic, copie `value` dans le presse-papiers (`navigator.clipboard.writeText`) et déclenche une notification de succès ou d'échec."
  },
  "ta-time-ago": {
    "examples": [
      {
        "className": "TaTimeAgoCloseExample",
        "skipHarness": false,
        "slug": "reperes-proches",
        "title": "Repères proches"
      },
      {
        "className": "TaTimeAgoFarExample",
        "skipHarness": false,
        "slug": "reperes-lointains",
        "title": "Repères lointains"
      }
    ],
    "notRenderable": false,
    "summary": "Distance relative entre une date et aujourd'hui, en jours calendaires (`date-fns`)."
  },
  "ta-title": {
    "examples": [
      {
        "className": "TaTitleLevelsExample",
        "skipHarness": false,
        "slug": "niveaux",
        "title": "Niveaux"
      },
      {
        "className": "TaTitleIconAndStylesExample",
        "skipHarness": false,
        "slug": "icone-gras-theme",
        "title": "Icône, gras, thème"
      }
    ],
    "notRenderable": false,
    "summary": "Titre `h1`-`h6` avec icône optionnelle, graisse et thème contrôlés indépendamment du niveau."
  },
  "ta-toast": {
    "examples": [
      {
        "className": "TaToastCodesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      }
    ],
    "notRenderable": false,
    "summary": "Carte au liseré coloré selon `code`, dont le contenu est entièrement projeté."
  },
  "ta-toggle-card": {
    "examples": [
      {
        "className": "TaToggleCardSelectionExample",
        "skipHarness": false,
        "slug": "selection",
        "title": "Sélection"
      },
      {
        "className": "TaToggleCardDisabledExample",
        "skipHarness": false,
        "slug": "desactivee",
        "title": "Désactivée"
      }
    ],
    "notRenderable": false,
    "summary": "Carte cliquable à cocher/décocher (titre, description, icône), pilotée depuis l'extérieur par `isActive`."
  },
  "ta-tree-children": {
    "examples": [
      {
        "className": "TaTreeChildrenConnectorExample",
        "skipHarness": false,
        "slug": "enfants-d-un-n-ud",
        "title": "Enfants d'un nœud"
      }
    ],
    "notRenderable": false,
    "summary": "Regroupe les `ta-tree-item` enfants d'un nœud, décalés et reliés à leur parent par un connecteur vertical."
  },
  "ta-tree-container": {
    "examples": [
      {
        "className": "TaTreeContainerRegionsExample",
        "skipHarness": false,
        "slug": "hierarchie-de-regions",
        "title": "Hiérarchie de régions"
      }
    ],
    "notRenderable": false,
    "summary": "Conteneur racine d'un arbre : enveloppe une hiérarchie de `ta-tree-item`, sans logique propre."
  },
  "ta-tree-item": {
    "examples": [
      {
        "className": "TaTreeItemNestedExample",
        "skipHarness": false,
        "slug": "n-uds-racines-et-imbriques",
        "title": "Nœuds racines et imbriqués"
      }
    ],
    "notRenderable": false,
    "summary": "Nœud d'un arbre : un `ta-tree-item` peut contenir un `ta-tree-children`, qui contient à son tour d'autres `ta-tree-item` — récursif par composition."
  },
  "ta-trigram": {
    "examples": [
      {
        "className": "TaTrigramValuesExample",
        "skipHarness": false,
        "slug": "valeurs",
        "title": "Valeurs"
      },
      {
        "className": "TaTrigramSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaTrigramTonesExample",
        "skipHarness": false,
        "slug": "tons",
        "title": "Tons"
      }
    ],
    "notRenderable": false,
    "summary": "Pastille ronde affichant une courte chaîne, taille personnalisable en pixels."
  },
  "ta-typed-message": {
    "examples": [
      {
        "className": "TaTypedMessageTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      }
    ],
    "notRenderable": false,
    "summary": "Message d'alerte typé, avec icône assortie au niveau (`MessageLevel`)."
  },
  "ta-user-logo": {
    "examples": [
      {
        "className": "TaUserLogoSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaUserLogoDefaultTypeExample",
        "skipHarness": false,
        "slug": "type-par-defaut-sans-photo",
        "title": "Type par défaut, sans photo"
      },
      {
        "className": "TaUserLogoPictureExample",
        "skipHarness": false,
        "slug": "avec-photo",
        "title": "Avec photo"
      }
    ],
    "notRenderable": false,
    "summary": "Avatar utilisateur : photo si fournie, sinon trigramme ou icône générique."
  },
  "ta-users-list": {
    "examples": [
      {
        "className": "TaUsersListValuesExample",
        "skipHarness": false,
        "slug": "liste",
        "title": "Liste"
      },
      {
        "className": "TaUsersListEmptyExample",
        "skipHarness": false,
        "slug": "liste-vide",
        "title": "Liste vide"
      }
    ],
    "notRenderable": false,
    "summary": "Rangée de `ta-user-logo` (taille `md`, trigramme forcé) à partir d'un flux d'utilisateurs."
  },
  "ta-validation-modal": {
    "examples": [
      {
        "className": "TaValidationModalExternalExample",
        "skipHarness": false,
        "slug": "confirmation-externe",
        "title": "Confirmation externe"
      }
    ],
    "notRenderable": false,
    "summary": "Modale de confirmation Oui/Non, entièrement pilotée depuis l'extérieur par `[open]` et `[params]`."
  },
  "ta-veriff-button": {
    "examples": [
      {
        "className": "TaVeriffButtonModesExample",
        "skipHarness": false,
        "slug": "modes",
        "title": "Modes"
      },
      {
        "className": "TaVeriffButtonSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      },
      {
        "className": "TaVeriffButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton de vérification d'identité Veriff, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-whatsapp-button": {
    "examples": [
      {
        "className": "TaWhatsappButtonModesExample",
        "skipHarness": false,
        "slug": "modes",
        "title": "Modes"
      },
      {
        "className": "TaWhatsappButtonStatesExample",
        "skipHarness": false,
        "slug": "etats",
        "title": "États"
      },
      {
        "className": "TaWhatsappButtonMessageExample",
        "skipHarness": false,
        "slug": "avec-message-pre-rempli",
        "title": "Avec message pré-rempli"
      }
    ],
    "notRenderable": false,
    "summary": "Bouton d'ouverture d'une conversation WhatsApp, avec ou sans libellé, en trois tailles et trois états."
  },
  "ta-word-viewer": {
    "examples": [
      {
        "className": "TaWordViewerDefaultExample",
        "skipHarness": false,
        "slug": "apercu",
        "title": "Aperçu"
      }
    ],
    "notRenderable": false,
    "summary": "Aperçu d'un fichier Word dans un `ngx-doc-viewer` (`viewer=\"google\"`)."
  },
  "ta-wrapped-icon": {
    "examples": [
      {
        "className": "TaWrappedIconTypesExample",
        "skipHarness": false,
        "slug": "types",
        "title": "Types"
      },
      {
        "className": "TaWrappedIconSizesExample",
        "skipHarness": false,
        "slug": "tailles",
        "title": "Tailles"
      }
    ],
    "notRenderable": false,
    "summary": "Icône Material dans un fond coloré arrondi (`ColorType`), en quatre tailles."
  }
};
