import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExtraInformationComponent } from './list-extra-information.component';

describe('ListExtraInformationComponent', () => {
  let component: ListExtraInformationComponent;
  let fixture: ComponentFixture<ListExtraInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListExtraInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListExtraInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
