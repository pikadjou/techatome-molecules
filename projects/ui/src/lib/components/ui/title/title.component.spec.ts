import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default level to 1', () => {
    expect(component.level()).toBe(1);
  });

  it('should default isTheme to false', () => {
    expect(component.isTheme()).toBeFalse();
  });

  it('should default isBold to false', () => {
    expect(component.isBold()).toBeFalse();
  });

  it('should accept custom level', () => {
    fixture.componentRef.setInput('level', 3);
    fixture.detectChanges();
    expect(component.level()).toBe(3);
  });
});
