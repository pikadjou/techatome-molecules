import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        RatingComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default value to 0', () => {
    expect(component.value()).toBe(0);
  });

  it('should default max to 5', () => {
    expect(component.max()).toBe(5);
  });

  it('should generate correct number of stars', () => {
    expect(component.stars.length).toBe(5);
  });

  it('should generate custom number of stars', () => {
    fixture.componentRef.setInput('max', 10);
    fixture.detectChanges();
    expect(component.stars.length).toBe(10);
  });

  it('should return 100% fill for fully filled star', () => {
    fixture.componentRef.setInput('value', 3);
    fixture.detectChanges();
    expect(component.getStarFillPercentage(2)).toBe(100);
  });

  it('should return 0% fill for empty star', () => {
    fixture.componentRef.setInput('value', 2);
    fixture.detectChanges();
    expect(component.getStarFillPercentage(4)).toBe(0);
  });

  it('should return partial fill for fractional value', () => {
    fixture.componentRef.setInput('value', 3.5);
    fixture.detectChanges();
    expect(component.getStarFillPercentage(4)).toBe(50);
  });

  it('should emit ratingChange on star click when not readonly', () => {
    spyOn(component.ratingChange, 'emit');
    component.onStarClick(3);
    expect(component.ratingChange.emit).toHaveBeenCalledWith(3);
  });

  it('should not emit ratingChange on star click when readonly', () => {
    fixture.componentRef.setInput('readonly', true);
    fixture.detectChanges();
    spyOn(component.ratingChange, 'emit');
    component.onStarClick(3);
    expect(component.ratingChange.emit).not.toHaveBeenCalled();
  });

  it('should set hovered rating on star hover', () => {
    component.onStarHover(4);
    expect(component.hoveredRating).toBe(4);
  });

  it('should not set hovered rating when readonly', () => {
    fixture.componentRef.setInput('readonly', true);
    fixture.detectChanges();
    component.onStarHover(4);
    expect(component.hoveredRating).toBeNull();
  });

  it('should reset hovered rating on mouse leave', () => {
    component.hoveredRating = 3;
    component.onMouseLeave();
    expect(component.hoveredRating).toBeNull();
  });

  it('should return pointer cursor when not readonly', () => {
    expect(component.getCursorStyle()).toBe('pointer');
  });

  it('should return default cursor when readonly', () => {
    fixture.componentRef.setInput('readonly', true);
    fixture.detectChanges();
    expect(component.getCursorStyle()).toBe('default');
  });

  it('should use hovered rating for fill percentage when hovering', () => {
    fixture.componentRef.setInput('value', 2);
    fixture.detectChanges();
    component.hoveredRating = 4;
    expect(component.getStarFillPercentage(3)).toBe(100);
  });
});
