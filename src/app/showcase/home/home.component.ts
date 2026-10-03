import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { PageLayoutComponent } from "../../layout/page-layout.component";

interface Section {
  pkg: string;
  title: string;
  description: string;
  route: string;
}

@Component({
  standalone: true,
  selector: "app-home",
  imports: [PageLayoutComponent, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly sections: Section[] = [
    {
      pkg: "@ta/styles",
      title: "Thème",
      description: "Jetons de couleur, d'espacement et de typographie, et bascule entre thèmes.",
      route: "/theme",
    },
    {
      pkg: "@ta/icons",
      title: "Icônes",
      description: "Icônes de police et Material, leurs tailles et leurs variantes.",
      route: "/icons",
    },
    {
      pkg: "@ta/ui",
      title: "Composants d'interface",
      description: "Typographie, actions, cartes, listes, mise en page, états de chargement.",
      route: "/ui",
    },
    {
      pkg: "@ta/form-basic",
      title: "Formulaires",
      description: "Orchestration d'un formulaire depuis un modèle — validation, soumission, chargement, erreur.",
      route: "/form-basic",
    },
    {
      pkg: "@ta/form-input",
      title: "Champs de formulaire",
      description: "Vingt types de champ — saisie, sélection, date et heure, média — chacun avec son état requis, désactivé, en erreur.",
      route: "/form-input",
    },
    {
      pkg: "@ta/features",
      title: "Grilles de données",
      description: "Vues carte et tableau, filtres, presets, regroupement, sélection, pagination.",
      route: "/features",
    },
    {
      pkg: "@ta/charts",
      title: "Graphiques",
      description: "Barres, lignes, anneaux et graphiques combinés.",
      route: "/charts",
    },
    {
      pkg: "@ta/files-basic",
      title: "Fichiers",
      description: "Listes de fichiers et de documents, aperçu et téléversement.",
      route: "/files-basic",
    },
    {
      pkg: "@ta/files-extended",
      title: "Fichiers — affichage et envoi avancés",
      description: "Affichage et téléversement de fichiers au-delà des listes de base.",
      route: "/files-extended",
    },
    {
      pkg: "@ta/wysiswyg",
      title: "Éditeur de contenu",
      description: "Édition riche par blocs et rendu du contenu produit.",
      route: "/wysiswyg",
    },
    {
      pkg: "@ta/cms",
      title: "CMS",
      description: "Rendu du contenu de blocs et des pages de vente produites par l'éditeur.",
      route: "/cms",
    },
    {
      pkg: "@ta/core",
      title: "Filtres, recherche et divers",
      description: "Filtres de recherche, historique, carte et copie dans le presse-papiers.",
      route: "/core",
    },
    {
      pkg: "@ta/utils",
      title: "Utilitaires",
      description: "Pipes, directives et fonctions partagées par les autres paquets.",
      route: "/utils",
    },
    {
      pkg: "@ta/user",
      title: "Compte utilisateur",
      description: "Connexion, inscription et écran de compte.",
      route: "/user",
    },
    {
      pkg: "@ta/menu",
      title: "Menu & navigation",
      description: "Menus principaux, contextuels et actions rapides.",
      route: "/menu",
    },
    {
      pkg: "@ta/notification",
      title: "Notifications",
      description: "Bandeaux, encarts et notifications en ligne.",
      route: "/notification",
    },
  ];
}
