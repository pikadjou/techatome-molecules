import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TaSharedMenuService } from '@ta/services';

import { LayoutWithBottomNavComponent } from './layout-with-bottom-nav.component';

describe('LayoutWithBottomNavComponent', () => {
  let component: LayoutWithBottomNavComponent;
  let fixture: ComponentFixture<LayoutWithBottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWithBottomNavComponent],
      providers: [
        provideRouter([]),
        TaSharedMenuService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutWithBottomNavComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('type', 'default');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required type input', () => {
    expect(component.type()).toBe('default');
  });

  it('should update type input', () => {
    fixture.componentRef.setInput('type', 'custom');
    fixture.detectChanges();
    expect(component.type()).toBe('custom');
  });
});
