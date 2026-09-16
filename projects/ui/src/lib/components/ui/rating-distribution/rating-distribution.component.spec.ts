import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingDistributionComponent } from './rating-distribution.component';

describe('RatingDistributionComponent', () => {
  let component: RatingDistributionComponent;
  let fixture: ComponentFixture<RatingDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingDistributionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingDistributionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('values', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read from the highest note down', () => {
    fixture.componentRef.setInput('values', [5, 4, 4, 1]);
    fixture.detectChanges();

    expect(component.steps().map(step => step.note)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should count each note', () => {
    fixture.componentRef.setInput('values', [5, 4, 4, 1]);
    fixture.detectChanges();

    expect(component.steps().map(step => step.count)).toEqual([1, 2, 0, 0, 1]);
    expect(component.total()).toBe(4);
  });

  it('should round fractional notes onto a step', () => {
    fixture.componentRef.setInput('values', [4.4, 4.6]);
    fixture.detectChanges();

    const counts = new Map(component.steps().map(step => [step.note, step.count]));
    expect(counts.get(4)).toBe(1);
    expect(counts.get(5)).toBe(1);
  });

  it('should ignore notes outside the scale', () => {
    fixture.componentRef.setInput('values', [0, 6, 3]);
    fixture.detectChanges();

    expect(component.steps().reduce((sum, step) => sum + step.count, 0)).toBe(1);
  });

  it('should keep every step when nothing was rated', () => {
    expect(component.steps().length).toBe(5);
    expect(component.total()).toBe(0);
  });
});
