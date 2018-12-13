/* eslint-env es6 */
'use strict';

/* Promise API */
const genericErrorHandle = (error) => {
  console.error(error.message);
};
const promiseOkTimer100 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello Promise');
  }, 100);
});
const promiseKoTimer50 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Hello Fail Promise'));
  }, 50);
});
promiseOkTimer100.then(console.log, genericErrorHandle);
promiseKoTimer50.then(console.log, genericErrorHandle);
console.log('First message');

const promise1Sec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1Sec');
  }, 1000);
});
const promise2Sec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2Sec');
  }, 2000);
});
Promise.all([promise1Sec, promise2Sec]).then(console.log, genericErrorHandle);

const promiseResolvingNow = Promise.resolve('Resolving now');
promiseResolvingNow.then(console.log, console.error);
const promiseRejectingNow = Promise.reject(new Error('Rejecting now'));
promiseRejectingNow.then(console.log, genericErrorHandle);
