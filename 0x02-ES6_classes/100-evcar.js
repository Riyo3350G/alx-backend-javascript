import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(val) {
    if (typeof val !== 'number') throw new TypeError('range must be a number');
    this._range = val;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}
