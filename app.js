//Matthew Threader - 101034977
//IMD3901 - Assignment 2

//////////////////////////////////////
////TAKEN DIRECTLY FROM TUTORIAL//////
//////////////////////////////////////

//app setup
const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);

//const vars
const LISTEN_PORT = 8080;

//middleware
app.use(express.static(__dirname + '/public'));

//set routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

//!!TRY: create another route to point to another web page

//start server
server.listen(LISTEN_PORT);
console.log('Listening on port: ' + LISTEN_PORT );