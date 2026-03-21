import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { UiProfileDisplayComponent } from './ui-profile-display.component';

describe('UiProfileDisplayComponent', () => {
  let component: UiProfileDisplayComponent;
  let fixture: ComponentFixture<UiProfileDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        UiProfileDisplayComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(UiProfileDisplayComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'User Profile');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the label input set', () => {
    expect(component.label()).toBe('User Profile');
  });

  it('should default userLogo to undefined', () => {
    expect(component.userLogo()).toBeUndefined();
  });

  it('should default ctas to undefined', () => {
    expect(component.ctas()).toBeUndefined();
  });

  it('should default sideIcon to undefined', () => {
    expect(component.sideIcon()).toBeUndefined();
  });
});
