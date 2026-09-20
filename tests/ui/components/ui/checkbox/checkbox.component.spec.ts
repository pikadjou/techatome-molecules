import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from '@lib/ui/components/ui/checkbox/checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the opposite value on toggle', () => {
    const emitted: boolean[] = [];
    component.checkedChange.subscribe(v => emitted.push(v));
    component.toggle();
    expect(emitted).toEqual([true]);
  });

  it('should not emit when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const emitted: boolean[] = [];
    component.checkedChange.subscribe(v => emitted.push(v));
    component.toggle();
    expect(emitted).toEqual([]);
  });
});
