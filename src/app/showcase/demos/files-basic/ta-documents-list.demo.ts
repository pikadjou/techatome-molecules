import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { DocumentsListComponent } from "@ta/files-basic";
import { InputUploadValue } from "@ta/form-model";
import { DocumentDto, FileType, TaDocumentsService } from "@ta/services";

import { ComponentDemo } from "../../demo.types";

// `ta-time-ago` (@ta/ui) passe la date par `DatePipe` en format `'shortDate'`.
// L'application ne fait `registerLocaleData` pour aucune locale (vérifié dans
// `src/app/app.config.ts` et `src/main.ts`) alors que `LOCALE_ID` vaut `fr` :
// sans cet enregistrement, `DatePipe` lève `NG0701: Missing locale data for
// the locale "fr"` dès qu'un document a une date, et la page ne rend rien.
registerLocaleData(localeFr);

/**
 * `DocumentDto` (`@ta/services`) ne porte que `id`, `url`, `description`,
 * `createdDate`, `size` — mais `list.component.html` lit `doc.name` et
 * `doc.uploadedDate`, absents du type, ainsi que `doc.fileType` (pour le badge
 * du mode sélection). `tsconfig.json` a `strictTemplates: false`, donc rien ne
 * signale l'écart à la compilation ; ce mock fournit ces trois champs en plus
 * du contrat officiel pour que la démo affiche un nom, une date et un type.
 */
type MockDocument = DocumentDto & { name: string; uploadedDate: string; fileType: FileType };

const MOCK_DOCUMENTS: MockDocument[] = [
  {
    id: "1",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    name: "rapport-financier-2025.pdf",
    description: "rapport-financier-2025.pdf",
    uploadedDate: "2025-11-03T09:15:00",
    createdDate: "2025-11-03T09:15:00",
    size: 842_311,
    fileType: FileType.Invoice,
  },
  {
    id: "2",
    url: "#",
    name: "contrat-prestation-signe.docx",
    description: "contrat-prestation-signe.docx",
    uploadedDate: "2025-10-18T14:02:00",
    createdDate: "2025-10-18T14:02:00",
    size: 128_744,
    fileType: FileType.SignedPriceOffer,
  },
  {
    id: "3",
    url: "#",
    name: "photo-chantier-facade.jpg",
    description: "photo-chantier-facade.jpg",
    uploadedDate: "2025-09-30T08:47:00",
    createdDate: "2025-09-30T08:47:00",
    size: 3_215_880,
    fileType: FileType.Picture,
  },
  {
    id: "4",
    url: "#",
    name: "tableau-couts-projet.xlsx",
    description: "tableau-couts-projet.xlsx",
    uploadedDate: "2025-08-21T11:30:00",
    createdDate: "2025-08-21T11:30:00",
    size: 96_207,
    fileType: FileType.PriceOfferVersion,
  },
  {
    id: "5",
    url: "#",
    name: "plans-archives-2024.zip",
    description: "plans-archives-2024.zip",
    uploadedDate: "2025-06-12T16:00:00",
    createdDate: "2025-06-12T16:00:00",
    size: 12_480_500,
    fileType: FileType.GRDFolder,
  },
];

/**
 * `TaDocumentsService` (@ta/services) appelle GraphQL au premier `ngOnInit`.
 * Le composant n'a pas d'autre point d'entrée pour ses données : ce mock
 * remplace le service par jeton, comme le fait déjà
 * `src/app/e2e-harness/cases/documents.case.ts`, mais avec un jeu de
 * documents réel au lieu d'une liste vide.
 */
const MOCK_DOCUMENTS_SERVICE = {
  getDocuments$: (ids: string[]) => of(MOCK_DOCUMENTS.filter((doc) => ids.includes(doc.id))),
  fetchDocuments$: (ids: string[]) => of(MOCK_DOCUMENTS.filter((doc) => ids.includes(doc.id))),
};

@Component({
  standalone: true,
  selector: "app-ex-ta-documents-list-default",
  imports: [DocumentsListComponent],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: `
    <ta-documents-list [documentsIds]="this.documentIds"></ta-documents-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDocumentsListDefaultExample {
  documentIds = ["1", "2", "3", "4", "5"];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-documents-list-selection",
  imports: [DocumentsListComponent],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: `
    <ta-documents-list
      [documentsIds]="this.documentIds"
      [actions]="'select'"
      [defaultSelected]="this.defaultSelected"
      (checkedFilesChanged)="this.onSelectionChanged($event)"
    ></ta-documents-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDocumentsListSelectionExample {
  documentIds = ["1", "2", "3", "4", "5"];

  // Pré-coche deux documents : `_fetch()` initialise `_checkedFiles` avec ceux
  // dont l'id figure dans `defaultSelected`.
  defaultSelected = ["2", "4"];

  onSelectionChanged(files: InputUploadValue[]) {
    console.log("Documents sélectionnés :", files);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-documents-list-delete",
  imports: [DocumentsListComponent],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: `
    <ta-documents-list
      [documentsIds]="this.documentIds"
      [actions]="'delete'"
      (remove)="this.onRemove($event)"
    ></ta-documents-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDocumentsListDeleteExample {
  documentIds = ["1", "2", "3"];

  // `remove` ne fait qu'émettre l'id : retirer le document de la liste réelle
  // (`documentsIds`) reste à la charge du parent.
  onRemove(id: string) {
    console.log("Document à retirer :", id);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-documents-list-readonly",
  imports: [DocumentsListComponent],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: `
    <ta-documents-list [documentsIds]="this.documentIds" [actions]="'delete'" [readonly]="true"></ta-documents-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDocumentsListReadonlyExample {
  documentIds = ["1", "2"];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-documents-list-empty",
  imports: [DocumentsListComponent],
  providers: [{ provide: TaDocumentsService, useValue: MOCK_DOCUMENTS_SERVICE }],
  template: `
    <ta-documents-list [documentsIds]="[]" [emptyMessage]="'Aucun document pour ce dossier.'"></ta-documents-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDocumentsListEmptyExample {}

export const DEMO: ComponentDemo = {
  id: "ta-documents-list",
  group: "Fichiers",
  summary: "Liste de documents pilotée par `TaDocumentsService`, avec sélection ou suppression optionnelles.",
  examples: [
    { title: "Liste par défaut", layout: "stack", component: TaDocumentsListDefaultExample },
    {
      title: "Sélection",
      layout: "stack",
      description:
        "`actions: 'select'` fait apparaître une case à cocher par document ; `defaultSelected` précoche ceux dont l'id y figure, et chaque clic émet la liste complète des documents cochés sur `checkedFilesChanged`.",
      component: TaDocumentsListSelectionExample,
    },
    {
      title: "Suppression",
      layout: "stack",
      description: "`actions: 'delete'` affiche un bouton outil par document ; le cliquer émet son id sur `remove`.",
      component: TaDocumentsListDeleteExample,
    },
    {
      title: "Lecture seule",
      layout: "stack",
      description:
        "`readonly` pose l'attribut HTML `disabled` sur le bouton de suppression (`ta-button-tool[readonly]`) : le clic ne déclenche plus `remove`.",
      component: TaDocumentsListReadonlyExample,
    },
    {
      title: "Vide",
      layout: "stack",
      description: "`documentsIds` vide et `emptyMessage` renseigné : `ta-empty` affiche le message à la place de la liste.",
      component: TaDocumentsListEmptyExample,
    },
  ],
  notes:
    "`DocumentsListComponent` injecte `TaDocumentsService` (@ta/services) et appelle son GraphQL dès `ngOnInit` : ces cinq exemples substituent le service par jeton, comme le fait déjà `src/app/e2e-harness/cases/documents.case.ts`. Le badge de type affiché en mode sélection (`selectTemplate`) traduit la clé `communication.documents.file-type.<type>` : aucun fichier `i18n` du dépôt ne définit ces clés (recherche globale sur `communication.documents.file-type`), et aucun `MissingTranslationHandler` n'est configuré dans `app.config.ts` — ngx-translate affiche donc la clé brute plutôt qu'un libellé, y compris dans cette démo. Chaque document passe par `ta-time-ago`, qui appelle `DatePipe` en `'shortDate'` : sans `registerLocaleData`, absent de `app.config.ts`/`main.ts` alors que `LOCALE_ID` vaut `fr`, ce pipe lève `NG0701` et la page ne rend rien du tout. Ce fichier de démo appelle `registerLocaleData(localeFr)` en tête de module pour que la page fonctionne ; l'application elle-même en a toujours besoin, hors du périmètre de cette vitrine.",
};
