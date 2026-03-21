import { provideForm } from './provider';

describe('provideForm', () => {
  it('should return a provider array', () => {
    const providers = provideForm();
    expect(providers).toBeTruthy();
    expect(Array.isArray(providers)).toBeTrue();
  });
});
