const express = require('express');
const server = express();
const path = require('path');
const {buildJSON } = require('./src/buildJSON');


server.use(express.static(path.join(__dirname + '/public')));

server.get('/',(request, response) => {
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

server.get('/data', async (request, response) => {
    const data = await buildJSON();
    response.send(data);
});

server.listen("5000");