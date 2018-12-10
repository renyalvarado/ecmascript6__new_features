/* eslint-env es6 */
'use strict';

const name = 'Kraftwerk';
const city = 'Düsseldorf';

/* Property Shorthand  */
const kraftwerk = { name, city };
console.log('Band:', kraftwerk);
console.log('--------------\n');

/* Method Properties */
let transEuropeExpress = {
  name: function () {
    return 'Trans-Europe Express';
  },
  released () {
    return 'March 1977';
  },
  * songs () {
    yield '"Europa Endlos';
    yield 'Spiegelsaal';
    yield 'Schaufensterpuppen';
    yield 'Trans Europa Express';
    yield 'Metall auf Metall';
    yield 'Abzug';
    yield 'Franz Schubert';
    yield 'Endlos Endlos';
  }
};
console.log(`Album: ${transEuropeExpress.name()}, released: ${transEuropeExpress.released()}`);
for (let song of transEuropeExpress.songs()) {
  console.log('song: ', song);
}
console.log('--------------\n');

/* Destructuring Assignment, Arrays */
const albums = ['Kraftwerk', 'Kraftwerk 2', 'Ralf und Florian', 'Autobahn', 'Radio-Activity', 'Trans-Europe Express',
  'The Man-Machine', 'Computer World', 'Electric Café', 'The Mix', 'Tour de France Soundtracks'];
let [, , , autobahn, radioActivity] = albums;
console.log('autobahn:', autobahn);
console.log('radioActivity:', radioActivity);
[autobahn, radioActivity] = [radioActivity, autobahn];
console.log('Changing values:');
console.log('autobahn:', autobahn);
console.log('radioActivity:', radioActivity);
const printAlbumsInfo = ([firstOne, secondOne]) => {
  console.log(`First album: ${firstOne}. Second album: ${secondOne}`);
};
printAlbumsInfo(albums);
console.log('--------------\n');

/* Destructuring Assignment, Objects */
const ralf = {
  fullName: 'Ralf Hütter',
  born: '20 August 1946',
  diet: 'vegetarianism',
  school: {
    name: 'Robert Schumann Hochschule',
    city: 'Düsseldorf'
  }
};
const { fullName, born, school: { name: schoolName }, interviews = 'none' } = ralf;
console.log(`Ralf. fullName: ${fullName}, born: ${born}, schoolName: ${schoolName}, interviews: ${interviews}`);
const printMemberInfo = ({ fullName, born }) => {
  console.log(`Member. fullName: ${fullName}, born: ${born}`);
};
printMemberInfo(ralf);
