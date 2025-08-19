import { NgFor, NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';

import { InputDropdown } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { CamOverlayPanelComponent, LabelComponent } from '@ta/ui';
import { TranslatePipe } from '@ta/translation';

import { CamAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, FontIconComponent, CamOverlayPanelComponent, LabelComponent, TranslatePipe, InputLayoutComponent],
})
export class DropdownComponent extends CamAbstractInputComponent<InputDropdown<any>, any> {
  @Input() space = true;

  @ViewChild(CamOverlayPanelComponent) overlayPanelRef!: CamOverlayPanelComponent;

  public optionsList: { id: string; name: string; disabled?: boolean }[] = [];
  public filteredOptions: { id: string; name: string; disabled?: boolean }[] = [];

  override ngOnInit() {
    super.ngOnInit();
    this._registerSubscription(
      this.input.options.subscribe(options => {
        this.optionsList = options;
        this.filteredOptions = this.optionsList;
      })
    );
  }

  public getOptionName(id: any): string {
    const found = this.optionsList.find(opt => opt.id === id);
    return found ? found.name : '';
  }

  public onMenuSelect(selectedId: any) {
    if (this.input.multiple) {
      let currentValue = this.input.value || [];
      if (currentValue.includes(selectedId)) {
        currentValue = currentValue.filter((v: any) => v !== selectedId);
      } else {
        currentValue = [...currentValue, selectedId];
      }
      this.input.value = currentValue;
    } else {
      this.input.value = selectedId;
      this.overlayPanelRef.close();
    }
  }

  public onOverlayClosed(): void {
    this.filteredOptions = this.optionsList;
  }

  public isSelected(id: any): boolean {
    const currentValue = this.input.value;
    return this.input.multiple ? Array.isArray(currentValue) && currentValue.includes(id) : currentValue === id;
  }

  public selectOption(id: any, event: MouseEvent): void {
    this.onMenuSelect(id);
  }

  public onSearchChange(event: Event): void {
    if (!this.input.withSearch) return;
    const target = event.target as HTMLInputElement;
    const searchTerm = target.value.trim();
    this.filteredOptions =
      searchTerm.length >= 0
        ? this.optionsList.filter(opt => opt.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : this.optionsList;
  }
}
