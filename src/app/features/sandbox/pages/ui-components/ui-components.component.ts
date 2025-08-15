import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { TaButtonComponent, TaTextComponent, TitleComponent, LogoComponent, PictureInfoMessageComponent, ToastComponent, EToast } from '@ta/ui';

@Component({
  selector: 'app-ui-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    TaButtonComponent,
    TaTextComponent,
    TitleComponent,
    LogoComponent,
    PictureInfoMessageComponent,
    ToastComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants UI</h1>
      </div>

      <div class="components-container">
        <!-- Boutons -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Boutons</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Boutons</h4>
              <ta-button type="primary" (action)="onAction('Bouton Primary clicked')">
                Bouton Primary
              </ta-button>
              <ta-button type="secondary" (action)="onAction('Bouton Secondary clicked')">
                Bouton Secondary
              </ta-button>
              <ta-button type="danger" (action)="onAction('Bouton Danger clicked')">
                Bouton Danger
              </ta-button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Tailles de Boutons</h4>
              <ta-button size="small" type="primary" (action)="onAction('Small button clicked')">
                Small
              </ta-button>
              <ta-button size="medium" type="primary" (action)="onAction('Medium button clicked')">
                Medium
              </ta-button>
              <ta-button size="large" type="primary" (action)="onAction('Large button clicked')">
                Large
              </ta-button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>États de Boutons</h4>
              <ta-button state="classic" type="primary" (action)="onAction('Classic button clicked')">
                Bouton Actif
              </ta-button>
              <ta-button state="disabled" type="primary">
                Bouton Désactivé
              </ta-button>
              <ta-button state="inactive" type="primary">
                Bouton Inactif
              </ta-button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Options de Boutons</h4>
              <ta-button type="primary" [options]="{circular: true}" (action)="onAction('Circular button clicked')">
                Circular
              </ta-button>
              <ta-button type="secondary" [options]="{border: true}" (action)="onAction('Border button clicked')">
                Avec Bordure
              </ta-button>
              <ta-button type="primary" [options]="{class: 'custom-class'}" (action)="onAction('Custom class button clicked')">
                Classe Custom
              </ta-button>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Texte et Titres -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Texte et Titres</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Titres</h4>
              <ta-title [level]="1">Titre Principal (H1)</ta-title>
              <ta-title [level]="2">Sous-titre (H2)</ta-title>
              <ta-title [level]="3">Titre de section (H3)</ta-title>
              <ta-title [level]="4">Titre de sous-section (H4)</ta-title>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Titres avec Options</h4>
              <ta-title [level]="2" [isTheme]="true">Titre avec thème</ta-title>
              <ta-title [level]="3" [isBold]="true">Titre en gras</ta-title>
              <ta-title [level]="2" [isTheme]="true" [isBold]="true">Titre thème + gras</ta-title>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Composant Texte</h4>
              <ta-text size="sm">Texte petit (sm)</ta-text>
              <ta-text size="md">Texte moyen (md)</ta-text>
              <ta-text size="lg">Texte large (lg)</ta-text>
              <ta-text size="xl">Texte extra large (xl)</ta-text>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Texte avec Options</h4>
              <ta-text [isBold]="true">Texte en gras</ta-text>
              <ta-text color="primary">Texte couleur primaire</ta-text>
              <ta-text color="secondary">Texte couleur secondaire</ta-text>
              <ta-text size="lg" [isBold]="true" color="primary">Texte large, gras et primaire</ta-text>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Message Typé</h4>
              <p><em>Composant TypedMessage disponible mais nécessite une configuration spécifique.</em></p>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Logo et Messages -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Logo et Messages</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Logos</h4>
              <ta-logo></ta-logo>
              <ta-logo type="name"></ta-logo>
              <ta-logo type="full"></ta-logo>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Messages avec Icônes</h4>
              <ta-picture-info-message 
                icon="info" 
                text="Ceci est un message d'information"
                type="info">
              </ta-picture-info-message>
              <ta-picture-info-message 
                icon="warning" 
                text="Attention! Ceci est un avertissement"
                type="warning">
              </ta-picture-info-message>
              <ta-picture-info-message 
                icon="error" 
                text="Une erreur est survenue"
                type="danger">
              </ta-picture-info-message>
              <ta-picture-info-message 
                icon="check_circle" 
                text="Opération réussie avec succès"
                type="success">
              </ta-picture-info-message>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Toasts / Notifications</h4>
              <ta-toast [code]="EToast.information">Message d'information</ta-toast>
              <ta-toast [code]="EToast.success">Message de succès</ta-toast>
              <ta-toast [code]="EToast.warning">Message d'avertissement</ta-toast>
              <ta-toast [code]="EToast.error">Message d'erreur</ta-toast>
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

    .component-demo > * {
      margin: 0.5rem;
    }

    .component-demo ta-button {
      margin: 0.5rem;
      display: inline-block;
    }

    .component-demo ta-text {
      display: block;
      margin: 0.5rem 0;
    }

    .component-demo ta-title {
      display: block;
      margin: 1rem 0;
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

    ta-logo {
      margin: 1rem;
      display: inline-block;
    }

    ta-picture-info-message {
      margin: 0.5rem 0;
      display: block;
    }

    ta-toast {
      margin: 0.5rem 0;
      display: block;
    }
  `]
})
export class UiComponentsComponent {
  actionLog: Array<{timestamp: Date, message: string}> = [];
  
  // Expose EToast pour le template
  EToast = EToast;

  onAction(message: string) {
    this.actionLog.unshift({
      timestamp: new Date(),
      message: message
    });
    
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
}