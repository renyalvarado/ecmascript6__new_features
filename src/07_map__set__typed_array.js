/* eslint-env es6 */
'use strict';
/* Using Map.
  Advantages and disadvantages: https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373 */
const showHelloWorld = () => {
  return 'Hello World!';
};
const thing = {};
thing[showHelloWorld] = 'Good bye!';
console.log((thing[showHelloWorld]));
console.log('--------------\n');

const myMap = new Map();
myMap.set(showHelloWorld, '¡Hasta luego!');

console.log('Describing object "thing"');
for (let [key, value] of Object.entries(thing)) {
  console.log('key:', key);
  console.log('typeof key:', typeof key);
  console.log('value:', value);
  console.log('typeof value:', typeof value);
}
console.log('--------------\n');

console.log('Describing map "myMap"');
for (let [key, value] of myMap) {
  console.log('key:', key);
  console.log('typeof key:', typeof key);
  console.log('key(): ', key());
  console.log('value:', value);
  console.log('typeof value:', typeof value);
}
console.log('--------------\n');

/* Using Set */
const cities = new Set();
cities.add('Buenos Aires');
cities.add('Córdoba');
cities.add('Buenos Aires');
cities.add('Mendoza');
console.log('Cities');
for (let city of cities) {
  console.log(`city: ${city}`);
}
console.log('--------------\n');

/* Using typed arrays: http://2ality.com/2015/09/typed-arrays.html */
const myIntegers = new Int8Array(8);
myIntegers[0] = 32;
for (let myInt of myIntegers) {
  console.log(`myInt: ${myInt}`);
}
