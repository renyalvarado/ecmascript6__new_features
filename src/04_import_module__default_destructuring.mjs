/* eslint-env es6 */
'use strict';
import topic, { author, almaMater } from './04_export_module';

/* Running with --experimental-modules flag in Node.js */
console.log(`topic: ${topic}; author's name: ${author.penName}, almaMater: ${almaMater()}`);
