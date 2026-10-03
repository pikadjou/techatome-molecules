import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlineComponent } from '@lib/ui/components/ui/overline/overline.component';

describe('OverlineComponent', () => {
  let component: OverlineComponent;
  let fixture: ComponentFixture<OverlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlineComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(OverlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to the muted tone in size md', () => {
    expect(component.getClasses()).toEqual(['muted', 'md']);
  });

  it('should expose tone and size as classes', () => {
    fixture.componentRef.setInput('tone', 'accent');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(['accent', 'sm']);
  });
});
