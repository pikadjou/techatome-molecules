import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct color class with default color', () => {
    expect(component.getColorClass()).toBe('text-color-text-default');
  });

  it('should return correct color class with custom color', () => {
    fixture.componentRef.setInput('color', 'success');
    fixture.detectChanges();
    expect(component.getColorClass()).toBe('text-color-text-success');
  });

  it('should default size to md', () => {
    expect(component.size()).toBe('md');
  });

  it('should default isBold to false', () => {
    expect(component.isBold()).toBeFalse();
  });
});
