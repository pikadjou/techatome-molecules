import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { DualButtonComponent, DualButtonInput } from './dual-button.component';

describe('DualButtonComponent', () => {
  let component: DualButtonComponent;
  let fixture: ComponentFixture<DualButtonComponent>;

  const mockFirst: DualButtonInput = {
    icon: 'check',
    label: 'Accept',
    callback: jasmine.createSpy('firstCallback'),
  };

  const mockSecond: DualButtonInput = {
    icon: 'close',
    label: 'Reject',
    callback: jasmine.createSpy('secondCallback'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        DualButtonComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DualButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('first', mockFirst);
    fixture.componentRef.setInput('second', mockSecond);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default type to primary', () => {
    expect(component.type()).toBe('primary');
  });

  it('should default isFull to false', () => {
    expect(component.isFull()).toBeFalse();
  });

  it('should return class with type', () => {
    const css = component.getClass();
    expect(css['primary']).toBeTrue();
  });

  it('should return class with secondary type', () => {
    fixture.componentRef.setInput('type', 'secondary');
    fixture.detectChanges();
    const css = component.getClass();
    expect(css['secondary']).toBeTrue();
  });
});
