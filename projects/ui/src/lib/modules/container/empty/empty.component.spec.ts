import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { EmptyComponent } from './empty.component';

describe('EmptyComponent', () => {
  let component: EmptyComponent;
  let fixture: ComponentFixture<EmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        EmptyComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isEmpty to true', () => {
    expect(component.isEmpty()).toBe(true);
  });

  it('should default isLight to true', () => {
    expect(component.isLight()).toBe(true);
  });

  it('should default showMessage to true', () => {
    expect(component.showMessage()).toBe(true);
  });

  it('should default text to empty message key', () => {
    expect(component.text()).toBe('ui.container.empty.light-message');
  });

  it('should default type to info', () => {
    expect(component.type()).toBe('info');
  });

  it('should default icon to ghost', () => {
    expect(component.icon()).toBe('ghost');
  });

  it('should default iconSize to lg', () => {
    expect(component.iconSize()).toBe('lg');
  });

  it('should accept isEmpty false', () => {
    fixture.componentRef.setInput('isEmpty', false);
    fixture.detectChanges();
    expect(component.isEmpty()).toBe(false);
  });

  it('should accept a custom text', () => {
    fixture.componentRef.setInput('text', 'custom.empty');
    fixture.detectChanges();
    expect(component.text()).toBe('custom.empty');
  });

  it('should accept a custom icon', () => {
    fixture.componentRef.setInput('icon', 'search');
    fixture.detectChanges();
    expect(component.icon()).toBe('search');
  });

  it('should accept a custom type', () => {
    fixture.componentRef.setInput('type', 'warning');
    fixture.detectChanges();
    expect(component.type()).toBe('warning');
  });
});
