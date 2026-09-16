import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarComponent, TabBarItem } from './tab-bar.component';

describe('TabBarComponent', () => {
  let component: TabBarComponent;
  let fixture: ComponentFixture<TabBarComponent>;

  const items: TabBarItem[] = [
    { count: 7, key: 'received', label: 'Reçues' },
    { key: 'given', label: 'Données' },
    { disabled: true, key: 'locked', label: 'Verrouillé' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TabBarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', items);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only report a count when one is provided', () => {
    expect(component.hasCount(items[0])).toBeTrue();
    expect(component.hasCount(items[1])).toBeFalse();
  });

  it('should flag the active item', () => {
    fixture.componentRef.setInput('active', 'given');
    fixture.detectChanges();
    expect(component.isActive(items[1])).toBeTrue();
    expect(component.isActive(items[0])).toBeFalse();
  });

  it('should emit the key on selection', () => {
    const emitted: string[] = [];
    component.select.subscribe(key => emitted.push(key));
    component.trigger(items[0]);
    expect(emitted).toEqual(['received']);
  });

  it('should not emit for a disabled item', () => {
    const emitted: string[] = [];
    component.select.subscribe(key => emitted.push(key));
    component.trigger(items[2]);
    expect(emitted).toEqual([]);
  });
});
