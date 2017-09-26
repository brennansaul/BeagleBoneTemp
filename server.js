var http = require('http'); // require the http module
var fs = require('fs');


var server = http.createServer(function (req, res) {
  fs.readFile('temp.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
console.log('BBB Web Server running at http://10.62.147.13:8080/');
