import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NotificationBoxComponent } from '@ta/notification';
import { NotificationInlineComponent } from '@ta/notification';
import { NotificationService } from '@ta/notification';

@Component({
  selector: 'app-notification-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    NotificationBoxComponent,
    NotificationInlineComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants de Notification</h1>
      </div>

      <div class="components-container">
        <!-- Notifications Box (Popup) -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Notifications Popup</mat-card-title>
            <mat-card-subtitle>Notifications affichées en overlay</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Tester les Notifications Popup</h4>
              
              <div class="notification-controls">
                <mat-form-field appearance="outline">
                  <mat-label>Type de notification</mat-label>
                  <mat-select [(value)]="selectedNotificationType">
                    <mat-option value="success">Succès</mat-option>
                    <mat-option value="error">Erreur</mat-option>
                    <mat-option value="warning">Avertissement</mat-option>
                    <mat-option value="info">Information</mat-option>
                  </mat-select>
                </mat-form-field>

                <button mat-raised-button color="primary" (click)="showPopupNotification()">
                  Afficher Notification Popup
                </button>
              </div>

              <div class="notification-examples">
                <lib-notification-box
                  *ngIf="showSuccessPopup"
                  type="success"
                  title="Succès !"
                  message="L'opération s'est déroulée avec succès."
                  [autoClose]="true"
                  [duration]="5000"
                  (close)="showSuccessPopup = false">
                </lib-notification-box>

                <lib-notification-box
                  *ngIf="showErrorPopup"
                  type="error"
                  title="Erreur"
                  message="Une erreur s'est produite lors du traitement."
                  [autoClose]="false"
                  (close)="showErrorPopup = false">
                </lib-notification-box>

                <lib-notification-box
                  *ngIf="showWarningPopup"
                  type="warning"
                  title="Attention"
                  message="Cette action nécessite votre confirmation."
                  [autoClose]="true"
                  [duration]="7000"
                  (close)="showWarningPopup = false">
                </lib-notification-box>

                <lib-notification-box
                  *ngIf="showInfoPopup"
                  type="info"
                  title="Information"
                  message="Nouvelle fonctionnalité disponible."
                  [autoClose]="true"
                  [duration]="4000"
                  (close)="showInfoPopup = false">
                </lib-notification-box>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Notifications Inline -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Notifications Inline</mat-card-title>
            <mat-card-subtitle>Notifications intégrées dans le contenu</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Notifications Intégrées</h4>
              
              <div class="inline-notifications">
                <lib-notification-inline
                  type="success"
                  message="Formulaire enregistré avec succès."
                  [closable]="true">
                </lib-notification-inline>

                <lib-notification-inline
                  type="error"
                  message="Erreur de validation : Veuillez vérifier les champs obligatoires."
                  [closable]="true">
                </lib-notification-inline>

                <lib-notification-inline
                  type="warning"
                  message="Votre session expire dans 5 minutes."
                  [closable]="false">
                </lib-notification-inline>

                <lib-notification-inline
                  type="info"
                  message="Nouvelle mise à jour disponible."
                  [closable]="true">
                </lib-notification-inline>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Notifications Personnalisées</h4>
              
              <lib-notification-inline
                type="success"
                title="Téléchargement terminé"
                message="Le fichier 'document.pdf' a été téléchargé avec succès."
                icon="download"
                [closable]="true">
              </lib-notification-inline>

              <lib-notification-inline
                type="warning"
                title="Espace de stockage"
                message="Vous avez utilisé 85% de votre espace de stockage."
                icon="storage"
                [closable]="true"
                actionText="Gérer l'espace"
                (actionClick)="onNotificationAction('storage')">
              </lib-notification-inline>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Service de Notifications -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Service de Notifications</mat-card-title>
            <mat-card-subtitle>Utilisation programmatique</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Notifications via Service</h4>
              
              <div class="service-controls">
                <button mat-button color="primary" (click)="triggerServiceNotification('success')">
                  <mat-icon>check_circle</mat-icon>
                  Succès via Service
                </button>

                <button mat-button color="warn" (click)="triggerServiceNotification('error')">
                  <mat-icon>error</mat-icon>
                  Erreur via Service
                </button>

                <button mat-button color="accent" (click)="triggerServiceNotification('warning')">
                  <mat-icon>warning</mat-icon>
                  Avertissement via Service
                </button>

                <button mat-button (click)="triggerServiceNotification('info')">
                  <mat-icon>info</mat-icon>
                  Info via Service
                </button>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Notifications avec Actions</h4>
              
              <button mat-raised-button color="primary" (click)="showActionNotification()">
                Notification avec Actions
              </button>
              
              <button mat-raised-button color="accent" (click)="showProgressNotification()">
                Notification de Progression
              </button>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Actions Log -->
        <mat-card class="component-section" *ngIf="actionLog.length > 0">
          <mat-card-header>
            <mat-card-title>Log des Actions</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="action-log">
              <div *ngFor="let action of actionLog" class="log-entry">
                <span class="timestamp">{{ action.timestamp | date:'HH:mm:ss' }}</span>
                <span class="message">{{ action.message }}</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .sandbox-page {
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    .page-header h1 {
      margin: 0;
      color: #1976d2;
    }

    .components-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .component-section {
      width: 100%;
    }

    .component-demo {
      margin: 1rem 0;
    }

    .component-demo h4 {
      margin-bottom: 1rem;
      color: #333;
    }

    .notification-controls {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .notification-controls mat-form-field {
      min-width: 200px;
    }

    .notification-examples {
      position: relative;
      min-height: 100px;
    }

    .inline-notifications {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .service-controls {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .service-controls button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .action-log {
      max-height: 200px;
      overflow-y: auto;
      background-color: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
    }

    .log-entry {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }

    .timestamp {
      color: #666;
      font-size: 0.9rem;
      min-width: 80px;
    }

    .message {
      color: #333;
    }

    mat-divider {
      margin: 1rem 0;
    }
  `]
})
export class NotificationComponentsComponent {
  private notificationService = inject(NotificationService);
  
  selectedNotificationType = 'success';
  showSuccessPopup = false;
  showErrorPopup = false;
  showWarningPopup = false;
  showInfoPopup = false;
  actionLog: Array<{timestamp: Date, message: string}> = [];

  showPopupNotification() {
    this.resetPopups();
    
    switch (this.selectedNotificationType) {
      case 'success':
        this.showSuccessPopup = true;
        break;
      case 'error':
        this.showErrorPopup = true;
        break;
      case 'warning':
        this.showWarningPopup = true;
        break;
      case 'info':
        this.showInfoPopup = true;
        break;
    }
    
    this.logAction(`Notification popup ${this.selectedNotificationType} affichée`);
  }

  triggerServiceNotification(type: string) {
    const messages = {
      success: 'Opération réussie !',
      error: 'Une erreur est survenue.',
      warning: 'Attention requise.',
      info: 'Nouvelle information disponible.'
    };

    this.notificationService.show({
      type: type as any,
      message: messages[type as keyof typeof messages],
      duration: 5000
    });

    this.logAction(`Notification service ${type} déclenchée`);
  }

  showActionNotification() {
    this.notificationService.show({
      type: 'info',
      title: 'Confirmation requise',
      message: 'Voulez-vous vraiment supprimer cet élément ?',
      actions: [
        {
          text: 'Confirmer',
          action: () => this.logAction('Action confirmée')
        },
        {
          text: 'Annuler',
          action: () => this.logAction('Action annulée')
        }
      ]
    });

    this.logAction('Notification avec actions affichée');
  }

  showProgressNotification() {
    this.notificationService.show({
      type: 'info',
      title: 'Traitement en cours',
      message: 'Veuillez patienter...',
      showProgress: true,
      duration: 0
    });

    this.logAction('Notification de progression affichée');
  }

  onNotificationAction(action: string) {
    this.logAction(`Action notification: ${action}`);
  }

  private resetPopups() {
    this.showSuccessPopup = false;
    this.showErrorPopup = false;
    this.showWarningPopup = false;
    this.showInfoPopup = false;
  }

  private logAction(message: string) {
    this.actionLog.unshift({
      timestamp: new Date(),
      message: message
    });
    
    if (this.actionLog.length > 15) {
      this.actionLog = this.actionLog.slice(0, 15);
    }
  }
}