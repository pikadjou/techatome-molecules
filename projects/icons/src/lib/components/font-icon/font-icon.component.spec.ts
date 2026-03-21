import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';

import { FontIconComponent } from './font-icon.component';

describe('FontIconComponent', () => {
  let component: FontIconComponent;
  let fixture: ComponentFixture<FontIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontIconComponent, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FontIconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', 'home');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a required name input', () => {
    expect(component.name()).toBe('home');
  });

  it('should update name when input changes', () => {
    fixture.componentRef.setInput('name', 'settings');
    fixture.detectChanges();
    expect(component.name()).toBe('settings');
  });

  it('should default type to md', () => {
    expect(component.type()).toBe('md');
  });

  it('should accept a custom type', () => {
    fixture.componentRef.setInput('type', 'lg');
    fixture.detectChanges();
    expect(component.type()).toBe('lg');
  });

  it('should accept sm type', () => {
    fixture.componentRef.setInput('type', 'sm');
    fixture.detectChanges();
    expect(component.type()).toBe('sm');
  });

  it('should render a mat-icon element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon).toBeTruthy();
  });

  it('should display the icon name inside mat-icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon?.textContent?.trim()).toBe('home');
  });

  it('should update the displayed icon name when input changes', () => {
    fixture.componentRef.setInput('name', 'search');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon?.textContent?.trim()).toBe('search');
  });

  it('should apply the type as a CSS class on mat-icon via ngClass', () => {
    fixture.componentRef.setInput('type', 'lg');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon?.classList.contains('lg')).toBe(true);
  });

  it('should apply default md class on mat-icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const matIcon = compiled.querySelector('mat-icon');
    expect(matIcon?.classList.contains('md')).toBe(true);
  });
});
