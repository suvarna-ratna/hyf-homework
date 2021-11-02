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
      return 3.14 * this.radius * this.radius;
  }
};

const circle = new Circle(10);
console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());