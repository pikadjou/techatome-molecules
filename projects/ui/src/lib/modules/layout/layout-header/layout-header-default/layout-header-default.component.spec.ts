import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LayoutHeaderDefaultComponent } from './layout-header-default.component';

describe('LayoutHeaderDefaultComponent', () => {
  let component: LayoutHeaderDefaultComponent;
  let fixture: ComponentFixture<LayoutHeaderDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LayoutHeaderDefaultComponent,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default showBack to true', () => {
    expect(component.showBack()).toBe(true);
  });

  it('should default menuTemplate to undefined', () => {
    expect(component.menuTemplate()).toBeUndefined();
  });

  it('should default title to undefined', () => {
    expect(component.title()).toBeUndefined();
  });

  it('should accept a custom title', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(component.title()).toBe('Test Title');
  });

  it('should accept showBack false', () => {
    fixture.componentRef.setInput('showBack', false);
    fixture.detectChanges();
    expect(component.showBack()).toBe(false);
  });

  it('should emit backEvent when showBackAction is called', () => {
    spyOn(component.backEvent, 'emit');
    component.showBackAction();
    expect(component.backEvent.emit).toHaveBeenCalled();
  });
});
