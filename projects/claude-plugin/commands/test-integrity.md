---
description: Écrire des tests qui protègent réellement — tests de mutation, fixtures complètes, assertions qui échouent quand le code casse. À invoquer avant d'annoncer qu'un comportement est testé, et lors de toute revue de tests.
argument-hint: [fichier de test, comportement ou suite concernée]
allowed-tools: [Read, Glob, Grep, Bash]
---

# Tests qui protègent réellement

Tu es chargé de vérifier qu'une suite de tests protège ce qu'elle prétend protéger.
Sujet :

$ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

1. **Lis le skill `test-integrity`** — il contient les pièges détaillés et les cas réels.
2. **Ne conclus jamais d'un test vert qu'un comportement est protégé.** La seule preuve est
   la mutation : neutraliser la ligne concernée et constater qu'un test échoue.
3. **Pour muter**, travaille sur une **copie hors du dépôt** (`$TEMP`), jamais sur le dépôt de
   travail. Si c'est impossible, restaure à l'identique et dis-le explicitement.
4. **Rends compte des mutations qui survivent** : ce sont elles le résultat utile.

---

## La seule question qui compte

> **Si je supprimais la ligne que ce test est censé protéger, ce test échouerait-il ?**

```bash
# 1. Copier le projet hors du dépôt
# 2. Neutraliser UN contrôle :  if (false && …)
# 3. Relancer les suites
# 4. Mutation TUÉE = au moins un test échoue, pour le bon motif
#    Mutation SURVIVANTE = test inutile
```

---

## Les huit pièges, en une ligne chacun

| # | Piège | Signe |
| --- | --- | --- |
| 1 | Défaut de branchement | Les tests unitaires ne voient pas un middleware non enregistré — il faut du HTTP réel |
| 2 | Fixture manquante | Un rôle absent des fixtures est un rôle non testé, quel que soit le nombre de tests |
| 2b | Règle testée sur le mauvais objet | Un autre contrôle lève à sa place et le test passe pour la mauvaise raison |
| 3 | Assertion permissive | `toContain([400, 403, 404])`, `rejects.toThrow()` sans motif, `if` dans un test |
| 3b | Branche morte | La vraie assertion est dans une branche jamais prise |
| 4 | Double complaisant | Il ignore les filtres qu'on lui passe, ou reproduit le comportement *espéré* de la bibliothèque |
| 5 | Dépendance d'ordre | Le test ne passe pas seul ; la panne du premier produit un échec trompeur du second |
| 6 | Garde troué | Le test de convention ne couvre qu'une forme sur quatre, et personne ne l'a attaqué |

---

## Checklist avant d'annoncer « c'est testé »

- [ ] J'ai neutralisé chaque contrôle important une fois, et vu un test échouer
- [ ] Les fixtures couvrent chaque rôle et chaque variante de comportement
- [ ] Chaque assertion de refus vérifie **le motif**
- [ ] Aucun `if` dans un test, aucune liste de codes acceptables
- [ ] Les assertions de non-fuite vérifient aussi que la requête a **fonctionné**
- [ ] Chaque test passe seul
- [ ] Les gardes de convention échouent bien sur un cas violant
- [ ] Le nom de chaque test décrit ce qu'il vérifie réellement
- [ ] Un harnais de bout en bout existe pour tout ce qui dépend d'un branchement

---

## Ce qu'on écrit dans la documentation

Une affirmation de comportement (« ✅ couvert », « restreint par un middleware dédié ») nomme
le fichier qui l'implémente, **et ce fichier est vérifié au moment où on l'écrit**. Une
documentation qui promet une protection inexistante referme la question — c'est ce qui a
laissé le content type le plus sensible de `subsidia` sans aucune protection.
