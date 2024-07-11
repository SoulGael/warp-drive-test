const Injector = require('./Injector');

class Engine {
  constructor(v_luz) {
    this.v_luz = v_luz;
    this.totalFlux = 300;
    this.inyectorArray = [];
    this.damageOfInyectors = 0;
  }

  newInyectors(damageA, damageB, damageC) {
    if (Number.isInteger(damageA) && Number.isInteger(damageB) && Number.isInteger(damageC)) {
      this.inyectorArray.push(new Injector("A", damageA));
      this.inyectorArray.push(new Injector("B", damageB));
      this.inyectorArray.push(new Injector("C", damageC));
    } else {
      console.log("Ingrese números para los daños");
    }
  }

  calDamageOfInyectors() {
    for (let index = 0; index < this.inyectorArray.length; index++) {
      this.damageOfInyectors = this.damageOfInyectors + this.inyectorArray[index].getDamage();
    }
  }

  calOverFlux() {
    let overFlux = (((3 * this.v_luz) + this.damageOfInyectors) / 3);
    this.inyectorArray.forEach(injector => injector.setOverFlux(overFlux));
  }

  getTime(valid) {
    if (valid == 0) {
      return 0;
    } else {
      let sumExtraflux = 0;
      for (let index = 0; index < this.inyectorArray.length; index++) {
        sumExtraflux = this.inyectorArray[index].getExtraFlux() - (this.inyectorArray[index].getIsOverFlow() * (this.inyectorArray[index].getOverFlux() - this.inyectorArray[index].getFlux() - 1));
      }
      let time = sumExtraflux;
      return time;
    }
  }

  calculateFluxOfOperation() {
    if (this.sumOverFlow() < 3 * this.v_luz) {
      return "Unable to comply\n" + "Operating time: " + this.getTime(0);
    }

    this.inyectorArray.forEach(injector => {
      console.log(`${injector.getName()}: ${injector.getOverflow().toFixed(2)} mg/s`);
    });

    if (this.validateTimeOfInyector() === 1) {
      return "Operating time: infinito";
    } else {
      return `Operating time: ${this.getTime(1)} min`;
    }
  }

  sumOverFlow() {
    let sumOverFlow = this.inyectorArray.reduce((sum, injector) => 
      sum + Math.floor(injector.getOverflow() * 100) / 100, 0.00);
    return sumOverFlow;
  }

  validateTimeOfInyector() {
    let allWithinLimit = this.inyectorArray.every(injector => injector.getOverflow() <= injector.getFlux());
    return allWithinLimit ? 1 : 0;
  }
}

module.exports = Engine;
