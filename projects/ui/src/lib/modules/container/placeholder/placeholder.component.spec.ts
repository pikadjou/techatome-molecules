import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderComponent } from './placeholder.component';
import { Placeholder } from './config';

describe('PlaceholderComponent', () => {
  let component: PlaceholderComponent;
  let fixture: ComponentFixture<PlaceholderComponent>;

  const mockPlaceholder: Placeholder = {
    type: 'item',
    repeat: 2,
    children: [
      {
        type: 'col',
        gridSize: 6,
        attributes: ['big'],
        repeat: 1,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('placeholder', mockPlaceholder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required placeholder input', () => {
    expect(component.placeholder()).toEqual(mockPlaceholder);
  });

  it('should return an array of given length from getFakeArray', () => {
    const result = component.getFakeArray(3);
    expect(result.length).toBe(3);
  });

  it('should return empty array for getFakeArray with 0', () => {
    const result = component.getFakeArray(0);
    expect(result.length).toBe(0);
  });

  it('should return column class for a given grid size', () => {
    const result = component.getColClass(6);
    expect(result).toBe('ph-col-6');
  });

  it('should return empty string when grid size is undefined', () => {
    const result = component.getColClass(undefined);
    expect(result).toBe('');
  });

  it('should return joined attributes class', () => {
    const result = component.getAttributesClass(['big', 'empty']);
    expect(result).toBe('big empty');
  });

  it('should return empty string for empty attributes array', () => {
    const result = component.getAttributesClass([]);
    expect(result).toBe('');
  });
});
