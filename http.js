/* eslint-disable no-console */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello node');
        res.write(' Hello node, how are you?');
        res.end();
    } else if (req.url === '/about') {
        res.write('I am Suryaraj Bhaduri');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('Server is listening on port 3000');
