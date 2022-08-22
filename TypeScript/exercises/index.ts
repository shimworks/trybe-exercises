import * as ex from './exercises';

console.log(ex.greeter('Maria'));
console.log(ex.personAge('Maria', 40));
console.log(`A soma do array é igual a ${ex.sumArray([3, 6, 9])}`);

console.log(`Triangulo de base 10cm e altura 25cm: ${ex.triangle(10, 25)}cm2`);
console.log(`Triangulo de base 5cm e altura 30cm: ${ex.triangle(5, 30)}cm2`);
console.log(`Triangulo de base 100cm e altura 200cm: ${ex.triangle(100, 200)}cm2`);

console.log(`Quadrado de lado 10cm ${ex.square(10)}cm2`);
console.log(`Quadrado de lado 5cm ${ex.square(5)}cm2`);
console.log(`Quadrado de lado 100cm ${ex.square(100)}cm2`);

console.log(`Retângulo de base 10cm e altura 25cm: ${ex.rectangle(10, 25)}cm2`);
console.log(`Retângulo de base 5cm e altura 30cm: ${ex.rectangle(5, 30)}cm2`);
console.log(`Retângulo de base 100cm e altura 200cm: ${ex.rectangle(100, 200)}cm2`);

