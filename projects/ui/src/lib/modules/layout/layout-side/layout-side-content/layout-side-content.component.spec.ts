import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSideContentComponent } from './layout-side-content.component';

describe('LayoutSideContentComponent', () => {
  let component: LayoutSideContentComponent;
  let fixture: ComponentFixture<LayoutSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
