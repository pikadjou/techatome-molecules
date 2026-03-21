import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageComponent } from './card-image.component';

describe('CardImageComponent', () => {
  let component: CardImageComponent;
  let fixture: ComponentFixture<CardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default src to empty string', () => {
    expect(component.src()).toBe('');
  });

  it('should accept a custom src', () => {
    fixture.componentRef.setInput('src', 'https://example.com/image.png');
    fixture.detectChanges();
    expect(component.src()).toBe('https://example.com/image.png');
  });
});
