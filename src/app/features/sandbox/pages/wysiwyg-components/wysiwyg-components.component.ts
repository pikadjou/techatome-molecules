import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wysiwyg-components',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants WYSIWYG</h1>
      </div>

      <div class="components-container">
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Éditeur WYSIWYG</mat-card-title>
            <mat-card-subtitle>Section en cours de développement</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Les composants WYSIWYG sont en cours d'intégration dans le sandbox.</p>
            <p>Composants disponibles dans &#64;ta/wysiswyg :</p>
            <ul>
              <li>InputComponent - Éditeur de texte enrichi</li>
              <li>BlockTextComponent - Affichage de contenu enrichi</li>
            </ul>
            <p>Ces composants sont basés sur Editor.js et permettent la création et l'affichage de contenu riche.</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .sandbox-page { padding: 1rem; max-width: 1200px; margin: 0 auto; }
    .page-header { display: flex; align-items: center; margin-bottom: 2rem; gap: 1rem; }
    .page-header h1 { margin: 0; color: #1976d2; }
    .components-container { display: flex; flex-direction: column; gap: 2rem; }
  `]
})
export class WysiwygComponentsComponent {}