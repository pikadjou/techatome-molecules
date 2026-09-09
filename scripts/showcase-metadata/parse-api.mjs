import ts from "typescript";

const ANGULAR_DECORATORS = {
  Component: "component",
  Directive: "directive",
  Pipe: "pipe",
  Injectable: "service",
};

/** Méthodes de cycle de vie Angular : bruit dans un tableau d'API. */
const LIFECYCLE = new Set([
  "ngOnInit", "ngOnChanges", "ngOnDestroy", "ngDoCheck",
  "ngAfterContentInit", "ngAfterContentChecked",
  "ngAfterViewInit", "ngAfterViewChecked", "ngViewDidLoad",
]);

/** Décorateur Angular porté par une classe, avec son objet de métadonnées. */
export function getAngularDecorator(node) {
  for (const decorator of ts.getDecorators?.(node) ?? []) {
    if (!ts.isCallExpression(decorator.expression)) continue;
    const name = decorator.expression.expression.getText();
    if (!(name in ANGULAR_DECORATORS)) continue;

    const arg = decorator.expression.arguments[0];
    return {
      kind: ANGULAR_DECORATORS[name],
      meta: arg && ts.isObjectLiteralExpression(arg) ? arg : null,
    };
  }
  return null;
}

/** Valeur d'une propriété chaîne d'un objet littéral, quels que soient les guillemets. */
export function literalProp(objectLiteral, key) {
  if (!objectLiteral) return undefined;

  for (const prop of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    if (prop.name.getText().replace(/['"]/g, "") !== key) continue;

    const init = prop.initializer;
    if (ts.isStringLiteral(init) || ts.isNoSubstitutionTemplateLiteral(init)) {
      return init.text;
    }
  }
  return undefined;
}

function readJsDoc(node) {
  const comments = ts
    .getJSDocCommentsAndTags(node)
    .filter(ts.isJSDoc)
    .map((doc) =>
      typeof doc.comment === "string" ? doc.comment : ts.getTextOfJSDocComment(doc.comment) ?? ""
    )
    .filter(Boolean);

  const joined = comments.join(" ").replace(/\s+/g, " ").trim();
  return joined || undefined;
}

function hasDecorator(node, name) {
  return (ts.getDecorators?.(node) ?? []).some(
    (d) => ts.isCallExpression(d.expression) && d.expression.expression.getText() === name
  );
}

function isIdentifierNamed(node, name) {
  return ts.isIdentifier(node) && node.text === name;
}

/** Reconnaît une propriété d'API. Retourne null pour tout le reste. */
function readMember(member, sourceFile) {
  if (!ts.isPropertyDeclaration(member) || !member.initializer) return null;
  if (!ts.isIdentifier(member.name)) return null;

  const propertyName = member.name.text;
  if (propertyName.startsWith("_")) return null;

  const init = member.initializer;

  // @Output() x = new EventEmitter<T>()
  if (ts.isNewExpression(init) && init.expression.getText() === "EventEmitter") {
    if (!hasDecorator(member, "Output")) return null;
    return {
      name: propertyName,
      propertyName,
      kind: "output",
      type: init.typeArguments?.[0]?.getText(sourceFile) ?? "void",
      required: false,
      doc: readJsDoc(member),
    };
  }

  if (!ts.isCallExpression(init)) return null;

  const callee = init.expression;
  const type = init.typeArguments?.[0]?.getText(sourceFile) ?? "void";
  const isRequiredInput =
    ts.isPropertyAccessExpression(callee) &&
    isIdentifierNamed(callee.expression, "input") &&
    callee.name.text === "required";

  let kind;
  let required = false;
  let defaultNode;
  let optionsNode;

  if (isIdentifierNamed(callee, "input")) {
    kind = "input";
    defaultNode = init.arguments[0];
    optionsNode = init.arguments[1];
  } else if (isRequiredInput) {
    kind = "input";
    required = true;
    optionsNode = init.arguments[0]; // un input requis n'a pas de valeur par défaut
  } else if (isIdentifierNamed(callee, "output")) {
    // `output()` sans argument de type est un OutputEmitterRef<void>.
    kind = "output";
  } else {
    return null;
  }

  const alias =
    optionsNode && ts.isObjectLiteralExpression(optionsNode)
      ? literalProp(optionsNode, "alias")
      : undefined;

  return {
    name: alias ?? propertyName,
    propertyName,
    kind,
    type,
    default: defaultNode ? defaultNode.getText(sourceFile) : undefined,
    required,
    doc: readJsDoc(member),
  };
}

function readMethod(member, sourceFile) {
  if (!ts.isMethodDeclaration(member) || !ts.isIdentifier(member.name)) return null;

  const name = member.name.text;
  if (name.startsWith("_") || LIFECYCLE.has(name)) return null;

  const isPrivate = (member.modifiers ?? []).some(
    (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword
  );
  if (isPrivate) return null;

  const params = member.parameters.map((p) => p.getText(sourceFile)).join(", ");
  const returnType = member.type ? member.type.getText(sourceFile) : "void";

  return {
    name,
    propertyName: name,
    kind: "method",
    type: `(${params}) => ${returnType}`,
    required: false,
    doc: readJsDoc(member),
  };
}

/**
 * Accesseur `get` ou `set` public. Le dépôt en compte 34 composants ; les ignorer
 * amputerait silencieusement leur tableau d'API.
 */
function readAccessor(member, sourceFile) {
  if (!ts.isGetAccessorDeclaration(member) && !ts.isSetAccessorDeclaration(member)) return null;
  if (!ts.isIdentifier(member.name)) return null;

  const name = member.name.text;
  if (name.startsWith("_")) return null;

  const isHidden = (member.modifiers ?? []).some(
    (m) => m.kind === ts.SyntaxKind.PrivateKeyword || m.kind === ts.SyntaxKind.ProtectedKeyword
  );
  if (isHidden) return null;

  // Le type vient de l'annotation de retour du getter, ou du paramètre du setter.
  let type = "unknown";
  if (ts.isGetAccessorDeclaration(member) && member.type) {
    type = member.type.getText(sourceFile);
  } else if (ts.isSetAccessorDeclaration(member) && member.parameters[0]?.type) {
    type = member.parameters[0].type.getText(sourceFile);
  }

  return {
    name,
    propertyName: name,
    kind: "property",
    type,
    required: false,
    doc: readJsDoc(member),
  };
}

function extendsName(node) {
  for (const clause of node.heritageClauses ?? []) {
    if (clause.token !== ts.SyntaxKind.ExtendsKeyword) continue;
    const expression = clause.types[0]?.expression;
    if (expression && ts.isIdentifier(expression)) return expression.text;
  }
  return undefined;
}

/** Classes décorées Angular d'un fichier source, avec leurs membres d'API. */
export function parseSource(filePath, text, relativePath) {
  const sourceFile = ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true);
  const classes = [];

  const visit = (node) => {
    if (ts.isClassDeclaration(node) && node.name) {
      const decorator = getAngularDecorator(node);
      if (decorator) {
        const members = [];
        // Une paire `get`/`set` de même nom ne doit produire qu'une entrée ;
        // le dépôt en compte deux (`isFilterOpen`, `selection`).
        const seen = new Set();
        for (const member of node.members) {
          const parsed =
            readMember(member, sourceFile) ??
            readMethod(member, sourceFile) ??
            readAccessor(member, sourceFile);
          if (!parsed || seen.has(parsed.name)) {
            continue;
          }
          seen.add(parsed.name);
          members.push(parsed);
        }

        classes.push({
          className: node.name.text,
          kind: decorator.kind,
          selector: literalProp(decorator.meta, "selector"),
          doc: readJsDoc(node),
          extendsName: extendsName(node),
          file: relativePath,
          members,
          // Nombre de déclarations écrites dans la classe, constructeur exclu.
          // Une classe qui déclare quelque chose sans qu'aucun membre n'en
          // ressorte est un angle mort du parseur ; une classe au corps vide
          // — les conteneurs de projection pure — n'en est pas un.
          declarationCount: node.members.filter((m) => !ts.isConstructorDeclaration(m)).length,
        });
      }
    }
    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);
  return classes;
}
