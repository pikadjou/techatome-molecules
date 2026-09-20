import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTitleComponent } from '@lib/ui/modules/layout/layout-title/layout-title.component';

describe('LayoutTitleComponent', () => {
  let component: LayoutTitleComponent;
  let fixture: ComponentFixture<LayoutTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
