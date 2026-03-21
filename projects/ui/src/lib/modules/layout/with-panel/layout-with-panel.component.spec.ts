import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutWithPanelComponent } from './layout-with-panel.component';

describe('LayoutWithPanelComponent', () => {
  let component: LayoutWithPanelComponent;
  let fixture: ComponentFixture<LayoutWithPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithPanelComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutWithPanelComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('open', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required open input', () => {
    expect(component.open()).toBe(false);
  });

  it('should update open input', () => {
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();
    expect(component.open()).toBe(true);
  });

  it('should call manageDrawer on changes', () => {
    spyOn(component, 'manageDrawer');
    component.ngOnChanges({} as any);
    expect(component.manageDrawer).toHaveBeenCalled();
  });
});
