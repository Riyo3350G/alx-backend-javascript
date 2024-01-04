import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  // eslint-disable-next-line class-methods-use-this
  set amount(val) {
    if (!Number.isInteger(val)) throw new TypeError('amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  // eslint-disable-next-line class-methods-use-this
  set currency(val) {
    if (!(val instanceof Currency)) throw new TypeError('currency must be a Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (!Number.isInteger(amount)) throw new TypeError('amount must be a number');
    if (!Number.isInteger(conversionRate)) throw new TypeError('conversionRate must be a number');
    return amount * conversionRate;
  }
}
