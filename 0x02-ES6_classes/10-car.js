export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(val) {
    if (typeof val !== 'string') throw new TypeError('brand must be a string');
    this._brand = val;
  }

  get motor() {
    return this._motor;
  }

  set motor(val) {
    if (typeof val !== 'string') throw new TypeError('motor must be a string');
    this._motor = val;
  }

  get color() {
    return this._color;
  }

  set color(val) {
    if (typeof val !== 'string') throw new TypeError('color must be a string');
    this._color = val;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
