/* eslint-env es6 */
'use strict';

/* Default parameter values */
const halLine = (astronaut = 'Dave') => {
  return 'I \'m sorry ' + astronaut + '. I\'m afraid I can\'t do that.';
};
console.log(halLine());
console.log('--------------\n');

/* Rest parameters */
const showTheCrew = (...stooges) => {
  console.log('Look mom no "arguments"');
  stooges.forEach((stooge) => {
    console.log(stooge);
  });
};
console.log('The crew');
showTheCrew('HAL', 'Frank', 'Dave');
console.log('--------------\n');

/* Spread operator */
const spacecrafts = ['Aries Ib', 'Discovery One'];
// noinspection SpellCheckingInspection
const moreSpacecrafts = ['EVA Pod', 'Moonbus', ...spacecrafts];
console.log('Spacecrafts: ');
moreSpacecrafts.forEach((spacecraft) => {
  console.log(spacecraft);
});
console.log('--------------\n');

/* It works because a string is iterable */
const director = 'Stanley Kubrick';
const stanleyCharacters = [...director];
stanleyCharacters.forEach((character) => {
  console.log(character);
});
console.log('--------------\n');

/* String interpolation */
const film = {
  name: '2001: A Space Odyssey',
  director: 'Stanley Kubrick'
};
const toUpperCase = originalString => originalString.toUpperCase();
const filmInfo = `${toUpperCase(film.name)}
Directed by${': ' + film.director}`;
console.log(filmInfo);
console.log('--------------\n');

/* Tagged templates */
const genericFilmInfo = (strings, { name, director }) => {
  return `${name}
Directed by: ${director}`;
};
console.log(genericFilmInfo`${film}`);

/* Raw String */
console.log(String.raw`Raw string: A new line \n, a new tab \t, other text`);

/* Octal and binary literals */
console.log('The Binary Answer to the Ultimate Question of Life, the Universe, and Everything: ', 0b101010);
console.log('The Octal Answer to the Ultimate Question of Life, the Universe, and Everything: ', 0o52);

/* Unicode strings */
const hal = '💻HAL';
console.log(`Wrong length of "${hal}": ${hal.length}`);
console.log(`Right length of "${hal} using string iterator and spread operator": ${[...hal].length}`);

/*  Valid unicode variables: https://mathiasbynens.be/notes/javascript-identifiers-es6   */
// noinspection NonAsciiCharacters
const Πλάτων = 'Ἀριστοτέλης';
console.log(`My favourite philosopher is ${Πλάτων}`);

/* Testing regular expressions with Unicode: https://mathiasbynens.be/notes/es6-unicode-regex */
const crew = 'frank🚀dave';
console.log(`Testing regular expressions: ${crew} 
match ${'/frank.dave/'}: ${/frank.dave/.test(crew)}
match ${'/frank.dave/u'}: ${/frank.dave/u.test(crew)}`);
