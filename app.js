const readline = require('readline');
const Engine = require('./Engine');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Daño inyector A (%): ', (damageA) => {
  rl.question('Daño inyector B (%): ', (damageB) => {
    rl.question('Daño inyector C (%): ', (damageC) => {
      rl.question('Porcentaje de la velocidad de la luz: ', (speedPercentage) => {

        damageA = parseInt(damageA);
        damageB = parseInt(damageB);
        damageC = parseInt(damageC);
        speedPercentage = parseInt(speedPercentage);

        const engine = new Engine(speedPercentage);
        engine.newInyectors(damageA, damageB, damageC);
        engine.calDamageOfInyectors();
        engine.calOverFlux();

        const result = engine.calculateFluxOfOperation();
        console.log(result);

        rl.close();
      });
    });
  });
});
