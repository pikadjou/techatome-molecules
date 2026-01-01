import { NgIf, NgTemplateOutlet } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { LocalIconComponent } from "@ta/icons";
import { SwiperComponent } from "@ta/ui";

import { MenuIcon } from "../../models/menu/item/icon";
import { Menu } from "../../models/menu/menu";
import { TaTranslationMenu } from "../../translation.service";

@Component({
  selector: "ta-quick-actions",
  templateUrl: "./quick-actions.component.html",
  styleUrls: ["./quick-actions.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    TranslateModule,
    LocalIconComponent,
    SwiperComponent,
  ],
})
export class QuickActionsComponent {
  tabSelection = input<string | null>(null);

  menu = input.required<Menu>();

  elementPerPage = input<number>(3.5);

  canDeselect = input<boolean>(false);

  @Output()
  tabSelected = new EventEmitter<string | null>();

  typeToken!: { element: MenuIcon };

  constructor() {
    TaTranslationMenu.getInstance();
  }

  public onQuickActionSelected(menuIcon: MenuIcon) {
    if (menuIcon.disabled) {
      return;
    }

    this.tabSelected.emit(this._selectedValue(menuIcon.key));
  }

  private _selectedValue(newSelection: string): string | null {
    if (this.canDeselect() && this.tabSelection() === newSelection) return null;

    return newSelection;
  }
}
