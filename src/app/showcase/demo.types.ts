import { Type } from "@angular/core";

export interface DemoExample {
  /** Titre affiché ; son slug sert d'identifiant de cas harness. */
  title: string;
  description?: string;
  component: Type<unknown>;
  /** Exclut l'exemple du harness E2E (permission, minuterie, plein écran…). */
  skipHarness?: boolean;
  /**
   * Disposition des variantes. `row` les pose côte à côte pour qu'on les compare ;
   * `stack` les empile en pleine largeur, ce que veulent les mises en page, les
   * formulaires et les tableaux.
   */
  layout?: "row" | "stack";
}

export interface ComponentDemo {
  /** Sélecteur du composant. Doit correspondre au nom du fichier de démo. */
  id: string;
  /**
   * Famille affichée dans l'index du paquet. Doit venir du vocabulaire
   * autorisé pour le paquet du composant — voir `recette.md`, section
   * « L'enregistrement » ; le générateur lève si la valeur n'y figure pas.
   */
  group: string;
  summary: string;
  examples: DemoExample[];
  /**
   * Renseigné uniquement quand le composant ne peut pas être monté isolément
   * (jeton fourni par un conteneur, API globale absente…). `examples` est alors
   * vide et la page affiche cette explication suivie d'un usage non exécuté.
   */
  notRenderable?: { reason: string; usage: string };
  /** Notes libres rendues sous les exemples. */
  notes?: string;
}

/**
 * Une entrée du registre des démos (`src/app/showcase/registry.ts`, valeurs
 * générées dans `src/app/showcase/generated/registry.ts`). Définie ici plutôt
 * que dans `registry.ts` : ce dernier importe la valeur `REGISTRY` générée, et
 * le fichier généré a besoin de ce type pour l'annoter — les deux ne peuvent
 * pas s'importer l'un l'autre sans créer un cycle. `demo.types.ts` n'importe
 * ni l'un ni l'autre, donc les deux peuvent l'importer sans cycle.
 */
export interface RegistryEntry {
  /** Sélecteur du composant, second segment de la route. */
  id: string;
  /** Nom complet du paquet, affiché tel quel. */
  pkg: string;
  /** Nom court, premier segment de la route. */
  short: string;
  /** Famille affichée dans l'index du paquet. */
  group: string;
  load: () => Promise<{ DEMO: ComponentDemo }>;
}
