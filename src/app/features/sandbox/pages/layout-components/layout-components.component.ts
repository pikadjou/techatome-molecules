import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { CardComponent } from '@ta/ui';
import { CardHeaderComponent } from '@ta/ui';
import { CardTitleComponent } from '@ta/ui';
import { CardSubtitleComponent } from '@ta/ui';
import { CardContentComponent } from '@ta/ui';
import { CardImageComponent } from '@ta/ui';
import { CardCtaComponent } from '@ta/ui';
import { CardTagComponent } from '@ta/ui';
import { LayoutHeaderComponent } from '@ta/ui';
import { LayoutHeaderDefaultComponent } from '@ta/ui';
import { LayoutNavComponent } from '@ta/ui';
import { LayoutContentComponent } from '@ta/ui';
import { LayoutPageComponent } from '@ta/ui';
import { LayoutTitleComponent } from '@ta/ui';
import { LayoutWithNavComponent } from '@ta/ui';
import { LoaderComponent } from '@ta/ui';
import { EmptyComponent } from '@ta/ui';
import { ErrorComponent } from '@ta/ui';
import { PlaceholderComponent } from '@ta/ui';
import { SwiperLightComponent } from '@ta/ui';

@Component({
  selector: 'app-layout-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardContentComponent,
    CardImageComponent,
    CardCtaComponent,
    CardTagComponent,
    LayoutHeaderComponent,
    LayoutHeaderDefaultComponent,
    LayoutNavComponent,
    LayoutContentComponent,
    LayoutPageComponent,
    LayoutTitleComponent,
    LayoutWithNavComponent,
    LoaderComponent,
    EmptyComponent,
    ErrorComponent,
    PlaceholderComponent,
    SwiperLightComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants de Layout</h1>
      </div>

      <div class="components-container">
        <!-- Cartes -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Système de Cartes</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Carte Simple</h4>
              <lib-card class="demo-card">
                <lib-card-header>
                  <lib-card-title title="Titre de la carte"></lib-card-title>
                  <lib-card-subtitle subtitle="Sous-titre explicatif"></lib-card-subtitle>
                </lib-card-header>
                <lib-card-content>
                  <p>Contenu principal de la carte avec du texte explicatif.</p>
                </lib-card-content>
                <lib-card-cta 
                  primaryText="Action Principale" 
                  secondaryText="Action Secondaire"
                  (primaryClick)="onCardAction('Primary')"
                  (secondaryClick)="onCardAction('Secondary')">
                </lib-card-cta>
              </lib-card>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Carte avec Image et Tag</h4>
              <lib-card class="demo-card">
                <lib-card-image 
                  src="/assets/demo-image.jpg" 
                  alt="Image de démonstration">
                </lib-card-image>
                <lib-card-header>
                  <lib-card-tag text="Nouveau" color="primary"></lib-card-tag>
                  <lib-card-title title="Carte avec Image"></lib-card-title>
                  <lib-card-subtitle subtitle="Exemple avec image d'en-tête"></lib-card-subtitle>
                </lib-card-header>
                <lib-card-content>
                  <p>Cette carte démontre l'utilisation d'une image et d'un tag.</p>
                </lib-card-content>
              </lib-card>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- En-têtes et Navigation -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>En-têtes et Navigation</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>En-tête par Défaut</h4>
              <lib-layout-header-default 
                title="Application Techatome"
                [showMenu]="true"
                [showProfile]="true">
              </lib-layout-header-default>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Navigation</h4>
              <lib-layout-nav [menuItems]="navItems"></lib-layout-nav>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Titre de Page</h4>
              <lib-layout-title 
                title="Page de Démonstration"
                subtitle="Testez tous les composants de layout">
              </lib-layout-title>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Conteneurs et États -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Conteneurs et États</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>État de Chargement</h4>
              <lib-loader 
                message="Chargement en cours..."
                [show]="showLoader">
              </lib-loader>
              <button mat-button (click)="toggleLoader()">
                {{ showLoader ? 'Arrêter' : 'Démarrer' }} le chargement
              </button>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>État Vide</h4>
              <lib-empty 
                title="Aucun élément trouvé"
                message="Il n'y a actuellement aucun élément à afficher."
                icon="inbox"
                [showAction]="true"
                actionText="Ajouter un élément"
                (actionClick)="onEmptyAction()">
              </lib-empty>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>État d'Erreur</h4>
              <lib-error 
                title="Une erreur s'est produite"
                message="Impossible de charger les données. Veuillez réessayer."
                [showRetry]="true"
                (retryClick)="onRetry()">
              </lib-error>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Placeholder</h4>
              <lib-placeholder 
                [config]="placeholderConfig">
              </lib-placeholder>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Layout Complet -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Layout Complet</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Page avec Navigation</h4>
              <lib-layout-with-nav [menuItems]="navItems">
                <lib-layout-content>
                  <lib-layout-title 
                    title="Contenu Principal"
                    subtitle="Exemple de mise en page complète">
                  </lib-layout-title>
                  <p>Contenu de la page principale avec navigation latérale.</p>
                </lib-layout-content>
              </lib-layout-with-nav>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Carrousel Léger</h4>
              <lib-swiper-light [items]="carouselItems"></lib-swiper-light>
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

    .demo-card {
      max-width: 400px;
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
  `]
})
export class LayoutComponentsComponent {
  showLoader = false;
  actionLog: Array<{timestamp: Date, message: string}> = [];

  navItems = [
    { label: 'Accueil', route: '/sandbox', icon: 'home' },
    { label: 'Composants UI', route: '/sandbox/ui-components', icon: 'widgets' },
    { label: 'Formulaires', route: '/sandbox/form-components', icon: 'input' },
    { label: 'Layout', route: '/sandbox/layout-components', icon: 'view_quilt' }
  ];

  placeholderConfig = {
    lines: 3,
    avatar: true,
    image: true,
    animated: true
  };

  carouselItems = [
    { title: 'Slide 1', content: 'Premier élément du carrousel' },
    { title: 'Slide 2', content: 'Deuxième élément du carrousel' },
    { title: 'Slide 3', content: 'Troisième élément du carrousel' }
  ];

  toggleLoader() {
    this.showLoader = !this.showLoader;
    this.logAction(`Loader ${this.showLoader ? 'activé' : 'désactivé'}`);
  }

  onCardAction(action: string) {
    this.logAction(`Action carte: ${action}`);
  }

  onEmptyAction() {
    this.logAction('Action état vide cliquée');
  }

  onRetry() {
    this.logAction('Retry action cliquée');
  }

  private logAction(message: string) {
    this.actionLog.unshift({
      timestamp: new Date(),
      message: message
    });
    
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
}