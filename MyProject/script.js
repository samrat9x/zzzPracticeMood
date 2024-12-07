const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Pyhance');
        res.write('\n How are you today');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page');
        res.end();
    } else {
        res.write('NOT FOUND');
        res.end();
    }
});
// server.on('connection', (socket) => {
//     console.log('new connection is processed');
// });
console.log('listening on port 3000');
server.listen(3000);
