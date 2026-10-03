---
name: strapi-multi-tenant
description: Cloisonnement multi-tenant et sécurité sur un back-end Strapi 5 (judoCoachManager, subsidia, bailo, sweaty). Couvre les document middlewares, les trous que le filtre générique ne bouche pas (update, relations, content type racine), l'authentification déléguée (Auth0), les rôles, et les pièges vérifiés en production. Utiliser ce skill avant d'écrire ou de relire tout contrôle d'accès, tout content type lié à un tenant, ou toute règle métier côté serveur sur un projet Strapi.
---

# Cloisonnement multi-tenant — Strapi 5

> Chaque règle de ce document vient d'un défaut **réellement survenu** sur un projet Techatome,
> reproduit par une attaque et corrigé. Les scénarios sont conservés : ce sont eux qui rendent
> la règle mémorable.

---

## 0. LA RÈGLE QUI PRIME SUR TOUTES LES AUTRES

> **Un contrôle d'accès qu'on n'a pas attaqué n'est pas un contrôle d'accès.**

Sur `subsidia`, 134 tests unitaires étaient au vert pendant que **quatre voies d'accès aux
données d'autres tenants** étaient ouvertes, dont une exposait les coordonnées bancaires de
tous les clients en une requête. Chaque middleware faisait correctement son travail isolément.

Avant d'annoncer qu'un cloisonnement fonctionne : écrire une suite qui **tente les accès
croisés en HTTP réel** contre une instance réelle. Voir le skill `test-integrity`.

---

## 1. DOCUMENT MIDDLEWARE, JAMAIS MIDDLEWARE KOA GLOBAL

| ❌ Interdit | ✅ Obligatoire |
| --- | --- |
| `config/middlewares.ts` → contrôle d'accès | `strapi.documents.use(...)` dans `register()` de `src/index.ts` |

**Pourquoi.** Strapi compose `authenticate` **à l'intérieur** du handler de route
(`@strapi/core/dist/services/server/compose-endpoint.js`), donc **après** toute la chaîne des
middlewares globaux. Dans un middleware global, `ctx.state.user` vaut **toujours**
`undefined` : chaque branche qui en dépend est du code mort.

**Le défaut réel (judoCoachManager).** Le middleware existait, ses tests passaient — ils
injectaient `state.user` à la main — et il ne filtrait rien. Le cloisonnement se réduisait à
la valeur d'en-tête fournie par le client : la changer donnait accès aux données d'un autre
club, l'omettre supprimait tout filtre. Le front envoyant toujours la bonne valeur, le défaut
est resté invisible en production.

Un document middleware s'exécute pendant le handler, donc après `authenticate`, et couvre
**REST et GraphQL** puisque les deux passent par le document service.

---

## 2. LES QUATRE TROUS QUE LE FILTRE GÉNÉRIQUE NE BOUCHE PAS

Poser `filters.<tenant> = <en-tête>` sur `findMany` ne suffit pas. Quatre chemins restent
ouverts, tous vérifiés par attaque réelle sur `subsidia`.

### 2a. Le content type racine du tenant n'est protégé par rien

`organization` (ou `club`) **n'a pas de champ pointant vers lui-même** : le filtre générique
n'a rien à quoi s'appliquer. Il est donc exempté — et s'il n'a pas de contrôle de
remplacement, **il n'en a aucun**.

```
GET    /api/organizations           → toutes les ASBL de la plateforme
GET    /api/organizations/{autre}   → 200, IBAN et bilans compris
PUT    /api/organizations/{autre}   → 200, détournement des coordonnées bancaires
DELETE /api/organizations/{autre}   → 200
```

**Règle.** Le type racine a son propre middleware :

- `findMany` / `count` → filtrer sur les identifiants des tenants de l'utilisateur.
  **Liste vide → une sentinelle qui ne correspond à rien**, jamais « pas de filtre » ;
- `findOne` / `update` / `delete` → appartenance obligatoire, et rôle `owner` pour écrire ;
- `create` → ouvert (parcours d'entrée), **et doit créer le membership du créateur dans la
  foulée** (§ 5).

### 2b. `update` ignore les `filters`

Le document service retrouve l'entrée par son **seul `documentId`** : `pickSelectionParams`
ne retient que `fields`, `populate` et `status`. Ajouter `'update'` à la liste des actions
filtrées **ne corrige rien**.

```
PUT /api/projects/{projet d'un autre tenant}   → 200
```

Pire : le filtre injecte `data.organization = <mon tenant>` — le document **change de
propriétaire**. C'est un vol, pas une altération.

**Règle.** Sur `findOne`, `update` et `delete`, relire le document ciblé **hors document
service** et refuser si son tenant diffère de l'en-tête.

### 2c. Les relations soumises par le client ne sont pas vérifiées

Le filtre écrase `data.organization`, mais laisse passer `project`, `user`, et toute autre
relation.

```
POST /api/project-activities  { project: "<projet d'un autre tenant>" }   → créé
GET  /api/project-activities?populate[project][populate]=*               → le projet complet de l'autre tenant
```

Les jointures de `populate` sont résolues par le moteur de requêtes, **sans repasser par les
document middlewares**. Le cloisonnement est contourné sans jamais mentir sur l'en-tête.

**Règle.** Sur `create`, `update` et `clone`, pour chaque relation entrante vers un type
cloisonné, vérifier que la cible appartient au tenant courant. Couvrir **toutes** les formes
acceptées par Strapi : chaîne, tableau, `{ documentId }`, `{ connect }`, `{ set }`.
(`disconnect` est sans risque : retirer une relation ne donne accès à rien.)

### 2d. `clone` n'est dans aucune liste

`clone` est une méthode du dépôt, donc enveloppée par les middlewares — mais elle ne figure
spontanément dans aucune constante `ACTIONS_*`. Un document cloné n'est ni rattaché, ni
filtré, ni soumis au RBAC, ni validé.

**Règle.** `clone` se traite **partout** comme `create`.

---

## 3. LIRE L'ÉTAT DE CONTRÔLE : `strapi.db.query`, JAMAIS LE DOCUMENT SERVICE

| ❌ Interdit | ✅ Obligatoire |
| --- | --- |
| `runWithRbacBypass(strapi, () => strapi.documents(uid).findFirst(...))` | `strapi.db.query(uid).findOne(...)` |

**Deux raisons, la seconde est une faille.**

1. **Récursion.** Le type qui porte l'appartenance est lui-même cloisonné : le lire par le
   document service repasse par le contrôle, qui redemande l'appartenance.
2. **Course.** Le drapeau de contournement est posé sur `ctx.state`, **partagé par toute la
   requête HTTP**. graphql-js exécute les champs racines d'une même requête **en parallèle** :
   posé le temps d'une lecture en base, il désarme les contrôles des champs voisins.

```graphql
# Le premier champ pose le drapeau et attend sa lecture ;
# le second traverse la chaîne pendant ce temps.
query {
  sonde: organizationMembership(documentId: "inexistant") { documentId }
  cible: projects { documentId name }
}
```

`strapi.db.query` ne traverse aucun middleware : ni récursion, ni drapeau, ni fenêtre.

**Le bypass reste légitime** pour les écritures internes brèves et délibérées (membership du
créateur, acceptation d'invitation, ingestion). Jamais pour une lecture de contrôle.

---

## 4. LA LISTE DES TYPES CLOISONNÉS EST LE POINT DE CONTRÔLE UNIQUE

```ts
// src/<tenant>-scoped-types.ts
export const ORGANIZATION_SCOPED_TYPES: string[] = [ /* … */ ];
export const ORGANIZATION_UNSCOPED_TYPES: string[] = [ /* … */ ];
```

### Règles absolues pour tout nouveau content type

1. Tout type lié au tenant **doit** porter la relation (`manyToOne`, avec `inversedBy`).
2. Tout type portant cette relation **doit** figurer dans `..._SCOPED_TYPES`.
3. Le type racine **doit** porter la back-reference `oneToMany` avec `mappedBy`.
4. Un type qui porte la relation sans figurer dans la liste **fait fuiter les données**.

### Le garde automatique doit couvrir les quatre formes

Un garde qui n'exige que `relation === 'manyToOne'` et l'attribut littéralement nommé
`organization` **laisse passer trois fuites sur quatre** :

| Forme | Détectée par un garde naïf ? |
| --- | --- |
| `manyToOne` nommée `organization` | oui |
| `oneToOne` | **non** |
| `manyToMany` | **non** |
| `manyToOne` nommée `asbl` / `club` | **non** |
| type sous `src/extensions/*/content-types/**` | **non** (balayage limité à `src/api`) |

Le garde doit détecter **toute** relation dont `target` est le type racine, quel que soit le
type de relation et le nom de l'attribut — et **échouer si l'attribut n'est pas nommé comme
le filtre l'attend**, puisque ce nom est codé en dur dans le filtrage.

Il doit aussi vérifier qu'**aucun type `api::` n'échappe aux deux listes** : un type ni
cloisonné ni exempté passe sous tous les radars.

### Toute exemption nomme le fichier qui la compense

> **Une exemption justifiée par un contrôle inexistant est pire qu'une exemption non
> justifiée : elle referme la question.**

Sur `subsidia`, le commentaire disait « la liste est restreinte par un middleware dédié ». Ce
middleware n'a jamais été écrit. Le commentaire a été relu plusieurs fois sans que personne
n'aille vérifier.

**Règle.** Toute entrée dans `..._UNSCOPED_TYPES` nomme le fichier qui la compense, et ce
fichier doit exister. À tester.

---

## 5. RÔLES ET APPARTENANCE

| Rôle | Droits |
| --- | --- |
| `viewer` | Lecture seule |
| `editor` | Lecture + écriture des données métier |
| `owner` | Tout `editor`, plus les membres, les invitations, et la modification du tenant lui-même |

- **Défaut fermé** : un rôle non résolu n'accorde aucune écriture.
- **Le créateur d'un tenant en devient `owner`**, dans la foulée de la création. Sinon le
  tenant naît orphelin : son créateur n'est membre de rien, le cloisonnement lui refuse tout,
  et personne ne peut créer le premier membership — il faudrait déjà être `owner`.
- **Garde anti-lockout** : un tenant conserve toujours au moins un `owner`.
- Le drapeau d'administrateur global est **relu en base à chaque requête**, jamais lu depuis
  le jeton : il doit pouvoir être révoqué sans attendre l'expiration.

---

## 6. AUTHENTIFICATION DÉLÉGUÉE (Auth0)

Quand l'autorité d'authentification est externe, Strapi **n'émet aucun jeton**.

| Point | Règle |
| --- | --- |
| Validation | Signature RS256 via JWKS, `issuer`, `audience`, `exp`/`nbf`, tolérance d'horloge |
| Algorithmes | Liste blanche `['RS256']` — `none` et HS256 refusés explicitement |
| Point d'extension | Remplacer `jwt.verify` du plugin `users-permissions` : tout le pipeline natif (rôle, permissions, `ability`, sanitisation) continue de fonctionner |
| `jwt.issue` | **Désactivé** — sinon seconde voie de connexion non contrôlée |
| Routes `auth.*` | Retirées au démarrage |
| Rôle `Public` | **Aucune permission**, vidé à chaque démarrage |
| Champs sensibles | `auth0Id`, drapeau admin : `"private": true` |

**Le contrôle de scope ne doit pas vivre dans le cloisonnement.** Placé après le test « ce
type est-il cloisonné ? », il ne s'applique pas aux types qui ne le sont pas — dont le type
racine. Il lui faut son propre middleware, en amont, sans condition sur le type.

**Il ne doit pas non plus vivre dans la validation du jeton** : la stratégie
`users-permissions` enveloppe `authenticate` dans un `try/catch` qui transforme toute erreur
en `401` sans détail. Un scope manquant doit produire un `403` distinct.

---

## 7. `PolicyError` CONTRE `ForbiddenError` — CHOISIR CE QU'ON DIVULGUE

Strapi réduit toute `ForbiddenError` levée dans un handler à un **403 générique**
(« Forbidden », sans détail) et n'expose le message que pour les `PolicyError`
(`compose-endpoint.js`, `createAuthorizeMiddleware`).

| Situation | Classe | Raison |
| --- | --- | --- |
| Front qui a besoin d'un code (`profile_not_completed`) | `PolicyError` | Sans quoi le front ne reçoit rien d'exploitable |
| En-tête de tenant absent | `PolicyError` | Défaut d'appel client, ne renseigne pas un tiers |
| Rôle insuffisant | `PolicyError` | Concerne un membre légitime |
| **Pas membre du tenant** | **`ForbiddenError`** | Un motif détaillé confirmerait l'existence d'un tenant dont l'identifiant a été deviné |

---

## 8. COMPOSANTS STRAPI — REMPLACEMENT INTÉGRAL

Strapi **remplace un composant dans son ensemble**. Un bloc transmis sans l'une de ses listes
l'efface silencieusement.

```
PUT { fundingHistory: { cumulativeAidAmount: 25000 } }   // subsidies absent
→ les subventions enregistrées disparaissent, sans erreur ni trace
```

Et un composant transmis **avec** son `id` est refusé par la content-api
(`400 "Invalid key id"`), ce qui piège l'aller-retour de formulaire le plus naturel.

**Règle.** Sur une mise à jour d'un bloc porteur d'une liste : **refuser** l'écriture si la
liste est absente, plutôt que de l'effacer. Vider reste possible, explicitement, avec `[]`.

---

## 9. CHAMPS CALCULÉS

> **Une donnée calculée qui accepte une valeur entrante n'est plus une donnée calculée.**

- Recalculer à chaque écriture et **écraser** ce que le client a soumis.
- Recalculer dès que **l'une quelconque** de leurs sources est touchée — pas seulement la
  source principale. Un BIC dérivé de l'IBAN doit être recalculé quand le BIC seul est
  transmis, sinon le champ redevient librement saisissable.
- **Vider** la valeur quand la dérivation devient impossible, plutôt que de laisser en place
  une valeur devenue incohérente que l'utilisateur ne peut pas corriger.

---

## 10. DONNÉES DE RÉFÉRENCE : JAMAIS ÉCRITES À LA MAIN

> **Une table de correspondance déduite « par plages » est fausse. Toujours.**

Sur `subsidia`, une table BIC construite à la main (« 500-559 → ING », « 700-799 → KBC »)
donnait un code **faux pour 179 des 589 codes qu'elle couvrait** — Crelan, Triodos, une
grande partie de Belfius. Elle était commentée « conservatrice ». Le code d'exemple utilisé
dans les tests n'était attribué à aucune banque : les tests verts figeaient un mapping
inventé.

**Règle.** Toute table de correspondance métier (banques, codes postaux, TVA, NACE…) est
**générée depuis la source officielle**, committée en donnée (`*.json`), et son fichier
indique la source, la date de version et la procédure de régénération.

Sur des coordonnées bancaires, **une valeur plausible mais fausse est pire qu'aucune valeur** :
le champ étant calculé, l'utilisateur ne peut ni la voir ni la corriger.

---

## 11. CHECKLIST DE REVUE

**Cloisonnement**

- [ ] Le contrôle est un document middleware, pas un middleware Koa global
- [ ] Le type racine du tenant a son propre contrôle (liste, document, rôle)
- [ ] `findOne` / `update` / `delete` vérifient l'appartenance du document **ciblé**
- [ ] Les relations entrantes sont vérifiées, dans leurs 5 formes
- [ ] `clone` est traité comme `create` dans toutes les listes d'actions
- [ ] Les lectures de contrôle passent par `strapi.db.query`, pas par le document service
- [ ] Aucun bypass n'enveloppe une lecture ou une opération longue

**Liste et schémas**

- [ ] Tout type portant la relation figure dans `..._SCOPED_TYPES`
- [ ] Le garde détecte `oneToOne`, `manyToMany`, les noms d'attribut alternatifs, et balaie `src/extensions`
- [ ] Aucun type `api::` n'échappe aux deux listes
- [ ] Chaque exemption nomme un fichier existant
- [ ] `inversedBy` / `mappedBy` posés des deux côtés

**Authentification et rôles**

- [ ] Scope contrôlé dans son propre middleware, sur tout type
- [ ] `jwt.issue` désactivé, routes d'auth locale retirées, rôle `Public` vidé
- [ ] Drapeau admin relu en base, jamais lu du jeton
- [ ] Défaut fermé sur le RBAC
- [ ] Le créateur d'un tenant en devient `owner`

**Données**

- [ ] Champs calculés recalculés depuis toutes leurs sources, valeurs client écrasées
- [ ] Bloc composant : écriture refusée si une liste est absente
- [ ] Tables de référence générées depuis la source officielle, jamais à la main

**Vérification**

- [ ] Une suite d'attaques croisées existe et passe (voir `test-integrity`)
- [ ] Chaque contrôle a été neutralisé une fois pour vérifier qu'un test échoue
