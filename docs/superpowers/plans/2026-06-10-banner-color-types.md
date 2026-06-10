# Banner Color Types — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter un input `type: ColorType` au `BannerComponent` pour supporter 4 variantes de couleur sémantique (`default`, `warning`, `success`, `alert`) en utilisant les tokens `semantic.*` existants, et mettre à jour le showcase.

**Architecture:** Le composant reçoit un input `type` de type `ColorType` (valeur par défaut `'warning'`). Le template applique une classe BEM `banner--<type>` via `NgClass`. Le SCSS définit 4 variantes utilisant les tokens `semantic.*` déjà disponibles. Aucun token composant n'est ajouté dans `_vars.scss`.

**Tech Stack:** Angular 18 (signal inputs, standalone), SCSS avec `common.get-var()`, Karma + Jasmine

---

## Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `projects/ui/src/lib/components/ui/banner/banner.component.ts` | Modify — ajouter import `NgClass`, `ColorType`, input `type` |
| `projects/ui/src/lib/components/ui/banner/banner.component.html` | Modify — ajouter `[ngClass]` |
| `projects/ui/src/lib/components/ui/banner/banner.component.scss` | Modify — supprimer couleurs fixes, ajouter 4 variantes |
| `projects/ui/src/lib/components/ui/banner/banner.component.spec.ts` | Modify — ajouter tests pour l'input `type` |
| `src/app/showcase/ui-feedback/ui-feedback.component.html` | Modify — corriger la section Banner |

---

### Task 1 : Tests pour l'input `type`

**Files:**
- Modify: `projects/ui/src/lib/components/ui/banner/banner.component.spec.ts`

- [ ] **Étape 1 : Ajouter les tests pour le nouvel input `type`**

Remplacer le contenu de `banner.component.spec.ts` par :

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BannerComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('message', 'Test banner message');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the message input set', () => {
    expect(component.message()).toBe('Test banner message');
  });

  it('should default type to warning', () => {
    expect(component.type()).toBe('warning');
  });

  it('should apply banner--warning class by default', () => {
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--warning');
  });

  it('should apply banner--success class when type is success', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--success');
  });

  it('should apply banner--alert class when type is alert', () => {
    fixture.componentRef.setInput('type', 'alert');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--alert');
  });

  it('should apply banner--default class when type is default', () => {
    fixture.componentRef.setInput('type', 'default');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement.querySelector('.banner');
    expect(el.classList).toContain('banner--default');
  });
});
```

- [ ] **Étape 2 : Vérifier que les nouveaux tests échouent**

```bash
ng test @ta/ui --include="**/banner.component.spec.ts" --watch=false
```

Résultat attendu : les 4 nouveaux tests échouent avec `TypeError` ou `Expected ... to contain 'banner--warning'`.

---

### Task 2 : Mettre à jour le composant TypeScript

**Files:**
- Modify: `projects/ui/src/lib/components/ui/banner/banner.component.ts`

- [ ] **Étape 1 : Mettre à jour `banner.component.ts`**

Remplacer le contenu par :

```typescript
import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { ColorType } from "@ta/styles";
import { TranslatePipe } from "@ta/translation";
import { TaBaseComponent } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
  standalone: true,
  imports: [NgClass, TranslatePipe, TranslateModule],
})
export class BannerComponent extends TaBaseComponent {
  inline = input<boolean>(false);
  message = input.required<string>();
  type = input<ColorType>("warning");

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }
}
```

---

### Task 3 : Mettre à jour le template HTML

**Files:**
- Modify: `projects/ui/src/lib/components/ui/banner/banner.component.html`

- [ ] **Étape 1 : Ajouter `[ngClass]` sur le div banner**

Remplacer le contenu par :

```html
<div class="banner" [class.banner--inline]="this.inline()" [ngClass]="'banner--' + this.type()">
  {{ this.message() | translate }}
</div>
```

- [ ] **Étape 2 : Vérifier que les tests passent**

```bash
ng test @ta/ui --include="**/banner.component.spec.ts" --watch=false
```

Résultat attendu : tous les tests passent (`7 specs, 0 failures`).

---

### Task 4 : Mettre à jour le SCSS

**Files:**
- Modify: `projects/ui/src/lib/components/ui/banner/banner.component.scss`

- [ ] **Étape 1 : Remplacer le contenu du SCSS**

Les tokens `yellow-light` et `yellow-dark` n'existent pas dans le système de design — on les supprime. La couleur par défaut de `warning` devient `orange-light`/`orange` (cohérent avec `label--warning`).

```scss
@use "ta/utils/mixins/common";

.banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: common.get-var(space, xs) common.get-var(space, md);
  text-align: center;
  box-shadow: common.get-var(shadow, black, sm);

  &--inline {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    border-radius: common.get-var(radius, rounded);
  }

  &--warning {
    background-color: common.get-var(semantic, orange-light);
    color: common.get-var(semantic, orange);
  }

  &--success {
    background-color: common.get-var(semantic, green-light);
    color: common.get-var(semantic, green);
  }

  &--alert {
    background-color: common.get-var(semantic, red-light);
    color: common.get-var(semantic, red);
  }

  &--default {
    background-color: common.get-var(surface, secondary);
    color: common.get-var(text, primary);
  }
}
```

---

### Task 5 : Mettre à jour le showcase

**Files:**
- Modify: `src/app/showcase/ui-feedback/ui-feedback.component.html`

- [ ] **Étape 1 : Corriger la section "Banner — Types"**

Dans `ui-feedback.component.html`, remplacer la section "Banner — Types" (lignes 3–15) par :

```html
    <!-- ============================== -->
    <!-- BANNER — TYPES                 -->
    <!-- ============================== -->
    <section>
      <ta-title [level]="2">Banner — Types</ta-title>
      <ta-text size="sm">type: default | warning | success | alert</ta-text>
      <div class="demo-column">
        <ta-banner [inline]="true" type="default" message="This is a default banner."></ta-banner>
        <ta-banner [inline]="true" type="warning" message="Please review before continuing."></ta-banner>
        <ta-banner [inline]="true" type="success" message="Operation completed successfully."></ta-banner>
        <ta-banner [inline]="true" type="alert" message="Something went wrong."></ta-banner>
      </div>
    </section>
```

- [ ] **Étape 2 : Vérifier que le showcase compile**

```bash
ng build @ta/ui --configuration=development
```

Résultat attendu : build sans erreur.
