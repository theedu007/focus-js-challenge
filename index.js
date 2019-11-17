const express = require('express');
const server = express();
const path = require('path');

server.use(express.static(path.join(__dirname + '/public')));

server.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

server.listen("5000");