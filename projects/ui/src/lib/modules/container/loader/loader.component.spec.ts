import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LoaderComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default isLoading to true', () => {
    expect(component.isLoading()).toBe(true);
  });

  it('should default skeleton to null', () => {
    expect(component.skeleton()).toBeNull();
  });

  it('should default size to lg', () => {
    expect(component.size()).toBe('lg');
  });

  it('should default text to loading message key', () => {
    expect(component.text()).toBe('ui.container.loading.light-message');
  });

  it('should accept isLoading false', () => {
    fixture.componentRef.setInput('isLoading', false);
    fixture.detectChanges();
    expect(component.isLoading()).toBe(false);
  });

  it('should accept a custom size', () => {
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    expect(component.size()).toBe('sm');
  });

  it('should accept a custom text', () => {
    fixture.componentRef.setInput('text', 'custom.loading');
    fixture.detectChanges();
    expect(component.text()).toBe('custom.loading');
  });

  it('should return default placeholder config when skeleton is null', () => {
    const placeholder = component.getPlaceholder();
    expect(placeholder).toBeDefined();
    expect(placeholder.type).toBe('item');
  });

  it('should return cardList placeholder config', () => {
    fixture.componentRef.setInput('skeleton', 'cardList');
    fixture.detectChanges();
    const placeholder = component.getPlaceholder();
    expect(placeholder).toBeDefined();
    expect(placeholder.type).toBe('container');
  });
});
