import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import {
  TextBoxComponent,
  TextareaComponent,
  DropdownComponent,
  CheckboxComponent,
  RadioComponent,
  ToggleComponent,
} from '@ta/form-input';
import { InputTextBox, InputTextarea, InputDropdown, InputCheckBox, InputRadio } from '@ta/form-model';
import { of } from 'rxjs';

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
              <ta-input-textbox [input]="usernameInput" (valueChanged)="onValueChange('username', $event)">
              </ta-input-textbox>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Champ Email</h4>
              <ta-input-textbox [input]="emailInput" (valueChanged)="onValueChange('email', $event)">
              </ta-input-textbox>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Champ Mot de Passe</h4>
              <ta-input-textbox [input]="passwordInput" (valueChanged)="onValueChange('password', $event)">
              </ta-input-textbox>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Zone de Texte -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>Zone de Texte</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="component-demo">
              <ta-input-textarea [input]="descriptionInput" (valueChanged)="onValueChange('description', $event)">
              </ta-input-textarea>
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
              <ta-input-dropdown [input]="countryInput" (valueChanged)="onValueChange('country', $event)">
              </ta-input-dropdown>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Boutons Radio</h4>
              <ta-input-radio [input]="genderInput" (valueChanged)="onValueChange('gender', $event)"> </ta-input-radio>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Cases à Cocher</h4>
              <ta-input-checkbox [input]="termsInput" (valueChanged)="onValueChange('terms', $event)">
              </ta-input-checkbox>
              <ta-input-checkbox [input]="newsletterInput" (valueChanged)="onValueChange('newsletter', $event)">
              </ta-input-checkbox>
            </div>

            <mat-divider></mat-divider>

            <div class="component-demo">
              <h4>Interrupteurs</h4>
              <ta-input-toggle [input]="notificationsInput" (valueChanged)="onValueChange('notifications', $event)">
              </ta-input-toggle>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- État du Formulaire -->
        <mat-card class="component-section">
          <mat-card-header>
            <mat-card-title>État du Formulaire</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="form-state">
              <h4>Valeurs actuelles :</h4>
              <pre>{{ formValues | json }}</pre>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
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

      .demo-form {
        max-width: 500px;
      }

      .form-group {
        margin-bottom: 1rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
      }

      .form-control {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }

      .form-control:focus {
        outline: none;
        border-color: #1976d2;
        box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
      }

      .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }

      .btn-primary {
        background-color: #1976d2;
        color: white;
      }

      .btn-primary:hover {
        background-color: #1565c0;
      }
    `,
  ],
})
export class FormComponentsComponent implements OnInit {
  formValues: any = {};

  // Input models
  usernameInput = new InputTextBox({
    key: 'username',
    label: "Nom d'utilisateur",
    type: 'text',
    value: '',
  });

  emailInput = new InputTextBox({
    key: 'email',
    label: 'Adresse email',
    type: 'email',
    value: '',
  });

  passwordInput = new InputTextBox({
    key: 'password',
    label: 'Mot de passe',
    type: 'password',
    value: '',
  });

  descriptionInput = new InputTextarea({
    key: 'description',
    label: 'Description',
    value: '',
  });

  countryInput = new InputDropdown({
    key: 'country',
    label: 'Pays',
    value: '',
    options: of([
      { id: 'fr', name: 'France' },
      { id: 'us', name: 'États-Unis' },
      { id: 'ca', name: 'Canada' },
      { id: 'de', name: 'Allemagne' },
    ]),
  });

  genderInput = new InputRadio({
    key: 'gender',
    label: 'Genre',
    value: '',
    options: of([
      { id: 'male', name: 'Homme' },
      { id: 'female', name: 'Femme' },
      { id: 'other', name: 'Autre' },
    ]),
  });

  termsInput = new InputCheckBox({
    key: 'terms',
    label: "J'accepte les conditions d'utilisation",
    value: false,
  });

  newsletterInput = new InputCheckBox({
    key: 'newsletter',
    label: 'Je souhaite recevoir la newsletter',
    value: false,
  });

  notificationsInput = new InputCheckBox({
    key: 'notifications',
    label: 'Notifications activées',
    value: true,
  });

  ngOnInit() {
    // Créer les FormControls pour chaque input
    this.usernameInput.createFormControl();
    this.emailInput.createFormControl();
    this.passwordInput.createFormControl();
    this.descriptionInput.createFormControl();
    this.countryInput.createFormControl();
    this.genderInput.createFormControl();
    this.termsInput.createFormControl();
    this.newsletterInput.createFormControl();
    this.notificationsInput.createFormControl();
  }

  onValueChange(field: string, value: any) {
    this.formValues = { ...this.formValues, [field]: value };
    console.log(`${field} changed to:`, value);
  }
}
