import assert from "node:assert/strict";
import { test } from "node:test";

import { parseSource } from "./parse-api.mjs";

const BUTTON = `
import { Component, input, output } from "@angular/core";

/** Bouton d'action. */
@Component({ selector: "ta-button", standalone: true, template: "" })
export class ButtonComponent {
  state = input<TaState>("classic");
  type = input<"primary" | "secondary" | "tertiary" | "danger">("primary");
  size = input<"small" | "medium" | "large">("medium");
  icon = input<string | null>(null);
  action = output<void>();
}
`;

const CARD = `
import { Component, input, output } from '@angular/core';

@Component({ selector: 'ta-card', standalone: true, template: '' })
export class CardComponent {
  directionCard = input<'vertical' | 'horizontal' | null>(null);
  click = output<any>();
}
`;

const ABSTRACT = `
import { Directive, input } from "@angular/core";

@Directive()
export class TaAbstractInputComponent<C, T> {
  inputModel = input.required<C>({ alias: 'input' });
  standaloneMode = input<boolean>(false, { alias: 'standalone' });
}
`;

const LEGACY_OUTPUT = `
import { Component, EventEmitter, Output } from "@angular/core";

@Component({ selector: "ta-legacy", standalone: true, template: "" })
export class LegacyComponent {
  @Output() closeEvent = new EventEmitter<string>();
}
`;

test("lit le sélecteur, la doc et les inputs à guillemets doubles", () => {
  const [cls] = parseSource("button.component.ts", BUTTON, "projects/ui/button.component.ts");

  assert.equal(cls.className, "ButtonComponent");
  assert.equal(cls.kind, "component");
  assert.equal(cls.selector, "ta-button");
  assert.equal(cls.doc, "Bouton d'action.");
  assert.equal(cls.file, "projects/ui/button.component.ts");

  const type = cls.members.find((m) => m.name === "type");
  assert.equal(type.kind, "input");
  assert.equal(type.type, `"primary" | "secondary" | "tertiary" | "danger"`);
  assert.equal(type.default, `"primary"`);
  assert.equal(type.required, false);

  const action = cls.members.find((m) => m.name === "action");
  assert.equal(action.kind, "output");
  assert.equal(action.type, "void");
});

test("lit indifféremment les guillemets simples", () => {
  const [cls] = parseSource("card.component.ts", CARD, "projects/ui/card.component.ts");

  assert.equal(cls.selector, "ta-card");
  assert.equal(cls.members.find((m) => m.name === "directionCard").type, `'vertical' | 'horizontal' | null`);
});

test("résout les alias et distingue les inputs requis", () => {
  const [cls] = parseSource("abstract.ts", ABSTRACT, "projects/form/abstract.ts");

  const model = cls.members.find((m) => m.name === "input");
  assert.equal(model.propertyName, "inputModel");
  assert.equal(model.required, true);
  assert.equal(model.default, undefined);

  const standalone = cls.members.find((m) => m.name === "standalone");
  assert.equal(standalone.propertyName, "standaloneMode");
  assert.equal(standalone.required, false);
  assert.equal(standalone.default, "false");
});

test("reconnaît les @Output() hérités du style décorateur", () => {
  const [cls] = parseSource("legacy.component.ts", LEGACY_OUTPUT, "projects/ui/legacy.component.ts");

  const out = cls.members.find((m) => m.name === "closeEvent");
  assert.equal(out.kind, "output");
  assert.equal(out.type, "string");
});

test("compte les déclarations de la classe, constructeur exclu", () => {
  const source = `
    import { Component } from "@angular/core";

    @Component({ selector: "ta-vide", standalone: true, template: "" })
    export class VideComponent {}

    @Component({ selector: "ta-non-classe", standalone: true, template: "" })
    export class NonClasseComponent {
      public typeItem!: { item: string };
      constructor() {}
    }
  `;

  const [vide, nonClasse] = parseSource("a.ts", source, "projects/ui/a.ts");

  // Un conteneur de projection pure n'a rien déclaré : ce n'est pas un angle mort.
  assert.equal(vide.declarationCount, 0);

  // Une propriété publique sans initialiseur échappe au parseur : elle doit être
  // comptée pour que la couverture la signale au lieu de la taire.
  assert.equal(nonClasse.declarationCount, 1);
  assert.equal(nonClasse.members.length, 0);
});

test("expose les accesseurs publics et masque les privés", () => {
  const source = `
    import { Component } from "@angular/core";

    @Component({ selector: "ta-accessors", standalone: true, template: "" })
    export class AccessorsComponent {
      /** Étoiles à peindre. */
      get stars(): number[] { return []; }
      private get hidden(): string { return ""; }
      get selection(): string { return ""; }
      set selection(value: string) {}
    }
  `;

  const [cls] = parseSource("a.ts", source, "projects/ui/a.ts");

  const stars = cls.members.find((m) => m.name === "stars");
  assert.equal(stars.kind, "property");
  assert.equal(stars.type, "number[]");
  assert.equal(stars.doc, "Étoiles à peindre.");

  assert.equal(cls.members.find((m) => m.name === "hidden"), undefined);

  // Une paire get/set ne produit qu'une entrée.
  assert.equal(cls.members.filter((m) => m.name === "selection").length, 1);
});

test("mémorise la classe de base pour la résolution d'héritage", () => {
  const source = `
    import { Component } from "@angular/core";
    @Component({ selector: "ta-input-textbox", standalone: true, template: "" })
    export class TextBoxComponent extends TaAbstractInputComponent<InputTextBox, string> {}
  `;

  const [cls] = parseSource("t.ts", source, "projects/form/t.ts");

  assert.equal(cls.extendsName, "TaAbstractInputComponent");
});
