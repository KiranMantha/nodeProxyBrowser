const http = require('http'),
    port = 3000,
    request = require('request'),
    proxy = 'http://localhost:'+ port;

http.createServer((req, res) => {
    //console.log(req);

    // Send the response body as "Hello World"
    request({
        'url': 'http://google.com/',
        'proxy': proxy
    }).pipe(res);

}).listen(port)
console.log('listening on port ' + port);