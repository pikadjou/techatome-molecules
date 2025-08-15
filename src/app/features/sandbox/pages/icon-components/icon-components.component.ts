import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { IconsComponent } from '@ta/icons';

@Component({
  selector: 'app-icon-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    IconsComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants d'Icônes</h1>
      </div>

      <div class="components-container">
        <!-- Test d'Icônes -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Test d'Icônes Personnalisées</mat-card-title>
            <mat-card-subtitle>Explorez la bibliothèque d'icônes Techatome</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Test d'Icône Individuelle</h4>
              
              <div class="icon-test-controls">
                <mat-form-field appearance="outline">
                  <mat-label>Nom de l'icône</mat-label>
                  <input matInput [(ngModel)]="testIconName" placeholder="Ex: home, user, settings">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Taille (px)</mat-label>
                  <input matInput type="number" [(ngModel)]="iconSize" placeholder="24">
                </mat-form-field>

                <mat-form-field appearance="outline">
                  <mat-label>Couleur</mat-label>
                  <input matInput [(ngModel)]="iconColor" placeholder="#000000">
                </mat-form-field>
              </div>

              <div class="icon-preview">
                <h5>Aperçu :</h5>
                <ta-icons 
                  [name]="testIconName" 
                  [size]="iconSize"
                  [color]="iconColor"
                  class="preview-icon">
                </ta-icons>
                <span class="icon-info">{{ testIconName }} ({{ iconSize }}px)</span>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Galerie d'Icônes Communes -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Icônes Communes</mat-card-title>
            <mat-card-subtitle>Collection d'icônes fréquemment utilisées</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <div class="icons-grid">
                <div *ngFor="let icon of commonIcons" class="icon-item" (click)="selectIcon(icon)">
                  <ta-icons [name]="icon" size="32"></ta-icons>
                  <span class="icon-name">{{ icon }}</span>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Icônes par Catégorie -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Icônes par Catégorie</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo" *ngFor="let category of iconCategories">
              <h4>{{ category.name }}</h4>
              <div class="icons-grid">
                <div *ngFor="let icon of category.icons" class="icon-item" (click)="selectIcon(icon)">
                  <ta-icons [name]="icon" size="28"></ta-icons>
                  <span class="icon-name">{{ icon }}</span>
                </div>
              </div>
              <mat-divider *ngIf="category !== iconCategories[iconCategories.length - 1]"></mat-divider>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Tailles et Variations -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Tailles et Variations</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Différentes Tailles</h4>
              <div class="size-demo">
                <div class="size-item">
                  <ta-icons name="star" size="16"></ta-icons>
                  <span>16px</span>
                </div>
                <div class="size-item">
                  <ta-icons name="star" size="24"></ta-icons>
                  <span>24px</span>
                </div>
                <div class="size-item">
                  <ta-icons name="star" size="32"></ta-icons>
                  <span>32px</span>
                </div>
                <div class="size-item">
                  <ta-icons name="star" size="48"></ta-icons>
                  <span>48px</span>
                </div>
                <div class="size-item">
                  <ta-icons name="star" size="64"></ta-icons>
                  <span>64px</span>
                </div>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Couleurs</h4>
              <div class="color-demo">
                <div class="color-item">
                  <ta-icons name="heart" size="32" color="#e74c3c"></ta-icons>
                  <span>Rouge</span>
                </div>
                <div class="color-item">
                  <ta-icons name="heart" size="32" color="#3498db"></ta-icons>
                  <span>Bleu</span>
                </div>
                <div class="color-item">
                  <ta-icons name="heart" size="32" color="#2ecc71"></ta-icons>
                  <span>Vert</span>
                </div>
                <div class="color-item">
                  <ta-icons name="heart" size="32" color="#f39c12"></ta-icons>
                  <span>Orange</span>
                </div>
                <div class="color-item">
                  <ta-icons name="heart" size="32" color="#9b59b6"></ta-icons>
                  <span>Violet</span>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Utilisation dans les Boutons -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Icônes dans l'Interface</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Boutons avec Icônes</h4>
              <div class="button-demo">
                <button mat-raised-button color="primary">
                  <ta-icons name="save" size="18"></ta-icons>
                  Sauvegarder
                </button>
                <button mat-raised-button color="accent">
                  <ta-icons name="edit" size="18"></ta-icons>
                  Modifier
                </button>
                <button mat-raised-button color="warn">
                  <ta-icons name="delete" size="18"></ta-icons>
                  Supprimer
                </button>
                <button mat-raised-button>
                  <ta-icons name="download" size="18"></ta-icons>
                  Télécharger
                </button>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Navigation avec Icônes</h4>
              <div class="nav-demo">
                <div class="nav-item">
                  <ta-icons name="home" size="20"></ta-icons>
                  <span>Accueil</span>
                </div>
                <div class="nav-item">
                  <ta-icons name="user" size="20"></ta-icons>
                  <span>Profil</span>
                </div>
                <div class="nav-item">
                  <ta-icons name="settings" size="20"></ta-icons>
                  <span>Paramètres</span>
                </div>
                <div class="nav-item">
                  <ta-icons name="help" size="20"></ta-icons>
                  <span>Aide</span>
                </div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Icône Sélectionnée -->
        <mat-card class="component-section" *ngIf="selectedIcon">
          <mat-card-header>
            <mat-card-title>Icône Sélectionnée</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="selected-icon-info">
              <ta-icons [name]="selectedIcon" size="48"></ta-icons>
              <div class="icon-details">
                <h4>{{ selectedIcon }}</h4>
                <p>Code d'utilisation :</p>
                <code>&lt;ta-icons name="{{ selectedIcon }}" size="24"&gt;&lt;/ta-icons&gt;</code>
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

    .icon-test-controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .icon-test-controls mat-form-field {
      min-width: 150px;
    }

    .icon-preview {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background-color: #f5f5f5;
      border-radius: 4px;
    }

    .icon-preview h5 {
      margin: 0;
    }

    .preview-icon {
      padding: 0.5rem;
      background-color: white;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    .icon-info {
      font-size: 0.9rem;
      color: #666;
    }

    .icons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      margin: 1rem 0;
    }

    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .icon-item:hover {
      background-color: #f5f5f5;
      border-color: #1976d2;
      transform: translateY(-2px);
    }

    .icon-name {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      text-align: center;
      color: #666;
    }

    .size-demo {
      display: flex;
      gap: 2rem;
      align-items: end;
      flex-wrap: wrap;
    }

    .size-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .color-demo {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .color-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .button-demo {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .button-demo button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-demo {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .nav-item:hover {
      background-color: #f5f5f5;
    }

    .selected-icon-info {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem;
      background-color: #f5f5f5;
      border-radius: 8px;
    }

    .icon-details h4 {
      margin: 0 0 0.5rem 0;
      color: #1976d2;
    }

    .icon-details p {
      margin: 0.5rem 0;
      font-size: 0.9rem;
      color: #666;
    }

    .icon-details code {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 0.5rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }

    mat-divider {
      margin: 1rem 0;
    }
  `]
})
export class IconComponentsComponent {
  testIconName = 'home';
  iconSize = 24;
  iconColor = '#000000';
  selectedIcon = '';

  commonIcons = [
    'home', 'user', 'settings', 'search', 'heart', 'star', 'bell', 'mail',
    'phone', 'calendar', 'clock', 'map', 'camera', 'video', 'music', 'image'
  ];

  iconCategories = [
    {
      name: 'Navigation',
      icons: ['home', 'back', 'forward', 'up', 'down', 'menu', 'close', 'more']
    },
    {
      name: 'Actions',
      icons: ['save', 'edit', 'delete', 'copy', 'paste', 'cut', 'undo', 'redo']
    },
    {
      name: 'Communication',
      icons: ['mail', 'phone', 'chat', 'video-call', 'share', 'send', 'receive']
    },
    {
      name: 'Média',
      icons: ['play', 'pause', 'stop', 'record', 'volume', 'mute', 'camera', 'gallery']
    },
    {
      name: 'Interface',
      icons: ['settings', 'help', 'info', 'warning', 'error', 'success', 'loading']
    },
    {
      name: 'Fichiers',
      icons: ['folder', 'file', 'download', 'upload', 'attachment', 'archive', 'document']
    }
  ];

  selectIcon(iconName: string) {
    this.selectedIcon = iconName;
    this.testIconName = iconName;
  }
}