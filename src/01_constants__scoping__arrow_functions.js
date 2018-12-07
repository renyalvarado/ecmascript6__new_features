/* eslint no-inner-declarations: 0 */
/* eslint-env es6 */
'use strict';

// Immutable variable
const dogName = 'Bruno';
console.log('dogName: ', dogName);

const dogNames = ['Bruno', 'Max', 'Duke', 'Bobby'];
// i: Block-scoped variable
for (let i = 0; i < dogNames.length; i++) {
  console.log('dogNames(' + i + '):', dogNames[i]);
}
try {
  // eslint-disable-next-line no-undef
  console.log('i:', i);
  console.log('You should not be here!');
} catch (exception) {
  if (exception instanceof ReferenceError) {
    console.log('Referenced error:', exception.toString());
  } else {
    console.log('Other error:', exception.toString());
  }
}

/* Block scoped functions */
{
  // noinspection Annotator
  function level () { return 1; }
  console.log('level:', level());
  {
    // noinspection Annotator
    function level () { return 2; }
    console.log('level:', level());
  }
  console.log('level:', level());
}

/* Arrow functions */
const twoTimesDogNames = dogNames.map(name => name.repeat(2));
console.log('twoTimesDogNames', twoTimesDogNames);

dogNames.forEach(name => {
  if (name !== 'Max') {
    console.log(name + ' is not Max');
  }
});

const dog = {
  name: 'Bruno',
  makeNoise: function () {
    const sayMyName = function () {
      return 'My name is ' + this.name;
    };
    return sayMyName();
  },
  makeNoiseArrow: function () {
    const sayMyName = () => {
      return 'My name is ' + this.name;
    };
    return sayMyName();
  }
};
try {
  console.log('The dos is making noise: ', dog.makeNoise());
} catch (exception) {
  console.log('Houston, we got a problem!:', exception.toString());
}
console.log('The dos is making noise with arrow functions: ', dog.makeNoiseArrow());
