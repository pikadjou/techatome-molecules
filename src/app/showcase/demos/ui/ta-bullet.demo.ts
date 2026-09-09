import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BulletComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-bullet-types",
  imports: [BulletComponent],
  template: `
    <ta-bullet type="default"></ta-bullet>
    <ta-bullet type="secondary"></ta-bullet>
    <ta-bullet type="success"></ta-bullet>
    <ta-bullet type="warning"></ta-bullet>
    <ta-bullet type="alert"></ta-bullet>
    <ta-bullet type="purple"></ta-bullet>
    <ta-bullet type="new"></ta-bullet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBulletTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-bullet-sizes",
  imports: [BulletComponent],
  template: `
    <ta-bullet type="success" size="xs"></ta-bullet>
    <ta-bullet type="success" size="sm"></ta-bullet>
    <ta-bullet type="success" size="md"></ta-bullet>
    <ta-bullet type="success" size="lg"></ta-bullet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBulletSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-bullet-notif",
  imports: [BulletComponent],
  template: `<ta-bullet type="notif">12</ta-bullet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBulletNotifExample {}

export const DEMO: ComponentDemo = {
  id: "ta-bullet",
  group: "Affichage",
  summary: "Puce colorée, ronde par défaut, avec un contenu projeté pour le type `notif`.",
  examples: [
    { title: "Types", description: "Les huit valeurs de `type` (`ColorType | \"notif\"`), chacune stylée dans `bullet.component.scss`.", component: TaBulletTypesExample },
    { title: "Tailles", description: "`size` (`xs`/`sm`/`md`/`lg` ici) fixe le diamètre.", component: TaBulletSizesExample },
    {
      title: "Avec contenu",
      description: "`type=\"notif\"` fixe une taille de 16px indépendante de `size` et est pensé pour projeter un court contenu, ici un compteur.",
      component: TaBulletNotifExample,
    },
  ],
};
