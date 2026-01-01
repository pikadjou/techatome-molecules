import { NgIf } from "@angular/common";
import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
  input,
} from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { FontIconComponent } from "@ta/icons";
import {
  BottomSheetTemplateGenericComponent,
  BottomSheetTemplateGenericParams,
} from "@ta/menu";
import { ButtonComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { SearchHistoryDisplayerComponent } from "./search-history-displayer/search-history-displayer.component";

@Component({
  selector: "ta-search-displayer",
  templateUrl: "./search-displayer.component.html",
  styleUrls: ["./search-displayer.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    FontIconComponent,
    SearchHistoryDisplayerComponent,
    ButtonComponent,
  ],
})
export class SearchDisplayerComponent extends TaBaseComponent {
  container = input<"button" | "link">("button");

  placeholder = input<string>("");

  searchHistory = input<{
    type: string;
  }>();

  @Output()
  valueCompleted = new EventEmitter();

  @ViewChild("searchTemplate", { read: TemplateRef })
  searchTemplate!: TemplateRef<void>;

  get mobileDetection() {
    return this.breakpoints.isMobile;
  }

  constructor(private _bottomSheet: MatBottomSheet) {
    super();
  }

  public openDialog() {
    if (!this.searchHistory()?.type) {
      return;
    }
    this._bottomSheet.open<
      BottomSheetTemplateGenericComponent,
      BottomSheetTemplateGenericParams
    >(BottomSheetTemplateGenericComponent, {
      data: {
        template: this.searchTemplate,
        context: {
          options: { isDropDown: false },
        },
      },
    });
  }

  public action(result: any) {
    this._bottomSheet.dismiss();
    if (result) {
      this.valueCompleted.emit(result);
    }
  }
}
