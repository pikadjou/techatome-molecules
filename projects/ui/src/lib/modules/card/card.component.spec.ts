import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default highlight to false', () => {
    expect(component.highlight()).toBe(false);
  });

  it('should default shadow to true', () => {
    expect(component.shadow()).toBe(true);
  });

  it('should default fullHeight to false', () => {
    expect(component.fullHeight()).toBe(false);
  });

  it('should default noContent to false', () => {
    expect(component.noContent()).toBe(false);
  });

  it('should default directionCard to null', () => {
    expect(component.directionCard()).toBeNull();
  });

  it('should default isNew to false', () => {
    expect(component.isNew()).toBe(false);
  });

  it('should accept highlight true', () => {
    fixture.componentRef.setInput('highlight', true);
    fixture.detectChanges();
    expect(component.highlight()).toBe(true);
  });

  it('should accept shadow false', () => {
    fixture.componentRef.setInput('shadow', false);
    fixture.detectChanges();
    expect(component.shadow()).toBe(false);
  });

  it('should accept horizontal directionCard', () => {
    fixture.componentRef.setInput('directionCard', 'horizontal');
    fixture.detectChanges();
    expect(component.directionCard()).toBe('horizontal');
  });

  it('should emit click event when clickTrigger is called', () => {
    spyOn(component.click, 'emit');
    component.clickTrigger();
    expect(component.click.emit).toHaveBeenCalledWith(null);
  });
});
