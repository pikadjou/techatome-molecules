import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import intlTelInput from 'intl-tel-input';

import { InputPhone } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule],
})
export class InputPhoneComponent extends TaAbstractInputComponent<InputPhone> {
  @ViewChild('phoneInput', { static: false }) phoneInput!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }
  override ngOnInit() {
    super.ngOnInit();
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css';
    this.renderer.appendChild(document.head, link);
  }
  override ngAfterViewInit() {
    super.ngAfterViewInit();
    // Initialiser intl-tel-input une fois que le DOM est prêt
    intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'fr',
      countryOrder: this.input.preferredCountries,
      separateDialCode: true,
    });
  }
}
