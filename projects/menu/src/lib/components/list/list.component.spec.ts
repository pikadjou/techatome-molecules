import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIcon } from '../../models/menu/item/icon';
import { Menu } from '../../models/menu/menu';
import { ListComponent } from './list.component';

@Component({
  standalone: true,
  imports: [ListComponent],
  template: '<ta-list [menu]="menu"></ta-list>',
})
class TestHostComponent {
  menu = new Menu<MenuIcon>({
    elements: [
      new MenuIcon({ key: 'item1', label: 'Item 1', icon: 'home' }),
      new MenuIcon({ key: 'item2', label: 'Item 2', icon: 'settings' }),
    ],
    direction: 'vertical',
  });
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    component = fixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive menu input', () => {
    expect(component.menu()).toBeTruthy();
    expect(component.menu().elements.length).toBe(2);
  });

  it('should have the correct menu direction', () => {
    expect(component.menu().direction).toBe('vertical');
  });
});
