export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    this._size = value;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](s) {
    if (s === 'number') {
      return this._size;
    }
    if (s === 'string') {
      return this._location;
    }
    return this;
  }
}
