import { NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, TemplateRef, inject, input } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";

import { FontIconComponent } from "@ta/icons";
import { TaSharedMenuService } from "@ta/services";
import { LogoComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { Menu } from "../../models/menu/menu";
import { MenuComponent } from "../menu/menu.component";

/**
 * `surface` : bandeau blanc posé sur le fond de page.
 * `brand` : bandeau plein de la couleur de marque, la navigation passe en
 * inversé. C'est la seule variante où le bandeau touche les bords de l'écran.
 */
export type MainMenuTone = "surface" | "brand";

@Component({
  selector: "ta-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"],
  standalone: true,
  imports: [
    NgClass,
    LogoComponent,
    MenuComponent,
    MatExpansionModule,
    NgTemplateOutlet,
    FontIconComponent,
  ],
})
export class MainMenuComponent extends TaBaseComponent {
  menuMain = input.required<Menu>();

  tone = input<MainMenuTone>("surface");

  /**
   * Verrou de marque : un projet peut remplacer le logo par son propre bloc
   * (marque + signature), sans redéfinir tout le bandeau.
   */
  logoTemplate = input<TemplateRef<any>>();

  menuUser = input<Menu>();

  userMenuTemplate = input<TemplateRef<any>>();

  direction = input<"horizontal" | "vertical">("vertical");

  private _sharedMenu = inject(TaSharedMenuService);

  public isPanelOpen = false;

  public navigateToHome() {
    this._router.navigate(["/"]);
  }
  public toggleView() {
    this._sharedMenu.isMinimized$.next(
      !this._sharedMenu.isMinimized$.getValue()
    );
  }

  public toggleMobilePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  public closeMobilePanel() {
    this.isPanelOpen = false;
  }
}
