import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { catchError, from, map, of, switchMap } from "rxjs";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";
import { ComponentDemo } from "../demo.types";
import { TA_API } from "../generated/api-metadata";
import { DEMO_INDEX } from "../generated/demo-index";
import { DemoSource, DEMO_SOURCES } from "../generated/demo-sources";
import { findEntry } from "../registry";
import { ApiTableComponent } from "./api-table.component";
import { ExampleBlockComponent } from "./example-block.component";

@Component({
  standalone: true,
  selector: "app-component-page",
  imports: [
    ApiTableComponent,
    ExampleBlockComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./component-page.component.html",
  styleUrl: "./component-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentPage {
  private _route = inject(ActivatedRoute);

  /** Entrée de registre de la route courante — disponible immédiatement. */
  readonly entry = toSignal(
    this._route.paramMap.pipe(
      map((params) => findEntry(params.get("pkg") ?? "", params.get("component") ?? "") ?? null)
    ),
    { initialValue: null }
  );

  /**
   * Démo chargée, **mémorisée avec l'identifiant qui l'a produite**.
   *
   * Angular réutilise l'instance de cette page quand on navigue d'un composant à
   * l'autre : sans cette marque, une résolution tardive afficherait les exemples
   * de l'ancien composant sous le titre du nouveau. La comparaison d'identifiant
   * faite plus bas garantit qu'on ne rend jamais une démo qui n'est pas la sienne.
   *
   * Le `catchError` est indispensable, et à l'intérieur du `switchMap` : une erreur
   * qui remonterait au flux extérieur tuerait la souscription pour de bon, et plus
   * aucune navigation ne remettrait la page à jour — un chunk manquant après un
   * redéploiement gèlerait la vitrine entière jusqu'au rechargement.
   */
  private readonly _loaded = toSignal(
    this._route.paramMap.pipe(
      map((params) => findEntry(params.get("pkg") ?? "", params.get("component") ?? "") ?? null),
      switchMap((entry) =>
        entry
          ? from(entry.load()).pipe(
              map((module) => ({ id: entry.id, demo: module.DEMO as ComponentDemo | null })),
              catchError((error: unknown) => {
                console.error(`[vitrine] échec du chargement de la démo "${entry.id}"`, error);
                return of({ id: entry.id, demo: null as ComponentDemo | null });
              })
            )
          : of(null)
      )
    ),
    { initialValue: null }
  );

  /** La démo n'est rendue que si elle provient bien du composant affiché. */
  readonly demo = computed(() => {
    const loaded = this._loaded();
    return loaded && loaded.id === this.entry()?.id ? loaded.demo : null;
  });

  /** Le chargement s'est terminé sans démo : l'import a échoué. */
  readonly loadFailed = computed(() => {
    const loaded = this._loaded();
    return !!loaded && loaded.id === this.entry()?.id && loaded.demo === null;
  });

  readonly api = computed(() => {
    const entry = this.entry();
    return entry ? (TA_API[entry.id] ?? null) : null;
  });

  readonly importLine = computed(() => {
    const api = this.api();
    return api ? `import { ${api.className} } from "${api.pkg}";` : "";
  });

  /**
   * Titre d'exemple vers nom de classe, lu dans l'index généré. Passer par
   * `example.component.name` serait plus court mais dépendrait de la
   * préservation des noms de classes à la minification, qu'aucune garantie ne
   * couvre ; l'index, lui, est figé à la génération.
   */
  private _classNameByTitle = computed<Record<string, string>>(() => {
    const entry = this.entry();
    const examples = entry ? (DEMO_INDEX[entry.id]?.examples ?? []) : [];
    return Object.fromEntries(examples.map((example) => [example.title, example.className]));
  });

  sourceOf(title: string): DemoSource {
    const className = this._classNameByTitle()[title];
    return (className && DEMO_SOURCES[className]) || { template: "", members: "" };
  }
}
