import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleComponent } from '@lib/ui/modules/card/title/card-title.component';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
