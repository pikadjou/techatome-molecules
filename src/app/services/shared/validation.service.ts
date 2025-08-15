import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface ValidationRule {
  field: string;
  rules: ValidatorFn[];
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  
  // Validateurs personnalisés
  static slugValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      
      const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
      const isValid = slugPattern.test(control.value);
      
      return isValid ? null : { invalidSlug: { value: control.value } };
    };
  }

  static uniqueNameValidator(existingNames: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      
      const isUnique = !existingNames.includes(control.value.toLowerCase());
      
      return isUnique ? null : { nameNotUnique: { value: control.value } };
    };
  }

  static contentLengthValidator(minLength: number, maxLength?: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      
      const length = control.value.length;
      
      if (length < minLength) {
        return { minContentLength: { actualLength: length, requiredLength: minLength } };
      }
      
      if (maxLength && length > maxLength) {
        return { maxContentLength: { actualLength: length, maxLength } };
      }
      
      return null;
    };
  }

  static categoryHierarchyValidator(maxDepth: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Cette logique serait implémentée selon la structure hiérarchique
      // Pour l'instant, validation basique
      return null;
    };
  }

  // Helper pour créer des messages d'erreur
  getErrorMessage(field: string, errors: ValidationErrors): string {
    const errorKey = Object.keys(errors)[0];
    const errorValue = errors[errorKey];
    
    const messages: Record<string, string> = {
      required: `Le champ ${field} est obligatoire`,
      invalidSlug: `Le format du slug n'est pas valide`,
      nameNotUnique: `Ce nom existe déjà`,
      minContentLength: `Le contenu doit contenir au moins ${errorValue.requiredLength} caractères`,
      maxContentLength: `Le contenu ne peut pas dépasser ${errorValue.maxLength} caractères`,
      email: `L'email n'est pas valide`,
      minlength: `Le champ doit contenir au moins ${errorValue.requiredLength} caractères`,
      maxlength: `Le champ ne peut pas dépasser ${errorValue.requiredLength} caractères`
    };
    
    return messages[errorKey] || `Erreur de validation sur le champ ${field}`;
  }

  // Helper pour valider des objets complets
  validateEntity<T>(entity: T, rules: ValidationRule[]): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};
    
    rules.forEach(rule => {
      const fieldValue = (entity as any)[rule.field];
      const control = { value: fieldValue } as AbstractControl;
      
      rule.rules.forEach(validator => {
        const validationResult = validator(control);
        if (validationResult) {
          errors[rule.field] = rule.message || this.getErrorMessage(rule.field, validationResult);
        }
      });
    });
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}