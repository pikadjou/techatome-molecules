import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletComponent } from './bullet.component';

describe('BulletComponent', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct class with default values', () => {
    expect(component.getClass()).toBe('bullet-default sm');
  });

  it('should return correct class with custom type and size', () => {
    fixture.componentRef.setInput('type', 'success');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();
    expect(component.getClass()).toBe('bullet-success lg');
  });

  it('should support notif type', () => {
    fixture.componentRef.setInput('type', 'notif');
    fixture.detectChanges();
    expect(component.getClass()).toContain('bullet-notif');
  });
});
