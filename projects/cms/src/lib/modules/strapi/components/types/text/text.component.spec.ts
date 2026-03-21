import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponent } from './text.component';

describe('CMS TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('text', {
      bold: false,
      underline: false,
      italic: false,
      text: 'Hello',
      type: 'text',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept text input', () => {
    expect(component.text()).toBeDefined();
    expect(component.text().text).toBe('Hello');
    expect(component.text().type).toBe('text');
  });
});
