export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) throw Error('Class extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (!Number.isInteger(val)) throw new TypeError('sqft must be an integer');
    this._sqft = val;
  }
}
