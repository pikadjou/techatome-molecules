import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentComponent } from '@lib/ui/modules/card/content/card-content.component';

describe('CardContentComponent', () => {
  let component: CardContentComponent;
  let fixture: ComponentFixture<CardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
