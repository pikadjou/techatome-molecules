import { HorizontalScroll } from './horizontal-scroll';

describe('HorizontalScroll', () => {
  let horizontalScroll: HorizontalScroll;
  let mockElement: HTMLElement;

  beforeEach(() => {
    mockElement = document.createElement('div');
    spyOn(mockElement, 'addEventListener').and.callThrough();
    horizontalScroll = new HorizontalScroll(mockElement);
  });

  it('should create an instance', () => {
    expect(horizontalScroll).toBeTruthy();
  });

  it('should register event listeners on the element', () => {
    expect(mockElement.addEventListener).toHaveBeenCalledWith('mousedown', jasmine.any(Function));
    expect(mockElement.addEventListener).toHaveBeenCalledWith('mousemove', jasmine.any(Function));
    expect(mockElement.addEventListener).toHaveBeenCalledWith('mouseleave', jasmine.any(Function));
    expect(mockElement.addEventListener).toHaveBeenCalledWith('mouseup', jasmine.any(Function));
  });

  it('should track mousedown state', () => {
    const mouseDownEvent = new MouseEvent('mousedown', { clientX: 100 });
    Object.defineProperty(mouseDownEvent, 'pageX', { value: 100 });

    horizontalScroll.mouseDown(mouseDownEvent);
    expect((horizontalScroll as any)._isDown).toBe(true);
  });

  it('should reset state on mouseleave', () => {
    const mouseDownEvent = new MouseEvent('mousedown', { clientX: 100 });
    Object.defineProperty(mouseDownEvent, 'pageX', { value: 100 });

    horizontalScroll.mouseDown(mouseDownEvent);
    horizontalScroll.mouseLeft();
    expect((horizontalScroll as any)._isDown).toBe(false);
  });

  it('should not scroll on mousemove when not mousedown', () => {
    const initialScrollLeft = mockElement.scrollLeft;
    const mouseMoveEvent = new MouseEvent('mousemove', { clientX: 200 });
    Object.defineProperty(mouseMoveEvent, 'pageX', { value: 200 });

    horizontalScroll.mouseMove(mouseMoveEvent);
    expect(mockElement.scrollLeft).toBe(initialScrollLeft);
  });

  it('should scroll on mousemove when mousedown is active', () => {
    const mouseDownEvent = new MouseEvent('mousedown', { clientX: 100 });
    Object.defineProperty(mouseDownEvent, 'pageX', { value: 100 });

    horizontalScroll.mouseDown(mouseDownEvent);

    const mouseMoveEvent = new MouseEvent('mousemove', { clientX: 200 });
    Object.defineProperty(mouseMoveEvent, 'pageX', { value: 200 });
    spyOn(mouseMoveEvent, 'preventDefault');

    horizontalScroll.mouseMove(mouseMoveEvent);
    expect(mouseMoveEvent.preventDefault).toHaveBeenCalled();
  });
});
