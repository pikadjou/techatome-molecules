import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LabelComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-label-types",
  imports: [LabelComponent],
  template: `
    <ta-label type="default">Default</ta-label>
    <ta-label type="secondary">Secondary</ta-label>
    <ta-label type="success">Success</ta-label>
    <ta-label type="warning">Warning</ta-label>
    <ta-label type="alert">Alert</ta-label>
    <ta-label type="purple">Purple</ta-label>
    <ta-label type="new">New</ta-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLabelTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-label-sizes",
  imports: [LabelComponent],
  template: `
    <ta-label size="xs">xs</ta-label>
    <ta-label size="sm">sm</ta-label>
    <ta-label size="md">md</ta-label>
    <ta-label size="lg">lg</ta-label>
    <ta-label size="xl">xl</ta-label>
    <ta-label size="xxl">xxl</ta-label>
    <ta-label size="big">big</ta-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLabelSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-label-icon-shape",
  imports: [LabelComponent],
  template: `
    <ta-label icon="wifi" size="sm">Wi-Fi</ta-label>
    <ta-label icon="local_parking" size="sm">Parking</ta-label>
    <ta-label icon="verified" type="success" size="sm">Bail vérifié</ta-label>
    <ta-label shape="pill" size="sm">Capsule</ta-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLabelIconShapeExample {}

export const DEMO: ComponentDemo = {
  id: "ta-label",
  group: "Bases",
  summary: "Étiquette de contenu projeté, déclinée en sept intentions de couleur et sept tailles, avec pictogramme optionnel.",
  examples: [
    { title: "Types", description: "Les sept valeurs de `type`.", component: TaLabelTypesExample },
    { title: "Tailles", description: "Les sept valeurs de `size`.", component: TaLabelSizesExample },
    {
      title: "Pictogramme et forme",
      layout: "stack",
      description:
        "`icon` pose un pictogramme devant le texte projeté ; il prend l'encre de l'étiquette, sans réglage. `shape=\"pill\"` force la capsule là où le thème fixe un autre rayon — utile quand l'étiquette longe un avatar ou une photo, où un angle laisserait un vide. `shape=\"theme\"` (défaut) suit `components.label.radius`, et donne donc un rendu différent d'un thème à l'autre.",
      component: TaLabelIconShapeExample,
    },
  ],
};
