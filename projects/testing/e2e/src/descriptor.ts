import type { ShowcasePage } from "./pages/showcase-page";

export type Interaction =
  | { kind: "click"; targetTestId?: string; assert?: "stays-visible" }
  | { kind: "type"; value: string; targetTestId?: string }
  | { kind: "select"; option: string; targetTestId?: string }
  | { kind: "toggle"; targetTestId?: string }
  | { kind: "open-overlay"; overlayTestId: string; targetTestId?: string };

export interface ComponentTestDescriptor {
  /** Nom lisible, ex: "Button" */
  name: string;
  /** Package @ta/*, ex: "ui" */
  package: string;
  /** Route (harness `/e2e-harness/<caseId>` ou route showcase), ex: "/e2e-harness/ui-button" */
  route: string;
  /** data-testid du composant à cibler, ex: "ta-button" */
  testId: string;
  /**
   * Assertion de rendu :
   * - "visible" (défaut) : le composant est visible à l'écran ;
   * - "attached" : le composant est monté dans le DOM (utile pour les composants
   *   à état vide, overlays fermés ou wrappers structurels sans rendu visible).
   */
  render?: "visible" | "attached";
  /** Interactions optionnelles à vérifier */
  interactions?: Interaction[];
  /** Hook d'initialisation pour cas particuliers */
  setup?: (page: ShowcasePage) => Promise<void>;
}
