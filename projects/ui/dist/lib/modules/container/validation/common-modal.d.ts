import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
export type ModalParameter = {
    title?: string;
    subtitle?: string;
};
export declare const openModal: (dialog: MatDialog, data?: ModalParameter) => Observable<boolean>;
