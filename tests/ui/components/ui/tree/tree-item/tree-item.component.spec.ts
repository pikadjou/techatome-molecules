import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTreeItemComponent } from '@lib/ui/components/ui/tree/tree-item/tree-item.component';

describe('TaTreeItemComponent', () => {
  let component: TaTreeItemComponent;
  let fixture: ComponentFixture<TaTreeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaTreeItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
