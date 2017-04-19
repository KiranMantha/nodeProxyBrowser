const http = require('http'),
    port = 3000;

http.createServer((req, res)=>{
    console.log(req);
    
   
   // Send the response body as "Hello World"
   res.end();

}).listen(port)
console.log('listening on port '+ port);
