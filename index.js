const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

// Set up express server here
const options = {
     cert: fs.readFileSync('./sslcert/fullchain.pem'),
     key: fs.readFileSync('./sslcert/privkey.pem')
};

// Favicon
app.use(favicon(path.join(__dirname, 'static', 'img', 'favicon.ico')));

// Redirect all http to https
http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(8080);
// Start server for https port 443
https.createServer(options, app).listen(8443);
//app.use(require('helmet')());

app.use('/static', express.static(__dirname + '/static'));

console.log('Started simple node server at https://suvankarmitra.com');

// Routing
app.get('/', (request, response) => {
  getStaticFileContent(response,'./static/home.html');
});

app.get('*',(req,res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host']});
    res.end();
});

function getStaticFileContent(res, filePath) {
  fs.readFile(filePath, function(error, data){
    if(error) {
      res.writeHead(500,{'Content-Type':'text/plain'});
      res.end('500 - Internal server error!');
    }
    if(data) {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    }
  });
}

