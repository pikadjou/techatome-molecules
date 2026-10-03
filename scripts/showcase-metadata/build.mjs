import fs from "node:fs";
import path from "node:path";

import { resolveInheritance } from "./inherit.mjs";
import { collectAllSources, collectPublicFiles, listPackages, REPO_ROOT } from "./packages.mjs";
import { parseDemoFile } from "./parse-demos.mjs";
import { parseSource } from "./parse-api.mjs";

const DEMOS_DIR = path.join(REPO_ROOT, "src", "app", "showcase", "demos");

/**
 * Vocabulaire des groupes autorisés par paquet, affiché dans l'index de
 * paquet de la vitrine — recette.md, section « L'enregistrement ». Un paquet
 * absent d'ici, ou une valeur de `group` hors de sa liste, fait lever
 * `buildRegistry` : c'est ce qui rend impossible la dérive « Boutons » /
 * « Bouton » / « Buttons » que rien n'empêchait quand `group` vivait, non
 * contrôlé, dans registry.ts.
 *
 * Un nouveau paquet s'ajoute ici et dans le même tableau de recette.md, dans
 * le même mouvement — pour que la tâche suivante le trouve.
 */
export const ALLOWED_GROUPS = {
  "@ta/ui": [
    "Bases",
    "Boutons",
    "Affichage",
    "Cartes",
    "Listes",
    "Mise en page",
    "Conteneurs",
    "Overlays",
    "Progression",
    "Arbre",
  ],
  "@ta/form-input": ["Saisie", "Sélection", "Date et heure", "Média", "Avancé"],
  "@ta/form-basic": ["Formulaire"],
  "@ta/core": ["Filtres", "Recherche", "Divers"],
  "@ta/menu": ["Menu", "Navigation"],
  "@ta/files-basic": ["Fichiers", "Visionneuses"],
  "@ta/files-extended": ["Fichiers", "Visionneuses"],
  "@ta/cms": ["CMS"],
  "@ta/wysiswyg": ["Éditeur riche"],
  "@ta/notification": ["Notifications"],
  "@ta/icons": ["Icônes"],
  "@ta/charts": ["Graphiques"],
  "@ta/user": ["Authentification"],
  "@ta/features": ["Grilles"],
};

/** Chemin relatif au dépôt, séparateurs normalisés pour les fichiers générés. */
export function relative(file) {
  return path.relative(REPO_ROOT, file).split(path.sep).join("/");
}

/** Analyse toutes les sources des paquets, puis ne retient que l'API publique. */
export function buildApi() {
  const all = [];

  for (const pkg of listPackages()) {
    const publicFiles = new Set(collectPublicFiles(pkg.publicApi));

    for (const file of collectAllSources(pkg.dir)) {
      for (const cls of parseSource(file, fs.readFileSync(file, "utf8"), relative(file))) {
        // Le paquet et la visibilité s'attachent à la classe elle-même. Les
        // indexer par nom de classe, comme le faisait une version antérieure,
        // confond les sept paires d'homonymes du dépôt — LabelComponent,
        // RatingComponent, TextComponent, BulletComponent, CultureComponent,
        // LinkComponent, UploadComponent — et attribue à sept composants un
        // paquet faux, donc une ligne d'import fausse sur leur page.
        all.push({ ...cls, pkg: pkg.name, isPublic: publicFiles.has(file) });
      }
    }
  }

  const resolved = resolveInheritance(all);
  const entries = [];
  const unresolvedMembers = [];
  const idOwners = new Map();

  for (const cls of resolved) {
    if (!cls.isPublic) continue;
    if (cls.kind === "component" && !cls.selector?.startsWith("ta-")) continue;

    const id = cls.selector ?? cls.className;

    // Deux entrées de même identifiant s'écraseraient à l'émission : on le dit.
    const previous = idOwners.get(id);
    if (previous) {
      unresolvedMembers.push(`${id} : identifiant partagé par ${previous} et ${cls.file}`);
    }
    idOwners.set(id, cls.file);

    entries.push({
      id,
      pkg: cls.pkg,
      className: cls.className,
      kind: cls.kind,
      file: cls.file,
      doc: cls.doc,
      members: cls.members,
    });

    // Une classe vide n'est une anomalie que si elle a déclaré quelque chose.
    // `declarationCount` répond classe par classe, là où un test sur le texte du
    // fichier contaminerait une classe vide co-localisée avec une classe riche.
    // Sur le dépôt actuel : 25 conteneurs de projection pure ne sont pas
    // signalés, et un seul composant l'est — à juste titre, il déclare une
    // propriété publique sans initialiseur que le parseur ne sait pas lire.
    if (cls.kind === "component" && cls.members.length === 0 && cls.declarationCount > 0) {
      unresolvedMembers.push(
        `${cls.className} (déclare ${cls.declarationCount} membre(s) qu'aucune règle ne reconnaît)`
      );
    }

    // Un membre de type "unknown" vient d'un accesseur sans annotation de retour :
    // le parseur lit l'AST sans vérificateur de types, il ne peut donc pas inférer.
    // On le nomme plutôt que de laisser un "unknown" muet dans un tableau d'API.
    for (const member of cls.members) {
      if (member.type === "unknown" && !member.inheritedFrom) {
        unresolvedMembers.push(`${cls.className}.${member.name} (type non annoté)`);
      }
    }
  }

  return { entries, unresolvedMembers };
}

/**
 * Parcourt les fichiers *.demo.ts et agrège templates, index et lignes de
 * registre. `registryRows` porte tout ce qu'un fichier de démo sait de
 * lui-même (identifiant, répertoire, groupe) ; `buildRegistry` y ajoute le
 * seul champ qu'il ne peut pas connaître, le paquet, lu depuis `TA_API`.
 */
export function buildDemos() {
  const sources = {};
  const index = {};
  const registryRows = [];

  const stack = [DEMOS_DIR];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;

    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (!entry.name.endsWith(".demo.ts")) continue;

      const parsed = parseDemoFile(full, fs.readFileSync(full, "utf8"));

      // `DEMO_SOURCES` est une table plate indexée par nom de classe : deux
      // exemples homonymes écraseraient leur source mutuelle, et une page
      // afficherait le code d'un autre composant. La convention de nommage
      // `Ta<Composant><Variante>Example` l'évite, rien ne l'impose.
      for (const className of Object.keys(parsed.templates)) {
        if (className in sources) {
          throw new Error(
            `${full} : la classe d'exemple ${className} porte un nom déjà utilisé par une autre démo.`
          );
        }
      }
      if (parsed.id in index) {
        throw new Error(`${full} : l'identifiant de démo ${parsed.id} est déjà pris.`);
      }

      Object.assign(sources, parsed.templates);
      index[parsed.id] = {
        summary: parsed.summary,
        notRenderable: parsed.notRenderable,
        examples: parsed.examples,
      };

      // `short` est le premier segment du chemin sous demos/ — le répertoire
      // qui contient effectivement le fichier, jamais une supposition sur le
      // paquet (c'est `buildRegistry` qui l'obtient de `TA_API`).
      const short = path.relative(DEMOS_DIR, current).split(path.sep)[0];
      registryRows.push({ id: parsed.id, short, group: parsed.group, file: relative(full) });
    }
  }

  return { sources, index, registryRows };
}

/**
 * Assemble le registre à partir des démos trouvées sur le disque et de l'API
 * publique : `pkg` vient de `TA_API`, jamais du répertoire — un répertoire et
 * un paquet ne coïncident pas toujours (le correctif I6 en a fait la
 * démonstration), et dupliquer la donnée aurait recréé la même occasion de
 * divergence que l'ancien registre écrit à la main.
 *
 * Trié par paquet puis par identifiant, comme l'imposait `registry.ts`.
 */
export function buildRegistry(apiEntries, registryRows) {
  const apiById = new Map(apiEntries.map((e) => [e.id, e]));

  const registry = registryRows.map((row) => {
    const api = apiById.get(row.id);
    if (!api) {
      throw new Error(
        `${row.file} : démo enregistrée sous l'identifiant "${row.id}", introuvable dans ` +
          "l'API publique (composant renommé, retiré, ou non exporté depuis public-api.ts)."
      );
    }

    if (!row.group) {
      throw new Error(`${row.file} : DEMO.group est obligatoire.`);
    }

    const allowed = ALLOWED_GROUPS[api.pkg];
    if (!allowed) {
      throw new Error(
        `${row.file} : aucun groupe autorisé n'est déclaré pour ${api.pkg} dans ALLOWED_GROUPS ` +
          "(scripts/showcase-metadata/build.mjs). Ajoute-le là et dans le tableau équivalent de " +
          "recette.md, section « L'enregistrement »."
      );
    }
    if (!allowed.includes(row.group)) {
      throw new Error(
        `${row.file} : DEMO.group "${row.group}" n'est pas dans le vocabulaire autorisé pour ` +
          `${api.pkg} (${allowed.join(", ")}) — recette.md, section « L'enregistrement ».`
      );
    }

    return { id: row.id, pkg: api.pkg, short: row.short, group: row.group };
  });

  registry.sort((a, b) => a.pkg.localeCompare(b.pkg) || a.id.localeCompare(b.id));
  return registry;
}
