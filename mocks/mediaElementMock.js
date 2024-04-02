const mockMediaElementMethods = {
  load: { writable: true, value: jest.fn() },
  play: { writable: true, value: jest.fn() },
  pause: { writable: true, value: jest.fn() },
}

Object.defineProperties(HTMLMediaElement.prototype, mockMediaElementMethods)
