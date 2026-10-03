import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextToClipboardComponent } from "@ta/core";
import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-text-to-clipboard-sizes",
  imports: [TextToClipboardComponent, TextComponent],
  template: `
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'xs'" iconSize="xs"></ta-text-to-clipboard>
      <ta-text size="sm">xs</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'sm'" iconSize="sm"></ta-text-to-clipboard>
      <ta-text size="sm">sm (défaut)</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'md'" iconSize="md"></ta-text-to-clipboard>
      <ta-text size="sm">md</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'lg'" iconSize="lg"></ta-text-to-clipboard>
      <ta-text size="sm">lg</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'xl'" iconSize="xl"></ta-text-to-clipboard>
      <ta-text size="sm">xl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'xxl'" iconSize="xxl"></ta-text-to-clipboard>
      <ta-text size="sm">xxl</ta-text>
    </div>
    <div class="flex-column align-center g-space-xs">
      <ta-text-to-clipboard [value]="'big'" iconSize="big"></ta-text-to-clipboard>
      <ta-text size="sm">big</ta-text>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTextToClipboardSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-text-to-clipboard-value",
  imports: [TextToClipboardComponent],
  template: `
    <div class="align-center g-space-xs">
      <span>REF-2024-00842</span>
      <ta-text-to-clipboard [value]="'REF-2024-00842'"></ta-text-to-clipboard>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTextToClipboardValueExample {}

export const DEMO: ComponentDemo = {
  id: "ta-text-to-clipboard",
  group: "Divers",
  summary:
    "Icône « copier » : au clic, copie `value` dans le presse-papiers (`navigator.clipboard.writeText`) et déclenche une notification de succès ou d'échec.",
  examples: [
    {
      title: "Tailles",
      description: "`iconSize` (`TaSizes`, défaut `sm`) est relayé tel quel à `ta-font-icon`.",
      component: TaTextToClipboardSizesExample,
    },
    {
      title: "Copier une référence",
      description:
        "Cliquer l'icône copie `value` et déclenche une notification (`ta-notification-box`, montée dans le shell de l'application) confirmant le succès ou l'échec de `navigator.clipboard.writeText`.",
      component: TaTextToClipboardValueExample,
    },
  ],
  notes:
    "Deux défauts vérifiés à l'exécution, tous deux dans `@ta/core`/`@ta/utils`, sans rapport avec cette démo. Icône invisible : `text-to-clipboard.component.html` demande `<ta-font-icon name=\"copy\">`, mais `\"copy\"` n'est pas une ligature valide de la police Google *Material Icons* (celle qu'utilise `ta-font-icon`) — le nom correct est `\"content_copy\"` ; confirmé en comparant le rendu des deux noms dans cette police. La zone reste cliquable (24×24px), seule l'icône ne s'affiche pas. Messages non traduits : `copyTextToClipboard` (`@ta/utils`) résout la notification via les clés `ui.clipboard.success` et `ui.clipboard.error`, absentes de tous les fichiers `i18n/{en,fr}.json` du dépôt (recherche du mot « clipboard » sans résultat) — la notification affiche donc la clé brute plutôt qu'un message.",
};
