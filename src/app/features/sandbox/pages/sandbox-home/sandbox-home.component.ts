import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sandbox-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="sandbox-home">
      <div class="header">
        <h1>🧪 Sandbox - Test des Composants</h1>
        <p>Explorez et testez tous les composants de votre bibliothèque Techatome</p>
      </div>

      <div class="component-grid">
        <mat-card class="component-card" routerLink="/sandbox/ui-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>widgets</mat-icon>
            <mat-card-title>Composants UI</mat-card-title>
            <mat-card-subtitle>Boutons, cartes, textes, logos...</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Testez les composants de base de l'interface utilisateur incluant les boutons, cartes, logos et éléments de texte.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="component-card" routerLink="/sandbox/form-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>input</mat-icon>
            <mat-card-title>Composants de Formulaire</mat-card-title>
            <mat-card-subtitle>Inputs, dropdowns, checkboxes...</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Découvrez tous les éléments de formulaire : champs de saisie, sélecteurs, cases à cocher et plus encore.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="component-card" routerLink="/sandbox/layout-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>view_quilt</mat-icon>
            <mat-card-title>Composants de Layout</mat-card-title>
            <mat-card-subtitle>Headers, navigation, conteneurs...</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Explorez les composants de mise en page pour structurer vos applications.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="component-card" routerLink="/sandbox/notification-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>notifications</mat-icon>
            <mat-card-title>Notifications</mat-card-title>
            <mat-card-subtitle>Toasts, alertes, messages...</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Testez les différents types de notifications et messages d'alerte.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="component-card" routerLink="/sandbox/icon-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>star</mat-icon>
            <mat-card-title>Icônes</mat-card-title>
            <mat-card-subtitle>Bibliothèque d'icônes personnalisées</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Parcourez la collection d'icônes disponibles dans votre application.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>

        <mat-card class="component-card" routerLink="/sandbox/wysiwyg-components">
          <mat-card-header>
            <mat-icon mat-card-avatar>edit</mat-icon>
            <mat-card-title>Éditeur WYSIWYG</mat-card-title>
            <mat-card-subtitle>Éditeur de texte enrichi</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Testez les fonctionnalités de l'éditeur de texte enrichi basé sur Editor.js.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>Explorer</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .sandbox-home {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #1976d2;
    }

    .header p {
      font-size: 1.2rem;
      color: #666;
    }

    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .component-card {
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      height: 100%;
    }

    .component-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .component-card mat-card-header {
      margin-bottom: 1rem;
    }

    .component-card mat-icon[mat-card-avatar] {
      background-color: #1976d2;
      color: white;
      font-size: 24px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    mat-card-title {
      font-size: 1.3rem;
      font-weight: 600;
    }

    mat-card-subtitle {
      color: #666;
      margin-top: 0.5rem;
    }

    mat-card-content p {
      line-height: 1.6;
      color: #555;
    }

    mat-card-actions {
      padding-top: 1rem;
    }

    mat-card-actions button {
      color: #1976d2;
    }
  `]
})
export class SandboxHomeComponent {}