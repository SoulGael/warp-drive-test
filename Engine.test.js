const Engine = require('./Engine');

test('Caso 1', () => {
  const engine = new Engine(100);
  engine.newInyectors(0, 0, 0);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: infinito");
});

test('Caso 2', () => {
  const engine = new Engine(90);
  engine.newInyectors(0, 0, 0);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: infinito");
});

test('Caso 3', () => {
  const engine = new Engine(30);
  engine.newInyectors(0, 0, 0);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: infinito");
});

test('Caso 4', () => {
  const engine = new Engine(100);
  engine.newInyectors(20, 10, 0);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: 90 min");
});

test('Caso 5', () => {
  const engine = new Engine(80);
  engine.newInyectors(0, 0, 100);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: 	80 min");
});

test('Caso 6', () => {
  const engine = new Engine(150);
  engine.newInyectors(0, 0, 0);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: 50 min");
});

test('Caso 7', () => {
  const engine = new Engine(140);
  engine.newInyectors(0, 0, 30);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Operating time: 50 min");
});

test('Caso 8', () => {
  const engine = new Engine(170);
  engine.newInyectors(20, 50, 40);
  engine.calDamageOfInyectors();
  engine.calOverFlux();
  const result = engine.calculateFluxOfOperation();
  expect(result).toBe("Unable to comply\nOperating time: 0");
});
