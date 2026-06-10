import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { NotificationBoxComponent } from "@ta/notification";

import { ThemeConfig } from "./themes/theme.config";
import { ThemeService } from "./themes/theme.service";

interface MenuItem {
  label: string;
  route?: string;
  icon?: string;
  group?: boolean;
  children?: { label: string; route: string }[];
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
  title = "Molecules Sandbox";

  private _themeService = inject(ThemeService);

  themes = this._themeService.themes;
  activeTheme = this._themeService.activeTheme;

  menu: MenuItem[] = [
    { label: "Home", route: "/home", icon: "home" },
    { label: "Foundation", group: true },
    { label: "Theme", route: "/theme", icon: "palette" },
    {
      label: "@ta/icons",
      route: "/icons/font",
      icon: "emoji_symbols",
      children: [
        { label: "Font Icons", route: "/icons/font" },
        { label: "Material Icons", route: "/icons/material" },
      ],
    },
    { label: "UI", group: true },
    {
      label: "@ta/ui",
      route: "/ui/basics",
      icon: "widgets",
      children: [
        { label: "Basics", route: "/ui/basics" },
        { label: "Display", route: "/ui/display" },
        { label: "Cards & Lists", route: "/ui/cards" },
        { label: "Layout", route: "/ui/layout" },
        { label: "Progress", route: "/ui/progress" },
        { label: "Container", route: "/ui/container" },
      ],
    },
    { label: "@ta/notification", route: "/notification", icon: "notifications" },
    {
      label: "@ta/menu",
      route: "/menu/components",
      icon: "menu",
      children: [
        { label: "Components", route: "/menu/components" },
        { label: "Navigation", route: "/menu/navigation" },
      ],
    },
    { label: "Forms & Data", group: true },
    {
      label: "@ta/form",
      route: "/form/inputs",
      icon: "edit_note",
      children: [
        { label: "Inputs", route: "/form/inputs" },
        { label: "Selection", route: "/form/selection" },
        { label: "Date & Time", route: "/form/datetime" },
        { label: "Advanced", route: "/form/advanced" },
        { label: "Full Example", route: "/form/example" },
      ],
    },
    { label: "@ta/features", route: "/features", icon: "table_chart" },
    { label: "@ta/charts", route: "/charts", icon: "bar_chart" },
    {
      label: "@ta/files",
      route: "/files/basic",
      icon: "folder",
      children: [
        { label: "Basic", route: "/files/basic" },
        { label: "Extended", route: "/files/extended" },
      ],
    },
    { label: "@ta/wysiswyg", route: "/wysiswyg", icon: "edit_document" },
    { label: "Utilities", group: true },
    { label: "@ta/calendar", route: "/calendar", icon: "calendar_month" },
    {
      label: "@ta/utils",
      route: "/utils/pipes",
      icon: "build",
      children: [
        { label: "Pipes", route: "/utils/pipes" },
        { label: "Directives", route: "/utils/directives" },
        { label: "Functions", route: "/utils/functions" },
      ],
    },
    { label: "@ta/user", route: "/user", icon: "person" },
  ];

  onThemeChange(event: Event): void {
    const name = (event.target as HTMLSelectElement).value;
    const theme = this.themes.find((t: ThemeConfig) => t.name === name);
    if (theme) {
      this._themeService.applyTheme(theme);
    }
  }
}
