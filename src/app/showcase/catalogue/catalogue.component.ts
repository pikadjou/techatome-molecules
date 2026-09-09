import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Validators } from "@angular/forms";

import { of } from "rxjs";

import { FormComponent } from "@ta/form-basic";
import {
  InputBase,
  InputCheckBox,
  InputDatePicker,
  InputDropdown,
  InputPanel,
  InputRadio,
  InputSlider,
  InputTextarea,
  InputTextBox,
} from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import {
  BadgeComponent,
  BannerComponent,
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  CardCtaComponent,
  CardHeaderComponent,
  CardSubtitleComponent,
  CardTitleComponent,
  LabelComponent,
  ListContainerComponent,
  ListElementComponent,
  ListSubTitleComponent,
  ListTagComponent,
  ListTitleComponent,
  RatingComponent,
  TextComponent,
  ToastComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

/** Une ligne du tableau boutons : un type, ses quatre états. */
interface ButtonRow {
  label: string;
  type: "primary" | "secondary" | "tertiary" | "danger";
  text: string;
}

/** Une ligne de la liste de démonstration. */
interface Dossier {
  title: string;
  meta: string;
  tag: string;
  tagType: "primary" | "warning" | "success";
  current: boolean;
}

@Component({
  standalone: true,
  selector: "app-catalogue",
  imports: [
    BadgeComponent,
    BannerComponent,
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    CardCtaComponent,
    CardHeaderComponent,
    CardSubtitleComponent,
    CardTitleComponent,
    FontIconComponent,
    FormComponent,
    LabelComponent,
    ListContainerComponent,
    ListElementComponent,
    ListSubTitleComponent,
    ListTagComponent,
    ListTitleComponent,
    PageLayoutComponent,
    RatingComponent,
    TextComponent,
    ToastComponent,
  ],
  templateUrl: "./catalogue.component.html",
  styleUrl: "./catalogue.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CataloguePage {
  /** Résultat du formulaire de la planche « Formulaire complet ». */
  readonly submitted = signal<unknown>(null);

  readonly buttonRows: ButtonRow[] = [
    { label: "accent", type: "secondary", text: "Valider" },
    { label: "navy", type: "primary", text: "Enregistrer" },
    { label: "outline", type: "tertiary", text: "Annuler" },
    { label: "danger", type: "danger", text: "Supprimer" },
  ];

  readonly dossiers: Dossier[] = [
    {
      title: "Rénovation toiture — Bloc B",
      meta: "Claire Moreau · 14/10/2026",
      tag: "En attente",
      tagType: "warning",
      current: true,
    },
    {
      title: "Mise en conformité électrique",
      meta: "Marc Lefèvre · 02/11/2026",
      tag: "Brouillon",
      tagType: "primary",
      current: false,
    },
    {
      title: "Audit énergétique annuel",
      meta: "Sofia Nkemba · 20/09/2026",
      tag: "Clôturé",
      tagType: "success",
      current: false,
    },
  ];

  // `code` de `ta-toast` est typé sur une énumération interne à `@ta/ui`, que
  // son public-api n'expose pas : on passe donc les ordinaux, assignables à un
  // type énuméré, plutôt que l'homonyme de `@ta/notification`.
  readonly toasts: { code: number; message: string }[] = [
    { code: 4, message: "Le dossier a été enregistré." },
    { code: 1, message: "Échec de l'envoi. Réessayez." },
    { code: 3, message: "Une nouvelle version est disponible." },
  ];

  /** Planche « Champs » — un exemplaire de chaque état porté par le trait bas. */
  readonly fieldInputs: InputBase<any>[] = [
    new InputTextBox({
      key: "titre",
      label: "Intitulé",
      value: "Rénovation toiture",
    }),
    new InputTextBox({
      key: "email",
      label: "Courriel",
      value: "jean.dupont@",
      validators: [Validators.email],
    }),
    new InputTextBox({
      key: "reference",
      label: "Référence",
      value: "DOS-2026-0184",
      disabled: true,
    }),
    new InputDropdown({
      key: "statut",
      label: "Statut",
      options$: of([
        { id: "draft", name: "Brouillon" },
        { id: "running", name: "En cours" },
        { id: "closed", name: "Clôturé" },
      ]),
      value: "running",
    }),
    new InputDatePicker({ key: "echeance", label: "Échéance" }),
    new InputTextarea({
      key: "description",
      label: "Description",
      value: "Remplacement complet de la couverture, isolation et zinguerie.",
    }),
  ];

  /** Planche « Sélection & bascule ». */
  readonly selectionInputs: InputBase<any>[] = [
    new InputRadio<string>({
      key: "client",
      label: "Type de client",
      options: of([
        { id: "company", name: "Société" },
        { id: "person", name: "Particulier" },
      ]),
      value: "company",
    }),
    new InputCheckBox({
      key: "notify",
      label: "Notifier le responsable",
      value: true,
    }),
    new InputCheckBox({ key: "archive", label: "Archiver après clôture" }),
    new InputCheckBox({
      key: "auto",
      label: "Suivi automatique activé",
      value: true,
      toggle: true,
    }),
    new InputCheckBox({
      key: "manual",
      label: "Suivi automatique désactivé",
      toggle: true,
    }),
    new InputSlider({
      key: "avancement",
      label: "Avancement",
      min: 0,
      max: 100,
      value: 68,
    }),
  ];

  /** Planche « Formulaire complet » — étape 2 d'un parcours en trois temps. */
  readonly formInputs: InputBase<any>[] = [
    new InputPanel({
      key: "general",
      label: "Informations générales",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputTextBox({
          key: "titre",
          label: "Intitulé",
          value: "Rénovation toiture — Bloc B",
          validators: [Validators.required],
        }),
        new InputDropdown({
          key: "responsable",
          label: "Responsable",
          options$: of([
            { id: "cm", name: "Claire Moreau" },
            { id: "ml", name: "Marc Lefèvre" },
          ]),
          value: "cm",
        }),
        new InputDatePicker({ key: "echeance", label: "Échéance" }),
        new InputRadio<string>({
          key: "client",
          label: "Type de client",
          options: of([
            { id: "company", name: "Société" },
            { id: "person", name: "Particulier" },
          ]),
          value: "company",
        }),
        new InputTextarea({
          key: "description",
          label: "Description",
          value:
            "Remplacement complet de la couverture, isolation et zinguerie.",
        }),
        new InputCheckBox({
          key: "notify",
          label: "Notifier le responsable par e-mail",
          value: true,
        }),
      ],
    }),
  ];

  /** Planche « Mobile » — la même étape 2, resserrée sur 390 px. */
  readonly mobileInputs: InputBase<any>[] = [
    new InputTextBox({
      key: "titre",
      label: "Intitulé",
      value: "Rénovation toiture",
      validators: [Validators.required],
    }),
    new InputDropdown({
      key: "responsable",
      label: "Responsable",
      options$: of([{ id: "cm", name: "Claire Moreau" }]),
    }),
    new InputRadio<string>({
      key: "client",
      label: "Type de client",
      options: of([
        { id: "company", name: "Société" },
        { id: "person", name: "Particulier" },
      ]),
      value: "company",
    }),
    new InputCheckBox({
      key: "notify",
      label: "Notifier par e-mail",
      value: true,
    }),
  ];
}
