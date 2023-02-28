const ShapeContent = require('./lib/shapecontent.js');

describe('TriangleShape', () => {
  it('should display a triangle with a width of 300 pixels and a height of 200 pixels', () => {
    
    const triangle = new TriangleShape('#FF0000', 100, 200);
    const element = triangle.display();

    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('200px');
  });
});