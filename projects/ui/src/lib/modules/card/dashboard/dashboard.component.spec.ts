import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardComponent } from './dashboard.component';

describe('DashboardCardComponent', () => {
  let component: DashboardCardComponent;
  let fixture: ComponentFixture<DashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'home');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required icon input', () => {
    expect(component.icon()).toBe('home');
  });

  it('should update icon input', () => {
    fixture.componentRef.setInput('icon', 'settings');
    fixture.detectChanges();
    expect(component.icon()).toBe('settings');
  });
});
