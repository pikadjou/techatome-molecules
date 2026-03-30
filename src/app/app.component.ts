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

  menu = [
    { label: "Home", route: "/home", icon: "home" },
    { label: "Theme", route: "/theme", icon: "palette" },
    { label: "UI", route: "/ui", icon: "widgets" },
    { label: "Form", route: "/form", icon: "edit_note" },
    { label: "Grid", route: "/grid", icon: "table_chart" },
  ];

  onThemeChange(event: Event): void {
    const name = (event.target as HTMLSelectElement).value;
    const theme = this.themes.find((t: ThemeConfig) => t.name === name);
    if (theme) {
      this._themeService.applyTheme(theme);
    }
  }
}
