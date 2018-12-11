/* eslint-env es6 */
'use strict';

class Stadium {
  constructor (name) {
    this.name = name;
  }

  toString () {
    return `Stadium: ${this.name}`;
  }
}

class FootballStadium extends Stadium {
  static get sport () {
    return 'Football';
  }

  constructor (name, location) {
    super(name);
    this._location = location;
  }

  get length () {
    return this._length;
  }
  set length (length) {
    this._length = length;
  }

  get width () {
    return this._width;
  }
  set width (width) {
    this._width = width;
  }

  get area () {
    return (this.length && this.width) ? (this.length * this.width) : undefined;
  }

  toString () {
    let msg = `${super.toString()}, location: ${this._location}`;
    msg += this.length ? `, length: ${this.length}m` : '';
    msg += this.width ? `, width: ${this.width}m` : '';
    msg += this.area ? `, area: ${this.area}m^2` : '';
    return msg;
  }
}

const bernabeu = new FootballStadium('Estadio Santiago Bernabéu', 'Madrid');
bernabeu.length = 105;
bernabeu.width = 68;
console.log(`${bernabeu}, sport: ${FootballStadium.sport}`);
