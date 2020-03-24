const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    console.log('Request made');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('This server is running on hostname ' + hostname + ' and on port ' + port + '. This was created by Adalida Lewis');
});

// server.listen(port, hostname, () => {
//     console.log('Server running at http://${hostname}:{port}/');
// });

