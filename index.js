const express = require('express');
const server = express();
const path = require('path');
const {buildJSON } = require('./src/buildJSON');


server.use(express.static(path.join(__dirname + '/public')));

server.get('/',async (request, response) => {
    const data = await buildJSON();
    response.sendFile(path.join(__dirname + '/html/index.html'));
});

server.listen("5000");