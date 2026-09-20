import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitleComponent } from '@lib/ui/modules/list/title/list-title.component';

describe('ListTitleComponent', () => {
  let component: ListTitleComponent;
  let fixture: ComponentFixture<ListTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
