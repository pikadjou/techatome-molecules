import { ValidatorFn } from '@angular/forms';
/**
 * Validator that delegates phone number validation to an intl-tel-input instance.
 *
 * - Empty control values are considered valid (use Validators.required to enforce presence).
 * - Returns `null` when the instance is not yet available or its utils script is still loading
 *   (`isValidNumber()` returns `null`), so validation is deferred until the lib is ready.
 * - Returns `{ validatePhoneNumber: true }` when the instance reports the number as invalid.
 */
export declare function phoneValidator(getInstance: () => {
    isValidNumber: () => boolean | null | undefined;
} | undefined): ValidatorFn;
