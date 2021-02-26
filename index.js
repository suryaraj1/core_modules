/* eslint-disable no-console */
// core modules :
// 1. path module
// 2. OS module
const path = require('path');
const os = require('os');

const myPath = '/mnt/d/learn-node/core_modules/index.js';

console.log(os.platform());
console.log(os.freemem());
console.log(os.cpus());
