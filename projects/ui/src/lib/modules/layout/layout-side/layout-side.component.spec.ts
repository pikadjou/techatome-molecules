import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSideComponent } from './layout-side.component';

describe('LayoutSideComponent', () => {
  let component: LayoutSideComponent;
  let fixture: ComponentFixture<LayoutSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
