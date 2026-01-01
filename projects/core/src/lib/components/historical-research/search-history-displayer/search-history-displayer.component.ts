import { NgFor, NgIf, NgTemplateOutlet } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  input,
} from "@angular/core";
import { Validators } from "@angular/forms";
import { MatMenu, MatMenuTrigger } from "@angular/material/menu";

import { LocalStorage } from "storage-manager-js";

import { SearchFieldComponent } from "@ta/form-input";
import { InputTextBox } from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import {
  ContactInformationComponent,
  EmptyComponent,
  ListContainerComponent,
  ListElementComponent,
  ListTagComponent,
  ListTitleComponent,
} from "@ta/ui";

@Component({
  selector: "ta-search-history-displayer",
  templateUrl: "./search-history-displayer.component.html",
  styleUrls: ["./search-history-displayer.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FontIconComponent,
    ContactInformationComponent,
    EmptyComponent,
    ListContainerComponent,
    ListElementComponent,
    ListTitleComponent,
    ListTagComponent,
    SearchFieldComponent,
    MatMenu,
    MatMenuTrigger,
    NgTemplateOutlet,
  ],
})
export class SearchHistoryDisplayerComponent {
  searchHistory = input<{
    type: string;
  }>();

  placeholder = input<string>("");

  isDropDown = input<boolean>(false);

  @Output()
  valueCompleted = new EventEmitter();

  @ViewChild("searchField", { read: ElementRef })
  searchField: ElementRef | null = null;
  @ViewChild("searchField", { read: MatMenuTrigger })
  searchTrigger: MatMenuTrigger | null = null;

  get searchFieldWidth() {
    return this.searchField?.nativeElement.offsetWidth;
  }
  get listRecentSearches() {
    const searchHistoryValue = this.searchHistory();
    if (searchHistoryValue?.type) {
      const storedSearches: { research: string }[] = this._getFromLocalStorage(
        searchHistoryValue.type
      );
      const searches: string[] = storedSearches.map((obj) => obj.research);
      return searches;
    }
    return null;
  }

  public input = new InputTextBox({
    validators: [Validators.minLength(3)],
  });

  public searchCompleted(search: string) {
    const searchHistoryValue = this.searchHistory();
    if (searchHistoryValue?.type) {
      this._saveInLocalStorage(search);
    }
    this.input.value = "";
    this.searchTrigger?.closeMenu();
    this.valueCompleted.emit(search);
    return;
  }

  private _getFromLocalStorage(type: string) {
    return JSON.parse(LocalStorage.get("search-" + type) || "[]");
  }

  private _saveInLocalStorage(searchValue: string) {
    const searchHistoryValue = this.searchHistory();
    if (searchHistoryValue?.type) {
      let storedSearches: { research: string; storageTime: Date }[] =
        this._getFromLocalStorage(searchHistoryValue.type);
      const search = storedSearches.find((s) => s.research === searchValue);
      if (search) {
        search.storageTime = new Date();
      } else {
        storedSearches.push({
          research: searchValue,
          storageTime: new Date(),
        });
      }
      this.orderAndSelect(storedSearches);
      LocalStorage.set(
        "search-" + searchHistoryValue.type || "",
        JSON.stringify(storedSearches.slice(0, 5))
      );
    }
  }

  private orderAndSelect(items: { storageTime: Date }[]) {
    items.sort((a, b) => {
      const dateA = new Date(a.storageTime);
      const dateB = new Date(b.storageTime);
      return dateB.getTime() - dateA.getTime();
    });
  }
}
