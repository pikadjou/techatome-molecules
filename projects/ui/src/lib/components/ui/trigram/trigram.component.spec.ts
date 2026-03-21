import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigramComponent } from './trigram.component';

describe('TrigramComponent', () => {
  let component: TrigramComponent;
  let fixture: ComponentFixture<TrigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrigramComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TrigramComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 'ABC');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default size to 35', () => {
    expect(component.size()).toBe(35);
  });

  it('should compute font size as size / 3 rounded', () => {
    expect(component.getFontSize()).toBe(12);
  });

  it('should compute font size for custom size', () => {
    fixture.componentRef.setInput('size', 60);
    fixture.detectChanges();
    expect(component.getFontSize()).toBe(20);
  });

  it('should accept null value', () => {
    fixture.componentRef.setInput('value', null);
    fixture.detectChanges();
    expect(component.value()).toBeNull();
  });
});
