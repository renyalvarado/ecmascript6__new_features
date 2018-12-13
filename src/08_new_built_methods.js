/* eslint-env es6 */
'use strict';

/* Object's methods */
const alpha = { one: 1 };
const beta = { two: 2 };
const alphabet = Object.assign({}, alpha, beta);
console.log('alphabet: ', alphabet);
console.log('--------------\n');

/* Array's methods */
const cities = ['Athens', 'Argos', 'Corinth', 'Sparta'];
console.log('cities: ', cities);
console.log('city (not Athens): ', cities.find(city => city !== 'Athens'));
console.log('index of cities (not Athens): ', cities.findIndex(city => city !== 'Athens'));
console.log('--------------\n');

/* String's methods */
const warName = 'Peloponnesian War';
console.log('Peloponnesian War x 3:', warName.repeat(3));
console.log(`warName starts with "Pelo"?:`, warName.startsWith('Pelo'));
console.log(`warName starts with "aaaaaaaaa"?:`, warName.startsWith('aaaaaaaaa'));
console.log(`warName ends with "ar"?:`, warName.endsWith('ar'));
console.log(`warName ends with "es"?:`, warName.endsWith('es'));
console.log(`warName includes with "ian W"?:`, warName.includes('ian W'));
console.log(`warName includes with "atg?:`, warName.includes('atg'));
console.log('--------------\n');

/* Number's methods */
console.log('Number.isNaN(2018): ', Number.isNaN(2018));
console.log('Number.isNaN(NaN): ', Number.isNaN(NaN));
console.log('Number.isFinite(2018): ', Number.isFinite(2018));
console.log('Number.isFinite(Infinity): ', Number.isFinite(Infinity));
console.log('Number.isSafeInteger(2018): ', Number.isSafeInteger(2018));
const bigNumber = Math.pow(2, 53);
console.log(`Number.isSafeInteger(${bigNumber}): ${Number.isSafeInteger(bigNumber)}`);
console.log(`Smallest floating point number:Number.EPSILON = ${Number.EPSILON}`);
console.log(`Math.sign(1) = ${Math.sign(1)}`);
console.log(`Math.sign(-1) = ${Math.sign(-1)}`);
console.log(`Math.sign(0) = ${Math.sign(0)}`);
console.log(`Math.sign(-0) = ${Math.sign(-0)}`);
console.log(`Math.sign(NaN) = ${Math.sign(NaN)}`);
console.log(`Math.sign(Infinity) = ${Math.sign(Infinity)}`);
console.log('--------------\n');
