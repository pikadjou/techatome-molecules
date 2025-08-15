import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TaNotificationService, ENotificationCode } from '@ta/notification';

export interface ErrorContext {
  operation?: string;
  entity?: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private readonly _notificationService = inject(TaNotificationService);

  handleError(error: HttpErrorResponse, context?: ErrorContext): void {
    const errorMessage = this.getErrorMessage(error, context);
    this._notificationService.addNotification(errorMessage, ENotificationCode.error);
    
    // Log l'erreur pour le débogage
    console.error(`Error in ${context?.operation || 'unknown operation'}:`, error);
  }

  handleSuccess(context?: ErrorContext): void {
    const operation = context?.operation || 'operation';
    const entity = context?.entity || 'element';
    
    const successMessage = this.getSuccessMessage(operation, entity);
    this._notificationService.addNotification(successMessage, ENotificationCode.success);
  }

  private getErrorMessage(error: HttpErrorResponse, context?: ErrorContext): string {
    const entity = context?.entity || 'element';
    const operation = context?.operation || 'operation';

    // Messages d'erreur spécifiques selon le code HTTP
    switch (error.status) {
      case 400:
        return `notification.error.badRequest.${entity}`;
      case 401:
        return 'notification.error.unauthorized';
      case 403:
        return 'notification.error.forbidden';
      case 404:
        return `notification.error.notFound.${entity}`;
      case 409:
        return `notification.error.conflict.${entity}`;
      case 422:
        return `notification.error.validation.${entity}`;
      case 500:
        return 'notification.error.serverError';
      default:
        return `notification.error.${operation}.${entity}`;
    }
  }

  private getSuccessMessage(operation: string, entity: string): string {
    const operationMap: Record<string, string> = {
      'create': 'created',
      'update': 'updated', 
      'delete': 'deleted',
      'fetch': 'loaded'
    };

    const mappedOperation = operationMap[operation] || operation;
    return `notification.success.${mappedOperation}.${entity}`;
  }
}