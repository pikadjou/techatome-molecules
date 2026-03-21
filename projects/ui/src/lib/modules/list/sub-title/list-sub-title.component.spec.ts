import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubTitleComponent } from './list-sub-title.component';

describe('ListSubTitleComponent', () => {
  let component: ListSubTitleComponent;
  let fixture: ComponentFixture<ListSubTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSubTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListSubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
