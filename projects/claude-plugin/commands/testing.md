---
description: Assistant contextuel @ta/testing — utilitaires de test partagés, mocks et helpers Jasmine/Karma
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/testing — Assistant contextuel

Tu es un expert de la librairie `@ta/testing` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/testing`
**Import path** : `@ta/testing`
**Localisation** : `projects/testing/`
**Framework de test** : Jasmine + Karma

## Rôle de la librairie

`@ta/testing` fournit des utilitaires, mocks et helpers partagés pour les tests des autres librairies du monorepo techatome.

## Exports clés

- Utilitaires de test partagés (helpers, factories, mocks communs)
- Fixtures et données de test réutilisables
- Helpers pour le setup des tests Angular

## Conventions de test dans techatome

### Framework

- **Tests unitaires** : Jasmine + Karma
- **Pas de génération automatique** de `.spec.ts` (`skipTests: true` dans angular.json)
- **Mocks locaux** : dossier `__mocks__/` dans chaque librairie

### Lancer les tests

```bash
# Tester l'application principale
ng test

# Tester une librairie spécifique
ng test @ta/ui
ng test @ta/form-basic

# Avec couverture de code
ng test --code-coverage
```

### Structure d'un test de composant

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComponent } from './mon.component';

describe('MonComponent', () => {
  let component: MonComponent;
  let fixture: ComponentFixture<MonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    component.label = 'TEST';
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('.label');
    expect(el.textContent).toContain('TEST');
  });
});
```

### Structure d'un test de service

```typescript
import { TestBed } from '@angular/core/testing';

import { MonService } from './mon.service';

describe('MonService', () => {
  let service: MonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonService],
    });
    service = TestBed.inject(MonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

### Utiliser les mocks de @ta/testing

```typescript
import '@ta/testing';

// Données de test partagées
const mockUser = createMockUser({ id: 1, name: 'Test User' });
```

### Pattern **mocks** par librairie

Chaque librairie crée ses propres mocks dans `__mocks__/` :

```
projects/ui/src/lib/components/ui/button/__mocks__/
  button.mock.ts   # données de test pour ButtonComponent
```

### Mock d'un service HTTP

```typescript
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

TestBed.configureTestingModule({
  providers: [provideHttpClient(), provideHttpClientTesting(), MonService],
});

const httpMock = TestBed.inject(HttpTestingController);
```

### Mock de TranslateService

```typescript
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

await TestBed.configureTestingModule({
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
    }),
    MonComponent,
  ],
}).compileComponents();
```

## Conventions

- Créer les specs manuellement (pas de génération automatique)
- Un fichier `__mocks__/` par sous-composant qui en a besoin
- Les tests standalone importent directement le composant (pas de module)
- Utiliser `provideHttpClientTesting()` pour mocker les requêtes HTTP

## Revue de code (tests)

- Vérifier que chaque nouveau service/composant a un `.spec.ts`
- S'assurer que les mocks HTTP sont vidés avec `httpMock.verify()`
- Vérifier que les tests couvrent les cas limites et d'erreur
- S'assurer que `fixture.detectChanges()` est appelé après chaque changement de données

## Ajout dans @ta/testing

1. Créer le helper/mock dans `projects/testing/src/lib/`
2. Exporter depuis `projects/testing/src/public-api.ts`
3. Versionner si la modification est breaking (suit la convention Lerna)
