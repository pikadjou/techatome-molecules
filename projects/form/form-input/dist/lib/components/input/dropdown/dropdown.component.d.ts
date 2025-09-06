import { InputDropdown } from '@ta/form-model';
import { TaOverlayPanelComponent } from '@ta/ui';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class DropdownComponent extends TaAbstractInputComponent<InputDropdown<any>, any> {
    space: boolean;
    overlayPanelRef: TaOverlayPanelComponent;
    optionsList: {
        id: string;
        name: string;
        disabled?: boolean;
    }[];
    filteredOptions: {
        id: string;
        name: string;
        disabled?: boolean;
    }[];
    ngOnInit(): void;
    getOptionName(id: any): string;
    onMenuSelect(selectedId: any): void;
    onOverlayClosed(): void;
    isSelected(id: any): boolean;
    selectOption(id: any, event: MouseEvent): void;
    onSearchChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "ta-input-dropdown", never, { "space": { "alias": "space"; "required": false; }; }, {}, never, never, true, never>;
}
