import { ModalState } from '@lib/utils/helpers/modal/state';

describe('ModalState', () => {
  let state: ModalState<{ id: number }, boolean>;

  beforeEach(() => {
    state = new ModalState<{ id: number }, boolean>();
  });

  it('should be closed with no input nor output initially', () => {
    expect(state.open()).toBe(false);
    expect(state.input()).toBeNull();
    expect(state.output()).toBeNull();
  });

  it('should open with the given input and reset the output', () => {
    state.completed(true);
    state.asked({ id: 3 });

    expect(state.open()).toBe(true);
    expect(state.input()).toEqual({ id: 3 });
    expect(state.output()).toBeNull();
  });

  it('should close with the given output', () => {
    state.asked({ id: 3 });
    state.completed(false);

    expect(state.open()).toBe(false);
    expect(state.output()).toBe(false);
  });

  it('should close without touching the output when dismissed', () => {
    state.asked({ id: 3 });
    state.dismissed();

    expect(state.open()).toBe(false);
    expect(state.output()).toBeNull();
  });
});
