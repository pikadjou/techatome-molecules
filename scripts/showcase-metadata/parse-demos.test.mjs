import assert from "node:assert/strict";
import { test } from "node:test";

import { parseDemoFile, slugify } from "./parse-demos.mjs";

const DEMO = `
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-button-types",
  imports: [ButtonComponent],
  template: \`
    <ta-button type="primary">Primary</ta-button>
    <ta-button type="danger">Danger</ta-button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonTypesExample {
  count = 2;
}

export const DEMO: ComponentDemo = {
  id: "ta-button",
  summary: "Bouton d'action.",
  examples: [
    { title: "Types", component: TaButtonTypesExample },
    { title: "États avancés", component: TaButtonStatesExample, skipHarness: true },
  ],
};
`;

test("slugify produit un segment d'URL stable", () => {
  assert.equal(slugify("États avancés"), "etats-avances");
  assert.equal(slugify("Types × Tailles"), "types-tailles");
});

test("extrait l'identifiant et le résumé", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.equal(parsed.id, "ta-button");
  assert.equal(parsed.summary, "Bouton d'action.");
  assert.equal(parsed.notRenderable, false);
});

test("désindente le template et le range sous le nom de classe", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.equal(
    parsed.templates.TaButtonTypesExample.template,
    '<ta-button type="primary">Primary</ta-button>\n<ta-button type="danger">Danger</ta-button>'
  );
});

test("range aussi le corps de la classe, sans lequel le template ne veut rien dire", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.equal(parsed.templates.TaButtonTypesExample.members, "count = 2;");
});

test("liste les exemples avec leur slug et leur drapeau harness", () => {
  const parsed = parseDemoFile("ta-button.demo.ts", DEMO);

  assert.deepEqual(parsed.examples, [
    { title: "Types", slug: "types", className: "TaButtonTypesExample", skipHarness: false },
    { title: "États avancés", slug: "etats-avances", className: "TaButtonStatesExample", skipHarness: true },
  ]);
});

test("lit les clés écrites entre guillemets", () => {
  const quoted = [
    "export const DEMO = {",
    '  "id": "ta-x",',
    '  "summary": "Résumé.",',
    '  "examples": [{ "title": "Cas", "component": XExample, "skipHarness": true }],',
    "};",
  ].join("\n");

  const parsed = parseDemoFile("ta-x.demo.ts", quoted);

  assert.equal(parsed.id, "ta-x");
  assert.equal(parsed.summary, "Résumé.");
  assert.deepEqual(parsed.examples, [
    { title: "Cas", slug: "cas", className: "XExample", skipHarness: true },
  ]);
});

test("refuse deux exemples dont les titres produisent le même identifiant", () => {
  const duplicated = [
    "export const DEMO = {",
    '  id: "ta-x",',
    '  summary: "r",',
    "  examples: [",
    '    { title: "États", component: A },',
    '    { title: "Etats", component: B },',
    "  ],",
    "};",
  ].join("\n");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", duplicated), /etats.*distincts/s);
});

test("refuse un template interpolé plutôt que de le perdre en silence", () => {
  const interpolated = [
    'import { Component } from "@angular/core";',
    "",
    "@Component({",
    '  selector: "app-ex-interp",',
    "  template: `<p>${this.valeur}</p>`,",
    "})",
    "export class InterpExample {}",
    "",
    'export const DEMO = { id: "ta-x", summary: "r", examples: [] };',
  ].join("\n");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", interpolated), /InterpExample.*template/s);
});

test("refuse un résumé qui n'est pas une chaîne littérale", () => {
  const concatenated = [
    "export const DEMO = {",
    '  id: "ta-x",',
    '  summary: "début " + "suite",',
    "  examples: [],",
    "};",
  ].join("\n");

  assert.throws(() => parseDemoFile("ta-x.demo.ts", concatenated), /summary.*littérale/s);
});

test("signale une démo dont l'identifiant ne suit pas le nom de fichier", () => {
  const bad = DEMO.replace('id: "ta-button"', 'id: "ta-bouton"');

  assert.throws(() => parseDemoFile("ta-button.demo.ts", bad), /ta-bouton.*ta-button/);
});
