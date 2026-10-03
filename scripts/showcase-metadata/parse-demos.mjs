import path from "node:path";

import ts from "typescript";

import { getAngularDecorator, literalProp } from "./parse-api.mjs";

/** Segment d'URL stable, sans accent ni ponctuation. */
export function slugify(title) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Retire l'indentation commune d'un template littéral. */
function dedent(text) {
  const lines = text.replace(/\t/g, "  ").split("\n");
  while (lines.length > 0 && lines[0].trim() === "") lines.shift();
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") lines.pop();

  const indents = lines.filter((l) => l.trim() !== "").map((l) => l.match(/^ */)[0].length);
  const common = indents.length > 0 ? Math.min(...indents) : 0;

  return lines.map((l) => l.slice(common)).join("\n");
}

function booleanProp(objectLiteral, key) {
  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;
    return prop.initializer.kind === ts.SyntaxKind.TrueKeyword;
  }
  return false;
}

function identifierProp(objectLiteral, key) {
  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;
    return prop.initializer.getText();
  }
  return undefined;
}

function readExamples(demoObject) {
  const examples = [];

  for (const prop of demoObject.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== "examples") continue;
    if (!ts.isArrayLiteralExpression(prop.initializer)) continue;

    for (const element of prop.initializer.elements) {
      if (!ts.isObjectLiteralExpression(element)) continue;

      const title = literalProp(element, "title");
      const className = identifierProp(element, "component");
      if (!title || !className) continue;

      examples.push({
        title,
        slug: slugify(title),
        className,
        skipHarness: booleanProp(element, "skipHarness"),
      });
    }
  }
  return examples;
}

/**
 * Lit un fichier de démo : templates des classes d'exemple d'un côté, contenu de
 * la constante `DEMO` de l'autre. Le nom du fichier fait foi pour l'identifiant.
 */
export function parseDemoFile(filePath, text) {
  const sourceFile = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true);
  const templates = {};
  let demoObject = null;

  const visit = (node) => {
    if (ts.isClassDeclaration(node) && node.name) {
      const decorator = getAngularDecorator(node);
      if (decorator?.kind === "component") {
        // Tout composant d'un fichier de démo est un exemple : son template doit
        // être un littéral extractible. Un template interpolé ou un templateUrl
        // ferait diverger l'extrait affiché du code réellement exécuté — le seul
        // défaut que cette vitrine ne peut pas se permettre. On échoue fort.
        const template = literalProp(decorator.meta, "template");
        if (template === undefined) {
          throw new Error(
            `${filePath} : le composant d'exemple ${node.name.text} n'expose pas de ` +
              "`template` littéral. Un template interpolé (${…}) ou un `templateUrl` " +
              "rendrait l'extrait de code différent du code exécuté."
          );
        }
        templates[node.name.text] = {
          template: dedent(template),
          // Le corps de la classe fait partie de l'exemple : c'est lui qui porte
          // le modèle, les données ou le gestionnaire d'événement sans lesquels le
          // template ne veut rien dire. L'omettre ferait mentir la page.
          members: dedent(node.members.map((m) => m.getText(sourceFile)).join("\n\n")),
        };
      }
    }

    if (ts.isVariableStatement(node)) {
      for (const declaration of node.declarationList.declarations) {
        if (declaration.name.getText() !== "DEMO") continue;
        if (declaration.initializer && ts.isObjectLiteralExpression(declaration.initializer)) {
          demoObject = declaration.initializer;
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);

  if (!demoObject) {
    throw new Error(`${filePath} : aucune constante DEMO exportée`);
  }

  const expectedId = path.basename(filePath).replace(/\.demo\.ts$/, "");
  const id = literalProp(demoObject, "id");
  if (id !== expectedId) {
    throw new Error(`${filePath} : DEMO.id vaut "${id}" alors que le fichier impose "${expectedId}"`);
  }

  const notRenderable = demoObject.properties.some(
    (p) => ts.isPropertyAssignment(p) && p.name.getText().replace(/['"]/g, "") === "notRenderable"
  );

  // Même exigence que pour les templates : un résumé construit par concaténation
  // deviendrait silencieusement vide dans l'index et dans la recherche.
  const summary = literalProp(demoObject, "summary");
  if (summary === undefined) {
    throw new Error(`${filePath} : DEMO.summary doit être une chaîne littérale.`);
  }

  // `group` alimente le registre généré. Sa présence et son appartenance au
  // vocabulaire autorisé sont vérifiées par `buildRegistry` (build.mjs), qui
  // seul connaît le paquet du composant — ce parseur reste agnostique du
  // reste du catalogue.
  const group = literalProp(demoObject, "group");

  // Deux exemples de même identifiant se disputeraient leur extrait de code et
  // leur cas de test E2E, tous deux dérivés du titre. On refuse plutôt que de
  // laisser l'un écraser l'autre en silence.
  const examples = readExamples(demoObject);
  const slugs = new Set();
  for (const example of examples) {
    if (slugs.has(example.slug)) {
      throw new Error(
        `${filePath} : deux exemples produisent l'identifiant "${example.slug}". ` +
          "Les titres d'une même démo doivent rester distincts."
      );
    }
    slugs.add(example.slug);
  }

  return {
    id,
    group,
    summary,
    templates,
    examples,
    notRenderable,
  };
}
