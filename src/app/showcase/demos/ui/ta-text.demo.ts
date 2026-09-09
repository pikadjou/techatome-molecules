import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-text-sizes",
  imports: [TextComponent],
  template: `
    <ta-text size="xs">xs</ta-text>
    <ta-text size="sm">sm</ta-text>
    <ta-text size="md">md</ta-text>
    <ta-text size="lg">lg</ta-text>
    <ta-text size="xl">xl</ta-text>
    <ta-text size="xxl">xxl</ta-text>
    <ta-text size="big">big</ta-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTextSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-text-colors",
  imports: [TextComponent],
  template: `
    <ta-text color="default">Default</ta-text>
    <ta-text color="secondary">Secondary</ta-text>
    <ta-text color="success">Success</ta-text>
    <ta-text color="warning">Warning</ta-text>
    <ta-text color="alert">Alert</ta-text>
    <ta-text color="purple">Purple</ta-text>
    <ta-text color="new">New</ta-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTextColorsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-text-bold",
  imports: [TextComponent],
  template: `
    <ta-text [isBold]="false">Texte normal</ta-text>
    <ta-text [isBold]="true">Texte en gras</ta-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTextBoldExample {}

export const DEMO: ComponentDemo = {
  id: "ta-text",
  group: "Bases",
  summary: "Bloc de texte projeté, avec taille, couleur de token et graisse.",
  examples: [
    { title: "Tailles", description: "Les sept valeurs de `size` (`TaSizes`).", component: TaTextSizesExample },
    { title: "Couleurs", description: "Les sept valeurs de `color` (`ColorType`), chacune une classe `text-color-text-<color>`.", component: TaTextColorsExample },
    { title: "Gras", component: TaTextBoldExample },
  ],
};
