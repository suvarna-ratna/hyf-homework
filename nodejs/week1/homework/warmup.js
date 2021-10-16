class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * 3.14 * this.radius;
  }
  getArea() {
    return this.radius * this.radius;
  }
}
