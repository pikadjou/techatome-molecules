import { RequestState } from './state';

describe('RequestState', () => {
  let requestState: RequestState;

  beforeEach(() => {
    requestState = new RequestState();
  });

  it('should create an instance', () => {
    expect(requestState).toBeTruthy();
  });

  it('should not be loading initially', () => {
    expect(requestState.isLoading()).toBe(false);
  });

  it('should not have been asked initially', () => {
    expect(requestState.alreadyAsked).toBe(false);
  });

  it('should have default error state', () => {
    expect(requestState.getErrorStatus()).toBe(-1);
    expect(requestState.getErrorMessage()).toBe('');
  });

  describe('asked', () => {
    it('should set loading to true', () => {
      requestState.asked();
      expect(requestState.isLoading()).toBe(true);
    });

    it('should set alreadyAsked to true', () => {
      requestState.asked();
      expect(requestState.alreadyAsked).toBe(true);
    });

    it('should reset error', () => {
      requestState.onError(500, 'Server Error');
      requestState.asked();
      expect(requestState.getErrorStatus()).toBe(-1);
      expect(requestState.getErrorMessage()).toBe('');
    });
  });

  describe('completed', () => {
    it('should set loading to false', () => {
      requestState.asked();
      requestState.completed();
      expect(requestState.isLoading()).toBe(false);
    });
  });

  describe('onError', () => {
    it('should set error status and message', () => {
      requestState.onError(404, 'Not Found');
      expect(requestState.getErrorStatus()).toBe(404);
      expect(requestState.getErrorMessage()).toBe('Not Found');
    });

    it('should set loading to false', () => {
      requestState.asked();
      requestState.onError(500, 'Error');
      expect(requestState.isLoading()).toBe(false);
    });
  });

  describe('resetError', () => {
    it('should reset error to default values', () => {
      requestState.onError(500, 'Error');
      requestState.resetError();
      expect(requestState.getErrorStatus()).toBe(-1);
      expect(requestState.getErrorMessage()).toBe('');
    });
  });

  describe('clean', () => {
    it('should reset all state', () => {
      requestState.asked();
      requestState.onError(500, 'Error');
      requestState.clean();
      expect(requestState.isLoading()).toBe(false);
      expect(requestState.alreadyAsked).toBe(false);
      expect(requestState.getErrorStatus()).toBe(-1);
      expect(requestState.getErrorMessage()).toBe('');
    });
  });
});
