import Position from "../src/Position";

describe('Position', () => {
  it('should be true for valid ', () => {
    const anyPosition = new Position(-1,0);
    expect(anyPosition.isValid()).toBeFalsy();

  });
});