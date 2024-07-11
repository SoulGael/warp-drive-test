class Injector {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
    this.flux = 100;
    this.extraFlux = 99;
    this.overFlux = 0.0;
  }

  getDamage() {
    return this.damage;
  }

  setOverFlux(overFlux) {
    this.overFlux = overFlux;
  }

  getOverFlux() {
    return this.overFlux;
  }

  getFlux() {
    return this.flux;
  }

  getExtraFlux() {
    return this.extraFlux;
  }

  getOverflow() {
    return  this.overFlux - this.damage;
  }

  getName() {
    return this.name;
  }

  getIsOverFlow() {
    if (this.getOverflow() <= 100) {
      return 0;
    }else{
      return 1;
    }
  }
}

module.exports = Injector;
