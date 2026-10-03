import { ChangeDetectionStrategy, Component, computed, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { NotificationBoxComponent } from "@ta/notification";

import { AppTranslationService } from "./showcase/app-translation.service";
import { SEARCH_INDEX } from "./showcase/generated/search-index";
import { REGISTRY, RegistryEntry } from "./showcase/registry";
import { ThemeConfig } from "./themes/theme.config";
import { ThemeService } from "./themes/theme.service";

/** Au-delà, la liste cesse d'aider : mieux vaut préciser la recherche. */
const MAX_SEARCH_RESULTS = 20;

interface MenuItem {
  label: string;
  route?: string;
  icon?: string;
  group?: boolean;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NotificationBoxComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "Molecules";
  subtitle = "@ta/* sandbox";

  private _themeService = inject(ThemeService);

  // Enregistre les libellés de la démo (en-têtes de colonnes des grids notamment).
  private _appTranslation = inject(AppTranslationService);

  themes = this._themeService.themes;
  activeTheme = this._themeService.activeTheme;

  /** Texte saisi dans la recherche de composants. */
  readonly query = signal("");

  /**
   * Composants du registre correspondant à la recherche. La comparaison porte
   * sur le sélecteur, le nom de classe et le résumé — tous trois disponibles
   * sans importer la moindre démo.
   */
  private readonly _matches = computed<RegistryEntry[]>(() => {
    const needle = this.query().trim().toLowerCase();
    if (needle.length < 2) {
      return [];
    }
    return REGISTRY.filter((entry) => {
      const className = SEARCH_INDEX[entry.id]?.className ?? "";
      const summary = SEARCH_INDEX[entry.id]?.summary ?? "";
      return `${entry.id} ${className} ${summary}`.toLowerCase().includes(needle);
    });
  });

  readonly searchResults = computed(() => this._matches().slice(0, MAX_SEARCH_RESULTS));

  /**
   * Correspondances non affichées. À 183 composants, une requête courte en
   * dépasse largement la limite : on annonce le reste plutôt que de tronquer
   * en silence.
   */
  readonly hiddenResultCount = computed(() =>
    Math.max(0, this._matches().length - MAX_SEARCH_RESULTS)
  );

  // Une entrée par paquet doté d'au moins une démo dans le registre — chacune
  // mène à l'index générique du paquet (`:pkg`) ou à sa page composant directe.
  // `@ta/utils` garde sa page dédiée : il n'exporte aucun composant `ta-*`, donc
  // aucune entrée de registre, donc aucun index générique possible pour lui.
  menu: MenuItem[] = [
    { label: "Accueil", route: "/home", icon: "home" },
    { label: "Fondations", group: true },
    { label: "Thème", route: "/theme", icon: "palette" },
    { label: "Catalogue UI", route: "/catalogue", icon: "auto_awesome_mosaic" },
    { label: "@ta/icons", route: "/icons", icon: "emoji_symbols" },
    { label: "Composants", group: true },
    { label: "@ta/ui", route: "/ui", icon: "widgets" },
    { label: "@ta/menu", route: "/menu", icon: "menu" },
    { label: "@ta/notification", route: "/notification", icon: "notifications" },
    { label: "Données & formulaires", group: true },
    { label: "@ta/form-basic", route: "/form-basic", icon: "edit_note" },
    { label: "@ta/form-input", route: "/form-input", icon: "input" },
    { label: "@ta/features", route: "/features", icon: "table_chart" },
    { label: "@ta/charts", route: "/charts", icon: "bar_chart" },
    { label: "@ta/files-basic", route: "/files-basic", icon: "folder" },
    { label: "@ta/files-extended", route: "/files-extended", icon: "folder_open" },
    { label: "@ta/wysiswyg", route: "/wysiswyg", icon: "edit_document" },
    { label: "@ta/cms", route: "/cms", icon: "article" },
    { label: "Utilitaires", group: true },
    { label: "@ta/core", route: "/core", icon: "tune" },
    { label: "@ta/utils", route: "/utils", icon: "build" },
    { label: "@ta/user", route: "/user", icon: "person" },
  ];

  onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearQuery(): void {
    this.query.set("");
  }

  onThemeChange(event: Event): void {
    const name = (event.target as HTMLSelectElement).value;
    const theme = this.themes.find((t: ThemeConfig) => t.name === name);
    if (theme) {
      this._themeService.applyTheme(theme);
    }
  }
}
