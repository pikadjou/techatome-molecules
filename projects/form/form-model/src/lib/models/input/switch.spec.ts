import { BehaviorSubject, of } from 'rxjs';

import { InputSwitch } from './switch';

describe('InputSwitch', () => {
  it('should create with match observable', () => {
    const match$ = of({ type: 'textbox' as const, prop: {} });
    const input = new InputSwitch({ key: 'dynamic', label: 'Dynamic', match: match$ });
    expect(input).toBeTruthy();
    expect(input.controlType).toBe('switch');
  });

  it('should update matchtype signal from match observable', () => {
    const match$ = new BehaviorSubject<{ type: 'textbox'; prop: unknown }>({
      type: 'textbox',
      prop: {},
    });
    const input = new InputSwitch({ key: 'dynamic', match: match$ });
    expect(input.matchtype()).toBe('textbox');
    input.destroy();
  });

  it('should assign prop to self via match observable', () => {
    const match$ = new BehaviorSubject<{ type: 'textbox'; prop: unknown }>({
      type: 'textbox',
      prop: { type: 'text' },
    });
    const input = new InputSwitch({ key: 'dynamic', match: match$ });
    expect(input.type).toBe('text');
    input.destroy();
  });

  it('should react to new match emissions', () => {
    const match$ = new BehaviorSubject<{ type: 'textbox' | 'checkbox'; prop: unknown }>({
      type: 'textbox',
      prop: {},
    });
    const input = new InputSwitch({ key: 'dynamic', match: match$ });
    expect(input.matchtype()).toBe('textbox');

    match$.next({ type: 'checkbox', prop: {} });
    expect(input.matchtype()).toBe('checkbox');
    input.destroy();
  });
});
