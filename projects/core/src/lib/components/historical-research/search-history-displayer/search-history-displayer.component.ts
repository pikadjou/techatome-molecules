import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

import { InputTextBox } from '@ta/form-model';
import { LocalStorage } from 'storage-manager-js';

@Component({
  selector: 'ta-search-history-displayer',
  templateUrl: './search-history-displayer.component.html',
  styleUrls: ['./search-history-displayer.component.scss'],
})
export class SearchHistoryDisplayerComponent {
  @Input()
  searchHistory?: {
    type: string;
  };

  @Input()
  placeholder: string = '';

  @Input()
  isDropDown: boolean = false;

  @Output()
  valueCompleted = new EventEmitter();

  @ViewChild('searchField', { read: ElementRef })
  searchField: ElementRef | null = null;
  @ViewChild('searchField', { read: MatMenuTrigger })
  searchTrigger: MatMenuTrigger | null = null;

  get searchFieldWidth() {
    return this.searchField?.nativeElement.offsetWidth;
  }
  get listRecentSearches() {
    if (this.searchHistory?.type) {
      const storedSearches: { research: string }[] = this._getFromLocalStorage(this.searchHistory?.type);
      const searches: string[] = storedSearches.map(obj => obj.research);
      return searches;
    }
    return null;
  }

  public input = new InputTextBox({
    validators: [Validators.minLength(3)],
  });

  public searchCompleted(search: string) {
    if (this.searchHistory?.type) {
      this._saveInLocalStorage(search);
    }
    this.input.value = '';
    this.searchTrigger?.closeMenu();
    this.valueCompleted.emit(search);
    return;
  }

  private _getFromLocalStorage(type: string) {
    return JSON.parse(LocalStorage.get('search-' + type) || '[]');
  }

  private _saveInLocalStorage(searchValue: string) {
    if (this.searchHistory?.type) {
      let storedSearches: { research: string; storageTime: Date }[] = this._getFromLocalStorage(
        this.searchHistory?.type
      );
      const search = storedSearches.find(s => s.research === searchValue);
      if (search) {
        search.storageTime = new Date();
      } else {
        storedSearches.push({
          research: searchValue,
          storageTime: new Date(),
        });
      }
      this.orderAndSelect(storedSearches);
      LocalStorage.set('search-' + this.searchHistory?.type || '', JSON.stringify(storedSearches.slice(0, 5)));
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
