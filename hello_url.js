<!--Jessica Anne - 2272031-->

var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path = q.query;
    let fileLocation;
    switch (path.menu) {
        case '/':
            fileLocation = 'pages/login.html';
            break;
        case 'login':
            fileLocation = 'pages/login.html';
            break;
        case 'register':
            fileLocation = 'pages/register.html';
            break;
        case 'home':
            fileLocation = 'pages/index.html';
            break;
        case 'books':
            fileLocation = 'pages/books.html';
            break;
        case 'users':
            fileLocation = 'pages/users.html';
            break;
        case 'settings':
            fileLocation = 'pages/settings.html';
            break;
        default:
            fileLocation = 'pages/login.html';
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
});
server.listen(8000);