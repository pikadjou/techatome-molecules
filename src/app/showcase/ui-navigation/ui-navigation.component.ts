import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  TaDefaultPanelComponent,
  TaOverlayPanelComponent,
  TextComponent,
  TitleComponent,
  TaTreeChildrenComponent,
  TaTreeContainerComponent,
  TaTreeItemComponent,
} from "@ta/ui";
import {
  ContextMenuComponent,
  Menu,
  MenuIcon,
  NavigationComponent,
} from "@ta/menu";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    ContextMenuComponent,
    NavigationComponent,
    PageLayoutComponent,
    TaDefaultPanelComponent,
    TaOverlayPanelComponent,
    TaTreeChildrenComponent,
    TaTreeContainerComponent,
    TaTreeItemComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./ui-navigation.component.html",
  styleUrl: "./ui-navigation.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNavigationPage {
  horizontalMenu = new Menu({
    direction: "horizontal",
    elements: [
      new MenuIcon({ key: "home", label: "Home", icon: "home" }),
      new MenuIcon({ key: "projects", label: "Projects", icon: "folder" }),
      new MenuIcon({ key: "settings", label: "Settings", icon: "settings" }),
    ],
  });

  verticalMenu = new Menu({
    direction: "vertical",
    elements: [
      new MenuIcon({ key: "dashboard", label: "Dashboard", icon: "dashboard" }),
      new MenuIcon({ key: "users", label: "Users", icon: "people" }),
      new MenuIcon({ key: "reports", label: "Reports", icon: "assessment" }),
      new MenuIcon({ key: "settings", label: "Settings", icon: "settings" }),
    ],
  });

  tabMenu = new Menu({
    elements: [
      new MenuIcon({ key: "tab1", label: "Overview" }),
      new MenuIcon({ key: "tab2", label: "Details" }),
      new MenuIcon({ key: "tab3", label: "History" }),
    ],
  });
}
