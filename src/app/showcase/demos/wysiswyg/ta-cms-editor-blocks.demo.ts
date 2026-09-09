import { ChangeDetectionStrategy, Component } from "@angular/core";

import { OutputBlockData } from "@editorjs/editorjs";

import { BlockTextComponent } from "@ta/wysiswyg";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-cms-editor-blocks-types",
  imports: [BlockTextComponent],
  template: ` <ta-cms-editor-blocks [blocks]="this.blocks"></ta-cms-editor-blocks> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCmsEditorBlocksTypesExample {
  // Un bloc par branche du `@switch` de BlockTextComponent : c'est cette liste,
  // au format produit par `ta-cms-editor-input`, qui décide de ce qui s'affiche.
  blocks: OutputBlockData[] = [
    { id: "h1", type: "header", data: { text: "Titre de section", level: 2 } },
    {
      id: "p1",
      type: "paragraph",
      data: { text: "Un paragraphe avec du <b>texte en gras</b> et de l'<i>italique</i>." },
    },
    {
      id: "l1",
      type: "list",
      data: { style: "unordered", items: ["Premier point", "Deuxième point", "Troisième point"] },
    },
    {
      id: "l2",
      type: "list",
      data: { style: "ordered", items: ["Étape une", "Étape deux"] },
    },
    {
      id: "q1",
      type: "quote",
      data: { text: "La simplicité est la sophistication suprême.", caption: "Léonard de Vinci" },
    },
    { id: "d1", type: "delimiter", data: {} },
    {
      id: "i1",
      type: "image",
      data: { file: { url: "https://picsum.photos/seed/cms-editor-blocks/640/360" } },
    },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-cms-editor-blocks",
  group: "Éditeur riche",
  summary: "Rendu en lecture seule d'un contenu produit par `ta-cms-editor-input`, bloc par bloc.",
  examples: [{ title: "Tous les types de blocs", layout: "stack", component: TaCmsEditorBlocksTypesExample }],
  notes:
    "Le cas `warning` (`ta-toast` + `ta-notification-inline`) n'est pas illustré ici : `NotificationInlineComponent` bascule son affichage via un `effect()` qui écrit une propriété simple, jamais lue à travers le graphe de signaux — sous une page statique comme celle-ci, aucun second passage de détection de changements ne survient pour le révéler (vérifié : la donnée et la logique sont correctes, seul l'affichage reste figé sur l'état initial). C'est une fragilité de `NotificationInlineComponent`, hors du périmètre de cette démo.",
};
