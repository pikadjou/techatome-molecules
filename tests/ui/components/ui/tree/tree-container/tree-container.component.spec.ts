import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTreeContainerComponent } from '@lib/ui/components/ui/tree/tree-container/tree-container.component';

describe('TaTreeContainerComponent', () => {
  let component: TaTreeContainerComponent;
  let fixture: ComponentFixture<TaTreeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaTreeContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaTreeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
