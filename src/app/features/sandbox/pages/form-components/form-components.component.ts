import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { TextBoxComponent } from '@ta/form-input';
import { TextareaComponent } from '@ta/form-input';
import { DropdownComponent } from '@ta/form-input';
import { CheckboxComponent } from '@ta/form-input';
import { RadioComponent } from '@ta/form-input';
import { ToggleComponent } from '@ta/form-input';
import { LabelComponent } from '@ta/form-input';
import { WysiwygComponent } from '@ta/form-input';
import { FormComponent } from '@ta/form-basic';

@Component({
  selector: 'app-form-components',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule,
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    TextBoxComponent,
    TextareaComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    ToggleComponent,
    LabelComponent,
    WysiwygComponent,
    FormComponent
  ],
  template: `
    <div class="sandbox-page">
      <div class="page-header">
        <button mat-icon-button routerLink="/sandbox">
          <mat-icon>arrow_back</mat-icon>
        </button>
        <h1>Composants de Formulaire</h1>
      </div>

      <div class="components-container">
        <!-- Champs de Texte -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Champs de Texte</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Champ de Texte Simple</h4>
              <lib-label text="Nom d'utilisateur" required="true"></lib-label>
              <lib-text-box 
                placeholder="Entrez votre nom"
                [value]="formData.username"
                (valueChange)="updateFormData('username', $event)">
              </lib-text-box>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Champ Email</h4>
              <lib-label text="Adresse email"></lib-label>
              <lib-text-box 
                type="email"
                placeholder="exemple@email.com"
                [value]="formData.email"
                (valueChange)="updateFormData('email', $event)">
              </lib-text-box>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Zone de Texte</h4>
              <lib-label text="Description"></lib-label>
              <lib-textarea 
                placeholder="Entrez une description détaillée..."
                rows="4"
                [value]="formData.description"
                (valueChange)="updateFormData('description', $event)">
              </lib-textarea>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Sélecteurs -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Sélecteurs</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <h4>Liste Déroulante</h4>
              <lib-label text="Pays"></lib-label>
              <lib-dropdown 
                [options]="countryOptions"
                placeholder="Sélectionnez un pays"
                [value]="formData.country"
                (valueChange)="updateFormData('country', $event)">
              </lib-dropdown>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Boutons Radio</h4>
              <lib-label text="Genre"></lib-label>
              <lib-radio 
                [options]="genderOptions"
                [value]="formData.gender"
                (valueChange)="updateFormData('gender', $event)">
              </lib-radio>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Cases à Cocher</h4>
              <lib-checkbox 
                label="J'accepte les conditions d'utilisation"
                [checked]="formData.acceptTerms"
                (checkedChange)="updateFormData('acceptTerms', $event)">
              </lib-checkbox>
              <lib-checkbox 
                label="Je souhaite recevoir la newsletter"
                [checked]="formData.newsletter"
                (checkedChange)="updateFormData('newsletter', $event)">
              </lib-checkbox>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Interrupteurs</h4>
              <lib-toggle 
                label="Notifications activées"
                [checked]="formData.notifications"
                (checkedChange)="updateFormData('notifications', $event)">
              </lib-toggle>
              <lib-toggle 
                label="Mode sombre"
                [checked]="formData.darkMode"
                (checkedChange)="updateFormData('darkMode', $event)">
              </lib-toggle>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Éditeur Riche -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Éditeur de Texte Enrichi</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <lib-label text="Contenu"></lib-label>
              <lib-wysiswyg 
                [data]="formData.richContent"
                (dataChange)="updateFormData('richContent', $event)">
              </lib-wysiswyg>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Formulaire Complet -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Formulaire Complet</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <lib-form 
                [config]="formConfig"
                (formSubmit)="onFormSubmit($event)">
              </lib-form>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Données du Formulaire -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>État du Formulaire</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <pre class="form-data">{{ formData | json }}</pre>
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
      margin: 0.5rem 0;
      display: block;
    }

    .form-data {
      background-color: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      font-size: 0.9rem;
      overflow-x: auto;
    }

    mat-divider {
      margin: 1rem 0;
    }
  `]
})
export class FormComponentsComponent {
  formData: any = {
    username: '',
    email: '',
    description: '',
    country: '',
    gender: '',
    acceptTerms: false,
    newsletter: false,
    notifications: true,
    darkMode: false,
    richContent: null
  };

  countryOptions = [
    { value: 'fr', label: 'France' },
    { value: 'us', label: 'États-Unis' },
    { value: 'ca', label: 'Canada' },
    { value: 'de', label: 'Allemagne' },
    { value: 'es', label: 'Espagne' }
  ];

  genderOptions = [
    { value: 'male', label: 'Homme' },
    { value: 'female', label: 'Femme' },
    { value: 'other', label: 'Autre' }
  ];

  formConfig = {
    fields: [
      {
        type: 'text',
        name: 'firstName',
        label: 'Prénom',
        required: true,
        placeholder: 'Entrez votre prénom'
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Nom',
        required: true,
        placeholder: 'Entrez votre nom'
      },
      {
        type: 'email',
        name: 'emailForm',
        label: 'Email',
        required: true,
        placeholder: 'votre@email.com'
      }
    ]
  };

  updateFormData(field: string, value: any) {
    this.formData = { ...this.formData, [field]: value };
  }

  onFormSubmit(data: any) {
    console.log('Formulaire soumis:', data);
    alert('Formulaire soumis avec succès! Voir la console pour les données.');
  }
}