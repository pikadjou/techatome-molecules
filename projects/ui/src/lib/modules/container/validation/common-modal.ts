import { MatDialog } from "@angular/material/dialog";

import { Observable } from "rxjs";

import { ValidationModal } from "./modal/modal-validation.component";

export type ModalParameter = {
  title?: string;
  subtitle?: string;
};

export const openModal = (
  dialog: MatDialog,
  data?: ModalParameter
): Observable<boolean> => {
  const dialogRef = dialog.open(ValidationModal, {
    data: data,
  });

  return dialogRef.afterClosed();
};
