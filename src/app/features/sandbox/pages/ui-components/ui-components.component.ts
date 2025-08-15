import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { TaButtonComponent, TaTextComponent, TaTitleComponent, ToastComponent, LogoComponent, PictureInfoMessageComponent, TypedMessageComponent } from '@ta/ui';

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
    TaTitleComponent,
    ToastComponent,
    LogoComponent,
    PictureInfoMessageComponent,
    TypedMessageComponent
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
              <h4>Bouton Simple</h4>
              <lib-button label="Bouton Primary" type="primary"></lib-button>
              <lib-button label="Bouton Secondary" type="secondary"></lib-button>
              <lib-button label="Bouton Disabled" type="primary" [disabled]="true"></lib-button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Bouton Double</h4>
              <lib-dual-button 
                primaryLabel="Confirmer" 
                secondaryLabel="Annuler"
                (primaryClick)="onAction('Primary clicked')"
                (secondaryClick)="onAction('Secondary clicked')">
              </lib-dual-button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Bouton d'Action</h4>
              <lib-action-button 
                [data]="{icon: 'save', label: 'Sauvegarder', type: 'primary'}"
                (actionClick)="onAction('Action button clicked')">
              </lib-action-button>
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
              <lib-title text="Titre Principal" level="h1"></lib-title>
              <lib-title text="Sous-titre" level="h2"></lib-title>
              <lib-title text="Titre de section" level="h3"></lib-title>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Texte</h4>
              <lib-text 
                content="Ceci est un exemple de texte standard avec le composant Text."
                type="paragraph">
              </lib-text>
              <lib-text 
                content="Texte en emphase"
                type="emphasis">
              </lib-text>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Message Typé</h4>
              <lib-typed-message 
                messages="['Bienvenue dans le sandbox!', 'Explorez tous les composants', 'Testez les fonctionnalités']"
                [typingSpeed]="100">
              </lib-typed-message>
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
              <h4>Logo</h4>
              <lib-logo 
                src="/assets/logo.png" 
                alt="Logo Techatome"
                width="150">
              </lib-logo>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Message avec Image</h4>
              <lib-picture-info-message
                title="Information importante"
                message="Ceci est un message informatif avec une image d'accompagnement."
                imageSrc="/assets/info-icon.png"
                imageAlt="Information">
              </lib-picture-info-message>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Toast</h4>
              <lib-toast 
                message="Message de succès!" 
                type="success"
                [show]="true">
              </lib-toast>
              <lib-toast 
                message="Message d'erreur!" 
                type="error"
                [show]="true">
              </lib-toast>
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
export class UiComponentsComponent {
  actionLog: Array<{timestamp: Date, message: string}> = [];

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