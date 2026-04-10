import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

import { NotificationBoxComponent } from "@ta/notification";

import { ThemeService } from "./themes/theme.service";
import { ThemeConfig } from "./themes/theme.config";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NotificationBoxComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "Molecules Sandbox";

  private _themeService = inject(ThemeService);

  themes = this._themeService.themes;
  activeTheme = this._themeService.activeTheme;

  menu: { label: string; route?: string; icon?: string; group?: boolean }[] = [
    { label: "Home", route: "/home", icon: "home" },
    { label: "Foundation", group: true },
    { label: "Theme", route: "/theme", icon: "palette" },
    { label: "Icons", route: "/icons", icon: "emoji_symbols" },
    { label: "UI Components", group: true },
    { label: "Buttons & Text", route: "/ui", icon: "smart_button" },
    { label: "Display", route: "/ui-display", icon: "info" },
    { label: "Cards & Lists", route: "/ui-cards-lists", icon: "view_agenda" },
    { label: "Layout", route: "/ui-layout", icon: "dashboard" },
    { label: "Feedback", route: "/ui-feedback", icon: "notifications" },
    { label: "Navigation", route: "/ui-navigation", icon: "menu" },
    { label: "Progress", route: "/ui-progress", icon: "donut_large" },
    { label: "Container", route: "/container", icon: "check_box_outline_blank" },
    { label: "Data", group: true },
    { label: "Form", route: "/form", icon: "edit_note" },
    { label: "Wysiswyg", route: "/wysiswyg", icon: "edit_document" },
    { label: "Grid", route: "/grid", icon: "table_chart" },
    { label: "Charts", route: "/charts", icon: "bar_chart" },
    { label: "Utilities", group: true },
    { label: "Utils", route: "/utils", icon: "build" },
    { label: "User", route: "/user", icon: "person" },
  ];

  onThemeChange(event: Event): void {
    const name = (event.target as HTMLSelectElement).value;
    const theme = this.themes.find((t: ThemeConfig) => t.name === name);
    if (theme) {
      this._themeService.applyTheme(theme);
    }
  }
}
