// Simple Local Web Server with NodeJS
const http = require('http');
// Create Server Object
http.createServer(function (req, res){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Hello Yellow World!'); // write a responnse to the client
        res.end(); // End the response 
}).listen(8080); // the Server object goes live into port 8080 

