import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return default image path', () => {
    expect(component.getImagePath()).toBe('assets/partners/logo/logo.png');
  });

  it('should return oneline image path', () => {
    fixture.componentRef.setInput('type', 'oneline');
    fixture.detectChanges();
    expect(component.getImagePath()).toBe('assets/partners/logo/logo-oneline.png');
  });

  it('should return white image path', () => {
    fixture.componentRef.setInput('color', 'white');
    fixture.detectChanges();
    expect(component.getImagePath()).toBe('assets/partners/logo/logo-white.png');
  });

  it('should return oneline black image path', () => {
    fixture.componentRef.setInput('type', 'oneline');
    fixture.componentRef.setInput('color', 'black');
    fixture.detectChanges();
    expect(component.getImagePath()).toBe('assets/partners/logo/logo-oneline-black.png');
  });

  it('should default width percentage to 100', () => {
    expect(component.imageWidth).toBe('100%');
  });

  it('should compute image width from percentage', () => {
    fixture.componentRef.setInput('widthPercentage', 50);
    fixture.detectChanges();
    expect(component.imageWidth).toBe('50%');
  });
});
