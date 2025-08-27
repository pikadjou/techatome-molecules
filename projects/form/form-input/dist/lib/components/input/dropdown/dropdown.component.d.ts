import { InputDropdown } from '@ta/form-model';
import { CamOverlayPanelComponent } from '@ta/ui';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class DropdownComponent extends CamAbstractInputComponent<InputDropdown<any>, any> {
    space: boolean;
    overlayPanelRef: CamOverlayPanelComponent;
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
