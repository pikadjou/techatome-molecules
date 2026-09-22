---
name: test-integrity
description: Écrire des tests qui protègent réellement — tests de mutation, fixtures complètes, assertions qui échouent quand le code casse, harnais de bout en bout. Couvre les pièges qui rendent une suite verte alors que le code est cassé : branches mortes, assertions permissives, doubles complaisants, dépendances d'ordre, gardes troués. Utiliser ce skill avant d'annoncer qu'un comportement est testé, lors de toute revue de tests, et quand une suite verte accompagne un défaut découvert en production.
---

# Tests qui protègent réellement

> Toutes les situations décrites ici sont survenues sur des projets Techatome, suites au vert.

---

## 0. LA SEULE QUESTION QUI COMPTE

> **Si je supprimais la ligne que ce test est censé protéger, ce test échouerait-il ?**

Tant qu'on ne l'a pas vérifié **en le faisant**, la réponse est inconnue. Un test vert ne
prouve rien d'autre que son propre passage.

### Le test de mutation, en pratique

```bash
# 1. Copier le projet hors du dépôt (jamais muter le dépôt de travail)
# 2. Neutraliser UN contrôle — le plus simple : `if (false && …)`
# 3. Relancer les suites
# 4. La mutation doit être TUÉE : au moins un test échoue, pour le bon motif
```

Une mutation qui **survit** désigne un test inutile. C'est le seul diagnostic fiable.

**À faire systématiquement sur tout contrôle de sécurité, avant d'annoncer qu'il est testé.**

---

## 1. LE PIÈGE MAJEUR : LE DÉFAUT DE BRANCHEMENT

Les tests unitaires vérifient chaque pièce **isolément**. Ils ne voient pas :

- un middleware oublié dans l'enregistrement ;
- une extension non chargée ;
- une route laissée ouverte ;
- un contrôle placé au mauvais endroit de la chaîne.

**Cas réel (subsidia).** Quatre failles critiques coexistaient avec **134 tests unitaires au
vert**. Chaque middleware faisait correctement son travail — aucun n'était branché au bon
endroit, ou n'était atteint pour les types concernés.

**Cas réel (judoCoachManager).** Un contrôle multi-tenant entièrement inopérant, avec ses
tests au vert : ils injectaient `ctx.state.user` à la main, or cette valeur était toujours
`undefined` en conditions réelles.

### La parade : un harnais de bout en bout

| Élément | Exigence |
| --- | --- |
| Instance | L'application **réelle**, démarrée par son propre chemin de démarrage |
| Requêtes | HTTP réel (`supertest` sur le serveur monté) |
| Authentification | **Vrais jetons** — serveur JWKS local et paire de clés RSA générée par le test, pas un mock |
| Base | Jetable, créée et supprimée par le test |
| Données | Préparées **hors requête HTTP**, là où les contrôles laissent délibérément passer |

Preuve de valeur, mesurée : débrancher un middleware du cloisonnement → **4 échecs e2e,
0 échec unitaire**. Trois autres mutations : 7/0, 2/0, 3/0.

---

## 2. LES FIXTURES DÉCIDENT DE CE QUI EST TESTABLE

> **Un rôle absent des fixtures est un rôle non testé, quel que soit le nombre de tests.**

**Cas réel.** La règle « seul un `owner` gère les membres » pouvait être supprimée sans
qu'aucun des 201 tests ne bronche : **aucune fixture ne créait d'utilisateur `editor`**. Les
suites n'avaient que des `owner` et des `viewer`.

**Règle.** Les fixtures couvrent **chaque rôle** et **chaque type d'objet** dont le
comportement diffère. Un contrôle qui distingue A de B exige une fixture A **et** une
fixture B.

### Corollaire : tester la règle sur le bon objet

**Cas réel.** Les tests de rôles n'utilisaient qu'un type réservé aux `owner`. Supprimer la
règle « `viewer` en lecture seule » ne cassait rien : l'autre contrôle levait à sa place, et
les tests — qui assertaient `rejects.toThrow()` **sans motif** — passaient pour la mauvaise
raison. La règle protégeant tous les types métier n'était vérifiée nulle part.

| ❌ | ✅ |
| --- | --- |
| `await expect(run(ctx)).rejects.toThrow()` | `await expect(run(ctx)).rejects.toThrow(/read_only_role/)` |
| Tester la règle sur un type où un autre contrôle lève aussi | Tester sur le type où **seule** cette règle s'applique |

---

## 3. ASSERTIONS PERMISSIVES

### Les listes de codes acceptables

| ❌ | ✅ |
| --- | --- |
| `expect([400, 403, 404]).toContain(status)` | `expect(status).toBe(400)` |
| `expect([401, 403, 404, 405]).toContain(status)` | Figer le comportement voulu |

`404` signifie « la route n'existe pas », `401` « elle existe et exige une authentification ».
Ce sont deux postures de sécurité différentes : un test qui accepte les deux n'en vérifie
aucune.

### Les branches conditionnelles — code mort silencieux

```ts
// ❌ La vraie assertion est dans une branche qui n'est jamais prise
if (reponse.status === 200 || reponse.status === 201) {
  expect(relu.body.data.project).toBeFalsy();   // ← jamais exécuté
} else {
  expect([400, 403, 404]).toContain(reponse.status);
}
```

**Cas réel** : la branche `200/201` était morte — le test ne vérifiait plus qu'un code
d'erreur parmi trois. L'autre occurrence du même motif prenait la branche inverse, et
basculerait silencieusement au premier champ requis ajouté.

**Règle.** Pas de `if` dans un test. Un test = un comportement attendu.

### Les assertions de non-fuite sans contrôle de statut

```ts
// ❌ Une 500, une 403 ou un corps vide satisfont cette assertion
expect(contientDonneesDeB(reponse.body)).toBe(false);

// ✅ La lecture doit être fonctionnelle ET filtrée
expect(reponse.status).toBe(200);
expect(reponse.body.data).toHaveLength(1);
expect(contientDonneesDeB(reponse.body)).toBe(false);
```

### Le périmètre de l'assertion

Vérifier `reponse.body.data` laisse passer une fuite qui remonterait dans `errors` (message
d'erreur exposant un nom). Asserter sur le **corps entier**.

---

## 4. DOUBLES COMPLAISANTS

> **Un double qui ignore les filtres qu'on lui passe valide un code faux.**

| ❌ | ✅ |
| --- | --- |
| `findOne: () => membership` quel que soit le `where` | Vérifier que le `where` attendu a bien été passé |
| Double qui reproduit le comportement **espéré** de la bibliothèque | Double qui reproduit son comportement **réel**, vérifié dans son code |

**Cas réel.** Un test assertait qu'un filtre `documentId: { $ne }` était transmis — mais rien
ne prouvait que Strapi honore cet opérateur. Si l'opérateur était ignoré, le président en
place se serait bloqué lui-même à chaque mise à jour. Seul un test de bout en bout pouvait
trancher ; il a été ajouté.

**Règle.** Quand un test unitaire repose sur une hypothèse à propos d'une bibliothèque tierce,
cette hypothèse est vérifiée **une fois** par un test d'intégration.

### Le double doit suivre le vrai chemin d'appel

Changer `strapi.documents(...)` en `strapi.db.query(...)` dans le code et laisser le double
sur l'ancien chemin fait échouer les tests — tant mieux. Mais l'inverse (double trop large,
couvrant les deux) masque la régression.

---

## 5. DÉPENDANCES D'ORDRE

```ts
// ❌ `presidentId` est affecté par un test et consommé par un autre
it('crée le président', … presidentId = reponse.body.data.documentId);
it('remplace le président', … api('put', `/…/${presidentId}`));
```

Trois conséquences, toutes observées :

- lancer le second seul produit un `404` sur `/undefined` ;
- `-t` et `.only` deviennent inutilisables pour déboguer ;
- **la panne du premier produit un second échec trompeur** — on cherche une régression de la
  règle métier là où il n'y a qu'une donnée manquante.

**Règle.** Chaque test est autonome : `beforeEach` qui pose l'état, ou scénario complet
(créer, agir, nettoyer).

---

## 6. LES GARDES AUTOMATIQUES SONT DES TESTS COMME LES AUTRES

Un test qui balaie le code source pour faire respecter une convention doit lui-même être
attaqué : **ajouter un cas qui viole la règle et vérifier qu'il échoue**.

**Cas réel.** Un garde censé détecter tout content type lié au tenant ne couvrait qu'une
forme sur quatre (`manyToOne`, attribut au nom exact, sous `src/api` uniquement). Trois types
fuyants ajoutés à une copie du projet **ne l'ont pas fait broncher**. Il affichait pourtant
quatre tests au vert, dont trois tautologies sur une constante littérale — ce qui le faisait
paraître robuste.

| ❌ | ✅ |
| --- | --- |
| `expect(LISTE).toContain('x')` sur une constante littérale | Vérifier que le **balayage** trouve quelque chose (`length > N`) |
| Garde qui n'exige qu'une forme | Garde qui couvre toutes les formes, et qui échoue sur chacune |

**Toujours ajouter un test « le balayage fonctionne »** : sans lui, un balayage cassé rend
tous les autres tests vacuement verts.

---

## 7. CE QU'UN TEST AFFIRME DOIT ÊTRE CE QU'IL VÉRIFIE

**Cas réel.** Un test nommé « refuse de rattacher un membre sans invitation » passait… parce
que Strapi n'expose tout simplement pas la clé à l'écriture. **Aucun contrôle d'invitation
n'existait.** Le test attestait une propriété de sécurité que rien n'implémentait, et aurait
basculé sans explication le jour où la relation serait devenue inscriptible.

**Règle.** Un test porte le nom de ce qu'il vérifie *réellement*. Quand le refus vient du
framework et non d'une règle du projet, le dire dans le nom et dans un commentaire — et
préciser ce qu'il faudra faire quand la situation changera.

De même, une ligne de documentation « ✅ couvert » doit renvoyer à un test qui couvre **le cas
général**, pas un cas particulier qui passe pour une autre raison.

---

## 8. CE QU'ON ÉCRIT DANS LA DOCUMENTATION

> **Une documentation qui promet une protection inexistante est pire que pas de
> documentation : elle referme la question.**

**Cas réel.** Un fichier de sécurité affirmait « la liste est restreinte par un middleware
dédié ». Ce middleware n'a jamais été écrit, et le commentaire a été relu plusieurs fois sans
que personne n'aille vérifier. C'est ce qui a laissé le content type le plus sensible du
projet sans aucune protection.

**Règle.** Toute affirmation de comportement dans un document nomme le fichier qui
l'implémente, et **ce fichier est vérifié au moment où on l'écrit**.

---

## 9. CHECKLIST AVANT D'ANNONCER « C'EST TESTÉ »

- [ ] J'ai neutralisé chaque contrôle important une fois, et vérifié qu'un test échoue
- [ ] Les fixtures couvrent chaque rôle et chaque variante de comportement
- [ ] Chaque assertion de refus vérifie **le motif**, pas seulement qu'une erreur est levée
- [ ] Aucun `if` dans un test, aucune liste de codes acceptables
- [ ] Les assertions de non-fuite vérifient aussi que la requête a **fonctionné**
- [ ] Les doubles reproduisent le comportement réel de la bibliothèque, filtres compris
- [ ] Chaque test passe seul (`-t` sur son nom)
- [ ] Les gardes de convention échouent bien sur un cas violant, et savent dire que leur balayage a trouvé quelque chose
- [ ] Le nom de chaque test décrit ce qu'il vérifie réellement
- [ ] Chaque ligne « couvert ✅ » d'un document renvoie à un test qui couvre le cas général
- [ ] Un harnais de bout en bout existe pour tout ce qui dépend d'un branchement
