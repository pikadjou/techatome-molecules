import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BadgeComponent, BadgeType } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BadgeComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 'Test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct class based on type', () => {
    fixture.componentRef.setInput('type', 'danger');
    fixture.detectChanges();
    expect(component.getClass()).toBe('badge-danger');
  });

  it('should default type to primary', () => {
    expect(component.getClass()).toBe('badge-primary');
  });

  it('should emit clickAction on click', () => {
    spyOn(component.clickAction, 'emit');
    component.click();
    expect(component.clickAction.emit).toHaveBeenCalled();
  });

  it('should accept all badge types', () => {
    const types: BadgeType[] = ['danger', 'warning', 'success', 'primary', 'secondary', 'info', 'purple', 'orange'];
    types.forEach((type) => {
      fixture.componentRef.setInput('type', type);
      fixture.detectChanges();
      expect(component.getClass()).toBe(`badge-${type}`);
    });
  });
});
