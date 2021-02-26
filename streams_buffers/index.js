/* eslint-disable no-console */
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /><button>Submit</button></form></body>',
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.write('Thank you for submitting');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(8000);

console.log('Server is listening on port 8000');

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
// });

// console.log('hello');
