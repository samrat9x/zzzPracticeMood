const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(
        `${__dirname}/randomtext.txt`,
        'utf8',
    );
    myReadStream.pipe(res);
});

server.listen(3000, (e) => {
    console.log('Server is ready and listening on port 3000');
});
