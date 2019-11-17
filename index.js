const express = require('express');
const server = express();

server.get('/',(request, response) => {
    response.send(":D");
})

server.listen("5000");