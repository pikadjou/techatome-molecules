import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IconsComponent } from '@ta/icons';

@Component({
  selector: 'app-icon-components',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, IconsComponent],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants d'Icônes</h1>
      </div>

      <div class="components-container">
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Composant d'Icônes Techatome</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Le composant ta-icons est disponible pour afficher des icônes personnalisées.</p>
            
            <div class="icon-demo">
              <h4>Exemple d'utilisation :</h4>
              <ta-icons></ta-icons>
              <pre>&lt;ta-icons&gt;&lt;/ta-icons&gt;</pre>
            </div>
            
            <div class="icon-info">
              <p>Vous pouvez configurer les icônes via le service IconsService.</p>
              <p>Le composant utilise le sélecteur 'ta-icons' et peut être étendu avec des propriétés personnalisées.</p>
            </div>
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
    .icon-demo { margin: 1rem 0; }
    .icon-demo h4 { color: #333; }
    .icon-demo pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; }
    .icon-info p { margin: 0.5rem 0; }
  `]
})
export class IconComponentsComponent {}