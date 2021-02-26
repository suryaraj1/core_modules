/* eslint-disable no-console */
// core modules :
// 1. path module
// 2. OS module
// 3. fileSystem module
const os = require('os');
const fs = require('fs');
const path = require('path');

// console.log(os.platform());
// console.log(os.freemem());
// console.log(os.cpus().length);
fs.writeFileSync('myfile.txt', 'Hello Node');
fs.appendFileSync('myfile.txt', ' Hello how are you?');
// use async node.js as much as possible
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});

console.log('hello node');
