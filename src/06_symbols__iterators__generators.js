/* eslint-env es6 */
'use strict';
const metadata = Symbol('metadata');
const symbolsComparation = Symbol('metadata') === Symbol('metadata');
/* Every time you call Symbol it creates a different symbol */
console.log(`(Symbol('metadata') === Symbol('metadata')) ===  ${symbolsComparation}`);
console.log('--------------\n');

const language = {
  name: 'JavaScript',
  designedBy: 'Brendan Eich',
  [metadata]: 'V8, JavaScriptCore, Rhino, SpiderMonkey, Chakra'
};
/* We can use Symbols in order to create metadata */
console.log(Object.getOwnPropertyNames(language));
console.log(Object.getOwnPropertySymbols(language));
console.log('--------------\n');

/* Global symbols */
const globalSymbolsComparation = Symbol.for('metadata') === Symbol.for('metadata');
/* Every time you call Symbol it creates a different symbol */
console.log(`(Symbol.for('metadata') === Symbol.for('metadata')) ===  ${globalSymbolsComparation}`);
console.log('--------------\n');

/* Using symbols in order to create iterators */
const joyDivision = {
  compilationAlbums: [ 'Still', 'Substance', 'Peel Sessions', 'Warsaw', 'Permanent', 'Heart and Soul',
    'The Complete BBC Recordings', 'Martin Hannett\'s Personal Mixes',
    'The Best of Joy Division Total: From Joy Division to New Order'],
  [Symbol.iterator] () {
    let i = 0;
    const container = this;
    return {
      next () {
        if (i >= container.compilationAlbums.length) {
          return { done: true };
        }
        return { done: false, value: container.compilationAlbums[i++] };
      }
    };
  }
};
console.log('Joy Division\'s compilation albums:');
for (let album of joyDivision) {
  console.log(`album: ${album}`);
}
console.log('--------------\n');

/* Generator method */
const newOrder = {
  albums: ['Movement', 'Power, Corruption & Lies', 'Low-Life', 'Brotherhood', 'Technique',
    'Republic', 'Get Ready', 'Waiting for the Sirens\' Call', 'Lost Sirens', 'Music Complete'],
  * [Symbol.iterator] () {
    for (let i = 0; i < this.albums.length; i++) {
      yield this.albums[i];
    }
  }
};
console.log('New Order\'s albums:');
for (let album of newOrder) {
  console.log(`album: ${album}`);
}
