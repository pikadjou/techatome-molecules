import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageComponent } from '@lib/ui/modules/layout/layout-page/layout-page.component';

describe('LayoutPageComponent', () => {
  let component: LayoutPageComponent;
  let fixture: ComponentFixture<LayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
