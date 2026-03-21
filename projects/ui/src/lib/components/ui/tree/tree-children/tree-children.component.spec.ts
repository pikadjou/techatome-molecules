import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTreeChildrenComponent } from './tree-children.component';

describe('TaTreeChildrenComponent', () => {
  let component: TaTreeChildrenComponent;
  let fixture: ComponentFixture<TaTreeChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaTreeChildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaTreeChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
