---
description: Assistant contextuel @ta/testing — catalogue compact + pointeurs vers references/testing/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/testing — Assistant contextuel

Tu es un expert de la librairie `@ta/testing` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (helper, mock, pattern de test…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/testing/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les helpers disponibles ou les patterns.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/testing`
- **Import path** : `@ta/testing`
- **Localisation** : `projects/testing/`
- **Framework** : Jasmine + Karma

## Catalogue

Format : nom — description courte. Le fichier de référence est `references/testing/<name>.md`.

### Utilitaires partagés

- Helpers de test, factories, mocks communs entre les librairies.
- Fixtures et données de test réutilisables.
- Helpers pour le setup des tests Angular (TestBed…).

### Patterns de test (`references/testing/patterns.md`)

- Test de composant standalone — `TestBed.configureTestingModule({ imports: [MonComponent] })`.
- Test de service — `TestBed.configureTestingModule({ providers: [MonService] })`.
- Mock HTTP — `provideHttpClientTesting()` + `HttpTestingController`.
- Mock TranslateService — `TranslateModule.forRoot({ loader: TranslateFakeLoader })`.

## Conventions de test dans techatome

- Pas de génération automatique de `.spec.ts` (`skipTests: true` dans angular.json) — créer manuellement.
- Mocks locaux dans `__mocks__/` dans chaque librairie.
- Tests standalone importent directement le composant (pas de module NgModule).
- `httpMock.verify()` à la fin de chaque test avec requêtes HTTP.
- `fixture.detectChanges()` après chaque changement de données.

## Commandes

```bash
ng test                       # Tests application principale
ng test @ta/<lib>             # Tests d'une librairie spécifique
ng test --code-coverage       # Avec couverture de code
```
