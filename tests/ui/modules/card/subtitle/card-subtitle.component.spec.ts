import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubtitleComponent } from '@lib/ui/modules/card/subtitle/card-subtitle.component';

describe('CardSubtitleComponent', () => {
  let component: CardSubtitleComponent;
  let fixture: ComponentFixture<CardSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubtitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
