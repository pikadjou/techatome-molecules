import assert from "node:assert/strict";
import { test } from "node:test";

import { resolveInheritance } from "./inherit.mjs";

const member = (name, extra = {}) => ({
  name,
  propertyName: name,
  kind: "input",
  type: "string",
  required: false,
  ...extra,
});

test("ajoute les membres des ancêtres en les marquant", () => {
  const classes = [
    { className: "TextBoxComponent", extendsName: "TaAbstractInputComponent", members: [member("space")] },
    { className: "TaAbstractInputComponent", extendsName: "TaBaseComponent", members: [member("input", { required: true })] },
    { className: "TaBaseComponent", extendsName: undefined, members: [member("cssClass")] },
  ];

  const [textbox] = resolveInheritance(classes);

  assert.deepEqual(textbox.members.map((m) => m.name), ["space", "input", "cssClass"]);
  assert.equal(textbox.members[0].inheritedFrom, undefined);
  assert.equal(textbox.members[1].inheritedFrom, "TaAbstractInputComponent");
  assert.equal(textbox.members[2].inheritedFrom, "TaBaseComponent");
});

test("la classe fille l'emporte sur un membre de même nom", () => {
  const classes = [
    { className: "Child", extendsName: "Parent", members: [member("size", { type: "'lg'" })] },
    { className: "Parent", extendsName: undefined, members: [member("size", { type: "string" })] },
  ];

  const [child] = resolveInheritance(classes);

  assert.equal(child.members.length, 1);
  assert.equal(child.members[0].type, "'lg'");
  assert.equal(child.members[0].inheritedFrom, undefined);
});

test("un ancêtre absent de l'index est ignoré sans planter", () => {
  const classes = [{ className: "Orphan", extendsName: "InconnuAuBataillon", members: [member("a")] }];

  const [orphan] = resolveInheritance(classes);

  assert.deepEqual(orphan.members.map((m) => m.name), ["a"]);
});

test("un cycle d'héritage ne provoque pas de boucle infinie", () => {
  const classes = [
    { className: "A", extendsName: "B", members: [member("a")] },
    { className: "B", extendsName: "A", members: [member("b")] },
  ];

  const [a] = resolveInheritance(classes);

  assert.deepEqual(a.members.map((m) => m.name), ["a", "b"]);
});
