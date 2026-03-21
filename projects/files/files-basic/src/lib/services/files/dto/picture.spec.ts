import { Picture } from './picture';

describe('Picture interface', () => {
  it('should create a valid Picture object', () => {
    const picture: Picture = {
      url: 'https://example.com/image.jpg',
    };
    expect(picture.url).toBe('https://example.com/image.jpg');
  });

  it('should accept empty url', () => {
    const picture: Picture = {
      url: '',
    };
    expect(picture.url).toBe('');
  });
});
