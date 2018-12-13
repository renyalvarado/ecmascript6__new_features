/* eslint-env es6 */
'use strict';
/* Metaprogramming */
const createProxy = (target) => {
  return new Proxy(target, {
    get (target, prop) {
      return target[prop] ? ` Original['${prop}']= ${target[prop]};` : `Original['${prop}']= 'No value'`;
    }
  });
};
const dog = {
  noise: 'Woof'
};
console.log('dog.noise:', dog.noise);
const proxyDog = createProxy(dog);
console.log('proxyDog.noise:', proxyDog.noise);
console.log('proxyDog.other:', proxyDog.other);
console.log('dog.name', dog.name);
Object.defineProperty(dog, 'name', { value: 'Bruno' });
console.log('dog.name', dog.name);

/* Collation */
const names = ['Álvaro', 'Antonio', 'Bruno'];
const spanishCollator = new Intl.Collator('es');
console.log(`names: `, names);
console.log(`default sorted names: `, names.sort());
console.log(`spanish sorted names: `, names.sort(spanishCollator.compare));

/* Internationalization & Localization
   It works in Chrome Version 71.0.3578.80(Official Build)(64-bit), but it doesn't work with Node.js 10 in Ubuntu 18.04.
   Fix: https://techoverflow.net/2018/09/19/fixing-nodejs-intl-datetimeformat-not-formatting-properly-for-locales/ */
const americanNumberFormat = new Intl.NumberFormat('en-US');
const argentineNumberFormat = new Intl.NumberFormat('es-AR');
const number = 42000000.74;
console.log(`number: ${number}; american format: ${americanNumberFormat.format(number)}`);
console.log(`number: ${number}; argentine format: ${argentineNumberFormat.format(number)}`);
const dolar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const argentinePeso = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });
console.log(`number: ${number}; dolar format: ${dolar.format(number)}`);
console.log(`number: ${number}; argentine peso format: ${argentinePeso.format(number)}`);
const americanDateTimeFormat = new Intl.DateTimeFormat('en-US');
const argentineDateTimeFormat = new Intl.DateTimeFormat('es-AR');
const now = new Date();
console.log(`now (american date): ${americanDateTimeFormat.format(now)}`);
console.log(`now (argentine date): ${argentineDateTimeFormat.format(now)}`);
