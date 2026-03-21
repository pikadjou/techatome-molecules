import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementComponent } from './list-element.component';

describe('ListElementComponent', () => {
  let component: ListElementComponent;
  let fixture: ComponentFixture<ListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default withSeparator to true', () => {
    expect(component.withSeparator()).toBe(true);
  });

  it('should default flexColumn to false', () => {
    expect(component.flexColumn()).toBe(false);
  });

  it('should accept withSeparator false', () => {
    fixture.componentRef.setInput('withSeparator', false);
    fixture.detectChanges();
    expect(component.withSeparator()).toBe(false);
  });

  it('should accept flexColumn true', () => {
    fixture.componentRef.setInput('flexColumn', true);
    fixture.detectChanges();
    expect(component.flexColumn()).toBe(true);
  });

  it('should emit action event', () => {
    spyOn(component.action, 'emit');
    component.action.emit();
    expect(component.action.emit).toHaveBeenCalled();
  });
});
