import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const BCE_REGEX = /^[01]\d{3}[. ]?\d{3}[. ]?\d{3}$/;

export function bceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) return null;
    return BCE_REGEX.test(value.trim()) ? null : { bce: true };
  };
}
