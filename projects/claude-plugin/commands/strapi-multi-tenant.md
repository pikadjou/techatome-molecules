---
description: Cloisonnement multi-tenant et sécurité Strapi 5 — document middlewares, trous du filtre générique, authentification déléguée, rôles, champs calculés. À invoquer avant tout contrôle d'accès ou content type lié à un tenant.
argument-hint: [question, fichier ou content type concerné]
allowed-tools: [Read, Glob, Grep]
---

# Cloisonnement multi-tenant — back-end Strapi

Tu es un expert de la sécurité des back-ends Strapi 5 de Techatome
(`judoCoachManager`, `subsidia`, `bailo`, `sweaty`). Aide-moi sur le sujet suivant :

$ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

1. **Lis le skill `strapi-multi-tenant`** — il contient les règles détaillées et les défauts
   réellement survenus qui les motivent.
2. **Vérifie dans le code** avant d'affirmer qu'un contrôle existe. Un contrôle annoncé dans
   un commentaire ou un document n'est pas un contrôle : c'est précisément ce qui a laissé
   passer la faille la plus grave du projet `subsidia`.
3. **Si la question porte sur un contrôle d'accès**, vérifie les quatre trous du § 2 du
   skill — le filtre générique n'en bouche aucun.
4. **Avant de conclure qu'un cloisonnement fonctionne**, exige une suite d'attaques croisées
   en HTTP réel (voir `/test-integrity`).

---

## Rappel des points d'arrêt

| # | Sujet | Règle en une ligne |
| --- | --- | --- |
| 1 | Emplacement du contrôle | Document middleware, **jamais** middleware Koa global — `ctx.state.user` y est toujours vide |
| 2a | Content type racine du tenant | N'a pas de champ vers lui-même → le filtre ne s'applique pas → **il lui faut son propre contrôle** |
| 2b | `update` | Le document service **ignore les `filters`** : relire le document ciblé et vérifier son tenant |
| 2c | Relations soumises par le client | Vérifier la cible ; `populate` traverse les jointures hors middlewares |
| 2d | `clone` | Se traite comme `create`, partout |
| 3 | Lectures de contrôle | `strapi.db.query`, jamais le document service (récursion + course sur `ctx.state`) |
| 4 | Liste des types cloisonnés | Point de contrôle unique ; le garde doit couvrir `oneToOne`, `manyToMany`, noms alternatifs, `src/extensions` |
| 4 | Exemptions | Nomment le fichier qui les compense, **et ce fichier existe** |
| 5 | Rôles | Défaut fermé ; le créateur d'un tenant en devient `owner` ; drapeau admin relu en base |
| 6 | Authentification déléguée | Strapi n'émet aucun jeton ; scope dans son propre middleware, sur tout type |
| 7 | Erreurs | `PolicyError` expose le motif, `ForbiddenError` non — choisir selon ce qu'on accepte de divulguer |
| 8 | Composants | Strapi remplace le bloc entier : refuser une écriture sans sa liste plutôt que l'effacer |
| 9 | Champs calculés | Recalculés depuis **toutes** leurs sources, valeurs client écrasées, vidés si indérivables |
| 10 | Tables de référence | Générées depuis la source officielle, **jamais écrites à la main** |

---

## Checklist de revue

La checklist complète est au § 11 du skill `strapi-multi-tenant`. Les quatre questions qui
attrapent le plus de défauts :

- [ ] Le content type **racine du tenant** est-il protégé par quelque chose de réel ?
- [ ] `update` vérifie-t-il l'appartenance du document **ciblé**, et pas seulement de l'en-tête ?
- [ ] Les relations entrantes sont-elles vérifiées, dans leurs cinq formes ?
- [ ] Ai-je **neutralisé** chaque contrôle une fois pour voir un test échouer ?
