import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { InputComponent } from '@ta/wysiswyg';
import { BlockTextComponent } from '@ta/wysiswyg';

@Component({
  selector: 'app-wysiwyg-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatTabsModule,
    InputComponent,
    BlockTextComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants WYSIWYG</h1>
      </div>

      <div class="components-container">
        <!-- Éditeur WYSIWYG Principal -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Éditeur WYSIWYG</mat-card-title>
            <mat-card-subtitle>Éditeur de texte enrichi basé sur Editor.js</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Éditeur Principal</h4>
              
              <lib-input 
                [data]="editorData"
                [config]="editorConfig"
                placeholder="Commencez à écrire votre contenu..."
                (dataChange)="onEditorDataChange($event)"
                (ready)="onEditorReady($event)">
              </lib-input>

              <div class="editor-actions">
                <button mat-button (click)="clearEditor()">
                  <mat-icon>clear</mat-icon>
                  Effacer
                </button>
                <button mat-button (click)="loadSampleContent()">
                  <mat-icon>article</mat-icon>
                  Charger du contenu d'exemple
                </button>
                <button mat-button (click)="getEditorData()">
                  <mat-icon>data_object</mat-icon>
                  Récupérer les données
                </button>
                <button mat-button (click)="saveContent()">
                  <mat-icon>save</mat-icon>
                  Sauvegarder
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Visualisation du Contenu -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Rendu du Contenu</mat-card-title>
            <mat-card-subtitle>Affichage en lecture seule du contenu créé</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <mat-tab-group>
              <mat-tab label="Aperçu">
                <div class="content-preview">
                  <lib-block-text 
                    [data]="editorData"
                    [readOnly]="true">
                  </lib-block-text>
                </div>
              </mat-tab>
              
              <mat-tab label="Données JSON">
                <div class="json-view">
                  <pre>{{ editorData | json }}</pre>
                </div>
              </mat-tab>
              
              <mat-tab label="HTML">
                <div class="html-view">
                  <pre>{{ generatedHtml }}</pre>
                </div>
              </mat-tab>
            </mat-tab-group>
          </mat-card-content>
        </mat-card>

        <!-- Configuration de l'Éditeur -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Configuration de l'Éditeur</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Outils Disponibles</h4>
              
              <div class="tools-list">
                <div class="tool-item" *ngFor="let tool of availableTools">
                  <div class="tool-info">
                    <strong>{{ tool.name }}</strong>
                    <p>{{ tool.description }}</p>
                  </div>
                  <div class="tool-example">
                    <mat-icon>{{ tool.icon }}</mat-icon>
                  </div>
                </div>
              </div>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Configuration Actuelle</h4>
              
              <div class="config-display">
                <pre>{{ editorConfig | json }}</pre>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Modes d'Utilisation -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Modes d'Utilisation</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Mode Lecture Seule</h4>
              
              <lib-block-text 
                [data]="readOnlyData"
                [readOnly]="true"
                class="readonly-editor">
              </lib-block-text>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Éditeur Minimal</h4>
              
              <lib-input 
                [data]="minimalData"
                [config]="minimalConfig"
                placeholder="Éditeur avec outils limités..."
                (dataChange)="onMinimalDataChange($event)">
              </lib-input>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Éditeur Avancé</h4>
              
              <lib-input 
                [data]="advancedData"
                [config]="advancedConfig"
                placeholder="Éditeur avec tous les outils..."
                (dataChange)="onAdvancedDataChange($event)">
              </lib-input>
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

    .editor-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }

    .editor-actions button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .content-preview {
      padding: 1rem;
      min-height: 200px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin-top: 1rem;
    }

    .json-view, .html-view {
      padding: 1rem;
      margin-top: 1rem;
    }

    .json-view pre, .html-view pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .tools-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }

    .tool-item {
      display: flex;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      gap: 1rem;
    }

    .tool-info {
      flex: 1;
    }

    .tool-info strong {
      display: block;
      color: #1976d2;
      margin-bottom: 0.5rem;
    }

    .tool-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .tool-example {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background-color: #f5f5f5;
      border-radius: 50%;
    }

    .config-display {
      background-color: #f5f5f5;
      border-radius: 4px;
      overflow-x: auto;
    }

    .config-display pre {
      margin: 0;
      padding: 1rem;
      font-size: 0.9rem;
    }

    .readonly-editor {
      background-color: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 1rem;
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

    ::ng-deep .mat-mdc-tab-body-content {
      padding: 0 !important;
    }
  `]
})
export class WysiwygComponentsComponent {
  editorData: any = null;
  minimalData: any = null;
  advancedData: any = null;
  generatedHtml = '';
  actionLog: Array<{timestamp: Date, message: string}> = [];

  editorConfig = {
    tools: {
      header: {
        class: 'Header',
        config: {
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 2
        }
      },
      list: {
        class: 'List',
        inlineToolbar: true
      },
      quote: {
        class: 'Quote',
        inlineToolbar: true
      },
      table: {
        class: 'Table',
        inlineToolbar: true
      },
      delimiter: 'Delimiter',
      warning: {
        class: 'Warning',
        inlineToolbar: true
      }
    },
    placeholder: 'Commencez à écrire votre contenu...'
  };

  minimalConfig = {
    tools: {
      header: {
        class: 'Header',
        config: {
          levels: [2, 3],
          defaultLevel: 2
        }
      },
      list: {
        class: 'List',
        inlineToolbar: true
      }
    },
    placeholder: 'Éditeur minimal...'
  };

  advancedConfig = {
    tools: {
      header: {
        class: 'Header',
        config: {
          levels: [1, 2, 3, 4, 5, 6],
          defaultLevel: 2
        }
      },
      list: {
        class: 'List',
        inlineToolbar: true
      },
      quote: {
        class: 'Quote',
        inlineToolbar: true
      },
      table: {
        class: 'Table',
        inlineToolbar: true
      },
      delimiter: 'Delimiter',
      warning: {
        class: 'Warning',
        inlineToolbar: true
      }
    },
    placeholder: 'Éditeur avancé avec tous les outils...'
  };

  readOnlyData = {
    time: Date.now(),
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Contenu en Lecture Seule',
          level: 2
        }
      },
      {
        type: 'paragraph',
        data: {
          text: 'Ceci est un exemple de contenu affiché en mode lecture seule. Vous ne pouvez pas modifier ce contenu.'
        }
      },
      {
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            'Premier élément de la liste',
            'Deuxième élément',
            'Troisième élément'
          ]
        }
      }
    ]
  };

  availableTools = [
    {
      name: 'Header',
      description: 'Créer des titres de différents niveaux (H1 à H6)',
      icon: 'title'
    },
    {
      name: 'List',
      description: 'Créer des listes à puces ou numérotées',
      icon: 'format_list_bulleted'
    },
    {
      name: 'Quote',
      description: 'Insérer des citations ou des blocs de citation',
      icon: 'format_quote'
    },
    {
      name: 'Table',
      description: 'Créer et modifier des tableaux',
      icon: 'table_chart'
    },
    {
      name: 'Delimiter',
      description: 'Insérer des séparateurs visuels',
      icon: 'horizontal_rule'
    },
    {
      name: 'Warning',
      description: 'Créer des blocs d\'avertissement',
      icon: 'warning'
    }
  ];

  onEditorDataChange(data: any) {
    this.editorData = data;
    this.generateHtml();
    this.logAction('Contenu de l\'éditeur principal modifié');
  }

  onMinimalDataChange(data: any) {
    this.minimalData = data;
    this.logAction('Contenu de l\'éditeur minimal modifié');
  }

  onAdvancedDataChange(data: any) {
    this.advancedData = data;
    this.logAction('Contenu de l\'éditeur avancé modifié');
  }

  onEditorReady(editor: any) {
    this.logAction('Éditeur initialisé et prêt');
  }

  clearEditor() {
    this.editorData = null;
    this.generatedHtml = '';
    this.logAction('Éditeur effacé');
  }

  loadSampleContent() {
    this.editorData = {
      time: Date.now(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Contenu d\'Exemple',
            level: 1
          }
        },
        {
          type: 'paragraph',
          data: {
            text: 'Ceci est un paragraphe d\'exemple avec du <b>texte en gras</b> et du <i>texte en italique</i>.'
          }
        },
        {
          type: 'header',
          data: {
            text: 'Liste des Fonctionnalités',
            level: 2
          }
        },
        {
          type: 'list',
          data: {
            style: 'unordered',
            items: [
              'Édition de texte riche',
              'Insertion d\'images',
              'Création de tableaux',
              'Blocs de citation',
              'Et bien plus encore...'
            ]
          }
        },
        {
          type: 'quote',
          data: {
            text: 'L\'éditeur WYSIWYG permet de créer du contenu riche facilement.',
            caption: 'Documentation Techatome'
          }
        },
        {
          type: 'delimiter',
          data: {}
        },
        {
          type: 'warning',
          data: {
            title: 'Note Importante',
            message: 'Assurez-vous de sauvegarder votre travail régulièrement.'
          }
        }
      ]
    };
    this.generateHtml();
    this.logAction('Contenu d\'exemple chargé');
  }

  getEditorData() {
    console.log('Données de l\'éditeur:', this.editorData);
    this.logAction('Données de l\'éditeur récupérées (voir console)');
  }

  saveContent() {
    const content = JSON.stringify(this.editorData, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'editor-content.json';
    a.click();
    window.URL.revokeObjectURL(url);
    this.logAction('Contenu sauvegardé en fichier JSON');
  }

  private generateHtml() {
    if (!this.editorData || !this.editorData.blocks) {
      this.generatedHtml = '';
      return;
    }

    let html = '';
    this.editorData.blocks.forEach((block: any) => {
      switch (block.type) {
        case 'header':
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>\n`;
          break;
        case 'paragraph':
          html += `<p>${block.data.text}</p>\n`;
          break;
        case 'list':
          const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
          html += `<${tag}>\n`;
          block.data.items.forEach((item: string) => {
            html += `  <li>${item}</li>\n`;
          });
          html += `</${tag}>\n`;
          break;
        case 'quote':
          html += `<blockquote>${block.data.text}`;
          if (block.data.caption) {
            html += `<cite>${block.data.caption}</cite>`;
          }
          html += `</blockquote>\n`;
          break;
        case 'delimiter':
          html += `<hr>\n`;
          break;
        case 'warning':
          html += `<div class="warning"><strong>${block.data.title}</strong><p>${block.data.message}</p></div>\n`;
          break;
      }
    });

    this.generatedHtml = html;
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