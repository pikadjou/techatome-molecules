import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ContactInformationComponent } from './contact-information.component';

describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ContactInformationComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 'test@example.com');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the value input set', () => {
    expect(component.value()).toBe('test@example.com');
  });

  it('should accept null value', () => {
    fixture.componentRef.setInput('value', null);
    fixture.detectChanges();
    expect(component.value()).toBeNull();
  });

  it('should accept an icon input', () => {
    fixture.componentRef.setInput('icon', 'email');
    fixture.detectChanges();
    expect(component.icon()).toBe('email');
  });
});
