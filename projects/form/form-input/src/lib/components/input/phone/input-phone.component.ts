import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { InputPhone } from '@camelot/form-model';
import { CamAbstractInputComponent } from '../../abstract.component';

import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'cam-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
})
export class InputPhoneComponent extends CamAbstractInputComponent<InputPhone> {
  @ViewChild('phoneInput', { static: false }) phoneInput!: ElementRef;

  constructor(private renderer: Renderer2) {
    super();
  }
  override ngOnInit() {
    super.ngOnInit();
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/css/intlTelInput.min.css';
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
